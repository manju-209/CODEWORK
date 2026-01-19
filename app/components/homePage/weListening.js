"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const WeListening = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [responseMessage, setResponseMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const isValidEmail = (value) => {
    const email = String(value || '').trim();
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleFormKeyDown = (event) => {
    if (event.key !== 'Enter') return;
    const target = event.target;
    if (target && target.tagName === 'TEXTAREA') return;
    event.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    const name = String(formData.name || '').trim();
    const subject = String(formData.subject || '').trim();
    const email = String(formData.email || '').trim();
    const message = String(formData.message || '').trim();

    if (!name) newErrors.name = 'Name is required';
    if (!subject) newErrors.subject = 'Subject is required';
    if (!email) newErrors.email = 'Email is required';
    if (email && !isValidEmail(email)) newErrors.email = 'Enter a valid email';
    if (!message) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMessage('');
    if (!validate()) return;

    setLoading(true);

    try {
      const name = String(formData.name || '').trim();
      const subject = String(formData.subject || '').trim();
      const email = String(formData.email || '').trim();
      const message = String(formData.message || '').trim();

      const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/marketing_site/add_contact_details`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, subject, email, message }),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => ({}));
        setResponseMessage(result.message || 'Failed to send contact details.');
        return;
      }

      const data = await response.json();
      setResponseMessage('Thanks for reaching out to us, We will get back to you soon');
      setTimeout(() => setResponseMessage(''), 3000);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setResponseMessage('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-primary text-primary px-7 pt-24 pb-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <Link href="/contact-ai-solutions" className="inline-block px-4 py-2 border border-secondary rounded-none text-primary hover:bg-secondary hover:text-primary transition">
            Back
          </Link>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Other Inquiries</h1>
        <p className="text-lg mb-12">If you’re looking for career opportunities, please visit <a href="https://codework.ai/careers-at-codework" target="_blank" rel="noopener noreferrer" className="underline">codework.ai/careers</a>.</p>

        <form onSubmit={handleSubmit} onKeyDown={handleFormKeyDown} className="space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <label className="block text-base font-semibold mb-2">Name: <span className="text-red-500">*</span></label>
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-secondary py-2 outline-none"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-base font-semibold mb-2">Subject: <span className="text-red-500">*</span></label>
              <input
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-secondary py-2 outline-none"
              />
              {errors.subject && (
                <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-base font-semibold mb-2">Work Email: <span className="text-red-500">*</span></label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-secondary py-2 outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-base font-semibold mb-2">How can we help? <span className="text-red-500">*</span></label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full bg-transparent border border-secondary px-3 py-3 outline-none min-h-[12rem]"
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message}</p>
            )}
          </div>

<<<<<<< HEAD
          <button type="submit" disabled={loading} className="px-10 py-4 border border-secondary rounded-none text-primary font-semibold w-fit hover:bg-secondary hover:text-primary transition">
=======
          <button type="submit" disabled={loading || submitted} className="px-10 py-4 border border-secondary rounded-none text-secondary font-semibold w-fit hover:bg-secondary hover:text-primary transition">
>>>>>>> newchange
            {loading ? 'Submitting…' : 'Submit'}
          </button>

          {responseMessage && (
            <div className="mt-4 p-4 bg-secondary/5 border border-secondary/20">
              <p className="text-sm">{responseMessage}</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default WeListening;
