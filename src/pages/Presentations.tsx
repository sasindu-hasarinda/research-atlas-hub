import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Presentation, Download, Eye } from "lucide-react";

export default function Presentations() {
  const presentations = [
    {
      title: "Project Proposal Presentation",
      date: "February 15, 2025",
      slides: 25,
      duration: "20 min",
      status: "completed",
      description:
        "Initial project proposal covering problem statement, objectives, and approach",
      viewUrl:
        "https://docs.google.com/presentation/d/1kGewZXxLDNnoZnSpPAH1j9p5KpbbXF0U/edit?usp=sharing&ouid=108320701124573512396&rtpof=true&sd=true",
      downloadUrl:
        "https://drive.google.com/uc?export=download&id=1kGewZXxLDNnoZnSpPAH1j9p5KpbbXF0U",
    },
    {
      title: "Progress Presentation 1",
      date: "March 20, 2025",
      slides: 30,
      duration: "25 min",
      status: "completed",
      description:
        "First progress review with literature survey findings and design specifications",
      viewUrl:
        "https://docs.google.com/presentation/d/13cV818FqNuz0sdvb3zbQzHENsXDgnqlh/edit?usp=sharing&ouid=108320701124573512396&rtpof=true&sd=true",
      downloadUrl:
        "https://drive.google.com/uc?export=download&id=13cV818FqNuz0sdvb3zbQzHENsXDgnqlh",
    },
    {
      title: "Progress Presentation 2",
      date: "April 18, 2025",
      slides: 35,
      duration: "30 min",
      status: "completed",
      description:
        "Second progress presentation demonstrating implementation and initial results",
      viewUrl:
        "https://docs.google.com/presentation/d/1c0ZeGDAUck0O4bWc5uitPv8u9IvZ4l3F/edit?usp=sharing&ouid=108320701124573512396&rtpof=true&sd=true",
      downloadUrl:
        "https://drive.google.com/uc?export=download&id=1c0ZeGDAUck0O4bWc5uitPv8u9IvZ4l3F",
    },
    {
      title: "Final Presentation",
      date: "May 22, 2025",
      slides: 40,
      duration: "45 min",
      status: "completed",
      description:
        "Comprehensive final presentation with complete results and conclusions",
      viewUrl:
        "https://docs.google.com/presentation/d/1F-rseCHWdAX6EPUQ9csbgWy6hYsjm9_o/edit?usp=sharing&ouid=108320701124573512396&rtpof=true&sd=true",
      downloadUrl:
        "https://drive.google.com/uc?export=download&id=1F-rseCHWdAX6EPUQ9csbgWy6hYsjm9_o",
    },
  ];

  return (
    <div className="container py-12">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Presentations
          </h1>
          <p className="text-lg text-muted-foreground">
            Access slides from all project presentations
          </p>
        </div>

        <div className="grid gap-6">
          {presentations.map((presentation, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 shrink-0">
                      <Presentation className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <CardTitle className="text-xl">
                          {presentation.title}
                        </CardTitle>
                        <Badge
                          variant={
                            presentation.status === "completed"
                              ? "default"
                              : "outline"
                          }
                          className={
                            presentation.status === "completed"
                              ? "bg-green-500"
                              : ""
                          }
                        >
                          {presentation.status === "completed"
                            ? "Available"
                            : "Upcoming"}
                        </Badge>
                      </div>
                      <CardDescription className="text-base mb-2">
                        {presentation.description}
                      </CardDescription>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span>📅 {presentation.date}</span>
                        {presentation.slides > 0 && (
                          <span>📊 {presentation.slides} slides</span>
                        )}
                        <span>⏱️ {presentation.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              {presentation.status === "completed" && (
                <CardContent>
                  <div className="flex gap-2">
                    {presentation.viewUrl ? (
                      <Button
                        variant="default"
                        className="gap-2"
                        onClick={() =>
                          window.open(presentation.viewUrl, "_blank")
                        }
                      >
                        <Eye className="h-4 w-4" />
                        View Slides
                      </Button>
                    ) : (
                      <Button variant="default" className="gap-2" disabled>
                        <Eye className="h-4 w-4" />
                        View Slides
                      </Button>
                    )}
                    {presentation.downloadUrl ? (
                      <Button variant="outline" className="gap-2" asChild>
                        <a href={presentation.downloadUrl} download>
                          <Download className="h-4 w-4" />
                          Download
                        </a>
                      </Button>
                    ) : (
                      <Button variant="outline" className="gap-2" disabled>
                        <Download className="h-4 w-4" />
                        Download
                      </Button>
                    )}
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* Presentation Tips */}
        <Card className="mt-8 bg-gradient-to-br from-primary/5 to-accent/5">
          <CardHeader>
            <CardTitle>Presentation Guidelines</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>
                  Prepare your slides well in advance and practice your
                  presentation
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>
                  Focus on clear communication of key concepts and results
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>
                  Include visual aids, diagrams, and demonstrations where
                  appropriate
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>
                  Be prepared to answer questions about methodology and results
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>
                  Upload final presentation slides within 24 hours of presenting
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
