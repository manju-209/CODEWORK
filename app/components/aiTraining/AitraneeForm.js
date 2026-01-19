'use client';
import React, { useState, useRef } from 'react';
import { FiUploadCloud, FiFile, FiCheckCircle, FiX } from "react-icons/fi";

const AitraneeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    designation: '',
    experience: '',
    contact: '',
    resume: null,
  });

  const [responseMessage, setResponseMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [fileName, setFileName] = useState('');
  const [fileError, setFileError] = useState('');
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleFile = (file) => {
    setFileError('');
    if (!file) return;

    if (file.type === 'application/pdf') {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result.split(',')[1];
        setFormData({ ...formData, resume: base64 });
      };
      reader.readAsDataURL(file);
    } else {
      setFileError('Please upload a valid PDF file.');
      setFileName('');
      setFormData({ ...formData, resume: null });
    }
  };

  const handleFileChange = (e) => {
    handleFile(e.target.files[0]);
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(e.type === 'dragenter' || e.type === 'dragover');
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files?.[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const removeFile = () => {
    setFileName('');
    setFormData({ ...formData, resume: null });
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage('');

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/marketing_site/add_internship_profile`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...formData,
            role: "2",
          }),
        }
      );

      if (!response.ok) throw new Error();

      const data = await response.json();
      setResponseMessage(data.message);
      setFormData({
        name: '',
        email: '',
        designation: '',
        experience: '',
        contact: '',
        resume: null,
      });
      setFileName('');
      if (fileInputRef.current) fileInputRef.current.value = '';
    } catch {
      setResponseMessage('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative bg-secondary py-24 lg:py-44">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">

          {/* LEFT */}
          <div className="flex-1 text-center lg:text-left lg:pl-14">
            <div className="inline-flex px-6 py-3 rounded-full border border-secondary/30 bg-white/5 mb-8">
              <span className="text-primary text-sm font-medium">
                — AI Trainee Application —
              </span>
            </div>

            <h2 className="text-5xl font-bold text-primary mb-6">
              Apply <span className="text-white">Now</span>
            </h2>

            <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mb-8 mx-auto lg:mx-0" />

            <p className="text-lg text-white/90 mb-6">
              Join our internship program and gain real-world experience in
              <span className="text-primary font-medium"> AI, ML, and Data Science</span>.
            </p>

            <p className="text-lg text-white/80">
              Let’s make this an <span className="text-primary">unforgettable journey</span> together.
            </p>
          </div>

          {/* RIGHT FORM */}
          <div className="flex-1 max-w-2xl">
            <div className="bg-secondary/60 border border-primary/20 rounded-3xl p-8 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">

                {['name', 'email', 'designation', 'experience', 'contact'].map((field) => (
                  <input
                    key={field}
                    id={field}
                    placeholder={`${field.charAt(0).toUpperCase() + field.slice(1)} *`}
                    value={formData[field]}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-secondary/10 border border-primary/20 rounded-xl text-primary"
                  />
                ))}

                {/* FILE UPLOAD */}
                <div
                  className={`border-2 border-dashed p-4 rounded-xl ${
                    dragActive ? 'border-primary' : 'border-primary/30'
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <input
                    type="file"
                    ref={fileInputRef}
                    hidden
                    accept="application/pdf"
                    onChange={handleFileChange}
                  />

                  {!fileName ? (
                    <div className="text-center space-y-2">
                      <FiUploadCloud className="mx-auto text-primary" />
                      <p className="text-primary text-sm">Drag & drop or click to upload</p>
                    </div>
                  ) : (
                    <div className="flex justify-between items-center">
                      <span className="text-white text-sm">{fileName}</span>
                      <button type="button" onClick={removeFile}>
                        <FiX className="text-red-500" />
                      </button>
                    </div>
                  )}
                </div>

                {fileError && <p className="text-red-500 text-sm">{fileError}</p>}

                <button
                  disabled={loading}
                  className="w-full bg-primary text-secondary py-4 rounded-xl font-bold"
                >
                  {loading ? 'Submitting…' : 'Submit Application'}
                </button>

                {responseMessage && (
                  <p className="text-primary text-center">{responseMessage}</p>
                )}

              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AitraneeForm;
