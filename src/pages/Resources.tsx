import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Video, FileText, Headphones, ArrowRight, Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const Resources = () => {
  const categories = [
    {
      title: "Mental Health Guides",
      icon: BookOpen,
      description: "In-depth articles on managing anxiety, depression, stress, and more",
      color: "from-primary to-accent-green"
    },
    {
      title: "Video Resources",
      icon: Video,
      description: "Expert-led videos on coping strategies and self-care techniques",
      color: "from-secondary to-primary"
    },
    {
      title: "Worksheets & Tools",
      icon: FileText,
      description: "Downloadable resources for personal growth and self-reflection",
      color: "from-accent-green to-primary"
    },
    {
      title: "Meditation & Mindfulness",
      icon: Headphones,
      description: "Guided audio sessions for relaxation and mental clarity",
      color: "from-primary to-secondary"
    }
  ];

  const featuredArticles = [
    {
      title: "Understanding Anxiety: A Complete Guide",
      category: "Mental Health",
      readTime: "8 min read",
      excerpt: "Learn about anxiety symptoms, triggers, and evidence-based coping strategies that can help you manage worry and stress.",
      date: "March 15, 2024"
    },
    {
      title: "Building Resilience in Challenging Times",
      category: "Personal Growth",
      readTime: "6 min read",
      excerpt: "Discover practical techniques to strengthen your mental resilience and bounce back from life's difficulties.",
      date: "March 12, 2024"
    },
    {
      title: "The Power of Self-Compassion",
      category: "Wellness",
      readTime: "7 min read",
      excerpt: "Learn why treating yourself with kindness is essential for mental health and how to practice self-compassion daily.",
      date: "March 10, 2024"
    },
    {
      title: "Supporting a Loved One with Depression",
      category: "Relationships",
      readTime: "10 min read",
      excerpt: "A guide for family and friends on how to provide meaningful support to someone experiencing depression.",
      date: "March 8, 2024"
    },
    {
      title: "Mindfulness for Beginners",
      category: "Meditation",
      readTime: "5 min read",
      excerpt: "Start your mindfulness journey with simple, practical exercises you can do anywhere, anytime.",
      date: "March 5, 2024"
    },
    {
      title: "Managing Stress in the Workplace",
      category: "Career",
      readTime: "9 min read",
      excerpt: "Effective strategies to reduce work-related stress and maintain a healthy work-life balance.",
      date: "March 3, 2024"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-primary/10 to-background overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <BookOpen className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Mental Health Resources</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Knowledge & Tools for
              <span className="block mt-2 gradient-text">Your Wellbeing Journey</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
              Explore evidence-based articles, guides, and resources to support your mental health and personal growth
            </p>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card 
                  key={index}
                  className="shadow-card hover:shadow-lg transition-all duration-300 border-0 hover-lift group"
                >
                  <CardHeader>
                    <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="ghost" className="w-full justify-between group-hover:text-primary">
                      Explore
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Latest Articles & Guides
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert insights and practical advice for your mental wellness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {featuredArticles.map((article, index) => (
              <Card 
                key={index}
                className="shadow-card hover:shadow-lg transition-all duration-300 border-0 hover-lift group h-full flex flex-col"
              >
                <CardHeader className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {article.date}
                    </span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors mb-3">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{article.readTime}</span>
                    <Button variant="ghost" size="sm" className="group-hover:text-primary">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent-green/10">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto shadow-card border-2 border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-4">Stay Updated on Mental Wellness</CardTitle>
              <CardDescription className="text-base">
                Subscribe to receive the latest articles, tips, and resources delivered to your inbox
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <Button type="submit" variant="gradient" size="lg" className="sm:w-auto">
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-center text-muted-foreground mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Professional Support CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Need Professional Support?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              While these resources are helpful, sometimes you need personalized guidance. 
              I'm here to provide professional counseling tailored to your unique situation.
            </p>
            <Button size="lg" variant="gradient" asChild>
              <a href="/contact">
                Book Your Free Consultation
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Resources;
