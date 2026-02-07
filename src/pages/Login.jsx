import { useState } from 'react';
import { useAuth } from "../hooks/useAuth";

export default function Login() {
  const [email, setEmail] = useState("");
  const { login } = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault()
    login(email)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input
        type = "email"
        value = {email}
        placeholder='Enter email'
        onChange={(e)=>setEmail(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  )
}