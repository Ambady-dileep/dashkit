import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(()=>{
    const storedUser = localStorage.getItem('user')

    if (storedUser){
      setUser(JSON.parse(storedUser))
    }
    setAuthLoading(false)
  },[])

  const login = (email) => {
    const userData = { email }
    setUser(userData);
    localStorage.setItem("user",JSON.stringify(userData))
  };
     
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user")
  };

  const value = {
    user,
    login,
    logout,
    authLoading,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}