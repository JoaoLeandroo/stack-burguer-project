import Container from "@/components/Container";
import Link from "next/link";
const Others = () => {
  return (
    <Container>
      <div className="h-[500px] text-center flex items-center flex-col justify-center bg-[#000000a1] mt-2 rounded-xl">
        <span className="text-2xl font-bold">
          Catalogo indisponível no momento.
        </span>
        <Link
          href={"/"}
          className="text-slate-400 hover:text-slate-500 transition duration-300"
        >
          Retorne a página inicial
        </Link>
      </div>
    </Container>
  );
};

export default Others;
