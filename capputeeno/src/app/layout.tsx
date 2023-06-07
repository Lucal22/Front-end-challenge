import { Saira } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

export const metadata = {
  title: 'Capputeeno',
  description: 'Experimente o gosto de comprar com qualidade',
}

export const saira = Saira({
  weight: ['400','500'],
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={saira.className}>
      <Header />
      {children}
      </body>
    </html>

  )
}
