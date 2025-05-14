import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/80 to-brand-purple/80 mix-blend-multiply" />
        <img 
          src="/src/assets/hero-background-enhanced.jpg" 
          alt="Children receiving clothing donations" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 md:py-24">
        <div className="max-w-3xl">
          <h1 
            className={`text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Transforming Lives Through <span className="text-brand-orange">Clothing Donations</span>
          </h1>
          
          <p 
            className={`text-lg sm:text-xl text-white/90 mb-8 max-w-2xl transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Join our mission to provide dignity and opportunity to underserved communities across the Philippines through quality clothing donations.
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
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
              Learn More
            </Button>
          </div>
          
          <div 
            className={`mt-12 flex items-center space-x-6 transition-all duration-700 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl font-bold text-white">50K+</span>
              <span className="text-sm text-white/80">Lives Impacted</span>
            </div>
            
            <div className="h-12 w-px bg-white/30" />
            
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl font-bold text-white">100+</span>
              <span className="text-sm text-white/80">Communities</span>
            </div>
            
            <div className="h-12 w-px bg-white/30 hidden sm:block" />
            
            <div className="flex flex-col items-center hidden sm:flex">
              <span className="text-3xl sm:text-4xl font-bold text-white">10+</span>
              <span className="text-sm text-white/80">Years of Service</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10" />
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 hidden md:block">
        <div className="w-8 h-12 border-2 border-white rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-3 bg-white rounded-full animate-bounce-subtle" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
