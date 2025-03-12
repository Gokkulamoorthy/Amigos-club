"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import CyberHeading from "@/components/ui/CyberHeading";
import CyberButton from "@/components/ui/CyberButton";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { data: session, status } = useSession();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <main className="relative min-h-screen bg-cyber-black overflow-hidden">
      {/* Matrix Rain Effect */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-cyber-grid bg-[size:50px_50px] opacity-10"></div>
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay"></div>
        <div className="absolute inset-0 animate-matrix-rain bg-gradient-to-b from-transparent via-neon-blue/5 to-transparent"></div>
      </div>

      {/* Decorative Elements */}
      <div className="fixed inset-0 z-0">
        {/* Radial Gradients */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-pink/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating Lines */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-neon-blue/20 to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              transform: `rotate(${i * 15}deg)`,
              animation: `float ${3 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Logo and Title */}
        <div className="relative mb-8 animate-hover-float">
          <div className="absolute inset-0 bg-neon-blue/20 blur-xl rounded-full"></div>
          <div className="relative w-32 h-32 border-4 border-neon-blue/50 rounded-full flex items-center justify-center">
            <span className="text-6xl font-bold text-neon-blue">A</span>
          </div>
        </div>

        <CyberHeading level={1} className="text-center mb-4" glitch>
          ENTER THE DIGITAL FRONTIER
        </CyberHeading>

        <p className="text-neon-blue/80 text-xl mb-12 animate-text-glow">
          Gaming & Technology Innovation Hub
        </p>

        {/* Conditional Content Based on Auth Status */}
        {status === "authenticated" && session?.user ? (
          <div className="flex flex-col items-center gap-6">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-blue to-neon-purple opacity-20 blur group-hover:opacity-40 transition-opacity"></div>
              <div className="relative px-8 py-4 bg-cyber-darker/80 border border-neon-blue/20 rounded-lg backdrop-blur-sm">
                <p className="text-neon-blue font-gaming text-xl">WELCOME_OPERATOR</p>
                <p className="text-white font-cyber-display text-2xl mt-2">{session.user.name}</p>
              </div>
            </div>
            <Link href="/dashboard">
              <CyberButton size="lg" glitch>
                ACCESS_DASHBOARD
              </CyberButton>
            </Link>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/login">
              <CyberButton size="lg" glitch>
                JACK_IN
              </CyberButton>
            </Link>
            <Link href="/signup">
              <CyberButton size="lg" variant="secondary" glitch>
                REGISTER
              </CyberButton>
            </Link>
          </div>
        )}

        {/* Decorative Elements */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-neon-blue rounded-full animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            ></div>
          ))}
        </div>

        {/* Corner Decorations */}
        <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-neon-blue/30"></div>
        <div className="absolute top-8 right-8 w-16 h-16 border-t border-r border-neon-blue/30"></div>
        <div className="absolute bottom-8 left-8 w-16 h-16 border-b border-l border-neon-blue/30"></div>
        <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-neon-blue/30"></div>

        {/* Floating Tech Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute text-neon-blue/20 font-mono text-sm"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${2 + Math.random() * 3}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            >
              {['01', '10', '11', '00', '01', '10', '11', '00'][i % 8]}
            </div>
          ))}
        </div>
      </div>

      {/* Scanline Effect */}
      <div className="fixed inset-0 pointer-events-none z-20">
        <div className="absolute inset-0 bg-[url('/scanline.svg')] opacity-10"></div>
      </div>
    </main>
  );
} 