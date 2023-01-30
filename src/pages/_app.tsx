import "../styles/global.css"

import { Montserrat } from "@next/font/google"
import type { AppProps } from "next/app"

import { Navigation } from "@/components/shared/Navigation"

const montserrat = Montserrat({ subsets: ["latin"] })

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <style jsx global>{`
        .font-montserrat {
          font-family: ${montserrat.style.fontFamily};
        }
      `}</style>
      <div className="font-montserrat relative mx-auto flex min-h-screen max-w-7xl flex-col p-8 text-gray-900">
        <Navigation />
        <Component {...pageProps} />
        <footer className="flex justify-end text-xs md:justify-between">
          <span>{new Date().getFullYear()} © All right reserved</span>
          <span className="hidden md:block">TUCMC</span>
        </footer>
      </div>
    </>
  )
}

export default MyApp
