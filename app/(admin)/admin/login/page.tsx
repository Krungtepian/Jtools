"use client"

import React, { useState } from "react"

export default function Login() {

  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")

  return <div className="flex justify-center w-full h-full p-10 bg-slate-600">
      <form method="POST" className="shadow-2xl">
        <p className="text-zinc-400">Form test </p>
        <input type="text" autoComplete="false"/>
        <input type="password" autoComplete="false"/>
      </form>
    </div>
}