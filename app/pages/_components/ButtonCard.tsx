"use client";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { AuthContext } from "@/contexts/auth";

interface ButtonCardProps {
  children: React.ReactNode;
  itemsClient: any;
}

const ButtonCard: React.FC<ButtonCardProps> = ({ children, itemsClient }) => {
  const { count, setCount, itemsAdd, setItemsAdd } = useContext(AuthContext);

  const addCart = () => {
    setCount(count + 1);
    toast.success("Adicionado ao carrinho!");
    const arr = []
    arr.push(...itemsAdd, itemsClient)
    setItemsAdd(arr)
  };

  return (
    <button onClick={addCart} className="w-full">
      {children}
    </button>
  );
};

export default ButtonCard;
