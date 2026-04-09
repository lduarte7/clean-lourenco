import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clean Lourenço | Higienização de Estofados Premium em Marília-SP",
  description: "Especialistas em higienização e impermeabilização de estofados em Marília. Limpeza profunda de sofás, colchões e carpetes com tecnologia de extração industrial. Atendimento delivery premium.",
  keywords: [
    "limpeza de sofá Marília", 
    "higienização de estofados Marília", 
    "impermeabilização de sofá Marília", 
    "limpeza de tapetes Marília",
    "delivery higienização Marília",
    "Clean Lourenço"
  ],
  authors: [{ name: "Clean Lourenço" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

import { WhatsAppButton } from "@/components/WhatsAppButton";
import { StructuredData } from "@/components/StructuredData";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${spaceGrotesk.variable} ${manrope.variable}`} suppressHydrationWarning>
      <body className="antialiased selection:bg-clinical-blue selection:text-white" suppressHydrationWarning>
        <StructuredData />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}

