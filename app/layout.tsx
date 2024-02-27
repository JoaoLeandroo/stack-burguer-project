import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

import HeaderBar from "@/components/HeaderBar";
import FooterBar from "@/components/FooterBar";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Stack Burguer",
  description: "Stack Burguer - a melhor hamburgueria da região!",
  keywords: [
    "Hamburguer barato",
    "hamburguer saboroso",
    "Melhor hamburgueria da regiao",
    "stack burguer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${roboto.className} bg-red-700`}>
        <div className="min-h-screen flex flex-col">
          <HeaderBar />
          <main className="flex-grow">{children}</main>
          <FooterBar />
        </div>
      </body>
    </html>
  );
}
