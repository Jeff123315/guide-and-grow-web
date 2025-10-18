import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Heart, Users, Award, Target, Shield, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We approach every client with empathy, understanding, and genuine care for their wellbeing."
    },
    {
      icon: Shield,
      title: "Confidentiality",
      description: "Your privacy and trust are paramount. All sessions are conducted with strict confidentiality."
    },
    {
      icon: Users,
      title: "Community",
      description: "We believe in the power of connection and building a supportive community around mental health."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Our team maintains the highest professional standards through continuous education and best practices."
    },
    {
      icon: Target,
      title: "Client-Centered",
      description: "Your goals, needs, and experiences guide our therapeutic approach and treatment plans."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace evidence-based, modern therapeutic approaches while respecting traditional wisdom."
    }
  ];

  return (
    <>
      <Helmet>
        <title>About ThriveSpace - Professional Mental Health & Social Work Services</title>
        <meta name="description" content="Learn about ThriveSpace's mission, values, and our commitment to providing compassionate mental health and social work services. Founded by Japheth Billy." />
        <meta property="og:title" content="About ThriveSpace - Our Story & Mission" />
        <meta property="og:description" content="Discover how ThriveSpace is transforming mental health care through compassionate, professional services." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/10 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                About ThriveSpace
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                We're dedicated to creating a safe, supportive space where individuals, families, and communities can thrive through professional mental health and social work services.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Story Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                  Our Mission
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  ThriveSpace was founded with a clear vision: to make quality mental health and social work services accessible, approachable, and effective for everyone who needs them.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Founded by <span className="font-semibold text-foreground">Japheth Billy</span>, a passionate advocate for mental wellness and community development, ThriveSpace emerged from the recognition that many people face barriers to accessing mental health support.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We believe that everyone deserves a space to heal, grow, and thrive. Our approach combines evidence-based therapeutic practices with cultural sensitivity and genuine compassion.
                </p>
              </div>
              
              <div className="relative animate-fade-in">
                <Card className="border-0 shadow-elegant hover-lift">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                          <Target className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">Our Vision</h3>
                          <p className="text-muted-foreground text-sm">
                            A world where mental health care is accessible, stigma-free, and centered on individual needs.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-secondary/10">
                          <Heart className="h-6 w-6 text-secondary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">Our Approach</h3>
                          <p className="text-muted-foreground text-sm">
                            Holistic, client-centered care that addresses mind, body, and spirit through evidence-based practices.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-accent-green/10">
                          <Users className="h-6 w-6 text-accent-green" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">Our Commitment</h3>
                          <p className="text-muted-foreground text-sm">
                            Providing culturally sensitive, ethical, and professional services to every individual we serve.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Our Core Values
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These principles guide everything we do at ThriveSpace
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <Card key={index} className="border-0 shadow-card hover-lift animate-fade-in">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <div className="inline-flex p-3 rounded-full bg-primary/10">
                        <value.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
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
                  Ready to Start Your Journey?
                </h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Take the first step toward healing and growth. Our compassionate team is here to support you every step of the way.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="hover-lift">
                    <Link to="/contact">Book Free Consultation</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="hover-lift">
                    <Link to="/services">Explore Our Services</Link>
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

export default About;