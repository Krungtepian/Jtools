import React from 'react'

type Props = {}

export default function News({}: Props) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl rounded-3xl">
        <img src="https://yt3.googleusercontent.com/ytc/AOPolaRv5nxVBkDZBYnrUckT7U61WQSbT330Db3ve5aqqQ=s900-c-k-c0x00ffffff-no-rj" alt="porshe" />
        <div className="gap-3 flex flex-col mt-3 ml-5 mb-3">
          <h2 className="text-3xl font-normal ">News !</h2>
          <p className='pl-3'>รายละเอียด ย่อ</p>
          <p>and Full detail</p>
          <p className='flex justify-end pr-5'>วัน/เดือน/ปี</p>
        </div>
    </div>
  )
}2