"use client";
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext<any>({});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [count, setCount] = useState(0);
  const [itemsAdd, setItemsAdd] = useState([])

  useEffect(() => {
    setCount(itemsAdd.length)
  }, [itemsAdd])

  return (
    <AuthContext.Provider value={{ count, setCount, itemsAdd, setItemsAdd }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
