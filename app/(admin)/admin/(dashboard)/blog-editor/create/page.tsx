import React from 'react'

export default async function CreateBlog() {
  return <div className='flex divide-y flex-col'>
    <p className='p-2'>Create New Blog</p>
    <form className='flex flex-col py-2 px-8'>
      <input type='file' name='image-cover' accept='image/png, image/jpeg'></input>
      <input type="text" name='title' placeholder='Blog Title' className='border-indigo-500 border-2'/>
      <textarea name="description" id="description" cols={30} rows={10} placeholder='Blog Description' className='resize-none border-indigo-500 border-2'></textarea>
      <button className='rounded border-2'>Create</button>
    </form>
  </div>
}