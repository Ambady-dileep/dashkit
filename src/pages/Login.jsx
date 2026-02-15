import { useState, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const { login, user } = useAuth()
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    login(email)
  }

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

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