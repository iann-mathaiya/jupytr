import './globals.css'
import Nav from './Nav'
import { Poppins } from "@next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "800"],
  variable: "--font-poppins",
})

export default function RootLayout({ children }){
  return (
    <html lang="en">
      <head />
      <body className={`bg-white ${poppins.variable}`}>
        <Nav/>
        {children}
      </body>
    </html>
  )
}
