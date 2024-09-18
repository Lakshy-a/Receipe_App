"use client"
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  return (
    <>
      <div className="w-full h-screen text-6xl font-semibold text-white flex justify-center items-center relative bg-[url('/image_3.avif')] bg-fill bg-center">
        <button className="bg-red-500 text-white text-xl px-4 py-2 rounded-full absolute right-5 top-4">
          <Link href={"/receipes"}>Go To Receipes List</Link>
        </button>
        {/* Welocme to the Receipes App... */}
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "Welcome to the Recipes App...",
            2000, // wait 1s before replacing "Mice" with "Hamsters"
            "Discover Delicious Recipes...",
            2000,
            "Cook Your Favorite Dishes!",
            2000,
          ]}
          wrapper="span"
          speed={150}
          style={{ fontSize: "1em", display: "inline-block" }}
          repeat={Infinity}
        />
      </div>
    </>
  );
}
