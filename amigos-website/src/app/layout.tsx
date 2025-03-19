import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "AMIGOS - Amrita Intelligent Gaming and Opti-verse Sports Club",
  description: "Experience the future of gaming and technology at AMIGOS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans bg-cyber-black text-white antialiased overflow-x-hidden min-h-screen">
        <Providers>
          {/* Background Effects Layer */}
          <div className="fixed inset-0 pointer-events-none">
            {/* Dark Base Layer */}
            <div className="absolute inset-0 bg-gradient-to-b from-cyber-black via-cyber-darker to-cyber-black opacity-100"></div>
            
            {/* Grid Lines - Reduced opacity */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-cyber-grid opacity-[0.07]"></div>
              <div className="absolute inset-0 bg-cyber-lines opacity-[0.07]"></div>
            </div>

            {/* Subtle Glow Effects */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-radial from-neon-blue/[0.03] via-transparent to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-neon-purple/[0.02] to-transparent"></div>
            </div>
          </div>

          {/* Matrix Data Streams */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute text-neon-green font-mono text-xs whitespace-nowrap animate-matrix-rain opacity-30"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 8}s`,
                  animationDuration: `${10 + Math.random() * 10}s`,
                }}
              >
                {[...Array(20)].map(() => String.fromCharCode(33 + Math.floor(Math.random() * 94))).join('')}
              </div>
            ))}
          </div>

          {/* Energy Field Elements */}
          <div className="fixed inset-0 pointer-events-none">
            {/* Power Nodes */}
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-hover-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                }}
              >
                <div className="w-16 h-16 rotate-45 border-2 border-neon-blue animate-power-pulse">
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 to-transparent"></div>
                </div>
              </div>
            ))}
            
            {/* Energy Orbs */}
            {[...Array(4)].map((_, i) => (
              <div
                key={`orb-${i}`}
                className="absolute w-24 h-24 rounded-full animate-hover-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  background: `radial-gradient(circle at center, 
                    ${i % 2 === 0 ? 'rgba(0,240,255,0.2)' : 'rgba(255,0,108,0.2)'} 0%, 
                    transparent 70%)`,
                }}
              ></div>
            ))}
          </div>

          {/* Content */}
          <div className="relative z-10">
            <Navbar />
            <main className="relative min-h-[calc(100vh-4rem)]">
              {children}
            </main>
          </div>

          {/* Subtle Vignette Effect */}
          <div className="fixed inset-0 pointer-events-none z-50">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]"></div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
