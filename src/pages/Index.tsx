import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import SocialWorkerRoles from "@/components/SocialWorkerRoles";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <About />
      <SocialWorkerRoles />
      <Testimonials />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
