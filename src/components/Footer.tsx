import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import logo from "@/assets/logo.png";

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Thank you for subscribing!",
        description: "You'll receive updates about our services and mental health resources.",
      });
      setEmail("");
    }
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        {/* Newsletter Section */}
        <div className="mb-12 max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Mail className="h-5 w-5 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">Stay Connected</h3>
          </div>
          <p className="text-muted-foreground mb-6">
            Subscribe to receive mental health tips, resources, and updates about our services.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button type="submit" variant="gradient">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="ThriveSpace Logo" className="w-12 h-12 object-contain" />
              <div>
                <h3 className="font-bold text-lg text-foreground">ThriveSpace</h3>
                <p className="text-xs text-muted-foreground">Growth • Community • Care</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Professional mental health and social work services dedicated to helping you thrive.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-white text-primary flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-foreground">Services</h3>
            <ul className="space-y-2 text-sm">
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
                <Link to="/community-social-work" className="text-muted-foreground hover:text-primary transition-colors">
                  Community Social Work
                </Link>
              </li>
            </ul>
          </div>

          {/* Additional Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-foreground">Specializations</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/crisis-intervention" className="text-muted-foreground hover:text-primary transition-colors">
                  Crisis Intervention
                </Link>
              </li>
              <li>
                <Link to="/school-social-work" className="text-muted-foreground hover:text-primary transition-colors">
                  School Social Work
                </Link>
              </li>
              <li>
                <Link to="/medical-social-work" className="text-muted-foreground hover:text-primary transition-colors">
                  Medical Social Work
                </Link>
              </li>
              <li>
                <Link to="/policy-advocacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Policy & Advocacy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-foreground">Contact</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <a href="mailto:billyjapheth85@gmail.com" className="hover:text-primary transition-colors break-all">
                  billyjapheth85@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">📞</span>
                <a href="tel:+254742043021" className="hover:text-primary transition-colors">
                  +254 742 043 021
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">🕐</span>
                <span>Mon-Fri: 9AM-6PM EAT</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">📍</span>
                <span>Narok County, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} ThriveSpace. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
