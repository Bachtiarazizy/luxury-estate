"use client";

import Image from "next/image";
import Link from "next/link";
import { FiMapPin, FiPhone, FiClock, FiShield, FiAward, FiZap, FiUser, FiHeart, FiUsers, FiChevronRight } from "react-icons/fi";

const AboutPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="relative h-80 md:h-96 rounded-xl overflow-hidden mb-12">
          <Image
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80"
            alt="LuxuryEstate Office"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">About LuxuryEstate</h1>
              <p className="text-xl max-w-2xl mx-auto">Your trusted partner in finding exceptional properties since 2010</p>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-700 mb-4">
                LuxuryEstate was founded in 2010 with a simple yet powerful vision: to transform the real estate experience by combining exceptional service with innovative technology. What began as a small team of passionate real estate
                professionals has grown into a respected agency serving clients throughout Southern California.
              </p>
              <p className="text-gray-700 mb-4">
                Our journey started when our founders, Sarah Johnson and Michael Rodriguez, recognized that the traditional real estate model wasn&apos;t meeting the evolving needs of modern buyers and sellers. They envisioned an agency
                that would leverage cutting-edge technology while maintaining the personal touch that makes real estate transactions so meaningful.
              </p>
              <p className="text-gray-700">
                Over the years, we&apos;ve helped thousands of clients find their dream homes, make smart investment decisions, and navigate the complex real estate market with confidence. Our commitment to excellence has earned us numerous
                industry awards and, more importantly, the trust and loyalty of our clients.
              </p>
            </div>
            <div className="md:w-1/2 relative h-80 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                alt="LuxuryEstate Founders"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">At LuxuryEstate, our values guide everything we do. They shape our culture, inform our decisions, and define our approach to serving our clients.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ValueCard
              title="Integrity"
              description="We believe in transparency, honesty, and ethical conduct in all our dealings. Our clients trust us with one of their most significant investments, and we honor that trust by always acting in their best interest."
              icon={<FiShield className="w-8 h-8 text-blue-600" />}
            />
            <ValueCard
              title="Excellence"
              description="We strive for excellence in every aspect of our service. From the properties we represent to the marketing materials we create, we maintain the highest standards of quality and professionalism."
              icon={<FiAward className="w-8 h-8 text-blue-600" />}
            />
            <ValueCard
              title="Innovation"
              description="We embrace technology and innovative approaches to enhance the real estate experience. We continuously seek new ways to make buying and selling property more efficient, informed, and enjoyable."
              icon={<FiZap className="w-8 h-8 text-blue-600" />}
            />
            <ValueCard
              title="Client-Centered"
              description="Our clients' needs and goals are at the center of everything we do. We listen carefully, communicate clearly, and tailor our approach to each client's unique situation and preferences."
              icon={<FiUser className="w-8 h-8 text-blue-600" />}
            />
            <ValueCard
              title="Community"
              description="We're committed to the communities we serve. We believe in giving back through volunteer work, charitable contributions, and sustainable business practices that benefit our neighborhoods."
              icon={<FiHeart className="w-8 h-8 text-blue-600" />}
            />
            <ValueCard
              title="Collaboration"
              description="We believe in the power of teamwork. Our agents collaborate rather than compete, sharing knowledge and resources to ensure the best outcomes for our clients."
              icon={<FiUsers className="w-8 h-8 text-blue-600" />}
            />
          </div>
        </div>

        {/* Our Team */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Meet Our Leadership Team</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">Our leadership team brings decades of combined experience in real estate, finance, marketing, and technology to guide our agency&apos;s growth and success.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMember
              name="Sarah Johnson"
              title="Founder & CEO"
              bio="With over 20 years in luxury real estate, Sarah leads our company with vision and expertise. Her commitment to client satisfaction and innovation has shaped our agency's culture."
              imageSrc="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
            />
            <TeamMember
              name="Michael Rodriguez"
              title="Founder & COO"
              bio="Michael oversees our day-to-day operations, ensuring that our processes and systems deliver a seamless experience for clients and agents alike."
              imageSrc="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
            />
            <TeamMember
              name="Emily Chen"
              title="Chief Marketing Officer"
              bio="Emily brings creative vision and data-driven strategies to our marketing efforts, showcasing our properties to their best advantage and building our brand."
              imageSrc="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
            />
          </div>

          <div className="text-center mt-8">
            <Link href="/agents" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200">
              View All Team Members
              <FiChevronRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">We&apos;d love to hear from you. Whether you&apos;re looking to buy, sell, or just have questions about the real estate market, our team is here to help.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ContactCard icon={<FiMapPin className="text-blue-600 text-2xl" />} title="Visit Us" details={["123 Luxury Lane", "Beverly Hills, CA 90210", "United States"]} />
            <ContactCard icon={<FiPhone className="text-blue-600 text-2xl" />} title="Call Us" details={["Main: (310) 555-1234", "Sales: (310) 555-5678", "Support: (310) 555-9012"]} />
            <ContactCard icon={<FiClock className="text-blue-600 text-2xl" />} title="Office Hours" details={["Monday - Friday: 9AM - 6PM", "Saturday: 10AM - 4PM", "Sunday: Closed"]} />
          </div>

          <div className="text-center mt-8">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ValueCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ValueCard = ({ title, description, icon }: ValueCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-center">{title}</h3>
      <p className="text-gray-700 text-center">{description}</p>
    </div>
  );
};

interface TeamMemberProps {
  name: string;
  title: string;
  bio: string;
  imageSrc: string;
}

const TeamMember = ({ name, title, bio, imageSrc }: TeamMemberProps) => {
  return (
    <div className="text-center">
      <div className="relative w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
        <Image src={imageSrc} alt={name} fill sizes="160px" className="object-cover" />
      </div>
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-blue-600 font-medium mb-3">{title}</p>
      <p className="text-gray-700">{bio}</p>
    </div>
  );
};

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  details: string[];
}

const ContactCard = ({ icon, title, details }: ContactCardProps) => {
  return (
    <div className="text-center p-6 bg-gray-50 rounded-lg">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <div className="space-y-2">
        {details.map((detail, index) => (
          <p key={index} className="text-gray-700">
            {detail}
          </p>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
