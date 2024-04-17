'use client'
import {Icon} from "@iconify/react"

export default function AuthorsListSection(){
    const items=[
        {
            authimg:"/Images/periodical.jpg",
            name:"Jenny Wilson",
            role:'Content Writer @Company',  
           },
           {
            authimg:"/Images/periodical.jpg",
            name:"Jenny Wilson",
            role:'Content Writer @Company',  
           },
           {
            authimg:"/Images/periodical.jpg",
            name:"Jenny Wilson",
            role:'Content Writer @Company',  
           },
           {
            authimg:"/Images/periodical.jpg",
            name:"Jenny Wilson",
            role:'Content Writer @Company',  
           }
    ]
    return(
        <div className="flex flex-col gap-4 items-center mt-28 mx-12">
            <p className="text-2xl font-bold">List of Authors</p>
<div className="flex flex-row gap-8 ">
    {
        items.map((item, index)=>(
            <div key={index} className="flex flex-col w-30 h-full bg-primary-light items-center mt-6 pt-14 pb-8 px-10">
                <img src={item.authimg} alt={item.name} className='rounded-full w-16 h-16' />
                <h1 className="text-lg font-bold">{item.name}</h1>
                <p className="text-sm text-grey">{item.role}</p>
                <div className="flex flex-row gap-2 mt-16">
                    <Icon icon="mingcute:facebook-line" />
                    <Icon icon="uil:instagram" />
                    <Icon icon="ri:twitter-line" />
                    <Icon icon="mingcute:linkedin-line" />
                </div>
            </div>
        ))
    }
</div>
</div>
    )
}