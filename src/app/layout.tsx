import './globals.css'
import {Raleway, Nunito} from "@next/font/google"

const raleway = Raleway({
  variable: '--font-raleway',
  subsets: ["latin"],
  display: 'swap',
});

const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ["latin"],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${nunito.variable} ${raleway.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  )
}
