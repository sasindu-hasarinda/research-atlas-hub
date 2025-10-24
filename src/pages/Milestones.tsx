import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Circle, Clock } from "lucide-react";

export default function Milestones() {
  const milestones = [
    {
      title: "Project Proposal",
      date: "February 2025",
      marks: "6",
      percentage: "6%",
      status: "available",
      description:
        "A Project Proposal is presented to potential sponsors or clients to receive funding or get your project approved.",
    },
    {
      title: "Progress Presentation I",
      date: "May 2025",
      marks: "6",
      percentage: "6%",
      status: "available",
      description:
        "Reviews the 50% completion status of the project, revealing any gaps or inconsistencies in the design.",
    },
    {
      title: "Research Paper",
      date: "June 2025",
      marks: "10",
      percentage: "10%",
      status: "available",
      description:
        "Describes the contribution to existing knowledge, recognizing all referenced work.",
    },
    {
      title: "Progress Presentation II",
      date: "September 2025",
      marks: "18",
      percentage: "18%",
      status: "available",
      description:
        "Reviews the 90% completion status of the project, accompanied by a poster presentation.",
    },
    {
      title: "Final Report",
      date: "August 2025",
      marks: "19",
      percentage: "19%",
      status: "available",
      description:
        "The final report evaluates the completed project done throughout the year. Marks mentioned include individual & group reports and the final report.",
    },
    {
      title: "Website Assessment",
      date: "October 2025",
      marks: "2",
      percentage: "2%",
      status: "available",
      description:
        "The website helps to promote our research project and reveals all details related to the project.",
    },
    {
      title: "Final Presentation & Viva",
      date: "October 2025",
      marks: "20",
      percentage: "20%",
      status: "available",
      description:
        "The final report and deliverables are submitted, with a final presentation marking the project's end.",
    },
    {
      title: "Logbook",
      date: "November 2025",
      marks: "3",
      percentage: "3%",
      status: "available",
      description:
        "Status of the project is validated through the logbook. This also includes status documents 1 & 2.",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      case "in-progress":
        return <Clock className="h-5 w-5 text-accent" />;
      case "available":
        return <Circle className="h-5 w-5 text-blue-500" />;
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
      case "available":
        return <Badge className="bg-blue-500">Available</Badge>;
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
            Key events that demonstrate the progress and completion of the
            project.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-border hidden md:block" />

          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <Card
                key={index}
                className="relative hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="relative z-10 bg-card">
                      {getStatusIcon(milestone.status)}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <CardTitle className="text-xl">
                          {milestone.title}
                        </CardTitle>
                        {getStatusBadge(milestone.status)}
                      </div>
                      <CardDescription className="flex flex-wrap gap-4 text-base">
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {milestone.date}
                        </span>
                        <div className="font-semibold text-primary">
                          Marks Allocated: {milestone.marks}
                          <br />
                          {milestone.percentage}
                        </div>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {milestone.description}
                  </p>
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
                <p className="text-3xl font-bold text-green-500">0</p>
                <p className="text-sm text-muted-foreground">Completed</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">0</p>
                <p className="text-sm text-muted-foreground">In Progress</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-500">8</p>
                <p className="text-sm text-muted-foreground">Available</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
