"use client";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/contexts/auth";

const CalculadoValueProducts = () => {
  const { itemsAdd } = useContext(AuthContext);
  const [valueFinal, setValueFinal] = useState<any>(0);

  useEffect(() => {
    let value = 0;
    for (let i = 0; i < itemsAdd.length; i++) {
      value += itemsAdd[i].valueProduct;
    }
    setValueFinal(value);
  }, [itemsAdd]);

  return (
    <div className="mt-5 bg-slate-900 rounded-xl">
      {valueFinal != 0 ? (
        <div className="w-full flex justify-between items-center">
          <span className="font-bold text-xl md:text-2xl p-3">Total a ser Pago:</span>
          <span className="md:text-5xl text-2xl font-bold mr-4">
            <strong className="text-green-500">R$</strong> {valueFinal.toFixed(2)}
          </span>
        </div>
      ) : (
        <span></span>
      )}
    </div>
  );
};

export default CalculadoValueProducts;
