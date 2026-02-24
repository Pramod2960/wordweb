import Image from "next/image";
// import { CarouselPlugin } from "./_components/carouselpage";
// import { HomePageDummy } from "./_components/dumy";
// import HomeSearchBox from "./_components/homepage-search";
import { Suspense } from "react";
import Link from "next/link";
import { CarouselWords } from "@/featurers/home/component/carousel-page";
import HomeSearchWord from "@/featurers/home/component/home-search-word";

const GuestPage = () => {
  return (
    <>
      <div className="h-full flex flex-col items-center justify-center mb-5">
        <div className="flex flex-col items-center justify-center ">
          <div className="flex flex-row px-10 md:gap-x-5 items-center justify-center pt-5 ">
            <Link href="https://www.sanskrit.nic.in/" target="_blank">
              <Image
                height={100}
                width={100}
                alt="sanjay"
                src="/central_sanskrit_unversity.jpg"
                className="mx-auto  animate-slidein [--slidein-delay:1200ms] opacity-0"
              />
            </Link>

            <h1
              className="  animate-slidein [--slidein-delay:300ms] 
              opacity-0  mb-6 scroll-m-20  text-slate-800 font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white "
            >
              English-Sanskrit (Wordweb)
            </h1>

            <Link href="https://www.amity.edu/gurugram/" target="_blank">
              <Image
                height={100}
                width={100}
                alt="amity_logo"
                src="/amity.png"
                className="mx-auto  animate-slidein [--slidein-delay:1200ms] opacity-0"
              />
            </Link>
          </div>
          <div
            className=" animate-slidein [--slidein-delay:500ms] opacity-0
            text-3xl md:text-4xl  bg-linear-to-r from-fuchsia-600 
            to-pink-600 text-white px-4 p-2 rounded-full pb-4 w-fit mb-3
            "
          >
            explore new words
          </div>
          <HomeSearchWord />
        </div>
        <div
          className="animate-slidein [--slidein-delay:700ms] opacity-0
      text-sm md:text-xl text-neutral-500 mt-2 mb-5 max-w-xs md:max-w-2xl text-center mx-auto"
        >
          Unlock the power of language with our user-friendly platform, offering
          a vast array of definitions, synonyms, and linguistic insights.
        </div>

        <div className="mx-5  animate-slidein [--slidein-delay:900ms]  opacity-0 ">
          <CarouselWords />
        </div>
      </div>
    </>
  );
};

export default GuestPage;
