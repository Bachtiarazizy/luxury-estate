import BlogPostPage from "@/components/blog/blog-post-page";

interface BlogPostProps {
  params: {
    slug: string;
  };
}

export default function BlogPost({ params }: BlogPostProps) {
  return <BlogPostPage slug={params.slug} />;
}
