import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/hero"));
const About = dynamic(() => import("@/components/about"));
const Skills = dynamic(() => import("@/components/skills"));
const SkillSection = dynamic(() => import("@/components/skillSection"));
const Projects = dynamic(() => import("@/components/projects"));
const Blog = dynamic(() => import("@/components/blog"));
const Contact = dynamic(() => import("@/components/contact"));

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <SkillSection />
      <Projects />
      <Blog />
      <Contact />
    </main>
  );
}
