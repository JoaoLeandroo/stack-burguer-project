import Container from "@/components/Container";
import Link from "next/link";

const NotFound = () => {
  return (
    <Container>
      <div className="h-[500px] flex items-center justify-center bg-[#000000a1] mt-2 rounded-xl">
        <Link
          href={"/"}
          className="flex items center text-2xl md:text-3xl text-center flex-col md:flex-row justify-center"
        >
          <span className="text-white font-bold hover:text-slate-300">
            Página não encontrada. Retorne à página inicial.
          </span>
        </Link>
      </div>
    </Container>
  );
};

export default NotFound;
