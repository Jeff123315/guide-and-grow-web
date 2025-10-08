import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import counselingSession from "@/assets/counseling-session-1.jpg";

const ElderCareServices = () => {
  const elderServices = [
    {
      title: "Care Coordination",
      description: "Comprehensive coordination of healthcare, social services, and support systems",
      activities: ["Service Assessment", "Care Planning", "Provider Coordination", "Family Consultation"],
      kenyanExample: "Coordinating care for elderly mzee in Kiambu with diabetes, arranging home visits from CHWs and family support",
      globalExample: "Managing complex care coordination for elderly woman in Boston with dementia and multiple chronic conditions"
    },
    {
      title: "Long-Term Care Planning",
      description: "Planning and placement services for assisted living and nursing care",
      activities: ["Needs Assessment", "Facility Evaluation", "Financial Planning", "Transition Support"],
      kenyanExample: "Helping family in Nakuru explore care options for elderly parent - home care vs. private nursing home",
      globalExample: "Facilitating nursing home placement in Toronto for elder requiring 24/7 skilled nursing care"
    },
    {
      title: "Caregiver Support",
      description: "Education, counseling, and respite services for family caregivers",
      activities: ["Caregiver Education", "Support Groups", "Respite Care", "Stress Management"],
      kenyanExample: "Supporting daughter in Mombasa caring for mother with Alzheimer's while balancing work and family responsibilities",
      globalExample: "Leading caregiver support group in London for adult children managing parent dementia care"
    },
    {
      title: "Elder Abuse Prevention",
      description: "Identifying, reporting, and preventing abuse, neglect, and exploitation",
      activities: ["Risk Assessment", "Safety Planning", "Legal Advocacy", "Protective Services"],
      kenyanExample: "Investigating suspected financial exploitation of elderly widow in Kisumu by distant relatives",
      globalExample: "Coordinating Adult Protective Services response to neglect case in rural Alabama nursing facility"
    },
    {
      title: "Health Advocacy",
      description: "Supporting healthcare decision-making and navigating medical systems",
      activities: ["Medical Interpretation", "Treatment Advocacy", "Insurance Navigation", "Healthcare Coordination"],
      kenyanExample: "Helping elderly patient at Kenyatta Hospital understand treatment options and navigate NHIF coverage",
      globalExample: "Advocating for appropriate pain management for elder in Australian hospice care"
    },
    {
      title: "Mental Health Services",
      description: "Counseling and support for depression, anxiety, grief, and adjustment",
      activities: ["Individual Counseling", "Grief Support", "Depression Treatment", "Life Review Therapy"],
      kenyanExample: "Providing grief counseling to elderly man in Nyeri after wife's death, addressing isolation and depression",
      globalExample: "Treating late-life depression in elderly gentleman in Chicago adjusting to assisted living placement"
    }
  ];

  const specializations = [
    {
      area: "Dementia & Alzheimer's Care",
      icon: "🧠",
      kenyanContext: "Supporting families caring for elders with memory loss; limited formal dementia services; reliance on family care",
      globalContext: "Memory care facilities; medication management; caregiver education programs; day programs",
    },
    {
      area: "End-of-Life Planning",
      icon: "🕊️",
      kenyanContext: "Advance care planning respecting cultural values; home-based palliative care; family death rituals",
      globalContext: "Hospice services; living wills; do-not-resuscitate orders; medical aid in dying counseling",
    },
    {
      area: "Chronic Disease Management",
      icon: "⚕️",
      kenyanContext: "Managing diabetes, hypertension in resource-limited settings; medication access; home-based care",
      globalContext: "Complex care coordination; multiple specialists; medication reconciliation; telehealth",
    },
    {
      area: "Social Isolation",
      icon: "💔",
      kenyanContext: "Rural elders living alone; urban migration of youth; church-based senior groups",
      globalContext: "Senior centers; friendly visitor programs; technology training; intergenerational programs",
    },
    {
      area: "Financial Security",
      icon: "💰",
      kenyanContext: "Limited pension coverage; family financial support expectations; poverty among elderly",
      globalContext: "Social Security benefits; Medicare/Medicaid; retirement planning; elder financial abuse",
    },
    {
      area: "Housing & Living Arrangements",
      icon: "🏠",
      kenyanContext: "Multi-generational households; shamba retirement; limited assisted living options",
      globalContext: "Aging in place; assisted living; nursing homes; senior housing communities",
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-healing relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url(${counselingSession})` }}/>
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-3 sm:mb-4 bg-primary/10 text-primary border-primary/20 text-xs sm:text-sm">Elder Care Services</Badge>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 px-2">
              Geriatric & Elder Care Social Work
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
              Comprehensive social work services for older adults and their families, honoring dignity, 
              independence, and cultural values while navigating the aging journey with compassion and expertise.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 w-full sm:w-auto">
              Connect with Elder Services
            </Button>
          </div>
        </div>
      </section>

      {/* Elder Services */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 px-2">
              Comprehensive Elder Care Services
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground px-4">
              Supporting older adults and families with culturally-sensitive, holistic care coordination
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {elderServices.map((service, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300">
                <CardHeader className="pb-3 sm:pb-4">
                  <CardTitle className="text-lg sm:text-xl text-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-sm sm:text-base text-muted-foreground">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground text-sm">Services Include:</h4>
                    <div className="space-y-1">
                      {service.activities.map((activity, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="p-2 sm:p-3 bg-green-50 rounded border border-green-200">
                      <Badge variant="outline" className="mb-1 text-xs border-green-300 text-green-800">🇰🇪 Kenya</Badge>
                      <p className="text-[10px] sm:text-xs text-green-900 leading-relaxed">{service.kenyanExample}</p>
                    </div>
                    <div className="p-2 sm:p-3 bg-blue-50 rounded border border-blue-200">
                      <Badge variant="outline" className="mb-1 text-xs border-blue-300 text-blue-800">🌍 Global</Badge>
                      <p className="text-sm text-blue-900 leading-relaxed">{service.globalExample}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-foreground mb-6 sm:mb-8 text-center px-2">
              Areas of Elder Care Expertise
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {specializations.map((spec, index) => (
                <Card key={index} className="hover:shadow-card transition-all">
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl sm:text-4xl mb-3">{spec.icon}</div>
                    <h3 className="font-semibold text-foreground mb-3 text-sm sm:text-base">{spec.area}</h3>
                    <div className="space-y-2 text-left">
                      <div className="p-2 sm:p-3 bg-green-50 rounded border border-green-200">
                        <p className="text-xs sm:text-sm font-medium text-green-800 mb-1">🇰🇪 Kenyan Context</p>
                        <p className="text-xs sm:text-sm text-green-900 leading-relaxed">{spec.kenyanContext}</p>
                      </div>
                      <div className="p-2 sm:p-3 bg-blue-50 rounded border border-blue-200">
                        <p className="text-xs sm:text-sm font-medium text-blue-800 mb-1">🌍 Global Context</p>
                        <p className="text-xs sm:text-sm text-blue-900 leading-relaxed">{spec.globalContext}</p>
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
            Compassionate Care for Our Elders
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Every elder deserves dignity, respect, and quality care. Let us help you navigate the aging journey with compassion and expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto">
              Elder Care Resources
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ElderCareServices;