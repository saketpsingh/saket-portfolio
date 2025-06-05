// app/about/page.tsx
import { Metadata } from "next";
import AboutItems from "@/components/About";

export const metadata: Metadata = {
  title: "About | Saket Singh",
  description: "Learn more about Saket Singh, his journey as a developer, technical background, passions, and career highlights.",
};

export default function AboutPage() {
  return (
    <section className="py-8 md:py-12 lg:py-16">
      <AboutItems />
    </section>
  );
}
