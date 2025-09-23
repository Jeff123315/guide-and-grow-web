import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import counselingSession from "@/assets/counseling-session-1.jpg";
import groupTherapy from "@/assets/group-therapy-1.jpg";
import therapyOffice from "@/assets/therapy-office-1.jpg";

const Services = () => {
  const services = [
    {
      title: "Individual Counseling",
      description: "One-on-one therapeutic sessions tailored to your unique needs and goals.",
      features: ["Anxiety & Depression", "Trauma Recovery", "Life Transitions", "Personal Growth"],
      gradient: "bg-gradient-primary",
      backgroundImage: counselingSession
    },
    {
      title: "Family Therapy",
      description: "Strengthen family bonds and improve communication through guided sessions.",
      features: ["Family Dynamics", "Communication Skills", "Conflict Resolution", "Relationship Building"],
      gradient: "bg-gradient-healing",
      backgroundImage: groupTherapy
    },
    {
      title: "Tech-Enhanced Social Work",
      description: "Innovative social work services powered by AI and modern technology solutions.",
      features: ["Digital Case Management", "AI-Assisted Resource Matching", "Tech-Enabled Advocacy", "Virtual Crisis Support"],
      gradient: "bg-gradient-soft",
      backgroundImage: therapyOffice
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Comprehensive Mental Health Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional support tailored to help you overcome challenges and achieve lasting well-being
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="shadow-card hover:shadow-lg transition-all duration-300 border-0 h-full overflow-hidden group">
              {/* Background Image Overlay */}
              <div className="relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                  style={{ backgroundImage: `url(${service.backgroundImage})` }}
                />
                <div className="relative z-10">
                  <CardHeader className="pb-4">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 ${service.gradient} rounded-lg mb-4 flex items-center justify-center`}>
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white/30 rounded-full"></div>
                    </div>
                    <CardTitle className="text-xl sm:text-2xl text-foreground">{service.title}</CardTitle>
                    <CardDescription className="text-muted-foreground text-sm sm:text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 sm:space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-healing-green rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-foreground text-sm sm:text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;