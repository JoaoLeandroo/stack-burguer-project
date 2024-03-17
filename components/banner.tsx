import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ButtonCard from "@/app/pages/_components/ButtonCard";
import { FaPlusCircle } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="w-full mx-auto bg-zinc-200 rounded-xl flex items-center">
      <Dialog>
        <DialogTrigger className="w-full">
          <div className="mx-auto h-[125px] md:h-[200px] lg:h-[250px] rounded-xl shadow-xl relative">
            <Image
              src={"/combo_1.jpg"}
              width={1280}
              height={720}
              alt="Combo burguer"
              className="w-full h-full rounded-xl object-cover"
            />
            <h2 className="absolute font-bold text-2xl md:text-6xl uppercase top-2 md:top-10 left-10 text-green-400 bg-zinc-600/60 p-3 rounded-md">
              Stack Combo
              <br />
              <span className="text-3xl text-green-400">
                R${" "}
                <strong className="text-white text-5xl underline underline-offset-8">
                  55.90
                </strong>
              </span>
            </h2>
          </div>
        </DialogTrigger>
        <DialogContent>
          <div className="w-full h-full rounded-xl">
            <div className="w-full h-[350px] mt-1 relative">
              <div className="absolute top-5 left-5">
                <span className="text-3xl text-green-400">
                  R${" "}
                  <strong className="text-white text-5xl underline underline-offset-8">
                    55.90
                  </strong>
                </span>
              </div>
              <Image
                src={"/combo_1.jpg"}
                alt="Combo Burguer"
                width={1280}
                height={720}
                className="w-full h-full rounded-xl object-cover"
              />
            </div>
            <div className="mt-2">
              <ButtonCard itemsClient={{ product: "Stack Combo", valueProduct: 55.90 }}>
                <div className="md:h-11 h-8 bg-green-500 w-full hover:bg-green-600 p-1 md:p-3 flex items-center justify-center gap-2 rounded-full md:rounded-[5px] font-semibold">
                  <FaPlusCircle size={20} />
                  <span className="hidden md:block">Adicionar ao Carrinho</span>
                  <span className="block md:hidden">Add</span>
                </div>
              </ButtonCard>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Banner;
