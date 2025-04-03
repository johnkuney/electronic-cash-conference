import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'

const lato = Lato({
  variable: '--font-lato',
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
})

const siteTitle = 'Electronic Cash Conference 2025 | Barcelona'
const siteDescription =
  'Join us at the Electronic Cash Conference in Barcelona. Oct 4-5, 2025'
const socialImage = 'https://ecashconference.com/social-card.png'

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: 'https://ecashconference.com',
    siteName: siteTitle,
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        alt: 'Electronic Cash Conference 2025',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: [socialImage],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
