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
      methods: ["Cognitive Behavioral Therapy (CBT)", "Solution-Focused Brief Therapy", "Mindfulness-Based Interventions"],
      kenyanExample: "Supporting a young professional in Nairobi dealing with work-related anxiety and family pressure through adapted CBT techniques that respect African collectivist values",
      globalExample: "Helping a university student in Canada manage depression and academic stress using evidence-based interventions"
    },
    {
      title: "Group Therapy",
      description: "Facilitated group sessions for peer support and shared healing experiences",
      methods: ["Support Groups", "Psychoeducational Groups", "Process Groups"],
      kenyanExample: "Leading bereavement support groups in Eldoret for families who lost loved ones, incorporating cultural mourning practices like mazishi traditions",
      globalExample: "Facilitating anxiety management groups for working professionals in London using peer-to-peer support models"
    },
    {
      title: "Family Therapy",
      description: "Systemic approach to addressing family dynamics and relationships",
      methods: ["Family Systems Therapy", "Structural Family Therapy", "Narrative Therapy"],
      kenyanExample: "Working with a multi-generational Kikuyu family in Kiambu to address conflict between traditional expectations and modern values",
      globalExample: "Helping an immigrant family in Australia navigate cultural adaptation challenges while maintaining their heritage"
    },
    {
      title: "Couples Counseling",
      description: "Relationship counseling to improve communication and resolve conflicts",
      methods: ["Emotionally Focused Therapy", "Gottman Method", "Imago Relationship Therapy"],
      kenyanExample: "Assisting a young couple in Kisumu address financial disagreements while respecting both Luo cultural values and modern partnership dynamics",
      globalExample: "Supporting an international couple in Dubai resolve cultural differences in parenting styles and household management"
    }
  ];

  const specializations = [
    { 
      area: "Depression & Anxiety Disorders", 
      kenyanContext: "Post-election anxiety, urban migration stress, unemployment-related depression",
      globalContext: "Pandemic-related anxiety, workplace burnout, generalized anxiety disorder"
    },
    { 
      area: "Trauma & PTSD", 
      kenyanContext: "Westgate/DusitD2 attack survivors, political violence trauma, road accident trauma",
      globalContext: "War veterans, sexual assault survivors, natural disaster trauma"
    },
    { 
      area: "Substance Abuse Recovery", 
      kenyanContext: "Alcohol dependency in rural communities, chang'aa abuse, prescription drug misuse",
      globalContext: "Opioid addiction, alcoholism, poly-substance abuse recovery"
    },
    { 
      area: "Grief & Loss Counseling", 
      kenyanContext: "COVID-19 pandemic losses, Al-Shabaab attack bereavements, sudden death support",
      globalContext: "Prolonged grief disorder, anticipatory grief, complex bereavement"
    },
    { 
      area: "Relationship Issues", 
      kenyanContext: "Marriage conflicts, dowry payment disputes, polygamy challenges",
      globalContext: "Divorce counseling, infidelity recovery, LGBTQ+ relationship support"
    },
    { 
      area: "Life Transitions", 
      kenyanContext: "Rural-urban migration adjustment, diaspora return challenges, career changes in unstable economy",
      globalContext: "Empty nest syndrome, retirement transitions, major life changes"
    },
    { 
      area: "Stress Management", 
      kenyanContext: "Matatu driver daily stress, healthcare worker burnout, informal sector pressures",
      globalContext: "Corporate executive stress, caregiving stress, chronic stress management"
    },
    { 
      area: "Self-Esteem & Identity Issues", 
      kenyanContext: "Colorism and skin-bleaching pressures, tribal identity conflicts, youth unemployment identity crisis",
      globalContext: "Body image issues, racial identity exploration, gender identity journey"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-healing relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${counselingSession})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/90"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-3 sm:mb-4 bg-primary/10 text-primary border-primary/20 text-xs sm:text-sm">Clinical Social Work</Badge>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 px-2">
              Clinical Social Work & Therapy Services
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
              As a licensed clinical social worker, I provide comprehensive mental health services using evidence-based 
              therapeutic approaches to help individuals, families, and groups overcome challenges and achieve optimal wellbeing.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 w-full sm:w-auto">
              Schedule Clinical Assessment
            </Button>
          </div>
        </div>
      </section>

      {/* Clinical Services */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 px-2">
              Clinical Services Offered
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground px-4">
              Comprehensive therapeutic interventions tailored to your unique needs and circumstances
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {clinicalServices.map((service, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300">
                <CardHeader className="pb-3 sm:pb-4">
                  <CardTitle className="text-base sm:text-lg lg:text-xl text-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-xs sm:text-sm text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground text-xs sm:text-sm">Therapeutic Approaches:</h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {service.methods.map((method, idx) => (
                        <Badge key={idx} variant="secondary" className="text-[10px] sm:text-xs">
                          {method}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 sm:p-4 bg-muted/50 rounded-lg">
                      <Badge variant="outline" className="mb-2 text-[10px] sm:text-xs">Kenyan Context</Badge>
                      <p className="text-xs sm:text-sm text-foreground leading-relaxed">{service.kenyanExample}</p>
                    </div>
                    <div className="p-3 sm:p-4 bg-muted/30 rounded-lg">
                      <Badge variant="outline" className="mb-2 text-[10px] sm:text-xs">Global Context</Badge>
                      <p className="text-xs sm:text-sm text-foreground leading-relaxed">{service.globalExample}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-foreground mb-6 sm:mb-8 text-center px-2">
              Areas of Specialization
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {specializations.map((specialization, index) => (
                <Card key={index} className="hover:shadow-card transition-all duration-300">
                  <CardContent className="p-4 sm:p-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <span className="text-white font-bold text-sm sm:text-base">✓</span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-3 sm:mb-4 text-center text-sm sm:text-base">{specialization.area}</h3>
                    <div className="space-y-2 sm:space-y-3">
                      <div className="p-2 sm:p-3 bg-green-50 rounded border border-green-200">
                        <p className="text-[10px] sm:text-xs font-medium text-green-800 mb-1">🇰🇪 Kenya</p>
                        <p className="text-[10px] sm:text-xs text-green-900 leading-relaxed">{specialization.kenyanContext}</p>
                      </div>
                      <div className="p-2 sm:p-3 bg-blue-50 rounded border border-blue-200">
                        <p className="text-[10px] sm:text-xs font-medium text-blue-800 mb-1">🌍 Global</p>
                        <p className="text-[10px] sm:text-xs text-blue-900 leading-relaxed">{specialization.globalContext}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 px-2">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Take the first step towards better mental health with professional clinical social work services.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto">
            Book Your Clinical Session
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ClinicalSocialWork;