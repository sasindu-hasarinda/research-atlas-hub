import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, Github, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  const teamMembers = [
    {
      name: "M.G.S.H Karunathilka",
      role: "Project Leader",
      email: "it20009236@my.sliit.lk",
      itNumber: "IT20009236",
      image: "/images/sasindu.png",
      achievements: ["Skill Gap Analysis"],
    },
    {
      name: "Ekanayake T.E.M.A.P",
      role: "",
      email: "IT21025358@my.sliit.lk",
      itNumber: "IT21025358",
      image: "/images/Anuka.png",
      achievements: ["Personalized Learning Pathways"],
    },
    {
      name: "Dias N.T.G.P",
      role: "",
      email: "IT21350450@my.sliit.lk",
      itNumber: "IT21350450",
      image: "/images/gayashan.png",
      achievements: ["Career Insights Dashboard"],
    },
    {
      name: "Madushan J. M. T",
      role: "",
      email: "IT21807008@my.sliit.lk",
      itNumber: "IT21807008",
      image: "/images/Tharindu.png",
      achievements: ["AI-Powered Mock Interviews"],
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
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 relative"
            >
              <img
                src={member.image}
                alt={member.name}
                className="absolute top-0 right-0 h-full w-[150px] object-cover rounded-r-lg"
              />
              <CardHeader className="pr-[166px]">
                <div className="flex-1">
                  <CardTitle className="text-xl mb-1">{member.name}</CardTitle>
                  {member.itNumber && (
                    <p className="text-sm text-muted-foreground mb-1 font-bold">
                      {member.itNumber}
                    </p>
                  )}
                  <CardDescription className="text-base">
                    {member.role}
                  </CardDescription>
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
            <CardDescription>
              Our collective accomplishments and contributions
            </CardDescription>
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
                <p className="text-sm text-muted-foreground">
                  Documents Created
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <p className="text-sm text-muted-foreground">Presentations</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Supervisor Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Project Supervisors
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-all duration-300 relative min-h-[200px]">
              <img
                src="/images/sanjeeve.png"
                alt="Ms. Sanjeevi Chandrasiri"
                className="absolute top-0 right-0 h-[150px] w-[150px] object-cover rounded-lg border"
              />
              <CardHeader className="pr-[166px]">
                <div className="flex-1">
                  <CardTitle className="text-2xl font-bold mb-1 text-primary">
                    Ms. Sanjeevi Chandrasiri
                  </CardTitle>
                  <CardDescription className="text-lg text-accent-foreground">
                    Project Supervisor
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="pr-[200px]">
                <p className="text-lg font-semibold text-foreground text-left">
                  Senior Lecturer, Faculty of Computing | Information Technology
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Ms. Sanjeevi Chandrasiri is a Senior Lecturer and Year 1
                  Course Leader at SLIIT with extensive experience in Artificial
                  Intelligence, Medical Image Processing, and Natural Language
                  Processing. Her award-winning work, including the National
                  Best Quality Software Award and e-Swabhimani Award, highlights
                  her significant contributions to innovative AI-based
                  educational and healthcare solutions.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-all duration-300 relative min-h-[200px]">
              <img
                src="/images/Tharushi.png"
                alt="Ms. Tharushi Rubasinghe"
                className="absolute top-0 right-0 h-[150px] w-[150px] object-cover rounded-lg border"
              />
              <CardHeader className="pr-[166px]">
                <div className="flex-1">
                  <CardTitle className="text-2xl font-bold mb-1 text-primary">
                    Ms. Tharushi Rubasinghe
                  </CardTitle>
                  <CardDescription className="text-lg text-accent-foreground">
                    Co-Supervisor
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="pb-6 pr-[166px]">
                <p className="text-lg font-semibold text-foreground">
                  Assistant Lecturer, Faculty of Computing | Information
                  Technology
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Ms. Tharushi Rubasinghe is an Assistant Lecturer at SLIIT with
                  strong expertise in E-learning technologies and AI-driven
                  education systems. Her research focuses on applying machine
                  learning to enhance student engagement and mental well-being
                  in higher education.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
