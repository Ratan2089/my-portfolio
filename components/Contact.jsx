'use client';

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/data/constants";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, AlertCircle, XCircle } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [sendError, setSendError] = useState("");
  const [showDebug, setShowDebug] = useState(false);

  const envStatus = [
    { label: "SERVICE_ID", value: SERVICE_ID },
    { label: "TEMPLATE_ID", value: TEMPLATE_ID },
    { label: "PUBLIC_KEY", value: PUBLIC_KEY },
  ];

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Invalid email address";
    }
    if (!formData.subject.trim()) tempErrors.subject = "Subject is required";
    if (!formData.message.trim()) tempErrors.message = "Message cannot be empty";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {

    e.preventDefault();
    if (!validate()) return;

    setSendError("");
    setLoading(true);

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });

      setSuccess(true);
      console.log("Mail sent");

      setFormData({ name: "", email: "", subject: "", message: "" });
      // Hide success toast after 4 s
      setTimeout(() => setSuccess(false), 4000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setSendError("Failed to send message. Please try again later.");
      // Hide error toast after 5 s
      setTimeout(() => setSendError(""), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300 overflow-hidden"
    >
      {/* Background glow orb */}
      <div className="absolute right-10 top-10 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* ── ENV Debug Panel ── */}
      {/* <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-2">
        <button
          onClick={() => setShowDebug((p) => !p)}
          className="px-3 py-1.5 text-xs font-mono font-bold rounded-lg bg-zinc-800 dark:bg-zinc-700 text-zinc-200 border border-zinc-600 hover:bg-zinc-700 dark:hover:bg-zinc-600 shadow-lg transition-colors"
        >
          {showDebug ? "✕ Hide Debug" : "🔍 Debug ENV"}
        </button>

        <AnimatePresence>
          {showDebug && (
            <motion.div
              key="debug-panel"
              initial={{ opacity: 0, y: 8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.97 }}
              className="p-4 rounded-2xl border border-zinc-700 bg-zinc-900/95 backdrop-blur-md shadow-2xl min-w-[240px] font-mono text-xs"
            >
              <p className="text-zinc-400 mb-3 font-bold uppercase tracking-widest text-[10px]">EmailJS ENV Variables</p>
              <div className="space-y-2">
                {envStatus.map(({ label, value }) => (
                  <div key={label} className="flex items-center justify-between gap-4">
                    <span className="text-zinc-400">{label}</span>
                    {value ? (
                      <span className="px-2 py-0.5 rounded-md bg-green-900/60 text-green-400 border border-green-800 text-[10px] font-bold">
                        ✓ SET ({value.slice(0, 6)}…)
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded-md bg-red-900/60 text-red-400 border border-red-800 text-[10px] font-bold">
                        ✗ MISSING
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div> */}

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
            Contact
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Get In Touch
          </p>
          <div className="mt-4 w-12 h-1.5 bg-blue-600 dark:bg-blue-500 rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">

          {/* Left Column - Contact Info */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
                Let&apos;s discuss a project
              </h3>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                I am interested in full-stack, frontend, and backend engineering roles. If you have an application to build or want to connect, feel free to drop a message.
              </p>

              {/* Details List */}
              <div className="space-y-4 pt-4">
                {/* Email */}
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 border border-blue-100/50 dark:border-blue-900/30">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Email Me</h4>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 border border-blue-100/50 dark:border-blue-900/30">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Call Me</h4>
                    <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                      {PERSONAL_INFO.phone}
                    </span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 border border-blue-100/50 dark:border-blue-900/30">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Location</h4>
                    <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                      {PERSONAL_INFO.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social profiles linking */}
            <div className="space-y-3 pt-6 border-t border-zinc-200/50 dark:border-zinc-800/50">
              <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Social Channels</h4>
              <div className="flex items-center space-x-3">
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200"
                  aria-label="GitHub Profile"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl border border-zinc-200/50 dark:border-zinc-800/50 bg-white dark:bg-zinc-900/60 shadow-xl shadow-zinc-100/50 dark:shadow-none relative">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">

                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all ${errors.name
                      ? "border-red-400 focus:border-red-500"
                      : "border-zinc-200 dark:border-zinc-800 focus:border-blue-500 dark:focus:border-blue-400"
                      }`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <div className="flex items-center space-x-1 text-xs text-red-500 mt-1">
                      <AlertCircle size={12} />
                      <span>{errors.name}</span>
                    </div>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all ${errors.email
                      ? "border-red-400 focus:border-red-500"
                      : "border-zinc-200 dark:border-zinc-800 focus:border-blue-500 dark:focus:border-blue-400"
                      }`}
                    placeholder="johndoe@example.com"
                  />
                  {errors.email && (
                    <div className="flex items-center space-x-1 text-xs text-red-500 mt-1">
                      <AlertCircle size={12} />
                      <span>{errors.email}</span>
                    </div>
                  )}
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all ${errors.subject
                      ? "border-red-400 focus:border-red-500"
                      : "border-zinc-200 dark:border-zinc-800 focus:border-blue-500 dark:focus:border-blue-400"
                      }`}
                    placeholder="Project Inquiry / Job opening"
                  />
                  {errors.subject && (
                    <div className="flex items-center space-x-1 text-xs text-red-500 mt-1">
                      <AlertCircle size={12} />
                      <span>{errors.subject}</span>
                    </div>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all resize-none ${errors.message
                      ? "border-red-400 focus:border-red-500"
                      : "border-zinc-200 dark:border-zinc-800 focus:border-blue-500 dark:focus:border-blue-400"
                      }`}
                    placeholder="Hello Kumar, I'd like to collaborate..."
                  />
                  {errors.message && (
                    <div className="flex items-center space-x-1 text-xs text-red-500 mt-1">
                      <AlertCircle size={12} />
                      <span>{errors.message}</span>
                    </div>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-xl transition-all duration-200 cursor-pointer shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 disabled:opacity-75 disabled:pointer-events-none"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>

      {/* Floating Toast Notifications */}
      <AnimatePresence>
        {success && (
          <motion.div
            key="success-toast"
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 20, x: "-50%" }}
            className="fixed bottom-6 left-1/2 z-50 px-5 py-3 rounded-2xl border border-green-200 dark:border-green-950 bg-green-50 dark:bg-green-950/90 text-green-800 dark:text-green-200 shadow-xl shadow-green-500/10 flex items-center space-x-2 backdrop-blur-md"
          >
            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
            <span className="text-sm font-bold">Message sent successfully! Thank you.</span>
          </motion.div>
        )}
        {sendError && (
          <motion.div
            key="error-toast"
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 20, x: "-50%" }}
            className="fixed bottom-6 left-1/2 z-50 px-5 py-3 rounded-2xl border border-red-200 dark:border-red-950 bg-red-50 dark:bg-red-950/90 text-red-800 dark:text-red-200 shadow-xl shadow-red-500/10 flex items-center space-x-2 backdrop-blur-md"
          >
            <XCircle className="w-5 h-5 text-red-500 shrink-0" />
            <span className="text-sm font-bold">{sendError}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
