import Image from 'next/image'
import React from 'react'
import { Twitter } from '../Shared/Icons/Twitter'
import { Discord } from '../Shared/Icons/Discord'
import { Facebook } from '../Shared/Icons/Facebook'
import { Github } from '../Shared/Icons/Github'
import { Dribbble } from '../Shared/Icons/Dribbble'
import { ZomaDev } from '../Shared/Icons/ZomaDev'
import { ZomaDev2 } from '../Shared/Icons/ZomaDev2'

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 w-full">
      <div className="mx-auto p-4 py-6 lg:py-8">
        <div className="mx-auto flex flex-wrap justify-center items-center md:justify-around max-w-6xl">
          <div className="mb-6 md:mb-0">
            <a
              href="https://joaquinhacosta.github.io/joaquindev/"
              className="flex items-center"
            >
              <Image
                src="/mapache.png"
                height={32}
                width={32}
                alt="FlowBite Logo"
              />
              <span className="ml-2 self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                {' '}
                Zoma Dev
              </span>
            </a>
          </div>
          <div className="grid gap-6 grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://nextjs.org" className="hover:underline">
                    NextJs
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Tailwind CSS
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Contact Me
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/JoaquinHAcosta"
                    className="hover:underline "
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 mx-auto dark:border-gray-700 lg:my-8" />
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500 text-center dark:text-gray-400">
            © 2024{' '}
            <a
              href="https://joaquinhacosta.github.io/joaquindev/"
              className="hover:underline"
            >
              Zoma Dev
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex justify-center mt-0">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <Facebook />
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <Discord />
              <span className="sr-only">Discord community</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <Twitter />
              <span className="sr-only">Twitter page</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <Github />
              <span className="sr-only">GitHub account</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <Dribbble />
              <span className="sr-only">Dribbble account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
