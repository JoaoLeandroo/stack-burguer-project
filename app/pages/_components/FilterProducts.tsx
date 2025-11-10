import React, { useMemo } from "react";
import { stackProducts } from "@/app/utils/stackProducts";
import CardProducts from "../_components/CardsProducts";

type Category = "burguers" | "drinks" | "candy";

interface Product {
  id?: string;
  name: string;
  urlImg: string;
  price: number | string;
}

interface FilterProductsProps {
  position: number;
  typeProduct: Category;
}

const FilterProducts: React.FC<FilterProductsProps> = ({ position, typeProduct }) => {
  const items = useMemo(() => {
    const group = stackProducts?.[position];
    if (!group) return [] as Product[];

    // Acessa dinamicamente a categoria
    const stack = (group as Record<Category, Product[] | undefined>)[typeProduct];
    return Array.isArray(stack) ? stack : [];
  }, [position, typeProduct]);

  return (
    <section className="mt-8">
      <h2 className="sr-only">Lista de produtos</h2>

      {items.length > 0 ? (
        <ul className="
          grid gap-4 sm:gap-6
          grid-cols-[repeat(auto-fill,minmax(220px,1fr))]
        ">
          {items.map((product) => (
            <li key={product.id ?? product.name} className="group">
              <CardProducts
                src={product.urlImg}
                alt={product.name}
                title={product.name}
                price={product.price}
              />
            </li>
          ))}
        </ul>
      ) : (
        <div
          className="
            rounded-2xl border border-dashed border-neutral-300
            p-10 text-center
            bg-neutral-50/60
            dark:bg-neutral-900/30 dark:border-neutral-700
          "
        >
          <p className="text-sm text-neutral-600 dark:text-neutral-300">
            Nenhum item encontrado para <strong>{typeProduct}</strong> na posição {position}.
          </p>
        </div>
      )}
    </section>
  );
};

export default FilterProducts;
