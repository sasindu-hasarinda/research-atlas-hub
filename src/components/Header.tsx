import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, X } from "lucide-react";
import { useState } from "react";

const navigation = [
  { name: "Home", path: "/" },
  { name: "Domain", path: "/domain" },
  { name: "Milestones", path: "/milestones" },
  { name: "Documents", path: "/documents" },
  { name: "Presentations", path: "/presentations" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <nav className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-semibold text-xl">
          <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-accent">
            <GraduationCap className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="hidden sm:inline-block">Intelibridge</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navigation.map((item) => (
            <Button
              key={item.path}
              asChild
              variant={location.pathname === item.path ? "default" : "ghost"}
              size="sm"
            >
              <Link to={item.path}>{item.name}</Link>
            </Button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-card">
          <div className="container py-4 space-y-2">
            {navigation.map((item) => (
              <Button
                key={item.path}
                asChild
                variant={location.pathname === item.path ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Link to={item.path}>{item.name}</Link>
              </Button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
