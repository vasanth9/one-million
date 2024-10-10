import Image from "next/image";
export default function Home() {
  console.log("who are you",process.env.BASE_URL);
  return (
   <div className="flex flex-col w-screen h-screen justify-center items-center bg-teal-100">
    <Image src={`${process.env.BASE_URL}/images/UnderConstruction.jpg`} alt="UnderConstruction" className="flex-1 m-10 mt-20" width={500} height={500}/>
    <p className="text-black text-2xl m-10 flex-1">This Page is under construction. Please come back soon.</p>
   </div>
  );
}
