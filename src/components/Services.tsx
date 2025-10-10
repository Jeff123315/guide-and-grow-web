import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import counselingSession from "@/assets/counseling-session-1.jpg";
import groupTherapy from "@/assets/group-therapy-1.jpg";
import therapyOffice from "@/assets/therapy-office-1.jpg";

const Services = () => {
  const services = [
    {
      title: "Individual Counseling",
      description: "One-on-one therapeutic sessions tailored to your unique needs and goals.",
      features: ["Anxiety & Depression", "Trauma Recovery", "Life Transitions", "Personal Growth"],
      icon: Heart,
      backgroundImage: counselingSession,
      link: "/mental-health-counseling"
    },
    {
      title: "Family Therapy",
      description: "Strengthen family bonds and improve communication through guided sessions.",
      features: ["Family Dynamics", "Communication Skills", "Conflict Resolution", "Relationship Building"],
      icon: Users,
      backgroundImage: groupTherapy,
      link: "/child-family-services"
    },
    {
      title: "Community Social Work",
      description: "Innovative social work services powered by compassion and modern solutions.",
      features: ["Community Development", "Resource Connection", "Advocacy Services", "Crisis Support"],
      icon: Sparkles,
      backgroundImage: therapyOffice,
      link: "/community-social-work"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background via-accent/20 to-background relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Heart className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Our Services</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Comprehensive Mental Health
            <span className="block mt-2 gradient-text">& Social Work Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Professional support tailored to help you overcome challenges and achieve lasting well-being through evidence-based practices
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-2 border-border/50 hover:border-primary/50 shadow-card hover-lift bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${service.backgroundImage})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/95 to-card/80" />
                </div>

                <div className="relative z-10">
                  <CardHeader className="pb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent-green rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-soft">
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                    </div>
                    <CardTitle className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-accent-green rounded-full flex-shrink-0 mt-2" />
                          <span className="text-foreground text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      variant="ghost" 
                      className="w-full group/btn justify-between text-primary hover:text-primary-dark hover:bg-primary/5"
                      asChild
                    >
                      <Link to={service.link}>
                        <span>Learn More</span>
                        <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-lg text-muted-foreground mb-6">
            Not sure which service is right for you?
          </p>
          <Button size="lg" variant="gradient" asChild>
            <Link to="/contact">
              Schedule a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;