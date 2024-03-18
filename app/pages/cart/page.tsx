"use client";
import Container from "@/components/Container";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useContext } from "react";
import { AuthContext } from "@/contexts/auth";
import ButtonRemoveItem from "../_components/ButtonRemoveItem";
import CalculadoValueProducts from "../_components/CalculadoValueProducts";

const Cart = () => {
  const { itemsAdd } = useContext(AuthContext);

  return (
    <Container>
      <div className="w-full p-4 bg-[#000000a1] mt-3 rounded-xl">
        {itemsAdd.map((todo: any, index: any) => {
          return (
            <div key={todo} className="flex flex-col items-center">
              <div className="flex gap-3 justify-between items-center border w-full p-5 rounded-xl mt-2">
                <p className="text-2xl font-bold">{todo.product}</p>
                <p className="text-2xl font-bold flex gap-x-1 items-center w-[140px] justify-between py-3">
                  <span className="text-green-500 text-sm">R$</span>{" "}
                  {todo.valueProduct}
                  <ButtonRemoveItem index={index}>
                    <RiDeleteBin5Line
                      size={30}
                      title="Remover pedido"
                      className="ml-2"
                      color="red"
                    />
                  </ButtonRemoveItem>
                </p>
              </div>
            </div>
          );
        })}
      <CalculadoValueProducts />
      </div>
    </Container>
  );
};

export default Cart;
