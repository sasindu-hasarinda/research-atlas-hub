import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen, FileText, Presentation, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  const features = [
    {
      icon: BookOpen,
      title: "Domain Knowledge",
      description: "Literature survey, research gap, and methodology",
      link: "/domain",
    },
    {
      icon: Target,
      title: "Milestones",
      description: "Track project progress and assessments",
      link: "/milestones",
    },
    {
      icon: FileText,
      title: "Documents",
      description: "Access all project documentation",
      link: "/documents",
    },
    {
      icon: Presentation,
      title: "Presentations",
      description: "View past presentation slides",
      link: "/presentations",
    },
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 md:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')",
          }}
        ></div>
        <div className="relative container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-foreground animate-fade-in-up drop-shadow-lg">
              Intelibridge: AI-Driven Application to Bridge IT Academic Industry
              Skills Gaps
            </h1>
            <p className="text-lg md:text-xl text-primary font-semibold mb-4 animate-fade-in-up animation-delay-200">
              RP25-043
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in-up animation-delay-300">
              A comprehensive research project exploring the disconnect between
              industry requirements and academic preparation through AI-powered
              solutions. Discover insights, methodologies, and innovative
              approaches to align undergraduate education with real-world IT
              industry needs.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-600">
              <Button asChild size="lg" className="shadow-lg">
                <Link to="/domain">Explore Research</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/about">Meet the Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Project Resources
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to understand and follow the research project
            journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Link key={feature.title} to={feature.link}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                <CardHeader>
                  <div className="p-3 w-fit rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 mb-4 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Research Areas", value: "Multiple" },
              { label: "Documentation", value: "Complete" },
              { label: "Presentations", value: "Updated" },
              { label: "Team Members", value: "Dedicated" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
