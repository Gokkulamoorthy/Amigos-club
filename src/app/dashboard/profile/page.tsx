"use client";

import CyberHeading from "@/components/ui/CyberHeading";

export default function ProfilePage() {
  return (
    <div className="space-y-8">
      <CyberHeading level={1} glitch>MY_PROFILE</CyberHeading>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Info */}
        <div className="lg:col-span-2 space-y-6">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-blue to-neon-pink opacity-20 blur"></div>
            <div className="relative p-6 bg-cyber-darker/80 border border-neon-blue/20 rounded-lg backdrop-blur-sm">
              <div className="flex items-start space-x-6">
                <div className="w-24 h-24 rounded-lg bg-neon-blue/10 border-2 border-neon-blue/30 flex items-center justify-center">
                  <span className="text-3xl font-gaming text-neon-blue">GSR</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <h2 className="text-2xl font-gaming text-neon-blue">Gokkulamoorthy S R</h2>
                    <p className="text-cyber-gray-400">OPERATOR_ID: #2024001</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-cyber-gray-400">STATUS:</span>
                      <span className="text-neon-green">ACTIVE</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-cyber-gray-400">ROLE:</span>
                      <span className="text-neon-blue">CYBER_SPECIALIST</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bio Section */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-blue to-neon-pink opacity-20 blur"></div>
            <div className="relative p-6 bg-cyber-darker/80 border border-neon-blue/20 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-gaming text-neon-blue mb-4">BIO_DATA</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-cyber-gray-400 text-sm">DEPARTMENT</p>
                    <p className="text-neon-blue">Computer Science</p>
                  </div>
                  <div>
                    <p className="text-cyber-gray-400 text-sm">YEAR</p>
                    <p className="text-neon-blue">2024</p>
                  </div>
                  <div>
                    <p className="text-cyber-gray-400 text-sm">SPECIALIZATION</p>
                    <p className="text-neon-blue">Game Development</p>
                  </div>
                  <div>
                    <p className="text-cyber-gray-400 text-sm">JOINED</p>
                    <p className="text-neon-blue">2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Card */}
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-blue to-neon-pink opacity-20 blur"></div>
          <div className="relative p-6 bg-cyber-darker/80 border border-neon-blue/20 rounded-lg backdrop-blur-sm">
            <h3 className="text-xl font-gaming text-neon-blue mb-4">STATS</h3>
            <div className="space-y-6">
              {[
                { label: "EVENTS_ATTENDED", value: 15, color: "neon-blue" },
                { label: "PROJECTS_COMPLETED", value: 8, color: "neon-pink" },
                { label: "ACHIEVEMENT_POINTS", value: 1337, color: "neon-purple" },
                { label: "CONTRIBUTIONS", value: 42, color: "neon-green" },
              ].map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-cyber-gray-400">{stat.label}</span>
                    <span className={`text-${stat.color}`}>{stat.value}</span>
                  </div>
                  <div className="h-2 bg-cyber-darker rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-${stat.color} rounded-full animate-pulse`}
                      style={{ width: `${(stat.value / (stat.label === "ACHIEVEMENT_POINTS" ? 2000 : 100)) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
 