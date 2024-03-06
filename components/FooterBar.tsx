import Container from "./Container";

const FooterBar = () => {
  return (
    <footer className="bg-red-700/90 mt-8">
      <Container>
        <div className="flex flex-col xl:flex-row gap-2 p-5 justify-around text-center">
          <section className="lg:max-w-[600px] max-w-[1920px] w-full text-zinc-400 font-semibold">
            <p>
              Bem-vindo à Stack Burger, o paraíso dos amantes de hambúrgueres!
              Localizada no coração da cidade, a Stack Burger é mais do que
              apenas uma hamburgueria; é uma experiência gastronômica. Nossos
              hambúrgueres são cuidadosamente preparados com os melhores
              ingredientes, desde carne suculenta até vegetais frescos e queijos
              artesanais. <br />
              &copy;{new Date().getFullYear()} - StackBurguer Todos os direitos
              reservados.
            </p>
          </section>
          <section className="flex flex-col gap-y-2 font-medium text-lg text-left xl:text-center mt-5">
            <span>Aberto de Segunda a Sábado das 18:00 as 23:00</span>
            <span>Telefone: (99) 99999-9999</span>
          </section>
        </div>
      </Container>
    </footer>
  );
};

export default FooterBar;
