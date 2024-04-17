
export default function TimelyGistsSection(){
    const items=[{
     fromDate:"Feb 5, 2024",
     toDate:"Feb 12, 2024",
     title:'8 Figma design systems that you can download for free today.',
     href:""   
    },
    {
        fromDate:"Feb 5, 2024",
        toDate:"Feb 12, 2024",
        title:'8 Figma design systems that you can download for free today.',
        href:""   
       },
       {
        fromDate:"Feb 5, 2024",
        toDate:"Feb 12, 2024",
        title:'8 Figma design systems that you can download for free today.',
        href:""   
       },
       {
        fromDate:"Feb 5, 2024",
        toDate:"Feb 12, 2024",
        title:'8 Figma design systems that you can download for free today.',
        href:""   
       },
       {
        fromDate:"Feb 5, 2024",
        toDate:"Feb 12, 2024",
        title:'8 Figma design systems that you can download for free today.',
        href:""   
       }]
    return(
        <div className="flex flex-row justify-between gap-12 py-14 px-14">
            <div className="flex flex-col w-3/5 h-1/6 py-14">
                <div className="text-2xl font-bold">Weekly Gist</div>
                <div className="text-grey text-sm">Feb 12, 2024 - Feb 19, 2024</div>
                <div className=" flex flex-col gap-4 border border-[#ebe8e8] mt-6 rounded-md px-14 py-10">
                    <img src="/Images/periodical.jpg" alt="hero-image" className=' w-full h-[200px] object-cover' />
                    <div className="flex flex-col gap-1">
                   <p className="text-lg font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    <p className="text-grey text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p></div>
                    <button className="w-28 h-10 bg-primary-dark text-white mt-6 text-sm">Read More &gt;</button>
                </div>
            </div>
            <div className="flex flex-col gap-2 w-2/5 h-1/6 py-14">
                <div className="flex flex-row justify-between">
                    <div className="text-2xl font-bold pl-4">Previous Gists</div>
                    <div className="text-sm text-grey">View All</div>
            </div>
                <div className="flex flex-col py-5">
                    {
                        items.map((item, index)=>(
                            <div key={index} className="flex flex-col hover:bg-primary-light p-4">
                                <p className="text-grey text-xs">{item.fromDate}-{item.toDate}</p>
                                <h1 className="text-lg font-bold">{item.title}</h1>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>

    )
}