"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import CyberHeading from "@/components/ui/CyberHeading";
import CyberButton from "@/components/ui/CyberButton";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Get success message from URL if redirected from signup
  const message = searchParams.get("message");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Invalid email or password");
      } else {
        router.push("/dashboard");
        router.refresh();
      }
    } catch (error) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-cyber-grid opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-darker via-transparent to-cyber-darker"></div>
      </div>

      <div className="relative w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <CyberHeading level={1} glitch>ACCESS_TERMINAL</CyberHeading>
          <p className="mt-2 text-cyber-gray-400">Enter your credentials to continue</p>
        </div>

        {/* Success Message */}
        {message && (
          <div className="mb-4 p-4 bg-neon-green/10 border border-neon-green/30 rounded-lg">
            <p className="text-neon-green text-sm font-gaming">{message}</p>
          </div>
        )}

        {/* Form Container */}
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-blue to-neon-pink opacity-20 blur group-hover:opacity-30 transition-opacity"></div>
          <div className="relative p-6 bg-cyber-darker/80 border border-neon-blue/20 rounded-lg backdrop-blur-sm">
            <form onSubmit={onSubmit} className="space-y-6">
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-gaming text-cyber-gray-400 mb-2">
                  EMAIL_ADDRESS
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full bg-cyber-dark border border-neon-blue/30 rounded-lg px-4 py-2 text-neon-blue focus:border-neon-blue focus:ring-1 focus:ring-neon-blue outline-none font-gaming"
                  placeholder="Enter your email"
                />
              </div>

              {/* Password Input */}
              <div>
                <label htmlFor="password" className="block text-sm font-gaming text-cyber-gray-400 mb-2">
                  PASSWORD
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="w-full bg-cyber-dark border border-neon-blue/30 rounded-lg px-4 py-2 text-neon-blue focus:border-neon-blue focus:ring-1 focus:ring-neon-blue outline-none font-gaming"
                  placeholder="Enter your password"
                />
              </div>

              {/* Error Message */}
              {error && (
                <div className="text-neon-red text-sm font-gaming animate-pulse">
                  {error}
                </div>
              )}

              {/* Submit Button */}
              <div>
                <CyberButton
                  type="submit"
                  variant="primary"
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? "ACCESSING..." : "ACCESS_SYSTEM"}
                </CyberButton>
              </div>

              {/* Signup Link */}
              <div className="text-center text-sm">
                <span className="text-cyber-gray-400">Don't have an account? </span>
                <Link 
                  href="/signup"
                  className="text-neon-blue hover:text-neon-pink transition-colors duration-300 font-gaming"
                >
                  REGISTER_HERE
                </Link>
              </div>
            </form>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -inset-px pointer-events-none">
          <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-neon-blue/50"></div>
          <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-neon-blue/50"></div>
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-neon-blue/50"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-neon-blue/50"></div>
        </div>
      </div>
    </div>
  );
} 
 