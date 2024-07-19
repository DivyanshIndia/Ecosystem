import Link from 'next/link'
import React from 'react'
import { AiFillHome } from "react-icons/ai";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import { IoBook } from "react-icons/io5";




const Header = () => {
    return (
        <div className=' text-white font-bold font-mono fixed top w-full z-50'>
            <div className='bg-red-700/60 h-full flex flex-col  gap-10 p-5'>
                <div className='flex  justify-around  w-full '>
                    <Link href={"/"} className='flex items-center justify-center gap-2 hover:text-zinc-800'>
                        <AiFillHome size={20} />
                        <p className='hidden md:block text-xl'>Home</p>
                    </Link>
                    <Link href={"/home"} className='flex items-center justify-center gap-2 hover:text-zinc-800'>
                        <RiDoubleQuotesL size={20} />
                        <RiDoubleQuotesR size={20} />
                        <p className=' hidden md:block text-xl '>Quotes</p>
                    </Link >
                    <Link href={"/portfolio"} className='flex items-center justify-center gap-2 hover:text-zinc-800' >
                        <IoBook size={20} />
                        <p className='hidden md:block text-xl'>Portfolio</p>
                    </Link>
                </div>


            </div>

        </div>
    )
}

export default Header