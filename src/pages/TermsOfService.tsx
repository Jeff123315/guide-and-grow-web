import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Card, CardContent } from "@/components/ui/card";

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - ThriveSpace</title>
        <meta name="description" content="ThriveSpace Terms of Service - Terms and conditions for using our mental health and social work services." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12 animate-fade-in">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                  Terms of Service
                </h1>
                <p className="text-muted-foreground">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </div>

              <Card className="border-0 shadow-card animate-fade-in">
                <CardContent className="p-8 md:p-12 space-y-8 prose prose-neutral dark:prose-invert max-w-none">
                  <section>
                    <h2 className="text-2xl font-bold text-foreground">Agreement to Terms</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      By accessing or using ThriveSpace's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground">Services Description</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      ThriveSpace provides professional mental health and social work services, including but not limited to:
                    </p>
                    <ul className="text-muted-foreground space-y-2">
                      <li>Individual, couples, and family therapy</li>
                      <li>Mental health counseling and assessment</li>
                      <li>Crisis intervention and support</li>
                      <li>Community social work services</li>
                      <li>Substance abuse counseling</li>
                      <li>Specialized therapeutic interventions</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground">Eligibility</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      To use our services, you must:
                    </p>
                    <ul className="text-muted-foreground space-y-2">
                      <li>Be at least 18 years old, or have parental/guardian consent</li>
                      <li>Provide accurate and complete information</li>
                      <li>Maintain the security of your account credentials</li>
                      <li>Comply with all applicable laws and regulations</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground">Appointments and Cancellations</h2>
                    <h3 className="text-xl font-semibold text-foreground mt-4">Scheduling</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Appointments can be scheduled through our website, by phone, or by email. Session times are confirmed upon booking and are subject to therapist availability.
                    </p>

                    <h3 className="text-xl font-semibold text-foreground mt-4">Cancellation Policy</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We require at least 24 hours notice for cancellations or rescheduling. Late cancellations (less than 24 hours notice) or no-shows may be charged the full session fee unless due to emergency circumstances.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground">Fees and Payment</h2>
                    <h3 className="text-xl font-semibold text-foreground mt-4">Session Fees</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Session fees vary by service type and therapist. Current rates will be provided during your initial consultation. Payment is due at the time of service unless alternative arrangements have been made.
                    </p>

                    <h3 className="text-xl font-semibold text-foreground mt-4">Insurance</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We accept many insurance plans. You are responsible for verifying your coverage and understanding your benefits. Any amounts not covered by insurance are your responsibility.
                    </p>

                    <h3 className="text-xl font-semibold text-foreground mt-4">Late Payment</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Overdue balances may result in suspension of services until payment is received. Outstanding balances may be referred to collections.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground">Professional Relationship</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      The therapeutic relationship is professional in nature. Therapists maintain appropriate boundaries and dual relationships outside of therapy are prohibited. Social media connections and personal relationships with clients are not permitted during active treatment.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground">Confidentiality</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      All information shared in therapy is confidential and protected by law, with limited exceptions as described in our Privacy Policy and HIPAA Notice of Privacy Practices. These exceptions include:
                    </p>
                    <ul className="text-muted-foreground space-y-2">
                      <li>Imminent risk of harm to self or others</li>
                      <li>Suspected abuse or neglect of children, elders, or dependent adults</li>
                      <li>Court orders or legal requirements</li>
                      <li>With your written authorization</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground">Teletherapy Services</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      When using teletherapy services:
                    </p>
                    <ul className="text-muted-foreground space-y-2">
                      <li>You are responsible for ensuring a private, secure location for sessions</li>
                      <li>You must have reliable internet connection and appropriate technology</li>
                      <li>You understand the limitations and potential risks of telehealth</li>
                      <li>Technical issues may occasionally disrupt sessions</li>
                      <li>Emergency services may be limited compared to in-person care</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground">Emergencies</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      ThriveSpace does not provide 24/7 emergency services. In case of a mental health emergency:
                    </p>
                    <ul className="text-muted-foreground space-y-2">
                      <li>Call 911 or go to your nearest emergency room</li>
                      <li>Contact the National Suicide Prevention Lifeline: 988</li>
                      <li>Contact the Crisis Text Line: Text HOME to 741741</li>
                      <li>Reach out to emergency contacts you've identified in your safety plan</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground">Termination of Services</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Either party may terminate the therapeutic relationship at any time. ThriveSpace reserves the right to terminate services in cases of:
                    </p>
                    <ul className="text-muted-foreground space-y-2">
                      <li>Non-payment of fees</li>
                      <li>Threatening or abusive behavior toward staff</li>
                      <li>Failure to comply with treatment recommendations</li>
                      <li>When services are no longer clinically appropriate</li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      When possible, we will provide appropriate referrals upon termination.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground">Limitation of Liability</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      While we strive to provide the highest quality care, therapy outcomes cannot be guaranteed. ThriveSpace and its therapists shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground">Intellectual Property</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      All content on the ThriveSpace website and materials provided in therapy are protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without written permission.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground">Changes to Terms</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We reserve the right to modify these Terms of Service at any time. Changes will be posted on our website with an updated effective date. Continued use of our services after changes constitutes acceptance of the modified terms.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground">Governing Law</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      These Terms shall be governed by and construed in accordance with the laws of Kenya, without regard to conflict of law principles.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground">Contact Information</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      If you have questions about these Terms of Service, please contact us:
                    </p>
                    <div className="text-muted-foreground space-y-1 mt-4">
                      <p><strong>Email:</strong> billyjapheth85@gmail.com</p>
                      <p><strong>Phone:</strong> +254 742 043 021</p>
                      <p><strong>Address:</strong> ThriveSpace, Nairobi, Kenya</p>
                    </div>
                  </section>

                  <section>
                    <p className="text-sm text-muted-foreground italic mt-8">
                      By using ThriveSpace services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                    </p>
                  </section>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Footer />
        <BackToTop />
      </div>
    </>
  );
};

export default TermsOfService;