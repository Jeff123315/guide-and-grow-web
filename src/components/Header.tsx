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
          
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <div className="relative group">
              <button className="text-foreground hover:text-primary transition-colors flex items-center space-x-1">
                <span>Services</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
               <div className="absolute top-full left-0 w-64 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2 max-h-96 overflow-y-auto">
                  <a href="/clinical-social-work" className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary">
                    Clinical Social Work
                  </a>
                  <a href="/community-social-work" className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary">
                    Community Social Work
                  </a>
                  <a href="/child-family-services" className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary">
                    Child & Family Services
                  </a>
                  <a href="/mental-health-counseling" className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary">
                    Mental Health Counseling
                  </a>
                  <a href="/crisis-intervention" className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary">
                    Crisis Intervention
                  </a>
                  <a href="/school-social-work" className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary">
                    School Social Work
                  </a>
                  <a href="/medical-social-work" className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary">
                    Medical Social Work
                  </a>
                  <a href="/substance-abuse-services" className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary">
                    Substance Abuse Services
                  </a>
                  <a href="/elder-care-services" className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary">
                    Elder Care Services
                  </a>
                  <a href="/policy-advocacy" className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary">
                    Policy & Advocacy
                  </a>
                </div>
              </div>
            </div>
            <a href="/#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="/#contact" className="text-foreground hover:text-primary transition-colors">
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
                <nav className="flex flex-col space-y-4 mt-8">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Services</h3>
                    <div className="flex flex-col space-y-2 ml-4 max-h-64 overflow-y-auto">
                      <a href="/clinical-social-work" className="text-sm text-foreground hover:text-primary transition-colors">
                        Clinical Social Work
                      </a>
                      <a href="/community-social-work" className="text-sm text-foreground hover:text-primary transition-colors">
                        Community Social Work
                      </a>
                      <a href="/child-family-services" className="text-sm text-foreground hover:text-primary transition-colors">
                        Child & Family Services
                      </a>
                      <a href="/mental-health-counseling" className="text-sm text-foreground hover:text-primary transition-colors">
                        Mental Health Counseling
                      </a>
                      <a href="/crisis-intervention" className="text-sm text-foreground hover:text-primary transition-colors">
                        Crisis Intervention
                      </a>
                      <a href="/school-social-work" className="text-sm text-foreground hover:text-primary transition-colors">
                        School Social Work
                      </a>
                      <a href="/medical-social-work" className="text-sm text-foreground hover:text-primary transition-colors">
                        Medical Social Work
                      </a>
                      <a href="/substance-abuse-services" className="text-sm text-foreground hover:text-primary transition-colors">
                        Substance Abuse Services
                      </a>
                      <a href="/elder-care-services" className="text-sm text-foreground hover:text-primary transition-colors">
                        Elder Care Services
                      </a>
                      <a href="/policy-advocacy" className="text-sm text-foreground hover:text-primary transition-colors">
                        Policy & Advocacy
                      </a>
                    </div>
                  </div>
                  <a href="/#about" className="text-lg text-foreground hover:text-primary transition-colors">
                    About
                  </a>
                  <a href="/#contact" className="text-lg text-foreground hover:text-primary transition-colors">
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