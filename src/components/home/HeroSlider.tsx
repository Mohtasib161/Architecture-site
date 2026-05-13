"use client";

import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Parallax,
  Navigation,
  Pagination,
  Autoplay,
  Keyboard,
  Mousewheel,
} from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { heroSlides } from "@/data/projects";

import "swiper/css";
import "swiper/css/parallax";
import "swiper/css/pagination";

export default function HeroSlider() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  // Trigger progress bar animation on slide change
  const resetProgress = () => {
    setAnimate(false);
    if (progressRef.current) {
      progressRef.current.style.transition = "none";
      progressRef.current.style.width = "0%";
    }
    setTimeout(() => {
      setAnimate(true);
      if (progressRef.current) {
        progressRef.current.style.transition = "width 10s linear";
        progressRef.current.style.width = "100%";
      }
    }, 50);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Prevent SSR hydration mismatch from Swiper's DOM manipulation
  if (!isMounted) {
    return <div className="relative w-screen h-screen overflow-hidden bg-[#f7f8fa]" />;
  }

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#f7f8fa]">
      {/* Swiper custom pagination bullets moved to globals.css */}
      {/* Dots Background (works if canvas.js script is loaded globally) */}
      <canvas className="mry-dots absolute top-0 left-0 w-full h-screen opacity-60 pointer-events-none" />

      {/* Swiper main slider */}
      <Swiper
        className="w-full h-screen"
        modules={[Parallax, Navigation, Pagination, Autoplay, Keyboard, Mousewheel]}
        speed={1200}
        parallax={true}
        loop={true}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        keyboard={{ enabled: true }}
        mousewheel={{ releaseOnEdges: true }}
        pagination={{
          el: ".mry-slider-pagination",
          clickable: true,
        }}
        navigation={{
          nextEl: ".mry-button-next",
          prevEl: ".mry-button-prev",
        }}
        onSwiper={(sw) => {
          swiperRef.current = sw;
          resetProgress();
        }}
        onSlideChange={(sw) => {
          setActiveIndex(sw.realIndex);
          resetProgress();
        }}
      >
        {heroSlides.map((slide, i) => (
          <SwiperSlide key={slide.id} className="w-screen h-screen relative overflow-hidden">
            <div className="w-screen min-h-full h-screen">
              <div className="max-w-[1150px] mx-auto h-full relative">
                {/* IMAGE — floats right, 60% width */}
                <div className="float-right w-full lg:w-[60%] h-full relative overflow-hidden group">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="absolute z-[1] top-0 left-0 w-full h-full object-cover object-center lg:object-right"
                    priority={i === 0}
                    data-swiper-parallax="500"
                    data-swiper-parallax-scale="1.4"
                  />
                  <div className="absolute z-[2] inset-0 bg-transparent transition-colors duration-400" />
                </div>

                {/* TEXT FRAME — absolute overlay, full height */}
                <div className="absolute z-[3] flex items-end lg:items-center h-screen w-full top-0 left-0 pointer-events-none">
                  {/* container here uses globals.css bootstrap styles to keep it aligned with rest of site */}
                  <div className="container pointer-events-auto">
                    <div
                      className="w-full max-w-[430px] lg:max-w-none lg:w-full bg-[#f7f8fa] lg:bg-transparent p-[40px] lg:p-0 -ml-[15px] lg:ml-0"
                      data-swiper-parallax-x="30%"
                      data-swiper-parallax-scale=".7"
                      data-swiper-parallax-opacity="0"
                      data-swiper-parallax-duration="1000"
                    >
                      {/* Subtitle with amber line */}
                      <p className="mb-[10px] lg:mb-[20px] inline-block relative pl-[40px] text-[11px] uppercase font-semibold text-[#424242] tracking-[2px] before:content-[''] before:w-[30px] before:h-[3px] before:bg-[#ffb74d] before:rounded-[3px] before:absolute before:left-0 before:top-[calc(50%-1.5px)] lg:before:top-[calc(50%-4px)]">
                        {slide.subtitle}
                      </p>

                      {/* H1 with outline text */}
                      <h1 className="mb-[15px] lg:mb-[30px] text-[32px] leading-[38px] tracking-[-1px] md:text-[54px] md:leading-[60px] md:tracking-normal lg:text-[72px] lg:leading-[84px] font-black text-[#010d0d] font-sans drop-shadow-[0_0_40px_rgba(247,248,250,0.5)] relative overflow-hidden lg:overflow-visible">
                        {slide.title}
                        <br />
                        <span className="md:[-webkit-text-stroke:2px_#010d0d] md:text-transparent max-md:[-webkit-text-stroke:0px] max-md:text-inherit">{slide.outlineText}</span>
                      </h1>

                      {/* Body text */}
                      <p
                        className="mb-[15px] lg:mb-[30px] whitespace-pre-line text-[#424242] text-[14px] leading-[20px] md:text-[16px] md:leading-[22px]"
                        dangerouslySetInnerHTML={{ __html: slide.description }}
                      />

                      {/* Buttons */}
                      <div className="flex flex-wrap items-center mt-2">
                        <Link href={slide.projectHref} className="inline-flex items-center justify-center h-[55px] px-[40px] mr-[10px] text-[11px] uppercase font-semibold tracking-[2px] text-[#0d0d0d] border-2 border-[#0d0d0d] rounded-[3px] transition-colors duration-400 hover:text-[#ffb74d] hover:border-[#ffb74d]">
                          Open Case
                        </Link>
                        <Link href={slide.allHref} className="inline-flex items-center justify-center h-[55px] px-[20px] text-[11px] uppercase font-semibold tracking-[2px] text-[#0d0d0d] transition-colors duration-400 hover:text-[#ffb74d]">
                          All Projects
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ===== Vertical Pagination (right panel) ===== */}
      <div className="hidden lg:flex absolute z-[9] top-0 right-0 h-screen w-[100px] p-[40px] items-center bg-[#f7f8fa]">
        <div className="mry-slider-pagination flex flex-col mb-[60px] w-[20px]" />
      </div>

      {/* ===== Bottom Navigation Panel ===== */}
      <div className="absolute z-[9] bottom-0 left-0 h-[80px] sm:h-[100px] w-screen flex items-center">
        {/* Progress bar */}
        <div className="hidden lg:flex items-center h-[100px] w-[25vw] pl-[60px]">
          <div className="flex h-[3px] w-full bg-black/10 rounded-[3px] overflow-hidden relative">
            <div className="absolute top-0 left-0 h-full w-0 bg-[#ffb74d] rounded-[3px]" ref={progressRef} />
          </div>
        </div>

        {/* Arrows */}
        <div className="absolute top-0 left-0 lg:left-auto lg:right-0 px-[10px] lg:px-[20px] lg:pr-[20px] lg:pl-[40px] bg-transparent lg:bg-[#f7f8fa] flex justify-start lg:justify-end items-center h-[80px] sm:h-[100px]">
          <span className="hidden lg:inline-block mr-[20px] text-[#0d0d0d] text-[11px] font-semibold tracking-[2px] uppercase">
            Slider Navigation
          </span>
          <button
            className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] mry-button-prev flex justify-center items-center cursor-pointer text-[#0d0d0d] text-[20px] transition-colors hover:text-[#ffb74d] bg-transparent border-none p-0 outline-none"
            aria-label="Previous slide"
          >
            <FaArrowLeft />
          </button>
          <button
            className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] mry-button-next flex justify-center items-center cursor-pointer text-[#0d0d0d] text-[20px] transition-colors hover:text-[#ffb74d] bg-transparent border-none p-0 outline-none"
            aria-label="Next slide"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
