import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  return (
    <header className="w-full bg-background/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-2 sm:px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs sm:text-sm">JB</span>
            </div>
            <div className="min-w-0">
              <h1 className="text-sm sm:text-xl font-bold text-foreground truncate">Japheth Billy</h1>
              <p className="text-xs sm:text-sm text-muted-foreground hidden xs:block">Counselor & Social Worker | AI Software Engineer</p>
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
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
          
          <div className="flex items-center space-x-2">
            <Button 
              variant="default" 
              size="sm"
              className="bg-gradient-primary hover:opacity-90 transition-all hidden sm:inline-flex lg:px-6"
            >
              <span className="hidden sm:inline">Book Consultation</span>
              <span className="sm:hidden">Book</span>
            </Button>
            
            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px] sm:w-[300px]">
                <nav className="flex flex-col space-y-6 mt-8">
                  <a href="#services" className="text-lg text-foreground hover:text-primary transition-colors">
                    Services
                  </a>
                  <a href="#about" className="text-lg text-foreground hover:text-primary transition-colors">
                    About
                  </a>
                  <a href="#contact" className="text-lg text-foreground hover:text-primary transition-colors">
                    Contact
                  </a>
                  <Button className="bg-gradient-primary hover:opacity-90 mt-6">
                    Book Consultation
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;