import { useState, useEffect } from 'react';
import { Star, Quote, Plus } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import ReviewForm from '@/components/ReviewForm';
import { reviewStorage } from '@/lib/reviewStorage';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
}

const initialTestimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Meera Shah',
    location: 'Vadodara',
    rating: 5,
    text: 'Outstanding sofa cleaning service! They removed years of stains and made my old sofa look completely new. The staff was punctual and very professional.',
    service: 'Sofa Cleaning'
  },
  {
    id: 2,
    name: 'Kiran Patel',
    location: 'Vadodara',
    rating: 5,
    text: 'Excellent deep cleaning for my entire house. They cleaned every corner thoroughly and used safe products. My family is very happy with the results.',
    service: 'Home Deep Cleaning'
  },
  {
    id: 3,
    name: 'Ravi Desai',
    location: 'Vadodara',
    rating: 5,
    text: 'Best car cleaning service in Vadodara! My car interior and exterior both look brand new. They pay attention to every detail. Highly recommended!',
    service: 'Car Cleaning'
  }
];

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Load testimonials from localStorage on component mount
  useEffect(() => {
    const loadTestimonials = () => {
      try {
        const savedReviews = reviewStorage.loadReviews();
        // Combine saved reviews with initial testimonials
        const combinedReviews = [...savedReviews, ...initialTestimonials];
        setTestimonials(combinedReviews);
      } catch (error) {
        console.error('Error loading reviews:', error);
        setTestimonials(initialTestimonials);
      }
    };

    loadTestimonials();
  }, []);

  const handleAddReview = (newReview: Omit<Testimonial, 'id'>) => {
    const review: Testimonial = {
      ...newReview,
      id: Date.now() // Simple ID generation
    };
    
    // Add to state
    setTestimonials(prev => [review, ...prev]);
    
    // Save to localStorage
    reviewStorage.addReview(review);
    
    // Scroll to testimonials section to show the new review
    setTimeout(() => {
      const element = document.getElementById('testimonials');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-[#f0f9ff] to-[#ecfdf5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#f59e0b]/10 text-[#f59e0b] text-sm font-medium rounded-full mb-4">
            Customer Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e293b] mb-4">
            What Our Customers Say
          </h2>
          <p className="text-[#64748b] text-lg mb-8 max-w-2xl mx-auto">
            Read genuine reviews from our satisfied customers and share your own experience
          </p>
          
          {/* Add Review Button */}
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-[#0ea5e9] to-[#10b981] hover:from-[#0284c7] hover:to-[#059669] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                <Plus className="w-5 h-5 mr-2" />
                Add Your Review
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
              <ReviewForm 
                onSubmit={handleAddReview}
                onClose={() => setIsDialogOpen(false)}
              />
            </DialogContent>
          </Dialog>
        </div>

        {/* Testimonials Grid */}
        {testimonials.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.id}
                className={`border border-[#e2e8f0] shadow-sm hover:shadow-md transition-all duration-300 bg-white relative rounded-xl ${
                  index === 0 && testimonial.id > 1000000000 ? 'ring-2 ring-[#10b981] ring-opacity-30' : ''
                }`}
              >
                {/* New Review Badge */}
                {index === 0 && testimonial.id > 1000000000 && (
                  <div className="absolute -top-2 -right-2 bg-[#10b981] text-white text-xs font-bold px-2 py-1 rounded-md shadow-sm">
                    NEW
                  </div>
                )}
                
                <CardContent className="p-5">
                  {/* Customer Avatar */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#0ea5e9] to-[#10b981] text-white font-bold text-sm mb-3">
                    {testimonial.name.charAt(0)}
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#f59e0b] fill-[#f59e0b]" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-[#64748b] mb-4 leading-relaxed text-sm">
                    "{testimonial.text}"
                  </p>

                  {/* Service Tag */}
                  <div className="inline-block px-2 py-1 bg-[#4ade80]/10 text-[#16a34a] text-xs font-medium rounded mb-4">
                    {testimonial.service}
                  </div>

                  {/* Customer Info */}
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#0ea5e9] flex items-center justify-center text-white font-bold text-xs">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-[#1e293b] text-sm">{testimonial.name}</div>
                      <div className="text-xs text-[#64748b]">{testimonial.location}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Quote className="w-16 h-16 text-[#e2e8f0] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#1e293b] mb-2">No Reviews Yet</h3>
            <p className="text-[#64748b] mb-6">Be the first to share your experience with our services!</p>
          </div>
        )}

        {/* Stats Section */}
        {testimonials.length > 0 && (
          <div className="mt-16 text-center">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-[#1e293b]">{testimonials.length}</div>
                <div className="text-[#64748b]">Total Reviews</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-[#1e293b]">
                  {(testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length).toFixed(1)}
                </div>
                <div className="text-[#64748b]">Average Rating</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-[#1e293b]">
                  {testimonials.filter(t => t.rating === 5).length}
                </div>
                <div className="text-[#64748b]">5-Star Reviews</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
