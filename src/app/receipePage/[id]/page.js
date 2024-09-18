import Specificreceipe from "@/components/Specificreceipe/page";

const detailsOfSpecificReceipe = async (id) => {
    const receipeDetails = await fetch(`https://dummyjson.com/recipes/${id}`);
    const receipeDetailsJson = await receipeDetails.json();
    return receipeDetailsJson;
}

const dynamicReceipe = async ({ params }) => {
  const { id } = params;
  console.log(id);

  const specificReceipe = await detailsOfSpecificReceipe(id);
//   console.log(specificReceipe);

  return (
    <>
      <Specificreceipe specificReceipe={specificReceipe} />
    </>
  );
};

export default dynamicReceipe;
