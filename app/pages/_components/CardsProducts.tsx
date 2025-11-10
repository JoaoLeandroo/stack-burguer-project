import React, { useMemo } from "react";
import ButtonCard from "./ButtonCard";
import { FaPlusCircle } from "react-icons/fa";

interface CardProductsProps {
  src: string;
  alt: string;
  title: string;
  price: number | string;
}

const formatBRL = (value: number | string) => {
  if (typeof value === "number") {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    }).format(value);
  }
  // Evita "R$ R$"
  const v = String(value).trim();
  return v.startsWith("R$") ? v : `R$ ${v}`;
};

const CardProducts: React.FC<CardProductsProps> = ({ src, alt, title, price }) => {
  const priceLabel = useMemo(() => formatBRL(price), [price]);

  return (
    <article
      className="
        group w-full overflow-hidden rounded-2xl
        bg-white/80 dark:bg-zinc-800/80
        shadow-sm ring-1 ring-zinc-200/70 dark:ring-zinc-700/60
        transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5
      "
      aria-label={title}
    >
      {/* Imagem */}
      <div className="relative">
        <img
          src={src}
          alt={alt}
          title={title}
          className="
            w-full h-auto object-cover
            aspect-[4/3] sm:aspect-[16/9]
            transition-transform duration-300 group-hover:scale-[1.02]
          "
          loading="lazy"
        />
        {/* Badge de preço */}
        <span
          className="
            absolute top-3 right-3
            rounded-full px-3 py-1 text-sm font-semibold
            bg-green-500 text-white shadow-md
          "
          aria-hidden="true"
        >
          {priceLabel}
        </span>
      </div>

      {/* Conteúdo */}
      <div className="p-4 sm:p-5">
        <h3
          className="
            text-base sm:text-lg font-semibold
            text-zinc-900 dark:text-zinc-100
            line-clamp-2
          "
          title={title}
        >
          {title}
        </h3>

        <div className="mt-4">
          <ButtonCard itemsClient={{ product: title, valueProduct: price }}>
            <div
              className="
                w-full inline-flex items-center justify-center gap-2
                rounded-full sm:rounded-lg
                px-4 py-2.5 sm:py-3
                font-medium
                bg-green-600 text-white
                hover:bg-green-700 active:bg-green-800
                transition-colors duration-200
                focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400
              "
              aria-label={`Adicionar ${title} ao carrinho por ${priceLabel}`}
            >
              <FaPlusCircle className="text-white" size={18} />
              <span className="hidden sm:inline">Adicionar ao Carrinho</span>
              <span className="sm:hidden">Adicionar</span>
            </div>
          </ButtonCard>
        </div>
      </div>
    </article>
  );
};

export default CardProducts;
