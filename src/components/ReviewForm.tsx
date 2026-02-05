import { useState } from 'react';
import { Star, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

interface ReviewFormProps {
  onSubmit: (review: {
    name: string;
    location: string;
    rating: number;
    text: string;
    service: string;
  }) => void;
  onClose: () => void;
}

const services = [
  'Home Deep Cleaning',
  'Sofa Cleaning',
  'Car Cleaning',
  'Bathroom Cleaning',
  'Chimney Cleaning',
  'Oven Cleaning',
  'Curtain Cleaning'
];

const ReviewForm = ({ onSubmit, onClose }: ReviewFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    rating: 0,
    text: '',
    service: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.location || !formData.rating || !formData.text || !formData.service) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    onSubmit(formData);
    setIsSubmitting(false);
    
    // Show success message
    toast.success('Review saved successfully!', {
      description: 'Your review has been saved and will persist across page refreshes. Thank you for your feedback!'
    });
    
    onClose();
    
    // Reset form
    setFormData({
      name: '',
      location: '',
      rating: 0,
      text: '',
      service: ''
    });
  };

  const handleRatingClick = (rating: number) => {
    setFormData(prev => ({ ...prev, rating }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-[#1e293b] mb-2">Share Your Experience</h3>
        <p className="text-[#64748b]">Help others by sharing your review of our services</p>
        <div className="mt-2 text-xs text-[#10b981] bg-[#10b981]/10 px-3 py-1 rounded-full inline-block">
          Your review will be saved and visible to other customers
        </div>
      </div>

      {/* Name */}
      <div className="space-y-2">
        <Label htmlFor="name" className="text-[#1e293b] font-medium">Your Name</Label>
        <Input
          id="name"
          type="text"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          className="border-[#e2e8f0] focus:border-[#0ea5e9] focus:ring-[#0ea5e9]"
        />
      </div>

      {/* Location */}
      <div className="space-y-2">
        <Label htmlFor="location" className="text-[#1e293b] font-medium">Location</Label>
        <Input
          id="location"
          type="text"
          placeholder="Enter your city"
          value={formData.location}
          onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
          className="border-[#e2e8f0] focus:border-[#0ea5e9] focus:ring-[#0ea5e9]"
        />
      </div>

      {/* Service */}
      <div className="space-y-2">
        <Label className="text-[#1e293b] font-medium">Service Used</Label>
        <Select value={formData.service} onValueChange={(value) => setFormData(prev => ({ ...prev, service: value }))}>
          <SelectTrigger className="border-[#e2e8f0] focus:border-[#0ea5e9] focus:ring-[#0ea5e9]">
            <SelectValue placeholder="Select the service you used" />
          </SelectTrigger>
          <SelectContent>
            {services.map((service) => (
              <SelectItem key={service} value={service}>
                {service}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Rating */}
      <div className="space-y-2">
        <Label className="text-[#1e293b] font-medium">Rating</Label>
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => handleRatingClick(star)}
              className="transition-colors hover:scale-110 transform duration-200"
            >
              <Star
                className={`w-8 h-8 ${
                  star <= formData.rating
                    ? 'text-[#f59e0b] fill-[#f59e0b]'
                    : 'text-[#e2e8f0] hover:text-[#f59e0b]'
                }`}
              />
            </button>
          ))}
          <span className="ml-2 text-[#64748b]">
            {formData.rating > 0 && `${formData.rating} star${formData.rating > 1 ? 's' : ''}`}
          </span>
        </div>
      </div>

      {/* Review Text */}
      <div className="space-y-2">
        <Label htmlFor="review" className="text-[#1e293b] font-medium">Your Review</Label>
        <Textarea
          id="review"
          placeholder="Share your experience with our service..."
          value={formData.text}
          onChange={(e) => setFormData(prev => ({ ...prev, text: e.target.value }))}
          className="border-[#e2e8f0] focus:border-[#0ea5e9] focus:ring-[#0ea5e9] min-h-[120px] resize-none"
          maxLength={500}
        />
        <div className="text-right text-sm text-[#64748b]">
          {formData.text.length}/500 characters
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex gap-3 pt-4">
        <Button
          type="button"
          variant="outline"
          onClick={onClose}
          className="flex-1 border-[#e2e8f0] text-[#64748b] hover:bg-[#f8fafc]"
          disabled={isSubmitting}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          className="flex-1 bg-gradient-to-r from-[#0ea5e9] to-[#10b981] hover:from-[#0284c7] hover:to-[#059669] text-white"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Submitting...
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Send className="w-4 h-4" />
              Submit Review
            </div>
          )}
        </Button>
      </div>
    </form>
  );
};

export default ReviewForm;