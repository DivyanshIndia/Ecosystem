import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center  bg-black p-4 md:p-24 font-mono ">
      <div className="flex h-fit md:h-full w-full flex-col items-center justify-center  bg-zinc-900/30  p-10 md:p-24 text-white rounded-md">
        <div className="flex h-full w-full flex-col items-center justify-center gap-5  bg-zinc-900/40 p-4 md:p-24 text-white rounded-md text-nowrap">
          <h1 className=" text-2xl md:text-5xl">Whenever Wherever !</h1>

          <Link href={'/home'} >
            <p className="  md:text-3xl border border-white p-2 hover:scale-90 rounded-lg " >You not need to know</p>
          </Link>
          <Link href={'/portfolio'} >
            <p className="md:text-3xl border border-white p-2 rounded-lg hover:scale-90 " >show</p>
          </Link>
        </div>
      </div>



    </main>
  );
}
