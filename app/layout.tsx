import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Statly',
  description: 'Where the stats from your pitch club come to life',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
