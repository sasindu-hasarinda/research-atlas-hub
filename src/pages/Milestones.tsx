import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Circle, Clock } from "lucide-react";

export default function Milestones() {
  const milestones = [
    {
      title: "Project Proposal",
      date: "February 2025",
      marks: "10%",
      status: "completed",
      description: "Initial project proposal including problem statement, objectives, and methodology",
    },
    {
      title: "Progress Presentation 1",
      date: "March 2025",
      marks: "15%",
      status: "completed",
      description: "First progress review covering literature survey and initial design",
    },
    {
      title: "Progress Presentation 2",
      date: "April 2025",
      marks: "15%",
      status: "in-progress",
      description: "Second progress review demonstrating implementation progress",
    },
    {
      title: "Final Assessment",
      date: "May 2025",
      marks: "40%",
      status: "pending",
      description: "Final project demonstration and documentation submission",
    },
    {
      title: "Viva Voce",
      date: "May 2025",
      marks: "20%",
      status: "pending",
      description: "Oral examination and defense of research work",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      case "in-progress":
        return <Clock className="h-5 w-5 text-accent" />;
      default:
        return <Circle className="h-5 w-5 text-muted-foreground" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-500">Completed</Badge>;
      case "in-progress":
        return <Badge className="bg-accent">In Progress</Badge>;
      default:
        return <Badge variant="outline">Pending</Badge>;
    }
  };

  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Project Milestones
          </h1>
          <p className="text-lg text-muted-foreground">
            Track the progress and key assessments throughout the research project
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-border hidden md:block" />

          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <Card key={index} className="relative hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="relative z-10 bg-card">
                      {getStatusIcon(milestone.status)}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <CardTitle className="text-xl">{milestone.title}</CardTitle>
                        {getStatusBadge(milestone.status)}
                      </div>
                      <CardDescription className="flex flex-wrap gap-4 text-base">
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {milestone.date}
                        </span>
                        <span className="font-semibold text-primary">
                          {milestone.marks} of total marks
                        </span>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Summary Card */}
        <Card className="mt-8 bg-gradient-to-br from-primary/5 to-accent/5">
          <CardHeader>
            <CardTitle>Assessment Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-green-500">2</p>
                <p className="text-sm text-muted-foreground">Completed</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">1</p>
                <p className="text-sm text-muted-foreground">In Progress</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-muted-foreground">2</p>
                <p className="text-sm text-muted-foreground">Pending</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
