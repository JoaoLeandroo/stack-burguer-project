import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="max-w-[1200px] w-full  mx-auto h-[125px] md:h-[200px] lg:h-[250px] bg-blue-500 rounded-lg shadow-xl relative">
      <Link href={"/"}>
        <Image
          src={"/combo_1.jpg"}
          width={1280}
          height={720}
          alt="Combo burguer"
          className="w-full h-full object-cover rounded-lg"
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
      </Link>
    </div>
  );
};

export default Banner;
