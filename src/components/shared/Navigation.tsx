import { AnimateSharedLayout, motion } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect } from "react"

export const Navigation = () => {
  const router = useRouter()

  useEffect(() => {
    console.log(router.pathname)
  }, [router.pathname])
  return (
    <nav className="relative flex justify-end tracking-wider md:justify-center">
      <Link href={"/"}>
        <div className="flex w-[180px] shrink-0 items-center space-x-2">
          <h1 className="text-lg">Handbook</h1>
          <span className="mt-1 inline text-xs">by TUCMC</span>
        </div>
      </Link>
      <div className="hidden w-full justify-center md:flex">
        <AnimateSharedLayout>
          <div className="flex space-x-6">
            <Link href="/concepts">
              <div className="cursor-pointer">
                <span>Concepts</span>
                {router.pathname.includes("/concepts") && (
                  <motion.div
                    layoutId={"underline"}
                    className={"w-full border-b border-gray-800"}
                  />
                )}
              </div>
            </Link>
            <Link href="/elements">
              <div className="cursor-pointer">
                <span>Elements</span>
                {router.pathname.includes("/elements") && (
                  <motion.div
                    layoutId={"underline"}
                    className={"w-full border-b border-gray-800"}
                  />
                )}
              </div>
            </Link>
            <Link href="/toolbox">
              <div className="cursor-pointer">
                <span>Toolbox</span>
                {router.pathname.includes("/toolbox") && (
                  <motion.div
                    layoutId={"underline"}
                    className={"w-full border-b border-gray-800"}
                  />
                )}
              </div>
            </Link>
          </div>
        </AnimateSharedLayout>
      </div>
      <div className="hidden w-[140px] shrink-0 items-center justify-end space-x-2 md:flex">
        <span>Contact</span>
      </div>
    </nav>
  )
}
