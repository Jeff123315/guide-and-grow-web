import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              About Michelle Harper
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                With over 10 years of experience in mental health and social work, I am dedicated to 
                providing compassionate, evidence-based care to individuals and families facing life's challenges.
              </p>
              <p>
                My approach combines proven therapeutic techniques with a deep understanding of human resilience, 
                creating a safe space where healing can begin and growth can flourish.
              </p>
              <p>
                I believe that everyone deserves support during difficult times, and I'm honored to walk 
                alongside my clients on their journey toward wellness and recovery.
              </p>
            </div>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span className="text-foreground font-medium">Master's in Clinical Social Work</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span className="text-foreground font-medium">Licensed Clinical Social Worker (LCSW)</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span className="text-foreground font-medium">Trauma-Informed Care Certified</span>
              </div>
            </div>
            
            <Button className="mt-8 bg-gradient-primary hover:opacity-90" size="lg">
              Learn About My Approach
            </Button>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-healing rounded-2xl p-8 shadow-card">
              <blockquote className="text-xl text-foreground italic mb-6">
                "Healing is not about forgetting the past, but about finding the strength to create a better future."
              </blockquote>
              <div className="space-y-4">
                <div className="bg-white/50 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Specializations</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                    <span>• Anxiety Disorders</span>
                    <span>• Depression</span>
                    <span>• Trauma & PTSD</span>
                    <span>• Family Therapy</span>
                    <span>• Life Transitions</span>
                    <span>• Grief Counseling</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;