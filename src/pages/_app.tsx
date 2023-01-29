import "../styles/global.css"

import { Montserrat } from "@next/font/google"
import type { AppProps } from "next/app"

const montserrat = Montserrat({ subsets: ["latin"] })

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <style jsx global>{`
        .font-montserrat {
          font-family: ${montserrat.style.fontFamily};
        }
      `}</style>
      <div className="font-montserrat">
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
