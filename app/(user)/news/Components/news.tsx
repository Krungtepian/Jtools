import React from 'react'
import Link from 'next/link'

type Props = {}

interface NewsProps {
  newsId: number;
  newsTitle: string;
  newsDescription: string;
  newsCoverImage: string;
  newsDate: string;
}

export default function News({ newsId, newsCoverImage, newsTitle, newsDescription, newsDate }: NewsProps) {
  return (
    <Link href={`news/${newsId}`} className="card w-96 bg-base-100 shadow-xl rounded-3xl">
        <img src={newsCoverImage} alt="porshe" />
        <div className="gap-3 flex flex-col mt-3 ml-5 mb-3">
          <h2 className="text-3xl font-normal ">{newsTitle}</h2>
          <p className='pl-3'>{newsDescription}</p>
          <p className='flex justify-end pr-5'>{newsDate.split('T')[0]}</p>
        </div>
    </Link>
  )
}