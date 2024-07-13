import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center  bg-gradient-to-r from-indigo-500 via-blue-400 to-indigo-600 p-4 md:p-24 font-mono ">
      <div className="flex h-fit md:h-full w-full flex-col items-center justify-center   p-10 md:p-24 text-white rounded-md">
        <div className="flex h-full w-full flex-col items-center justify-center gap-5  p-4 md:p-24 text-white rounded-md text-nowrap">
          <h1 className=" text-2xl md:text-5xl ">Whenever Wherever !</h1>
          <Image src={"https://media.giphy.com/media/v6IC83XuNL7mZXZ3OO/giphy.gif"} alt="gif" width={200} height={200} className="rounded-full" />

          <Link href={'/home'} >
            <p className="  md:text-3xl  p-2 hover:scale-90 rounded-lg transition-all  bg-blue-700" >You not need to know</p>
          </Link>
          <Link href={'/portfolio'} >
            <p className="md:text-3xl  p-2 rounded-lg hover:scale-90  transition-all bg-indigo-700" >show</p>
          </Link>
        </div>
      </div>



    </main>
  );
}
