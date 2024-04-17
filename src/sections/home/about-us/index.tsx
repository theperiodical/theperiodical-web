import Link from "next/link";

export default function AboutUsSection(){
    return(
        <div className="flex flex-col mt-14 mx-12">
            <div className="flex flex-row h-4">
                <div className="w-1/5 bg-white" />
                <div className="w-3/5 bg-secondary" />
                <div className="w-1/5 bg-black" />
            </div>
        <div className="flex flex-row gap-12 justify-between px-20 py-12 bg-primary-light">
            <div className="flex flex-col py-10 w-1/2">
                <p className="text-sm mb-4">ABOUT US</p>
                <h1 className="text-xl
                 font-bold">We are a community of content writers who share their learnings</h1>
                <p className="text-sm text-grey mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="#" className="text-sm text-black hover:text-primary-dark underline">Read more &gt;</a>
            </div>
            <div className="flex flex-col w-1/2 py-10">
                <p className="text-sm mb-4">OUR MISSION</p>
                <h1 className="text-xl font-bold">Creating valuable content for creatives all around the world</h1>
                <p className="text-sm text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
        </div>
        </div>
    )
}