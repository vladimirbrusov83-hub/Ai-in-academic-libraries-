import type { Metadata } from "next";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact — AI for Academic Libraries",
  description:
    "Questions about the curriculum, speaking or workshop inquiries, collaboration — send a message and we'll get back to you.",
};

export default function ContactPage() {
  return (
    <div className="max-w-lg mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <h1 className="text-3xl font-bold text-stone-900 mb-3">Contact</h1>
      <p className="text-stone-600 leading-relaxed mb-8">
        Questions about the curriculum, speaking or workshop inquiries, collaboration — send a message and we&apos;ll get back to you.
      </p>
      <ContactForm />
    </div>
  );
}
