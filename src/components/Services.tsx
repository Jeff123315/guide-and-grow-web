import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Individual Counseling",
      description: "One-on-one therapeutic sessions tailored to your unique needs and goals.",
      features: ["Anxiety & Depression", "Trauma Recovery", "Life Transitions", "Personal Growth"],
      gradient: "bg-gradient-primary"
    },
    {
      title: "Family Therapy",
      description: "Strengthen family bonds and improve communication through guided sessions.",
      features: ["Family Dynamics", "Communication Skills", "Conflict Resolution", "Relationship Building"],
      gradient: "bg-gradient-healing"
    },
    {
      title: "Social Work Services",
      description: "Comprehensive support for navigating social systems and accessing resources.",
      features: ["Case Management", "Resource Connection", "Advocacy", "Crisis Intervention"],
      gradient: "bg-gradient-soft"
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
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="shadow-card hover:shadow-lg transition-all duration-300 border-0">
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 ${service.gradient} rounded-lg mb-4 flex items-center justify-center`}>
                  <div className="w-6 h-6 bg-white/30 rounded-full"></div>
                </div>
                <CardTitle className="text-2xl text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-healing-green rounded-full flex-shrink-0"></div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;