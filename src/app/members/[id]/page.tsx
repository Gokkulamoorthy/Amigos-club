"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";

interface Member {
  id: string;
  name: string | null;
  email: string;
  role: "ADMIN" | "MEMBER" | "ALUMNI";
  status: "ACTIVE" | "INACTIVE" | "ALUMNI";
  joinDate: string;
  profile: {
    bio: string | null;
    skills: string[];
    github: string | null;
    linkedin: string | null;
    portfolio: string | null;
  } | null;
}

export default function MemberProfilePage({
  params,
}: {
  params: { id: string };
}) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [member, setMember] = useState<Member | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/login");
    }
  }, [status, router]);

  useEffect(() => {
    async function fetchMember() {
      try {
        const response = await fetch(`/api/members/${params.id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch member details");
        }
        const data = await response.json();
        setMember(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : "Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    if (status === "authenticated") {
      fetchMember();
    }
  }, [status, params.id]);

  if (status === "loading" || loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!member) {
    return (
      <DashboardLayout>
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Member not found</h1>
          <p className="mt-2 text-gray-600">
            The member you're looking for doesn't exist.
          </p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{member.name}</h1>
            <p className="text-sm text-gray-500">{member.email}</p>
          </div>
          <div className="flex space-x-2">
            <span
              className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                member.role === "ADMIN"
                  ? "bg-red-100 text-red-800"
                  : member.role === "MEMBER"
                  ? "bg-blue-100 text-blue-800"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {member.role}
            </span>
            <span
              className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                member.status === "ACTIVE"
                  ? "bg-green-100 text-green-800"
                  : member.status === "INACTIVE"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {member.status}
            </span>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-medium text-gray-900">About</h2>
          <p className="mt-2 text-sm text-gray-600">
            {member.profile?.bio || "No bio available"}
          </p>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-medium text-gray-900">Skills</h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {member.profile?.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-medium text-gray-900">Links</h2>
          <div className="mt-2 space-y-2">
            {member.profile?.github && (
              <a
                href={member.profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-indigo-600 hover:text-indigo-900"
              >
                <svg
                  className="h-5 w-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.91-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                GitHub Profile
              </a>
            )}
            {member.profile?.linkedin && (
              <a
                href={member.profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-indigo-600 hover:text-indigo-900"
              >
                <svg
                  className="h-5 w-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn Profile
              </a>
            )}
            {member.profile?.portfolio && (
              <a
                href={member.profile.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-indigo-600 hover:text-indigo-900"
              >
                <svg
                  className="h-5 w-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
                Portfolio Website
              </a>
            )}
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-medium text-gray-900">Member Since</h2>
          <p className="mt-2 text-sm text-gray-600">
            {new Date(member.joinDate).toLocaleDateString()}
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
} 