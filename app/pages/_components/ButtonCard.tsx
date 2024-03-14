"use client";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { AuthContext } from "@/contexts/auth";

const ButtonCard = ({ children }: { children: React.ReactNode }) => {
  const { count, setCount } = useContext(AuthContext);

  const addCart = () => {
    setCount(count + 1);
    toast.success("Adicionado ao carrinho!")
  };

  return (
    <button onClick={addCart} className="w-full">
        {children}
    </button>
  );
};

export default ButtonCard;
