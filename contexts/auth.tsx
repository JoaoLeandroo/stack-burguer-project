"use client";
import { createContext, useState } from "react";

export const AuthContext = createContext<any>({});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [count, setCount] = useState(1);

  return (
    <AuthContext.Provider value={{ count, setCount }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
