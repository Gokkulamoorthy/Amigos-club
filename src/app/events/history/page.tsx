import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Event History - AMIGOS",
  description: "View the history of events and competitions organized by AMIGOS.",
};

export default function EventHistoryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Event History</h1>

      {/* Tantrotsav 2024 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Tantrotsav 2024</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3">Technical Events</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>PC Arcade and VR Game Stalls</li>
              <li>3D Modeling in Blender</li>
              <li>Map Design Challenge</li>
              <li>Scriptwriting Competition</li>
              <li>Character Sketching</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3">Gaming Tournaments</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>BGMI (Teams of 4)</li>
              <li>Valorant (Teams of 5)</li>
              <li>Call of Duty (Teams of 5)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tantrotsav 2023 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Tantrotsav 2023</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3">Creative Events</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Character Sketching</li>
              <li>Map Design (Unity Game Engine)</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3">Gaming Tournaments</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Valorant</li>
              <li>Call of Duty Mobile</li>
              <li>Clash of Clans</li>
              <li>Overwatch</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Amrita CyberNation 2023 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Amrita CyberNation 2023</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-3">Gaming Tournaments</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Valorant (Teams of 5)</li>
            <li>Call of Duty Mobile (Teams of 5)</li>
            <li>BGMI Mobile (Teams of 4)</li>
          </ul>
        </div>
      </section>

      {/* Inaugural Games */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Inaugural Games</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Top-Down Turmoil</h3>
            <p className="text-gray-700">
              An intense battle game where players navigate through challenging mazes filled with enemies, 
              armed with powerful weapons and strategic skills.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Eternal Kombat</h3>
            <p className="text-gray-700">
              A 2D fighting game that combines lightning-fast combat, brutal finishing moves, and an epic storyline.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Street Surfer</h3>
            <p className="text-gray-700">
              A high-octane adventure where players escape through bustling city streets, evading obstacles 
              and performing jaw-dropping stunts.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Jetstream Juggernaut</h3>
            <p className="text-gray-700">
              A futuristic battle game where players soar through breathtaking landscapes, engaging in 
              heart-pounding aerial combat.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Missile Mayhem</h3>
            <p className="text-gray-700">
              An adrenaline-fueled escape game where players navigate through a maze of deadly missiles, 
              each one a ticking time bomb waiting to explode.
            </p>
          </div>
        </div>
      </section>

      {/* AMIGOS Initiation Challenge */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">AMIGOS Initiation Challenge</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3">Quest Details</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>The Hero's Logbook - Create a GitHub repository</li>
              <li>Cartographer's Vision - Design a map using Unity Engine</li>
              <li>The Blacksmith's Forge - Create a 3D model in Blender</li>
              <li>Traveler's Sketchbook - Create character sketches</li>
              <li>Words of the Prophet - Write a questline</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3">Challenge Overview</h3>
            <p className="text-gray-700">
              The AMIGOS Initiation Challenge is designed to welcome freshers into the AMIGOS community, 
              encouraging creativity, skill development, and teamwork through a series of engaging quests.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 