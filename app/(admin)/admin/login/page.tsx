"use client"

import { redirect } from "next/navigation"
import React, { useState } from "react"

export default function Login() {
  
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")
  const [redir, shouldRedir] = useState(false)
  const [loginError, setLoginError] = useState(false)
  
  async function login(e: any) {
    e.preventDefault()
    fetch('/api/admin/login', {
      method: 'POST',
      body: JSON.stringify({ user, password })
    }).then(res => {
      if(res.status == 200) {  
        shouldRedir(true)
      } else if(res.status == 401) {
        setLoginError(true)
      }
    })
  }

  return <div className="flex justify-center w-full h-full p-10 bg-slate-600">
      { redir ? redirect('/admin/dashboard') : ''}
      { loginError ? 'this text will show if there\' as error logging in' : ''}
      <form method="POST" className="shadow-2xl" onSubmit={login}>
        <p className="text-zinc-400">Form test </p>
        <input type="text" autoComplete="false" required onChange={(e) => setUser(e.target.value)}/>
        <input type="password" autoComplete="false" required onChange={(e) => setPassword(e.target.value)}/>
        <button>Login</button>
      </form>
    </div>
}