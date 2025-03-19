"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

interface DashboardStats {
  totalMembers: number;
  activeEvents: number;
  ongoingProjects: number;
  recentActivity: {
    id: string;
    type: "member" | "event" | "project";
    action: string;
    timestamp: string;
  }[];
}

export default function AdminDashboard() {
  const { data: session } = useSession();
  const [stats, setStats] = useState<DashboardStats>({
    totalMembers: 0,
    activeEvents: 0,
    ongoingProjects: 0,
    recentActivity: [],
  });

  useEffect(() => {
    // TODO: Fetch actual data from your API
    // This is just mock data for now
    setStats({
      totalMembers: 150,
      activeEvents: 5,
      ongoingProjects: 8,
      recentActivity: [
        {
          id: "1",
          type: "member",
          action: "New member registration",
          timestamp: "2024-03-19T10:00:00Z",
        },
        {
          id: "2",
          type: "event",
          action: "Event created: Gaming Tournament",
          timestamp: "2024-03-19T09:30:00Z",
        },
        {
          id: "3",
          type: "project",
          action: "Project updated: AI Gaming Bot",
          timestamp: "2024-03-19T09:00:00Z",
        },
      ],
    });
  }, []);

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-cyber-black/50 p-6 rounded-lg border border-neon-blue/20">
        <h1 className="text-2xl font-bold text-neon-blue mb-2">
          WELCOME, {session?.user?.name}
        </h1>
        <p className="text-cyber-gray-300">
          Here's what's happening in your system today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-cyber-black/50 p-6 rounded-lg border border-neon-blue/20">
          <h3 className="text-cyber-gray-400 mb-2">TOTAL_MEMBERS</h3>
          <p className="text-3xl font-bold text-neon-blue">{stats.totalMembers}</p>
        </div>
        <div className="bg-cyber-black/50 p-6 rounded-lg border border-neon-blue/20">
          <h3 className="text-cyber-gray-400 mb-2">ACTIVE_EVENTS</h3>
          <p className="text-3xl font-bold text-neon-pink">{stats.activeEvents}</p>
        </div>
        <div className="bg-cyber-black/50 p-6 rounded-lg border border-neon-blue/20">
          <h3 className="text-cyber-gray-400 mb-2">ONGOING_PROJECTS</h3>
          <p className="text-3xl font-bold text-neon-purple">{stats.ongoingProjects}</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-cyber-black/50 p-6 rounded-lg border border-neon-blue/20">
        <h2 className="text-xl font-bold text-neon-blue mb-4">RECENT_ACTIVITY</h2>
        <div className="space-y-4">
          {stats.recentActivity.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center justify-between p-4 bg-cyber-black/30 rounded-lg border border-neon-blue/10"
            >
              <div className="flex items-center space-x-4">
                <div
                  className={`w-2 h-2 rounded-full ${
                    activity.type === "member"
                      ? "bg-neon-blue"
                      : activity.type === "event"
                      ? "bg-neon-pink"
                      : "bg-neon-purple"
                  }`}
                />
                <span className="text-cyber-gray-300">{activity.action}</span>
              </div>
              <span className="text-cyber-gray-400">
                {new Date(activity.timestamp).toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 