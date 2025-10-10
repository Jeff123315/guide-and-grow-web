import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "./ContactForm";
import counselingOffice from "@/assets/counseling-office-2.jpg";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-accent/10 to-background relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{ backgroundImage: `url(${counselingOffice})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/98 via-background/95 to-background/98" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Phone className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Get In Touch</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Ready to Begin
            <span className="block mt-2 gradient-text">Your Journey?</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Taking the first step towards healing takes courage. I'm here to support you every step of the way.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="shadow-card border-2 border-border/50 hover:border-primary/30 transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                    <a href="tel:+254742043021" className="text-muted-foreground hover:text-primary transition-colors">
                      +254 742 043 021
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Mon-Fri, 9am-6pm EAT</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <a href="mailto:billyjapheth85@gmail.com" className="text-muted-foreground hover:text-primary transition-colors break-all">
                      billyjapheth85@gmail.com
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Response within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-accent-green" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-1">Location</h4>
                    <p className="text-muted-foreground">
                      Narok County<br />
                      Maasai Mara University<br />
                      Kenya
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-card bg-gradient-to-br from-accent/20 to-accent/5 border-2 border-accent-green/20">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Clock className="h-5 w-5 text-accent-green" />
                  Availability (EAT)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Thursday</span>
                  <span className="font-medium text-foreground">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Friday</span>
                  <span className="font-medium text-foreground">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Weekend</span>
                  <span className="font-medium text-foreground">By Appointment</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="shadow-card border-2 border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Send Me a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;