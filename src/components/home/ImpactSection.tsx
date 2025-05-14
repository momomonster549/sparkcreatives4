import React, { useEffect, useRef, useState } from 'react';
import { isElementInViewport } from '../../lib/utils';
import { Button } from '../ui/Button';
import { ExternalLink } from 'lucide-react';

const ImpactSection: React.FC = () => {
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
  
  const impactStats = [
    { number: "200,000+", label: "Clothing Items Donated" },
    { number: "50,000+", label: "Lives Impacted" },
    { number: "100+", label: "Community Partners" },
    { number: "25+", label: "Provinces Reached" }
  ];
  
  return (
    <section 
      ref={sectionRef}
      id="impact" 
      className="py-16 md:py-24 bg-gradient-to-br from-brand-blue to-brand-purple text-white relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-wave-pattern opacity-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 
            className={`text-3xl md:text-4xl font-bold mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Our <span className="text-brand-orange">Impact</span> Across the Philippines
          </h2>
          
          <p 
            className={`text-lg text-white/90 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Since 2013, we've been working tirelessly to provide quality clothing to those who need it most. Here's the impact we've made together with our donors and partners.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16">
          {impactStats.map((stat, index) => (
            <div 
              key={index}
              className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${500 + index * 150}ms` }}
            >
              <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-sm md:text-base text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div 
            className={`order-2 lg:order-1 transition-all duration-700 delay-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Making a Difference in Communities
            </h3>
            
            <p className="mb-6 text-white/90">
              Our clothing donations do more than just provide basic necessities. They help:
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-brand-orange flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <strong className="block mb-1">Restore dignity</strong>
                  <p className="text-white/80 text-sm">
                    Quality clothing helps individuals feel valued and respected
                  </p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-brand-orange flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <strong className="block mb-1">Create opportunities</strong>
                  <p className="text-white/80 text-sm">
                    Proper attire for job interviews, school, and daily life
                  </p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-brand-orange flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <strong className="block mb-1">Build community resilience</strong>
                  <p className="text-white/80 text-sm">
                    Supporting communities during disasters and everyday challenges
                  </p>
                </div>
              </li>
            </ul>
            
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
              icon={<ExternalLink className="w-4 h-4" />}
              iconPosition="right"
            >
              View Impact Report
            </Button>
          </div>
          
          <div 
            className={`order-1 lg:order-2 transition-all duration-700 delay-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative">
              <div className="aspect-video bg-brand-blue/30 rounded-lg overflow-hidden">
                {/* Placeholder for video or image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-brand-blue border-b-8 border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg max-w-xs hidden md:block">
                <p className="text-gray-800 text-sm">
                  "The clothing donation from SparkCreatives helped me secure a job. I finally had something professional to wear to interviews."
                </p>
                <p className="text-gray-600 text-xs mt-2">
                  — Juan Dela Cruz, Cebu City
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
