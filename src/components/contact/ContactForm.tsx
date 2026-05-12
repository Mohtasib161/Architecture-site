"use client";

import { useState } from "react";
import FadeIn from "@/components/ui/FadeIn";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ firstName: "", lastName: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 justify-center">
          {/* Contact info columns */}
          <div className="flex gap-12 flex-wrap max-w-2xl mx-auto lg:mx-0">
            {[
              {
                num: "01",
                label: "Location",
                title: "Welcome to visit",
                body: "Canada, Toronto,\nHTGS 4456 North Av.",
              },
              {
                num: "02",
                label: "Contact",
                title: "Shall we talk?",
                body: "Email: mireya.inbox@mail.com\nPhone: +4 9(054) 996 84 25",
              },
            ].map((info) => (
              <FadeIn key={info.num} className="flex-1 min-w-[200px] text-center">
                <div className="flex items-baseline gap-3 mb-4 justify-center">
                  <span
                    className="text-[40px] font-black font-heading leading-none"
                    style={{
                      WebkitTextStrokeWidth: "2px",
                      WebkitTextStrokeColor: "#010d0d",
                      color: "transparent",
                    }}
                  >
                    {info.num}
                  </span>
                  <p className="mry-subtitle">{info.label}</p>
                </div>
                <h4 className="mb-3">{info.title}</h4>
                <p className="mry-text whitespace-pre-line">{info.body}</p>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Section heading */}
        <FadeIn className="text-center mt-20 mb-12">
          <div className="flex items-baseline gap-3 mb-4 justify-center">
            <span
              className="text-[40px] font-black font-heading leading-none"
              style={{
                WebkitTextStrokeWidth: "2px",
                WebkitTextStrokeColor: "#010d0d",
                color: "transparent",
              }}
            >
              03
            </span>
            <p className="mry-subtitle">Contact Form</p>
          </div>
          <h2>Write us a message</h2>
        </FadeIn>

        {/* Form */}
        <FadeIn>
          <form
            onSubmit={handleSubmit}
            className="mry-form max-w-2xl mx-auto"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
              <div>
                <label className="mry-label block mb-1" htmlFor="firstName">
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="John"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="mry-label block mb-1" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Johnson"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="mry-label block mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="type.your.mail@here"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="mry-label block mb-1" htmlFor="phone">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+0 (000) 000 00 00"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label className="mry-label block mb-1" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Type your message here"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex items-center gap-6 flex-wrap">
              <button
                type="submit"
                disabled={status === "sending"}
                className="mry-btn"
              >
                {status === "sending" ? "Sending..." : "Send message"}
              </button>
              <p className="mry-text text-sm text-muted max-w-xs">
                <span className="text-accent">*</span> We promise not to share
                your personal information with third parties.
              </p>
            </div>

            {/* Feedback */}
            {status === "success" && (
              <p className="mt-4 text-green-600 mry-label">
                ✓ Your message was sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 text-red-500 mry-label">
                ✗ Something went wrong. Please try again.
              </p>
            )}
          </form>
        </FadeIn>

        {/* Map */}
        <FadeIn className="mt-16">
          <div className="flex items-baseline gap-3 mb-6 justify-center">
            <span
              className="text-[40px] font-black font-heading leading-none"
              style={{
                WebkitTextStrokeWidth: "2px",
                WebkitTextStrokeColor: "#010d0d",
                color: "transparent",
              }}
            >
              04
            </span>
            <p className="mry-subtitle">Map</p>
          </div>
          <h2 className="text-center mb-8">Welcome to visit</h2>
          <div className="max-w-5xl mx-auto overflow-hidden rounded-lg">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=-79.42%2C43.64%2C-79.36%2C43.68&layer=mapnik&marker=43.66%2C-79.39"
              width="100%"
              height="450"
              style={{ border: 0, display: "block" }}
              title="Location Map"
              loading="lazy"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
