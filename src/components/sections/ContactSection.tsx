"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { brutalSpring } from "@/lib/utils";
import TerminalCard from "@/components/ui/TerminalCard";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa6";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://id.linkedin.com/in/rayhan-hanun-464160193",
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/RayhanHanun",
    icon: FaGithub,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/ryhnunn_?igsh=YjR4aHNuZmtkODZi&utm_source=qr",
    icon: FaInstagram,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/628812704174",
    icon: FaWhatsapp,
  },
] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { ...brutalSpring, delay: i * 0.1 },
  }),
};

const inputClasses =
  "w-full bg-transparent border-b-[3px] border-neo-border focus:border-neo-green outline-none font-mono text-sm text-neo-white py-3 px-1 placeholder:text-neo-white/30 transition-colors duration-100";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_ACCESS_KEY_HERE",
          ...formData,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        
        // Reset status after 5 seconds so they can send another message if needed
        setTimeout(() => {
          setStatus("idle");
        }, 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="px-6 md:px-8 lg:px-8 py-12 lg:py-20 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="font-mono text-neo-green text-sm mb-8">
        <span className="text-neo-pink">{">"}</span> open network_transmission.sh
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* ── Contact Form ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          custom={0}
        >
          <TerminalCard headerTitle="TRANSMIT_MESSAGE.sh" accentColor="green">
            <form
              onSubmit={handleSubmit}
              className="space-y-6 w-full max-w-full overflow-hidden px-2 md:px-0"
            >
              <div>
                <label
                  htmlFor="contact-name"
                  className="font-mono text-xs text-neo-green/60 block mb-1 break-words"
                >
                  SENDER_NAME:
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Enter your name..."
                  className={inputClasses}
                  required
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status === "loading"}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="font-mono text-xs text-neo-green/60 block mb-1 break-words"
                >
                  SENDER_EMAIL:
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="Enter your email..."
                  className={inputClasses}
                  required
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status === "loading"}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="font-mono text-xs text-neo-green/60 block mb-1 break-words"
                >
                  SUBJECT_LINE:
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="Enter subject..."
                  className={inputClasses}
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={status === "loading"}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="font-mono text-xs text-neo-green/60 block mb-1 break-words"
                >
                  MESSAGE_BODY:
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  placeholder="Enter your message..."
                  className={`${inputClasses} resize-none`}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status === "loading"}
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "loading"}
                className="font-mono text-sm px-6 py-3 bg-neo-green text-black border-2 border-black shadow-brutal-green font-bold tracking-wider uppercase w-full disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={status === "loading" ? {} : { x: -4, y: -4 }}
                whileTap={status === "loading" ? {} : { x: 4, y: 4, boxShadow: "0px 0px 0px 0px #000" }}
                transition={brutalSpring}
              >
                {status === "loading" ? "> TRANSMITTING..." : "> TRANSMIT_MESSAGE"}
              </motion.button>
              
              {/* UI Feedback Message */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 border-2 border-neo-green bg-neo-green/10 text-neo-green font-mono text-xs text-center uppercase tracking-widest"
                >
                  [ TRANSMISSION SUCCESSFUL ]
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 border-2 border-neo-pink bg-neo-pink/10 text-neo-pink font-mono text-xs text-center uppercase tracking-widest"
                >
                  [ TRANSMISSION FAILED - TRY AGAIN ]
                </motion.div>
              )}
            </form>
          </TerminalCard>
        </motion.div>

        {/* ── Social Grid — 2x2 CSS Grid ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          custom={1}
        >
          <TerminalCard headerTitle="NETWORK_NODES.config" accentColor="pink" isInteractive={false}>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-6 border-2 border-neo-pink bg-neo-bg hover:bg-neo-pink transition-colors group"
                  whileHover={{ x: -4, y: -4 }}
                  whileTap={{ x: 4, y: 4 }}
                  transition={{ ...brutalSpring, delay: i * 0.05 }}
                >
                  <social.icon className="w-10 h-10 text-4xl mx-auto text-neo-pink mb-3 group-hover:text-black" />
                  <span className="font-mono text-xs text-neo-white/60 mt-2 uppercase tracking-widest group-hover:text-black">
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </TerminalCard>
        </motion.div>
      </div>

      {/* Footer stamp */}
      <div className="mt-16 text-center font-mono text-xs text-neo-green/60">
        user@portfolio:~$ SYSTEM_ONLINE // SECURE_BUILD // {new Date().getFullYear()}
      </div>
    </section>
  );
}
