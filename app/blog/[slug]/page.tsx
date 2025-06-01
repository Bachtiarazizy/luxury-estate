import BlogPostPage from "@/components/blog/blog-post-page";

interface BlogPostProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params;
  return <BlogPostPage slug={slug} />;
}
