'use client'
import {Icon} from "@iconify/react"
import Link from "next/link";


export  function Footer(){
    return(
        <div className="flex flex-col bg-primary-light w-full mt-28">
        <div className="flex flex-row items-center pt-8 px-8 justify-between ">
            <div className="flex flex-col w-full">
                <div className="flex flex-row w-full justify-between px-8  items-center">
                    <div className="font-bold text-lg">Logo</div>
                    <div className="flex gap-4" >
                    <Link href={'#'} className="text-center text-sm">Home</Link>
                    <Link href={'#'} className="text-center text-sm">Gists</Link>
                    <Link href={'#'} className="text-center text-sm">About Us</Link>
                    <Link href={'#'} className="text-center text-sm">Contact Us</Link>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between mt-10 py-14 mx-8 px-24 bg-[#E8EFCF]">
                    <div className="text-2xl w-96 font-bold">Subscribe to our news letter to get latest updates and news</div>
                    <div className="flex gap-1 items-center" >
                    <div className=" flex items-center w-60 h-10 border border-[#4C4C4C] text-xs text-grey pl-2">Enter Your Email</div>
                    <button className="w-32 h-10 bg-primary-dark text-white text-sm">Subscribe</button>
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center mx-8 mt-10">
                <div className="flex flex-col gap-1">
                    <div className="text-xs text-grey">Finstreet 118 2561 Fintown</div>
                <div className="text-xs text-grey">Hello@finsweet.com  020 7993 2905</div></div>
                <div className="flex flex-row gap-4 ">
                    <Icon icon="mingcute:facebook-line" />
                    <Icon icon="uil:instagram" />
                    <Icon icon="ri:twitter-line" />
                    <Icon icon="mingcute:linkedin-line" />
                </div>
                </div>
                
            </div>
        </div>
        <div className="flex flex-col w-full mt-8">
        <div className="flex flex-row h-4">
            <div className="w-1/5 bg-white" />
            <div className="w-3/5 bg-secondary" />
            <div className="w-1/5 bg-black" />
        </div>
    </div>
    </div>
    )
}