import Container from "./Container";
import { FaList, FaHamburger } from "react-icons/fa";
import { BiSolidDrink } from "react-icons/bi";
import { GiPieSlice } from "react-icons/gi";

import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const HeaderBar = () => {
  return (
    <header className="bg-red-500/80">
      <Container>
        <div className="w-full flex justify-between items-center text-white py-3">
          <h1 className="font-bold text-4xl leading-6 uppercase drop-shadow-2xl">
            Stack <br /> <span className="text-green-700">Burguer</span>
          </h1>

          <Sheet>
            <SheetTrigger>
              <FaList size={30} />
            </SheetTrigger>
            <SheetContent>
              <div className="w-full flex flex-col gap-5 mt-5">
                <Link
                  href={"/"}
                  className="w-full h-9 bg-red-500 flex gap-3 items-center px-5 hover:bg-red-600 transition duration-300 rounded-md text-white font-bold"
                >
                  <FaHamburger size={20} />
                  Hamburguers
                </Link>

                <Link
                  href={"/"}
                  className="w-full h-9 bg-red-500 flex gap-3 items-center px-5 hover:bg-red-600 transition duration-300 rounded-md text-white font-bold"
                >
                  <BiSolidDrink size={20} />
                  Bebidas
                </Link>

                <Link
                  href={"/"}
                  className="w-full h-9 bg-red-500 flex gap-3 items-center px-5 hover:bg-red-600 transition duration-300 rounded-md text-white font-bold"
                >
                  <GiPieSlice size={20} />
                  Sobremesas
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
};

export default HeaderBar;
