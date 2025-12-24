'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Er ging iets mis');
      }

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Er ging iets mis');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (status === 'success') {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-[#3A7BFF] rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-[#F4F3EF] mb-4">Bericht verzonden!</h3>
        <p className="text-[#F4F3EF]/80 mb-8">We nemen binnen 24 uur contact met je op.</p>
        <button
          onClick={() => setStatus('idle')}
          className="text-[#3A7BFF] hover:underline"
        >
          Nog een bericht sturen
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-[#F4F3EF] text-sm font-medium mb-2">
          Naam *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          disabled={status === 'loading'}
          className="w-full bg-[#2E2E2E] border border-[#BDBDB8]/30 rounded-lg px-4 py-3 text-[#F4F3EF] text-sm focus:outline-none focus:border-[#3A7BFF] transition-colors disabled:opacity-50"
          placeholder="Je naam"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-[#F4F3EF] text-sm font-medium mb-2">
          E-mail *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          disabled={status === 'loading'}
          className="w-full bg-[#2E2E2E] border border-[#BDBDB8]/30 rounded-lg px-4 py-3 text-[#F4F3EF] text-sm focus:outline-none focus:border-[#3A7BFF] transition-colors disabled:opacity-50"
          placeholder="je@email.nl"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-[#F4F3EF] text-sm font-medium mb-2">
          Telefoon
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          disabled={status === 'loading'}
          className="w-full bg-[#2E2E2E] border border-[#BDBDB8]/30 rounded-lg px-4 py-3 text-[#F4F3EF] text-sm focus:outline-none focus:border-[#3A7BFF] transition-colors disabled:opacity-50"
          placeholder="06 12345678"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-[#F4F3EF] text-sm font-medium mb-2">
          Bericht *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          maxLength={500}
          value={formData.message}
          onChange={handleChange}
          disabled={status === 'loading'}
          className="w-full bg-[#2E2E2E] border border-[#BDBDB8]/30 rounded-lg px-4 py-3 text-[#F4F3EF] text-sm focus:outline-none focus:border-[#3A7BFF] transition-colors resize-none disabled:opacity-50"
          placeholder="Vertel ons over je interesse in Werkplaats 5..."
        />
        <p className="text-[#BDBDB8] text-xs mt-2">Maximaal 500 tekens</p>
      </div>

      {status === 'error' && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3">
          <p className="text-red-400 text-sm">{errorMessage}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-[#F4F3EF] text-[#111111] px-10 py-4 rounded-lg text-base font-medium hover:bg-[#3A7BFF] hover:text-[#F4F3EF] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {status === 'loading' ? (
          <>
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Verzenden...
          </>
        ) : (
          "Let's go →"
        )}
      </button>
    </form>
  );
}
