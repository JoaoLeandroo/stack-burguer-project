import { FaPlusCircle } from "react-icons/fa";

interface BurguerCardProps {
  src: string;
  alt: string;
  title: string;
  price: number | string;
}

const BurguerCard: React.FC<BurguerCardProps> = ({
  src,
  alt,
  title,
  price,
}) => {
  return (
    <div className="max-w-[800px] mx-auto bg-zinc-700 flex shadow-xl rounded-l-3xl rounded-r-[10px] transition duration-300">
      <div className="w-1/2">
        <img
          className="w-full rounded-l-3xl"
          src={src}
          alt={alt}
          title={title}
        />
      </div>
      <div className="w-1/2">
        <div className="px-6 py-2 flex items-center justify-center font-bold md:text-3xl text-lg bg-green-500 rounded-tr-[10px] w-full">
          <h2 className="uppercase drop-shadow-xl">{title}</h2>
        </div>
        <div className="w-full px-6">
          <p className="font-bold text-2xl py-4 md:py-11">
            R$
            <span className="text-5xl md:text-7xl underline underline-offset-4 text-yellow-400">
              {price}
            </span>
          </p>

          <div className="w-full">
            <button className="h-11 bg-green-500 w-full hover:bg-green-600 p-3 flex items-center justify-center gap-2 rounded-full md:rounded-[5px] font-semibold">
              <FaPlusCircle size={20} />
              <span className="hidden md:block">Adicionar ao Carrinho</span>
              <span className="block md:hidden">Add</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurguerCard;