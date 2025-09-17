import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              About Japheth Billy
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
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
            
            <div className="mt-8 space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span className="text-foreground font-medium">Degree in Social Work - Maasai Mara University</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span className="text-foreground font-medium">Qualified Professional Counselor</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span className="text-foreground font-medium">Certificate in Software Engineering</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span className="text-foreground font-medium">AI for Software Engineering Specialist</span>
              </div>
            </div>
            
            <Button className="mt-8 bg-gradient-primary hover:opacity-90" size="lg">
              Explore My Tech-Enhanced Approach
            </Button>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-healing rounded-2xl p-8 shadow-card">
              <blockquote className="text-xl text-foreground italic mb-6">
                "Bridging the gap between traditional counseling and innovative technology to create transformative healing experiences."
              </blockquote>
              <div className="space-y-4">
                <div className="bg-white/50 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Dual Specializations</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
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