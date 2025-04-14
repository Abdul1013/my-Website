"use client"

import { useState } from "react"
import { Calendar, Clock, BookOpen, Target, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function DashboardHeader() {
  const [lastUpdated] = useState(new Date())

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold mb-2">Learning Dashboard</h1>
          <p className="text-muted-foreground">
            Track my learning journey, course progress, and development goals in real-time
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <Share2 className="h-4 w-4" />
            Share
          </Button>
          <Button size="sm" className="gap-2">
            <BookOpen className="h-4 w-4" />
            Learning Journal
          </Button>
        </div>
      </div>

      <Card className="border border-muted/40">
        <CardContent className="p-4">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>
                Last updated:{" "}
                {lastUpdated.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>Study time: 342 hours</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Target className="h-4 w-4" />
              <span>Current focus:</span>
              <Badge variant="secondary" className="ml-1">
                Ethical Hacking
              </Badge>
              <Badge variant="secondary">React Native</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
