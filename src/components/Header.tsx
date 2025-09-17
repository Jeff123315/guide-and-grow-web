import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-background/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">JB</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Japheth Billy</h1>
              <p className="text-sm text-muted-foreground">Counselor & Social Worker | AI Software Engineer</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
          
          <Button variant="default" className="bg-gradient-primary hover:opacity-90 transition-all">
            Book Consultation
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;