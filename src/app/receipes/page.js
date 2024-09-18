import ReceipeList from "@/components/ReceipeList/page";
import Link from "next/link";

const fetchReceipes = async () => {
  try {
    const receipes = await fetch("https://dummyjson.com/recipes");
    const fetchedReceipes = await receipes.json();
    return fetchedReceipes.recipes;
  } catch (error) {
    throw new error();
  }
};

const receipeList = async () => {
  const receipes = await fetchReceipes();
  return (
    <>
      <div className="px-4 py-2 flex justify-between mt-4">
        <h1 className=" text-2xl font-bold">Receipe List</h1>
        <button>
          <Link
            href={"/"}
            className="bg-red-500  px-4 py-2 rounded-full text-xl  text-white"
          >
            Go To Home Page
          </Link>
        </button>
      </div>
      <div className="flex flex-wrap w-full justify-evenly py-4">
        <ReceipeList receipes={receipes} />
      </div>
    </>
  );
};

export default receipeList;
