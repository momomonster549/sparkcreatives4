import React, { useEffect, useRef, useState } from 'react';
import { isElementInViewport } from '../../lib/utils';
import { Button } from '../ui/Button';
import { ArrowRight, Heart } from 'lucide-react';

const CallToAction: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
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
  
  return (
    <section 
      ref={sectionRef}
      id="get-involved" 
      className="py-16 md:py-24 bg-brand-blue relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div 
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <div className="flex items-center mb-6">
                <Heart className="w-8 h-8 text-brand-orange mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Join Our Mission
                </h2>
              </div>
              
              <p className="text-white/90 text-lg mb-8">
                There are many ways to get involved and make a difference. Whether you donate clothing, volunteer your time, or spread the word, your support helps transform lives.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <h3 className="font-semibold text-white mb-2">Donate Clothing</h3>
                  <p className="text-white/80 text-sm">
                    Your gently used clothing can provide dignity and opportunity to someone in need.
                  </p>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <h3 className="font-semibold text-white mb-2">Volunteer With Us</h3>
                  <p className="text-white/80 text-sm">
                    Help sort donations, organize events, or assist with distribution in communities.
                  </p>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <h3 className="font-semibold text-white mb-2">Corporate Partnerships</h3>
                  <p className="text-white/80 text-sm">
                    Engage your company in meaningful CSR through clothing drives or sponsorships.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button 
                  variant="primary" 
                  size="lg"
                  className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold btn-shine"
                  icon={<ArrowRight className="w-5 h-5" />}
                  iconPosition="right"
                >
                  Donate Now
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                >
                  Volunteer
                </Button>
              </div>
            </div>
            
            <div 
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                <div className="p-6 md:p-8">
                  <h3 className="text-xl font-bold mb-6 text-gray-900">Get Involved Today</h3>
                  
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="first-name"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="last-name"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">
                        I'm interested in:
                      </label>
                      <select
                        id="interest"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue"
                      >
                        <option value="">Select an option</option>
                        <option value="donate">Donating Clothing</option>
                        <option value="volunteer">Volunteering</option>
                        <option value="corporate">Corporate Partnership</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <Button 
                      variant="primary" 
                      className="w-full bg-brand-blue"
                      type="submit"
                    >
                      Submit
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
