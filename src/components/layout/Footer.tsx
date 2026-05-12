"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaBehance, FaDribbble } from "react-icons/fa";

interface FooterProps {
  /* CTA block */
  subtitle?: string;
  heading?: string;         /* "Do you have" */
  outlineText?: string;     /* "a project?" */
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  /* subscribe variant */
  variant?: "default" | "subscribe";
  /* bottom bg image (about page uses prjct-5) */
  bottomBgImage?: string;
}

/*
  Matches exactly from about.html lines 457-488:
  - .mry-footer
  - .container > .mry-main-title.mry-title-center.mry-p-0-100
  - .mry-subtitle.mry-mb-20 (centered)
  - h2.mry-h1.mry-mb-20  (font-size: 72px like h1 via .mry-h1)
  - .mry-text.mry-mb-30
  - buttons
  - .mry-footer-copy { display:flex; justify-content:space-between }
  - .mry-head-bg.mry-head-bottom (absolute, bottom:0, height:300px, rotated overlay)
*/
export default function Footer({
  subtitle = "Call to action",
  heading = "Do you have",
  outlineText = "a project?",
  body = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br>Asperiores, cupiditate?",
  ctaLabel = "Let's discuss",
  ctaHref = "/contact",
  secondaryLabel = "Portfolio",
  secondaryHref = "/works",
  variant = "default",
  bottomBgImage = "/img/light/projects/prjct-5/1.jpg",
}: FooterProps) {
  return (
    <footer className="mry-footer" style={{ position: "relative", zIndex: 9 }}>
      <div className="container">
        <div
          className="mry-main-title mry-title-center"
          style={{ paddingBottom: 100 }}
        >
          {/* Subtitle — centered amber line */}
          <div
            className="mry-subtitle mry-mb-20"
            style={{ paddingLeft: 0, paddingTop: 20, textAlign: "center" }}
          >
            <style>{`.footer-sub::before{top:0;left:50%;margin-left:-15px;}`}</style>
            <span className="footer-sub">{subtitle}</span>
          </div>

          {/* Heading — uses .mry-h1 = font-size:72px */}
          <h2
            className="mry-mb-20"
            style={{ fontSize: 72, lineHeight: "84px", fontWeight: 900 }}
          >
            {heading}{" "}
            <span className="mry-border-text">{outlineText}</span>
          </h2>

          {/* Body */}
          {variant === "default" ? (
            <>
              <div
                className="mry-text mry-mb-30"
                dangerouslySetInnerHTML={{ __html: body }}
                style={{ textAlign: "center" }}
              />
              <div>
                <Link href={ctaHref} className="mry-btn mry-btn-color">
                  {ctaLabel}
                </Link>
                <Link href={secondaryHref} className="mry-btn-text">
                  {secondaryLabel}
                </Link>
              </div>
            </>
          ) : (
            /* Subscribe form */
            <>
              <div
                className="mry-text mry-mb-30"
                dangerouslySetInnerHTML={{ __html: body }}
                style={{ textAlign: "center" }}
              />
              <form
                className="mry-form mry-form-subscribe"
                onSubmit={(e) => e.preventDefault()}
                style={{ maxWidth: 500, margin: "0 auto", position: "relative" }}
              >
                <div>
                  <input type="email" name="email" placeholder="type.your.mail@here" />
                </div>
                <button type="submit" className="mry-btn" style={{ position: "absolute", bottom: 0, right: -10 }}>
                  Subscribe
                </button>
              </form>
            </>
          )}
        </div>
      </div>

      {/* Copyright bar */}
      <div
        className="mry-footer-copy"
        style={{ padding: "40px 0", backgroundColor: "#fcfdff", color: "#424242" }}
      >
        <div
          className="container"
          style={{ fontSize: 14, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}
        >
          <div>Mireya © early 2021</div>
          <ul
            className="mry-social"
            style={{ margin: 0, padding: 0, display: "flex", listStyle: "none" }}
          >
            {[
              { icon: <FaFacebookF />, href: "#" },
              { icon: <FaInstagram />, href: "#" },
              { icon: <FaBehance />, href: "#" },
              { icon: <FaDribbble />, href: "#" },
            ].map((s, i) => (
              <li key={i} style={{ margin: "0 15px", transition: "0.4s ease-in-out" }}>
                <a href={s.href} style={{ color: "#424242" }}>{s.icon}</a>
              </li>
            ))}
          </ul>
          <div>
            By:{" "}
            <a
              href="https://themeforest.net/user/ultimatewebsolutions/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#424242" }}
            >
              UWS
            </a>
          </div>
        </div>
      </div>

      {/* Bottom background image — rotated gradient overlay */}
      {bottomBgImage && (
        <div
          style={{
            position: "absolute",
            height: 300,
            bottom: 0,
            left: 0,
            width: "100%",
            zIndex: -1,
          }}
        >
          <Image
            src={bottomBgImage}
            alt="footer background"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: 305,
              backgroundImage:
                "linear-gradient(0deg, #f7f8fa 1%, rgba(247,248,250,0.94) 100%)",
              transform: "rotate(180deg)",
            }}
          />
        </div>
      )}
    </footer>
  );
}
