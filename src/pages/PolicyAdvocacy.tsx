import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import groupTherapy from "@/assets/group-therapy-1.jpg";

const PolicyAdvocacy = () => {
  const povertyTypes = [
    {
      type: "Absolute Poverty",
      definition: "Unable to meet basic survival needs (food, water, shelter, healthcare, education)",
      kenyanExample: "Families in Turkana living on less than $1.90/day, lacking access to clean water and healthcare",
      globalExample: "Sub-Saharan Africa communities below World Bank extreme poverty threshold",
      measurement: "International poverty line: $1.90 per day"
    },
    {
      type: "Relative Poverty",
      definition: "Poor in relation to others in society, unable to participate fully in economic/social life",
      kenyanExample: "Nairobi working poor who can afford basics but cannot access quality education or healthcare",
      globalExample: "US families above poverty line but unable to afford healthcare, education, or adequate housing",
      measurement: "Comparison to median income in society"
    },
    {
      type: "Situational Poverty",
      definition: "Temporary poverty due to unforeseen events or life circumstances",
      kenyanExample: "Family displaced by drought or flooding who lose livelihood temporarily",
      globalExample: "Family experiencing poverty after job loss, illness, or natural disaster",
      measurement: "Duration and recovery potential"
    },
    {
      type: "Generational Poverty",
      definition: "Poverty persisting across multiple generations due to systemic barriers",
      kenyanExample: "Families in informal settlements where children face same limited opportunities as parents",
      globalExample: "Marginalized communities with intergenerational lack of education, employment, healthcare access",
      measurement: "Multi-generational persistence"
    }
  ];

  const povertyCauses = [
    {
      category: "Economic Factors",
      causes: ["Unemployment and underemployment", "Low wages and inadequate employment", "Economic inequality and wealth concentration", "Globalization and job displacement"]
    },
    {
      category: "Political Factors",
      causes: ["Corruption and resource misallocation", "Weak governance and policy failures", "Lack of pro-poor policies", "Political instability"]
    },
    {
      category: "Social Factors",
      causes: ["Discrimination (race, gender, disability)", "Limited access to education", "Poor health and healthcare access", "Social exclusion and marginalization"]
    },
    {
      category: "Environmental Factors",
      causes: ["Climate change and natural disasters", "Resource depletion", "Environmental degradation", "Geographic isolation"]
    }
  ];

  const povertySolutions = [
    {
      solution: "Policy & Funding Reform",
      description: "Redistributing resources, increasing funding for social programs, pro-poor policies",
      kenyanExample: "Cash transfer programs like Inua Jamii for elderly and orphans, NHIF expansion",
      globalExample: "Universal basic income pilots, minimum wage increases, progressive taxation"
    },
    {
      solution: "Education & Skills Development",
      description: "Access to quality education, vocational training, scholarship programs",
      kenyanExample: "Free primary education, bursary programs, TVET expansion for youth skills",
      globalExample: "Community colleges, adult education, apprenticeship programs"
    },
    {
      solution: "Employment Creation",
      description: "Job creation programs, support for small businesses, economic development",
      kenyanExample: "Youth fund, Women Enterprise Fund, support for jua kali sector",
      globalExample: "Green jobs programs, infrastructure investment, social enterprises"
    },
    {
      solution: "Social Safety Nets",
      description: "Healthcare access, housing assistance, food security programs",
      kenyanExample: "Universal health coverage push, subsidized housing, food distribution programs",
      globalExample: "SNAP benefits, Medicaid, public housing, unemployment insurance"
    }
  ];

  const inequalityTypes = [
    {
      type: "Racial & Ethnic Inequality",
      description: "Unequal distribution of opportunities and resources based on race/ethnicity",
      causes: ["Historical discrimination", "Systemic racism", "Segregation", "Cultural biases"],
      kenyanExample: "Marginalized communities (Somali, Nubian) facing barriers in ID access, land rights, employment",
      globalExample: "Racial wealth gap in US, Indigenous disadvantage in Australia, Roma discrimination in Europe"
    },
    {
      type: "Economic Inequality",
      description: "Significant wealth and income gaps between rich and poor",
      causes: ["Wage disparities", "Wealth concentration", "Tax policies favoring wealthy", "Limited economic mobility"],
      kenyanExample: "Growing wealth gap between Nairobi elite and rural poor, informal sector exploitation",
      globalExample: "CEO-to-worker pay ratios, billionaire wealth concentration, working poor phenomenon"
    },
    {
      type: "Gender Inequality",
      description: "Unequal opportunities, rights, and treatment based on gender",
      causes: ["Patriarchal structures", "Wage gaps", "Limited political representation", "Gender-based violence"],
      kenyanExample: "Women's limited land ownership, FGM practices, gender-based violence, wage discrimination",
      globalExample: "Gender pay gap, underrepresentation in leadership, reproductive rights restrictions"
    }
  ];

  const advocacyAreas = [
    {
      title: "Social Policy Development",
      description: "Research, analysis, and development of evidence-based social policies",
      activities: ["Policy Research", "Data Analysis", "Stakeholder Consultation", "Policy Drafting"],
      kenyanExample: "Contributing to Kenya's mental health policy framework reviewing Mental Health Act 2022 implementation",
      globalExample: "Developing homeless prevention policy recommendations for UK Parliament select committee"
    },
    {
      title: "Legislative Advocacy",
      description: "Working with lawmakers to advance social justice legislation",
      activities: ["Legislative Testimony", "Bill Analysis", "Lawmaker Education", "Coalition Building"],
      kenyanExample: "Testifying before Kenya's National Assembly on proposed amendments to Children Act 2022",
      globalExample: "Advocating for paid family leave legislation in US Congress with social work coalition"
    },
    {
      title: "Community Organizing",
      description: "Mobilizing grassroots movements for systemic change",
      activities: ["Community Meetings", "Leadership Development", "Campaign Planning", "Direct Action"],
      kenyanExample: "Organizing Kibera residents to demand improved sanitation and mental health services from Nairobi County",
      globalExample: "Leading tenant organizing campaign in Toronto for rent control and affordable housing protections"
    },
    {
      title: "Legal Advocacy",
      description: "Using legal systems to advance social justice and protect rights",
      activities: ["Impact Litigation", "Legal Aid", "Rights Education", "Court Monitoring"],
      kenyanExample: "Supporting legal challenges to forced evictions in Mukuru slums through Kenyan courts",
      globalExample: "Filing class action lawsuit in Australia challenging disability discrimination in employment"
    },
    {
      title: "Media & Communications",
      description: "Strategic communications to influence public opinion and policy debates",
      activities: ["Press Relations", "Social Media Campaigns", "Op-Eds", "Public Education"],
      kenyanExample: "Writing Nation newspaper op-eds about mental health stigma and need for insurance coverage",
      globalExample: "Managing social media campaign for climate justice reaching millions globally"
    },
    {
      title: "Research & Evaluation",
      description: "Generating evidence to inform policy and demonstrate program impact",
      activities: ["Needs Assessment", "Program Evaluation", "Policy Analysis", "Data Reporting"],
      kenyanExample: "Evaluating Kenya's cash transfer program impact on child welfare outcomes in Turkana County",
      globalExample: "Publishing research on universal basic income pilots in Finland for policy makers"
    }
  ];

  const justiceIssues = [
    {
      issue: "Mental Health Rights",
      icon: "🧠",
      kenyanFocus: "Advocacy for Mental Health Act implementation, community-based care, reducing forced treatment",
      globalFocus: "Mental health parity, involuntary commitment reform, crisis response alternatives",
    },
    {
      issue: "Housing Justice",
      icon: "🏘️",
      kenyanFocus: "Fighting forced evictions, advocating for slum upgrading, affordable housing policy",
      globalFocus: "Homelessness prevention, rent control, housing-first policies, tenant protections",
    },
    {
      issue: "Healthcare Access",
      icon: "⚕️",
      kenyanFocus: "Universal health coverage advocacy, NHIF reform, rural health service expansion",
      globalFocus: "Medicare for All campaigns, prescription drug pricing, health equity initiatives",
    },
    {
      issue: "Child Welfare Reform",
      icon: "👶",
      kenyanFocus: "Child labor prevention, orphan care reform, education access, juvenile justice",
      globalFocus: "Foster care reform, family preservation funding, child poverty reduction",
    },
    {
      issue: "Gender Equality",
      icon: "⚖️",
      kenyanFocus: "Anti-FGM campaigns, gender-based violence prevention, women's economic empowerment",
      globalFocus: "Equal pay advocacy, reproductive rights, gender discrimination lawsuits",
    },
    {
      issue: "Disability Rights",
      icon: "♿",
      kenyanFocus: "Accessibility in public transport, inclusive education, disability employment quota enforcement",
      globalFocus: "ADA compliance, deinstitutionalization, disability benefits protection",
    },
    {
      issue: "Economic Justice",
      icon: "💰",
      kenyanFocus: "Minimum wage campaigns, informal sector protections, social safety net expansion",
      globalFocus: "Living wage campaigns, worker organizing rights, universal basic income pilots",
    },
    {
      issue: "Criminal Justice",
      icon: "⚖️",
      kenyanFocus: "Police brutality accountability, pretrial detention reform, rehabilitation over punishment",
      globalFocus: "Mass incarceration reduction, bail reform, restorative justice programs",
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-healing relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url(${groupTherapy})` }}/>
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-3 sm:mb-4 bg-primary/10 text-primary border-primary/20 text-xs sm:text-sm">Policy & Advocacy</Badge>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 px-2">
              Policy Development & Social Advocacy
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
              Advancing social justice through strategic policy development, legislative advocacy, and grassroots organizing 
              to create systemic change that promotes equity and human dignity.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 w-full sm:w-auto">
              Join Our Advocacy
            </Button>
          </div>
        </div>
      </section>

      {/* Advocacy Areas */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 px-2">
              Advocacy & Policy Work
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground px-4">
              Multi-level strategies for advancing social justice and influencing policy change
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {advocacyAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300">
                <CardHeader className="pb-3 sm:pb-4">
                  <CardTitle className="text-lg sm:text-xl text-foreground">{area.title}</CardTitle>
                  <CardDescription className="text-sm sm:text-base text-muted-foreground">{area.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground text-sm">Key Activities:</h4>
                    <div className="space-y-1">
                      {area.activities.map((activity, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="p-2 sm:p-3 bg-green-50 rounded border border-green-200">
                      <Badge variant="outline" className="mb-1 text-xs border-green-300 text-green-800">🇰🇪 Kenya</Badge>
                      <p className="text-xs sm:text-sm text-green-900 leading-relaxed">{area.kenyanExample}</p>
                    </div>
                    <div className="p-2 sm:p-3 bg-blue-50 rounded border border-blue-200">
                      <Badge variant="outline" className="mb-1 text-xs border-blue-300 text-blue-800">🌍 Global</Badge>
                      <p className="text-xs sm:text-sm text-blue-900 leading-relaxed">{area.globalExample}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Poverty Framework */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-foreground mb-6 sm:mb-8 text-center px-2">
              Understanding Poverty as a Social Problem
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8">
              {povertyTypes.map((poverty, index) => (
                <Card key={index} className="hover:shadow-card transition-all">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base sm:text-lg">{poverty.type}</CardTitle>
                    <CardDescription className="text-xs sm:text-sm">{poverty.definition}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="p-2 bg-muted/50 rounded">
                      <p className="text-[10px] sm:text-xs font-medium text-foreground mb-1">Measurement:</p>
                      <p className="text-[10px] sm:text-xs text-muted-foreground">{poverty.measurement}</p>
                    </div>
                    <div className="p-2 bg-green-50 rounded border border-green-200">
                      <Badge variant="outline" className="mb-1 text-[10px] border-green-300 text-green-800">🇰🇪 Kenya</Badge>
                      <p className="text-[10px] text-green-900">{poverty.kenyanExample}</p>
                    </div>
                    <div className="p-2 bg-blue-50 rounded border border-blue-200">
                      <Badge variant="outline" className="mb-1 text-[10px] border-blue-300 text-blue-800">🌍 Global</Badge>
                      <p className="text-[10px] text-blue-900">{poverty.globalExample}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mb-8">
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4 text-center">Causes of Poverty</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {povertyCauses.map((category, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-foreground text-sm mb-3">{category.category}</h4>
                      <div className="space-y-1.5">
                        {category.causes.map((cause, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <div className="w-1 h-1 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                            <span className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed">{cause}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4 text-center">Solutions to Poverty</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {povertySolutions.map((sol, index) => (
                  <Card key={index} className="hover:shadow-card transition-all">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm sm:text-base">{sol.solution}</CardTitle>
                      <CardDescription className="text-xs">{sol.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="p-2 bg-green-50 rounded border border-green-200">
                        <Badge variant="outline" className="mb-1 text-[10px] border-green-300 text-green-800">🇰🇪 Kenya</Badge>
                        <p className="text-[10px] text-green-900">{sol.kenyanExample}</p>
                      </div>
                      <div className="p-2 bg-blue-50 rounded border border-blue-200">
                        <Badge variant="outline" className="mb-1 text-[10px] border-blue-300 text-blue-800">🌍 Global</Badge>
                        <p className="text-[10px] text-blue-900">{sol.globalExample}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inequality Framework */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-foreground mb-6 sm:mb-8 text-center px-2">
              Understanding Social Inequality
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
              {inequalityTypes.map((inequality, index) => (
                <Card key={index} className="hover:shadow-card transition-all">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base sm:text-lg">{inequality.type}</CardTitle>
                    <CardDescription className="text-xs sm:text-sm">{inequality.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-xs mb-2">Key Causes:</h4>
                      <div className="space-y-1">
                        {inequality.causes.map((cause, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <div className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                            <span className="text-[10px] text-muted-foreground">{cause}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="p-2 bg-green-50 rounded border border-green-200">
                      <Badge variant="outline" className="mb-1 text-[10px] border-green-300 text-green-800">🇰🇪 Kenya</Badge>
                      <p className="text-[10px] text-green-900">{inequality.kenyanExample}</p>
                    </div>
                    <div className="p-2 bg-blue-50 rounded border border-blue-200">
                      <Badge variant="outline" className="mb-1 text-[10px] border-blue-300 text-blue-800">🌍 Global</Badge>
                      <p className="text-[10px] text-blue-900">{inequality.globalExample}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Justice Issues */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-foreground mb-6 sm:mb-8 text-center px-2">
              Social Justice Focus Areas
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {justiceIssues.map((item, index) => (
                <Card key={index} className="hover:shadow-card transition-all">
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h3 className="font-semibold text-foreground mb-3 text-sm">{item.issue}</h3>
                    <div className="space-y-2 text-left">
                      <div className="p-2 bg-green-50 rounded border border-green-200">
                        <p className="text-[10px] font-medium text-green-800 mb-1">🇰🇪 Kenya</p>
                        <p className="text-[10px] text-green-900 leading-relaxed">{item.kenyanFocus}</p>
                      </div>
                      <div className="p-2 bg-blue-50 rounded border border-blue-200">
                        <p className="text-[10px] font-medium text-blue-800 mb-1">🌍 Global</p>
                        <p className="text-[10px] text-blue-900 leading-relaxed">{item.globalFocus}</p>
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
            Join the Movement for Social Justice
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Policy change happens when people come together. Add your voice to our advocacy efforts for a more just and equitable society.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto">
              Get Involved
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto">
              View Our Campaigns
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PolicyAdvocacy;