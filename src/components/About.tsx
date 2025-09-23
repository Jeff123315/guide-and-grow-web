import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 sm:mb-6">
              About Japheth Billy
            </h2>
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-muted-foreground">
              <p>
                A qualified counselor from Maasai Mara University pursuing a Degree in Social Work, I bring 
                a unique perspective that bridges traditional mental health support with innovative technology solutions.
              </p>
              <p>
                My journey has taken an exciting turn into the tech world, where I've pursued a Certificate in 
                Software Engineering with specialization in AI for Software Engineering. This unique combination 
                allows me to offer both compassionate counseling and cutting-edge digital wellness solutions.
              </p>
              <p>
                I believe in the power of technology to enhance mental health services while maintaining the 
                human connection that is essential for healing. My approach integrates traditional counseling 
                methods with modern technological tools to provide comprehensive support.
              </p>
            </div>
            
            <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span className="text-foreground font-medium text-sm sm:text-base">Degree in Social Work - Maasai Mara University</span>
              </div>
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span className="text-foreground font-medium text-sm sm:text-base">Qualified Professional Counselor</span>
              </div>
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span className="text-foreground font-medium text-sm sm:text-base">Certificate in Software Engineering</span>
              </div>
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span className="text-foreground font-medium text-sm sm:text-base">AI for Software Engineering Specialist</span>
              </div>
            </div>
            
            <Button className="mt-6 sm:mt-8 bg-gradient-primary hover:opacity-90 w-full sm:w-auto" size="lg">
              Explore My Tech-Enhanced Approach
            </Button>
          </div>
          
          <div className="relative mt-8 lg:mt-0">
            <div className="bg-gradient-healing rounded-2xl p-6 sm:p-8 shadow-card">
              <blockquote className="text-lg sm:text-xl text-foreground italic mb-4 sm:mb-6">
                "Bridging the gap between traditional counseling and innovative technology to create transformative healing experiences."
              </blockquote>
              <div className="space-y-4">
                <div className="bg-white/50 rounded-lg p-3 sm:p-4">
                  <h4 className="font-semibold text-foreground mb-2 sm:mb-3 text-sm sm:text-base">Dual Specializations</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2 text-xs sm:text-sm text-muted-foreground">
                    <span>• Mental Health Counseling</span>
                    <span>• AI-Enhanced Therapy</span>
                    <span>• Social Work Practice</span>
                    <span>• Digital Wellness Tools</span>
                    <span>• Tech Integration</span>
                    <span>• Software Development</span>
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