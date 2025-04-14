"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, BookOpen, Award, Target } from "lucide-react"

export default function LearningStats() {
  const stats = [
    {
      title: "Study Hours",
      value: "342",
      change: "+18% from last month",
      icon: Clock,
      trend: "up",
    },
    {
      title: "Courses Completed",
      value: "7",
      change: "+2 this quarter",
      icon: BookOpen,
      trend: "up",
    },
    {
      title: "Certifications",
      value: "0",
      change: "stagnant",
      icon: Award,
      trend: "down",
    },
    {
      title: "Goals Completed",
      value: "24/30",
      change: "80% completion rate",
      icon: Target,
      trend: "neutral",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Learning Stats</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="bg-primary/10 p-2 rounded-md text-primary">
                  <stat.icon className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium">{stat.title}</span>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold">{stat.value}</p>
                <p
                  className={`text-xs ${
                    stat.trend === "up"
                      ? "text-green-500"
                      : stat.trend === "down"
                        ? "text-red-500"
                        : "text-muted-foreground"
                  }`}
                >
                  {stat.change}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
