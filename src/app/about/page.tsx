"use client";

import CyberHeading from "@/components/ui/CyberHeading";
import CyberCard from "@/components/ui/CyberCard";
import CyberImage from "@/components/ui/CyberImage";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cyber-dark">
      {/* Background Effects */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-cyber-grid bg-[size:50px_50px] opacity-10"></div>
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-24">
        <CyberHeading level={1} variant="primary" className="text-center mb-12" glitch>
          ABOUT_AMIGOS
        </CyberHeading>

        {/* Introduction */}
        <section className="mb-16">
          <CyberCard variant="primary" className="backdrop-blur-sm">
            <div className="relative mb-6 aspect-video overflow-hidden rounded-lg">
              <CyberImage
                src="/club/inauguration.jpg"
                alt="AMIGOS Club Inauguration"
                width={1700}
                height={1000}
                className="object-cover"
                hologram
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              AMIGOS (Amrita Intelligent Gaming and Opti-verse Sports) Club was inaugurated on October 28, 2023, 
              during Amrita CyberNation 2023 at the prestigious Amirtamayi Hall. The club serves as a dynamic hub 
              for students passionate about gaming technologies and futuristic sports innovations at Amrita Vishwa 
              Vidyapeetham Chennai Campus.
            </p>
          </CyberCard>
        </section>

        {/* Mission & Vision */}
        <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <CyberCard variant="secondary" className="backdrop-blur-sm">
            <h2 className="text-xl font-bold text-cyber-pink mb-4">MISSION_</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-cyber-blue mr-2">▸</span>
                Foster innovation in gaming and extended reality technologies
              </li>
              <li className="flex items-start">
                <span className="text-cyber-blue mr-2">▸</span>
                Create a collaborative environment for learning and development
              </li>
              <li className="flex items-start">
                <span className="text-cyber-blue mr-2">▸</span>
                Promote technical skill development through hands-on projects
              </li>
              <li className="flex items-start">
                <span className="text-cyber-blue mr-2">▸</span>
                Bridge academia and industry through expert interactions
              </li>
            </ul>
          </CyberCard>

          <CyberCard variant="secondary" className="backdrop-blur-sm">
            <h2 className="text-xl font-bold text-cyber-pink mb-4">VISION_</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-cyber-blue mr-2">▸</span>
                Become a leading hub for gaming and XR innovation
              </li>
              <li className="flex items-start">
                <span className="text-cyber-blue mr-2">▸</span>
                Nurture next-generation developers and creators
              </li>
              <li className="flex items-start">
                <span className="text-cyber-blue mr-2">▸</span>
                Drive technological advancement in virtual experiences
              </li>
              <li className="flex items-start">
                <span className="text-cyber-blue mr-2">▸</span>
                Create a strong community of tech enthusiasts
              </li>
            </ul>
          </CyberCard>
        </section>

        {/* Focus Areas */}
        <section className="mb-16">
          <CyberHeading level={2} variant="secondary" className="text-center mb-8" glitch>
            FOCUS_AREAS
          </CyberHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CyberCard variant="primary" className="backdrop-blur-sm">
              <h3 className="text-lg font-bold text-cyber-blue mb-3">GAME_DEVELOPMENT</h3>
              <p className="text-gray-300">
                Creating immersive gaming experiences using cutting-edge engines and tools.
                Focus on both 2D and 3D game development with emphasis on innovation.
              </p>
            </CyberCard>

            <CyberCard variant="primary" className="backdrop-blur-sm">
              <h3 className="text-lg font-bold text-cyber-blue mb-3">XR_TECHNOLOGIES</h3>
              <p className="text-gray-300">
                Exploring virtual and augmented reality frontiers. Developing applications
                that push the boundaries of immersive experiences.
              </p>
            </CyberCard>

            <CyberCard variant="primary" className="backdrop-blur-sm">
              <h3 className="text-lg font-bold text-cyber-blue mb-3">CREATIVE_ARTS</h3>
              <p className="text-gray-300">
                Visual effects, sound design, and digital art creation. Combining technical
                expertise with artistic expression.
              </p>
            </CyberCard>
          </div>
        </section>

        {/* Activities */}
        <section>
          <CyberHeading level={2} variant="secondary" className="text-center mb-8" glitch>
            CLUB_ACTIVITIES
          </CyberHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CyberCard variant="primary" className="backdrop-blur-sm">
              <h3 className="text-lg font-bold text-cyber-blue mb-3">TECHNICAL_</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Game Development Workshops</li>
                <li>• XR Technology Training</li>
                <li>• Project Collaborations</li>
                <li>• Technical Competitions</li>
              </ul>
            </CyberCard>

            <CyberCard variant="primary" className="backdrop-blur-sm">
              <h3 className="text-lg font-bold text-cyber-blue mb-3">COMMUNITY_</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Gaming Tournaments</li>
                <li>• Industry Expert Sessions</li>
                <li>• Networking Events</li>
                <li>• Hackathons</li>
              </ul>
            </CyberCard>
          </div>
        </section>
      </div>
    </div>
  );
} 