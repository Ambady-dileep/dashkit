import { useAuth } from "../hooks/useAuth"; 

export default function Dashboard() {

  const { user } = useAuth()

  return (
    <div>
      <h1>Welcome:{user.email}</h1>
    </div>
  )
}
