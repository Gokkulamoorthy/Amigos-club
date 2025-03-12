"use client";

import CyberHeading from "@/components/ui/CyberHeading";
import CyberButton from "@/components/ui/CyberButton";

export default function EventsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <CyberHeading level={1} glitch>MY_EVENTS</CyberHeading>
        <CyberButton variant="primary" size="sm">
          JOIN_EVENT
        </CyberButton>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            title: "Game Dev Workshop",
            date: "2024-03-25",
            time: "14:00",
            status: "UPCOMING",
            type: "WORKSHOP",
            description: "Learn advanced game development techniques using Unreal Engine 5.",
          },
          {
            title: "Cyberpunk CTF",
            date: "2024-03-28",
            time: "18:00",
            status: "REGISTERED",
            type: "COMPETITION",
            description: "Capture the flag competition with cybersecurity challenges.",
          },
          {
            title: "VR Development",
            date: "2024-03-30",
            time: "10:00",
            status: "WAITLIST",
            type: "WORKSHOP",
            description: "Introduction to Virtual Reality development with Unity.",
          },
          {
            title: "Gaming Tournament",
            date: "2024-04-02",
            time: "16:00",
            status: "UPCOMING",
            type: "TOURNAMENT",
            description: "VALORANT tournament with teams from different colleges.",
          },
        ].map((event, index) => (
          <div key={index} className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-blue to-neon-pink opacity-20 blur group-hover:opacity-40 transition-opacity"></div>
            <div className="relative p-6 bg-cyber-darker/80 border border-neon-blue/20 rounded-lg backdrop-blur-sm">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-gaming text-neon-blue">{event.title}</h3>
                    <p className="text-cyber-gray-400 text-sm mt-1">{event.description}</p>
                  </div>
                  <span className={`
                    px-2 py-1 text-xs font-mono rounded
                    ${event.status === 'UPCOMING' ? 'bg-neon-blue/10 text-neon-blue' :
                      event.status === 'REGISTERED' ? 'bg-neon-green/10 text-neon-green' :
                      'bg-neon-purple/10 text-neon-purple'}
                  `}>
                    {event.status}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-cyber-gray-400">DATE:</span>
                      <span className="text-neon-pink font-mono">{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-cyber-gray-400">TIME:</span>
                      <span className="text-neon-pink font-mono">{event.time}</span>
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-neon-yellow/10 text-neon-yellow text-xs font-mono rounded">
                    {event.type}
                  </span>
                </div>

                <div className="pt-4 flex justify-end">
                  <CyberButton
                    variant={event.status === 'REGISTERED' ? 'secondary' : 'primary'}
                    size="sm"
                  >
                    {event.status === 'REGISTERED' ? 'VIEW_DETAILS' : 'REGISTER'}
                  </CyberButton>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 
 