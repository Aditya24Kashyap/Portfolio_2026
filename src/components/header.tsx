"use client";

import { ArrowLeftIcon, SunIcon, MoonIcon } from "./phosphorous-icons";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavigationItem from "./comman/navigation-item";
import { homeUrl, navigationRoutes } from "~/constants/navigation-routes";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored ? stored === "dark" : prefersDark;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <header className="mt-3 flex w-full items-center justify-between px-8 py-6 sm:mt-10">
      <div className="flex items-center">
        {pathname === homeUrl ? (
          <Image
            src="/gradient.png"
            alt="logo"
            className="size-5 overflow-hidden rounded-full object-cover"
            width={100}
            height={100}
          />
        ) : (
          <Link
            href={homeUrl}
            className="flex items-center justify-start gap-1 text-gray-600 transition-colors hover:text-gray-900"
          >
            <ArrowLeftIcon />
            home
          </Link>
        )}
      </div>
      <nav className="flex items-center space-x-8">
        {navigationRoutes.map((route) => (
          <NavigationItem key={route.name} {...route} />
        ))}
        <button
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
          className="flex items-center justify-center text-gray-600 transition-colors hover:text-gray-900"
        >
          {dark ? <SunIcon size={14} /> : <MoonIcon size={14} />}
        </button>
      </nav>
    </header>
  );
}
