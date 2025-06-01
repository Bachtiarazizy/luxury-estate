"use client";

import Image from "next/image";
import Link from "next/link";
import { Agent } from "@/lib/types";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

interface AgentCardProps {
  agent: Agent;
  featured?: boolean;
}

const AgentCard = ({ agent, featured = false }: AgentCardProps) => {
  return (
    <div className={`bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl ${featured ? "h-full" : ""}`}>
      {/* Agent Image */}
      <div className="relative h-72 w-full">
        <Image src={agent.photo || "/images/agent-placeholder.jpg"} alt={agent.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
      </div>

      {/* Agent Details */}
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-1">{agent.name}</h3>
        <p className="text-gray-500 mb-4">{agent.specialties.join(" • ")}</p>

        {featured && <p className="text-gray-700 mb-4 line-clamp-3">{agent.bio}</p>}

        <div className="flex items-center mb-3">
          <FiPhone className="text-primary mr-2" />
          <span>{agent.phone}</span>
        </div>

        <div className="flex items-center mb-4">
          <FiMail className="text-primary mr-2" />
          <span>{agent.email}</span>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-3 mb-4">
          {agent.socialMedia.facebook && <SocialLink href={agent.socialMedia.facebook} icon={<FaFacebookF />} label="Facebook" />}
          {agent.socialMedia.twitter && <SocialLink href={agent.socialMedia.twitter} icon={<FaTwitter />} label="Twitter" />}
          {agent.socialMedia.instagram && <SocialLink href={agent.socialMedia.instagram} icon={<FaInstagram />} label="Instagram" />}
          {agent.socialMedia.linkedin && <SocialLink href={agent.socialMedia.linkedin} icon={<FaLinkedinIn />} label="LinkedIn" />}
        </div>

        <Link href={`/agents/${agent.id}`} className="block w-full text-center bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded-md transition duration-300">
          View Profile
        </Link>
      </div>
    </div>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink = ({ href, icon, label }: SocialLinkProps) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="bg-gray-100 hover:bg-primary hover:text-white transition-colors duration-300 h-8 w-8 rounded-full flex items-center justify-center text-gray-600" aria-label={label}>
    {icon}
  </a>
);

export default AgentCard;
