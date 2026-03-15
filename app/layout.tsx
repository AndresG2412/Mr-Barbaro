import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mr. Bárbaro",
  description: "Los mejores servicios para ti en barbería, aqui en Mr. Bárbaro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
