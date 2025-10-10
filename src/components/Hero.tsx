import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, Sparkles, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-counseling.jpg";
import therapyOffice from "@/assets/therapy-office-1.jpg";
import counselingSession from "@/assets/counseling-session-1.jpg";

const Hero = () => {
  const backgroundImages = [heroImage, therapyOffice, counselingSession];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Shield,
      title: "Safe Space",
      description: "Professional, confidential environment"
    },
    {
      icon: Heart,
      title: "Expert Care",
      description: "Licensed social workers & counselors"
    },
    {
      icon: Users,
      title: "Community",
      description: "Connect with others on similar journeys"
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Images with Smooth Transitions */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{
            opacity: currentImageIndex === index ? 1 : 0,
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}

      {/* Modern Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/80" />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Sparkles className="h-4 w-4 text-secondary" />
            <span className="text-sm font-medium text-white">
              Professional Mental Health & Social Work Services
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
            Your Journey to
            <span className="block mt-2 text-secondary">
              Thriving Begins Here
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl lg:text-2xl text-white/95 mb-10 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Expert counseling, compassionate social work, and community support to help you grow, heal, and thrive in every aspect of life.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Button 
              size="lg" 
              variant="secondary"
              className="text-base group"
              asChild
            >
              <Link to="/contact">
                Book Your Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-base border-2 border-white text-white hover:bg-white hover:text-primary"
              asChild
            >
              <Link to="/services">
                Explore Services
              </Link>
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto animate-scale-in" style={{ animationDelay: '0.3s' }}>
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="glass rounded-2xl p-6 hover-lift group"
                >
                  <div className="bg-secondary/20 w-14 h-14 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-7 w-7 text-secondary" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Image Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`transition-all duration-300 rounded-full ${
              currentImageIndex === index 
                ? 'w-10 h-3 bg-secondary' 
                : 'w-3 h-3 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent-green/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default Hero;