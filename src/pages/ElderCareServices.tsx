import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import counselingSession from "@/assets/counseling-session-1.jpg";

const ElderCareServices = () => {
  const elderServices = [
    {
      title: "Care Coordination",
      description: "Comprehensive assessment and coordination of services for older adults",
      activities: ["Needs Assessment", "Service Planning", "Resource Linkage", "Care Monitoring"]
    },
    {
      title: "Family Caregiver Support",
      description: "Supporting family members caring for aging relatives",
      activities: ["Caregiver Education", "Respite Planning", "Support Groups", "Stress Management"]
    },
    {
      title: "Transition Planning",
      description: "Assisting with transitions between levels of care and living arrangements",
      activities: ["Discharge Planning", "Home Modifications", "Placement Assistance", "Adjustment Support"]
    },
    {
      title: "Elder Abuse Prevention",
      description: "Protecting older adults from abuse, neglect, and exploitation",
      activities: ["Risk Assessment", "Safety Planning", "Legal Advocacy", "Community Education"]
    }
  ];

  const specializations = [
    {
      area: "Dementia Care Support",
      icon: "🧠",
      description: "Specialized services for individuals with Alzheimer's and other dementias"
    },
    {
      area: "End-of-Life Planning",
      icon: "🕊️",
      description: "Compassionate support for advanced directives and end-of-life decisions"
    },
    {
      area: "Social Isolation",
      icon: "🤝",
      description: "Addressing loneliness and building social connections for older adults"
    },
    {
      area: "Benefits Advocacy",
      icon: "📋",
      description: "Helping navigate Medicare, Medicaid, and other benefit programs"
    },
    {
      area: "Mental Health",
      icon: "💚",
      description: "Addressing depression, anxiety, and other mental health concerns in aging"
    },
    {
      area: "Technology Integration",
      icon: "💻",
      description: "Helping older adults use technology to maintain independence and connections"
    }
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
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Elder Care Services</Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Geriatric & Elder Care Social Work
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Specialized support services for older adults and their families, promoting dignity, independence, 
              and quality of life through comprehensive assessment, care coordination, and advocacy.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90">
              Connect with Elder Services
            </Button>
          </div>
        </div>
      </section>

      {/* Elder Services */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Comprehensive Elder Care Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Holistic support services designed to meet the unique needs of older adults
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {elderServices.map((service, index) => (
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
              Elder Care Specializations
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

      {/* Aging Services Approach */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Person-Centered Aging Approach
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Dignity & Respect</h3>
                      <p className="text-muted-foreground">
                        Honoring the wisdom, experience, and autonomy of every older adult.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Aging in Place Support</h3>
                      <p className="text-muted-foreground">
                        Helping older adults maintain independence in their preferred living environment.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Intergenerational Connections</h3>
                      <p className="text-muted-foreground">
                        Facilitating meaningful relationships between older adults and younger generations.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Technology Empowerment</h3>
                      <p className="text-muted-foreground">
                        Teaching digital skills to enhance connectivity and access to services.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-healing rounded-2xl p-8 shadow-card">
                <h3 className="text-xl font-bold text-foreground mb-6">Elder Care Programs</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Senior Wellness Checks</span>
                    <Badge variant="secondary">Weekly</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Caregiver Support Groups</span>
                    <Badge variant="secondary">Monthly</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Tech Training Classes</span>
                    <Badge variant="secondary">Bi-weekly</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Memory Care Support</span>
                    <Badge variant="secondary">Ongoing</Badge>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-white/50 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Signature Program</h4>
                  <p className="text-sm text-muted-foreground">
                    "Golden Years, Digital Connections" - A comprehensive program combining traditional 
                    elder care with technology training to help seniors stay connected and independent.
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
            Support Healthy Aging
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Connect with specialized elder care services designed to promote independence, dignity, and quality of life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Schedule Assessment
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

export default ElderCareServices;