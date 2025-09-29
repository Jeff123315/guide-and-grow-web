import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import therapyOffice from "@/assets/therapy-office-1.jpg";

const SchoolSocialWork = () => {
  const schoolServices = [
    {
      title: "Student Counseling",
      description: "Individual and group counseling to address academic, social, and emotional challenges",
      activities: ["Crisis Counseling", "Behavioral Support", "Grief & Loss Support", "Anxiety Management"]
    },
    {
      title: "Family Engagement",
      description: "Building partnerships between families, schools, and community resources",
      activities: ["Parent Conferences", "Home Visits", "Family Support Groups", "Resource Connections"]
    },
    {
      title: "Academic Support",
      description: "Addressing barriers to learning and academic achievement",
      activities: ["IEP/504 Planning", "Truancy Prevention", "Study Skills Training", "College Readiness"]
    },
    {
      title: "Crisis Response",
      description: "Immediate intervention during school crises and emergency situations",
      activities: ["Crisis Assessment", "Safety Planning", "Trauma Response", "Community Resources"]
    }
  ];

  const studentSupport = [
    {
      area: "Behavioral Interventions",
      icon: "🎯",
      description: "Developing strategies to address disruptive behaviors and promote positive classroom engagement"
    },
    {
      area: "Social Skills Development",
      icon: "🤝",
      description: "Teaching interpersonal skills, conflict resolution, and peer relationship building"
    },
    {
      area: "Mental Health Support",
      icon: "💚",
      description: "Addressing depression, anxiety, trauma, and other mental health concerns affecting learning"
    },
    {
      area: "Special Needs Advocacy",
      icon: "♿",
      description: "Supporting students with disabilities and ensuring appropriate accommodations"
    },
    {
      area: "Bullying Prevention",
      icon: "🛡️",
      description: "Implementing anti-bullying programs and creating safe school environments"
    },
    {
      area: "Career & Life Planning",
      icon: "🎓",
      description: "Helping students explore career options and develop post-graduation plans"
    }
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
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">School Social Work</Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              School Social Work Services
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Supporting students, families, and school communities through comprehensive social work services 
              that address academic, social, and emotional barriers to learning and success.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90">
              Connect with School Services
            </Button>
          </div>
        </div>
      </section>

      {/* School Services */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              School-Based Social Work Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive support services integrated within the educational environment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {schoolServices.map((service, index) => (
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

      {/* Student Support Areas */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
              Student Support Areas
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {studentSupport.map((area, index) => (
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

      {/* School Integration Approach */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  My School-Based Approach
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Collaborative Team Approach</h3>
                      <p className="text-muted-foreground">
                        Working closely with teachers, administrators, parents, and community partners.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Prevention & Early Intervention</h3>
                      <p className="text-muted-foreground">
                        Identifying and addressing challenges before they become major barriers to learning.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Culturally Responsive Practice</h3>
                      <p className="text-muted-foreground">
                        Honoring diverse backgrounds and adapting services to meet individual cultural needs.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Technology Integration</h3>
                      <p className="text-muted-foreground">
                        Using digital tools to enhance communication, track progress, and connect resources.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-healing rounded-2xl p-8 shadow-card">
                <h3 className="text-xl font-bold text-foreground mb-6">Current School Programs</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Peer Mediation Program</span>
                    <Badge variant="secondary">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Mental Health First Aid</span>
                    <Badge variant="secondary">Training</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Family Engagement Initiative</span>
                    <Badge variant="secondary">Expanding</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Digital Citizenship</span>
                    <Badge variant="secondary">New</Badge>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-white/50 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Featured Program</h4>
                  <p className="text-sm text-muted-foreground">
                    "Students First" - A comprehensive support program combining academic assistance, 
                    mental health resources, and technology skills development for at-risk students.
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
            Support Student Success
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Connect with our school social work services to help students overcome barriers and achieve their full potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Schedule Consultation
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

export default SchoolSocialWork;