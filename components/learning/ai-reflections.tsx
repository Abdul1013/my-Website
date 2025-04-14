"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bot, Calendar, ChevronLeft, ChevronRight, RefreshCw } from "lucide-react"

export default function AIReflections() {
  const [activeTab, setActiveTab] = useState("weekly")
  const [currentReflectionIndex, setCurrentReflectionIndex] = useState(0)

  const reflections = {
    weekly: [
      {
        id: 1,
        date: "Week of May 8, 2025",
        content:
          "Your focus on ethical hacking this week has shown significant progress, particularly in understanding network vulnerabilities. I've noticed you've spent 30% more time on practical exercises compared to last week, which is reflected in your improved lab results. Consider dedicating more time to cryptography concepts, as this appears to be an area where additional practice would be beneficial based on your quiz scores.",
        strengths: ["Practical application", "Consistent daily practice", "Documentation habits"],
        improvements: ["Cryptography fundamentals", "Time management during labs"],
      },
      {
        id: 2,
        date: "Week of May 1, 2025",
        content:
          "This week showed excellent progress in React Native development. Your component architecture has improved significantly, and you've successfully implemented complex navigation patterns. Your GitHub contributions show consistent work on your mobile project. To enhance your skills further, I recommend focusing on performance optimization techniques and exploring more advanced state management patterns beyond what you've implemented so far.",
        strengths: ["Component architecture", "Navigation implementation", "Consistent coding"],
        improvements: ["Performance optimization", "Advanced state management"],
      },
      {
        id: 3,
        date: "Week of April 24, 2025",
        content:
          "Your work with Firebase this week demonstrates good understanding of authentication flows and database structure. You've successfully implemented real-time updates in your project. However, I notice you haven't explored Cloud Functions deeply yet, which would complement your current knowledge. Consider allocating time to understand serverless architecture patterns to maximize the benefits of the Firebase ecosystem.",
        strengths: ["Authentication implementation", "Database structure", "Real-time updates"],
        improvements: ["Cloud Functions", "Serverless architecture patterns"],
      },
    ],
    monthly: [
      {
        id: 1,
        date: "May 2025",
        content:
          "Your learning trajectory this month shows excellent progress across multiple domains. In ethical hacking, you've completed 68% of your course with strong performance in practical labs. Your React Native skills have advanced significantly, particularly in creating custom hooks and optimizing component rendering. The integration of Firebase in your projects demonstrates good understanding of backend services. For continued growth, I recommend focusing on the intersection of these skills—perhaps by implementing secure authentication patterns in your mobile applications using Firebase.",
        strengths: ["Cross-domain knowledge application", "Practical implementation", "Consistent learning schedule"],
        improvements: ["Security-focused mobile development", "Advanced Firebase security rules"],
      },
      {
        id: 2,
        date: "April 2025",
        content:
          "April showed steady progress in TypeScript and initial exploration of ethical hacking concepts. Your GitHub contributions were consistent, with an average of 4.2 commits per day. Your TypeScript skills have notably improved, particularly in type inference and generics. As you continue your learning journey, consider creating more projects that combine multiple technologies you're learning—this will reinforce your understanding and demonstrate your ability to integrate different tools and frameworks.",
        strengths: ["TypeScript type systems", "Consistent coding habits", "Documentation quality"],
        improvements: ["Project integration", "Test-driven development"],
      },
    ],
    quarterly: [
      {
        id: 1,
        date: "Q2 2025 (Apr-Jun)",
        content:
          "Your second quarter learning shows a strategic focus on both offensive security (ethical hacking) and mobile development (React Native). This combination is positioning you well for security-conscious mobile development roles. Your GitHub activity shows a 43% increase compared to Q1, with more substantial contributions to open-source projects. Your learning pattern demonstrates good balance between theoretical knowledge and practical application. For the remainder of this quarter, I recommend completing your TypeScript advanced concepts course as it will enhance both your React Native development and provide a stronger foundation for secure coding practices.",
        strengths: ["Strategic skill development", "Balanced learning approach", "Open-source contributions"],
        improvements: ["Complete TypeScript advanced concepts", "Security testing in mobile applications"],
      },
    ],
  }

  const currentReflections = reflections[activeTab]
  const currentReflection = currentReflections[currentReflectionIndex]

  const handlePrevious = () => {
    setCurrentReflectionIndex((prev) => (prev > 0 ? prev - 1 : currentReflections.length - 1))
  }

  const handleNext = () => {
    setCurrentReflectionIndex((prev) => (prev < currentReflections.length - 1 ? prev + 1 : 0))
  }

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold">AI-Generated Reflections</CardTitle>
          <Tabs defaultValue="weekly" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3" style={{ maxWidth: "300px" }}>
              <TabsTrigger value="weekly">Weekly</TabsTrigger>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="quarterly">Quarterly</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>{currentReflection.date}</span>
            </div>

            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" onClick={handlePrevious} disabled={currentReflections.length <= 1}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-sm text-muted-foreground">
                {currentReflectionIndex + 1} / {currentReflections.length}
              </span>
              <Button variant="ghost" size="icon" onClick={handleNext} disabled={currentReflections.length <= 1}>
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="ml-2">
                <RefreshCw className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex items-start gap-3 pt-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="AI Assistant" />
              <AvatarFallback>
                <Bot className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
            <div className="space-y-4">
              <p className="text-sm">{currentReflection.content}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Strengths</h4>
                  <ul className="space-y-1">
                    {currentReflection.strengths.map((strength, index) => (
                      <li key={index} className="text-sm flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Areas for Improvement</h4>
                  <ul className="space-y-1">
                    {currentReflection.improvements.map((improvement, index) => (
                      <li key={index} className="text-sm flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>{improvement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
