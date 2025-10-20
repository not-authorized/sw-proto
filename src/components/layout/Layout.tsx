import { ReactNode } from "react";
import { Header } from "./Header";

interface LayoutProps {
  children: ReactNode;
}

/**
 * Main layout component that wraps the entire application.
 * Renders the persistent header and main content area.
 */
export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="w-full">
        {children}
      </main>
    </div>
  );
}
