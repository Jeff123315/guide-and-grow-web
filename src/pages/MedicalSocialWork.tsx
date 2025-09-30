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
      activities: ["Discharge Planning", "Crisis Intervention", "Resource Coordination", "Family Support"],
      kenyanExample: "Supporting patient at Kenyatta National Hospital navigating TB treatment, connecting with NHIF and community health workers",
      globalExample: "Coordinating discharge planning for stroke patient in London hospital ensuring home care services"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-healing relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url(${counselingOffice})` }}/>
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-3 sm:mb-4 bg-primary/10 text-primary border-primary/20 text-xs sm:text-sm">Medical Social Work</Badge>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 px-2">Medical & Healthcare Social Work</h1>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 w-full sm:w-auto">Connect with Healthcare Services</Button>
          </div>
        </div>
      </section>
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {medicalServices.map((service, index) => (
              <Card key={index} className="hover:shadow-card transition-all">
                <CardHeader><CardTitle className="text-base sm:text-lg">{service.title}</CardTitle></CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-green-50 rounded border border-green-200">
                    <Badge variant="outline" className="mb-2 text-xs">🇰🇪 Kenya</Badge>
                    <p className="text-xs text-green-900">{service.kenyanExample}</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded border border-blue-200">
                    <Badge variant="outline" className="mb-2 text-xs">🌍 Global</Badge>
                    <p className="text-xs text-blue-900">{service.globalExample}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MedicalSocialWork;