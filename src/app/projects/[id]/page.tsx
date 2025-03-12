"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string | null;
  github: string | null;
  demo: string | null;
  status: "PLANNING" | "IN_PROGRESS" | "COMPLETED" | "ARCHIVED";
  createdAt: string;
  members: {
    id: string;
    role: string;
    user: {
      id: string;
      name: string | null;
      email: string;
    };
  }[];
}

export default function ProjectDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/login");
    }
  }, [status, router]);

  useEffect(() => {
    async function fetchProject() {
      try {
        const response = await fetch(`/api/projects/${params.id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch project details");
        }
        const data = await response.json();
        setProject(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : "Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    if (status === "authenticated") {
      fetchProject();
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

  if (!project) {
    return (
      <DashboardLayout>
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Project not found</h1>
          <p className="mt-2 text-gray-600">
            The project you're looking for doesn't exist.
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
            <h1 className="text-2xl font-bold text-gray-900">{project.title}</h1>
            <p className="mt-1 text-sm text-gray-500">
              Created on {new Date(project.createdAt).toLocaleDateString()}
            </p>
          </div>
          <span
            className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
              project.status === "COMPLETED"
                ? "bg-green-100 text-green-800"
                : project.status === "IN_PROGRESS"
                ? "bg-blue-100 text-blue-800"
                : project.status === "PLANNING"
                ? "bg-yellow-100 text-yellow-800"
                : "bg-gray-100 text-gray-800"
            }`}
          >
            {project.status}
          </span>
        </div>

        {project.image && (
          <div className="mt-6">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        )}

        <div className="mt-6">
          <h2 className="text-lg font-medium text-gray-900">Description</h2>
          <p className="mt-2 text-sm text-gray-600">{project.description}</p>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-medium text-gray-900">Links</h2>
          <div className="mt-2 space-y-2">
            {project.github && (
              <a
                href={project.github}
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
                GitHub Repository
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
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
                Live Demo
              </a>
            )}
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-medium text-gray-900">Team Members</h2>
          <div className="mt-4 space-y-4">
            {project.members.map((member) => (
              <div
                key={member.id}
                className="flex items-center justify-between"
              >
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {member.user.name}
                  </p>
                  <p className="text-sm text-gray-500">{member.user.email}</p>
                </div>
                <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                  {member.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
} 