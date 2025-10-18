import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { HelpCircle, MessageCircle } from "lucide-react";

const FAQs = () => {
  const faqCategories = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "How do I book my first appointment?",
          answer: "You can book your first appointment by clicking the 'Book Free Consultation' button on our website, calling us directly, or using our contact form. We offer a free 15-minute consultation to discuss your needs and answer any questions before your first session."
        },
        {
          question: "What should I expect in my first session?",
          answer: "Your first session is about getting to know you and understanding your concerns. We'll discuss your goals, background, and what brings you to therapy. This is also a time for you to ask questions and decide if we're a good fit. There's no pressure—it's a collaborative conversation."
        },
        {
          question: "Do you offer virtual/online sessions?",
          answer: "Yes! We offer both in-person and secure teletherapy sessions via video conferencing. Many clients prefer the convenience and comfort of online sessions, especially for ongoing therapy."
        },
        {
          question: "How long does each session last?",
          answer: "Standard individual therapy sessions are 50-60 minutes. Couples and family sessions may be longer (75-90 minutes). We'll discuss the best session length for your specific needs during your consultation."
        }
      ]
    },
    {
      category: "Cost & Insurance",
      questions: [
        {
          question: "How much do sessions cost?",
          answer: "Our rates vary by service type and therapist. Individual therapy sessions typically range from $80-150 per session. We offer sliding scale fees based on income for those who qualify. Contact us for specific pricing information."
        },
        {
          question: "Do you accept insurance?",
          answer: "We are in-network with many major insurance providers. We can verify your benefits before your first appointment. If we're out-of-network with your insurance, we can provide a superbill for potential reimbursement."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept cash, credit/debit cards, mobile payments, and electronic bank transfers. Payment is typically due at the time of service. We also offer payment plans for extended therapy packages."
        },
        {
          question: "Do you offer sliding scale or reduced fees?",
          answer: "Yes, we have a limited number of sliding scale spots available for individuals with financial constraints. Please discuss this during your initial consultation, and we'll work with you to find an affordable solution."
        }
      ]
    },
    {
      category: "Therapy Process",
      questions: [
        {
          question: "How long will I need therapy?",
          answer: "The length of therapy varies greatly depending on your goals, concerns, and progress. Some clients benefit from short-term therapy (8-12 sessions), while others engage in longer-term work. We'll regularly review your progress and adjust the treatment plan together."
        },
        {
          question: "Is everything I share confidential?",
          answer: "Yes, confidentiality is a cornerstone of therapy. Everything you share is protected by law, with very few exceptions (such as risk of harm to yourself or others, child/elder abuse, or court orders). We'll review confidentiality limits during your first session."
        },
        {
          question: "Can I switch therapists if needed?",
          answer: "Absolutely. The therapeutic relationship is crucial to progress, and it's important you feel comfortable with your therapist. If you'd like to try working with a different member of our team, we'll facilitate that transition respectfully."
        },
        {
          question: "What if I need to cancel or reschedule?",
          answer: "We understand that life happens. We ask for at least 24 hours notice for cancellations or rescheduling. Late cancellations or no-shows may incur a fee. We'll discuss our full cancellation policy during your first session."
        }
      ]
    },
    {
      category: "Specialized Services",
      questions: [
        {
          question: "Do you work with children and adolescents?",
          answer: "Yes, we have therapists specially trained in child and adolescent therapy. We use age-appropriate approaches including play therapy, art therapy, and family therapy to support young people's mental health."
        },
        {
          question: "Do you offer couples or family therapy?",
          answer: "Yes, we provide couples counseling and family therapy. These sessions help improve communication, resolve conflicts, and strengthen relationships. Sessions are typically 75-90 minutes."
        },
        {
          question: "What is trauma-informed care?",
          answer: "Trauma-informed care recognizes the widespread impact of trauma and creates a safe, supportive environment for healing. Our therapists are trained in evidence-based trauma treatments including EMDR, CPT, and trauma-focused CBT."
        },
        {
          question: "Can you help with addiction or substance abuse?",
          answer: "Yes, we have certified addiction counselors who provide evidence-based treatment for substance use disorders. We offer individual counseling, family support, and connection to community resources for comprehensive recovery support."
        }
      ]
    },
    {
      category: "Crisis & Emergency",
      questions: [
        {
          question: "What should I do in a mental health emergency?",
          answer: "If you or someone you know is in immediate danger, call 911 or go to your nearest emergency room. For crisis support, contact the National Suicide Prevention Lifeline at 988 (available 24/7). You can also reach out to our crisis resources section for additional hotlines."
        },
        {
          question: "Do you offer crisis intervention services?",
          answer: "Yes, we provide crisis intervention and support. While we don't offer 24/7 emergency services, we can help with safety planning, immediate stabilization, and connecting you with appropriate emergency resources."
        },
        {
          question: "Can I contact my therapist between sessions?",
          answer: "Brief check-ins via email or phone are generally acceptable for scheduling or urgent concerns. However, therapy work happens during sessions. If you're experiencing a crisis, please contact crisis services rather than waiting for a callback."
        }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions - ThriveSpace Mental Health Services</title>
        <meta name="description" content="Find answers to common questions about therapy, counseling, costs, insurance, confidentiality, and our services at ThriveSpace." />
        <meta property="og:title" content="FAQs - ThriveSpace Mental Health & Social Work" />
        <meta property="og:description" content="Get answers to your questions about our mental health services, therapy process, and how we can support you." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <div className="inline-flex p-4 rounded-full bg-primary/10 mb-6">
                <HelpCircle className="h-12 w-12 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Find answers to common questions about our services, therapy process, and how we can support you
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              {faqCategories.map((category, catIndex) => (
                <div key={catIndex} className="animate-fade-in">
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
                    {category.category}
                  </h2>
                  
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.questions.map((faq, qIndex) => (
                      <AccordionItem 
                        key={qIndex} 
                        value={`item-${catIndex}-${qIndex}`}
                        className="border-0 shadow-card rounded-lg px-6 hover-lift"
                      >
                        <AccordionTrigger className="text-left hover:no-underline py-4">
                          <span className="font-semibold text-foreground pr-4">
                            {faq.question}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Still Have Questions CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto border-0 shadow-elegant bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 animate-fade-in">
              <CardContent className="p-8 md:p-12 text-center">
                <div className="inline-flex p-4 rounded-full bg-primary/10 mb-6">
                  <MessageCircle className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  Still Have Questions?
                </h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  We're here to help. Reach out to us for personalized answers to your questions or to schedule your free consultation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="hover-lift">
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="hover-lift">
                    <Link to="/services">View Our Services</Link>
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

export default FAQs;