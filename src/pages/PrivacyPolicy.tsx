import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Card, CardContent } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - ThriveSpace</title>
        <meta name="description" content="ThriveSpace Privacy Policy - How we collect, use, and protect your personal information and health data." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12 animate-fade-in">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                  Privacy Policy
                </h1>
                <p className="text-muted-foreground">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </div>

              <Card className="border-0 shadow-card animate-fade-in">
                <CardContent className="p-8 md:p-12 space-y-8 prose prose-neutral dark:prose-invert max-w-none">
                  <section>
                    <h2 className="text-2xl font-bold text-foreground">Introduction</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      ThriveSpace ("we," "our," or "us") is committed to protecting your privacy and ensuring the confidentiality of your personal and health information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mental health and social work services.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground">Information We Collect</h2>
                    <h3 className="text-xl font-semibold text-foreground mt-4">Personal Information</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We collect information that you provide directly to us, including:
                    </p>
                    <ul className="text-muted-foreground space-y-2">
                      <li>Name, email address, phone number, and mailing address</li>
                      <li>Date of birth and demographic information</li>
                      <li>Emergency contact information</li>
                      <li>Insurance information and payment details</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-foreground mt-4">Health Information</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      As part of providing mental health services, we collect protected health information (PHI) including:
                    </p>
                    <ul className="text-muted-foreground space-y-2">
                      <li>Mental health history and current symptoms</li>
                      <li>Treatment plans and progress notes</li>
                      <li>Medication information</li>
                      <li>Records of therapy sessions and communications</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground">How We Use Your Information</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We use your information for the following purposes:
                    </p>
                    <ul className="text-muted-foreground space-y-2">
                      <li>Providing mental health and social work services</li>
                      <li>Treatment planning and care coordination</li>
                      <li>Billing and insurance processing</li>
                      <li>Appointment scheduling and reminders</li>
                      <li>Communication about your care</li>
                      <li>Legal and regulatory compliance</li>
                      <li>Improving our services and quality of care</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground">Confidentiality and HIPAA Compliance</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      ThriveSpace complies with applicable privacy laws, including HIPAA (Health Insurance Portability and Accountability Act). Your health information is protected and will not be disclosed without your written authorization, except in the following limited circumstances:
                    </p>
                    <ul className="text-muted-foreground space-y-2">
                      <li>When required by law (e.g., court orders, subpoenas)</li>
                      <li>To prevent serious harm to you or others</li>
                      <li>Suspected child, elder, or dependent adult abuse</li>
                      <li>For treatment, payment, and healthcare operations</li>
                      <li>As authorized by you in writing</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground">Information Security</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We implement appropriate technical, administrative, and physical safeguards to protect your information, including:
                    </p>
                    <ul className="text-muted-foreground space-y-2">
                      <li>Encrypted data transmission and storage</li>
                      <li>Secure, password-protected systems</li>
                      <li>Limited access to information on a need-to-know basis</li>
                      <li>Regular security audits and updates</li>
                      <li>Staff training on privacy and confidentiality</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground">Your Rights</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      You have the following rights regarding your information:
                    </p>
                    <ul className="text-muted-foreground space-y-2">
                      <li>Access and review your health records</li>
                      <li>Request corrections to your information</li>
                      <li>Request restrictions on certain uses or disclosures</li>
                      <li>Receive an accounting of disclosures</li>
                      <li>Request confidential communications</li>
                      <li>File a complaint if you believe your privacy rights have been violated</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground">Third-Party Services</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We may use third-party service providers to help us operate our services, such as:
                    </p>
                    <ul className="text-muted-foreground space-y-2">
                      <li>Electronic health record systems</li>
                      <li>Billing and payment processors</li>
                      <li>Video conferencing platforms for teletherapy</li>
                      <li>Email and communication services</li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      These providers are bound by confidentiality agreements and are only permitted to use your information as necessary to provide their services.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground">Data Retention</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We retain your information for as long as necessary to provide services and as required by law. Health records are typically maintained for a minimum of 7 years from the last date of service, or longer as required by applicable regulations.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground">Changes to This Policy</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on our website and updating the "Last Updated" date. Your continued use of our services after changes indicates acceptance of the updated policy.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground">Contact Us</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
                    </p>
                    <div className="text-muted-foreground space-y-1 mt-4">
                      <p><strong>Email:</strong> privacy@thrivespace.com</p>
                      <p><strong>Phone:</strong> +254 700 123 456</p>
                      <p><strong>Address:</strong> ThriveSpace, Nairobi, Kenya</p>
                    </div>
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

export default PrivacyPolicy;