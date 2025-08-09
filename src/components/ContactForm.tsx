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
  /* ---------- 1️⃣  State ---------- */
  const [values, setValues] = useState<FormValues>({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');

  /* ---------- 2️⃣  Handlers ---------- */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value } as FormValues));
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
      }, PUBLIC_KEY);
      setStatus('success');
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  /* ---------- 3️⃣  Render ---------- */
  return (
    <form onSubmit={handleSubmit} className="contact-form">
      {/* -------------- Name -------------- */}
      <div className="field">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
          required
          autoComplete="name"
        />
      </div>

      {/* -------------- Email -------------- */}
      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          required
          autoComplete="email"
        />
      </div>

      {/* -------------- Message -------------- */}
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange}
          required
          placeholder="Type your message…"
        />
      </div>

      {/* -------------- Button -------------- */}
      <button type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? '…' : 'Send'}
      </button>

      {/* -------------- Status messages -------------- */}
      {status === 'success' && (
        <p style={{ color: 'green' }}>Thanks! Your message was sent.</p>
      )}
      {status === 'error' && (
        <p style={{ color: 'red' }}>
          Oops! Something went wrong. Please try again later.
        </p>
      )}
    </form>
  );
};
