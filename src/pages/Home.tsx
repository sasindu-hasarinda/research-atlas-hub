import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Research Project Documentation Portal
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              A comprehensive platform for managing and showcasing research project documentation, 
              milestones, and presentations. Access all your project resources in one organized location.
            </p>
            <div className="flex flex-wrap gap-4">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Resources</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to understand and follow the research project journey
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
                  <CardDescription className="text-base">{feature.description}</CardDescription>
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
                <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
