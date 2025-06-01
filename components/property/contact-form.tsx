"use client";

import { useState } from "react";
import { Property, Agent } from "@/lib/types";
import { FiUser, FiMail, FiPhone, FiMessageSquare } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

interface ContactFormProps {
  property: Property;
  agent: Agent;
}

const ContactForm = ({ property, agent }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: `Hi ${agent.name}, I'm interested in ${property.title} (ID: ${property.id}). Please contact me with more information.`,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when field is edited
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        // Reset form after submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: `Hi ${agent.name}, I'm interested in ${property.title} (ID: ${property.id}). Please contact me with more information.`,
        });
      }, 1500);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-xl font-semibold mb-4">Contact Agent</h2>

      <div className="flex items-center mb-6">
        <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
          <Image src={agent.photo || "/images/agent-placeholder.jpg"} alt={agent.name} fill sizes="64px" className="object-cover" />
        </div>
        <div>
          <h3 className="font-semibold text-lg">{agent.name}</h3>
          <div className="flex items-center text-gray-600">
            <FiPhone className="mr-1" />
            <span>{agent.phone}</span>
          </div>
          <Link href={`/agents/${agent.id}`} className="text-primary hover:text-primary-dark text-sm">
            View Profile
          </Link>
        </div>
      </div>

      {isSubmitted ? (
        <div className="bg-green-50 border border-green-200 rounded-md p-4 text-center">
          <h3 className="text-green-800 font-semibold mb-2">Thank You!</h3>
          <p className="text-green-700">Your message has been sent to {agent.name}. They will contact you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-1">
              Your Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiUser className="text-gray-400" />
              </div>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${errors.name ? "border-red-500" : "border-gray-300"}`}
                placeholder="John Doe"
              />
            </div>
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-1">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiMail className="text-gray-400" />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${errors.email ? "border-red-500" : "border-gray-300"}`}
                placeholder="john@example.com"
              />
            </div>
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 mb-1">
              Phone Number
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiPhone className="text-gray-400" />
              </div>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${errors.phone ? "border-red-500" : "border-gray-300"}`}
                placeholder="(123) 456-7890"
              />
            </div>
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 mb-1">
              Message
            </label>
            <div className="relative">
              <div className="absolute top-3 left-3 pointer-events-none">
                <FiMessageSquare className="text-gray-400" />
              </div>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className={`w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${errors.message ? "border-red-500" : "border-gray-300"}`}
              ></textarea>
            </div>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          <button type="submit" disabled={isSubmitting} className={`w-full bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded-md transition duration-300 ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
