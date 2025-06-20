"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Code, Lightbulb } from "lucide-react";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-container">
      <h2 className="section-heading fade-in">About Me</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-lg">
            I'm a builder with a passion for engineering impactful digital
            solutions. I specialize in creating smart, secure, scalable, and
            maintainable systems, with a strong focus on crafting user-friendly
            interfaces that elevate user experiences. Currently, I'm exploring
            the frontier of AI integration, working hands-on with cutting-edge
            tools to develop intelligent, future-ready applications. From small
            startups to large-scale enterprises, I build custom solutions
            tailored to real business needs. I'm driven by a mission to solve
            real-world problems through technology—delivering meaningful value
            and transformative change both locally and globally. Let’s build the
            future, one line of code at a time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="fade-in">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Technical Excellence</h3>
                <p>
                  Committed to writing clean, efficient, and maintainable code
                  that follows best practices & engineering principles
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="fade-in">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Problem Solver</h3>
                <p>
                  Analytical thinker who enjoys tackling complex challenges and
                  finding innovative solutions with latest technologies to
                  deliver industry standard solutions.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
