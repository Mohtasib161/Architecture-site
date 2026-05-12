import type { Metadata } from "next";
import HeroSlider from "@/components/home/HeroSlider";

export const metadata: Metadata = {
  title: "Mireya – Architecture & Interior Design",
  description:
    "Discover stunning architecture and interior design projects by Mireya Studio. Based in Toronto, Canada.",
};

export default function HomePage() {
  return <HeroSlider />;
}
