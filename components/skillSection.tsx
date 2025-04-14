"use client";

import { Progress } from "@/components/ui/progress";

const skills = [
  { name: "React", level: 75 },
  { name: "Next.js", level: 60 },
  { name: "TypeScript", level: 25 },
  { name: "Node.js", level: 40 },
  { name: "GraphQL", level: 45 },
  { name: "Security Auditing", level: 15 },
  { name: "React Native", level: 65 },
  { name: "AI Integration", level: 45 },
  { name: "Python Automation", level: 50 },
];

export default function SkillSection() {
  return (
    <section className="pb-20 bg-muted/50 container px-4 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between">
              <span className="font-medium">{skill.name}</span>
              <span className="text-sm text-slate-500">{skill.level}%</span>
            </div>
            <Progress value={skill.level} className="h-2" />
          </div>
        ))}
      </div>
    </section>
  );
}
