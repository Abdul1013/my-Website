import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import DashboardHeader from "@/components/learning/dashboard-header";
import RoadmapSprints from "@/components/learning/roadmap-sprints";
import GitHubContributions from "@/components/learning/github-contributions";
import CurrentCourses from "@/components/learning/current-courses";
import AIReflections from "@/components/learning/ai-reflections";
import LearningStats from "@/components/learning/learning-stats";
import { Tabs } from "@radix-ui/react-tabs";

export const metadata = {
  title: "Learning Dashboard | Abdulrasheed Olabanji",
  description:
    "Track my learning journey, course progress, and development goals in real-time",
};

export default function LearningDashboard() {
  return (
    <main className="container mx-auto py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center text-primary hover:text-primary/80 mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <DashboardHeader />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2 space-y-8">
            <RoadmapSprints />
            <Tabs>
              <GitHubContributions />
            </Tabs>
            <AIReflections />
          </div>

          <div className="space-y-8">
            <LearningStats />
            <CurrentCourses />
          </div>
        </div>
      </div>
    </main>
  );
}
