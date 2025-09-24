import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import groupTherapy from "@/assets/group-therapy-1.jpg";

const CommunitySocialWork = () => {
  const communityServices = [
    {
      title: "Community Needs Assessment",
      description: "Systematic evaluation of community strengths, challenges, and resource gaps",
      activities: ["Surveys & Focus Groups", "Stakeholder Mapping", "Data Analysis", "Resource Inventory"]
    },
    {
      title: "Program Development",
      description: "Design and implementation of community-based programs and interventions",
      activities: ["Program Planning", "Grant Writing", "Partnership Building", "Implementation Strategy"]
    },
    {
      title: "Community Organizing",
      description: "Mobilizing community members to address social issues and create positive change",
      activities: ["Leadership Development", "Coalition Building", "Advocacy Campaigns", "Social Action"]
    },
    {
      title: "Resource Development",
      description: "Connecting communities with essential resources and services",
      activities: ["Resource Mapping", "Service Coordination", "Capacity Building", "Sustainability Planning"]
    }
  ];

  const focusAreas = [
    {
      title: "Youth Development",
      icon: "👥",
      description: "Empowering young people through mentorship, skill-building, and leadership opportunities"
    },
    {
      title: "Mental Health Awareness",
      icon: "🧠",
      description: "Reducing stigma and increasing access to mental health resources in the community"
    },
    {
      title: "Technology Access",
      icon: "💻",
      description: "Bridging the digital divide and promoting tech literacy in underserved communities"
    },
    {
      title: "Economic Empowerment",
      icon: "💰",
      description: "Supporting job creation, entrepreneurship, and financial literacy initiatives"
    },
    {
      title: "Health & Wellness",
      icon: "🌱",
      description: "Promoting preventive health practices and community wellness programs"
    },
    {
      title: "Social Justice",
      icon: "⚖️",
      description: "Advocating for equity, inclusion, and systemic change in community policies"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-healing relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${groupTherapy})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/90"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Community Social Work</Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Community Development & Social Change
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Working alongside communities to identify strengths, address challenges, and create sustainable 
              solutions that empower residents and promote collective wellbeing.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90">
              Partner With Our Community
            </Button>
          </div>
        </div>
      </section>

      {/* Community Services */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Community Services & Interventions
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive approaches to community development and social change
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {communityServices.map((service, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground text-sm">Key Activities:</h4>
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

      {/* Focus Areas */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
              Community Focus Areas
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {focusAreas.map((area, index) => (
                <Card key={index} className="text-center hover:shadow-card transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{area.icon}</div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{area.title}</h3>
                    <p className="text-sm text-muted-foreground">{area.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Approach */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  My Community Approach
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Asset-Based Development</h3>
                      <p className="text-muted-foreground">
                        Starting with community strengths and existing resources rather than focusing on deficits.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Participatory Engagement</h3>
                      <p className="text-muted-foreground">
                        Ensuring community members are active participants in all aspects of program development.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Capacity Building</h3>
                      <p className="text-muted-foreground">
                        Developing local leadership and organizational capacity for sustainable change.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Tech Integration</h3>
                      <p className="text-muted-foreground">
                        Leveraging technology and AI to enhance community services and access to resources.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-healing rounded-2xl p-8 shadow-card">
                <h3 className="text-xl font-bold text-foreground mb-6">Community Impact Goals</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Youth Empowerment</span>
                    <Badge variant="secondary">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Digital Literacy</span>
                    <Badge variant="secondary">Expanding</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Mental Health Access</span>
                    <Badge variant="secondary">Priority</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Economic Development</span>
                    <Badge variant="secondary">Growing</Badge>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-white/50 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Current Initiative</h4>
                  <p className="text-sm text-muted-foreground">
                    "Tech for All" - A community program combining mental health support with 
                    technology education to empower youth and families in underserved areas.
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
            Join Our Community Initiative
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Partner with us to create positive change and build stronger, more resilient communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Get Involved
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

export default CommunitySocialWork;