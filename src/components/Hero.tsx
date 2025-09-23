import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-counseling.jpg";
import counselingSession from "@/assets/counseling-session-1.jpg";
import therapyOffice from "@/assets/therapy-office-1.jpg";
import groupTherapy from "@/assets/group-therapy-1.jpg";
import familyTherapy from "@/assets/family-therapy-1.jpg";
import counselingOffice from "@/assets/counseling-office-2.jpg";
import { useState, useEffect } from "react";

const Hero = () => {
  const backgroundImages = [
    heroImage,
    counselingSession,
    therapyOffice,
    groupTherapy,
    familyTherapy,
    counselingOffice
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Smooth Transition */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
        </div>
      ))}
      
      {/* Image Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-primary shadow-lg' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Switch to background image ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            Healing Starts with
            <span className="bg-gradient-primary bg-clip-text text-transparent block sm:inline"> Understanding</span>
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed max-w-2xl">
            Professional counselling and social work services to help you navigate life's challenges. 
            Creating a safe, supportive space where healing and growth can flourish.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 shadow-soft w-full sm:w-auto"
            >
              Schedule Your Session
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 border-primary/30 hover:bg-accent w-full sm:w-auto"
            >
              Learn More About Services
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 text-sm sm:text-base text-muted-foreground">
            <div className="flex items-center space-x-2 justify-center sm:justify-start">
              <div className="w-3 h-3 bg-healing-green rounded-full flex-shrink-0"></div>
              <span>Licensed Professional</span>
            </div>
            <div className="flex items-center space-x-2 justify-center sm:justify-start">
              <div className="w-3 h-3 bg-healing-green rounded-full flex-shrink-0"></div>
              <span>Confidential Sessions</span>
            </div>
            <div className="flex items-center space-x-2 justify-center sm:justify-start">
              <div className="w-3 h-3 bg-healing-green rounded-full flex-shrink-0"></div>
              <span>Flexible Scheduling</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;