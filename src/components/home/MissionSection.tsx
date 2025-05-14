import React, { useEffect, useRef, useState } from 'react';
import { Card } from '../ui/Card';
import { Heart, Users, Globe } from 'lucide-react';
import { isElementInViewport } from '../../lib/utils';

const MissionSection: React.FC = () => {
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
  
  const missionCards = [
    {
      icon: <Heart className="w-8 h-8 text-brand-orange" />,
      title: "Compassionate Care",
      description: "We believe in treating everyone with dignity and respect, ensuring our clothing donations empower rather than diminish."
    },
    {
      icon: <Users className="w-8 h-8 text-brand-blue" />,
      title: "Community Focus",
      description: "Our programs are designed with and for local communities, addressing their specific needs and cultural contexts."
    },
    {
      icon: <Globe className="w-8 h-8 text-brand-green" />,
      title: "Sustainable Impact",
      description: "We're committed to creating lasting change through environmentally responsible practices and long-term community partnerships."
    }
  ];
  
  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-16 md:py-24 bg-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 
            className={`text-3xl md:text-4xl font-bold mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Our <span className="text-brand-blue">Mission</span> & Values
          </h2>
          
          <p 
            className={`text-lg text-gray-600 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            At SparkCreatives, we believe that quality clothing is not just a basic need but a pathway to dignity, confidence, and opportunity. Our mission is to bridge the gap between excess and need through thoughtful clothing donations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {missionCards.map((card, index) => (
            <Card 
              key={index}
              className={`p-8 border-none shadow-lg hover:shadow-xl transition-all duration-500 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: `${500 + index * 200}ms`,
                backgroundColor: index === 1 ? 'rgba(37, 99, 235, 0.05)' : 'white'
              }}
            >
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-6">
                {card.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
              
              <p className="text-gray-600">
                {card.description}
              </p>
            </Card>
          ))}
        </div>
        
        <div 
          className={`mt-16 p-8 bg-gray-50 rounded-2xl border border-gray-100 max-w-4xl mx-auto transition-all duration-700 delay-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <blockquote className="text-xl text-gray-700 italic text-center">
            "We don't just donate clothes; we create opportunities for people to rebuild their lives with dignity and confidence."
          </blockquote>
          <div className="mt-4 text-center">
            <p className="font-semibold">Maria Santos</p>
            <p className="text-sm text-gray-500">Founder, SparkCreatives</p>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-dot-pattern opacity-10 -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-dot-pattern opacity-10 translate-y-1/2 -translate-x-1/3" />
    </section>
  );
};

export default MissionSection;
