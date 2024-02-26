import Container from "./Container";
import { FaList, FaHamburger } from "react-icons/fa";
import { BiSolidDrink } from "react-icons/bi";
import { GiPieSlice } from "react-icons/gi";

import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const HeaderBar = () => {
  return (
    <header className="bg-red-300">
      <Container>
        <div className="w-full h-14 flex justify-between items-center">
          <h1>
            Stack <br /> <span>Burguer</span>
          </h1>

          <Sheet>
            <SheetTrigger>
              <FaList size={20} />
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
