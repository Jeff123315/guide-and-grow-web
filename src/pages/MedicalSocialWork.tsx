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
    },
    {
      title: "Chronic Disease Management",
      description: "Long-term support for patients managing chronic health conditions",
      activities: ["Disease Education", "Medication Adherence", "Lifestyle Counseling", "Support Groups"],
      kenyanExample: "Running diabetes management group at Aga Khan Hospital Nairobi teaching self-care and dietary changes",
      globalExample: "Coordinating multidisciplinary care team for heart failure patient in Mayo Clinic"
    },
    {
      title: "Palliative & Hospice Care",
      description: "End-of-life care planning and support for terminally ill patients and families",
      activities: ["Advance Care Planning", "Pain Management Advocacy", "Grief Counseling", "Bereavement Support"],
      kenyanExample: "Providing home-based palliative care in Kisumu for cancer patient, respecting family death rituals",
      globalExample: "Hospice social work in Seattle supporting family through end-stage ALS progression"
    },
    {
      title: "Transplant Social Work",
      description: "Psychosocial evaluation and support throughout organ transplantation process",
      activities: ["Transplant Evaluation", "Living Donor Support", "Post-Transplant Counseling", "Medication Compliance"],
      kenyanExample: "Evaluating kidney transplant candidate at Nairobi Hospital, assessing family living donor dynamics",
      globalExample: "Supporting liver transplant recipient in Toronto managing post-transplant anxiety and medication regimen"
    },
    {
      title: "Emergency Department",
      description: "Crisis intervention and resource connection in emergency medical settings",
      activities: ["Crisis Assessment", "Safety Planning", "Trauma Response", "Community Referrals"],
      kenyanExample: "Responding to domestic violence case at Nakuru Level 5 Hospital, coordinating safe shelter placement",
      globalExample: "Emergency psychiatric evaluation in New York ER for suicidal patient, arranging inpatient admission"
    },
    {
      title: "Maternal & Child Health",
      description: "Supporting pregnant women, new mothers, and children in healthcare settings",
      activities: ["Prenatal Support", "High-Risk Pregnancy", "NICU Family Support", "Infant Development"],
      kenyanExample: "Supporting HIV-positive expectant mother in Mombasa with PMTCT adherence and infant care planning",
      globalExample: "NICU social work in Boston Children's Hospital for premature twins' family navigating medical complexity"
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
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 px-2">
              Medical Social Work Services
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground px-4">
              Comprehensive psychosocial support across healthcare settings and specialties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {medicalServices.map((service, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300">
                <CardHeader className="pb-3 sm:pb-4">
                  <CardTitle className="text-base sm:text-lg text-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-xs sm:text-sm text-muted-foreground">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground text-xs">Key Activities:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {service.activities.map((activity, idx) => (
                        <div key={idx} className="flex items-start space-x-1">
                          <div className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                          <span className="text-[10px] sm:text-xs text-muted-foreground leading-tight">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="p-2 sm:p-3 bg-green-50 rounded border border-green-200">
                      <Badge variant="outline" className="mb-1 text-[10px] border-green-300 text-green-800">🇰🇪 Kenya</Badge>
                      <p className="text-[10px] sm:text-xs text-green-900 leading-relaxed">{service.kenyanExample}</p>
                    </div>
                    <div className="p-2 sm:p-3 bg-blue-50 rounded border border-blue-200">
                      <Badge variant="outline" className="mb-1 text-[10px] border-blue-300 text-blue-800">🌍 Global</Badge>
                      <p className="text-[10px] sm:text-xs text-blue-900 leading-relaxed">{service.globalExample}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 px-2">
            Healthcare Navigation Support
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Medical social workers help patients and families navigate complex healthcare systems with compassion and expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto">
              Request Support
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

export default MedicalSocialWork;