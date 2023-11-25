import React from 'react'
import News from './components/News'

type Props = {}

async function getData() {
  try {
    let data = await fetch('http://localhost:8000/wp-json/wp/v2/posts?_embed&page=1&per_page=6&_fields=author,id,excerpt,title,link,featured_media_src_url,featured_media,date', {
      cache: 'no-cache',
      headers: {
        'Accept': 'application/json'
      }
    })
    data = await data.json()
    return data;
  } catch(e) {
    console.error(e)
  }
}

export default async function Blog({ }: Props) {

  const news: any = await getData()
  return (
    <div className='mt-[7vh]'>
        <h1 className='text-center font-semibold text-3xl mb-3'>ข่าวสาร</h1>
        <div className='flex flex-wrap gap-10 align-middle justify-center'>
            {news.map((n: any) => {
                return <News key={n.id} newsId={n.id} newsCoverImage={n.featured_media_src_url} newsDescription={n.excerpt.rendered} newsTitle={n.title.rendered} newsDate={n.date} />
            })}
        </div>
    </div>
  )
}