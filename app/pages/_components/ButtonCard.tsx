"use client";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { AuthContext } from "@/contexts/auth";

const ButtonCard = ({ children }: { children: React.ReactNode }) => {
  const { count, setCount, pedidos, setPedidos } = useContext(AuthContext);

  const addCart = () => {
    const items = [];
    items.push(...pedidos, "ola mundo");
    setPedidos(items);
    setCount(count + 1);
    toast.success("Adicionado ao carrinho!");
    setCount("namePedido");
  };

  return (
    <button onClick={addCart} className="w-full">
      {children}
    </button>
  );
};

export default ButtonCard;
