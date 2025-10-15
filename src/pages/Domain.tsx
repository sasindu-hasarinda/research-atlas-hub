import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BookOpen, Target, Lightbulb, Code2, Search } from "lucide-react";

export default function Domain() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Domain & Research
          </h1>
          <p className="text-lg text-muted-foreground">
            Comprehensive overview of research domain, objectives, and methodology
          </p>
        </div>

        <div className="space-y-8">
          {/* Literature Survey */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle>Literature Survey</CardTitle>
                  <CardDescription>Background research and existing work</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Comprehensive review of existing research, methodologies, and approaches in the field. 
                Analysis of current state-of-the-art solutions and identification of potential improvements.
                This section covers relevant academic papers, industry practices, and technological foundations.
              </p>
            </CardContent>
          </Card>

          {/* Research Gap */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10">
                  <Search className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle>Research Gap</CardTitle>
                  <CardDescription>Identified opportunities and limitations</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Analysis of limitations in existing solutions and identification of areas requiring 
                further investigation. This section highlights the specific gaps our research aims to address
                and the potential impact of filling these gaps in the field.
              </p>
            </CardContent>
          </Card>

          {/* Research Problem */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10">
                  <Lightbulb className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle>Research Problem</CardTitle>
                  <CardDescription>Core problem statement</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Clear definition of the problem being addressed through this research project. 
                Detailed explanation of the challenges, scope, and significance of the research problem
                in both academic and practical contexts.
              </p>
            </CardContent>
          </Card>

          {/* Research Objectives */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle>Research Objectives</CardTitle>
                  <CardDescription>Goals and expected outcomes</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">To investigate and analyze the current state of the problem domain</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">To design and develop an innovative solution addressing identified gaps</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">To evaluate the effectiveness and impact of the proposed solution</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">To contribute new knowledge and practical applications to the field</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Methodology */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10">
                  <Code2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle>Methodology</CardTitle>
                  <CardDescription>Research approach and techniques</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Research Approach</h4>
                  <p className="text-muted-foreground">
                    Systematic methodology combining literature review, design, implementation, and evaluation phases.
                  </p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold mb-2">Data Collection</h4>
                  <p className="text-muted-foreground">
                    Multiple data sources including surveys, experiments, and case studies to ensure comprehensive analysis.
                  </p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold mb-2">Analysis Techniques</h4>
                  <p className="text-muted-foreground">
                    Quantitative and qualitative analysis methods for robust evaluation of results.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technologies */}
          <Card>
            <CardHeader>
              <CardTitle>Technologies Used</CardTitle>
              <CardDescription>Tools, frameworks, and platforms</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "TypeScript",
                  "Python",
                  "Machine Learning",
                  "Cloud Computing",
                  "Database Systems",
                  "API Development",
                  "Data Analytics",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
