import Link from "next/link"

export const Navbar=()=>{

    return(
<div className="flex flex-row items-center justify-between px-14 py-6 w-full">
    <div className="">logo</div>
    <div className="flex flex-row gap-4 items-center">
        <Link href={'#home'} className="text-center">Home</Link>
        <Link href={'#gists'} className="text-center">Gists</Link>
        <Link href={'#about-us'} className="text-center">About Us</Link>
        <Link href={'#contact-us'} className="text-center">Contact Us</Link>
    <button className="w-28 h-10 bg-primary-dark text-white hover:bg-primary-hover">Subscribe</button></div>
</div>
    )
}