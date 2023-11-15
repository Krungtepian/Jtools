'use client'

import React, { useState } from 'react'

type Props = {}

export default function Form({}: Props) {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  async function submitForm(e: any) {
    e.preventDefault();
    const request = await fetch('/api/contact-form', {
      method: 'POST',
      body: JSON.stringify({ name, email, message })
    })

    // do whatever with the response here (request.status)
    // 200 - E-mail sent
    // not 200 - error

  }

  return (
    <div className="min-h-screen flex flex-col justify-center text-center pt-10">
        <h2 className="text-bold text-3xl">ติดต่อพวกเรา/Contact us</h2>
        <form className="flex flex-col gap-4 mt-16 px-10 lg:mt-20 min-w-full lg:min-w-[500px] " onSubmit={submitForm}>
          <input
          onChange={e => setName(e.target.value)}
          id="name"
          name="name"
          required
          maxLength={128}
          placeholder='ชื่อ/Name'
          className="rounded-3xl border-2 outline-none px-8 py-2"
          />
          <input
          onChange={e => setEmail(e.target.value)}
          id="email"
          name="email"
          required
          maxLength={128}
          placeholder='อีเมล์/Email'
          className="rounded-3xl border-2 outline-none px-8 py-2"
          />
          <textarea
          onChange={e => setMessage(e.target.value)}
          id="message"
          name="message"
          required
          maxLength={1048576}
          placeholder='ข้อความ/Information'
          className="rounded-3xl border-2 outline-none px-8 py-6 min-h-[16em]"
          >
          </textarea>
          <div className="text-center mt-10">
              <button className="bg-black text-white rounded-3xl px-8 py-2" type='submit'>Submit</button>
          </div>
        </form>
    </div>
  )
}