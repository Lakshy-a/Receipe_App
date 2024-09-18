"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const ReceipeList = ({ receipes }) => {
  console.log(receipes.length);
  return (
    <>
      {receipes.map((receipe, index) => (
        <Link key={index} href={`/receipePage/${receipe.id}`}>
          <div className="rounded-xl overflow-hidden shadow-xl bg-zinc-300  text-center mb-8 ">
            <div className="w-full overflow-hidden">
              <Image
                src={receipe.image}
                key={index}
                height={300}
                width={300}
                alt={receipe.name}
                className="cursor-pointer hover:scale-[1.1] transition ease-in-out"
              />
            </div>
            <div className="mt-2 text-xl font-bold px-4 text-left">{receipe.name}</div>
            <div className="mt-2 flex  justify-between px-4">
              <div className="text-lg font-semibold">{`Rating: ${receipe.rating}`}</div>
              <div className="text-lg font-semibold">{receipe.cuisine}</div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default ReceipeList;
