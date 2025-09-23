import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-counseling.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
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