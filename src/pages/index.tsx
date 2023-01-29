import { motion } from "framer-motion"
import Head from "next/head"

const Page = () => {
  return (
    <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col p-8 text-gray-900">
      <Head>
        <title>Handbook by TUCMC</title>
      </Head>
      <nav className="relative flex justify-end tracking-wider md:justify-center">
        <div className="flex w-[180px] shrink-0 items-center space-x-2">
          <h1 className="text-lg">Handbook</h1>
          <span className="mt-1 inline text-xs">by TUCMC</span>
        </div>
        <div className="hidden w-full justify-center md:flex">
          <div className="flex space-x-6">
            <span>Concepts</span>
            <span>Elements</span>
            <span>Toolbox</span>
          </div>
        </div>
        <div className="hidden w-[140px] shrink-0 items-center justify-end space-x-2 md:flex">
          <span>Contact</span>
        </div>
      </nav>
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="my-auto flex flex-col items-end md:flex-row md:items-stretch"
      >
        <div className="flex shrink-0">
          <div className="max-w-[320px] pr-6 text-3xl font-semibold lg:max-w-[460px] lg:text-4xl">
            <h1 className="text-right">
              <span>Every</span> question has an answer{" "}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                and it is probably going to be here.
              </motion.span>
            </h1>
          </div>
          <motion.div
            initial={{
              clipPath: "inset(100% 0 100% 0)"
            }}
            animate={{
              clipPath: "inset(0% 0 0% 0)"
            }}
            transition={{ duration: 1, delay: 0.4 + 0.7 }}
            className="block h-auto w-1 border-r-2 border-gray-800 md:hidden"
          />
        </div>
        <motion.div
          initial={{
            clipPath: "inset(100% 0 100% 0)"
          }}
          animate={{
            clipPath: "inset(0% 0 0% 0)"
          }}
          transition={{ duration: 1, delay: 0.4 + 0.7 }}
          className="mr-16 hidden border-r-2 border-gray-800 md:block"
        />
        <motion.div
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 1.5, delay: 1.6 + 0.7 }}
          className="text-sm md:text-lg"
        >
          <p className="mt-14 max-w-[320px] text-right tracking-wider md:mt-4 md:max-w-[900px] md:text-left">
            This handbook contains several concepts about web development & web
            design; feels free to discover.{" "}
            <span>
              This instruction belongs to TUCMC and intended to use inside the
              organisation only.
            </span>
          </p>
        </motion.div>
      </motion.div>
      <footer className="flex justify-end text-xs md:justify-between">
        <span>2023 © All right reserved</span>
        <span className="hidden md:block">TUCMC</span>
      </footer>
    </div>
  )
}

export default Page
