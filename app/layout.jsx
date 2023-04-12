import './globals.css'
import Nav from './Nav'
import { Inter } from "@next/font/google"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-manrope",
})

export const metadata = {
  title: 'Jupytr',
  description: 'A social platform for Afro creators',
}

export default function RootLayout({ children }){
  return (
    <html lang="en" className={`bg-white ${inter.variable}`}>
      <head />
      <body>
        <Nav/>
        {children}
      </body>
    </html>
  )
}
