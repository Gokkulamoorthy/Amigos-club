"use client";

import { Metadata } from "next";
import CyberHeading from "@/components/ui/CyberHeading";
import CyberCard from "@/components/ui/CyberCard";
import CyberImage from "@/components/ui/CyberImage";

interface BoardMember {
  name: string;
  role: string;
  image: string;
  year: "2024" | "2023-24";
  specialty: string;
}

const boardMembers: BoardMember[] = [
  // Current Board Members (2024)
  {
    name: "Gokkulamoorthy S R",
    role: "President",
    image: "/members/president.jpg",
    year: "2024",
    specialty: "Game Development"
  },
  {
    name: "Vishnu Vignesh A",
    role: "Vice President",
    image: "/members/vice-president.jpg",
    year: "2024",
    specialty: "AR/VR Technology"
  },
  {
    name: "Navaneethan S",
    role: "Game Dev Coordinator",
    image: "/members/gamedev.jpg",
    year: "2024",
    specialty: "Unity Development"
  },
  {
    name: "Srish N",
    role: "VFX Coordinator",
    image: "/members/vfx.jpg",
    year: "2024",
    specialty: "Visual Effects"
  },
  {
    name: "Lakshmi Priya V",
    role: "SFX Coordinator",
    image: "/members/sfx.jpg",
    year: "2024",
    specialty: "Sound Design"
  },
  {
    name: "Jeiswaruban S",
    role: "VR Coordinator",
    image: "/members/vr.jpg",
    year: "2024",
    specialty: "VR Development"
  },
  {
    name: "Bharani D",
    role: "AR Coordinator",
    image: "/members/ar.jpg",
    year: "2024",
    specialty: "AR Development"
  },
  // Inaugural Board Members (2023-24)
  {
    name: "K. Sabari Kumar",
    role: "President",
    image: "/members/2023/president.jpg",
    year: "2023-24",
    specialty: "Game Development"
  },
  {
    name: "S R Gokkulamoorthy",
    role: "Vice President",
    image: "/members/2023/vice-president.jpg",
    year: "2023-24",
    specialty: "AR/VR Technology"
  },
  {
    name: "Varun Kishore",
    role: "Game Dev Coordinator",
    image: "/members/2023/gamedev1.jpg",
    year: "2023-24",
    specialty: "Unity Development"
  },
  {
    name: "Rahul Diwakar",
    role: "Game Dev Coordinator",
    image: "/members/2023/gamedev2.jpg",
    year: "2023-24",
    specialty: "Game Design"
  },
  {
    name: "S V Tharun",
    role: "VFX Coordinator",
    image: "/members/2023/vfx.jpg",
    year: "2023-24",
    specialty: "Visual Effects"
  },
  {
    name: "Vishnu Balaji",
    role: "SFX Coordinator",
    image: "/members/2023/sfx1.jpg",
    year: "2023-24",
    specialty: "Sound Design"
  },
  {
    name: "Kishore D T",
    role: "SFX Coordinator",
    image: "/members/2023/sfx2.jpg",
    year: "2023-24",
    specialty: "Audio Engineering"
  },
  {
    name: "Uvan Shankar",
    role: "VR Coordinator",
    image: "/members/2023/vr1.jpg",
    year: "2023-24",
    specialty: "VR Development"
  },
  {
    name: "Harsha Vardhan",
    role: "VR Coordinator",
    image: "/members/2023/vr2.jpg",
    year: "2023-24",
    specialty: "VR Design"
  },
  {
    name: "Ajay",
    role: "VR Coordinator",
    image: "/members/2023/vr3.jpg",
    year: "2023-24",
    specialty: "VR Programming"
  },
  {
    name: "Nirmal",
    role: "AR Coordinator",
    image: "/members/2023/ar.jpg",
    year: "2023-24",
    specialty: "AR Development"
  }
];

export default function BoardMembersPage() {
  const currentBoard = boardMembers.filter(member => member.year === "2024");
  const inauguralBoard = boardMembers.filter(member => member.year === "2023-24");

  return (
    <div className="min-h-screen bg-cyber-dark">
      {/* Background Effects */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-cyber-grid bg-[size:50px_50px] opacity-10"></div>
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-24">
        {/* Current Board */}
        <section className="mb-20">
          <CyberHeading level={1} variant="primary" className="text-center mb-12" glitch>
            CURRENT_BOARD_2024
          </CyberHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentBoard.map((member, index) => (
              <CyberCard key={index} variant="primary" className="backdrop-blur-sm">
                <div className="relative mb-4 aspect-[3/4] overflow-hidden rounded-lg">
                  <CyberImage
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={533}
                    className="object-cover"
                    hologram
                  />
                </div>
                <h3 className="text-xl font-bold text-cyber-blue mb-2">
                  {member.name}
                </h3>
                <p className="text-cyber-pink mb-2">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.specialty}</p>
              </CyberCard>
            ))}
          </div>
        </section>

        {/* Inaugural Board */}
        <section>
          <CyberHeading level={2} variant="secondary" className="text-center mb-12" glitch>
            INAUGURAL_BOARD_2023
          </CyberHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {inauguralBoard.map((member, index) => (
              <CyberCard key={index} variant="secondary" className="backdrop-blur-sm">
                <div className="relative mb-4 aspect-[3/4] overflow-hidden rounded-lg">
                  <CyberImage
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={533}
                    className="object-cover"
                    hologram
                  />
                </div>
                <h3 className="text-xl font-bold text-cyber-blue mb-2">
                  {member.name}
                </h3>
                <p className="text-cyber-pink mb-2">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.specialty}</p>
              </CyberCard>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
} 
 