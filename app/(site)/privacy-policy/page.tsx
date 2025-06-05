// app/about/page.tsx
import { Metadata } from "next";
import PrivacyPolicy from "@/components/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy | Saket Singh",
  description: "Review the privacy policy for Saket Singh's portfolio, outlining how user data is collected, used, and protected.",
};

export default function PrivacyPage() {
  return (
    <section className="py-8 md:py-12 lg:py-16">
      <PrivacyPolicy />
    </section>
  );
}
