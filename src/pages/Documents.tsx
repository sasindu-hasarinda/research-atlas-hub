import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, ExternalLink, Upload, Eye } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function Documents() {
  const [documents, setDocuments] = useState({
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
    uploaded: [] as { name: string; date: string; size: string; viewUrl: string; downloadUrl: string }[],
  });

  const [uploadName, setUploadName] = useState("");
  const [uploadLink, setUploadLink] = useState("");

  const parseGoogleDriveLink = (link: string) => {
    const match = link.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (match) {
      const fileId = match[1];
      return {
        viewUrl: `https://drive.google.com/file/d/${fileId}/view?usp=sharing`,
        downloadUrl: `https://drive.google.com/uc?export=download&id=${fileId}`,
      };
    }
    return null;
  };

  const handleUpload = () => {
    if (!uploadName.trim() || !uploadLink.trim()) return;
    const urls = parseGoogleDriveLink(uploadLink);
    if (!urls) {
      alert("Invalid Google Drive link. Please provide a valid share link.");
      return;
    }
    const newDoc = {
      name: uploadName,
      date: new Date().toLocaleDateString(),
      size: "Unknown",
      viewUrl: urls.viewUrl,
      downloadUrl: urls.downloadUrl,
    };
    setDocuments(prev => ({
      ...prev,
      uploaded: [...prev.uploaded, newDoc],
    }));
    setUploadName("");
    setUploadLink("");
  };

  const DocumentCard = ({ doc }: { doc: { name: string; date: string; size: string; viewUrl?: string; downloadUrl?: string } }) => (
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
              <Button size="icon" variant="ghost" onClick={() => window.open(doc.viewUrl, '_blank')}>
                <Eye className="h-4 w-4" />
              </Button>
            )}
            {doc.downloadUrl ? (
              <Button size="icon" variant="ghost" asChild>
                <a href={doc.downloadUrl} download>
                  <Download className="h-4 w-4" />
                </a>
              </Button>
            ) : (
              <Button size="icon" variant="ghost">
                <Download className="h-4 w-4" />
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
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
            <TabsTrigger value="charter">Charter</TabsTrigger>
            <TabsTrigger value="proposal">Proposal</TabsTrigger>
            <TabsTrigger value="checklists">Checklists</TabsTrigger>
            <TabsTrigger value="final">Final Docs</TabsTrigger>
            <TabsTrigger value="uploaded">Uploaded</TabsTrigger>
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

          <TabsContent value="uploaded" className="space-y-4">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Uploaded Documents</h2>
              <p className="text-muted-foreground mb-6">
                Documents uploaded via Google Drive links
              </p>
              <div className="space-y-4">
                {documents.uploaded.length > 0 ? (
                  documents.uploaded.map((doc, index) => (
                    <DocumentCard key={index} doc={doc} />
                  ))
                ) : (
                  <p className="text-muted-foreground">No documents uploaded yet.</p>
                )}
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
