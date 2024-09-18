"use client";

import receipeList from "@/app/receipes/page";
import Image from "next/image";
import Link from "next/link";

const SpecificReceipe = ({ specificReceipe }) => {
  console.log(specificReceipe);

  return (
    <div className="w-screen h-screen bg-zinc-500 p-4 relative">
      <div className="w-full h-fit bg-white rounded-xl overflow-hidden flex">
        {specificReceipe?.image && (
          <div>
            <Image
              src={specificReceipe.image}
              alt="Recipe Image"
              height={350}
              width={350}
            />
          </div>
        )}
        <div className="flex-grow px-8 py-4 w-40 text-gray-600">
          <div className=" w-full text-5xl font-semibold ">
            {specificReceipe.name}{" "}
            <span className="text-3xl font-light">{`(${specificReceipe.tags})`}</span>
          </div>
          <div className="text-2xl font-semibold mt-4">
            {`Total Servings = ${specificReceipe.servings}`}{" "}
            <span className="text-xl font-light">{`(Calories Per Serving: ${specificReceipe.caloriesPerServing})`}</span>
          </div>
          <div className="mt-4 text-2xl font-semibold">
            {`Instructions :`}{" "}
            <span className="text-xl font-light text-justify">
              {specificReceipe.instructions}
            </span>
          </div>
        </div>
      </div>
      <button className="bg-red-500 px-4 py-2 rounded-full text-xl text-white font-semibold absolute bottom-32 right-4"><Link href="/receipes">Go Back</Link></button>

    </div>
  );
};

export default SpecificReceipe;
