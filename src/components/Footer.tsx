import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/mental-health-counseling" className="text-muted-foreground hover:text-primary transition-colors">
                  Mental Health Counseling
                </Link>
              </li>
              <li>
                <Link to="/clinical-social-work" className="text-muted-foreground hover:text-primary transition-colors">
                  Clinical Social Work
                </Link>
              </li>
              <li>
                <Link to="/child-family-services" className="text-muted-foreground hover:text-primary transition-colors">
                  Child & Family Services
                </Link>
              </li>
              <li>
                <Link to="/substance-abuse-services" className="text-muted-foreground hover:text-primary transition-colors">
                  Substance Abuse Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Specializations</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/medical-social-work" className="text-muted-foreground hover:text-primary transition-colors">
                  Medical Social Work
                </Link>
              </li>
              <li>
                <Link to="/school-social-work" className="text-muted-foreground hover:text-primary transition-colors">
                  School Social Work
                </Link>
              </li>
              <li>
                <Link to="/elder-care-services" className="text-muted-foreground hover:text-primary transition-colors">
                  Elder Care Services
                </Link>
              </li>
              <li>
                <Link to="/crisis-intervention" className="text-muted-foreground hover:text-primary transition-colors">
                  Crisis Intervention
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Additional Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/community-social-work" className="text-muted-foreground hover:text-primary transition-colors">
                  Community Social Work
                </Link>
              </li>
              <li>
                <Link to="/policy-advocacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Policy & Advocacy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Email: billyjapheth85@gmail.com</li>
              <li>Phone: +254742043021</li>
              <li>Hours: Mon-Fri, 9AM-6PM EAT</li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8">
          <p className="text-center text-muted-foreground">
            © {new Date().getFullYear()} Japheth Billy, AI Software Engineer/Social Worker. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
