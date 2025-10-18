import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+254 700 123 456", "+254 700 123 457"],
      description: "Mon-Fri, 8am-6pm EAT"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["hello@thrivespace.com", "support@thrivespace.com"],
      description: "We respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["Nairobi, Kenya"],
      description: "In-person & virtual sessions available"
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Fri: 8am - 6pm", "Sat: 9am - 2pm"],
      description: "Closed Sundays & public holidays"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact ThriveSpace - Book Your Free Consultation Today</title>
        <meta name="description" content="Get in touch with ThriveSpace for mental health and social work services. Book a free consultation, ask questions, or schedule your first therapy session." />
        <meta property="og:title" content="Contact ThriveSpace - Professional Mental Health Support" />
        <meta property="og:description" content="Reach out today to start your journey toward healing and growth. Free consultations available." />
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
                Get in Touch
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Ready to take the first step? We're here to answer your questions and support you on your journey to wellbeing.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-0 shadow-card hover-lift text-center animate-fade-in">
                  <CardContent className="p-6">
                    <div className="inline-flex p-3 rounded-full bg-primary/10 mb-4">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-3">{info.title}</h3>
                    <div className="space-y-1 mb-2">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-sm text-foreground font-medium">
                          {detail}
                        </p>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground">{info.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Form and Map */}
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div className="animate-fade-in">
                <div className="mb-6">
                  <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                    Send Us a Message
                  </h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours. For urgent matters, please call us directly.
                  </p>
                </div>
                <ContactForm />
              </div>

              {/* Additional Info */}
              <div className="space-y-6 animate-fade-in">
                <Card className="border-0 shadow-card">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Book a Free Consultation</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      Not sure where to start? Book a free 15-minute consultation with one of our therapists. We'll discuss your needs, answer your questions, and help you determine the best path forward.
                    </p>
                    <p className="text-sm font-medium text-primary">
                      No commitment required • Completely confidential
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">What to Expect</h3>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span>We'll respond to your inquiry within 24 hours (usually much sooner)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span>Your information is confidential and secure</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span>We'll help match you with the right therapist for your needs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span>Flexible scheduling for in-person or virtual sessions</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card bg-gradient-to-br from-primary/10 to-secondary/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Crisis Support</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      If you're experiencing a mental health emergency, please don't wait for a response. Contact emergency services immediately.
                    </p>
                    <div className="space-y-2 text-sm">
                      <p className="font-medium">Emergency: <span className="text-primary">911</span></p>
                      <p className="font-medium">Crisis Line: <span className="text-primary">988</span></p>
                      <p className="font-medium">Crisis Text: <span className="text-primary">Text HOME to 741741</span></p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <Footer />
        <BackToTop />
      </div>
    </>
  );
};

export default Contact;