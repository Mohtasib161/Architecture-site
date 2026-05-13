import Image from "next/image";

interface PageBannerProps {
  bgImage: string;
  subtitle: string;
  title: string;
  outlineText?: string;
  byline?: string;
  scrollHref?: string;
}

/* 
  Matches exactly:
  .mry-head-bg  → absolute, z-index:-2, top:0, left:0, height:550px
  .mry-bg-overlay → gradient from bg-color
  .mry-banner.mry-p-140-0 → padding-top: 140px
  .mry-title-center → text-align: center
  .mry-subtitle → centered amber line above (::before)
  .mry-scroll-hint → mouse icon animation
*/
export default function PageBanner({
  bgImage,
  subtitle,
  title,
  outlineText,
  byline,
  scrollHref = "#mry-anchor",
}: PageBannerProps) {
  return (
    <>
      {/* Background image with gradient fade */}
      <div
        className="mry-head-bg"
        style={{
          position: "absolute",
          zIndex: -2,
          top: 0,
          left: 0,
          height: 550,
          width: "100%",
        }}
      >
        <Image
          src={bgImage}
          alt="page background"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
        />
        <div
          className="mry-bg-overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: 555,
            backgroundImage:
              "linear-gradient(0deg, #f7f8fa 1%, rgba(247,248,250,0.94) 100%)",
          }}
        />
      </div>

      {/* Banner content — padding-top: 140px */}
      <div className="mry-banner" style={{ paddingTop: 140 }}>
        <div className="container">
          <div className="mry-main-title mry-title-center">
            {/* Subtitle — centered amber line */}
            <div
              className="mry-subtitle mry-mb-20"
              style={{
                paddingLeft: 0,
                paddingTop: 20,
                display: "block",
                textAlign: "center",
              }}
            >
              {subtitle}
            </div>

            {/* H1 */}
            <h1 className="mry-mb-20">
              {title}
              {outlineText && (
                <>
                  <br />
                  <span className="mry-border-text">{outlineText}</span>
                </>
              )}
            </h1>

            {/* Byline */}
            {byline && (
              <div
                className="mry-text"
                style={{ textAlign: "center", marginBottom: 20 }}
                dangerouslySetInnerHTML={{ __html: byline }}
              />
            )}

            {/* Scroll hint — mouse icon */}
            <div className="mry-scroll-hint-frame">
              <a
                className="mry-scroll-hint"
                href={scrollHref}
                style={{
                  margin: "0 auto",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 100,
                  width: 100,
                }}
              >
                <span
                  style={{
                    display: "block",
                    position: "relative",
                    width: 22,
                    height: 35,
                    borderRadius: 15,
                    border: "solid 2px #0d0d0d",
                  }}
                />
              </a>
              <div className="mry-label" style={{ textAlign: "center", color: "#0d0d0d" }}>
                Scroll Down
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
