import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import counselingOffice from "@/assets/counseling-office-2.jpg";

const MedicalSocialWork = () => {
  const medicalServices = [
    {
      title: "Hospital Social Work",
      description: "Providing psychosocial support to patients and families during hospitalization",
      activities: ["Discharge Planning", "Crisis Intervention", "Resource Coordination", "Family Support"]
    },
    {
      title: "Chronic Disease Support",
      description: "Helping patients and families cope with long-term medical conditions",
      activities: ["Adaptation Counseling", "Support Groups", "Care Coordination", "Educational Resources"]
    },
    {
      title: "End-of-Life Care",
      description: "Compassionate support during terminal illness and bereavement",
      activities: ["Palliative Care Support", "Grief Counseling", "Advanced Directives", "Family Meetings"]
    },
    {
      title: "Healthcare Navigation",
      description: "Assisting patients in accessing and understanding healthcare services",
      activities: ["Insurance Advocacy", "Treatment Planning", "Provider Coordination", "Health Literacy"]
    }
  ];

  const specializations = [
    {
      area: "Trauma & Emergency Care",
      icon: "🚨",
      description: "Immediate psychosocial support for trauma patients and their families in emergency settings"
    },
    {
      area: "Pediatric Medical Care",
      icon: "👶",
      description: "Specialized support for children facing medical challenges and their families"
    },
    {
      area: "Mental Health Integration",
      icon: "🧠",
      description: "Addressing mental health needs within medical treatment settings"
    },
    {
      area: "Transplant Support",
      icon: "💗",
      description: "Comprehensive psychosocial evaluation and support throughout the transplant process"
    },
    {
      area: "Rehabilitation Services",
      icon: "🔄",
      description: "Supporting patients through physical, occupational, and cognitive rehabilitation"
    },
    {
      area: "Preventive Care",
      icon: "🛡️",
      description: "Promoting health behaviors and connecting patients to preventive health resources"
    }
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
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Medical Social Work</Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Medical & Healthcare Social Work
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Providing psychosocial support and advocacy within healthcare settings to help patients and families 
              navigate medical challenges, access resources, and maintain wellbeing throughout their healthcare journey.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90">
              Connect with Healthcare Services
            </Button>
          </div>
        </div>
      </section>

      {/* Medical Services */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Healthcare Social Work Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive psychosocial support integrated within healthcare delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {medicalServices.map((service, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground text-sm">Key Services:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.activities.map((activity, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{activity}</span>
                        </div>
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
              Medical Social Work Specializations
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {specializations.map((area, index) => (
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

      {/* Healthcare Integration */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Integrated Healthcare Approach
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Interdisciplinary Collaboration</h3>
                      <p className="text-muted-foreground">
                        Working as part of healthcare teams with doctors, nurses, and other professionals.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Patient-Centered Care</h3>
                      <p className="text-muted-foreground">
                        Focusing on the whole person and their psychosocial needs alongside medical treatment.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Continuity of Care</h3>
                      <p className="text-muted-foreground">
                        Ensuring seamless transitions between different levels and types of healthcare.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Technology-Enhanced Care</h3>
                      <p className="text-muted-foreground">
                        Utilizing health information systems and telehealth to improve patient outcomes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-healing rounded-2xl p-8 shadow-card">
                <h3 className="text-xl font-bold text-foreground mb-6">Healthcare Settings</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Emergency Departments</span>
                    <Badge variant="secondary">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Intensive Care Units</span>
                    <Badge variant="secondary">Specialized</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Outpatient Clinics</span>
                    <Badge variant="secondary">Regular</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Rehabilitation Centers</span>
                    <Badge variant="secondary">Partner</Badge>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-white/50 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Current Focus</h4>
                  <p className="text-sm text-muted-foreground">
                    "Healing Beyond Medicine" - Integrating comprehensive psychosocial support with 
                    advanced medical care to address the whole person during their healthcare journey.
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
            Navigate Your Healthcare Journey
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Get comprehensive psychosocial support to help you and your family through medical challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Request Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Learn About Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MedicalSocialWork;