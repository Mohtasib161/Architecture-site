"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";

/* ─── fade-in on scroll ─── */
const FO = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] }}
  >
    {children}
  </motion.div>
);

/* ─── Numbered heading block ─── */
const Numbering = ({
  num,
  label,
}: {
  num: string;
  label: string;
}) => (
  <FO className="mry-numbering">
    <div
      className="mry-border-text"
      style={{
        lineHeight: "55px",
        fontSize: 72,
        fontWeight: 900,
        opacity: 0.1,
        fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
        display: "block",
      }}
    >
      {num}
    </div>
    <div
      className="mry-subtitle"
      style={{ paddingLeft: 0, paddingTop: 40 }}
    >
      <span>{label}</span>
    </div>
  </FO>
);

/* ═══════════════════════════════════════════
   SECTION 01 — Who We Are
   SECTION 02 — What We Do
═══════════════════════════════════════════ */
export function AboutSections01_02() {
  return (
    <div className="mry-about" style={{ paddingTop: 100, marginBottom: 100 }}>
      <div className="container">
        <div className="row justify-content-center">

          {/* 01 */}
          <div className="col-lg-8">
            <div className="mry-mb-100 mry-text-center">
              <Numbering num="01" label="Who We Are" />
              <FO>
                <h3 className="mry-mb-40">
                  Mireya is an award winning full service marketing agency
                </h3>
              </FO>
              <FO delay={0.1}>
                <p className="mry-text">
                  We has expertise in branding and brand strategy, website design,
                  social media management, content marketing, pay-per-click
                  advertising (PPC) and search engine optimization (SEO). As a
                  leading website design company in Toronto we have expertise in
                  WordPress design and development, e-commerce website design and
                  development, Shopify website design and development and cater
                  <br />
                  to SMB and enterprise clients.
                </p>
              </FO>
            </div>
          </div>

          {/* 02 */}
          <div className="col-lg-8">
            <div className="mry-mb-100 mry-text-center">
              <Numbering num="02" label="What we do?" />
              <FO>
                <h3 className="mry-mb-40">
                  Relationships come first, everything <br /> else follows
                </h3>
              </FO>
              <FO delay={0.1}>
                <p className="mry-text" style={{ marginBottom: 20 }}>
                  We take pride in having strong relationships with our clients.
                  To us, business is more than just a handshake and a signed
                  contract. Through our full suite of services, we help businesses
                  reach their goals and maximize return on investment while
                  focusing on transparency and communication.
                </p>
                <p className="mry-text">
                  Contact us today for your{" "}
                  <Link href="/contact">free consultation</Link>.
                </p>
              </FO>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   VIDEO BLOCK
═══════════════════════════════════════════ */
export function VideoBlock() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <FO className="mry-about-video mry-mb-100">
            <div className="mry-video-cover-frame" style={{ position: "relative", overflow: "hidden", paddingBottom: "60%" }}>
              <Image
                src="/img/light/content/video.jpg"
                alt="Video cover"
                fill
                className="mry-video-cover"
                style={{ objectFit: "cover", objectPosition: "bottom" }}
              />
              <div className="mry-cover-overlay" />
              <div
                className="mry-play-button"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: 80,
                  height: 80,
                  position: "absolute",
                  zIndex: 2,
                  top: "50%",
                  left: "50%",
                  marginLeft: -40,
                  marginTop: -40,
                  border: "solid 2px #0d0d0d",
                  borderRadius: "50%",
                  boxShadow:
                    "inset 0 0 40px rgba(247,248,250,0.5), 0 0 40px rgba(247,248,250,0.5)",
                  cursor: "pointer",
                }}
              >
                <a
                  href="https://vimeo.com/25428289"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 30,
                    width: 30,
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="#0d0d0d"
                    width={22}
                    height={22}
                    style={{ transform: "translateX(2px)" }}
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </a>
              </div>
              <div
                className="mry-curtain"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "#f7f8fa",
                  zIndex: 1,
                }}
              />
            </div>
          </FO>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   SECTION 03 — Services
═══════════════════════════════════════════ */
const services = [
  {
    title: <>Website design<br />&amp; Development</>,
    body: "Our work empowers businesses to create unique user experiences that engage, captivate, and deliver results. Need your website designed in Toronto?",
  },
  {
    title: <>Creative<br />&amp; Graphic Design</>,
    body: "We are experienced storytellers, with a knack for incorporating brand insights into compelling designs for use in digital and print advertising campaigns.",
  },
  {
    title: <>Brand Marketing<br />&amp; Strategy</>,
    body: "We help businesses construct their identity and develop a tailored and concise brand strategy that will appeal to your target audience.",
  },
  {
    title: <>Video Production<br />&amp; Marketing</>,
    body: "Our video production team films, produces, and edits content that will raise brand awareness, engagement, and conversion rates.",
  },
];

export function ServicesSection() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <Numbering num="03" label="Services" />
          <div className="row">
            {services.map((s, i) => (
              <div key={i} className="col-lg-6">
                <div className="mry-text-center mry-mb-100">
                  <FO delay={i * 0.1}>
                    <h4 className="mry-mb-20">{s.title}</h4>
                    <p className="mry-text mry-mb-20">{s.body}</p>
                    <Link href="/contact" className="mry-link">
                      Order a service
                    </Link>
                  </FO>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   SECTION 04 — Team Slider
═══════════════════════════════════════════ */
const teamMembers = [
  { name: "Viktoria Freeman", role: "UI/UX Designer", img: "/img/light/team/team-1.jpg" },
  { name: "Paul Trueman",     role: "UI/UX Designer", img: "/img/light/team/team-2.jpg" },
  { name: "Mike Oldman",      role: "UI/UX Designer", img: "/img/light/team/team-3.jpg" },
  { name: "Emma Newman",      role: "UI/UX Designer", img: "/img/light/team/team-4.jpg" },
];

export function TeamSection() {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <div
            className="mry-main-title mry-title-center"
            style={{ paddingBottom: 40 }}
          >
            <Numbering num="04" label="Employees" />
            <FO><h2>Our Amazing Team</h2></FO>
            {/* Arrows */}
            <FO className="mry-arrows">
              <div className="mry-sl-nav" style={{ display: "flex" }}>
                <div
                  ref={prevRef}
                  style={{
                    width: 100, height: 100,
                    display: "flex", justifyContent: "center", alignItems: "center",
                    cursor: "pointer", color: "#010d0d", transition: "0.3s",
                  }}
                >
                  <FaArrowLeft size={20} />
                </div>
                <div
                  ref={nextRef}
                  style={{
                    width: 100, height: 100,
                    display: "flex", justifyContent: "center", alignItems: "center",
                    cursor: "pointer", color: "#010d0d", transition: "0.3s",
                  }}
                >
                  <FaArrowRight size={20} />
                </div>
              </div>
              <div className="mry-label">Slider Navigation</div>
            </FO>
          </div>
        </div>

        <div className="col-lg-10">
          <div style={{ marginBottom: 100 }}>
            <Swiper
              modules={[Navigation]}
              slidesPerView={3}
              spaceBetween={30}
              loop
              speed={1200}
              onBeforeInit={(sw) => {
                const nav = sw.params.navigation as Record<string, unknown>;
                if (nav) { nav.prevEl = prevRef.current; nav.nextEl = nextRef.current; }
              }}
              breakpoints={{ 0: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 992: { slidesPerView: 3 } }}
            >
              {teamMembers.map((m) => (
                <SwiperSlide key={m.name}>
                  <div className="mry-team-member mry-text-center">
                    <FO>
                      <div
                        className="mry-member-photo-frame"
                        style={{ position: "relative", overflow: "hidden", paddingBottom: "140%", marginBottom: 20 }}
                      >
                        <Image
                          src={m.img}
                          alt={m.name}
                          fill
                          style={{ objectFit: "cover", objectPosition: "top" }}
                        />
                        <div
                          style={{
                            opacity: 0.5, position: "absolute", zIndex: 2,
                            inset: 0, backgroundColor: "rgba(255,255,255,0)",
                          }}
                        />
                      </div>
                    </FO>
                    <FO><h4 className="mry-mb-10">{m.name}</h4></FO>
                    <FO><p className="mry-text" style={{ lineHeight: "16px", margin: 0 }}>{m.role}</p></FO>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   SECTION 05 — Partners
═══════════════════════════════════════════ */
export function PartnerSection() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="mry-mb-100 mry-text-center">
            <Numbering num="05" label="We can become partners" />
            <FO><h3 className="mry-mb-40">We&apos;re here to help, let us take it from here.</h3></FO>
            <FO delay={0.1}>
              <p className="mry-text">
                We know that transparency is non-negotiable and that strong
                communication is the foundation of any great relationship. With
                the knowledge and expertise at Brand &amp; Mortar we are confident
                that we can make an impact on your business and its bottom line.
              </p>
            </FO>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   SECTION 06 — Testimonials Slider
═══════════════════════════════════════════ */
const testimonials = [
  {
    img: "/img/light/clients/c-1.jpg",
    name: "Emma Newman",
    role: "Creative director",
    text: "We evaluated numerous marketing firms and selected Mireya due to their experience in the solar industry, and the clear understanding of our business objectives that they demonstrated during the evaluation process.",
    stars: 5,
  },
  {
    img: "/img/light/clients/c-2.jpg",
    name: "Paul Trueman",
    role: "Creative director",
    text: "We were very impressed with the progressive campaign and thought it spoke volumes to the reality of businesses. We have been working our way into the Toronto area for almost a year now and ready to gain some traction in that city.",
    stars: 4,
  },
  {
    img: "/img/light/clients/c-3.jpg",
    name: "Viktoria Freeman",
    role: "Creative director",
    text: "We were very impressed with the progressive campaign and thought it spoke volumes to the reality of businesses. We have been working our way into the Toronto area for almost a year now.",
    stars: 4,
  },
];

export function TestimonialsSection() {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <div className="mry-main-title mry-title-center" style={{ paddingBottom: 40 }}>
            <Numbering num="06" label="Testimonials" />
            <FO><h2>Our customers say</h2></FO>
            <div className="mry-arrows">
              <div className="mry-sl-nav" style={{ display: "flex" }}>
                <div
                  ref={prevRef}
                  style={{ width: 100, height: 100, display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer", color: "#010d0d" }}
                >
                  <FaArrowLeft size={20} />
                </div>
                <div
                  ref={nextRef}
                  style={{ width: 100, height: 100, display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer", color: "#010d0d" }}
                >
                  <FaArrowRight size={20} />
                </div>
              </div>
              <div className="mry-label">Slider Navigation</div>
            </div>
          </div>
        </div>

        <div className="col-lg-8">
          <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            spaceBetween={30}
            loop
            speed={1200}
            onBeforeInit={(sw) => {
              const nav = sw.params.navigation as Record<string, unknown>;
              if (nav) { nav.prevEl = prevRef.current; nav.nextEl = nextRef.current; }
            }}
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.name}>
                <div className="mry-title-center">
                  <FO>
                    <img
                      src={t.img}
                      alt={t.name}
                      style={{
                        width: 60, height: 60, borderRadius: "50%",
                        objectFit: "cover", objectPosition: "center",
                        display: "block", margin: "0 auto 20px",
                      }}
                    />
                  </FO>
                  <FO><h4 className="mry-mb-20">{t.name}</h4></FO>
                  <FO>
                    <div
                      className="mry-subtitle mry-mb-20"
                      style={{ paddingLeft: 0, paddingTop: 0 }}
                    >
                      {t.role}
                    </div>
                  </FO>
                  <FO><p className="mry-text">{t.text}</p></FO>
                  <FO>
                    <ul className="mry-star-rate">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <li key={i} className={i >= t.stars ? "mry-empty" : ""}>
                          <FaStar size={14} />
                        </li>
                      ))}
                    </ul>
                  </FO>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
