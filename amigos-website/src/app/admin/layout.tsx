"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

const sidebarLinks = [
  { href: "/admin", label: "DASHBOARD" },
  { href: "/admin/members", label: "MEMBERS" },
  { href: "/admin/events", label: "EVENTS" },
  { href: "/admin/projects", label: "PROJECTS" },
  { href: "/admin/settings", label: "SETTINGS" },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-cyber-black flex items-center justify-center">
        <div className="text-neon-blue animate-pulse">LOADING...</div>
      </div>
    );
  }

  if (!session?.user || session.user.role !== "ADMIN") {
    router.push("/");
    return null;
  }

  return (
    <div className="min-h-screen bg-cyber-black">
      {/* Admin Header */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-cyber-black/80 backdrop-blur-sm border-b border-neon-blue/20 z-50">
        <div className="h-full px-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/admin" className="text-neon-blue font-bold text-xl">
              ADMIN_PANEL
            </Link>
            <span className="text-cyber-gray-400">|</span>
            <span className="text-cyber-gray-300">{session.user.name}</span>
          </div>
          <button
            onClick={() => signOut()}
            className="px-4 py-2 text-neon-red hover:text-neon-red/80 transition-colors"
          >
            DISCONNECT
          </button>
        </div>
      </header>

      {/* Admin Sidebar */}
      <aside className="fixed left-0 top-16 bottom-0 w-64 bg-cyber-black/90 backdrop-blur-sm border-r border-neon-blue/20 p-4">
        <nav className="space-y-2">
          {sidebarLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-4 py-2 rounded-lg transition-colors ${
                pathname === link.href
                  ? "bg-neon-blue/10 text-neon-blue"
                  : "text-cyber-gray-300 hover:bg-neon-blue/5 hover:text-neon-blue"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="pt-16 pl-64 min-h-screen">
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
} 