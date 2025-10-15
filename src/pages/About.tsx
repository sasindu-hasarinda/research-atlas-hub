import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, Github, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  const teamMembers = [
    {
      name: "Team Member 1",
      role: "Project Leader",
      email: "member1@university.edu",
      achievements: ["Research Lead", "Full Stack Developer"],
    },
    {
      name: "Team Member 2",
      role: "Technical Lead",
      email: "member2@university.edu",
      achievements: ["Backend Specialist", "Data Analyst"],
    },
    {
      name: "Team Member 3",
      role: "Research Analyst",
      email: "member3@university.edu",
      achievements: ["UI/UX Designer", "Documentation Lead"],
    },
    {
      name: "Team Member 4",
      role: "Developer",
      email: "member4@university.edu",
      achievements: ["Frontend Developer", "Testing Coordinator"],
    },
  ];

  return (
    <div className="container py-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Our Team
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the dedicated team behind this research project
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {teamMembers.map((member, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground text-2xl font-bold shrink-0">
                    {member.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-1">{member.name}</CardTitle>
                    <CardDescription className="text-base">{member.role}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {member.achievements.map((achievement, idx) => (
                      <Badge key={idx} variant="secondary" className="gap-1">
                        <Award className="h-3 w-3" />
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Mail className="h-4 w-4" />
                      Email
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Github className="h-4 w-4" />
                      GitHub
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Achievements */}
        <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
          <CardHeader>
            <CardTitle className="text-2xl">Team Achievements</CardTitle>
            <CardDescription>Our collective accomplishments and contributions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">4+</div>
                <p className="text-sm text-muted-foreground">Team Members</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <p className="text-sm text-muted-foreground">Hours Invested</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">20+</div>
                <p className="text-sm text-muted-foreground">Documents Created</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <p className="text-sm text-muted-foreground">Presentations</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Supervisor Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-2xl">Project Supervision</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground text-2xl font-bold shrink-0">
                S
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Supervisor Name</h3>
                <p className="text-muted-foreground mb-2">Senior Lecturer, Faculty of Computing</p>
                <p className="text-sm text-muted-foreground">
                  Expert in research methodology and project supervision with extensive experience
                  in guiding successful research projects.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
