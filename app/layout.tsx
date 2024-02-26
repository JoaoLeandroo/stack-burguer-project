import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300", "400", "500", "700", "900"] });

export const metadata: Metadata = {
  title: "Stack Burguer",
  description: "Stack Burguer - a melhor hamburgueria da região!",
  keywords: [
    "Hamburguer barato",
    "hamburguer saboroso",
    "Melhor hamburgueria da regiao",
    "stack burguer"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>
        <div>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
