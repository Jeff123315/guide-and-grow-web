import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import familyTherapy from "@/assets/family-therapy-1.jpg";

const SubstanceAbuseServices = () => {
  const recoveryServices = [
    {
      title: "Individual Counseling",
      description: "One-on-one therapy sessions focusing on addiction recovery and personal growth",
      methods: ["Motivational Interviewing", "Cognitive Behavioral Therapy", "Relapse Prevention", "Trauma-Informed Care"]
    },
    {
      title: "Group Therapy",
      description: "Peer support groups and therapeutic communities for shared recovery experiences",
      methods: ["12-Step Facilitation", "SMART Recovery", "Relapse Prevention Groups", "Skills Training"]
    },
    {
      title: "Family Intervention",
      description: "Supporting families affected by addiction and facilitating healing relationships",
      methods: ["Family Systems Therapy", "Communication Skills", "Boundary Setting", "Co-dependency Recovery"]
    },
    {
      title: "Crisis Intervention",
      description: "Immediate support during addiction crises and emergency situations",
      methods: ["Crisis Assessment", "Safety Planning", "Intervention Planning", "Emergency Resources"]
    }
  ];

  const recoverySupport = [
    {
      area: "Detox Support",
      icon: "🔄",
      description: "Psychosocial support during medical detoxification and withdrawal management"
    },
    {
      area: "Dual Diagnosis",
      icon: "🧠",
      description: "Integrated treatment for co-occurring mental health and substance use disorders"
    },
    {
      area: "Relapse Prevention",
      icon: "🛡️",
      description: "Developing strategies and skills to maintain long-term sobriety and recovery"
    },
    {
      area: "Life Skills Training",
      icon: "🎯",
      description: "Building practical skills for independent living and successful community reintegration"
    },
    {
      area: "Trauma Recovery",
      icon: "💚",
      description: "Addressing underlying trauma that contributes to substance use patterns"
    },
    {
      area: "Family Healing",
      icon: "👨‍👩‍👧‍👦",
      description: "Repairing relationships and building healthy family dynamics in recovery"
    }
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
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Substance Abuse Services</Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Addiction Recovery & Support Services
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Comprehensive, compassionate support for individuals and families affected by substance use disorders, 
              focusing on recovery, healing, and long-term wellbeing through evidence-based treatment approaches.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90">
              Start Your Recovery Journey
            </Button>
          </div>
        </div>
      </section>

      {/* Recovery Services */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Comprehensive Recovery Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Evidence-based treatment approaches tailored to individual recovery needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {recoveryServices.map((service, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground text-sm">Treatment Methods:</h4>
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

      {/* Recovery Support Areas */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
              Recovery Support Specializations
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {recoverySupport.map((area, index) => (
                <Card key={index} className="text-center hover:shadow-card transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{area.icon}</div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{area.area}</h3>
                    <p className="text-sm text-muted-foreground">{area.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recovery Process */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  My Recovery-Focused Approach
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Harm Reduction Philosophy</h3>
                      <p className="text-muted-foreground">
                        Meeting clients where they are and supporting incremental positive changes.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Trauma-Informed Care</h3>
                      <p className="text-muted-foreground">
                        Recognizing and addressing the role of trauma in addiction and recovery.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Holistic Recovery</h3>
                      <p className="text-muted-foreground">
                        Addressing physical, mental, emotional, and spiritual aspects of healing.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Community Integration</h3>
                      <p className="text-muted-foreground">
                        Connecting clients with recovery communities and ongoing support networks.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-healing rounded-2xl p-8 shadow-card">
                <h3 className="text-xl font-bold text-foreground mb-6">Recovery Milestones</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Initial Assessment</span>
                    <Badge variant="secondary">Week 1</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Stabilization</span>
                    <Badge variant="secondary">Month 1-3</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Skill Building</span>
                    <Badge variant="secondary">Month 3-6</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Community Integration</span>
                    <Badge variant="secondary">Ongoing</Badge>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-white/50 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Success Story</h4>
                  <p className="text-sm text-muted-foreground">
                    "Recovery Reimagined" - A comprehensive program combining traditional recovery methods 
                    with technology-assisted therapy and peer support for sustainable sobriety.
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
            Begin Your Recovery Today
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Take the first step towards healing and recovery with compassionate, professional support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Start Recovery Assessment
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Learn About Programs
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubstanceAbuseServices;