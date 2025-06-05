// app/about/page.tsx
import { Metadata } from "next";
import ContactItems from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact | Saket Singh",
  description: "Get in touch with Saket Singh for collaborations, opportunities, or inquiries related to development and technology.",
};

export default function ContactPage() {
  return (
    <section className="py-8 md:py-12 lg:py-16">
      <ContactItems />
    </section>
  );
}