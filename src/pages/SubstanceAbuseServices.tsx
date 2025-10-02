import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import familyTherapy from "@/assets/family-therapy-1.jpg";

const SubstanceAbuseServices = () => {
  const recoveryServices = [
    {
      title: "Assessment & Evaluation",
      description: "Comprehensive substance use assessment and personalized treatment planning",
      components: ["Clinical Interviews", "Screening Tools", "Risk Assessment", "Treatment Matching"],
      kenyanExample: "Assessing chang'aa addiction severity in Kiambu farmer, evaluating family support and cultural factors",
      globalExample: "Comprehensive opioid use disorder evaluation in Philadelphia connecting to medication-assisted treatment"
    },
    {
      title: "Individual Counseling",
      description: "Evidence-based therapeutic interventions for substance use disorders",
      components: ["Motivational Interviewing", "CBT for Addiction", "Relapse Prevention", "Trauma-Informed Care"],
      kenyanExample: "Using motivational interviewing with Nairobi businessman struggling with alcohol dependency and family shame",
      globalExample: "Providing trauma-informed care for veteran in UK with PTSD and alcohol use disorder"
    },
    {
      title: "Group Therapy",
      description: "Peer support and skill-building in therapeutic group settings",
      components: ["12-Step Facilitation", "Recovery Support Groups", "Skills Training", "Psychoeducation"],
      kenyanExample: "Facilitating men's sobriety group in Mombasa addressing cultural stigma around addiction help-seeking",
      globalExample: "Leading dual diagnosis group in Toronto for co-occurring mental health and substance use disorders"
    },
    {
      title: "Family Support",
      description: "Family education, therapy, and support for healing relationships",
      components: ["Family Therapy", "Education Programs", "Al-Anon/Nar-Anon", "Codependency Support"],
      kenyanExample: "Supporting Kikuyu family in Nyeri address son's drug use while respecting clan elder involvement",
      globalExample: "Family therapy in Sydney helping parents navigate adult child's methamphetamine addiction"
    },
    {
      title: "Harm Reduction",
      description: "Practical strategies to reduce substance-related risks and harms",
      components: ["Safer Use Education", "Overdose Prevention", "Needle Exchange", "Safe Consumption Support"],
      kenyanExample: "Distributing naloxone and safe injection kits in Nairobi's River Road area for injecting drug users",
      globalExample: "Operating supervised consumption site in Vancouver with medical staff and social workers"
    },
    {
      title: "Recovery Support",
      description: "Long-term support services for sustained recovery and wellness",
      components: ["Case Management", "Employment Support", "Housing Assistance", "Peer Recovery Coaching"],
      kenyanExample: "Connecting recovering addict in Kisumu with vocational training and sober living support from local church",
      globalExample: "Recovery coaching in Boston helping individuals maintain sobriety while addressing housing instability"
    }
  ];

  const substanceTypes = [
    {
      substance: "Alcohol",
      kenyanContext: "Busaa, chang'aa, commercial alcohol; social drinking culture; unemployment-related drinking",
      globalContext: "Wine, beer, spirits; binge drinking culture; stress-related alcoholism",
      icon: "🍺"
    },
    {
      substance: "Cannabis/Marijuana",
      kenyanContext: "Local bhang use; youth experimentation; traditional medicine use",
      globalContext: "Medical marijuana; recreational legalization; dependency issues",
      icon: "🌿"
    },
    {
      substance: "Prescription Drugs",
      kenyanContext: "Benzodiazepine misuse; codeine cough syrup; pain medication dependency",
      globalContext: "Opioid crisis; benzodiazepines; stimulant misuse",
      icon: "💊"
    },
    {
      substance: "Heroin/Opioids",
      kenyanContext: "Coastal region heroin use; injection drug use in urban centers",
      globalContext: "Opioid epidemic; fentanyl crisis; injection drug use",
      icon: "💉"
    },
    {
      substance: "Stimulants",
      kenyanContext: "Khat/miraa chewing; cocaine in urban nightlife; methamphetamine emerging",
      globalContext: "Cocaine; methamphetamine; prescription stimulant abuse",
      icon: "⚡"
    },
    {
      substance: "Inhalants",
      kenyanContext: "Street children sniffing glue, petrol; cobbler's glue in Nairobi streets",
      globalContext: "Solvent abuse; aerosol inhalation among youth",
      icon: "🫧"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-healing relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url(${familyTherapy})` }}/>
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-3 sm:mb-4 bg-primary/10 text-primary border-primary/20 text-xs sm:text-sm">Substance Abuse Services</Badge>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 px-2">
              Addiction Recovery & Support Services
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
              Compassionate, evidence-based substance abuse treatment and recovery support services that honor 
              cultural contexts while promoting lasting healing and wellness.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 w-full sm:w-auto">
              Start Recovery Journey
            </Button>
          </div>
        </div>
      </section>

      {/* Recovery Services */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 px-2">
              Comprehensive Recovery Services
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground px-4">
              Holistic, culturally-sensitive addiction treatment and long-term recovery support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {recoveryServices.map((service, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300">
                <CardHeader className="pb-3 sm:pb-4">
                  <CardTitle className="text-base sm:text-lg text-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-xs sm:text-sm text-muted-foreground">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground text-xs">Components:</h4>
                    <div className="space-y-1">
                      {service.components.map((component, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                          <span className="text-xs text-muted-foreground">{component}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="p-2 sm:p-3 bg-green-50 rounded border border-green-200">
                      <Badge variant="outline" className="mb-1 text-[10px] border-green-300 text-green-800">🇰🇪 Kenya</Badge>
                      <p className="text-[10px] sm:text-xs text-green-900 leading-relaxed">{service.kenyanExample}</p>
                    </div>
                    <div className="p-2 sm:p-3 bg-blue-50 rounded border border-blue-200">
                      <Badge variant="outline" className="mb-1 text-[10px] border-blue-300 text-blue-800">🌍 Global</Badge>
                      <p className="text-[10px] sm:text-xs text-blue-900 leading-relaxed">{service.globalExample}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Substance Types */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-foreground mb-6 sm:mb-8 text-center px-2">
              Substances We Address
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {substanceTypes.map((type, index) => (
                <Card key={index} className="hover:shadow-card transition-all">
                  <CardContent className="p-4">
                    <div className="text-3xl mb-3 text-center">{type.icon}</div>
                    <h3 className="font-semibold text-foreground text-center mb-3 text-sm">{type.substance}</h3>
                    <div className="space-y-2">
                      <div className="p-2 bg-green-50 rounded border border-green-200">
                        <p className="text-[10px] font-medium text-green-800 mb-1">🇰🇪 Kenya</p>
                        <p className="text-[10px] text-green-900">{type.kenyanContext}</p>
                      </div>
                      <div className="p-2 bg-blue-50 rounded border border-blue-200">
                        <p className="text-[10px] font-medium text-blue-800 mb-1">🌍 Global</p>
                        <p className="text-[10px] text-blue-900">{type.globalContext}</p>
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
            Recovery Is Possible - Take the First Step Today
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            You don't have to face addiction alone. Professional, compassionate support is available to help you build a life of lasting recovery.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto">
              Start Treatment
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto">
              Learn About Recovery
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubstanceAbuseServices;