"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getBlogPostBySlug } from "@/lib/data";
import { BlogPost } from "@/lib/types";
import { FiCalendar, FiTag, FiArrowLeft } from "react-icons/fi";

interface BlogPostPageProps {
  slug: string;
}

const BlogPostPage = ({ slug }: BlogPostPageProps) => {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real application, this would be an API call
    const fetchPostData = () => {
      setLoading(true);

      const postData = getBlogPostBySlug(slug);

      if (postData) {
        setPost(postData);
      }

      setLoading(false);
    };

    fetchPostData();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="text-gray-600 mb-6">The blog post you are looking for does not exist or has been removed.</p>
            <Link href="/blog" className="inline-flex items-center text-primary hover:text-primary-dark font-semibold">
              <FiArrowLeft className="mr-2" />
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link href="/blog" className="inline-flex items-center text-primary hover:text-primary-dark font-semibold">
            <FiArrowLeft className="mr-2" />
            Back to Blog
          </Link>
        </div>

        {/* Cover Image */}
        <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8">
          <Image src={post.coverImage || "/images/blog-placeholder.jpg"} alt={post.title} fill sizes="100vw" className="object-cover" />
        </div>

        {/* Post Header */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="mb-6">
            <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">{post.category}</span>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>

            <div className="flex flex-wrap items-center text-gray-600 gap-4">
              <div className="flex items-center">
                <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
                  <Image src={post.authorImage || "/images/author-placeholder.jpg"} alt={post.author} fill sizes="40px" className="object-cover" />
                </div>
                <span>{post.author}</span>
              </div>

              <div className="flex items-center">
                <FiCalendar className="mr-2" />
                <span>{new Date(post.publishedDate).toLocaleDateString()}</span>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            {/* Render the content as markdown or HTML */}
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* Tags */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex items-center flex-wrap gap-2">
              <FiTag className="text-gray-500" />
              {post.tags.map((tag, index) => (
                <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
