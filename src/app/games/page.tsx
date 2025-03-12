"use client";

import { useState } from 'react';
import CyberHeading from "@/components/ui/CyberHeading";
import CyberCard from "@/components/ui/CyberCard";
import CyberButton from "@/components/ui/CyberButton";
import CyberImage from "@/components/ui/CyberImage";

interface Game {
  title: string;
  description: string;
  image: string;
  status: 'IN_DEVELOPMENT' | 'COMPLETED' | 'TESTING';
  tech: string[];
  team: string[];
}

const games: Game[] = [
  {
    title: "CYBER_QUEST",
    description: "A virtual reality adventure game set in a dystopian future.",
    image: "/games/cyber-quest.jpg",
    status: 'IN_DEVELOPMENT',
    tech: ['Unity', 'VR', 'C#'],
    team: ['Team Alpha']
  },
  // Add more games here
];

export default function GamesPage() {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  return (
    <div className="min-h-screen bg-cyber-dark relative">
      {/* Background Effects */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-cyber-grid bg-[size:50px_50px] opacity-10"></div>
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <CyberHeading level={1} variant="primary" className="text-center mb-16" glitch>
          GAME_DEVELOPMENT
        </CyberHeading>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Games List */}
          <div className="space-y-8">
            {games.map((game, index) => (
              <CyberCard
                key={index}
                variant={game === selectedGame ? "secondary" : "primary"}
                className="cursor-pointer group transition-all duration-300 hover:scale-[1.02]"
                onClick={() => setSelectedGame(game)}
              >
                <div className="flex items-center gap-4">
                  <div className="w-24 h-24 relative overflow-hidden rounded-lg">
                    <CyberImage
                      src={game.image}
                      alt={game.title}
                      width={96}
                      height={96}
                      className="object-cover"
                      glitch={game === selectedGame}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-cyber-blue mb-2 group-hover:animate-glitch-text">
                      {game.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2 py-0.5 rounded text-xs ${
                        game.status === 'COMPLETED' 
                          ? 'bg-cyber-green/20 text-cyber-green' 
                          : game.status === 'IN_DEVELOPMENT'
                          ? 'bg-cyber-blue/20 text-cyber-blue'
                          : 'bg-cyber-orange/20 text-cyber-orange'
                      }`}>
                        {game.status}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm line-clamp-2">
                      {game.description}
                    </p>
                  </div>
                </div>
              </CyberCard>
            ))}
          </div>

          {/* Game Details */}
          <div className="lg:sticky lg:top-8 space-y-8">
            {selectedGame ? (
              <CyberCard variant="secondary" className="backdrop-blur-lg">
                <div className="aspect-video relative mb-6 overflow-hidden rounded-lg">
                  <CyberImage
                    src={selectedGame.image}
                    alt={selectedGame.title}
                    width={800}
                    height={450}
                    className="object-cover"
                    hologram
                  />
                </div>

                <CyberHeading level={2} variant="primary" className="mb-4">
                  {selectedGame.title}
                </CyberHeading>

                <p className="text-gray-300 mb-6">
                  {selectedGame.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="text-cyber-pink text-sm mb-2">TECH_STACK</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedGame.tech.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-cyber-blue/10 text-cyber-blue text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-cyber-pink text-sm mb-2">TEAM</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedGame.team.map((member, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-cyber-pink/10 text-cyber-pink text-xs rounded"
                        >
                          {member}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CyberButton variant="primary" href={`/games/${selectedGame.title.toLowerCase()}`}>
                    VIEW_DETAILS
                  </CyberButton>
                  <CyberButton variant="secondary" href={`/games/${selectedGame.title.toLowerCase()}/play`}>
                    LAUNCH_GAME
                  </CyberButton>
                </div>
              </CyberCard>
            ) : (
              <CyberCard variant="primary" className="backdrop-blur-lg text-center py-12">
                <p className="text-cyber-blue text-lg mb-4 animate-pulse">
                  SELECT A GAME TO VIEW DETAILS
                </p>
                <div className="text-6xl animate-bounce">
                  ←
                </div>
              </CyberCard>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 