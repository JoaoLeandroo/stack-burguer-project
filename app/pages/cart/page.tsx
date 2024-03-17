"use client"
import Container from "@/components/Container";
import { useContext, useEffect } from "react";
import { AuthContext } from "@/contexts/auth";

const Cart = () => {
  const {pedidos} = useContext(AuthContext)

  useEffect(() => {
    console.log(pedidos)
  }, [pedidos])
  
  return (
    <Container>
      <div>
        {pedidos.map((item: any) => {
          return(
                <div key={item}>
                    <span>{item}</span>
                 </div>
           )
          })}
      </div>
    </Container>
  );
};

export default Cart;
