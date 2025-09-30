import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import groupTherapy from "@/assets/group-therapy-1.jpg";

const PolicyAdvocacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-healing relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url(${groupTherapy})` }}/>
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-3 sm:mb-4 bg-primary/10 text-primary border-primary/20">Policy & Advocacy</Badge>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 px-2">Policy Development & Social Advocacy</h1>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 px-4">🇰🇪 Advocating for social justice in Kenya | 🌍 Global policy reform work</p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 w-full sm:w-auto">Join Our Advocacy</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PolicyAdvocacy;