import React, { useState } from "react"

export default function Login() {

  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")

  return <div>
    Test
    <form method="POST">
      <input type="text" autoComplete="false"/>
      <input type="password" autoComplete="false"/>
    </form>
  </div>
}