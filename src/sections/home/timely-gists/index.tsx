
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
        <div id="gists" className="flex flex-row justify-between gap-12 py-14 px-14">
            <div className="flex flex-col w-3/5 h-1/6 py-14">
                <div className="text-2xl font-bold">Weekly Gist</div>
                <div className="text-grey text-sm">Feb 12, 2024 - Feb 19, 2024</div>
                <div className=" flex flex-col gap-4 border border-[#ebe8e8] mt-6 rounded-md px-14 py-10">
                    <img src="/Images/gist_1.png" alt="hero-image" className=' w-full h-[200px] object-cover' />
                    <div className="flex flex-col gap-1">
                   <p className="text-lg font-bold">Revitalizing the India-Myanmar-Thailand Trilateral Highway: A Regional Connectivity Endeavor.</p>
                    <p className="text-grey text-sm">India’s External affairs minister recently met his Myanmar counterpart and discussed expediting projects, especially the India-Myanmar-Thailand trilateral highway. The highway will span a distance of approximately 1,360 kilometres (845 miles), starting from Moreh in Manipur, India.</p></div>
                    <button className="w-28 h-10 bg-primary-dark text-white mt-6 text-sm hover:bg-primary-hover">Read More &gt;</button>
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