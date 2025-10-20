import { Link, useLocation } from "react-router-dom";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { IntelligentSearchBar } from "../search/IntelligentSearchBar";

/**
 * Persistent header component displayed at the top of every page.
 * Contains: Logo, Search Bar, Navigation Links, and User Profile.
 */
export function Header() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-8">
          <Link to="/">
            <h1 className="font-medium tracking-tight cursor-pointer hover:text-foreground/80 transition-colors">
              SpecWise
            </h1>
          </Link>
        </div>

        {/* Intelligent Search Bar - centered and prominent */}
        <div className="flex-1 max-w-2xl mx-8">
          <IntelligentSearchBar />
        </div>

        {/* Navigation and User Profile */}
        <div className="flex items-center gap-6">
          <nav className="flex items-center gap-6">
            <Link 
              to="/" 
              className={`transition-colors hover:text-foreground/80 ${
                isActive("/") && !isActive("/projects") ? "text-foreground" : "text-foreground/60"
              }`}
            >
              Explore
            </Link>
            <Link 
              to="/projects" 
              className={`transition-colors hover:text-foreground/80 ${
                isActive("/projects") ? "text-foreground" : "text-foreground/60"
              }`}
            >
              Projects
            </Link>
          </nav>
          
          {/* User Avatar */}
          <Avatar className="h-9 w-9">
            <AvatarFallback className="bg-muted">U</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
