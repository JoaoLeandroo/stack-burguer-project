"use client";
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext<any>({});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [count, setCount] = useState(0);
  const [pedidos, setPedidos] = useState<object>(["pedidos...", "teste2"]);

  useEffect(() => {
    console.log(pedidos)
  }, [pedidos])

  return (
    <AuthContext.Provider value={{ count, setCount, pedidos, setPedidos }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
