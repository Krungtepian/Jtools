import React from 'react'

// async function getData(id: any) {
//   return new Promise(async(resolve) => {
//     try {
//       let data = await fetch(`http://localhost:8000/wp-json/wp/v2/posts/${id}`, {
//         cache: 'no-cache',
//         headers: {
//           'Accept': 'application/json'
//         }
//       })
//       data = await data.json()
//       console.log(data)
//       return data;
//     } catch(e) {
//       console.error(e)
//     }
//     resolve(<>
//       Data from DB, saved from tinymce
//     </>) // return promise again, placeholder for DB/API call
//   })
// }

export default async function News({ params }: any) {
  
  // const n = await getData(params.id)

  return <iframe src={`http://localhost:8000/archives/${params.id}?iframe_mode=true`} className='ifr w-full h-screen grow'></iframe>
}