import { ContactForm } from "../components/ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto mt-26">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Contact Us
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Have questions or need assistance? Fill out the form below and we'll get back to you as soon as
possible.
        </p>
        <div className="mt-8">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
