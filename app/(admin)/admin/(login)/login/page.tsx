"use client"

import React, { useState } from "react"
import { useFormState } from "react-dom"
import login from './login-action'

export default function Login() {  
  const [state, formAction] = useFormState(login, { message: '' }) // invalid-u-pw = Invalid Username or Password

  return <div className="flex justify-center w-full h-full p-10 bg-slate-600">
      { state.message == 'success' ? 's' : ''}
      { state.message != 'success' ? state.message : ''}
      <form method="POST" className="shadow-2xl" action={formAction}>
        <p className="text-zinc-400">Form test </p>
        <input type="text" name="user" autoComplete="false" required/>
        <input type="password" name="pw" autoComplete="false" required/>
        <button>Login</button>
      </form>
    </div>
}