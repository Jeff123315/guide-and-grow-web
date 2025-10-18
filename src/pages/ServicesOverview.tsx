import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Brain, 
  Users, 
  Baby, 
  Heart, 
  Phone, 
  GraduationCap, 
  Stethoscope, 
  Shield, 
  Leaf,
  Scale,
  CheckCircle
} from "lucide-react";

const ServicesOverview = () => {
  const services = [
    {
      icon: Brain,
      title: "Clinical Social Work",
      description: "Professional therapeutic support for mental health challenges including depression, anxiety, trauma, and life transitions.",
      features: ["Individual therapy", "Trauma-informed care", "Cognitive behavioral therapy", "Solution-focused approaches"],
      link: "/clinical-social-work"
    },
    {
      icon: Users,
      title: "Community Social Work",
      description: "Building stronger communities through outreach, advocacy, resource connection, and community development programs.",
      features: ["Community outreach", "Resource navigation", "Group programs", "Social advocacy"],
      link: "/community-social-work"
    },
    {
      icon: Baby,
      title: "Child & Family Services",
      description: "Specialized support for children, adolescents, and families navigating behavioral, developmental, or relational challenges.",
      features: ["Family therapy", "Parenting support", "Child counseling", "Family mediation"],
      link: "/child-family-services"
    },
    {
      icon: Heart,
      title: "Mental Health Counseling",
      description: "Comprehensive mental health support addressing emotional wellbeing, stress management, and personal growth.",
      features: ["Depression support", "Anxiety management", "Stress reduction", "Personal development"],
      link: "/mental-health-counseling"
    },
    {
      icon: Phone,
      title: "Crisis Intervention",
      description: "Immediate support and safety planning for individuals experiencing mental health crises or emergencies.",
      features: ["24/7 crisis support", "Safety planning", "Emergency response", "Follow-up care"],
      link: "/crisis-intervention"
    },
    {
      icon: GraduationCap,
      title: "School Social Work",
      description: "Supporting students' academic, social, and emotional success through school-based interventions and collaboration.",
      features: ["Student counseling", "Academic support", "Behavioral interventions", "School consultation"],
      link: "/school-social-work"
    },
    {
      icon: Stethoscope,
      title: "Medical Social Work",
      description: "Helping patients and families navigate healthcare systems, chronic illness, and medical transitions.",
      features: ["Healthcare navigation", "Chronic illness support", "Discharge planning", "Caregiver support"],
      link: "/medical-social-work"
    },
    {
      icon: Shield,
      title: "Substance Abuse Services",
      description: "Evidence-based treatment and recovery support for individuals struggling with substance use disorders.",
      features: ["Addiction counseling", "Recovery planning", "Family support", "Relapse prevention"],
      link: "/substance-abuse-services"
    },
    {
      icon: Leaf,
      title: "Elder Care Services",
      description: "Compassionate support for older adults and their families navigating aging, health changes, and life transitions.",
      features: ["Aging support", "Caregiver assistance", "End-of-life planning", "Dementia care"],
      link: "/elder-care-services"
    },
    {
      icon: Scale,
      title: "Policy & Advocacy",
      description: "Advancing social justice through policy advocacy, systemic change work, and community organizing.",
      features: ["Policy development", "Community advocacy", "Rights education", "Systemic change"],
      link: "/policy-advocacy"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - ThriveSpace Mental Health & Social Work</title>
        <meta name="description" content="Explore ThriveSpace's comprehensive mental health and social work services including therapy, counseling, crisis intervention, and community support." />
        <meta property="og:title" content="Professional Mental Health Services - ThriveSpace" />
        <meta property="og:description" content="From clinical therapy to community support, discover our range of professional services designed to help you thrive." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                Comprehensive Services for Your Wellbeing
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                Professional mental health and social work services tailored to your unique needs and circumstances
              </p>
              <Button asChild size="lg" className="hover-lift">
                <Link to="/contact">Book Free Consultation</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <Card key={index} className="border-0 shadow-card hover-lift group animate-fade-in h-full flex flex-col">
                  <CardHeader>
                    <div className="mb-4">
                      <div className="inline-flex p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors mb-2">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <ul className="space-y-2 mb-6 flex-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant="ghost" className="group-hover:text-primary w-full">
                      <Link to={service.link}>Learn More →</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                How We Support You
              </h2>
              <p className="text-muted-foreground">
                Our client-centered approach ensures you receive personalized care every step of the way
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { step: "01", title: "Initial Consultation", description: "Free 15-minute consultation to understand your needs" },
                { step: "02", title: "Assessment", description: "Comprehensive evaluation to create your personalized plan" },
                { step: "03", title: "Treatment", description: "Evidence-based interventions tailored to your goals" },
                { step: "04", title: "Ongoing Support", description: "Continuous care, progress tracking, and adjustment" }
              ].map((item, index) => (
                <Card key={index} className="border-0 shadow-card hover-lift text-center animate-fade-in">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-primary/20 mb-4">{item.step}</div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto border-0 shadow-elegant bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 animate-fade-in">
              <CardContent className="p-8 md:p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  Not Sure Where to Start?
                </h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Book a free consultation with our team. We'll help you find the right service and support for your unique situation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="hover-lift">
                    <Link to="/contact">Book Free Consultation</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="hover-lift">
                    <Link to="/faqs">View FAQs</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Footer />
        <BackToTop />
      </div>
    </>
  );
};

export default ServicesOverview;