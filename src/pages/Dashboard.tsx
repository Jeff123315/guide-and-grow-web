import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Users, 
  Baby, 
  Heart, 
  AlertCircle, 
  GraduationCap, 
  Stethoscope, 
  Pill, 
  UserCheck, 
  Scale,
  ArrowRight,
  Activity,
  TrendingUp,
  Clock
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate("/login");
      } else {
        setUser(session.user);
      }
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        navigate("/login");
      } else {
        setUser(session.user);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const services = [
    {
      title: "Clinical Social Work",
      description: "Therapeutic interventions and mental health support",
      icon: Brain,
      route: "/clinical-social-work",
      color: "bg-primary/10",
      iconColor: "text-primary",
      stats: "150+ clients served"
    },
    {
      title: "Community Social Work",
      description: "Community development and empowerment programs",
      icon: Users,
      route: "/community-social-work",
      color: "bg-healing-green/10",
      iconColor: "text-healing-green",
      stats: "20+ communities"
    },
    {
      title: "Child & Family Services",
      description: "Supporting families and protecting children",
      icon: Baby,
      route: "/child-family-services",
      color: "bg-secondary/20",
      iconColor: "text-secondary-foreground",
      stats: "300+ families"
    },
    {
      title: "Mental Health Counseling",
      description: "Professional mental health counseling services",
      icon: Heart,
      route: "/mental-health-counseling",
      color: "bg-primary/10",
      iconColor: "text-primary",
      stats: "500+ sessions"
    },
    {
      title: "Crisis Intervention",
      description: "24/7 emergency support and crisis management",
      icon: AlertCircle,
      route: "/crisis-intervention",
      color: "bg-destructive/10",
      iconColor: "text-destructive",
      stats: "24/7 available"
    },
    {
      title: "School Social Work",
      description: "Supporting students' academic and social success",
      icon: GraduationCap,
      route: "/school-social-work",
      color: "bg-accent/30",
      iconColor: "text-accent-foreground",
      stats: "50+ schools"
    },
    {
      title: "Medical Social Work",
      description: "Healthcare support and patient advocacy",
      icon: Stethoscope,
      route: "/medical-social-work",
      color: "bg-healing-green/10",
      iconColor: "text-healing-green",
      stats: "15+ hospitals"
    },
    {
      title: "Substance Abuse Services",
      description: "Recovery support and addiction counseling",
      icon: Pill,
      route: "/substance-abuse-services",
      color: "bg-primary/10",
      iconColor: "text-primary",
      stats: "200+ recoveries"
    },
    {
      title: "Elder Care Services",
      description: "Supporting older adults and their families",
      icon: UserCheck,
      route: "/elder-care-services",
      color: "bg-secondary/20",
      iconColor: "text-secondary-foreground",
      stats: "100+ seniors"
    },
    {
      title: "Policy & Advocacy",
      description: "Systemic change and social justice initiatives",
      icon: Scale,
      route: "/policy-advocacy",
      color: "bg-accent/30",
      iconColor: "text-accent-foreground",
      stats: "10+ policies changed"
    }
  ];

  const quickStats = [
    {
      label: "Active Cases",
      value: "1,234",
      icon: Activity,
      change: "+12%",
      color: "text-primary"
    },
    {
      label: "Success Rate",
      value: "94%",
      icon: TrendingUp,
      change: "+3%",
      color: "text-healing-green"
    },
    {
      label: "Avg Response Time",
      value: "2.4hrs",
      icon: Clock,
      change: "-15%",
      color: "text-accent-foreground"
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-soft">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Welcome back, {user?.email?.split('@')[0] || 'Professional'}
          </h1>
          <p className="text-muted-foreground text-lg">
            Your comprehensive social work management dashboard
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {quickStats.map((stat, index) => (
            <Card key={index} className="shadow-card border-0">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                    <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                    <Badge variant="secondary" className="mt-2">
                      {stat.change} from last month
                    </Badge>
                  </div>
                  <stat.icon className={`h-12 w-12 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Services Grid */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            All Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="shadow-card hover:shadow-lg transition-all duration-300 border-0 group cursor-pointer overflow-hidden"
              onClick={() => navigate(service.route)}
            >
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 ${service.color} rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`h-8 w-8 ${service.iconColor}`} />
                </div>
                <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{service.stats}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    View <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Activity Section */}
        <Card className="mt-8 shadow-card border-0">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest updates and notifications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-3 rounded-lg bg-accent/20">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Activity className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">New case assigned</p>
                  <p className="text-xs text-muted-foreground">Community outreach program - 2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 rounded-lg bg-accent/20">
                <div className="h-10 w-10 rounded-full bg-healing-green/10 flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-healing-green" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">Success milestone reached</p>
                  <p className="text-xs text-muted-foreground">Family reunification completed - 5 hours ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;
