import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("Message sent successfully!");
        setForm({ name: "", email: "", subject: "", message: "" });
      })
      .catch(() => {
        alert("Failed to send message. Try again later.");
      });
  };

  return (
    <section
      id="contact"
      className="w-full py-24 bg-lightBg dark:bg-darkBg"
    >
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-12 text-black dark:text-gray-100"
        >
          Contact Me
        </motion.h2>

        <form onSubmit={sendEmail} className="space-y-6">
          <input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded border bg-white dark:bg-darkCard dark:border-gray-700 text-black dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded border bg-white dark:bg-darkCard dark:border-gray-700 text-black dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
          />

          <input
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            required
            className="w-full p-3 rounded border bg-white dark:bg-darkCard dark:border-gray-700 text-black dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
          />

          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full p-3 rounded border bg-white dark:bg-darkCard dark:border-gray-700 text-black dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
          />

          <button
            type="submit"
            className="bg-primary text-black px-8 py-3 font-semibold hover:scale-105 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
