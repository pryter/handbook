import Head from "next/head"
import type { FC, ReactNode } from "react"
import React from "react"

const Concept = ({ children, title }: any) => {
  const description = React.Children.map(children, (child) =>
    child.type.displayName === "Desc" ? child : null
  )
  const icon = React.Children.map(children, (child) =>
    child.type.displayName === "Icon" ? child : null
  )

  return (
    <div className="mt-8 mb-16 flex flex-col md:mb-0 md:flex-row">
      <div className="md:w-1/3">
        <h1 className="text-right text-xl text-gray-600 md:text-left">
          {title}
        </h1>
      </div>
      <p className="mt-1 text-right text-sm md:w-1/3 md:text-left md:text-base">
        {description}
      </p>
      <div className="mt-6 flex shrink-0 items-center justify-center md:mt-0 md:w-1/3">
        {icon}
      </div>
    </div>
  )
}
const Description = ({ children }: any) => children
Description.displayName = "Desc"
Concept.Description = Description
const Icon = ({ children }: any) => children
Icon.displayName = "Icon"
Concept.Icon = Icon

const ConceptGroup: FC<{ title: string; children: ReactNode }> = ({
  title,
  children
}) => {
  return (
    <div className="mt-32">
      <h1 className="border-b border-gray-800 pb-4 text-right text-3xl md:text-left">
        {title}
      </h1>
      {children}
    </div>
  )
}

const Page = () => {
  return (
    <div>
      <Head>
        <title>Concepts - Handbook by TUCMC</title>
      </Head>
      <div className="mt-16 mb-20 tracking-wider">
        <h1 className="border-b border-gray-800 pb-4 text-right text-5xl md:pb-8 md:text-left md:text-6xl">
          Concepts
        </h1>
        <div className="flex justify-end">
          <p className="mt-12 text-right text-sm md:mt-16 md:w-2/3 md:text-left md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <ConceptGroup title={"Layouts"}>
          <Concept title="Make something center">
            <Concept.Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </Concept.Description>
            <Concept.Icon>
              <div className="flex h-[160px] w-[160px] items-center justify-center rounded-md border-2 border-gray-800">
                <div className="h-[90px] w-[90px] rounded-md border-2 border-gray-800" />
              </div>
            </Concept.Icon>
          </Concept>
          <Concept title="Responsiveness">
            <Concept.Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Concept.Description>
            <Concept.Icon>
              <div className="flex h-[160px] w-[160px] items-center justify-center rounded-md border-2 border-gray-800">
                <div className="h-[90px] w-[90px] rounded-md border-2 border-gray-800" />
              </div>
            </Concept.Icon>
          </Concept>
          <Concept title="Flex boxes">
            <Concept.Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Concept.Description>
            <Concept.Icon>
              <div className="flex h-[160px] w-[160px] items-center justify-center rounded-md border-2 border-gray-800">
                <div className="h-[90px] w-[90px] rounded-md border-2 border-gray-800" />
              </div>
            </Concept.Icon>
          </Concept>
        </ConceptGroup>
        <ConceptGroup title={"Miscellaneous"}>
          <Concept title="Images">
            <Concept.Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Concept.Description>
            <Concept.Icon>
              <div className="flex h-[160px] w-[160px] items-center justify-center rounded-md border-2 border-gray-800">
                <div className="h-[90px] w-[90px] rounded-md border-2 border-gray-800" />
              </div>
            </Concept.Icon>
          </Concept>
          <Concept title="Image background">
            <Concept.Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Concept.Description>
            <Concept.Icon>
              <div className="flex h-[160px] w-[160px] items-center justify-center rounded-md border-2 border-gray-800">
                <div className="h-[90px] w-[90px] rounded-md border-2 border-gray-800" />
              </div>
            </Concept.Icon>
          </Concept>
        </ConceptGroup>
      </div>
    </div>
  )
}

export default Page
