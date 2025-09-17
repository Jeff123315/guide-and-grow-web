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
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Healing Starts with
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Understanding</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Professional counselling and social work services to help you navigate life's challenges. 
            Creating a safe, supportive space where healing and growth can flourish.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-lg px-8 py-4 shadow-soft">
              Schedule Your Session
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 border-primary/30 hover:bg-accent"
            >
              Learn More About Services
            </Button>
          </div>
          
          <div className="mt-12 flex items-center space-x-8 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-healing-green rounded-full"></div>
              <span>Licensed Professional</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-healing-green rounded-full"></div>
              <span>Confidential Sessions</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-healing-green rounded-full"></div>
              <span>Flexible Scheduling</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;