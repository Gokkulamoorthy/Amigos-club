import React, { useState, useEffect } from 'react';
import CyberImage from '../ui/CyberImage';
import CyberHeading from '../ui/CyberHeading';
import CyberButton from '../ui/CyberButton';

interface Event {
  title: string;
  date: string;
  image: string;
  description: string;
}

const events: Event[] = [
  {
    title: "AMIGOS Club Inauguration",
    date: "2024",
    image: "/events/inauguration.jpg",
    description: "Official launch of AMIGOS Club with distinguished guests and exciting game launches."
  },
  {
    title: "Tantrotsav 2024",
    date: "2024",
    image: "/events/tantrotsav.jpg",
    description: "Annual gaming tournament featuring competitive matches and tech showcases."
  },
  {
    title: "VR Workshop Series",
    date: "2024",
    image: "/events/vr-workshop.jpg",
    description: "Hands-on workshops exploring virtual reality development and applications."
  },
  {
    title: "Game Jam 2024",
    date: "2024",
    image: "/events/gamejam.jpg",
    description: "48-hour game development challenge pushing creativity and innovation."
  }
];

export default function EventSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % events.length);
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length);
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-cyber-dark">
      {/* Background layer */}
      <div className="absolute inset-0 opacity-30">
        <CyberImage
          src={events[currentSlide].image}
          alt="Background"
          width={1920}
          height={1080}
          className="w-full h-full object-cover blur-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark via-cyber-dark/80 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <CyberHeading level={2} variant="primary" className="text-center mb-12">
          EVENT_ARCHIVES
        </CyberHeading>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="relative group">
            <CyberImage
              src={events[currentSlide].image}
              alt={events[currentSlide].title}
              width={800}
              height={600}
              className={`w-full rounded-lg transition-transform duration-700 ${
                isTransitioning ? 'scale-95 opacity-50' : 'scale-100 opacity-100'
              }`}
              glitch
            />
            
            {/* Navigation buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyber-blue hover:text-cyber-pink transition-colors"
            >
              &#x276E;
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-cyber-blue hover:text-cyber-pink transition-colors"
            >
              &#x276F;
            </button>
          </div>

          {/* Content */}
          <div className={`transition-opacity duration-700 ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-3xl font-bold text-cyber-blue animate-cyber-glow">
                  {events[currentSlide].title}
                </h3>
                <span className="text-cyber-pink">{events[currentSlide].date}</span>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                {events[currentSlide].description}
              </p>
              <div className="pt-4">
                <CyberButton href={`/events/${currentSlide}`} variant="secondary">
                  VIEW_DETAILS
                </CyberButton>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mt-8 flex gap-2">
              {events.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 transition-all duration-700 ${
                    index === currentSlide
                      ? 'bg-cyber-blue flex-grow'
                      : 'bg-cyber-blue/20 w-8'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 