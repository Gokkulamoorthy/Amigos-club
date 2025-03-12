"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import CyberHeading from "@/components/ui/CyberHeading";
import CyberButton from "@/components/ui/CyberButton";

export default function SignupPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        router.push("/login?message=Account created successfully");
      } else {
        setError(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Registration error:", error);
      setError("Network error or server is not responding");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-cyber-grid opacity-[0.07]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-darker via-transparent to-cyber-darker"></div>
      </div>

      <div className="relative w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-cyber-display font-bold tracking-wider text-white mb-2">
            Join the digital frontier
          </h1>
          <p className="text-neon-blue font-gaming">CREATE_ACCOUNT</p>
        </div>

        {/* Form Container */}
        <div className="relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-blue to-neon-pink opacity-20"></div>
          <div className="relative p-6 bg-cyber-darker border border-neon-blue/20 rounded-lg">
            <form onSubmit={onSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-gaming text-neon-blue mb-2">
                  OPERATOR_NAME
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full bg-cyber-dark border border-neon-blue/30 rounded-lg px-4 py-2 text-white focus:border-neon-blue focus:ring-1 focus:ring-neon-blue outline-none font-gaming"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-gaming text-neon-blue mb-2">
                  EMAIL_ADDRESS
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full bg-cyber-dark border border-neon-blue/30 rounded-lg px-4 py-2 text-white focus:border-neon-blue focus:ring-1 focus:ring-neon-blue outline-none font-gaming"
                  placeholder="Enter your email"
                />
              </div>

              {/* Password Input */}
              <div>
                <label htmlFor="password" className="block text-sm font-gaming text-neon-blue mb-2">
                  PASSWORD
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  minLength={6}
                  className="w-full bg-cyber-dark border border-neon-blue/30 rounded-lg px-4 py-2 text-white focus:border-neon-blue focus:ring-1 focus:ring-neon-blue outline-none font-gaming"
                  placeholder="Enter your password"
                />
              </div>

              {/* Confirm Password Input */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-gaming text-neon-blue mb-2">
                  CONFIRM_PASSWORD
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  minLength={6}
                  className="w-full bg-cyber-dark border border-neon-blue/30 rounded-lg px-4 py-2 text-white focus:border-neon-blue focus:ring-1 focus:ring-neon-blue outline-none font-gaming"
                  placeholder="Confirm your password"
                />
              </div>

              {/* Error Message */}
              {error && (
                <div className="text-neon-red text-sm font-gaming">
                  {error}
                </div>
              )}

              {/* Submit Button */}
              <div>
                <CyberButton
                  type="submit"
                  variant="primary"
                  className="w-full bg-cyber-black border-2 border-neon-blue/50 hover:border-neon-blue transition-colors duration-300"
                  disabled={loading}
                >
                  {loading ? "CREATING_ACCOUNT..." : "CREATE_ACCOUNT"}
                </CyberButton>
              </div>

              {/* Login Link */}
              <div className="text-center text-sm mt-4">
                <span className="text-white">Already have an account? </span>
                <Link 
                  href="/login"
                  className="text-neon-blue hover:text-neon-pink transition-colors duration-300 font-gaming"
                >
                  LOGIN_HERE
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 
 