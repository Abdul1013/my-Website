"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GitBranch, GitCommit, GitPullRequest, Star } from "lucide-react"

export default function GitHubContributions() {
  const [activeTab, setActiveTab] = useState("contributions")

  // Generate random contribution data for the heatmap
  const generateContributions = () => {
    const contributions = []
    const today = new Date()

    for (let i = 0; i < 365; i++) {
      const date = new Date(today)
      date.setDate(date.getDate() - (364 - i))

      // Random contribution count (weighted to have more recent activity)
      let count = 0
      const recency = i / 364 // 0 to 1 where 1 is most recent

      if (Math.random() < 0.3 + recency * 0.4) {
        count = Math.floor(Math.random() * 10) + 1

        // Higher chance of more contributions for recent days
        if (recency > 0.8 && Math.random() > 0.5) {
          count += Math.floor(Math.random() * 10)
        }
      }

      contributions.push({
        date: date.toISOString().split("T")[0],
        count,
      })
    }

    return contributions
  }

  const contributions = generateContributions()

  // Calculate intensity level (0-4) for heatmap coloring
  const getIntensityLevel = (count) => {
    if (count === 0) return 0
    if (count <= 2) return 1
    if (count <= 5) return 2
    if (count <= 8) return 3
    return 4
  }

  // Group contributions by week for the heatmap
  const weeks = []
  for (let i = 0; i < 53; i++) {
    const weekStart = i * 7
    weeks.push(contributions.slice(weekStart, weekStart + 7))
  }

  // Calculate stats
  const totalContributions = contributions.reduce((sum, day) => sum + day.count, 0)
  const currentStreak = (() => {
    let streak = 0
    for (let i = contributions.length - 1; i >= 0; i--) {
      if (contributions[i].count > 0) streak++
      else break
    }
    return streak
  })()

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold">GitHub Activity</CardTitle>
          <Tabs defaultValue="contributions" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2" style={{ maxWidth: "240px" }}>
              <TabsTrigger value="contributions">Contributions</TabsTrigger>
              <TabsTrigger value="stats">Stats</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </CardHeader>
      <CardContent>
        <TabsContent value="contributions" className="mt-0 space-y-4">
          <div className="overflow-x-auto pb-2">
            <div className="min-w-[640px]">
              <div className="flex mb-1 text-xs text-muted-foreground justify-end gap-[3px]">
                <div style={{ width: "10px" }}></div>
                {["", "Mon", "", "Wed", "", "Fri", ""].map((day, i) => (
                  <div key={i} style={{ width: "10px" }} className="text-center">
                    {day}
                  </div>
                ))}
              </div>

              <div className="flex gap-[3px]">
                {weeks.map((week, weekIndex) => (
                  <div key={weekIndex} className="flex flex-col gap-[3px]">
                    {week.map((day, dayIndex) => {
                      const level = getIntensityLevel(day.count)
                      let bgColor = "bg-muted"

                      if (level === 1) bgColor = "bg-primary/20"
                      else if (level === 2) bgColor = "bg-primary/40"
                      else if (level === 3) bgColor = "bg-primary/70"
                      else if (level === 4) bgColor = "bg-primary"

                      return (
                        <div
                          key={dayIndex}
                          className={`w-[10px] h-[10px] rounded-sm ${bgColor} hover:ring-2 hover:ring-ring hover:ring-offset-1`}
                          title={`${day.count} contributions on ${day.date}`}
                        />
                      )
                    })}
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-end mt-2 text-xs text-muted-foreground gap-2">
                <span>Less</span>
                <div className="w-[10px] h-[10px] rounded-sm bg-muted"></div>
                <div className="w-[10px] h-[10px] rounded-sm bg-primary/20"></div>
                <div className="w-[10px] h-[10px] rounded-sm bg-primary/40"></div>
                <div className="w-[10px] h-[10px] rounded-sm bg-primary/70"></div>
                <div className="w-[10px] h-[10px] rounded-sm bg-primary"></div>
                <span>More</span>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="stats" className="mt-0">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <GitCommit className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Total Contributions</span>
              </div>
              <p className="text-2xl font-bold">{totalContributions}</p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <GitBranch className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Current Streak</span>
              </div>
              <p className="text-2xl font-bold">{currentStreak} days</p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <GitPullRequest className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Pull Requests</span>
              </div>
              <p className="text-2xl font-bold">24</p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Repositories</span>
              </div>
              <p className="text-2xl font-bold">18</p>
            </div>
          </div>
        </TabsContent>
      </CardContent>
    </Card>
  )
}
