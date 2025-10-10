import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Individual Counseling Client",
      content: "The support I received helped me navigate one of the most challenging periods of my life. The approach was both professional and deeply compassionate.",
      rating: 5,
      location: "Nairobi, Kenya"
    },
    {
      name: "David K.",
      role: "Family Therapy Participant",
      content: "Our family sessions transformed how we communicate. We've built stronger bonds and learned to support each other in meaningful ways.",
      rating: 5,
      location: "Narok County"
    },
    {
      name: "Grace N.",
      role: "Community Service Beneficiary",
      content: "The community programs have brought real change to our neighborhood. It's inspiring to see how social work can create lasting impact.",
      rating: 5,
      location: "Maasai Mara Region"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-accent/10 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-secondary/10 rounded-full px-4 py-2 mb-6">
            <Star className="h-4 w-4 text-secondary fill-secondary" />
            <span className="text-sm font-semibold text-secondary">Client Stories</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Real Stories of
            <span className="block mt-2 gradient-text">Growth & Healing</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hear from individuals and families who've experienced transformation through our services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover-lift border-2 border-border/50 hover:border-primary/30 bg-card relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity" />
              
              <CardContent className="p-6 sm:p-8 relative">
                <Quote className="h-10 w-10 text-primary/20 mb-4" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground text-base leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="pt-4 border-t border-border/50">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-muted-foreground mt-1">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap justify-center items-center gap-8 sm:gap-12 text-center">
            <div className="animate-fade-in">
              <p className="text-3xl sm:text-4xl font-bold text-primary">200+</p>
              <p className="text-sm text-muted-foreground">Clients Served</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <p className="text-3xl sm:text-4xl font-bold text-secondary">98%</p>
              <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <p className="text-3xl sm:text-4xl font-bold text-accent-green">5+</p>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
