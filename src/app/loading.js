import { Skeleton } from "@/components/ui/skeleton";

const loadingPage = () => {
  return (
    <>
      <div className="w-screen h-screen">
        <Skeleton />
      </div>
    </>
  );
};

export default loadingPage;
