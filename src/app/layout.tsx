import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

const monteserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ivamberg - Portfólio',
  description: 'Ivamberg Silva - FullStack Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={monteserrat.className}>{children}</body>
    </html>
  )
}
