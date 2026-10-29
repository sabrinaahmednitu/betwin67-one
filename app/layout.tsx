import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, DM_Sans, Noto_Sans_Bengali } from 'next/font/google'
import './globals.css'

const inter = DM_Sans({ subsets: ['latin'], variable: '--font-inter' })
const cormorant = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-cormorant' })
const bengali = Noto_Sans_Bengali({ subsets: ['bengali'], variable: '--font-bengali' })

export const metadata: Metadata = {
  title: 'Betwin67 | প্রিমিয়াম ফ্যান্টাসি গেমিং',
  description: 'স্বর্ণের প্রাসাদ, জাদুর আলো এবং অসীম উত্তেজনার এক প্রিমিয়াম গেমিং জগৎ।',
  generator:'B'
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="bn">
      <body className={`${inter.variable} ${cormorant.variable} ${bengali.variable} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
