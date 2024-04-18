import Link from "next/link";

export default function AboutUsSection(){
    return(
        <div id="about-us" className="flex flex-col mt-14 mx-12">
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
                <p className="text-sm text-grey mb-5">Step into our vibrant community of writers, where knowledge flows freely and creativity thrives. Join us as we collaborate, learn, and grow together on our writing adventures!</p>
                <a href="#" className="text-sm text-black hover:text-primary-dark underline">Read more &gt;</a>
            </div>
            <div className="flex flex-col w-1/2 py-10">
                <p className="text-sm mb-4">OUR MISSION</p>
                <h1 className="text-xl font-bold">Creating valuable content for enlightment around the world.</h1>
                <p className="text-sm text-grey">Our mission is to craft insightful content that encapsulates global news, offering concise summaries and in-depth analysis for discerning readers. We aim to inform, enlighten, and engage our audience with the latest developments from around the world.</p>
                </div>
        </div>
        </div>
    )
}