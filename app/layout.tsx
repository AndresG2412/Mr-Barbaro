import type { Metadata } from 'next'
import './globals.css'
import localFont from 'next/font/local'
import { ClerkProvider } from "@clerk/nextjs";

// Configuración de la fuente
const campana = localFont({
  src: './fonts/mainFont.otf',
  variable: '--font-campana', 
})

export const metadata: Metadata = {
  title: 'Mr. Barbaro — The Authentic Barbería',
  description: 'Barbería de lujo. Cortes clásicos, atención premium y ambiente exclusivo.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="es" className={`${campana.variable}`}>
        <body>{children}</body>
      </html>
    </ClerkProvider>
  )
}
