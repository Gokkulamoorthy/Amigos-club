import React, { useRef, useEffect } from 'react';
import CyberImage from '../ui/CyberImage';
import CyberHeading from '../ui/CyberHeading';

interface Member {
  name: string;
  role: string;
  image: string;
  specialty: string;
}

const members: Member[] = [
  {
    name: "Gokkulamoorthy S R",
    role: "President",
    image: "/members/president.jpg",
    specialty: "Game Development"
  },
  {
    name: "Vishnu Vignesh A",
    role: "Vice President",
    image: "/members/vice-president.jpg",
    specialty: "AR/VR Technology"
  },
  {
    name: "Navaneethan S",
    role: "Game Dev Coordinator",
    image: "/members/gamedev.jpg",
    specialty: "Unity Development"
  },
  {
    name: "Srish N",
    role: "VFX Coordinator",
    image: "/members/vfx.jpg",
    specialty: "Visual Effects"
  },
  {
    name: "Lakshmi Priya V",
    role: "SFX Coordinator",
    image: "/members/sfx.jpg",
    specialty: "Sound Design"
  },
  {
    name: "Jeiswaruban S",
    role: "VR Coordinator",
    image: "/members/vr.jpg",
    specialty: "VR Development"
  },
  {
    name: "Bharani D",
    role: "AR Coordinator",
    image: "/members/ar.jpg",
    specialty: "AR Development"
  }
];

export default function MembersScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    const handleMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      startX.current = e.pageX - slider.offsetLeft;
      scrollLeft.current = slider.scrollLeft;
      slider.style.cursor = 'grabbing';
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      slider.style.cursor = 'grab';
    };

    const handleMouseLeave = () => {
      isDragging.current = false;
      slider.style.cursor = 'grab';
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX.current) * 2;
      slider.scrollLeft = scrollLeft.current - walk;
    };

    slider.addEventListener('mousedown', handleMouseDown);
    slider.addEventListener('mousemove', handleMouseMove);
    slider.addEventListener('mouseup', handleMouseUp);
    slider.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      slider.removeEventListener('mousedown', handleMouseDown);
      slider.removeEventListener('mousemove', handleMouseMove);
      slider.removeEventListener('mouseup', handleMouseUp);
      slider.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container mx-auto">
        <CyberHeading level={2} variant="secondary" className="text-center mb-12">
          SYSTEM_OPERATORS
        </CyberHeading>
      </div>

      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-cyber-dark to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-cyber-dark to-transparent z-10"></div>

      {/* Scrollable container */}
      <div 
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto scrollbar-hide cursor-grab py-8 px-32"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {members.map((member, index) => (
          <div 
            key={index}
            className="flex-none w-72 group"
          >
            <div className="relative mb-4">
              <CyberImage
                src={member.image}
                alt={member.name}
                width={300}
                height={400}
                className="w-full h-96 rounded-lg"
                hologram
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark via-transparent to-transparent"></div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-cyber-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark to-transparent"></div>
              </div>
            </div>
            
            <div className="relative z-20">
              <h3 className="text-xl font-bold text-cyber-blue mb-1 group-hover:animate-glitch-text">
                {member.name}
              </h3>
              <p className="text-cyber-pink mb-2">{member.role}</p>
              <p className="text-gray-400 text-sm">{member.specialty}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="container mx-auto mt-8">
        <p className="text-center text-cyber-blue/50 text-sm animate-pulse">
          &lt;&lt; DRAG TO EXPLORE &gt;&gt;
        </p>
      </div>
    </section>
  );
} 