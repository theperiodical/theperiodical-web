"use client"

import HTMLFlipBook from 'react-pageflip';
import { LegacyRef, ReactNode, forwardRef, useRef } from 'react';

const Page = forwardRef(({
    children,
    index,
    type
}:{
    children:ReactNode
    index?: number
    type: 'cover' | 'page'
}, ref: LegacyRef<HTMLDivElement>)=>{

    let style = ""

    if(type === 'cover'){
        style+="bg-[#785e3a] border-[#998466] [box-shadow:inset_0_0_30px_0_rgba(36,10,3,.5),_-2px_0_5px_2px_rgba(0,0,0,.4)]"
    }
    else if(type==='page'){
        style+="bg-[#fdfaf7] border-[#c2b5a3]"
    }

    let pageStyle = ""

    if(index!==undefined){
        if(index % 2 === 0){
            pageStyle += "border-r-0 [box-shadow:inset_-7px_0_30px_-7px_rgba(0,0,0,.4)]"
        }
        else{
            pageStyle += "border-l-0 [box-shadow:inset_7px_0_30px_-7px_rgba(0,0,0,.4)]"
        }
    }

    return(
        <div className={`${style} ${pageStyle} page `} ref={ref}>
            <div className={`flex flex-col w-full h-full p-8 text-sm page-content`}>
                <div className={`page-text h-full flex flex-col ${type === 'cover' ? 'items-center justify-center text-2xl font-bold':''}`}>
                    {children}
                </div>
                {
                index ?
                <div className='page-footer text-right'>
                    {index + 1}
                </div>
                :
                null
            }
            </div>
           
        </div>
    )
})

Page.displayName="Page"

export default function GistSection(){
    const gistRef = useRef();
    
    const gist ={
        title: "Gist 1 Title",
        description:"Gist 1 Description",
        content:[
            {
                id:"1",
                title:"Gist Topic 1",
                content:"<h1><strong>topic 1<strong></h1> \n <p>Content 1</p>\n <h1>topic 2</h1> \n <p>Content 2</p>\n"
            },
            {
                id:"2",
                title:"Gist Topic 2",
                content:"<h1>topic 1</h1> \n <p>Content 1</p>\n <h1>topic 2</h1> \n <p>Content 2</p>\n"
            },
            {
                id:"3",
                title:"Gist Topic 3",
                content:"<h1>topic 1</h1> \n <p>Content 1</p>\n <h1>topic 2</h1> \n <p>Content 2</p>\n"
            },
            {
                id:"4",
                title:"Gist Topic 4",
                content:"<h1>topic 1</h1> \n <p>Content 1</p>\n <h1>topic 2</h1> \n <p>Content 2</p>\n"
            },

        ]
    }

    return(
        <div className="flex flex-col mt-10 px-14">
            <div className="text-primary-dark text-lg font-bold">Feb 12, 2024 - Feb 19, 2024</div>
            <div className="text-xs text-grey">Navya Srivastav</div>
            <div className="font-bold text-2xl mt-6 mb-6">Step-by-step guide to choosing great font pairs</div>
<div className='mx-8 [box-shadow:0_0_20px_0_rgba(0,0,0,.5)]'>
            <HTMLFlipBook ref={gistRef}   width={550}
            height={800}
            size="stretch"
            minWidth={315}
            maxWidth={1000}
            minHeight={400}
            maxHeight={1533}
            maxShadowOpacity={0.5}

            mobileScrollSupport={true}>
                    <div className='bg-[#FBF8DD]'/>
                    <Page type='cover'>
                       <h1>{gist.title}</h1>
                       <p>{gist.description}</p>
                    </Page>
                    {
                        gist.content.map((item, index)=>
                            <Page type='page' key={index} index={index}>
                                <p dangerouslySetInnerHTML={{__html: item.content}}/>
                            </Page>
                        )
                    }
            </HTMLFlipBook>
            </div>
        </div>
    )
}