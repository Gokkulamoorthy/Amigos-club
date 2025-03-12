"use client";

import { useSession } from "next-auth/react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-cyber-dark relative overflow-hidden text-white">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 bg-cyber-grid bg-[size:50px_50px] opacity-10"></div>

      {/* Animated scanlines */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-blue/10 to-transparent animate-scanline pointer-events-none"></div>

      {/* Glitch overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-pink/5 via-cyber-purple/5 to-cyber-blue/5 mix-blend-overlay"></div>

      {/* Floating cyber elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-cyber-blue rotate-45 animate-float opacity-20"></div>
      <div className="absolute top-40 right-20 w-24 h-24 border border-cyber-pink -rotate-12 animate-float opacity-20" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 left-1/4 w-40 h-40 border border-cyber-neon rotate-90 animate-float opacity-20" style={{ animationDelay: '4s' }}></div>

      {/* Main content */}
      <main className="relative z-10 pt-16">{children}</main>

      {/* Cyberpunk Footer */}
      <footer className="relative z-10 border-t border-cyber-blue/30 bg-gradient-to-t from-black to-transparent backdrop-blur-sm mt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              <a
                href="#"
                className="group relative"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="absolute -inset-2 bg-gradient-to-r from-cyber-blue to-cyber-pink opacity-0 group-hover:opacity-100 blur transition-all duration-500"></span>
                <svg
                  className="h-6 w-6 text-cyber-blue relative hover:text-cyber-pink transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.91-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="group relative"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="absolute -inset-2 bg-gradient-to-r from-cyber-blue to-cyber-pink opacity-0 group-hover:opacity-100 blur transition-all duration-500"></span>
                <svg
                  className="h-6 w-6 text-cyber-blue relative hover:text-cyber-pink transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                </svg>
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center">
              <p className="text-cyber-blue animate-cyber-glow text-sm">
                &copy; {new Date().getFullYear()} <span className="text-cyber-pink">AMIGOS</span> · ENTER THE MATRIX
              </p>
            </div>

            {/* Additional Links */}
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-cyber-blue hover:text-cyber-pink transition-colors duration-300 text-sm">Privacy</a>
              <a href="#" className="text-cyber-blue hover:text-cyber-pink transition-colors duration-300 text-sm">Terms</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Enhanced scanlines effect */}
      <div className="pointer-events-none fixed inset-0 z-50">
        <div className="absolute inset-0 bg-[url('/scanline.svg')] bg-repeat opacity-[0.02]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-blue/5 to-transparent animate-scanline"></div>
      </div>
    </div>
  );
} 