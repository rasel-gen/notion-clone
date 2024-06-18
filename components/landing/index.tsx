import { SparkleIcon } from "lucide-react"
import { Link } from "react-router-dom"

import { cn } from "@/lib/utils"
import { TextAnimate } from "@/components/ui/text-animate"
import { EidosIcon } from "@/components/icons/eidos"

import { Activation } from "./activation"
import { BuildYourOwn } from "./build-your-own"
import { FAQ } from "./faq"
import { Features } from "./features"

export const Landing = () => {
  return (
    <div className="h-full w-full">
      <header
        className={cn(
          "sticky top-0 flex h-14 items-center bg-card  px-4 lg:px-6",
          {
            "!px-2": window.matchMedia(
              "(display-mode: window-controls-overlay)"
            ).matches,
          }
        )}
        id="title-bar"
      >
        <Link className="mt-2 flex items-center justify-center gap-2" to="#">
          <EidosIcon className="h-6 w-6" />{" "}
          <span className=" text-2xl font-semibold">Eidos</span>
        </Link>
        <div className="h-full grow" id="drag-region" />
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a
            className="text-sm font-medium underline-offset-4 hover:underline"
            href="#features"
          >
            Features
          </a>
          <a
            className="text-sm font-medium underline-offset-4 hover:underline"
            href="#faq"
          >
            FAQ
          </a>
          {/* <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            to="https://wiki.eidos.space"
            target="_blank"
          >
            Wiki
          </Link> */}
          <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            to="https://github.com/mayneyao/eidos"
            target="_blank"
          >
            Github
          </Link>
          <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            to="https://discord.gg/KAeDX8VEpK"
            target="_blank"
          >
            Discord
          </Link>
        </nav>
      </header>
      <main>
        {/* <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={20}
          className="pointer-events-none absolute inset-0 z-0 h-screen w-screen"
          particleColor={
            theme === "dark"
              ? "rgba(255,255,255,0.5)"
              : "rgba(155, 1, 221, 0.5)"
          }
        /> */}
        <section className="w-full overflow-hidden py-12 !pt-3  md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="w-full space-y-2 md:w-[80%]">
                <TextAnimate
                  text="Everyone's eidos space"
                  type="rollIn"
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none"
                />
                <p className="mx-auto text-gray-500 dark:text-gray-400  md:text-xl ">
                  A basic framework tool <br />
                  for managing your{" "}
                  <span className=" text-purple-500">personal data</span>{" "}
                  throughout your lifetime in{" "}
                  <span className=" text-purple-500">one place</span>.
                </p>
                <BuildYourOwn />
              </div>
            </div>
            <div className="md:min-w-[20rem]"></div>
          </div>
        </section>
        <section
          className="w-full bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-32"
          id="features"
        >
          <div className="container space-y-12 px-4 xs:px-0 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  <span className="flex gap-2">
                    <SparkleIcon className=" text-purple-500" /> Features
                  </span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Privacy-first. Local-first.
                </h2>
                <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get your data back from cloud providers and merge it into one
                  place.
                  <br />
                  You truly own your data, with complete control!
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Offline Support</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  You can access your data without an internet connection, Data
                  is stored on your local device. It's{" "}
                  <span className=" text-purple-500"> blazing fast</span> <br />
                </p>
              </div>

              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Web is all you need</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Eidos is a web application with no web server.
                  <br />
                  Everything runs inside your browser.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">AI Features </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Deeply integrated with LLM, it makes your life easier with AI.
                  You can translate, summarize, talk to your data, and more -
                  all within Eidos.
                  <br />
                  AI can also work{" "}
                  <span className=" text-purple-500">offline</span>.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Extendable</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Eidos has a highly customizable{" "}
                  <span className=" text-purple-500">extension system</span>.
                  You can build your own unique Eidos. It's easy to extend and
                  customize.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Open Source</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Eidos is an open-source project, ensuring that the code is
                  transparent, which is essential for{" "}
                  <span className=" text-purple-500">software freedom</span>
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Open Format</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Eidos uses open formats to store data, which means you can
                  access your data with other software.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-24 lg:py-32"
          // id="features"
        >
          <div className="container space-y-12 px-4 xs:px-0 md:px-6">
            <Features />
          </div>
        </section>
        {/* <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Building on modern web technologies
              </h2>
              <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Eidos use many next-generation web api to provide a better user
                experience.
                <br />
                <details>
                  <summary>check out your browser compatibility</summary>
                </details>
              </p>
            </div>
          </div>
        </section> */}
        <section
          id="faq"
          className="w-full  bg-gray-100 py-6 dark:bg-gray-800 md:py-24 lg:py-32"
        >
          <div className="mx-auto grid max-w-sm items-start gap-12 sm:max-w-xl lg:max-w-2xl">
            <FAQ />
          </div>
        </section>
        <section
          id="#join"
          className="w-full py-12 md:py-24 lg:py-32"
          tabIndex={-1}
        >
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <Activation />
          </div>
        </section>
      </main>
      <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Eidos Space. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:ml-auto sm:gap-6">
          <Link className="text-xs underline-offset-4 hover:underline" to="#">
            Terms of Service
          </Link>
          <Link className="text-xs underline-offset-4 hover:underline" to="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
