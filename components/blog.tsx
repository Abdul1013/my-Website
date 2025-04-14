"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { ChatBot } from "./chat-bot";

export default function Blog() {
  const [showChatbot, setShowChatbot] = useState(false);

  const blogPosts = [
    {
      id: 1,
      title: "Building Secure Web Applications: Best Practices",
      excerpt:
        "Learn the essential security practices every developer should implement to protect web applications from common vulnerabilities.",
      // image: "/placeholder.svg?height=300&width=500",
      date: "April 10, 2025",
      readTime: "8 min read",
      category: "Security",
      slug: "building-secure-web-applications",
    },
    {
      id: 2,
      title: "Integrating AI Features into Your Next.js Application",
      excerpt:
        "A step-by-step guide to adding AI-powered features to your Next.js projects using the latest AI SDKs and APIs.",
      // image: "/placeholder.svg?height=300&width=500",
      date: "March 25, 2025",
      readTime: "12 min read",
      category: "AI",
      slug: "integrating-ai-features-nextjs",
    },
    // {
    //   id: 3,
    //   title: "The Future of Mobile Development in Africa",
    //   excerpt:
    //     "Exploring the growing mobile development ecosystem in Africa and opportunities for developers in the region.",
    //   image: "/placeholder.svg?height=300&width=500",
    //   date: "March 15, 2025",
    //   readTime: "10 min read",
    //   category: "Mobile",
    //   slug: "future-mobile-development-africa",
    // },
    // {
    //   id: 4,
    //   title: "Optimizing React Performance: Advanced Techniques",
    //   excerpt: "Dive into advanced optimization strategies to make your React applications blazing fast.",
    //   image: "/placeholder.svg?height=300&width=500",
    //   date: "February 28, 2025",
    //   readTime: "15 min read",
    //   category: "React",
    //   slug: "optimizing-react-performance",
    // },
  ];
  // const filteredPosts = searchQuery
  //     ? blogPosts.filter(
  //         (post) =>
  //           post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //           post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //           post.category.toLowerCase().includes(searchQuery.toLowerCase()),
  //       )
  //     : blogPosts

  return (
    <section id="blog" className="section-container bg-muted/30">
      <h2 className="section-heading fade-in">Blog & Insights</h2>
      <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto fade-in">
        No time? No wahala. One Min Tech Read gives you tech sauce in 60 secs
        Sharing my thoughts, experiences, and knowledge as a nigeria techie
        trends.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {/* {filteredPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="blog-card"
          >
            <Card className="h-full flex flex-col overflow-hidden">
              <div className="relative h-48 w-full overflow-hidden">

                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary hover:bg-primary/90">{post.category}</Badge>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar size={14} />
                  <span>{post.date}</span>
                  <Separator orientation="vertical" className="h-4" />
                  <Clock size={14} />
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold hover:text-primary transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
              </CardHeader>

              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{post.excerpt}</p>
              </CardContent>

              <CardFooter className="pt-2 border-t">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Abdulrasheed" />
                      <AvatarFallback>AO</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">Abdulrasheed Olabanji</span>
                  </div>

                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/blog/${post.slug}`} className="flex items-center gap-1">
                      <span>Read more</span>
                      <ArrowRight size={14} />
                    </Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))} */}
      </div>

      

      <div className="mt-12 text-center fade-in">
        <Button asChild>
          <Link href="/blog">View All Articles</Link>
        </Button>
      </div>

      <div className="mt-16 bg-primary/5 rounded-lg p-6 max-w-3xl mx-auto fade-in">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-2">
              Have questions about my articles or projects?
            </h3>
            <p className="text-muted-foreground">
              Try my AI-powered assistant that can answer questions about my
              work, technologies, and more.
            </p>
          </div>

          <Button
            onClick={() => setShowChatbot(true)}
            className="flex items-center gap-2"
          >
            <MessageCircle size={18} />
            <span>Chat with AI Assistant</span>
          </Button>
        </div>
      </div>

      {showChatbot && <ChatBot onClose={() => setShowChatbot(false)} />}
    </section>
  );
}
