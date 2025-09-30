import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import therapyOffice from "@/assets/therapy-office-1.jpg";

const CrisisIntervention = () => {
  const crisisTypes = [
    {
      type: "Mental Health Crisis",
      indicators: ["Suicidal thoughts", "Self-harm behaviors", "Severe depression", "Psychotic episodes"],
      response: "Immediate safety assessment, crisis stabilization, emergency referrals",
      kenyanExample: "Responding to university student in Nairobi expressing suicidal ideation during exam stress period",
      globalExample: "Emergency intervention for veteran in US experiencing PTSD flashbacks and suicide risk"
    },
    {
      type: "Domestic Violence",
      indicators: ["Physical abuse", "Emotional abuse", "Safety threats", "Escalating violence"],
      response: "Safety planning, shelter coordination, legal advocacy, supportive counseling",
      kenyanExample: "Securing safe house for woman in Mombasa fleeing gender-based violence, coordinating with local police",
      globalExample: "24/7 crisis support for domestic violence survivor in London accessing emergency shelter"
    },
    {
      type: "Substance Abuse Crisis",
      indicators: ["Overdose risk", "Withdrawal symptoms", "Dangerous behaviors", "Loss of control"],
      response: "Medical evaluation, detox support, treatment planning, family coordination",
      kenyanExample: "Intervening with chang'aa addiction crisis in rural Nyanza, connecting family with rehabilitation center",
      globalExample: "Opioid overdose response and naloxone administration in Vancouver safe injection site"
    },
    {
      type: "Trauma & Disaster",
      indicators: ["Acute stress", "Traumatic events", "Community disaster", "Mass casualties"],
      response: "Psychological first aid, grief counseling, community debriefing, ongoing support",
      kenyanExample: "Providing crisis counseling to survivors and families after Westgate Mall attack in Nairobi",
      globalExample: "Disaster mental health response following earthquake in Turkey supporting displaced families"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-healing relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${therapyOffice})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/90"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-3 sm:mb-4 bg-red-100 text-red-800 border-red-200 text-xs sm:text-sm">Crisis Intervention</Badge>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 px-2">
              Crisis Intervention & Emergency Support
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
              Immediate, professional crisis intervention services available 24/7 to provide safety, 
              stabilization, and support during life's most challenging moments.
            </p>
            
            <Alert className="mb-6 sm:mb-8 max-w-2xl mx-auto border-red-200 bg-red-50">
              <AlertDescription className="text-red-800 text-xs sm:text-sm">
                <strong>Crisis Emergency:</strong> If you or someone you know is in immediate danger, 
                call 999 (Kenya) / 911 (US) or go to your nearest emergency room immediately.
              </AlertDescription>
            </Alert>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white w-full sm:w-auto text-sm sm:text-base">
                🇰🇪 Kenya: 1195 / 🌍 Global: 988
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white w-full sm:w-auto">
                Request Crisis Support
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Crisis Types */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 px-2">
              Types of Crisis Situations
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground px-4">
              Recognizing crisis situations and understanding culturally appropriate responses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {crisisTypes.map((crisis, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300">
                <CardHeader className="pb-3 sm:pb-4">
                  <CardTitle className="text-base sm:text-lg lg:text-xl text-foreground">{crisis.type}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground text-xs sm:text-sm mb-2">Warning Signs:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2">
                      {crisis.indicators.map((indicator, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0"></div>
                          <span className="text-xs sm:text-sm text-muted-foreground">{indicator}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-xs sm:text-sm mb-2">Our Response:</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{crisis.response}</p>
                  </div>
                  <div className="space-y-3 pt-2">
                    <div className="p-3 sm:p-4 bg-green-50 rounded-lg border border-green-200">
                      <Badge variant="outline" className="mb-2 text-[10px] sm:text-xs border-green-300 text-green-800">🇰🇪 Kenya Example</Badge>
                      <p className="text-xs sm:text-sm text-green-900 leading-relaxed">{crisis.kenyanExample}</p>
                    </div>
                    <div className="p-3 sm:p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <Badge variant="outline" className="mb-2 text-[10px] sm:text-xs border-blue-300 text-blue-800">🌍 Global Example</Badge>
                      <p className="text-xs sm:text-sm text-blue-900 leading-relaxed">{crisis.globalExample}</p>
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
            You Don't Have to Face This Alone
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Professional crisis intervention support is available 24/7. Reach out for immediate help or to develop your crisis prevention plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto">
              Crisis Support Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto">
              Crisis Prevention Planning
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CrisisIntervention;