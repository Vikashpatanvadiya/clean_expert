import { useState } from 'react';

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<React.ReactNode>(null);

  const openModal = (modalContent: React.ReactNode) => {
    setContent(modalContent);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    setContent(null);
    document.body.style.overflow = 'unset';
  };

  return {
    isOpen,
    content,
    openModal,
    closeModal,
  };
};