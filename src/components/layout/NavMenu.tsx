"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "/", children: [] },
  { label: "About", href: "/about", children: [] },
  {
    label: "Works",
    href: "/works",
    children: [
      { label: "Portfolio Grid", href: "/works" },
      { label: "Single Project", href: "/works/little-cottage" },
    ],
  },
  { label: "Contact", href: "/contact", children: [] },
  {
    label: "Blog",
    href: "/blog",
    children: [
      { label: "Blog List", href: "/blog" },
      { label: "Publication", href: "/blog/omuli-museum-of-the-horse" },
    ],
  },
];

export default function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const pathname = usePathname();

  const toggleExpand = (label: string) => {
    setExpandedItem(expandedItem === label ? null : label);
  };

  return (
    <>
      {/* Top Bar */}
      <div
        className="fixed top-0 left-0 right-0 z-[99] flex justify-between items-center h-[100px] w-full"
        style={{ pointerEvents: "none" }}
      >
        {/* Logo */}
        <div
          className="flex items-center px-10 h-full"
          style={{ background: "#f7f8fa", pointerEvents: "auto" }}
        >
          <Link href="/" onClick={() => setIsOpen(false)}>
            <span className="text-2xl font-black tracking-widest text-dark font-heading">
              MIREYA
            </span>
          </Link>
        </div>

        {/* Menu Button */}
        <div
          className="flex items-center gap-4 px-10 h-full cursor-pointer"
          style={{ background: "#f7f8fa", pointerEvents: "auto" }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="mry-label hidden sm:block">Menu</span>
          <div className="relative w-8 h-6 flex flex-col justify-between cursor-pointer">
            <span
              className={`block h-[2px] bg-dark rounded transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-[11px]" : ""
              }`}
            />
            <span
              className={`block h-[2px] bg-dark rounded transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[2px] bg-dark rounded transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-[11px]" : ""
              }`}
            />
          </div>
        </div>
      </div>

      {/* Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-[98] flex"
            style={{ background: "#fcfdff" }}
          >
            {/* Navigation column */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="flex-1 flex items-center px-10 md:px-20"
            >
              <nav className="w-full max-w-sm">
                <ul className="space-y-5">
                  {navItems.map((item) => {
                    const isActive =
                      item.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(item.href) && item.href !== "/";
                    const hasChildren = item.children.length > 0;

                    return (
                      <li key={item.label} className="relative">
                        <div className="flex items-center justify-between">
                          {hasChildren ? (
                            <button
                              onClick={() => toggleExpand(item.label)}
                              className={`text-[34px] font-black font-heading leading-tight transition-colors duration-300 ${
                                isActive ? "text-accent" : "text-dark hover:text-muted"
                              }`}
                            >
                              {item.label}
                            </button>
                          ) : (
                            <Link
                              href={item.href}
                              onClick={() => setIsOpen(false)}
                              className={`text-[34px] font-black font-heading leading-tight transition-colors duration-300 ${
                                isActive ? "text-accent" : "text-dark hover:text-muted"
                              }`}
                            >
                              {item.label}
                            </Link>
                          )}
                          {hasChildren && (
                            <button
                              onClick={() => toggleExpand(item.label)}
                              className="text-muted text-sm transition-transform duration-300"
                              style={{
                                transform:
                                  expandedItem === item.label
                                    ? "rotate(180deg)"
                                    : "rotate(0deg)",
                              }}
                            >
                              ▾
                            </button>
                          )}
                        </div>

                        {/* Sub-menu */}
                        <AnimatePresence>
                          {hasChildren && expandedItem === item.label && (
                            <motion.ul
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden pl-5 space-y-2 mt-2"
                            >
                              {item.children.map((child) => (
                                <li key={child.href}>
                                  <Link
                                    href={child.href}
                                    onClick={() => setIsOpen(false)}
                                    className="mry-label text-muted hover:text-dark transition-colors duration-200"
                                  >
                                    {child.label}
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </motion.div>

            {/* Info box column */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="hidden md:flex w-[380px] items-center px-12"
              style={{ background: "#f7f8fa" }}
            >
              <div className="space-y-6">
                {[
                  { label: "Country:", value: "Canada" },
                  { label: "City:", value: "Toronto" },
                  { label: "Address:", value: "HTGS 4456 North Av." },
                  {
                    label: "Email:",
                    value: "mireya.inbox@mail.com",
                    href: "mailto:mireya.inbox@mail.com",
                  },
                  {
                    label: "Phone:",
                    value: "+4 9(054) 996 84 25",
                    href: "tel:+49054996842",
                  },
                ].map((info) => (
                  <div key={info.label}>
                    <p className="mry-label text-muted">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="mry-text hover:text-accent transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <p className="mry-text">{info.value}</p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
