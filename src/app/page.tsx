import Image from "next/image";
export default function Home() {
  return (
   <div className="flex flex-col w-screen h-screen justify-center items-center bg-teal-100">
    <Image src="/images/UnderConstruction.jpg" alt="UnderConstruction" className="flex-1 m-10" width={500} height={500}/>
    <p className="text-black text-2xl m-10 flex-1">This Page is under construction. Please come back soon.</p>
   </div>
  );
}
