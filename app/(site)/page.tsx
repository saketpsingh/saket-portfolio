import { Metadata } from "next";
import Hero from '@/components/Hero';
import TechnicalSkills from '@/components/TechnicalSkills';
import ExperienceTab from '@/components/ExperienceTab';
import Awards from '@/components/Awards';
import Publications from '@/components/Publications';
import Projects from '@/components/Projects';
import DynamicSpacing from '@/components/DynamicSpacing';

export const metadata: Metadata = {
  title: "Portfolio | Saket Singh",
  description: "Explore Saket's portfolio, including skills, blogs, projects, publications, and experience."
};

export default function Home() {
  return (
    <>
      <main className="min-h-screen w-full mx-auto overflow-x-hidden">
        <Hero />
        <DynamicSpacing />
        <TechnicalSkills />
        <DynamicSpacing />
        <ExperienceTab />
        <DynamicSpacing />
        <Awards />
        <DynamicSpacing />
        <Publications />
        <DynamicSpacing />
        <Projects />
      </main>
    </>
  );
}