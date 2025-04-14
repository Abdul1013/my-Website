"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle2, Circle, Clock, CalendarDays } from "lucide-react"

export default function RoadmapSprints() {
  const [activeTab, setActiveTab] = useState("current")

  const sprints = {
    current: {
      name: "Sprint 3: Advanced Frontend & Security",
      dateRange: "May 15 - August 13, 2025",
      progress: 42,
      daysLeft: 52,
      goals: [
        { id: 1, name: "Complete Ethical Hacking Certification", completed: false },
        { id: 2, name: "Build 3 React Native mobile applications", completed: false },
        { id: 3, name: "Master TypeScript generics and advanced types", completed: true },
        { id: 4, name: "Implement Firebase authentication in portfolio", completed: true },
        { id: 5, name: "Contribute to 2 open-source security projects", completed: false },
      ],
    },
    previous: {
      name: "Sprint 2: Backend & Database Mastery",
      dateRange: "February 15 - May 14, 2025",
      progress: 100,
      daysLeft: 0,
      goals: [
        { id: 1, name: "Build REST API with Node.js and Express", completed: true },
        { id: 2, name: "Master MongoDB aggregation pipeline", completed: true },
        { id: 3, name: "Implement real-time database with Firebase", completed: true },
        { id: 4, name: "Deploy serverless functions on Vercel", completed: true },
        { id: 5, name: "Create database schema for e-commerce platform", completed: true },
      ],
    },
    next: {
      name: "Sprint 4: AI Integration & Cloud Architecture",
      dateRange: "August 14 - November 12, 2025",
      progress: 0,
      daysLeft: 142,
      goals: [
        { id: 1, name: "Complete AWS Solutions Architect certification", completed: false },
        { id: 2, name: "Build ML-powered recommendation system", completed: false },
        { id: 3, name: "Implement CI/CD pipeline with GitHub Actions", completed: false },
        { id: 4, name: "Develop serverless architecture for scalable app", completed: false },
        { id: 5, name: "Create AI chatbot with natural language processing", completed: false },
      ],
    },
  }

  const currentSprint = sprints[activeTab]

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold">90-Day Roadmap Sprints</CardTitle>
          <Tabs defaultValue="current" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3" style={{ maxWidth: "300px" }}>
              <TabsTrigger value="previous">Previous</TabsTrigger>
              <TabsTrigger value="current">Current</TabsTrigger>
              <TabsTrigger value="next">Next</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium">{currentSprint.name}</h3>
            <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
              <CalendarDays className="h-4 w-4" />
              <span>{currentSprint.dateRange}</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span>{currentSprint.progress}%</span>
            </div>
            <Progress value={currentSprint.progress} className="h-2" />

            {currentSprint.daysLeft > 0 && (
              <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                <Clock className="h-3.5 w-3.5" />
                <span>{currentSprint.daysLeft} days remaining</span>
              </div>
            )}
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">Sprint Goals</h4>
            <ul className="space-y-2">
              {currentSprint.goals.map((goal) => (
                <li key={goal.id} className="flex items-start gap-2">
                  {goal.completed ? (
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  ) : (
                    <Circle className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                  )}
                  <span className={goal.completed ? "line-through text-muted-foreground" : ""}>{goal.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
