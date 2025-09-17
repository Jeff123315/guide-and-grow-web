import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Taking the first step towards healing takes courage. I'm here to support you every step of the way.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">📞</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Phone</h4>
                    <p className="text-muted-foreground">+254 742 043 021</p>
                    <p className="text-sm text-muted-foreground">Available Mon-Fri, 9am-6pm EAT</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">✉️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">billyjapheth85@gmail.com</p>
                    <p className="text-sm text-muted-foreground">Response within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Location</h4>
                    <p className="text-muted-foreground">Narok County<br />Maasai Mara University<br />Kenya</p>
                  </div>
                </div>
                
                <div className="bg-accent/50 rounded-lg p-4 mt-6">
                  <h4 className="font-semibold text-foreground mb-2">Availability (EAT)</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Monday - Thursday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Friday</span>
                      <span>9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Weekend</span>
                      <span>Virtual sessions available</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-8">
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Schedule Your First Session</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Ready to take the first step? I offer a brief consultation to discuss your needs 
                  and determine how I can best support your journey.
                </p>
                <Button className="w-full bg-gradient-primary hover:opacity-90 text-lg py-3">
                  Book Free Consultation
                </Button>
              </CardContent>
            </Card>
            
            <Card className="shadow-card border-0 bg-healing-green/10">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Insurance & Payment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-healing-green rounded-full"></div>
                  <span className="text-foreground">Most insurance plans accepted</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-healing-green rounded-full"></div>
                  <span className="text-foreground">Sliding scale fees available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-healing-green rounded-full"></div>
                  <span className="text-foreground">HSA/FSA accepted</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;