import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import counselingOffice from "@/assets/counseling-office-2.jpg";

const MentalHealthCounseling = () => {
  const counselingServices = [
    {
      title: "Individual Counseling",
      description: "One-on-one therapeutic sessions tailored to your unique needs and goals",
      specialties: ["Depression & Anxiety", "Trauma & PTSD", "Grief & Loss", "Life Transitions", "Stress Management"],
      kenyanExample: "Counseling a Nairobi banker experiencing burnout and depression from high-pressure work environment and family expectations",
      globalExample: "Supporting a software engineer in Seattle managing anxiety disorder and imposter syndrome in tech industry"
    },
    {
      title: "Group Therapy",
      description: "Supportive group sessions that foster connection and shared healing experiences",
      specialties: ["Support Groups", "Skills Training", "Psychoeducation", "Peer Recovery", "Process Groups"],
      kenyanExample: "Facilitating men's mental health group in Kisumu addressing stigma around seeking help in African communities",
      globalExample: "Leading chronic pain support group in Melbourne using mindfulness and CBT techniques"
    },
    {
      title: "Couples Therapy",
      description: "Relationship counseling to improve communication and strengthen partnerships",
      specialties: ["Communication Skills", "Conflict Resolution", "Intimacy Issues", "Trust Building", "Pre-marital Counseling"],
      kenyanExample: "Helping Luhya couple in Kakamega navigate tensions between traditional dowry expectations and modern finances",
      globalExample: "Supporting intercultural couple in Paris addressing cultural differences in conflict resolution styles"
    },
    {
      title: "Family Therapy",
      description: "Family-focused interventions to improve dynamics and relationships",
      specialties: ["Family Communication", "Parenting Support", "Adolescent Issues", "Blended Families", "Crisis Intervention"],
      kenyanExample: "Working with multi-generational Maasai family balancing traditional pastoralist lifestyle with children's education aspirations",
      globalExample: "Supporting blended family in Sydney navigating step-parenting challenges and co-parenting dynamics"
    }
  ];

  const familyChallenges = [
    {
      challenge: "Single Parenthood Stress",
      description: "Single parents face unique mental health challenges including financial strain, time pressure, and isolation",
      impacts: ["90%+ headed by women", "Economic disadvantage", "Lack of emotional support", "Time constraints balancing work and childcare"],
      intervention: "Individual counseling, parent support groups, stress management, resource connection"
    },
    {
      challenge: "Blended Family Dynamics",
      description: "Step-families face complex relationships with different norms, values, and expectations",
      impacts: ["Arguments and conflicts common", "Stepparent-stepchild relationships", "Favoritism concerns", "Identity confusion"],
      intervention: "Family therapy, communication training, boundary setting, conflict resolution skills"
    },
    {
      challenge: "Work-Life Balance",
      description: "Both parents working while raising young children creates significant stress",
      impacts: ["Childcare challenges", "Guilt and exhaustion", "Limited quality time", "Career vs family tensions"],
      intervention: "Couples counseling, time management, priority clarification, self-care strategies"
    },
    {
      challenge: "Intergenerational Conflict",
      description: "Tension between traditional values and modern lifestyles in multi-generational families",
      impacts: ["Cultural identity struggles", "Parenting disagreements", "Authority conflicts", "Living arrangement stress"],
      intervention: "Family mediation, cultural competence counseling, respect-building, compromise facilitation"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-healing relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${counselingOffice})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/90"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-3 sm:mb-4 bg-primary/10 text-primary border-primary/20 text-xs sm:text-sm">Mental Health Counseling</Badge>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 px-2">
              Professional Mental Health Counseling
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
              Compassionate, evidence-based mental health services enhanced with innovative technology 
              to support your journey toward optimal mental wellness and personal growth.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 w-full sm:w-auto">
              Schedule Counseling Session
            </Button>
          </div>
        </div>
      </section>

      {/* Counseling Services */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 px-2">
              Comprehensive Counseling Services
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground px-4">
              Professional mental health support tailored to your individual needs and circumstances
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {counselingServices.map((service, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300">
                <CardHeader className="pb-3 sm:pb-4">
                  <CardTitle className="text-lg sm:text-xl lg:text-2xl text-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-sm sm:text-base text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground text-sm sm:text-base">Specialties Include:</h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {service.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs sm:text-sm">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 sm:p-4 bg-green-50 rounded-lg border border-green-200">
                      <Badge variant="outline" className="mb-2 text-xs sm:text-sm border-green-300 text-green-800">🇰🇪 Kenya</Badge>
                      <p className="text-sm sm:text-base text-green-900 leading-relaxed">{service.kenyanExample}</p>
                    </div>
                    <div className="p-3 sm:p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <Badge variant="outline" className="mb-2 text-xs sm:text-sm border-blue-300 text-blue-800">🌍 Global</Badge>
                      <p className="text-sm sm:text-base text-blue-900 leading-relaxed">{service.globalExample}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Family Mental Health Challenges */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-foreground mb-4 text-center px-2">
              Family & Relationship Mental Health
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
              Addressing mental health challenges unique to various family structures and dynamics
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {familyChallenges.map((item, index) => (
                <Card key={index} className="hover:shadow-card transition-all">
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="font-semibold text-foreground mb-2 text-base sm:text-lg">{item.challenge}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-3 leading-relaxed">{item.description}</p>
                    <div className="mb-3">
                      <h4 className="text-xs font-medium mb-2 text-red-700">Mental Health Impacts:</h4>
                      <div className="space-y-1">
                        {item.impacts.map((impact, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <div className="w-1 h-1 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                            <span className="text-[10px] sm:text-xs text-muted-foreground">{impact}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="p-2 bg-primary/10 rounded">
                      <p className="text-[10px] sm:text-xs text-foreground"><strong>Intervention:</strong> {item.intervention}</p>
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
            Take the First Step Toward Better Mental Health
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Your mental health matters. Let's work together to help you achieve optimal wellbeing and personal growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto">
              Book Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MentalHealthCounseling;