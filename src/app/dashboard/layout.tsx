"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { useEffect } from "react";

const sidebarLinks = [
  { name: "OVERVIEW", href: "/dashboard", icon: "📊" },
  { name: "MY_PROFILE", href: "/dashboard/profile", icon: "👤" },
  { name: "MY_EVENTS", href: "/dashboard/events", icon: "🎮" },
  { name: "MY_PROJECTS", href: "/dashboard/projects", icon: "💻" },
  { name: "SETTINGS", href: "/dashboard/settings", icon: "⚙️" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, status } = useSession();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  const handleDisconnect = async () => {
    await signOut({ redirect: false });
    router.push('/');
  };

  // Show loading state while checking authentication
  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cyber-darker">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 relative">
            <div className="absolute inset-0 border-4 border-neon-blue/30 rounded-full animate-spin"></div>
            <div className="absolute inset-2 border-4 border-t-neon-pink border-transparent rounded-full animate-spin" style={{ animationDirection: 'reverse' }}></div>
          </div>
          <p className="text-neon-blue font-gaming animate-pulse">LOADING_</p>
        </div>
      </div>
    );
  }

  // Show nothing if not authenticated
  if (status === 'unauthenticated') {
    return null;
  }

  return (
    <div className="min-h-screen flex pt-16">
      {/* Sidebar */}
      <div className="fixed left-0 top-16 bottom-0 w-64 bg-cyber-darker/80 border-r border-neon-blue/20 backdrop-blur-md">
        <div className="h-full flex flex-col">
          {/* User Info */}
          <div className="p-6 border-b border-neon-blue/20">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-neon-blue/10 border border-neon-blue/30 flex items-center justify-center">
                  <span className="text-neon-blue font-gaming">
                    {session?.user?.name?.split(' ').map(n => n[0]).join('') || 'GU'}
                  </span>
                </div>
                <div>
                  <div className="text-neon-blue font-gaming tracking-wider">OPERATOR_ID</div>
                  <div className="text-sm text-cyber-gray-400">{session?.user?.name || 'GUEST_USER'}</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse"></div>
                <span className="text-xs text-cyber-gray-400">ONLINE</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {sidebarLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    flex items-center space-x-3 px-4 py-3 rounded-lg
                    transition-all duration-300 group relative
                    ${isActive 
                      ? "bg-neon-blue/10 text-neon-blue" 
                      : "text-cyber-gray-400 hover:bg-neon-blue/5 hover:text-neon-blue"
                    }
                  `}
                >
                  <span className="text-xl">{link.icon}</span>
                  <span className="font-gaming tracking-wider">{link.name}</span>
                  {isActive && (
                    <div className="absolute inset-0 border border-neon-blue/30 rounded-lg animate-power-pulse"></div>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Logout Button */}
          <div className="p-4 border-t border-neon-blue/20">
            <button 
              onClick={handleDisconnect}
              className="w-full px-4 py-3 flex items-center space-x-3 text-neon-red hover:bg-neon-red/10 rounded-lg transition-colors duration-300 group"
            >
              <span className="text-xl">🚪</span>
              <span className="font-gaming tracking-wider group-hover:animate-neon-flicker">DISCONNECT_</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64">
        <div className="max-w-6xl mx-auto p-8">
          {children}
        </div>
      </div>
    </div>
  );
} 
 