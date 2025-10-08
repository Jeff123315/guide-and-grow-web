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
      activities: ["Crisis Counseling", "Behavioral Support", "Grief & Loss Support", "Anxiety Management"],
      kenyanExample: "Supporting Form 4 students at Alliance High School managing KCSE exam anxiety and career uncertainty",
      globalExample: "Counseling high school students in Chicago dealing with gang violence trauma and academic pressure"
    },
    {
      title: "Family Engagement",
      description: "Building partnerships between families, schools, and community resources",
      activities: ["Parent Conferences", "Home Visits", "Family Support Groups", "Resource Connections"],
      kenyanExample: "Conducting home visits in Mathare slum to engage parents of truant children, connecting families with bursaries",
      globalExample: "Facilitating immigrant parent engagement workshops in Toronto schools with translation services"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-healing relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url(${therapyOffice})` }}/>
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/90"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-3 sm:mb-4 bg-primary/10 text-primary border-primary/20 text-xs sm:text-sm">School Social Work</Badge>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 px-2">School Social Work Services</h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
              Supporting students, families, and school communities through comprehensive social work services 
              that address academic, social, and emotional barriers to learning and success.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 w-full sm:w-auto">Connect with School Services</Button>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 px-2">School-Based Social Work Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {schoolServices.map((service, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300">
                <CardHeader className="pb-3 sm:pb-4">
                  <CardTitle className="text-lg sm:text-xl lg:text-2xl text-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-sm sm:text-base text-muted-foreground">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground text-sm sm:text-base">Key Services:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.activities.map((activity, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full"></div>
                          <span className="text-sm sm:text-base text-muted-foreground">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 sm:p-4 bg-green-50 rounded-lg border border-green-200">
                      <Badge variant="outline" className="mb-2 text-xs sm:text-sm border-green-300 text-green-800">🇰🇪 Kenya</Badge>
                      <p className="text-sm sm:text-base text-green-900 leading-relaxed">{service.kenyanExample}</p>
                    </div>
                    <div className="p-3 sm:p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <Badge variant="outline" className="mb-2 text-xs sm:text-sm border-blue-300 text-blue-800">🌍 Global</Badge>
                      <p className="text-sm sm:text-base text-blue-900 leading-relaxed">{service.globalExample}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 px-2">Support Student Success</h2>
          <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto">Schedule Consultation</Button>
        </div>
      </section>
    </div>
  );
};

export default SchoolSocialWork;