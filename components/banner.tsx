import Image from "next/image";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
        <DialogContent></DialogContent>
      </Dialog>
    </div>
  );
};

export default Banner;
