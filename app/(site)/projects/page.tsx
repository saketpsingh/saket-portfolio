// app/about/page.tsx
import { Metadata } from "next";
import ProjectDetail from "@/components/Projects/ProjectDetail";

export const metadata: Metadata = {
    title: "Projects | Saket Singh",
    description: "Explore a curated collection of innovative and impactful projects by Saket Singh, showcasing expertise in web development, architecture, and design.",
};

export default function ProjectPage() {
    return (
        <section className="py-8 md:py-12 lg:py-16">
            <ProjectDetail />
        </section>
    );
}
