export default function MonthlyTopicsSection(){
    const items=[{
        image:"/Images/topic_1.jpg",
        title:'Figma, Sketch, XD or Lunacy? Who rules?',
        writtenBy: "Sudha Murthy",
        date: "Feb 9, 2021",
        href:""   
       },
       {
        image:"/Images/topic_2.jpg",
        title:'Figma, Sketch, XD or Lunacy? Who rules?',
        writtenBy: "Jenny Wilson",
        date: "Feb 9, 2021",
        href:""   
       },
       {
        image:"/Images/topic_3.jpg",
        title:'Figma, Sketch, XD or Lunacy? Who rules?',
        writtenBy: "Aditya Shekhawat",
        date: "Feb 9, 2021",
        href:""   
       }
       ]
    return(
<div className="flex flex-col items-center pb-14">
    <div className="text-2xl font-bold">Topic of the Month</div>
    <div className="flex flex-row gap-10 px-10">
    <div className="flex ">
                {
                    items.map((item, index)=>(
                        <div key={index} className="flex flex-col hover:bg-primary-light p-10 ">
                            <img src={item.image} alt={item.title} className='flex  w-[350px] h-full object-cover' />
                            <h1 className=" flex items-center justify-content text-lg font-bold">{item.title}</h1>
                            <div className="flex flex-row justify-between">
                            <p className="text-xs text-grey">Written By: <span className="text-primary-dark">{item.writtenBy}</span></p>
                            <p className="text-xs text-grey">Published On: <span className="text-primary-dark">{item.date}</span></p>
                            </div>
                        </div>
                    ))
                }
            </div>
    </div>
    </div>
    )
}