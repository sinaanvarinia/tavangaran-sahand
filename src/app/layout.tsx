import type { Metadata } from 'next'
import './globals.css'
 

export const metadata: Metadata = {
  title: "گروه صنعتی توانگران سهند",
  description: "created by sina anvarinia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir='rtl'>
      <body className="">{children}</body>
    </html>
  )
}
