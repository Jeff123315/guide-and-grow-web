import { Button } from "@/components/ui/button";
import { Heart, Users, Target, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import familyTherapy from "@/assets/family-therapy-1.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "Every journey deserves understanding and empathy"
    },
    {
      icon: Users,
      title: "Community",
      description: "Building connections that support growth"
    },
    {
      icon: Target,
      title: "Empowerment",
      description: "Helping you discover your inner strength"
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description: "Blending tradition with modern solutions"
    }
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-3"
        style={{ backgroundImage: `url(${familyTherapy})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/98 to-background/95" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-accent-green/10 rounded-full px-4 py-2 mb-6">
            <Heart className="h-4 w-4 text-accent-green" />
            <span className="text-sm font-semibold text-accent-green">Our Mission</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Empowering Growth Through
            <span className="block mt-2 gradient-text">Compassionate Care</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            ThriveSpace exists to create a safe, supportive environment where healing and personal growth flourish
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Content */}
          <div className="animate-slide-up">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Meet Japheth Billy
            </h3>
            <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              <p>
                A qualified counselor from Maasai Mara University pursuing a Degree in Social Work, 
                bringing unique expertise that bridges traditional mental health support with innovative solutions.
              </p>
              <p>
                With specialized training in AI for Software Engineering from PLP Academy, I combine 
                compassionate care with modern technology to provide comprehensive, accessible support 
                for individuals, families, and communities.
              </p>
              <p className="text-foreground font-medium">
                I believe every person deserves a space to thrive. My mission is to empower you with 
                the tools, support, and guidance needed to overcome challenges and embrace lasting wellbeing.
              </p>
            </div>
            
            {/* Credentials */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-xl">🎓</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Social Work Degree</p>
                  <p className="text-xs text-muted-foreground">Maasai Mara University</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-secondary text-xl">💼</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Licensed Counselor</p>
                  <p className="text-xs text-muted-foreground">Professional Practice</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-accent-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-accent-green text-xl">💻</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Software Engineering</p>
                  <p className="text-xs text-muted-foreground">PLP Academy Graduate</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-xl">🤖</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">AI Specialist</p>
                  <p className="text-xs text-muted-foreground">Tech Integration Expert</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-scale-in">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index}
                  className="glass rounded-2xl p-6 hover-lift group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent-green rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-bold text-foreground text-lg mb-2">
                    {value.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" variant="gradient" asChild>
            <Link to="/contact">
              Start Your Journey Today
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;