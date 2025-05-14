import React, { useEffect, useRef, useState } from 'react';
import { isElementInViewport } from '../../lib/utils';
import { Package, Truck, Users, Check } from 'lucide-react';

const DonationProcess: React.FC = () => {
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
  
  const steps = [
    {
      icon: <Package className="w-8 h-8 text-brand-blue" />,
      title: "Prepare Your Donation",
      description: "Sort and clean gently used clothing items. We accept all sizes and styles in good condition.",
      delay: 300
    },
    {
      icon: <Truck className="w-8 h-8 text-brand-orange" />,
      title: "Schedule a Pickup",
      description: "Request a free pickup online or drop off your donations at one of our convenient locations.",
      delay: 500
    },
    {
      icon: <Check className="w-8 h-8 text-brand-green" />,
      title: "We Sort & Process",
      description: "Our team carefully sorts, categorizes, and prepares your donations for distribution.",
      delay: 700
    },
    {
      icon: <Users className="w-8 h-8 text-brand-purple" />,
      title: "Community Distribution",
      description: "Your donations reach those who need them most through our network of community partners.",
      delay: 900
    }
  ];
  
  return (
    <section 
      ref={sectionRef}
      id="donate" 
      className="py-16 md:py-24 bg-gray-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-20 bg-wave-pattern opacity-5 transform rotate-180" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 
            className={`text-3xl md:text-4xl font-bold mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            How the <span className="text-brand-orange">Donation</span> Process Works
          </h2>
          
          <p 
            className={`text-lg text-gray-600 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Making a clothing donation is simple and rewarding. Follow these easy steps to help make a difference in someone's life.
          </p>
        </div>
        
        {/* Desktop Process Steps */}
        <div className="hidden md:block relative mb-16">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-4 gap-6 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${step.delay}ms` }}
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center mb-6 border-4 border-white">
                    {step.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-center">{step.title}</h3>
                  
                  <p className="text-gray-600 text-center">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Mobile Process Steps */}
        <div className="md:hidden space-y-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`flex items-start transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center mr-4 flex-shrink-0">
                {step.icon}
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div 
          className={`mt-16 bg-white p-8 rounded-xl shadow-md max-w-3xl mx-auto border border-gray-100 transition-all duration-700 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{ transitionDelay: '1100ms' }}
        >
          <h3 className="text-xl font-semibold mb-4 text-center">What We Accept</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Clothing</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Shirts & T-shirts</li>
                <li>• Pants & Jeans</li>
                <li>• Dresses & Skirts</li>
                <li>• Children's Clothing</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Accessories</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Shoes & Sandals</li>
                <li>• Bags & Backpacks</li>
                <li>• Belts & Hats</li>
                <li>• Scarves & Ties</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg sm:col-span-2 md:col-span-1">
              <h4 className="font-medium mb-2">Special Items</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• School Uniforms</li>
                <li>• Professional Attire</li>
                <li>• Maternity Clothing</li>
                <li>• Baby Essentials</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationProcess;
