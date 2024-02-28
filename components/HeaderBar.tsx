import Container from "./Container";
import { FaList, FaHamburger, FaShoppingCart } from "react-icons/fa";
import { BiSolidDrink } from "react-icons/bi";
import { GiPieSlice } from "react-icons/gi";

import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const HeaderBar = () => {
  return (
    <header className="bg-red-700/90 sticky top-0 z-50">
      <Container>
        <div className="w-full flex justify-between items-center text-white py-3">
          <Link href={"/"}>
            <h1 className="font-bold text-4xl leading-6 uppercase drop-shadow-2xl">
              Stack <br /> <span className="text-green-500">Burguer</span>
            </h1>
          </Link>

          <div className="flex gap-8 items-center">
            <Link href={"/"}>
              <FaShoppingCart size={25} />
            </Link>
            <Sheet>
              <SheetTrigger>
                <FaList size={30} />
              </SheetTrigger>
              <SheetContent>
                <div className="w-full flex flex-col gap-5 mt-5">
                  <Link
                    href={"/pages/burguers"}
                    className="w-full h-9 bg-red-500 flex gap-3 items-center px-5 hover:bg-red-600 transition duration-300 rounded-md text-white font-bold"
                  >
                    <FaHamburger size={20} />
                    Hamburguers
                  </Link>

                  <Link
                    href={"/pages/drinks"}
                    className="w-full h-9 bg-red-500 flex gap-3 items-center px-5 hover:bg-red-600 transition duration-300 rounded-md text-white font-bold"
                  >
                    <BiSolidDrink size={20} />
                    Bebidas
                  </Link>

                  <Link
                    href={"/pages/candys"}
                    className="w-full h-9 bg-red-500 flex gap-3 items-center px-5 hover:bg-red-600 transition duration-300 rounded-md text-white font-bold"
                  >
                    <GiPieSlice size={20} />
                    Sobremesas
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default HeaderBar;
