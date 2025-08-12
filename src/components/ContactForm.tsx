import { useState } from 'react';
import emailjs from 'emailjs-com';

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID!;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY!;

export const ContactForm = () => {
  const [values, setValues] = useState<FormValues>({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        to_email: values.email,
        from_name: values.name,
        from_email: values.email,
        message: values.message,
      }, PUBLIC_KEY
      );
      setStatus('success');
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6 md:p-8 space-y-6"
    >
      {/* -------------- Name -------------- */}
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
          required
          autoComplete="name"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2
focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* -------------- Email -------------- */}
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          required
          autoComplete="email"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2
focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* -------------- Message -------------- */}
      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange}
          required
          placeholder="Type your message…"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2
focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* -------------- Button -------------- */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-3 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700
focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>

      {/* -------------- Status messages -------------- */}
      {status === 'success' && (
        <div className="text-green-600 text-center">
          <p className="text-sm">Thanks! Your message was sent.</p>
        </div>
      )}
      {status === 'error' && (
        <div className="text-red-600 text-center">
          <p className="text-sm">Oops! Something went wrong. Please try again later.</p>
        </div>
      )}
    </form>
  );
};
