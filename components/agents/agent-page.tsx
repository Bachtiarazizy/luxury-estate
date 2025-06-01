"use client";

import { useState } from "react";
import { agents } from "@/lib/data";
import { FiSearch } from "react-icons/fi";
import AgentCard from "./agent-card";

const AgentsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("");

  // Get unique specialties from all agents
  const allSpecialties = Array.from(new Set(agents.flatMap((agent) => agent.specialties))).sort();

  // Filter agents based on search term and specialty
  const filteredAgents = agents.filter((agent) => {
    const matchesSearch = searchTerm === "" || agent.name.toLowerCase().includes(searchTerm.toLowerCase()) || agent.bio.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesSpecialty = selectedSpecialty === "" || agent.specialties.includes(selectedSpecialty);

    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Our Real Estate Agents</h1>
          <p className="text-gray-600">Meet our team of experienced professionals dedicated to helping you find your perfect property</p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Search Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search agents by name or expertise..."
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Specialty Filter */}
            <div>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" value={selectedSpecialty} onChange={(e) => setSelectedSpecialty(e.target.value)}>
                <option value="">All Specialties</option>
                {allSpecialties.map((specialty) => (
                  <option key={specialty} value={specialty}>
                    {specialty}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Agents Grid */}
        {filteredAgents.length === 0 ? (
          <div className="bg-white rounded-lg p-8 text-center shadow-sm">
            <h3 className="text-xl font-semibold mb-2">No agents found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search criteria to find our agents.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAgents.map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AgentsPage;
