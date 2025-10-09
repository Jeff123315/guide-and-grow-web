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
      activities: ["Surveys & Focus Groups", "Stakeholder Mapping", "Data Analysis", "Resource Inventory"],
      kenyanExample: "Conducting community assessment in Kibera slums to identify mental health needs and existing community support structures like chamas",
      globalExample: "Assessing immigrant community needs in Toronto's diverse neighborhoods to design culturally appropriate services"
    },
    {
      title: "Program Development",
      description: "Design and implementation of community-based programs and interventions",
      activities: ["Program Planning", "Grant Writing", "Partnership Building", "Implementation Strategy"],
      kenyanExample: "Developing youth mentorship program in Mathare targeting school dropouts, partnering with local churches and community leaders",
      globalExample: "Creating after-school programs for at-risk youth in inner-city Los Angeles with local stakeholders"
    },
    {
      title: "Community Organizing",
      description: "Mobilizing community members to address social issues and create positive change",
      activities: ["Leadership Development", "Coalition Building", "Advocacy Campaigns", "Social Action"],
      kenyanExample: "Organizing Mombasa coastal communities to advocate for better mental health services at Mombasa County hospitals",
      globalExample: "Mobilizing refugee communities in Germany to improve access to integration services and language programs"
    },
    {
      title: "Resource Development",
      description: "Connecting communities with essential resources and services",
      activities: ["Resource Mapping", "Service Coordination", "Capacity Building", "Sustainability Planning"],
      kenyanExample: "Linking Turkana drought-affected communities with water, food security programs, and psychosocial support services",
      globalExample: "Connecting homeless populations in Seattle with housing, healthcare, and employment resources"
    }
  ];

  const socialProblems = [
    {
      title: "Understanding Social Problems",
      description: "Social problems emerge from the interaction of individuals, groups, and social structures",
      perspectives: [
        {
          type: "Objective Problems",
          details: "Observable, measurable issues supported by empirical data (e.g., poverty rates, crime statistics, unemployment)"
        },
        {
          type: "Subjective Problems",
          details: "Issues shaped by perceptions, beliefs, and values that depend on social interpretation"
        },
        {
          type: "Structural Perspective",
          details: "Problems arising from social, political, and economic systems that create inequality and disadvantage"
        },
        {
          type: "Cultural Perspective",
          details: "Problems emerging from shared beliefs, values, and norms within cultures"
        }
      ]
    }
  ];

  const urbanIssues = [
    {
      title: "The Slum & Underclass",
      description: "Urban poverty concentration and social marginalization in informal settlements",
      kenyanExample: "Kibera slum in Nairobi - overcrowding, poor sanitation, limited access to services, informal economy reliance",
      globalExample: "Brazilian favelas - urban poverty, gang violence, lack of state services, community self-organization",
      interventions: ["Community-based upgrading", "Tenure security programs", "Infrastructure improvement", "Economic empowerment"]
    },
    {
      title: "Gentrification Effects",
      description: "Urban transformation that displaces low-income residents as wealthier populations move in",
      kenyanExample: "Kilimani and Kileleshwa neighborhoods - rising rents displacing long-term residents, changing community character",
      globalExample: "Brooklyn, New York - displacement of Black communities, cultural erasure, affordability crisis",
      challenges: ["Resident displacement", "Cultural changes", "Economic inequality", "Access to services disparity"]
    },
    {
      title: "Social Organization in Neighborhoods",
      description: "Community networks, institutions, and relationships that define neighborhood functioning",
      strengths: ["Social cohesion and collective action", "Strong support networks", "Community institutions (churches, schools)", "Social capital development"],
      challenges: ["Weak social capital in low-income areas", "High residential instability", "Limited institutional support", "Economic pressures"]
    }
  ];

  const focusAreas = [
    {
      title: "Youth Development",
      icon: "👥",
      description: "Empowering young people through mentorship, skill-building, and leadership opportunities",
      kenyanExample: "Running tech training programs for Kenyan youth through partnerships with Safaricom Foundation",
      globalExample: "Youth leadership programs in Brazilian favelas"
    },
    {
      title: "Mental Health Awareness",
      icon: "🧠",
      description: "Reducing stigma and increasing access to mental health resources in the community",
      kenyanExample: "Conducting 'Talking Mental Health' campaigns in rural Nyanza region to reduce stigma around mental illness",
      globalExample: "Mental health first aid training in Australian communities"
    },
    {
      title: "Technology Access",
      icon: "💻",
      description: "Bridging the digital divide and promoting tech literacy in underserved communities",
      kenyanExample: "Establishing community computer labs in Garissa and training residents on M-Pesa and digital literacy",
      globalExample: "Digital inclusion programs for elderly in rural India"
    },
    {
      title: "Economic Empowerment",
      icon: "💰",
      description: "Supporting job creation, entrepreneurship, and financial literacy initiatives",
      kenyanExample: "Supporting mama mbogas (market women) in Gikomba with financial literacy and table banking training",
      globalExample: "Microfinance programs for women entrepreneurs in Bangladesh"
    },
    {
      title: "Health & Wellness",
      icon: "🌱",
      description: "Promoting preventive health practices and community wellness programs",
      kenyanExample: "Organizing community health education in Kisii on HIV prevention, malaria, and nutrition",
      globalExample: "Community wellness initiatives addressing diabetes in Pacific Islander communities"
    },
    {
      title: "Social Justice",
      icon: "⚖️",
      description: "Advocating for equity, inclusion, and systemic change in community policies",
      kenyanExample: "Advocating for disability rights and accessibility in Nairobi's public transport system (matatus and buses)",
      globalExample: "Fighting for racial equity in US criminal justice system"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-healing relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${groupTherapy})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/90"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-3 sm:mb-4 bg-primary/10 text-primary border-primary/20 text-xs sm:text-sm">Community Social Work</Badge>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 px-2">
              Community Development & Social Change
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
              Working alongside communities to identify strengths, address challenges, and create sustainable 
              solutions that empower residents and promote collective wellbeing.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 w-full sm:w-auto">
              Partner With Our Community
            </Button>
          </div>
        </div>
      </section>

      {/* Community Services */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 px-2">
              Community Services & Interventions
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground px-4">
              Comprehensive approaches to community development and social change
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {communityServices.map((service, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300">
                <CardHeader className="pb-3 sm:pb-4">
                  <CardTitle className="text-lg sm:text-xl lg:text-2xl text-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-sm sm:text-base text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground text-sm sm:text-base">Key Activities:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.activities.map((activity, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-sm sm:text-base text-muted-foreground">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 sm:p-4 bg-green-50 rounded-lg border border-green-200">
                      <Badge variant="outline" className="mb-2 text-xs sm:text-sm border-green-300 text-green-800">🇰🇪 Kenya Example</Badge>
                      <p className="text-sm sm:text-base text-green-900 leading-relaxed">{service.kenyanExample}</p>
                    </div>
                    <div className="p-3 sm:p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <Badge variant="outline" className="mb-2 text-xs sm:text-sm border-blue-300 text-blue-800">🌍 Global Example</Badge>
                      <p className="text-sm sm:text-base text-blue-900 leading-relaxed">{service.globalExample}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Problems Framework */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-foreground mb-6 sm:mb-8 text-center px-2">
              Understanding Social Problems
            </h2>
            <Card className="mb-8">
              <CardContent className="p-4 sm:p-6">
                <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
                  Social problems are conditions that negatively affect individuals or groups and require societal attention. 
                  They emerge from interactions between individuals, groups, and social structures.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {socialProblems[0].perspectives.map((perspective, index) => (
                    <div key={index} className="p-3 sm:p-4 bg-background rounded-lg border">
                      <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">{perspective.type}</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{perspective.details}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Urban Issues */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-foreground mb-6 sm:mb-8 text-center px-2">
              Urbanization & Community Challenges
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
              {urbanIssues.map((issue, index) => (
                <Card key={index} className="hover:shadow-card transition-all">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base sm:text-lg">{issue.title}</CardTitle>
                    <CardDescription className="text-xs sm:text-sm">{issue.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {issue.interventions && (
                      <div className="space-y-1">
                        <h4 className="font-semibold text-xs sm:text-sm">Interventions:</h4>
                        {issue.interventions.map((intervention, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <div className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                            <span className="text-xs text-muted-foreground">{intervention}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    {issue.challenges && (
                      <div className="space-y-1">
                        <h4 className="font-semibold text-xs sm:text-sm">Challenges:</h4>
                        {issue.challenges.map((challenge, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <div className="w-1 h-1 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                            <span className="text-xs text-muted-foreground">{challenge}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    {issue.strengths && (
                      <div className="space-y-1">
                        <h4 className="font-semibold text-xs sm:text-sm">Strengths:</h4>
                        {issue.strengths.map((strength, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <div className="w-1 h-1 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                            <span className="text-xs text-muted-foreground">{strength}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    {issue.kenyanExample && (
                      <div className="p-2 bg-green-50 rounded border border-green-200">
                        <Badge variant="outline" className="mb-1 text-[10px] border-green-300 text-green-800">🇰🇪 Kenya</Badge>
                        <p className="text-[10px] text-green-900">{issue.kenyanExample}</p>
                      </div>
                    )}
                    {issue.globalExample && (
                      <div className="p-2 bg-blue-50 rounded border border-blue-200">
                        <Badge variant="outline" className="mb-1 text-[10px] border-blue-300 text-blue-800">🌍 Global</Badge>
                        <p className="text-[10px] text-blue-900">{issue.globalExample}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-foreground mb-6 sm:mb-8 text-center px-2">
              Community Focus Areas
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {focusAreas.map((area, index) => (
                <Card key={index} className="text-center hover:shadow-card transition-all duration-300">
                  <CardContent className="p-4 sm:p-6">
                    <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{area.icon}</div>
                    <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">{area.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-4 leading-relaxed">{area.description}</p>
                    <div className="space-y-2 text-left">
                      <div className="p-2 bg-green-50 rounded text-[10px] sm:text-xs text-green-900">
                        🇰🇪 {area.kenyanExample}
                      </div>
                      <div className="p-2 bg-blue-50 rounded text-[10px] sm:text-xs text-blue-900">
                        🌍 {area.globalExample}
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
            Join Our Community Initiative
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Partner with us to create positive change and build stronger, more resilient communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto">
              Get Involved
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

export default CommunitySocialWork;