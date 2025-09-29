import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import groupTherapy from "@/assets/group-therapy-1.jpg";

const PolicyAdvocacy = () => {
  const advocacyServices = [
    {
      title: "Policy Analysis & Research",
      description: "Analyzing existing policies and researching evidence-based solutions",
      activities: ["Policy Impact Studies", "Literature Reviews", "Data Analysis", "Stakeholder Mapping"]
    },
    {
      title: "Legislative Advocacy",
      description: "Working with lawmakers to create and improve social welfare policies",
      activities: ["Bill Drafting", "Testimony Preparation", "Coalition Building", "Lobbying Efforts"]
    },
    {
      title: "Community Organizing",
      description: "Mobilizing communities to advocate for policy changes",
      activities: ["Grassroots Campaigns", "Public Education", "Petition Drives", "Town Hall Meetings"]
    },
    {
      title: "Social Justice Advocacy",
      description: "Promoting equity and addressing systemic discrimination",
      activities: ["Civil Rights Advocacy", "Anti-Discrimination Work", "Equity Audits", "Justice Campaigns"]
    }
  ];

  const policyAreas = [
    {
      area: "Mental Health Policy",
      icon: "🧠",
      description: "Advocating for improved mental health services, parity, and stigma reduction"
    },
    {
      area: "Child Welfare Reform",
      icon: "👶",
      description: "Working to strengthen child protection systems and family preservation"
    },
    {
      area: "Healthcare Access",
      icon: "🏥",
      description: "Promoting universal healthcare access and health equity initiatives"
    },
    {
      area: "Housing Rights",
      icon: "🏠",
      description: "Advocating for affordable housing and homelessness prevention programs"
    },
    {
      area: "Digital Equity",
      icon: "💻",
      description: "Ensuring equitable access to technology and digital literacy resources"
    },
    {
      area: "Youth Empowerment",
      icon: "🌟",
      description: "Supporting policies that promote youth development and educational opportunities"
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
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Policy & Advocacy</Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Policy Development & Social Advocacy
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Working to create systemic change through policy development, legislative advocacy, and community organizing 
              to address social inequities and promote justice for all members of our communities.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90">
              Join Our Advocacy Efforts
            </Button>
          </div>
        </div>
      </section>

      {/* Advocacy Services */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Policy & Advocacy Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive approaches to creating meaningful policy change and social justice
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {advocacyServices.map((service, index) => (
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

      {/* Policy Areas */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
              Key Policy Focus Areas
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {policyAreas.map((area, index) => (
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

      {/* Advocacy Approach */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  My Advocacy Philosophy
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Evidence-Based Advocacy</h3>
                      <p className="text-muted-foreground">
                        Using research, data, and lived experiences to inform policy recommendations.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Inclusive Participation</h3>
                      <p className="text-muted-foreground">
                        Centering the voices of those most affected by policy decisions in advocacy efforts.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Systems Thinking</h3>
                      <p className="text-muted-foreground">
                        Addressing root causes and systemic barriers rather than just symptoms.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Digital Innovation</h3>
                      <p className="text-muted-foreground">
                        Leveraging technology and AI to amplify advocacy efforts and reach broader audiences.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-healing rounded-2xl p-8 shadow-card">
                <h3 className="text-xl font-bold text-foreground mb-6">Current Campaigns</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Mental Health Parity</span>
                    <Badge variant="secondary">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Digital Divide Initiative</span>
                    <Badge variant="secondary">Growing</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Youth Tech Education</span>
                    <Badge variant="secondary">Funded</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Housing Justice</span>
                    <Badge variant="secondary">Coalition</Badge>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-white/50 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Policy Victory</h4>
                  <p className="text-sm text-muted-foreground">
                    "Tech for All Act" - Successfully advocated for legislation ensuring equitable 
                    technology access in underserved communities, combining digital literacy with mental health support.
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
            Be Part of the Change
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join our policy and advocacy efforts to create meaningful change in your community and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Get Involved
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              View Current Campaigns
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PolicyAdvocacy;