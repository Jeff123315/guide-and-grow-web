import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import counselingSession from "@/assets/counseling-session-1.jpg";

const ClinicalSocialWork = () => {
  const clinicalServices = [
    {
      title: "Individual Therapy",
      description: "One-on-one counseling sessions using evidence-based therapeutic approaches",
      methods: ["Cognitive Behavioral Therapy (CBT)", "Solution-Focused Brief Therapy", "Mindfulness-Based Interventions"]
    },
    {
      title: "Group Therapy",
      description: "Facilitated group sessions for peer support and shared healing experiences",
      methods: ["Support Groups", "Psychoeducational Groups", "Process Groups"]
    },
    {
      title: "Family Therapy",
      description: "Systemic approach to addressing family dynamics and relationships",
      methods: ["Family Systems Therapy", "Structural Family Therapy", "Narrative Therapy"]
    },
    {
      title: "Couples Counseling",
      description: "Relationship counseling to improve communication and resolve conflicts",
      methods: ["Emotionally Focused Therapy", "Gottman Method", "Imago Relationship Therapy"]
    }
  ];

  const specializations = [
    "Depression & Anxiety Disorders",
    "Trauma & PTSD",
    "Substance Abuse Recovery",
    "Grief & Loss Counseling",
    "Relationship Issues",
    "Life Transitions",
    "Stress Management",
    "Self-Esteem & Identity Issues"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-healing relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${counselingSession})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/90"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Clinical Social Work</Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Clinical Social Work & Therapy Services
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              As a licensed clinical social worker, I provide comprehensive mental health services using evidence-based 
              therapeutic approaches to help individuals, families, and groups overcome challenges and achieve optimal wellbeing.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90">
              Schedule Clinical Assessment
            </Button>
          </div>
        </div>
      </section>

      {/* Clinical Services */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Clinical Services Offered
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive therapeutic interventions tailored to your unique needs and circumstances
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {clinicalServices.map((service, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground text-sm">Therapeutic Approaches:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.methods.map((method, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {method}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
              Areas of Specialization
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {specializations.map((specialization, index) => (
                <Card key={index} className="text-center hover:shadow-card transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <h3 className="font-semibold text-foreground">{specialization}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
              My Clinical Process
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Initial Assessment</h3>
                  <p className="text-muted-foreground">
                    Comprehensive evaluation of your mental health status, history, and treatment goals through clinical interviews and standardized assessments.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Treatment Planning</h3>
                  <p className="text-muted-foreground">
                    Collaborative development of a personalized treatment plan with clear, measurable goals and evidence-based interventions.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Therapeutic Intervention</h3>
                  <p className="text-muted-foreground">
                    Implementation of therapeutic strategies and techniques tailored to your specific needs and preferred learning style.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Progress Monitoring</h3>
                  <p className="text-muted-foreground">
                    Regular evaluation of treatment effectiveness with adjustments made to ensure optimal therapeutic outcomes.
                  </p>
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
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Take the first step towards better mental health with professional clinical social work services.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
            Book Your Clinical Session
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ClinicalSocialWork;