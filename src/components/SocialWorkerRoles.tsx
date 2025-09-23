import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SocialWorkerRoles = () => {
  const roles = [
    {
      title: "Case Manager",
      description: "I coordinate and manage your care across different services and providers.",
      details: [
        "Develop personalized care plans",
        "Connect you with community resources",
        "Monitor progress and adjust services",
        "Ensure continuity of care"
      ],
      icon: "📋",
      category: "Coordination"
    },
    {
      title: "Advocate",
      description: "I stand up for your rights and help you navigate complex systems.",
      details: [
        "Represent your interests in meetings",
        "Help access benefits and services",
        "Address discrimination or unfair treatment",
        "Empower you to self-advocate"
      ],
      icon: "⚖️",
      category: "Support"
    },
    {
      title: "Crisis Interventionist",
      description: "I provide immediate support during emergency situations and mental health crises.",
      details: [
        "24/7 crisis response availability",
        "Safety planning and risk assessment",
        "Emergency resource mobilization",
        "Trauma-informed immediate care"
      ],
      icon: "🚨",
      category: "Emergency"
    },
    {
      title: "Counselor & Therapist",
      description: "I provide professional counseling using evidence-based therapeutic approaches.",
      details: [
        "Individual and family therapy",
        "Cognitive behavioral therapy (CBT)",
        "Trauma-informed care",
        "Mental health assessments"
      ],
      icon: "🧠",
      category: "Therapy"
    },
    {
      title: "Resource Coordinator",
      description: "I help you access essential services and community resources.",
      details: [
        "Housing assistance programs",
        "Healthcare and medical services",
        "Educational and vocational support",
        "Financial aid and benefits"
      ],
      icon: "🔗",
      category: "Resources"
    },
    {
      title: "Community Liaison",
      description: "I connect you with community programs and support networks.",
      details: [
        "Community program referrals",
        "Support group facilitation",
        "Volunteer opportunity coordination",
        "Social network building"
      ],
      icon: "🏘️",
      category: "Community"
    },
    {
      title: "Life Skills Educator",
      description: "I teach practical skills to help you live independently and successfully.",
      details: [
        "Budgeting and financial literacy",
        "Communication and relationship skills",
        "Problem-solving strategies",
        "Daily living skills training"
      ],
      icon: "🎓",
      category: "Education"
    },
    {
      title: "Tech-Enhanced Service Provider",
      description: "I use modern technology to improve service delivery and accessibility.",
      details: [
        "AI-assisted resource matching",
        "Digital case management systems",
        "Virtual therapy sessions",
        "Online support platforms"
      ],
      icon: "💡",
      category: "Innovation"
    }
  ];

  const categories = Array.from(new Set(roles.map(role => role.category)));

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            My Role as Your Social Worker
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            As a qualified social worker, I wear many hats to provide comprehensive support 
            tailored to your unique needs and circumstances.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category, index) => (
            <Badge key={index} variant="secondary" className="text-sm px-4 py-2">
              {category}
            </Badge>
          ))}
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {roles.map((role, index) => (
            <Card key={index} className="shadow-card hover:shadow-lg transition-all duration-300 border-0 h-full group">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-3xl" role="img" aria-label={role.title}>
                    {role.icon}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {role.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg sm:text-xl text-foreground group-hover:text-primary transition-colors">
                  {role.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-sm">
                  {role.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {role.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start space-x-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-healing-green rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-foreground leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-healing rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Ready to Get the Support You Need?
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Every person's journey is unique. I'll work with you to identify which of these roles 
              will be most helpful in achieving your goals and improving your quality of life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-primary text-primary-foreground rounded-md hover:opacity-90 transition-all font-medium"
              >
                Schedule a Consultation
              </a>
              <a 
                href="#services" 
                className="inline-flex items-center justify-center px-6 py-3 border border-primary/30 text-foreground rounded-md hover:bg-accent transition-all font-medium"
              >
                Learn About My Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialWorkerRoles;