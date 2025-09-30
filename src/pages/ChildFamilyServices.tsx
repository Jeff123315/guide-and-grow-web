import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import familyTherapy from "@/assets/family-therapy-1.jpg";

const ChildFamilyServices = () => {
  const services = [
    {
      category: "Child Protection",
      items: [
        "Child abuse and neglect investigations",
        "Safety assessments and risk evaluations",
        "Child welfare case management",
        "Protective service coordination"
      ],
      kenyanExample: "Investigating child labor cases in Nairobi's informal settlements while working with local chiefs and children's officers",
      globalExample: "Coordinating multi-agency child protection response for suspected abuse cases in Manchester, UK"
    },
    {
      category: "Family Preservation",
      items: [
        "In-home family support services",
        "Parent education and skill building",
        "Family reunification planning",
        "Crisis intervention and stabilization"
      ],
      kenyanExample: "Providing parenting support to Somali refugee families in Dadaab camp adapting to displacement trauma",
      globalExample: "Supporting families in Texas border communities navigating reunification after immigration separation"
    },
    {
      category: "Foster Care & Adoption",
      items: [
        "Foster family recruitment and training",
        "Adoption homestudies and matching",
        "Post-placement support services",
        "Kinship care support"
      ],
      kenyanExample: "Training foster families in Nakuru on trauma-informed care for orphaned children affected by HIV/AIDS",
      globalExample: "Facilitating international adoptions from China while ensuring cultural heritage preservation"
    },
    {
      category: "Youth Services",
      items: [
        "Adolescent counseling and support",
        "Independent living skills training",
        "Educational advocacy",
        "Transition planning services"
      ],
      kenyanExample: "Helping street boys in Thika transition to vocational training programs and reconnect with families",
      globalExample: "Supporting aging-out foster youth in California with life skills and college/career planning"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-healing relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${familyTherapy})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/90"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-3 sm:mb-4 bg-primary/10 text-primary border-primary/20 text-xs sm:text-sm">Child & Family Services</Badge>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 px-2">
              Child & Family Social Work Services
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
              Protecting children, strengthening families, and creating safe, nurturing environments where 
              every child can thrive and reach their full potential.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 w-full sm:w-auto">
              Request Family Support
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 px-2">
              Comprehensive Family Services
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground px-4">
              Supporting families through every stage of their journey with specialized interventions and care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300">
                <CardHeader className="pb-3 sm:pb-4">
                  <CardTitle className="text-base sm:text-lg lg:text-xl text-foreground">{service.category}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {service.items.map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-2 sm:space-x-3">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3 pt-2">
                    <div className="p-3 sm:p-4 bg-green-50 rounded-lg border border-green-200">
                      <Badge variant="outline" className="mb-2 text-[10px] sm:text-xs border-green-300 text-green-800">🇰🇪 Kenyan Context</Badge>
                      <p className="text-xs sm:text-sm text-green-900 leading-relaxed">{service.kenyanExample}</p>
                    </div>
                    <div className="p-3 sm:p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <Badge variant="outline" className="mb-2 text-[10px] sm:text-xs border-blue-300 text-blue-800">🌍 Global Context</Badge>
                      <p className="text-xs sm:text-sm text-blue-900 leading-relaxed">{service.globalExample}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 px-2">
            Protecting Children, Strengthening Families
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Every child deserves a safe, stable, and nurturing environment. Let's work together to make that a reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto">
              Report Concern
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto">
              Family Resources
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChildFamilyServices;