"use client";
import Container from "./Container";
import { FaList, FaHamburger, FaShoppingCart } from "react-icons/fa";
import { BiSolidDrink, BiDish } from "react-icons/bi";
import { GiPieSlice } from "react-icons/gi";
import { MdContactSupport } from "react-icons/md";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { useContext } from "react"
import { AuthContext } from "@/contexts/auth";

const HeaderBar = () => {
  const { count } = useContext(AuthContext)

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
            <Link href={"/pages/cart"}>
              <div className="relative px-1">
                {count > 0 ? 
                  <span className="absolute -top-2.5 -right-1 text-[12px] p-2 font-bold bg-slate-900 border border-slate-950 w-5 h-5 rounded-full flex items-center justify-center">
                    {count}
                  </span>
                  :
                <span></span>
              }
                <FaShoppingCart size={25} />
              </div>
            </Link>

            <Sheet>
              <SheetTrigger>
                <FaList size={30} />
              </SheetTrigger>
              <SheetContent>
                <div className="w-full flex flex-col gap-5 mt-5">
                  <Link
                    href={"/pages/burguers"}
                    className="w-full h-9 bg-red-500  hover:bg-red-600 transition duration-300 rounded-md text-white font-bold"
                  >
                    <SheetClose className="w-full h-full flex gap-3 items-center px-5">
                      <FaHamburger size={20} />
                      Hamburguers
                    </SheetClose>
                  </Link>

                  <Link
                    href={"/pages/drinks"}
                    className="w-full h-9 bg-red-500 hover:bg-red-600 transition duration-300 rounded-md text-white font-bold"
                  >
                    <SheetClose className="w-full h-full flex gap-3 items-center px-5">
                      <BiSolidDrink size={20} />
                      Bebidas
                    </SheetClose>
                  </Link>

                  <Link
                    href={"/pages/candys"}
                    className="w-full h-9 bg-red-500 hover:bg-red-600 transition duration-300 rounded-md text-white font-bold"
                  >
                    <SheetClose className="w-full h-full flex gap-3 items-center px-5">
                      <GiPieSlice size={20} />
                      Sobremesas
                    </SheetClose>
                  </Link>

                  <Link
                    href={"/pages/others"}
                    className="w-full h-9 bg-red-500 hover:bg-red-600 transition duration-300 rounded-md text-white font-bold"
                  >
                    <SheetClose className="w-full h-full flex gap-3 items-center px-5">
                      <BiDish size={20} />
                      Outros
                    </SheetClose>
                  </Link>

                  <Link
                    href={"/pages/support"}
                    className="w-full h-9 bg-red-500 hover:bg-red-600 transition duration-300 rounded-md text-white font-bold"
                  >
                    <SheetClose className="w-full h-full flex gap-3 items-center px-5">
                      <MdContactSupport size={20} />
                      Suporte
                    </SheetClose>
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
