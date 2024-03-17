import Container from "@/components/Container";
import SectionsOptionsContainer from "@/components/SectionsOptionsContainer";
import Banner from "@/components/banner";

export default function Home() {
  return (
    <div>
      <Container>
        <div className="mt-5 flex flex-col">
          <Banner />
          <div className="flex p-5 mt-5 justify-center gap-5 flex-wrap relative">
            <SectionsOptionsContainer
              src="/simple-burguer.jpg"
              alt="Capa Banner Hamburguers"
              w={450}
              h={450}
              categorieName="Hamburguers"
              href="/pages/burguers"
            />
            <SectionsOptionsContainer
              src="/coca-cola.jpg"
              alt="Capa banner bebidas"
              w={450}
              h={450}
              categorieName="Bebidas"
              href="/pages/drinks"
            />
            <SectionsOptionsContainer
              src="/Waffer.jpg"
              alt="Capa Banner Doces"
              w={450}
              h={450}
              categorieName="Sobremesas"
              href="/pages/candys"
            />
            <SectionsOptionsContainer
              src="/salada.jpg"
              alt="Capa Banner outros"
              w={450}
              h={450}
              categorieName="Outros"
              href="/pages/others"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
