
import React from 'react';
import { Link } from 'react-router-dom';
import { useCompanion } from '../contexts/CompanionContext';
import { Button } from '@/components/ui/button';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { currentCompanion } = useCompanion();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex items-center justify-between py-4">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold gradient-text">SoulSync AI</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-foreground hover:text-primary transition">Home</Link>
            <Link to="/create" className="text-foreground hover:text-primary transition">Create</Link>
            {currentCompanion && (
              <Link to="/chat" className="text-foreground hover:text-primary transition">Chat</Link>
            )}
            <Link to="/premium" className="text-foreground hover:text-primary transition">Premium</Link>
          </nav>
          
          <div className="flex space-x-2">
            {!currentCompanion ? (
              <Button asChild variant="default">
                <Link to="/create">Create Companion</Link>
              </Button>
            ) : (
              <Button asChild variant="outline">
                <Link to="/chat">Chat with {currentCompanion.name}</Link>
              </Button>
            )}
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="py-6 border-t">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} SoulSync AI. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground">
                About
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
