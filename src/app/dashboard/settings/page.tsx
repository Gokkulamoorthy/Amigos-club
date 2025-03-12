"use client";

import CyberHeading from "@/components/ui/CyberHeading";
import CyberButton from "@/components/ui/CyberButton";

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <CyberHeading level={1} glitch>SETTINGS</CyberHeading>

      <div className="grid grid-cols-1 gap-6">
        {/* Profile Settings */}
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-blue to-neon-pink opacity-20 blur"></div>
          <div className="relative p-6 bg-cyber-darker/80 border border-neon-blue/20 rounded-lg backdrop-blur-sm">
            <h2 className="text-xl font-gaming text-neon-blue mb-6">PROFILE_SETTINGS</h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-cyber-gray-400 text-sm">DISPLAY_NAME</label>
                  <input
                    type="text"
                    className="w-full bg-cyber-darker border border-neon-blue/30 rounded-lg px-4 py-2 text-neon-blue focus:border-neon-blue focus:ring-1 focus:ring-neon-blue outline-none"
                    defaultValue="Gokkulamoorthy S R"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-cyber-gray-400 text-sm">EMAIL</label>
                  <input
                    type="email"
                    className="w-full bg-cyber-darker border border-neon-blue/30 rounded-lg px-4 py-2 text-neon-blue focus:border-neon-blue focus:ring-1 focus:ring-neon-blue outline-none"
                    defaultValue="gsr@amigos.tech"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-cyber-gray-400 text-sm">BIO</label>
                <textarea
                  className="w-full bg-cyber-darker border border-neon-blue/30 rounded-lg px-4 py-2 text-neon-blue focus:border-neon-blue focus:ring-1 focus:ring-neon-blue outline-none h-24"
                  defaultValue="Cyber specialist and game developer."
                />
              </div>
            </div>
          </div>
        </div>

        {/* Preferences */}
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-blue to-neon-pink opacity-20 blur"></div>
          <div className="relative p-6 bg-cyber-darker/80 border border-neon-blue/20 rounded-lg backdrop-blur-sm">
            <h2 className="text-xl font-gaming text-neon-blue mb-6">PREFERENCES</h2>
            <div className="space-y-6">
              {[
                { label: "ENABLE_NOTIFICATIONS", description: "Receive notifications for events and updates" },
                { label: "SHOW_ONLINE_STATUS", description: "Display your online status to other members" },
                { label: "ENABLE_2FA", description: "Enable two-factor authentication for enhanced security" },
              ].map((setting, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <h3 className="text-neon-blue font-gaming">{setting.label}</h3>
                    <p className="text-cyber-gray-400 text-sm">{setting.description}</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked={index !== 2} />
                    <div className="w-11 h-6 bg-cyber-darker peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-neon-blue after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-neon-blue/20"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-red to-neon-pink opacity-20 blur"></div>
          <div className="relative p-6 bg-cyber-darker/80 border border-neon-red/20 rounded-lg backdrop-blur-sm">
            <h2 className="text-xl font-gaming text-neon-red mb-6">DANGER_ZONE</h2>
            <div className="space-y-4">
              <p className="text-cyber-gray-400">These actions are irreversible. Please proceed with caution.</p>
              <div className="flex space-x-4">
                <CyberButton variant="danger" size="sm">
                  DELETE_ACCOUNT
                </CyberButton>
              </div>
            </div>
          </div>
        </div>

        {/* Save Changes */}
        <div className="flex justify-end space-x-4">
          <CyberButton variant="secondary" size="sm">
            RESET
          </CyberButton>
          <CyberButton variant="primary" size="sm">
            SAVE_CHANGES
          </CyberButton>
        </div>
      </div>
    </div>
  );
} 
 