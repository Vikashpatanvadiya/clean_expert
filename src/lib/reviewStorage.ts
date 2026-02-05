interface Review {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
}

const STORAGE_KEY = 'customerReviews';

export const reviewStorage = {
  // Save reviews to localStorage
  saveReviews: (reviews: Review[]): boolean => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
      return true;
    } catch (error) {
      console.error('Error saving reviews to localStorage:', error);
      return false;
    }
  },

  // Load reviews from localStorage
  loadReviews: (): Review[] => {
    try {
      const savedReviews = localStorage.getItem(STORAGE_KEY);
      return savedReviews ? JSON.parse(savedReviews) : [];
    } catch (error) {
      console.error('Error loading reviews from localStorage:', error);
      return [];
    }
  },

  // Add a single review
  addReview: (review: Review): boolean => {
    try {
      const existingReviews = reviewStorage.loadReviews();
      const updatedReviews = [review, ...existingReviews];
      return reviewStorage.saveReviews(updatedReviews);
    } catch (error) {
      console.error('Error adding review:', error);
      return false;
    }
  },

  // Clear all reviews (useful for development/testing)
  clearReviews: (): boolean => {
    try {
      localStorage.removeItem(STORAGE_KEY);
      return true;
    } catch (error) {
      console.error('Error clearing reviews:', error);
      return false;
    }
  },

  // Get total number of saved reviews
  getReviewCount: (): number => {
    return reviewStorage.loadReviews().length;
  }
};