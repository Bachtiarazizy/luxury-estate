"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/data";
import { FiSearch, FiCalendar } from "react-icons/fi";

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Get unique categories from all blog posts
  const categories = Array.from(new Set(blogPosts.map((post) => post.category))).sort();

  // Filter blog posts based on search term and category
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = searchTerm === "" || post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) || post.content.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCategory === "" || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Our Blog</h1>
          <p className="text-gray-600">Tips, trends, and insights from the world of real estate</p>
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
                placeholder="Search articles..."
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <div>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length === 0 ? (
          <div className="bg-white rounded-lg p-8 text-center shadow-sm">
            <h3 className="text-xl font-semibold mb-2">No articles found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search criteria to find our blog posts.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

interface BlogPostCardProps {
  post: {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    author: string;
    authorImage: string;
    coverImage: string;
    publishedDate: string;
    category: string;
    tags: string[];
  };
}

const BlogPostCard = ({ post }: BlogPostCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Cover Image */}
      <div className="relative h-48 w-full">
        <Image src={post.coverImage || "/images/blog-placeholder.jpg"} alt={post.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
        <div className="absolute top-4 left-4">
          <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">{post.category}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2 line-clamp-2">
          <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors duration-300">
            {post.title}
          </Link>
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>

        <div className="flex items-center mb-4">
          <div className="relative h-8 w-8 rounded-full overflow-hidden mr-3">
            <Image src={post.authorImage || "/images/author-placeholder.jpg"} alt={post.author} fill sizes="32px" className="object-cover" />
          </div>
          <span className="text-sm text-gray-600">{post.author}</span>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <FiCalendar className="mr-1" />
            <span>{new Date(post.publishedDate).toLocaleDateString()}</span>
          </div>

          <Link href={`/blog/${post.slug}`} className="text-primary hover:text-primary-dark font-semibold transition-colors duration-300">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
