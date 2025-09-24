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
      response: "Immediate safety assessment, crisis stabilization, emergency referrals"
    },
    {
      type: "Substance Abuse Crisis",
      indicators: ["Overdose risk", "Withdrawal symptoms", "Dangerous behaviors", "Loss of control"],
      response: "Medical evaluation, detox support, treatment planning, family coordination"
    },
    {
      type: "Domestic Violence",
      indicators: ["Physical abuse", "Emotional abuse", "Safety threats", "Escalating violence"],
      response: "Safety planning, shelter coordination, legal advocacy, supportive counseling"
    },
    {
      type: "Child Protection Crisis",
      indicators: ["Child abuse", "Neglect", "Abandonment", "Immediate danger"],
      response: "Child safety assessment, protective services, family crisis support"
    }
  ];

  const interventionPhases = [
    {
      phase: "Phase 1: Initial Contact & Assessment",
      duration: "0-30 minutes",
      focus: "Safety & Stabilization",
      activities: [
        "Immediate safety assessment",
        "Crisis de-escalation",
        "Establish rapport and trust",
        "Gather essential information"
      ]
    },
    {
      phase: "Phase 2: Problem Identification",
      duration: "30-60 minutes", 
      focus: "Understanding the Crisis",
      activities: [
        "Identify precipitating factors",
        "Assess coping resources",
        "Explore support systems",
        "Evaluate risk factors"
      ]
    },
    {
      phase: "Phase 3: Solution Development",
      duration: "1-2 hours",
      focus: "Action Planning",
      activities: [
        "Develop safety plan",
        "Identify immediate resources",
        "Create action steps",
        "Plan follow-up care"
      ]
    },
    {
      phase: "Phase 4: Implementation & Follow-up",
      duration: "Ongoing",
      focus: "Stabilization & Recovery",
      activities: [
        "Execute crisis plan",
        "Monitor progress",
        "Adjust interventions",
        "Transition to ongoing care"
      ]
    }
  ];

  const crisisResources = [
    { service: "24/7 Crisis Hotline", contact: "1-800-CRISIS", description: "Immediate phone support" },
    { service: "Mobile Crisis Team", contact: "Emergency Response", description: "On-site crisis intervention" },
    { service: "Crisis Stabilization", contact: "Short-term Support", description: "Temporary residential support" },
    { service: "Emergency Psychiatric", contact: "Hospital-based", description: "Immediate psychiatric evaluation" },
    { service: "Domestic Violence Shelter", contact: "Safe Housing", description: "Protected emergency housing" },
    { service: "Child Protective Services", contact: "Child Safety", description: "Child protection and safety" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-healing relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${therapyOffice})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/90"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-red-100 text-red-800 border-red-200">Crisis Intervention</Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Crisis Intervention & Emergency Support
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Immediate, professional crisis intervention services available 24/7 to provide safety, 
              stabilization, and support during life's most challenging moments.
            </p>
            
            <Alert className="mb-8 max-w-2xl mx-auto border-red-200 bg-red-50">
              <AlertDescription className="text-red-800">
                <strong>Crisis Emergency:</strong> If you or someone you know is in immediate danger, 
                call 911 or go to your nearest emergency room immediately.
              </AlertDescription>
            </Alert>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                Emergency Crisis Line: 1-800-CRISIS
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Request Crisis Support
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Crisis Types */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Types of Crisis Situations
            </h2>
            <p className="text-lg text-muted-foreground">
              Recognizing crisis situations and understanding appropriate responses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {crisisTypes.map((crisis, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">{crisis.type}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground text-sm mb-2">Warning Signs:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                      {crisis.indicators.map((indicator, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{indicator}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm mb-2">Our Response:</h4>
                    <p className="text-sm text-muted-foreground">{crisis.response}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Intervention Process */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
              Crisis Intervention Process
            </h2>
            <div className="space-y-6">
              {interventionPhases.map((phase, index) => (
                <Card key={index} className="hover:shadow-card transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-4">
                      <div>
                        <Badge variant="outline" className="mb-2">{phase.duration}</Badge>
                        <h3 className="text-lg font-bold text-foreground">{phase.phase}</h3>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">{phase.focus}</h4>
                      </div>
                      <div className="lg:col-span-2">
                        <h4 className="font-semibold text-foreground mb-2">Key Activities:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                          {phase.activities.map((activity, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                              <span className="text-sm text-muted-foreground">{activity}</span>
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

      {/* Crisis Resources */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
              Crisis Support Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {crisisResources.map((resource, index) => (
                <Card key={index} className="text-center hover:shadow-card transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-red-600 font-bold text-lg">!</span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{resource.service}</h3>
                    <Badge variant="secondary" className="mb-3">{resource.contact}</Badge>
                    <p className="text-sm text-muted-foreground">{resource.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prevention & Preparation */}
      <section className="py-16 sm:py-20 bg-gradient-healing">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Crisis Prevention & Preparation
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  While we can't always prevent crises, we can help you develop skills and resources 
                  to better manage difficult situations when they arise.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Safety Planning</h4>
                      <p className="text-sm text-muted-foreground">Develop personalized safety plans for various crisis scenarios</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Coping Skills Training</h4>
                      <p className="text-sm text-muted-foreground">Learn healthy coping strategies and stress management techniques</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Support Network Building</h4>
                      <p className="text-sm text-muted-foreground">Strengthen your support system and identify crisis contacts</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Early Warning Recognition</h4>
                      <p className="text-sm text-muted-foreground">Identify early signs of crisis to seek help proactively</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/50 rounded-2xl p-8 shadow-card">
                <h3 className="text-xl font-bold text-foreground mb-6">Emergency Contacts</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                    <h4 className="font-semibold text-red-800 mb-2">Emergency Services</h4>
                    <p className="text-red-700 font-mono text-lg">911</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-800 mb-2">National Suicide Prevention</h4>
                    <p className="text-blue-700 font-mono text-lg">988</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-purple-800 mb-2">Crisis Text Line</h4>
                    <p className="text-purple-700 font-mono text-lg">Text HOME to 741741</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">24/7 Crisis Support</h4>
                    <p className="text-green-700 font-mono text-lg">1-800-CRISIS</p>
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
            You Don't Have to Face This Alone
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Professional crisis intervention support is available 24/7. Reach out for immediate help or to develop your crisis prevention plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Crisis Support Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Crisis Prevention Planning
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CrisisIntervention;