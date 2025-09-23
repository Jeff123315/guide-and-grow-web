import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import counselingOffice from "@/assets/counseling-office-2.jpg";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-soft relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-8"
        style={{ backgroundImage: `url(${counselingOffice})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/98 to-background/95"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Taking the first step towards healing takes courage. I'm here to support you every step of the way.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl text-foreground">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">📞</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-foreground text-sm sm:text-base">Phone</h4>
                    <p className="text-muted-foreground text-sm sm:text-base break-all">+254 742 043 021</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Available Mon-Fri, 9am-6pm EAT</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">✉️</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-foreground text-sm sm:text-base">Email</h4>
                    <p className="text-muted-foreground text-sm sm:text-base break-all">billyjapheth85@gmail.com</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Response within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">📍</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-foreground text-sm sm:text-base">Location</h4>
                    <p className="text-muted-foreground text-sm sm:text-base">Narok County<br />Maasai Mara University<br />Kenya</p>
                  </div>
                </div>
                
                <div className="bg-accent/50 rounded-lg p-3 sm:p-4 mt-4 sm:mt-6">
                  <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Availability (EAT)</h4>
                  <div className="space-y-1 text-xs sm:text-sm text-muted-foreground">
                    <div className="flex justify-between gap-2">
                      <span>Monday - Thursday</span>
                      <span className="text-right">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between gap-2">
                      <span>Friday</span>
                      <span className="text-right">9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between gap-2">
                      <span>Weekend</span>
                      <span className="text-right">Virtual sessions available</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6 sm:space-y-8">
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl text-foreground">Schedule Your First Session</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm sm:text-base">
                  Ready to take the first step? I offer a brief consultation to discuss your needs 
                  and determine how I can best support your journey.
                </p>
                <Button className="w-full bg-gradient-primary hover:opacity-90 text-base sm:text-lg py-3">
                  Book Free Consultation
                </Button>
              </CardContent>
            </Card>
            
            <Card className="shadow-card border-0 bg-healing-green/10">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl text-foreground">Insurance & Payment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 sm:space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-healing-green rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-foreground text-sm sm:text-base">Most insurance plans accepted</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-healing-green rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-foreground text-sm sm:text-base">Sliding scale fees available</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-healing-green rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-foreground text-sm sm:text-base">HSA/FSA accepted</span>
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