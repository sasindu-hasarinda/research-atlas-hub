import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, ExternalLink, Eye } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export default function Documents() {
  const [documents, setDocuments] = useState({
    charter: [
      {
        name: "Project Charter",
        date: "Jan 2025",
        size: "2.4 MB",
        viewUrl:
          "https://docs.google.com/document/d/1kGP9GBqKVgCqw92VCKiblF5myQQ6HhW3/edit?usp=sharing",
        downloadUrl:
          "https://docs.google.com/document/d/1kGP9GBqKVgCqw92VCKiblF5myQQ6HhW3/export?format=pdf",
      },
    ],
    proposal: [
      {
        name: "Individual Component 1 Proposal",
        date: "Feb 2025",
        size: "1.2 MB",
        viewUrl:
          "https://drive.google.com/file/d/17aNP5SYzJ0aCm27mR33wzAUcS4ARTIuQ/view?usp=sharing",
        downloadUrl:
          "https://drive.google.com/uc?export=download&id=17aNP5SYzJ0aCm27mR33wzAUcS4ARTIuQ",
      },
      {
        name: "Individual Component 2 Proposal",
        date: "Feb 2025",
        size: "1.5 MB",
        viewUrl:
          "https://drive.google.com/file/d/19PE7A2iS71LEXCBdpBGgcFs-hOZiRBql/view?usp=sharing",
        downloadUrl:
          "https://drive.google.com/uc?export=download&id=19PE7A2iS71LEXCBdpBGgcFs-hOZiRBql",
      },
      {
        name: "Individual Component 3 Proposal",
        date: "Feb 2025",
        size: "1.8 MB",
        viewUrl:
          "https://drive.google.com/file/d/1ztZ7Qwtd-1Nvqb8eJ7uId-Te1cPuiZFe/view?usp=sharing",
        downloadUrl:
          "https://drive.google.com/uc?export=download&id=1ztZ7Qwtd-1Nvqb8eJ7uId-Te1cPuiZFe",
      },
      {
        name: "Individual Component 4 Proposal",
        date: "Feb 2025",
        size: "2.1 MB",
        viewUrl:
          "https://drive.google.com/file/d/19U-Rev4F_OVEa61W6HKhnMdLFapVhuOT/view?usp=sharing",
        downloadUrl:
          "https://drive.google.com/uc?export=download&id=19U-Rev4F_OVEa61W6HKhnMdLFapVhuOT",
      },
    ],
    checklists: [
      {
        name: "Status Documents I",
        date: "Feb 2025",
        size: "156 KB",
        viewUrl:
          "https://drive.google.com/file/d/1LUmg0-U79L9DNb_DNBsmexA1YRg-GAiC/view?usp=sharing",
        downloadUrl:
          "https://drive.google.com/uc?export=download&id=1LUmg0-U79L9DNb_DNBsmexA1YRg-GAiC",
      },
      {
        name: "Status Documents II",
        date: "Mar 2025",
        size: "189 KB",
        viewUrl:
          "https://drive.google.com/file/d/1LUmg0-U79L9DNb_DNBsmexA1YRg-GAiC/view?usp=sharing",
        downloadUrl:
          "https://drive.google.com/uc?export=download&id=1LUmg0-U79L9DNb_DNBsmexA1YRg-GAiC",
      },
    ],
    final: [
      {
        name: "Final Report - Main Document",
        date: "Pending",
        size: "TBD",
        viewUrl:
          "https://drive.google.com/file/d/1QV8HgtPZqNQhwwSgl_ywJjsMwa7aHy4i/view?usp=sharing",
        downloadUrl:
          "https://drive.google.com/uc?export=download&id=1QV8HgtPZqNQhwwSgl_ywJjsMwa7aHy4i",
      },
      {
        name: "Individual Component 1",
        date: "Pending",
        size: "TBD",
        viewUrl:
          "https://drive.google.com/file/d/1fu4dYZLGDKejs24HBP0h6yogGCdcR7ni/view?usp=sharing",
        downloadUrl:
          "https://drive.google.com/uc?export=download&id=1fu4dYZLGDKejs24HBP0h6yogGCdcR7ni",
      },
      {
        name: "Individual Component 2",
        date: "Pending",
        size: "TBD",
        viewUrl:
          "https://drive.google.com/file/d/1q6HOnLMn6I7w9MxDjnIgFSkKjvZ4_4Y3/view?usp=sharing",
        downloadUrl:
          "https://drive.google.com/uc?export=download&id=1q6HOnLMn6I7w9MxDjnIgFSkKjvZ4_4Y3",
      },
      {
        name: "Individual Component 3",
        date: "Pending",
        size: "TBD",
        viewUrl:
          "https://drive.google.com/file/d/1ypFuzUqbcdQ11uHdnG1KRZX5KgxP5OFx/view?usp=sharing",
        downloadUrl:
          "https://drive.google.com/uc?export=download&id=1ypFuzUqbcdQ11uHdnG1KRZX5KgxP5OFx",
      },
      {
        name: "Individual Component 4",
        date: "Pending",
        size: "TBD",
        viewUrl:
          "https://drive.google.com/file/d/1uEF-f25Ty5B52fP0EoPERhOjHy7zNZG9/view?usp=sharing",
        downloadUrl:
          "https://drive.google.com/uc?export=download&id=1uEF-f25Ty5B52fP0EoPERhOjHy7zNZG9",
      },
    ],
    topicAssessment: [
      {
        name: "Topic Assessment Document",
        date: "Mar 2025",
        size: "1.8 MB",
        viewUrl:
          "https://drive.google.com/file/d/1d6iYPxLdK6XXbu8--Si91IH7iNIX2Smh/view?usp=sharing",
        downloadUrl:
          "https://drive.google.com/uc?export=download&id=1d6iYPxLdK6XXbu8--Si91IH7iNIX2Smh",
      },
    ] as {
      name: string;
      date: string;
      size: string;
      viewUrl?: string;
      downloadUrl?: string;
    }[],
    researchPaper: [
      {
        name: "Research Paper Document",
        date: "Apr 2025",
        size: "2.1 MB",
        viewUrl:
          "https://drive.google.com/file/d/1T1RAz76J1B5BN4mj6iOpSEQonZtewxzl/view?usp=sharing",
        downloadUrl:
          "https://drive.google.com/uc?export=download&id=1T1RAz76J1B5BN4mj6iOpSEQonZtewxzl",
      },
    ] as {
      name: string;
      date: string;
      size: string;
      viewUrl?: string;
      downloadUrl?: string;
    }[],
  });

  const DocumentCard = ({
    doc,
  }: {
    doc: {
      name: string;
      date: string;
      size: string;
      viewUrl?: string;
      downloadUrl?: string;
    };
  }) => (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-lg bg-primary/10">
            <FileText className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold mb-1 truncate">{doc.name}</h3>
            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
              <span>{doc.date}</span>
              <span>•</span>
              <span>{doc.size}</span>
            </div>
          </div>
          <div className="flex gap-2 shrink-0">
            {doc.viewUrl && (
              <Button
                variant="default"
                className="gap-2"
                onClick={() => window.open(doc.viewUrl, "_blank")}
              >
                <Eye className="h-4 w-4" />
                View Document
              </Button>
            )}
            {doc.downloadUrl && (
              <Button variant="outline" className="gap-2" asChild>
                <a href={doc.downloadUrl} download>
                  <Download className="h-4 w-4" />
                  Download
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="container py-12">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Project Documents
          </h1>
          <p className="text-lg text-muted-foreground">
            Access all project documentation and deliverables
          </p>
        </div>

        <Tabs defaultValue="charter" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6">
            <TabsTrigger value="charter">Charter</TabsTrigger>
            <TabsTrigger value="proposal">Proposal</TabsTrigger>
            <TabsTrigger value="checklists">Checklists</TabsTrigger>
            <TabsTrigger value="topicAssessment">Topic Assessment</TabsTrigger>
            <TabsTrigger value="researchPaper">Research Paper</TabsTrigger>
            <TabsTrigger value="final">Final Docs</TabsTrigger>
          </TabsList>

          <TabsContent value="charter" className="space-y-4">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Project Charter</h2>
              <p className="text-muted-foreground mb-6">
                Initial project definition and authorization document
              </p>
              {documents.charter.map((doc, index) => (
                <DocumentCard key={index} doc={doc} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="proposal" className="space-y-4">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Proposal Document</h2>
              <p className="text-muted-foreground mb-6">
                Comprehensive research proposal with objectives and methodology
              </p>
              {documents.proposal.map((doc, index) => (
                <DocumentCard key={index} doc={doc} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="checklists" className="space-y-4">
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Checklist Documents
              </h2>
              <p className="text-muted-foreground mb-6">
                Verification checklists for different project phases
              </p>
              <div className="space-y-4">
                {documents.checklists.map((doc, index) => (
                  <DocumentCard key={index} doc={doc} />
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="topicAssessment" className="space-y-4">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Topic Assessment</h2>
              <p className="text-muted-foreground mb-6">
                Topic assessment documents and evaluations
              </p>
              <div className="space-y-4">
                {documents.topicAssessment.length > 0 ? (
                  documents.topicAssessment.map((doc, index) => (
                    <DocumentCard key={index} doc={doc} />
                  ))
                ) : (
                  <p className="text-muted-foreground">
                    No topic assessment documents available yet.
                  </p>
                )}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="researchPaper" className="space-y-4">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Research Paper</h2>
              <p className="text-muted-foreground mb-6">
                Research papers and publications
              </p>
              <div className="space-y-4">
                {documents.researchPaper.length > 0 ? (
                  documents.researchPaper.map((doc, index) => (
                    <DocumentCard key={index} doc={doc} />
                  ))
                ) : (
                  <p className="text-muted-foreground">
                    No research papers available yet.
                  </p>
                )}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="final" className="space-y-4">
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Final Documentation
              </h2>
              <p className="text-muted-foreground mb-6">
                Complete final project documentation including individual
                components
              </p>
              <div className="space-y-4">
                {documents.final.map((doc, index) => (
                  <DocumentCard key={index} doc={doc} />
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <Card className="mt-8 bg-muted/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ExternalLink className="h-5 w-5" />
              Document Guidelines
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Maximum file size: 20 MB per document</li>
              <li>• Accepted formats: PDF, DOCX, PPTX</li>
              <li>• Ensure all documents follow the provided templates</li>
              <li>• Submit documents before respective deadlines</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
