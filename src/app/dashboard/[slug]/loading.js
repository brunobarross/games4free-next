import CardSkeleton from "@/app/components/CardSkeleton";
import HeaderContent from "@/app/components/Header";
import Navbar from "@/app/components/Navbar";

export default function Loading() {
  let arrayExample = Array(20);
  const quantidade = arrayExample.length;
  return (
    <>
      <Navbar />
      <div className="container mt-20 px-5 md:px-12 mb-12">
        <HeaderContent quantidade={quantidade} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 md:mt-16 w-full">
            {
                [...Array(20).keys()].map((index) => (
                    <CardSkeleton key={index} />
                ))
            }
        </div>
      </div>
    </>
  );
}
