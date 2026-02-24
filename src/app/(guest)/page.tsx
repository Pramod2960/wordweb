"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import HomeSearchWord from "@/featurers/home/component/home-search-word";
import { CarouselWords } from "@/featurers/home/component/carousel-page";

export default function GuestPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Alphabets
  const english = "ABCDEFGHIJKL".split("");
  const hindi = "अआइईउऊएऐओऔकखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसह".split("");
  const sanskrit = "ऋॠऌॡएऐछजझञटठडढणतथदधनपफबभमयरलवशषसह".split("");

  const floatingAlphabets = useMemo(
    () =>
      [...english, ...hindi, ...sanskrit].slice(0, 35).map((char, i) => ({
        char,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 1 + Math.random() * 3,
        duration: 15 + Math.random() * 20,
        delay: Math.random() * 10,
        rotation: Math.random() * 360,
        opacity: 0.1 + Math.random() * 0.1,
        color: i < english.length ? "#3b82f6" : "#10b981",
      })),
    [],
  );

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen overflow-hidden mb-5">
      {/* 🌌 Floating Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {floatingAlphabets.map((item, i) => (
          <span
            key={i}
            className="absolute"
            style={{
              left: `${item.left}%`,
              top: `${item.top}%`,
              fontSize: `50px`,
              opacity: "5%",
              color: item.color,
              // transform: `rotate(${item.rotation}deg)`,
              animation: `float ${item.duration}s ease-in-out ${item.delay}s infinite`,
              whiteSpace: "nowrap",
            }}
          >
            {item.char}
          </span>
        ))}
      </div>

      {/* 🌟 MAIN CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
        {/* LOGOS + TITLE */}
        <div className="flex items-center gap-6 pt-5 flex-wrap justify-center">
          <Link href="https://www.sanskrit.nic.in/" target="_blank">
            <Image
              src="/central_sanskrit_unversity.jpg"
              alt="logo"
              width={90}
              height={90}
              className="animate-slidein [--slidein-delay:1200ms] opacity-0"
            />
          </Link>

          <h1 className="animate-slidein [--slidein-delay:300ms] opacity-0 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            English-Sanskrit <span className="text-blue-600">(Wordweb)</span>
          </h1>

          <Link href="https://www.amity.edu/gurugram/" target="_blank">
            <Image
              src="/amity.png"
              alt="logo"
              width={90}
              height={90}
              className="animate-slidein [--slidein-delay:1200ms] opacity-0"
            />
          </Link>
        </div>

        {/* TAGLINE */}
        {/* <div className="animate-slidein [--slidein-delay:500ms] opacity-0 mt-2 text-2xl md:text-3xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-6 py-2 rounded-full">
          explore new words
        </div> */}

        {/* 🔎 SEARCH */}
        <div className="mt-6 w-full max-w-xl">
          <HomeSearchWord />
        </div>

        {/* DESCRIPTION */}
        <p className="animate-slidein [--slidein-delay:700ms] opacity-0 text-neutral-500 mt-6 max-w-2xl">
          Unlock the power of language with our user-friendly platform, offering
          a vast array of definitions, synonyms, and linguistic insights.
        </p>

        {/* 🎠 CAROUSEL */}
        <div className="animate-slidein [--slidein-delay:900ms] opacity-0 mt-5 w-full max-w-5xl items-center justify-center flex">
          <CarouselWords />
        </div>
      </div>

      {/* 🎞 FLOAT ANIMATION */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(10deg);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }
      `}</style>
    </div>
  );
}
