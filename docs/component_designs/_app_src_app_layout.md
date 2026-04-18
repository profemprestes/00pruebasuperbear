# Detalle de Diseño y Textos: /src/app/layout.tsx

## Diseño del Cuerpo del Componente

El componente utiliza las siguientes clases y estilos:

- `{cn("font-sans", geist.variable)}`
- `font-body antialiased`

## Textos del Componente

A continuación se detallan los textos encontrados en el componente y el elemento donde se encuentran:

- **<head>**: {/_ Amble — SBA's official UI font (Apache 2.0) _/}
- **<RewardsProvider>**: {children}

## Contenido Completo del Archivo

```tsx
import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { RewardsProvider } from "@/hooks/use-rewards";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://facu9adventure.vercel.app"),
  title: {
    default: "🐻 GRAN FACU AVENTURA — ¡Estás Invitado!",
    template: "%s | GRAN FACU AVENTURA",
  },
  description:
    "¡Facu te invita a su cumpleaños Nivel 9! Una invitación digital interactiva inspirada en Super Bear Adventure. Domingo 24 de mayo en KBOOM (Av. Italia 3421). Confirmá tu asistencia y viví la misión.",
  keywords: [
    "cumpleaños Facu",
    "invitación cumpleaños",
    "Facu 9 años",
    "Super Bear Adventure",
    "KBOOM",
    "fienda infantil",
    "invitación interactiva",
    "nivel 9 desbloqueado",
  ],
  authors: [{ name: "Facu's Adventure Team" }],
  creator: "Facu's Adventure Team",
  openGraph: {
    type: "website",
    locale: "es_UY",
    title: "🐻 GRAN FACU AVENTURA — ¡Estás Invitado!",
    description:
      "¡Facu te invita a su cumpleaños Nivel 9! Una misión interactiva en KBOOM. Domingo 24 de mayo desde las 18:30hs.",
    siteName: "GRAN FACU AVENTURA",
    images: [
      {
        url: "/titulo_super_facu_1.png",
        width: 800,
        height: 400,
        alt: "GRAN FACU AVENTURA - Super Facu Aventura",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "🐻 GRAN FACU AVENTURA — ¡Estás Invitado!",
    description:
      "¡Facu te invita a su cumpleaños Nivel 9! Una misión interactiva en KBOOM.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={cn("font-sans", geist.variable)}>
      <head>
        {/* Amble — SBA's official UI font (Apache 2.0) */}
        <link rel="preconnect" href="https://fonts.cdnfonts.com" />
        <link href="https://fonts.cdnfonts.com/css/amble" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Quicksand:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning>
        <RewardsProvider>{children}</RewardsProvider>
        <Toaster />
      </body>
    </html>
  );
}
```
