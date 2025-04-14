"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Shield, Smartphone, Flame, Code } from "lucide-react"

export default function CurrentCourses() {
  const courses = [
    {
      id: 1,
      title: "Ethical Hacking Bootcamp",
      provider: "Udemy",
      progress: 18,
      icon: Shield,
      category: "Security",
      lastActivity: "Today",
      estimatedCompletion: "July 15, 2025",
    },
    {
      id: 2,
      title: "React Native Masterclass",
      provider: "EarlyCodes Academy",
      progress: 42,
      icon: Smartphone,
      category: "Mobile",
      lastActivity: "Yesterday",
      estimatedCompletion: "June 10, 2025",
    },
    {
      id: 3,
      title: "Firebase & Cloud Functions",
      provider: "Fireship.io",
      progress: 25,
      icon: Flame,
      category: "Backend",
      lastActivity: "3 days ago",
      estimatedCompletion: "August 5, 2025",
    },
    {
      id: 4,
      title: "TypeScript Advanced Concepts",
      provider: "Frontend Masters",
      progress: 35,
      icon: Code,
      category: "Frontend",
      lastActivity: "Today",
      estimatedCompletion: "May 30, 2025",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Current Courses</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {courses.map((course) => (
          <div key={course.id} className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 p-2 rounded-md text-primary">
                <course.icon className="h-5 w-5" />
              </div>
              <div className="space-y-1 flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">{course.title}</h3>
                  <Badge variant="outline">{course.category}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">{course.provider}</p>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>Progress</span>
                <span>{course.progress}%</span>
              </div>
              <Progress value={course.progress} className="h-2" />
            </div>

            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Last activity: {course.lastActivity}</span>
              <span>Est. completion: {course.estimatedCompletion}</span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
