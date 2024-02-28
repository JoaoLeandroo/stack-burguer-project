import Image from "next/image";
import Link from "next/link";

interface SectionOptionProps {
  src: string;
  alt: string;
  w: number;
  h: number;
  categorieName: string;
}

const SectionsOptionsContainer: React.FC<SectionOptionProps> = ({
  src,
  alt,
  w,
  h,
  categorieName,
}) => {
  return (
    <section className="w-[220px] h-[220px] border border-zinc-600 md:w-[500px] md-[520px] shadow-md bg-zinc-600 rounded-xl relative scale-90 hover:scale-100 opacity-90 hover:opacity-100 transition duration-300">
      <Link href={"/"} className="w-full h-full">
        <Image
          src={src}
          width={w}
          height={h}
          alt={alt}
          className="object-cover w-full h-full rounded-xl relative"
        />
        <span className="absolute top-4 left-2 text-2xl font-bold text-white drop-shadow-lg shadow-lg bg-zinc-400/60 p-3 rounded-xl">
          {categorieName}
        </span>
      </Link>
    </section>
  );
};

export default SectionsOptionsContainer;
