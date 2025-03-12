"use client";

import { useSession } from "next-auth/react";
import CyberHeading from "@/components/ui/CyberHeading";
import CyberCard from "@/components/ui/CyberCard";

export default function DashboardPage() {
  const { data: session } = useSession();

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <CyberHeading level={2} glitch>
          SYSTEM_OVERVIEW
        </CyberHeading>
        <div className="text-neon-blue/60 font-gaming">
          LAST_UPDATE: {new Date().toLocaleTimeString()}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <CyberCard variant="primary" className="backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-neon-blue/10 flex items-center justify-center">
              <span className="text-2xl text-neon-blue">🎮</span>
            </div>
            <div>
              <h3 className="text-neon-blue/60 font-gaming">ACTIVE_EVENTS</h3>
              <p className="text-2xl font-bold text-white">5</p>
            </div>
          </div>
        </CyberCard>

        <CyberCard variant="primary" className="backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-neon-purple/10 flex items-center justify-center">
              <span className="text-2xl text-neon-purple">🚀</span>
            </div>
            <div>
              <h3 className="text-neon-purple/60 font-gaming">ONGOING_PROJECTS</h3>
              <p className="text-2xl font-bold text-white">3</p>
            </div>
          </div>
        </CyberCard>

        <CyberCard variant="primary" className="backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-neon-green/10 flex items-center justify-center">
              <span className="text-2xl text-neon-green">🏆</span>
            </div>
            <div>
              <h3 className="text-neon-green/60 font-gaming">ACHIEVEMENT_POINTS</h3>
              <p className="text-2xl font-bold text-white">1,337</p>
            </div>
          </div>
        </CyberCard>
      </div>

      {/* Recent Activity */}
      <CyberCard variant="secondary" className="backdrop-blur-sm">
        <h3 className="text-xl font-bold text-neon-blue mb-4">RECENT_ACTIVITY</h3>
        <div className="space-y-4">
          {[
            {
              time: "2h ago",
              type: "EVENT",
              title: "Gaming Tournament Registration",
              status: "COMPLETED"
            },
            {
              time: "5h ago",
              type: "PROJECT",
              title: "VR Experience Development",
              status: "IN_PROGRESS"
            },
            {
              time: "1d ago",
              type: "ACHIEVEMENT",
              title: "First Place in Hackathon",
              status: "UNLOCKED"
            }
          ].map((activity, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-cyber-darker/50 rounded-lg">
              <div className="flex items-center gap-4">
                <div className={`w-2 h-2 rounded-full ${
                  activity.type === "EVENT" ? "bg-neon-blue" :
                  activity.type === "PROJECT" ? "bg-neon-purple" :
                  "bg-neon-green"
                }`}></div>
                <div>
                  <p className="text-white font-gaming">{activity.title}</p>
                  <p className="text-neon-blue/60 text-sm">{activity.time}</p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-gaming ${
                activity.status === "COMPLETED" ? "bg-neon-green/20 text-neon-green" :
                activity.status === "IN_PROGRESS" ? "bg-neon-blue/20 text-neon-blue" :
                "bg-neon-purple/20 text-neon-purple"
              }`}>
                {activity.status}
              </span>
            </div>
          ))}
        </div>
      </CyberCard>
    </div>
  );
} 