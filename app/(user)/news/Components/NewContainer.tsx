import React from 'react'
import News from './news'

type Props = {}

async function getData() {
    const news = [
        {id: 1, coverImageUrl: "", title : "new1"},
        {id: 2, coverImageUrl: "", title : "new2"},
        {id: 3, coverImageUrl: "", title : "new3"},
        {id: 4, coverImageUrl: "", title : "new4"},
        {id: 5, coverImageUrl: "", title : "new5"},
        {id: 6, coverImageUrl: "", title : "new6"},
    ] // placeholder news, this will be from DB
    return new Promise((resolve) => {
        resolve({ news })
    }) // return a promise to pretend it is from a DB
}

export default async function NewContainer({}: Props) {
    interface NewsItem { 
        id: number;
        description: string;
        coverImageUrl: string;
        title: string;
    }

    const { news }: { news: NewsItem[] } = await getData() as { news: NewsItem[] }

  return (
    <div className='mt-7'>
        <h1 className='text-center font-semibold text-3xl mb-3'>ข่าวสาร</h1>
        <div className='flex flex-wrap gap-10 align-middle justify-center'>
            {news.map(n => {
                return <News newsId={n.id} newsCoverImage={n.coverImageUrl} newsDescription={n.description} newsTitle={n.title} />
            })}
        </div>
    </div>
  )
}

