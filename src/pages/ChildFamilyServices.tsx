import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import familyTherapy from "@/assets/family-therapy-1.jpg";

const ChildFamilyServices = () => {
  const familyStrengths = [
    {
      strength: "Commitment",
      description: "Family members are committed to help each other succeed with an attitude of 'one for all, and all for one'",
      impact: "Creates allegiance to family, makes family life a priority, recognizes and values each member"
    },
    {
      strength: "Appreciation",
      description: "Strong families make a habit of expressing gratitude and looking for the good in one another",
      impact: "Positive communication, common compliments, celebrating successes together"
    },
    {
      strength: "Time Together",
      description: "Quality and quantity time - eating, playing, and working together regularly",
      impact: "Develops shared experiences and memories that unite and strengthen the family"
    },
    {
      strength: "Spiritual Development",
      description: "Faith communities become second families providing extra support, purpose, and direction",
      impact: "Families that pray together stay together, providing perspective during challenges"
    },
    {
      strength: "Effective Conflict Management",
      description: "Attack the problem, not each other; manage stress wisely and plan ahead",
      impact: "United response to crisis, respectful problem-solving, drawing on each other for support"
    },
    {
      strength: "Rhythm & Tradition",
      description: "Routines, rituals, and traditions that give direction, meaning, and structure to daily life",
      impact: "Stability, clear roles and expectations, while remaining open to change and growth"
    }
  ];

  const familyTypes = [
    {
      type: "Nuclear Family",
      description: "Father, mother, and children living together",
      characteristics: ["More autonomy and freedom", "Busy life demands", "Limited extended support", "Childcare challenges if both parents work"],
      kenyanContext: "Urban families in Nairobi with both parents working in formal sector",
      globalContext: "Typical suburban family structure in Western countries"
    },
    {
      type: "Extended Family",
      description: "Nuclear family plus grandparents, aunts, uncles, cousins living together",
      characteristics: ["More help and support", "Traditional African norm", "Shared resources", "Potential for conflict with many personalities"],
      kenyanContext: "Multi-generational households common in rural Kenya and traditional communities",
      globalContext: "Common in Asian communities, Mediterranean cultures"
    },
    {
      type: "Single-Parent Family",
      description: "One parent (usually mother) raising children alone",
      characteristics: ["Economic disadvantage", "Lack of emotional support", "Time constraints", "90% headed by women"],
      causes: ["Teenage pregnancy", "Out-of-wedlock birth", "Divorce/separation", "Death/desertion", "Choice"],
      kenyanContext: "Growing number in urban areas, often due to migration or relationship breakdown",
      globalContext: "Increasing worldwide, especially in developed nations"
    },
    {
      type: "Step-Family (Blended)",
      description: "Reconstituted family from remarriage or polygamy",
      characteristics: ["Complex relationships", "Multiple sets of norms", "Step-siblings dynamics", "Potential for conflict and favoritism"],
      kenyanContext: "Common in polygamous communities, second marriages after divorce",
      globalContext: "Increasing due to high divorce and remarriage rates"
    },
    {
      type: "Adoptive Family",
      description: "Children legally adopted by non-biological parents",
      characteristics: ["Honesty about adoption important", "Specially chosen children", "Love and treatment crucial", "Can thrive equally well"],
      kenyanContext: "Relatives adopting orphans, formal adoption by Kenyan families",
      globalContext: "Domestic and international adoptions"
    },
    {
      type: "Foster Family",
      description: "Temporary placement for children unable to live with biological family",
      characteristics: ["Short-term or long-term", "Safety and welfare focus", "Potential for multiple placements", "Benefit from loving, stable placement"],
      kenyanContext: "Emerging foster care system through Children's Department",
      globalContext: "Established foster care systems in US, UK, Australia"
    },
    {
      type: "Child-Headed Family",
      description: "Eldest child becomes head when both parents deceased",
      characteristics: ["HIV/AIDS orphans", "No relatives to take them", "Too many children for one family", "Significant responsibility on eldest"],
      kenyanContext: "Common in communities heavily affected by HIV/AIDS in Kenya",
      globalContext: "Seen in pandemic-affected areas, war zones"
    },
    {
      type: "Polygamous Family",
      description: "One husband with multiple wives",
      characteristics: ["Jealousy and competition", "Limited father attention", "Similar to single-parent in father access", "Co-wife dynamics"],
      kenyanContext: "Traditional practice in some Kenyan communities, Muslim families",
      globalContext: "Muslim countries, some African nations"
    }
  ];

  const vulnerableFamilies = [
    {
      category: "Jobless Families",
      risks: ["Economic disadvantage", "Poor health outcomes", "Limited crisis support", "Intergenerational joblessness"],
      kenyanStats: "40% unemployment rate, 64% of unemployed are youth, 60% of population under 30",
      causes: ["Rural-urban migration", "School dropout", "Economic growth insufficient", "High employer expectations", "Education system gaps"]
    },
    {
      category: "Single-Parent Families",
      risks: ["Financial strain", "Time constraints", "Emotional pressure", "Social isolation"],
      causes: ["Death of partner", "Divorce/separation", "Never married", "No relationship with other parent"],
      note: "Majority (90%+) headed by women"
    },
    {
      category: "Dysfunctional Families",
      triggers: ["Alcoholism", "Drug addiction", "Physical illness", "Mental illness", "Spouse abuse", "Child abuse", "Divorce", "Poverty", "Unemployment", "War", "Polygamy"],
      impact: "Unable to provide basic physical, security, emotional needs of members"
    }
  ];

  const services = [
    {
      category: "Child Protection",
      items: [
        "Child abuse and neglect investigations",
        "Safety assessments and risk evaluations",
        "Child welfare case management",
        "Protective service coordination"
      ],
      kenyanExample: "Investigating child labor cases in Nairobi's informal settlements while working with local chiefs and children's officers",
      globalExample: "Coordinating multi-agency child protection response for suspected abuse cases in Manchester, UK"
    },
    {
      category: "Family Preservation",
      items: [
        "In-home family support services",
        "Parent education and skill building",
        "Family reunification planning",
        "Crisis intervention and stabilization"
      ],
      kenyanExample: "Providing parenting support to Somali refugee families in Dadaab camp adapting to displacement trauma",
      globalExample: "Supporting families in Texas border communities navigating reunification after immigration separation"
    },
    {
      category: "Foster Care & Adoption",
      items: [
        "Foster family recruitment and training",
        "Adoption homestudies and matching",
        "Post-placement support services",
        "Kinship care support"
      ],
      kenyanExample: "Training foster families in Nakuru on trauma-informed care for orphaned children affected by HIV/AIDS",
      globalExample: "Facilitating international adoptions from China while ensuring cultural heritage preservation"
    },
    {
      category: "Youth Services",
      items: [
        "Adolescent counseling and support",
        "Independent living skills training",
        "Educational advocacy",
        "Transition planning services"
      ],
      kenyanExample: "Helping street boys in Thika transition to vocational training programs and reconnect with families",
      globalExample: "Supporting aging-out foster youth in California with life skills and college/career planning"
    }
  ];

  const childDevelopmentFactors = [
    {
      factor: "Social Environment",
      positiveEffects: ["Better academic performance", "Higher self-esteem", "Less risk-taking behavior", "Improved mental health"],
      negativeEffects: ["School dropout risk", "Depression and anxiety", "Substance abuse", "Poor social relationships"]
    },
    {
      factor: "Early Childhood Education",
      benefits: ["Develop social relationships", "Pro-social behavior", "Better academic achievement", "Less grade repetition"],
      note: "Profound effect on future academic achievement even if family moves later"
    },
    {
      factor: "Parental Support",
      impact: ["Influences motivation for social goals", "Affects interest in school", "Determines goal pursuit", "Shapes emotional wellbeing"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-healing relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${familyTherapy})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/90"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-3 sm:mb-4 bg-primary/10 text-primary border-primary/20 text-xs sm:text-sm">Child & Family Services</Badge>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 px-2">
              Child & Family Social Work Services
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
              Protecting children, strengthening families, and creating safe, nurturing environments where 
              every child can thrive and reach their full potential.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 w-full sm:w-auto">
              Request Family Support
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 px-2">
              Comprehensive Family Services
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground px-4">
              Supporting families through every stage of their journey with specialized interventions and care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300">
                <CardHeader className="pb-3 sm:pb-4">
                  <CardTitle className="text-lg sm:text-xl lg:text-2xl text-foreground">{service.category}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {service.items.map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-2 sm:space-x-3">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground text-sm sm:text-base leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3 pt-2">
                    <div className="p-3 sm:p-4 bg-green-50 rounded-lg border border-green-200">
                      <Badge variant="outline" className="mb-2 text-xs sm:text-sm border-green-300 text-green-800">🇰🇪 Kenyan Context</Badge>
                      <p className="text-sm sm:text-base text-green-900 leading-relaxed">{service.kenyanExample}</p>
                    </div>
                    <div className="p-3 sm:p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <Badge variant="outline" className="mb-2 text-xs sm:text-sm border-blue-300 text-blue-800">🌍 Global Context</Badge>
                      <p className="text-sm sm:text-base text-blue-900 leading-relaxed">{service.globalExample}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Family Strengths */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-foreground mb-4 text-center px-2">
              What Makes Families Strong?
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
              Research shows that strong families cultivate six key characteristics that help them thrive
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {familyStrengths.map((item, index) => (
                <Card key={index} className="hover:shadow-card transition-all">
                  <CardContent className="p-4 sm:p-6">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center mb-3">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2 text-base sm:text-lg">{item.strength}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-3 leading-relaxed">{item.description}</p>
                    <div className="p-2 bg-primary/10 rounded">
                      <p className="text-xs text-foreground"><strong>Impact:</strong> {item.impact}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Family Types */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-foreground mb-4 text-center px-2">
              Understanding Different Family Structures
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
              Every family structure has unique characteristics, strengths, and challenges
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {familyTypes.map((family, index) => (
                <Card key={index} className="hover:shadow-card transition-all">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base sm:text-lg">{family.type}</CardTitle>
                    <CardDescription className="text-xs sm:text-sm">{family.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-xs sm:text-sm mb-2">Characteristics:</h4>
                      <div className="space-y-1">
                        {family.characteristics.map((char, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <div className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                            <span className="text-xs text-muted-foreground">{char}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    {family.causes && (
                      <div>
                        <h4 className="font-semibold text-xs sm:text-sm mb-2">Common Causes:</h4>
                        <div className="space-y-1">
                          {family.causes.map((cause, idx) => (
                            <div key={idx} className="flex items-start space-x-2">
                              <div className="w-1 h-1 bg-orange-500 rounded-full mt-1.5 flex-shrink-0"></div>
                              <span className="text-xs text-muted-foreground">{cause}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    <div className="space-y-2 pt-2">
                      <div className="p-2 bg-green-50 rounded border border-green-200">
                        <Badge variant="outline" className="mb-1 text-[10px] border-green-300 text-green-800">🇰🇪 Kenya</Badge>
                        <p className="text-[10px] text-green-900">{family.kenyanContext}</p>
                      </div>
                      <div className="p-2 bg-blue-50 rounded border border-blue-200">
                        <Badge variant="outline" className="mb-1 text-[10px] border-blue-300 text-blue-800">🌍 Global</Badge>
                        <p className="text-[10px] text-blue-900">{family.globalContext}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vulnerable Families */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-foreground mb-4 text-center px-2">
              Supporting Vulnerable Families
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
              Identifying and addressing the unique challenges faced by families at risk
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {vulnerableFamilies.map((vulnerable, index) => (
                <Card key={index} className="hover:shadow-card transition-all">
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="font-semibold text-foreground mb-3 text-sm sm:text-base">{vulnerable.category}</h3>
                    {vulnerable.risks && (
                      <div className="mb-3">
                        <h4 className="text-xs font-medium mb-2 text-red-700">Risks:</h4>
                        <div className="space-y-1">
                          {vulnerable.risks.map((risk, idx) => (
                            <div key={idx} className="flex items-start space-x-2">
                              <div className="w-1 h-1 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                              <span className="text-[10px] text-muted-foreground">{risk}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {vulnerable.causes && (
                      <div className="mb-3">
                        <h4 className="text-xs font-medium mb-2">Causes:</h4>
                        <div className="space-y-1">
                          {vulnerable.causes.map((cause, idx) => (
                            <div key={idx} className="flex items-start space-x-2">
                              <div className="w-1 h-1 bg-orange-500 rounded-full mt-1.5 flex-shrink-0"></div>
                              <span className="text-[10px] text-muted-foreground">{cause}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {vulnerable.triggers && (
                      <div className="mb-3">
                        <h4 className="text-xs font-medium mb-2">Common Triggers:</h4>
                        <div className="grid grid-cols-2 gap-1">
                          {vulnerable.triggers.map((trigger, idx) => (
                            <Badge key={idx} variant="secondary" className="text-[10px]">{trigger}</Badge>
                          ))}
                        </div>
                      </div>
                    )}
                    {vulnerable.kenyanStats && (
                      <div className="p-2 bg-orange-50 rounded border border-orange-200">
                        <p className="text-[10px] text-orange-900">{vulnerable.kenyanStats}</p>
                      </div>
                    )}
                    {vulnerable.impact && (
                      <div className="p-2 bg-red-50 rounded border border-red-200">
                        <p className="text-[10px] font-medium text-red-900">{vulnerable.impact}</p>
                      </div>
                    )}
                    {vulnerable.note && (
                      <div className="p-2 bg-muted rounded mt-2">
                        <p className="text-[10px] text-muted-foreground italic">{vulnerable.note}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Child Development */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-foreground mb-4 text-center px-2">
              Family Environment & Child Development
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
              How family dynamics and social environments shape children's growth and wellbeing
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {childDevelopmentFactors.map((factor, index) => (
                <Card key={index} className="hover:shadow-card transition-all">
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="font-semibold text-foreground mb-3 text-sm sm:text-base">{factor.factor}</h3>
                    {factor.positiveEffects && (
                      <div className="mb-3">
                        <h4 className="text-xs font-medium mb-2 text-green-700">Positive Effects:</h4>
                        <div className="space-y-1">
                          {factor.positiveEffects.map((effect, idx) => (
                            <div key={idx} className="flex items-start space-x-2">
                              <div className="w-1 h-1 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                              <span className="text-[10px] text-muted-foreground">{effect}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {factor.negativeEffects && (
                      <div className="mb-3">
                        <h4 className="text-xs font-medium mb-2 text-red-700">Negative Effects:</h4>
                        <div className="space-y-1">
                          {factor.negativeEffects.map((effect, idx) => (
                            <div key={idx} className="flex items-start space-x-2">
                              <div className="w-1 h-1 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                              <span className="text-[10px] text-muted-foreground">{effect}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {factor.benefits && (
                      <div className="mb-3">
                        <h4 className="text-xs font-medium mb-2 text-primary">Key Benefits:</h4>
                        <div className="space-y-1">
                          {factor.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-start space-x-2">
                              <div className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                              <span className="text-[10px] text-muted-foreground">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {factor.impact && (
                      <div className="p-2 bg-primary/10 rounded">
                        <p className="text-[10px] text-foreground">{factor.impact}</p>
                      </div>
                    )}
                    {factor.note && (
                      <div className="p-2 bg-muted rounded mt-2">
                        <p className="text-[10px] text-muted-foreground italic">{factor.note}</p>
                      </div>
                    )}
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
            Protecting Children, Strengthening Families
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Every child deserves a safe, stable, and nurturing environment. Let's work together to make that a reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto">
              Report Concern
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto">
              Family Resources
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChildFamilyServices;