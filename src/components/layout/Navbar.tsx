"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, status } = useSession();
  const [isExpanded, setIsExpanded] = useState(false);

  const isActive = (path: string) => pathname === path;
  const userName = session?.user?.name || 'GUEST_USER';
  const shortName = userName.split(' ')[0].toUpperCase();
  const isLoggedIn = status === 'authenticated';
  const operatorId = session?.user?.name || "GUEST_USER";

  const handleDisconnect = async () => {
    await signOut({ redirect: false });
    router.push('/');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cyber-darker/90 backdrop-blur-lg border-b border-neon-blue/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Club Name */}
          <Link 
            href="/"
            className="flex items-center space-x-4 group relative"
          >
            <div className="relative w-12 h-12 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue via-neon-pink to-neon-purple opacity-20 rounded-full animate-pulse"></div>
              <span className="text-2xl font-cyber-display font-bold text-neon-blue">A</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-gaming font-bold tracking-widest bg-gradient-to-r from-neon-blue via-neon-pink to-neon-purple bg-clip-text text-transparent animate-neon-flicker">
                AMIGOS
              </span>
              <span className="text-xs text-cyber-gray-400 tracking-wider">
                GAMING & TECH HUB
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: "HOME", href: "/" },
              { name: "ABOUT", href: "/about" },
              { name: "BOARD", href: "/board-members" },
              { name: "EVENTS", href: "/club-events" },
              { name: "PROJECTS", href: "/club-projects" },
            ].map(({ name, href }) => (
              <Link
                key={name}
                href={href}
                className={`
                  group relative font-gaming text-sm tracking-wider
                  ${pathname === href 
                    ? "text-neon-blue animate-power-pulse" 
                    : "text-cyber-gray-300 hover:text-neon-yellow"}
                  transition-all duration-300
                `}
              >
                <span className="relative z-10">
                  {name}
                  <span className={`
                    absolute -bottom-1 left-0 w-full h-0.5 
                    ${pathname === href 
                      ? "bg-gradient-to-r from-neon-blue to-neon-pink animate-power-pulse" 
                      : "bg-gradient-to-r from-neon-blue to-neon-pink scale-x-0 group-hover:scale-x-100"}
                    transform origin-left transition-transform duration-300
                  `}></span>
                </span>
                {pathname === href && (
                  <span className="absolute -inset-2 bg-neon-blue/10 rounded-lg animate-power-pulse"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Auth Section */}
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="relative group">
                {/* Operator Badge */}
                <Link
                  href="/dashboard"
                  className="flex items-center space-x-3 px-4 py-2 rounded-lg bg-cyber-dark/80 border-2 border-neon-blue/30 hover:border-neon-blue/60 transition-all duration-300 group-hover:animate-power-pulse"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-neon-blue/10 border border-neon-blue/40 animate-power-pulse">
                    <span className="text-neon-blue font-gaming text-sm">
                      {operatorId.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-neon-green animate-power-pulse"></span>
                    <span className="text-neon-blue font-gaming text-sm tracking-wider">OPERATOR_ID</span>
                  </div>
                </Link>

                {/* Dropdown Menu */}
                <div className="absolute right-0 mt-2 w-56 py-2 bg-cyber-dark/95 backdrop-blur-xl border-2 border-neon-blue/20 rounded-lg shadow-lg shadow-neon-blue/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="px-4 py-2 border-b border-neon-blue/20">
                    <p className="text-neon-blue text-sm font-gaming tracking-wider truncate">{operatorId}</p>
                  </div>
                  
                  {[
                    { name: "MY_PROFILE", href: "/dashboard/profile" },
                    { name: "MY_EVENTS", href: "/dashboard/events" },
                    { name: "MY_PROJECTS", href: "/dashboard/projects" },
                  ].map(({ name, href }) => (
                    <Link
                      key={name}
                      href={href}
                      className="group relative block px-4 py-2"
                    >
                      <span className="absolute inset-0 bg-neon-blue/0 group-hover:bg-neon-blue/10 transition-colors duration-300"></span>
                      <span className="relative text-sm text-cyber-gray-300 group-hover:text-neon-blue font-gaming tracking-wider transition-colors duration-300">
                        {name}
                      </span>
                    </Link>
                  ))}
                  
                  <div className="border-t border-neon-blue/20 mt-2 pt-2">
                    <button 
                      onClick={handleDisconnect}
                      className="relative w-full text-left px-4 py-2 group"
                    >
                      <span className="absolute inset-0 bg-neon-red/0 group-hover:bg-neon-red/10 transition-colors duration-300"></span>
                      <span className="relative text-sm text-neon-red font-gaming tracking-wider group-hover:animate-neon-flicker">
                        DISCONNECT_
                      </span>
                    </button>
                  </div>

                  {/* Decorative corners */}
                  <div className="absolute -inset-px pointer-events-none">
                    <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-neon-blue/50"></div>
                    <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-neon-blue/50"></div>
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-neon-blue/50"></div>
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-neon-blue/50"></div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  href="/login"
                  className="relative px-6 py-2 group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-pink rounded-lg opacity-20 group-hover:opacity-40 transition-opacity"></span>
                  <span className="relative block px-4 py-2 bg-cyber-dark rounded-lg font-gaming text-neon-blue group-hover:text-neon-pink transition-colors duration-300">
                    LOGIN
                  </span>
                </Link>
                <Link
                  href="/signup"
                  className="relative px-6 py-2 group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-neon-green to-neon-blue rounded-lg animate-power-pulse"></span>
                  <span className="relative block px-4 py-2 bg-cyber-dark rounded-lg font-gaming text-neon-green group-hover:text-neon-blue transition-colors duration-300">
                    SIGNUP
                  </span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
} 