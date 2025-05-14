import React, { useEffect, useRef, useState } from 'react';
import { isElementInViewport } from '../../lib/utils';
import { Card } from '../ui/Card';
import { Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current && isElementInViewport(sectionRef.current, 100)) {
        setIsVisible(true);
      }
    };
    
    // Initial check
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Auto-rotate testimonials
  useEffect(() => {
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isVisible]);
  
  const testimonials = [
    {
      quote: "The clothing donation from SparkCreatives helped me secure a job. I finally had something professional to wear to interviews.",
      name: "Juan Dela Cruz",
      location: "Cebu City",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "After the typhoon, we lost everything. The clothing donations gave my children comfort during a difficult time. Thank you for your kindness.",
      name: "Maria Santos",
      location: "Tacloban City",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      quote: "As a teacher in a rural area, I've seen how proper school uniforms boost children's confidence and attendance. Your donations make a real difference.",
      name: "Roberto Reyes",
      location: "Batangas Province",
      image: "https://randomuser.me/api/portraits/men/67.jpg"
    }
  ];
  
  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 bg-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 
            className={`text-3xl md:text-4xl font-bold mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Stories of <span className="text-brand-orange">Impact</span>
          </h2>
          
          <p 
            className={`text-lg text-gray-600 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Hear from the people whose lives have been transformed through your generous clothing donations.
          </p>
        </div>
        
        {/* Desktop Testimonials */}
        <div className="hidden md:block">
          <div className="grid grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className={`p-8 transition-all duration-700 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                } ${
                  activeIndex === index 
                    ? 'border-brand-blue shadow-lg scale-105 z-10' 
                    : 'border-gray-200 opacity-75 scale-100'
                }`}
                style={{ transitionDelay: `${500 + index * 200}ms` }}
              >
                <Quote className="w-10 h-10 text-brand-blue/20 mb-4" />
                
                <blockquote className="text-gray-700 mb-6">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full mx-1 transition-all ${
                  activeIndex === index ? 'bg-brand-blue scale-125' : 'bg-gray-300'
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Mobile Testimonial Carousel */}
        <div className="md:hidden">
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <Card className="p-6">
                      <Quote className="w-8 h-8 text-brand-blue/20 mb-4" />
                      
                      <blockquote className="text-gray-700 mb-6 text-sm">
                        "{testimonial.quote}"
                      </blockquote>
                      
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <div>
                          <div className="font-semibold text-sm">{testimonial.name}</div>
                          <div className="text-xs text-gray-500">{testimonial.location}</div>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full mx-1 transition-all ${
                    activeIndex === index ? 'bg-brand-blue scale-125' : 'bg-gray-300'
                  }`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
