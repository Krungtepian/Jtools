import React from 'react'

async function getData() {
  return new Promise((resolve) => {
    resolve(<>
      Data from DB, saved from tinymce
    </>) // return promise again, placeholder for DB/API call
  })
}

export default async function News({ params }: any) {
  
  const n = await getData()

  return <div>
    {params.id}

    {n}, // it will be an HTML, I think, idk

  </div>
}