import React from 'react'
import News from './news'

type Props = {}



export default function NewContainer({}: Props) {
    interface ListItem{ 
        id : number ,
        title : string
    }

    const fakeNews : ListItem[] = [
        {id : 1 , title : "new1"},
        {id : 2 , title : "new2"},
        {id : 3 , title : "new3"},
        {id : 4 , title : "new4"},
        {id : 5 , title : "new5"},
        {id : 6 , title : "new6"},


    ]

  return (
    <div>
        <h1 className='text-center font-semibold text-xl '>ข่าวสาร</h1>
        <div className='flex flex-wrap gap-10 align-middle justify-center'>
            {fakeNews.map(e=>{
                return <News/>
            })}
        </div>
    </div>
  )
}