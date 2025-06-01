"use client";

import AgentCard from "@/components/agents/agent-card";
import Hero from "@/components/home/hero";
import PropertyCard from "@/components/properties/property-card";
import { getFeaturedAgents, getFeaturedProperties, getRecentBlogPosts } from "@/lib/data";
import { BadgeDollarSign, Building2, Handshake, Headset } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const FeaturedProperties = () => {
  const featuredProperties = getFeaturedProperties();

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Properties</h2>
            <p className="text-gray-600">Explore our handpicked selection of premium properties</p>
          </div>
          <Link href="/properties" className="inline-flex items-center mt-4 md:mt-0 text-primary hover:text-primary-dark font-semibold transition-colors duration-300">
            View All Properties
            <FiArrowRight className="ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.slice(0, 3).map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturedAgents = () => {
  const featuredAgents = getFeaturedAgents();

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Meet Our Agents</h2>
            <p className="text-gray-600">Our team of experienced professionals is here to help you</p>
          </div>
          <Link href="/agents" className="inline-flex items-center mt-4 md:mt-0 text-primary hover:text-primary-dark font-semibold transition-colors duration-300">
            View All Agents
            <FiArrowRight className="ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredAgents.slice(0, 3).map((agent) => (
            <AgentCard key={agent.id} agent={agent} featured={true} />
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Building2 className="w-8 h-8 text-primary" />,
      title: "Years of Experience",
      description: "With over 15 years in the real estate market, we bring unparalleled expertise to every transaction.",
    },
    {
      icon: <BadgeDollarSign className="w-8 h-8 text-primary" />,
      title: "Exclusive Listings",
      description: "Access properties you won't find anywhere else, from luxury estates to hidden gems.",
    },
    {
      icon: <Headset className="w-8 h-8 text-primary" />,
      title: "24/7 Support",
      description: "Our dedicated team is always available to address your questions and concerns.",
    },
    {
      icon: <Handshake className="w-8 h-8 text-primary" />,
      title: "Expert Negotiation",
      description: "We secure the best possible terms and prices for our clients through skilled negotiation.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">We&apos;re committed to providing exceptional service and results for all your real estate needs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const RecentBlogPosts = () => {
  const recentPosts = getRecentBlogPosts();

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Latest from Our Blog</h2>
            <p className="text-gray-600">Tips, trends, and insights from the world of real estate</p>
          </div>
          <Link href="/blog" className="inline-flex items-center mt-4 md:mt-0 text-primary hover:text-primary-dark font-semibold transition-colors duration-300">
            View All Posts
            <FiArrowRight className="ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-48 w-full">
                <Image src={post.coverImage || "/images/blog-placeholder.jpg"} alt={post.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
              </div>
              <div className="p-5">
                <div className="flex items-center mb-3">
                  <div className="relative h-8 w-8 rounded-full overflow-hidden mr-3">
                    <Image src={post.authorImage || "/images/author-placeholder.jpg"} alt={post.author} fill sizes="32px" className="object-cover" />
                  </div>
                  <span className="text-sm text-gray-600">{post.author}</span>
                  <span className="mx-2 text-gray-400">•</span>
                  <span className="text-sm text-gray-600">{new Date(post.publishedDate).toLocaleDateString()}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-primary hover:text-primary-dark font-semibold transition-colors duration-300">
                  Read More
                  <FiArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CallToAction = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Find Your Dream Home?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">Let us help you navigate the market and discover the perfect property that meets all your needs.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/properties" className="bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-6 rounded-md transition duration-300">
            Browse Properties
          </Link>
          <Link href="/contact" className="bg-transparent hover:bg-white/10 border border-white text-white font-semibold py-3 px-6 rounded-md transition duration-300">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedProperties />
      <WhyChooseUs />
      <FeaturedAgents />
      <RecentBlogPosts />
      <CallToAction />
    </>
  );
};

export default HomePage;
