import { useState, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

export default function Login() {
  const [email, setEmail] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  const { login, user } = useAuth()
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoginLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000))
    await login(email)
  }

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  if (loginLoading) return <Loader />;

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        placeholder="Enter email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  )
}