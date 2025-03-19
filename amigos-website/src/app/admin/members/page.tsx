"use client";

import { useState } from "react";

interface Member {
  id: string;
  name: string;
  email: string;
  role: "ADMIN" | "MEMBER";
  status: "ACTIVE" | "INACTIVE";
  joinedAt: string;
}

export default function MembersPage() {
  const [members, setMembers] = useState<Member[]>([
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      role: "ADMIN",
      status: "ACTIVE",
      joinedAt: "2024-01-01",
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      role: "MEMBER",
      status: "ACTIVE",
      joinedAt: "2024-02-15",
    },
    // Add more mock data as needed
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState<"ALL" | "ADMIN" | "MEMBER">("ALL");
  const [filterStatus, setFilterStatus] = useState<"ALL" | "ACTIVE" | "INACTIVE">("ALL");

  const filteredMembers = members.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === "ALL" || member.role === filterRole;
    const matchesStatus = filterStatus === "ALL" || member.status === filterStatus;
    return matchesSearch && matchesRole && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-neon-blue">MEMBERS_MANAGEMENT</h1>
        <button className="px-4 py-2 bg-neon-blue text-cyber-black rounded-lg hover:bg-neon-blue/90 transition-colors">
          ADD_MEMBER
        </button>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="SEARCH_MEMBERS..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 bg-cyber-black/50 border border-neon-blue/20 rounded-lg text-white placeholder-cyber-gray-400 focus:outline-none focus:border-neon-blue"
        />
        <select
          value={filterRole}
          onChange={(e) => setFilterRole(e.target.value as any)}
          className="px-4 py-2 bg-cyber-black/50 border border-neon-blue/20 rounded-lg text-white focus:outline-none focus:border-neon-blue"
        >
          <option value="ALL">ALL_ROLES</option>
          <option value="ADMIN">ADMIN</option>
          <option value="MEMBER">MEMBER</option>
        </select>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value as any)}
          className="px-4 py-2 bg-cyber-black/50 border border-neon-blue/20 rounded-lg text-white focus:outline-none focus:border-neon-blue"
        >
          <option value="ALL">ALL_STATUS</option>
          <option value="ACTIVE">ACTIVE</option>
          <option value="INACTIVE">INACTIVE</option>
        </select>
      </div>

      {/* Members Table */}
      <div className="bg-cyber-black/50 rounded-lg border border-neon-blue/20 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-neon-blue/20">
              <th className="px-6 py-3 text-left text-cyber-gray-400">NAME</th>
              <th className="px-6 py-3 text-left text-cyber-gray-400">EMAIL</th>
              <th className="px-6 py-3 text-left text-cyber-gray-400">ROLE</th>
              <th className="px-6 py-3 text-left text-cyber-gray-400">STATUS</th>
              <th className="px-6 py-3 text-left text-cyber-gray-400">JOINED</th>
              <th className="px-6 py-3 text-left text-cyber-gray-400">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {filteredMembers.map((member) => (
              <tr
                key={member.id}
                className="border-b border-neon-blue/10 hover:bg-cyber-black/30"
              >
                <td className="px-6 py-4 text-white">{member.name}</td>
                <td className="px-6 py-4 text-cyber-gray-300">{member.email}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      member.role === "ADMIN"
                        ? "bg-neon-blue/20 text-neon-blue"
                        : "bg-neon-purple/20 text-neon-purple"
                    }`}
                  >
                    {member.role}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      member.status === "ACTIVE"
                        ? "bg-neon-green/20 text-neon-green"
                        : "bg-neon-red/20 text-neon-red"
                    }`}
                  >
                    {member.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-cyber-gray-300">
                  {new Date(member.joinedAt).toLocaleDateString()}
                </td>
                <td className="px-6 py-4">
                  <div className="flex space-x-2">
                    <button className="text-neon-blue hover:text-neon-blue/80">
                      EDIT
                    </button>
                    <button className="text-neon-red hover:text-neon-red/80">
                      DELETE
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 