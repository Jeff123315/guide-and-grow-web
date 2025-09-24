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
      specialties: ["Depression & Anxiety", "Trauma & PTSD", "Grief & Loss", "Life Transitions", "Stress Management"]
    },
    {
      title: "Group Therapy",
      description: "Supportive group sessions that foster connection and shared healing experiences",
      specialties: ["Support Groups", "Skills Training", "Psychoeducation", "Peer Recovery", "Process Groups"]
    },
    {
      title: "Couples Therapy",
      description: "Relationship counseling to improve communication and strengthen partnerships",
      specialties: ["Communication Skills", "Conflict Resolution", "Intimacy Issues", "Trust Building", "Pre-marital Counseling"]
    },
    {
      title: "Family Therapy",
      description: "Family-focused interventions to improve dynamics and relationships",
      specialties: ["Family Communication", "Parenting Support", "Adolescent Issues", "Blended Families", "Crisis Intervention"]
    }
  ];

  const therapeuticApproaches = [
    {
      name: "Cognitive Behavioral Therapy (CBT)",
      description: "Evidence-based approach focusing on thoughts, feelings, and behaviors",
      bestFor: ["Depression", "Anxiety", "Phobias", "OCD"]
    },
    {
      name: "Trauma-Informed Therapy",
      description: "Specialized treatment for trauma and PTSD using proven methods",
      bestFor: ["PTSD", "Complex Trauma", "Childhood Trauma", "Acute Stress"]
    },
    {
      name: "Solution-Focused Brief Therapy",
      description: "Goal-oriented approach emphasizing solutions rather than problems",
      bestFor: ["Life Transitions", "Goal Setting", "Motivation", "Brief Interventions"]
    },
    {
      name: "Mindfulness-Based Interventions",
      description: "Integration of mindfulness practices with traditional therapy",
      bestFor: ["Stress Reduction", "Emotional Regulation", "Present Moment Awareness", "Self-Compassion"]
    },
    {
      name: "Dialectical Behavior Therapy (DBT)",
      description: "Skills-based therapy for emotional regulation and interpersonal effectiveness",
      bestFor: ["Borderline Personality", "Self-Harm", "Emotional Dysregulation", "Relationship Issues"]
    },
    {
      name: "AI-Enhanced Therapy",
      description: "Innovative integration of AI tools to support traditional therapeutic methods",
      bestFor: ["Therapy Homework", "Progress Tracking", "Between-Session Support", "Personalized Resources"]
    }
  ];

  const mentalHealthConditions = [
    { condition: "Depression", prevalence: "Common", description: "More than just sadness - persistent feelings affecting daily life" },
    { condition: "Anxiety Disorders", prevalence: "Very Common", description: "Excessive worry, fear, or nervousness that interferes with functioning" },
    { condition: "PTSD & Trauma", prevalence: "Common", description: "Response to traumatic events affecting thoughts, emotions, and behavior" },
    { condition: "Bipolar Disorder", prevalence: "Moderate", description: "Mood disorder with alternating periods of depression and mania" },
    { condition: "OCD", prevalence: "Moderate", description: "Obsessive thoughts and compulsive behaviors that cause distress" },
    { condition: "Eating Disorders", prevalence: "Growing", description: "Serious conditions related to persistent eating behaviors" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-healing relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${counselingOffice})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/90"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Mental Health Counseling</Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Professional Mental Health Counseling
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Compassionate, evidence-based mental health services enhanced with innovative technology 
              to support your journey toward optimal mental wellness and personal growth.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90">
              Schedule Counseling Session
            </Button>
          </div>
        </div>
      </section>

      {/* Counseling Services */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Comprehensive Counseling Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Professional mental health support tailored to your individual needs and circumstances
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {counselingServices.map((service, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground text-sm">Specialties Include:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {specialty}
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

      {/* Therapeutic Approaches */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
              Evidence-Based Therapeutic Approaches
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {therapeuticApproaches.map((approach, index) => (
                <Card key={index} className="hover:shadow-card transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">{approach.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{approach.description}</p>
                    <div>
                      <h4 className="font-medium text-foreground text-sm mb-2">Best for:</h4>
                      <div className="flex flex-wrap gap-2">
                        {approach.bestFor.map((condition, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {condition}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mental Health Conditions */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
              Conditions We Treat
            </h2>
            <div className="space-y-4">
              {mentalHealthConditions.map((item, index) => (
                <Card key={index} className="hover:shadow-card transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold text-foreground">{item.condition}</h3>
                      <Badge variant={item.prevalence === 'Very Common' ? 'default' : item.prevalence === 'Common' ? 'secondary' : 'outline'}>
                        {item.prevalence}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Integration */}
      <section className="py-16 sm:py-20 bg-gradient-healing">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  AI-Enhanced Mental Health Care
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Combining traditional therapeutic expertise with cutting-edge AI technology to provide 
                  more personalized, accessible, and effective mental health support.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Personalized Treatment Plans</h4>
                      <p className="text-sm text-muted-foreground">AI-assisted analysis to create highly individualized therapy approaches</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">24/7 Support Tools</h4>
                      <p className="text-sm text-muted-foreground">AI-powered coping strategies and support available between sessions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Progress Tracking</h4>
                      <p className="text-sm text-muted-foreground">Advanced analytics to monitor therapeutic progress and outcomes</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/50 rounded-2xl p-8 shadow-card">
                <h3 className="text-xl font-bold text-foreground mb-6">Tech-Enhanced Features</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-white/70 rounded-lg">
                    <span className="text-foreground">Mood Tracking</span>
                    <Badge className="bg-green-100 text-green-800">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/70 rounded-lg">
                    <span className="text-foreground">AI Insights</span>
                    <Badge className="bg-blue-100 text-blue-800">Enhanced</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/70 rounded-lg">
                    <span className="text-foreground">Virtual Sessions</span>
                    <Badge className="bg-purple-100 text-purple-800">Available</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/70 rounded-lg">
                    <span className="text-foreground">Digital Worksheets</span>
                    <Badge className="bg-orange-100 text-orange-800">Interactive</Badge>
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
            Take the First Step Toward Better Mental Health
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Your mental health matters. Let's work together to help you achieve optimal wellbeing and personal growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Book Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MentalHealthCounseling;