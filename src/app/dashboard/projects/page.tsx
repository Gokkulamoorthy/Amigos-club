"use client";

import CyberHeading from "@/components/ui/CyberHeading";
import CyberButton from "@/components/ui/CyberButton";

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <CyberHeading level={1} glitch>MY_PROJECTS</CyberHeading>
        <CyberButton variant="primary" size="sm">
          NEW_PROJECT
        </CyberButton>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-6">
        {[
          {
            title: "CyberUI Framework",
            status: "IN_PROGRESS",
            progress: 75,
            tech: ["React", "TypeScript", "Tailwind"],
            description: "A modern UI framework inspired by Cyberpunk 2077 for web applications.",
            collaborators: 3,
            lastUpdated: "2 hours ago",
          },
          {
            title: "Neural Network Game AI",
            status: "COMPLETED",
            progress: 100,
            tech: ["Python", "TensorFlow", "Unity"],
            description: "Implementation of neural networks for intelligent game NPCs.",
            collaborators: 2,
            lastUpdated: "1 day ago",
          },
          {
            title: "VR Training Simulator",
            status: "PLANNING",
            progress: 20,
            tech: ["Unity", "C#", "Oculus SDK"],
            description: "Virtual reality training simulator for industrial applications.",
            collaborators: 4,
            lastUpdated: "3 hours ago",
          },
        ].map((project, index) => (
          <div key={index} className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-blue to-neon-pink opacity-20 blur group-hover:opacity-40 transition-opacity"></div>
            <div className="relative p-6 bg-cyber-darker/80 border border-neon-blue/20 rounded-lg backdrop-blur-sm">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-gaming text-neon-blue">{project.title}</h3>
                    <p className="text-cyber-gray-400 text-sm mt-1">{project.description}</p>
                  </div>
                  <span className={`
                    px-2 py-1 text-xs font-mono rounded
                    ${project.status === 'IN_PROGRESS' ? 'bg-neon-blue/10 text-neon-blue' :
                      project.status === 'COMPLETED' ? 'bg-neon-green/10 text-neon-green' :
                      'bg-neon-purple/10 text-neon-purple'}
                  `}>
                    {project.status}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-cyber-gray-400">PROGRESS</span>
                    <span className="text-neon-blue font-mono">{project.progress}%</span>
                  </div>
                  <div className="h-2 bg-cyber-darker rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-neon-blue rounded-full transition-all duration-500"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-neon-purple/10 text-neon-purple text-xs font-mono rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="text-cyber-gray-400">TEAM:</span>
                    <div className="flex -space-x-2">
                      {[...Array(project.collaborators)].map((_, i) => (
                        <div 
                          key={i}
                          className="w-6 h-6 rounded-full bg-neon-blue/10 border border-neon-blue/30 flex items-center justify-center"
                        >
                          <span className="text-neon-blue text-xs">U{i+1}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <span className="text-cyber-gray-400 text-xs">
                    Updated {project.lastUpdated}
                  </span>
                </div>

                <div className="pt-4 flex justify-end space-x-4">
                  <CyberButton variant="secondary" size="sm">
                    VIEW_CODE
                  </CyberButton>
                  <CyberButton variant="primary" size="sm">
                    OPEN_PROJECT
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
 