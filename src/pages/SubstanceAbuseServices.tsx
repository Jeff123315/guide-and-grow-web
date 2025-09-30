import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import familyTherapy from "@/assets/family-therapy-1.jpg";

const SubstanceAbuseServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-healing relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url(${familyTherapy})` }}/>
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-3 sm:mb-4 bg-primary/10 text-primary border-primary/20">Substance Abuse Services</Badge>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 px-2">Addiction Recovery & Support Services</h1>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 px-4">🇰🇪 Supporting recovery from alcohol, chang'aa addiction in Kenya | 🌍 Global substance abuse treatment</p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 w-full sm:w-auto">Start Recovery Journey</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubstanceAbuseServices;