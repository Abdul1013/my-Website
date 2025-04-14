"use client";

import { useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code2,
  Layout,
  Shield,
  Smartphone,
  GitBranch,
  Workflow,
  Cpu,
} from "lucide-react";

export default function Skills() {
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

  const skillCategories = [
    {
      id: "development",
      name: "Development",
      icon: <Code2 className="h-5 w-5" />,
      skills: [
        {
          title: "Web App Development",
          icon: <Layout className="h-6 w-6 text-primary" />,
          description:
            "Full-stack web developer with expertise in building responsive, intuitive interfaces using modern frameworks like React, and crafting user-centered UI/UX designs. Skilled in developing robust backend systems with RESTful APIs, managing databases, implementing authentication, and enforcing security best practices to ensure scalable and secure applications.",
          technologies: [
            "React.js",
            "Next.js",
            "Tailwind CSS",
            "Node.js",
            "Django",
            "Express",
            "MongoDB",
            "PostgreSQL",
            "Firebase",
            "RESTful APIs",
          ],
        },

        {
          title: "Mobile Development",
          icon: <Smartphone className="h-6 w-6 text-primary" />,
          description:
            "Proficient in building responsive, high-performance mobile applications with a focus on cross-platform development using React Native and Expo. Experienced in crafting intuitive, user-centric interfaces that deliver consistent functionality and seamless user experiences across both iOS and Android devices, optimizing performance, and managing app deployment pipelines.",
          technologies: [
            "React Native",
            "Firebase",
            "Mobile UI/UX",
            "Expo Go",
          ],
        },
      ],
    },
    {
      id: "specialties",
      name: "Specialties",
      icon: <Cpu className="h-5 w-5" />,
      skills: [
        {
          title: "AI Integration",
          icon: <Cpu className="h-6 w-6 text-primary" />,
          description:
            "Experience integrating AI capabilities into applications, including natural language processing, computer vision, and recommendation systems.",
          technologies: [
            "OpenAI API",
            "RAG",
            "Pinecone",
            "Automation with Python",
            "prompt Engineering",
          ],
        },
        {
          title: "Cybersecurity",
          icon: <Shield className="h-6 w-6 text-primary" />,
          description:
            "Knowledgeable in secure coding practices, encryption, and vulnerability assessments. Experience with security protocols to protect applications from common threats.",
          technologies: [
            "Secure Coding",
            "Authentication",
            "Authorization",
            "Data Encryption",
            "Security Audits",
          ],
        },
      ],
    },
    {
      id: "workflow",
      name: "Workflow",
      icon: <Workflow className="h-5 w-5" />,
      skills: [
        {
          title: "Project Management",
          icon: <Workflow className="h-6 w-6 text-primary" />,
          description:
            "Experienced in leading projects using Agile methodologies, ensuring iterative development and frequent client feedback. Skilled in sprint planning, task management, and team collaboration.",
          technologies: ["Agile", "Scrum", "Kanban", "Jira", "Trello", "Slack"],
        },
        {
          title: "Version Control",
          icon: <GitBranch className="h-6 w-6 text-primary" />,
          description:
            "Proficient in using Git and GitHub for version control, managing branches, handling pull requests, and resolving merge conflicts. Strong advocate for maintaining clean, trackable code commits.",
          technologies: [
            "Git",
            "GitHub",
            "GitLab",
            "Branching Strategies",
            "Code Reviews",
          ],
        },
      ],
    },
  ];

  return (
    <div id="skills" className="section-container bg-muted/50">
      <h2 className="section-heading fade-in">Skills & Expertise</h2>

      <Tabs defaultValue="development" className="w-full fade-in">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          {skillCategories.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.id}
              className="flex items-center gap-2"
            >
              {category.icon}
              <span className="hidden sm:inline">{category.name}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {skillCategories.map((category) => (
          <TabsContent
            key={category.id}
            value={category.id}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.skills.map((skill, index) => (
                <div key={skill.title} className="animate-fadeIn">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-full bg-primary/10 shrink-0">
                          {skill.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">
                            {skill.title}
                          </h3>
                          <p className="text-muted-foreground mb-4">
                            {skill.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {skill.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="text-sm px-2 py-1 bg-primary/10 rounded-full text-primary"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
