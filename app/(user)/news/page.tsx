import React from 'react'
import News from './components/News'

type Props = {}

async function getData() {
  try {
    console.log('running')
    let data: any = await fetch(`${process.env.GHOST_URL}/api/content/pages/?key=${process.env.GHOST_KEY}`, {
      cache: 'no-cache',
      headers: {
        'Accept': 'application/json'
      },
      method: "GET"
    })
    data = await data.json()
    return data['pages'];
    return { 'a': 'a' }
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
                return ( <News key={n.id} newsId={n.id} newsCoverImage={n.feature_image} newsDescription={n.feature_image_caption} newsTitle={n.title} newsDate={n.created_at} /> )
            })}
        </div>
    </div>
  )
}