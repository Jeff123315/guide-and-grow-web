import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Heart, Wind, AlertCircle } from "lucide-react";

const CrisisResources = () => {
  const emergencyContacts = [
    {
      name: "National Suicide Prevention Lifeline",
      phone: "988",
      description: "24/7 crisis support",
      icon: Phone,
      color: "text-red-500"
    },
    {
      name: "Crisis Text Line",
      phone: "Text HOME to 741741",
      description: "Free 24/7 text support",
      icon: MessageCircle,
      color: "text-primary"
    },
    {
      name: "Kenya Red Cross",
      phone: "1199",
      description: "Emergency services in Kenya",
      icon: Heart,
      color: "text-secondary"
    },
    {
      name: "Childline Kenya",
      phone: "116",
      description: "Child protection helpline",
      icon: Phone,
      color: "text-accent-green"
    }
  ];

  const breathingSteps = [
    { step: 1, instruction: "Find a comfortable position, sitting or standing" },
    { step: 2, instruction: "Breathe in slowly through your nose for 4 counts" },
    { step: 3, instruction: "Hold your breath gently for 4 counts" },
    { step: 4, instruction: "Exhale slowly through your mouth for 4 counts" },
    { step: 5, instruction: "Repeat for 3-5 minutes until you feel calmer" }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-accent/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-red-500/10 rounded-full px-4 py-2 mb-6">
            <AlertCircle className="h-4 w-4 text-red-500" />
            <span className="text-sm font-semibold text-red-500">Crisis Support</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Immediate Help
            <span className="block mt-2 gradient-text">Is Available</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            If you're in crisis or experiencing a mental health emergency, these resources can provide immediate support
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Emergency Contacts */}
          <Card className="shadow-card border-2 border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Phone className="h-6 w-6 text-primary" />
                Emergency Contacts
              </CardTitle>
              <CardDescription>
                Available 24/7 for immediate crisis support
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {emergencyContacts.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl bg-accent/20 hover:bg-accent/30 transition-colors"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0 ${contact.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">{contact.name}</h4>
                      <p className="text-lg font-bold text-primary mb-1">{contact.phone}</p>
                      <p className="text-sm text-muted-foreground">{contact.description}</p>
                    </div>
                  </div>
                );
              })}
              
              <div className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                <p className="text-sm text-foreground flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Emergency:</strong> If you or someone else is in immediate danger, 
                    call emergency services (999 in Kenya, 911 in US) right away.
                  </span>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Breathing Exercise */}
          <Card className="shadow-card border-2 border-border/50 bg-gradient-to-br from-primary/5 to-accent-green/5">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Wind className="h-6 w-6 text-accent-green" />
                Guided Breathing Exercise
              </CardTitle>
              <CardDescription>
                A simple technique to help calm anxiety and reduce stress
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mb-6">
                {breathingSteps.map((item) => (
                  <div key={item.step} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent-green text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <p className="text-foreground pt-1">{item.instruction}</p>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-accent-green/10 rounded-xl border border-accent-green/20">
                <p className="text-sm text-muted-foreground mb-3">
                  <strong className="text-foreground">Pro Tip:</strong> Place one hand on your chest 
                  and one on your belly. Focus on breathing deeply so your belly rises more than your chest.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="#contact">
                    Schedule a Session to Learn More Techniques
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Safety Planning */}
        <Card className="shadow-card border-2 border-primary/20 max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-center">When to Seek Help</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                  Seek immediate help if you're experiencing:
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                  <li>• Thoughts of harming yourself or others</li>
                  <li>• Feeling hopeless or trapped</li>
                  <li>• Unbearable emotional or physical pain</li>
                  <li>• Loss of interest in all activities</li>
                  <li>• Severe anxiety or panic attacks</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  Schedule an appointment if you notice:
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                  <li>• Persistent sadness or worry</li>
                  <li>• Changes in sleep or appetite</li>
                  <li>• Difficulty concentrating</li>
                  <li>• Withdrawing from loved ones</li>
                  <li>• Using substances to cope</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Button size="lg" variant="gradient" asChild>
                <a href="#contact">
                  Book Your Free Consultation
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CrisisResources;
