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
      ]
    },
    {
      category: "Family Preservation",
      items: [
        "In-home family support services",
        "Parent education and skill building",
        "Family reunification planning",
        "Crisis intervention and stabilization"
      ]
    },
    {
      category: "Foster Care & Adoption",
      items: [
        "Foster family recruitment and training",
        "Adoption homestudies and matching",
        "Post-placement support services",
        "Kinship care support"
      ]
    },
    {
      category: "Youth Services",
      items: [
        "Adolescent counseling and support",
        "Independent living skills training",
        "Educational advocacy",
        "Transition planning services"
      ]
    }
  ];

  const approaches = [
    {
      title: "Family-Centered Practice",
      description: "Keeping the family unit at the center of all interventions and decisions",
      principles: ["Family strengths focus", "Cultural responsiveness", "Collaborative planning", "Empowerment approach"]
    },
    {
      title: "Trauma-Informed Care",
      description: "Understanding and responding to the impact of traumatic stress on children and families",
      principles: ["Safety first", "Trustworthiness", "Peer support", "Cultural humility"]
    },
    {
      title: "Strengths-Based Assessment",
      description: "Identifying and building upon existing family and community resources",
      principles: ["Asset identification", "Resilience building", "Solution-focused", "Resource mobilization"]
    }
  ];

  const specializations = [
    { area: "Child Development", icon: "👶", focus: "Understanding developmental needs and milestones" },
    { area: "Family Dynamics", icon: "👨‍👩‍👧‍👦", focus: "Assessing and improving family relationships" },
    { area: "Trauma Recovery", icon: "🌱", focus: "Healing from adverse childhood experiences" },
    { area: "Behavioral Support", icon: "🎯", focus: "Managing challenging behaviors in children" },
    { area: "Educational Advocacy", icon: "📚", focus: "Ensuring children's educational success" },
    { area: "Legal Support", icon: "⚖️", focus: "Navigating child welfare legal processes" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-healing relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${familyTherapy})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/90"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Child & Family Services</Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Child & Family Social Work Services
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Protecting children, strengthening families, and creating safe, nurturing environments where 
              every child can thrive and reach their full potential.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90">
              Request Family Support
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Comprehensive Family Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Supporting families through every stage of their journey with specialized interventions and care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">{service.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {service.items.map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Areas */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
              Areas of Specialization
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {specializations.map((spec, index) => (
                <Card key={index} className="text-center hover:shadow-card transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="text-3xl mb-4">{spec.icon}</div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{spec.area}</h3>
                    <p className="text-sm text-muted-foreground">{spec.focus}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Practice Approaches */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
              Evidence-Based Practice Approaches
            </h2>
            
            <div className="space-y-8">
              {approaches.map((approach, index) => (
                <Card key={index} className="hover:shadow-card transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div className="lg:col-span-2">
                        <h3 className="text-xl font-bold text-foreground mb-3">{approach.title}</h3>
                        <p className="text-muted-foreground mb-4">{approach.description}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Key Principles:</h4>
                        <div className="space-y-2">
                          {approach.principles.map((principle, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                              <span className="text-sm text-muted-foreground">{principle}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Family Support Process */}
      <section className="py-16 sm:py-20 bg-gradient-healing">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
              Family Support Process
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Initial Assessment</h3>
                    <p className="text-muted-foreground text-sm">
                      Comprehensive evaluation of family strengths, challenges, and safety concerns.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Safety Planning</h3>
                    <p className="text-muted-foreground text-sm">
                      Development of immediate and long-term safety plans for children and families.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Service Planning</h3>
                    <p className="text-muted-foreground text-sm">
                      Collaborative development of individualized service plans with clear goals.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Service Implementation</h3>
                    <p className="text-muted-foreground text-sm">
                      Coordinated delivery of services and ongoing support to achieve family goals.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">5</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Progress Monitoring</h3>
                    <p className="text-muted-foreground text-sm">
                      Regular evaluation of family progress and adjustment of services as needed.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">6</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Case Closure</h3>
                    <p className="text-muted-foreground text-sm">
                      Transition planning and connection to ongoing community supports.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
            Protecting Children, Strengthening Families
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Every child deserves a safe, stable, and nurturing environment. Let's work together to make that a reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Report Concern
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Family Resources
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChildFamilyServices;