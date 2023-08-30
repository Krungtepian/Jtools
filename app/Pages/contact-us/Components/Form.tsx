import React from 'react'

type Props = {}

export default function Form({}: Props) {
  return (
    <div>
        <h1 className="pl-10">ต้องการติดต่อเรา</h1>
      <label className="block">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          Email
        </span>
        <input type="email" name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
      </label>
      <label className="block">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            First Name
          </span>
      <input type="First Name" name="First Name" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="First Name" />
    </label>
    <label className="block">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            Last name
          </span>
      <input type="Last name" name="Last name" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Last name" />
    </label>
        <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Telephone Number
              </span>
          <input type="number" name="number" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="+66 00-000-0000" />
        </label>
      <input type="text" placeholder="Your message here" className="mt-10 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" aria-placeholder="+66 00-000-0000" />
      <button className="mt-5 bg-gray-400 hover:bg-gray-300">
        Submit message
      </button>
    </div>
  )
}