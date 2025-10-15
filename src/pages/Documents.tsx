import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, ExternalLink } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Documents() {
  const documents = {
    charter: [
      { name: "Project Charter", date: "Jan 2025", size: "2.4 MB" },
    ],
    proposal: [
      { name: "Research Proposal Document", date: "Feb 2025", size: "3.8 MB" },
    ],
    checklists: [
      { name: "Proposal Checklist", date: "Feb 2025", size: "156 KB" },
      { name: "Progress Review Checklist", date: "Mar 2025", size: "189 KB" },
      { name: "Final Submission Checklist", date: "Pending", size: "TBD" },
    ],
    final: [
      { name: "Final Report - Main Document", date: "Pending", size: "TBD" },
      { name: "Individual Component 1", date: "Pending", size: "TBD" },
      { name: "Individual Component 2", date: "Pending", size: "TBD" },
      { name: "Individual Component 3", date: "Pending", size: "TBD" },
    ],
  };

  const DocumentCard = ({ doc }: { doc: { name: string; date: string; size: string } }) => (
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
          <Button size="icon" variant="ghost" className="shrink-0">
            <Download className="h-4 w-4" />
          </Button>
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
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
            <TabsTrigger value="charter">Charter</TabsTrigger>
            <TabsTrigger value="proposal">Proposal</TabsTrigger>
            <TabsTrigger value="checklists">Checklists</TabsTrigger>
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
              <h2 className="text-2xl font-semibold mb-4">Checklist Documents</h2>
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

          <TabsContent value="final" className="space-y-4">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Final Documentation</h2>
              <p className="text-muted-foreground mb-6">
                Complete final project documentation including individual components
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
