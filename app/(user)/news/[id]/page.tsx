import React from 'react'

async function getData(id: any) {
  try {
    console.log('running')
    let data: any = await fetch(`${process.env.GHOST_URL}/api/content/pages/${id}/?key=${process.env.GHOST_KEY}`, {
      cache: 'no-cache',
      headers: {
        'Accept': 'application/json'
      },
      method: "GET"
    })
    data = await data.json()
    console.log(data)
    return data['pages'][0];
  } catch(e) {  
    console.error(e)
  }
}

export default async function News({ params }: any) {
  
  const post = await getData(params.id)

  return <div id='post'>
    <h1 className='text-xl'>{post.title}</h1>
    <div id='post-body' dangerouslySetInnerHTML={{ __html: post.html }}/>
  </div>
}