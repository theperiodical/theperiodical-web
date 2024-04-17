import  Image  from 'next/image';
export default function HeroSection(){
    return(
        <div className="flex flex-row items-center justify-between gap-6 px-14">
            <div className="flex flex-col gap-2 w-1/2 h-1/6 py-28">
            <div className='text-sm'>POSTED ON <span className="font-bold">FEB 16, 2024</span></div>
            <div className="text-3xl font-bold">Delhi most polluted of 254 Indian cities</div>
            <div className="mt-1 text-xs">By Siddhant Shankar |  New Delhi </div>
            <div className='mt-2 text-sm'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</div>
            <button className="w-28 h-10 bg-primary-dark text-white mt-6 text-sm">Read More &gt;</button>
            </div>
            <div className='w-1/2 pt-8'><img src="/Images/periodical.jpg" alt="hero-image" className=' w-full h-[500px] object-cover' /></div>
        </div>
    )
}