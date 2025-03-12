"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string | null;
  type: "MEETING" | "WORKSHOP" | "GAME_JAM" | "HACKATHON" | "SOCIAL";
  createdAt: string;
  participants: {
    id: string;
    status: "REGISTERED" | "ATTENDED" | "CANCELLED";
    user: {
      id: string;
      name: string | null;
      email: string;
    };
  }[];
}

export default function EventDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/login");
    }
  }, [status, router]);

  useEffect(() => {
    async function fetchEvent() {
      try {
        const response = await fetch(`/api/events/${params.id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch event details");
        }
        const data = await response.json();
        setEvent(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : "Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    if (status === "authenticated") {
      fetchEvent();
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

  if (!event) {
    return (
      <DashboardLayout>
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Event not found</h1>
          <p className="mt-2 text-gray-600">
            The event you're looking for doesn't exist.
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
            <h1 className="text-2xl font-bold text-gray-900">{event.title}</h1>
            <p className="mt-1 text-sm text-gray-500">
              Created on {new Date(event.createdAt).toLocaleDateString()}
            </p>
          </div>
          <span
            className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
              event.type === "GAME_JAM"
                ? "bg-purple-100 text-purple-800"
                : event.type === "HACKATHON"
                ? "bg-blue-100 text-blue-800"
                : event.type === "WORKSHOP"
                ? "bg-green-100 text-green-800"
                : event.type === "MEETING"
                ? "bg-yellow-100 text-yellow-800"
                : "bg-gray-100 text-gray-800"
            }`}
          >
            {event.type.replace("_", " ")}
          </span>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-medium text-gray-900">Description</h2>
          <p className="mt-2 text-sm text-gray-600">{event.description}</p>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-medium text-gray-900">Details</h2>
          <dl className="mt-2 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
            <div>
              <dt className="text-sm font-medium text-gray-500">Date & Time</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {new Date(event.date).toLocaleString()}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Location</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {event.location || "TBD"}
              </dd>
            </div>
          </dl>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-medium text-gray-900">Participants</h2>
          <div className="mt-4 space-y-4">
            {event.participants.map((participant) => (
              <div
                key={participant.id}
                className="flex items-center justify-between"
              >
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {participant.user.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {participant.user.email}
                  </p>
                </div>
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    participant.status === "ATTENDED"
                      ? "bg-green-100 text-green-800"
                      : participant.status === "REGISTERED"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {participant.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
} 