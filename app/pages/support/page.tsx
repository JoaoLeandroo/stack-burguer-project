import Container from "@/components/Container";

const Support = () => {
  return (
    <Container>
      <section className="flex flex-col items-center justify-center h-[500px] bg-gradient-to-br from-[#000000e6] to-[#1a1a1a] text-white mt-4 rounded-2xl shadow-lg text-center px-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
          Está com algum problema?
        </h1>
        <p className="text-lg text-gray-300 mb-8 max-w-xl">
          Nossa equipe está pronta para ajudar! Entre em contato pelos canais
          abaixo e responderemos o mais rápido possível.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="tel:+559999999999"
            className="px-6 py-3 bg-green-600 hover:bg-green-700 transition-all rounded-lg font-medium text-white shadow-md"
          >
            📞 (99) 99999-9999
          </a>
          <a
            href="mailto:suporte@empresa.com"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition-all rounded-lg font-medium text-white shadow-md"
          >
            ✉️ suporte@empresa.com
          </a>
        </div>
      </section>
    </Container>
  );
};

export default Support;
