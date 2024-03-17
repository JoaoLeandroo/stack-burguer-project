"use client";
import Container from "@/components/Container";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useContext, useState } from "react";
import { AuthContext } from "@/contexts/auth";

const Cart = () => {
  const { itemsAdd } = useContext(AuthContext);
  const [valorFinal, setValorFinal] = useState(0);
  return (
    <Container>
      <div className="w-full p-4 bg-[#000000a1] mt-3 rounded-xl">
        {itemsAdd.map((todo: any) => {
          return (
            <div key={todo} className="flex flex-col items-center">
              <div className="flex gap-3 justify-between items-center border w-full p-5 rounded-xl mt-2">
                <p className="text-2xl font-bold">{todo.product}</p>
                <p className="text-2xl font-bold flex gap-x-1 items-center w-[140px] justify-between py-3">
                  <span className="text-green-500 text-sm">R$</span>{" "}
                  {todo.valueProduct}
                  <RiDeleteBin5Line
                    size={30}
                    title="Remover pedido"
                    className="ml-2"
                    color="red"
                  />
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Cart;