import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SiAmazonwebservices, SiCloudflare, SiDocker, SiGitea, SiGithub, SiNextdotjs, SiNodedotjs, SiOracle, SiPython, SiTailwindcss, SiTelegram, SiTypescript } from "react-icons/si"
import { TbHammer, TbMail, TbPlugConnected, TbServer } from "react-icons/tb"
import { RiCodeFill, RiGitBranchFill, RiGithubFill, RiGitRepositoryFill, RiInformationLine, RiNextjsFill, RiOpenSourceFill, RiTelegram2Fill } from "react-icons/ri"
import CurrentTime from "@/components/CurrentTime"
import { FaGitAlt, FaLinux, FaWindows } from "react-icons/fa"
import { ArrowRight } from "lucide-react"
import { Header } from "@/components/Header"

export default async function Home() {
  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 min-h-screen">
      <Header />
      <div className="flex flex-col items-center w-full h-full px-6 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          <Card>
            <CardContent className="flex items-center justify-center sm:justify-start p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <Image
                  src="/images/ihatenodejs.jpeg"
                  alt="Aidan Honor"
                  width={160}
                  height={160}
                  className="rounded-full"
                />
                <div className="flex flex-col items-center sm:items-start gap-1 text-center sm:text-left">
                  <div className="flex flex-col gap-1 mb-2">
                    <CardTitle className="text-3xl sm:text-4xl font-bold">Aidan Honor</CardTitle>
                    <CardDescription className="sm:text-md">Systems Administrator, Web Developer, and Student</CardDescription>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 mt-2.5 w-full sm:w-auto">
                    <Link href="https://github.com/ihatenodejs" className="w-full sm:w-auto">
                      <Button className="w-full sm:w-auto cursor-pointer">
                        <SiGithub className="mr-2" />
                        GitHub
                      </Button>
                    </Link>
                    <Link href="mailto:aidan@p0ntus.com" className="w-full sm:w-auto">
                      <Button className="w-full sm:w-auto cursor-pointer">
                        <TbMail className="mr-2" />
                        Email
                      </Button>
                    </Link>
                    <Link href="https://t.me/p0ntu5" className="w-full sm:w-auto">
                      <Button className="w-full sm:w-auto cursor-pointer">
                        <RiTelegram2Fill className="mr-2" />
                        Telegram
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <CardTitle className="flex items-center gap-2 text-3xl font-bold mb-2">
                <RiInformationLine size={32} />
                Quick Info
              </CardTitle>
              <div className="flex flex-col gap-3 mt-6">
                <div className="flex flex-row gap-1 justify-between">
                  <p className="text-xl font-semibold">Location</p>
                  <div className="flex flex-row gap-1 items-center">
                    <img src="/images/us.svg" alt="United States Flag" className="w-6 h-6" />
                    <span>New Hampshire, US</span>
                  </div>
                </div>
                <div className="flex flex-row gap-1 justify-between">
                  <p className="text-xl font-semibold">Timezone</p>
                  <div className="flex flex-row gap-1 items-center">
                    <CurrentTime />
                  </div>
                </div>
                {/* please, i beg you, please think of something to put here */}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-3xl font-bold mb-2">
                <RiOpenSourceFill size={32} />
                Open Source Work
              </CardTitle>
              <CardDescription>
                I&apos;m a huge proponent of open source and always open to collaborations!
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <div className="flex flex-col w-full gap-6">
                <div className="px-4 sm:px-12">
                  <div className="flex flex-col sm:flex-row gap-6 sm:gap-2 w-full justify-between sm:mb-4">
                    <div className="flex flex-col gap-2 items-center">
                      <div className="flex flex-row gap-1 items-center">
                        <RiGitBranchFill size={24} />
                        <p className="text-xl sm:text-2xl font-semibold">Commits</p>
                      </div>
                      <p className="text-xl sm:text-2xl">1,500+</p>
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                      <div className="flex flex-row gap-1 items-center">
                        <RiGitRepositoryFill size={24} />
                        <p className="text-xl sm:text-2xl font-semibold">Repositories</p>
                      </div>
                      <p className="text-xl sm:text-2xl">40+</p>
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                      <div className="flex flex-row gap-1 items-center">
                        <RiCodeFill size={24} />
                        <p className="text-xl sm:text-2xl font-semibold">Languages</p>
                      </div>
                      <p className="text-xl sm:text-2xl">8</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Card className="w-full flex flex-col">
                    <CardContent className="flex-grow">
                      <CardTitle className="flex items-center gap-2 text-xl font-bold mb-2">
                        <RiNextjsFill />
                        <SiDocker />
                        <p>librecloud/web</p>
                      </CardTitle>
                      <CardDescription>
                        Free cloud services platform for everyone. Built with Next.js, Docker, and FOSS.
                      </CardDescription>
                      <div className="flex flex-row gap-2 mt-3">
                        <p>License: <span className="font-bold">Unlicense</span></p>
                      </div>
                    </CardContent>
                    <CardFooter className="mt-auto">
                      <div className="flex flex-row gap-2">
                        <Link href="https://git.pontusmail.org/librecloud/web" target="_blank">
                          <Button className="cursor-pointer">
                            <SiGitea />
                            Gitea
                          </Button>
                        </Link>
                        <Link href="https://github.com/ihatenodejs/librecloud-web" target="_blank">
                          <Button className="cursor-pointer">
                            <RiGithubFill />
                            GitHub
                          </Button>
                        </Link>
                      </div>
                    </CardFooter>
                  </Card>
                  <Card className="w-full flex flex-col">
                    <CardContent className="flex-grow">
                      <CardTitle className="flex items-center gap-2 text-xl font-bold mb-2">
                        <SiTypescript />
                        <p>librecloud/mail-connect</p>
                      </CardTitle>
                      <CardDescription>
                        An API for connecting docker-mailserver to your application. Built with TypeScript, Express, and Docker.
                      </CardDescription>
                      <div className="flex flex-row gap-2 mt-3">
                        <p>License: <span className="font-bold">Unlicense</span></p>
                      </div>
                    </CardContent>
                    <CardFooter className="mt-auto">
                      <div className="flex flex-row gap-2">
                        <Link href="https://git.pontusmail.org/librecloud/mail-connect" target="_blank">
                          <Button className="cursor-pointer">
                            <SiGitea />
                            Gitea
                          </Button>
                        </Link>
                        <Link href="https://github.com/ihatenodejs/mail-connect" target="_blank">
                          <Button className="cursor-pointer">
                            <RiGithubFill />
                            GitHub
                          </Button>
                        </Link>
                      </div>
                    </CardFooter>
                  </Card>
                  <Card className="w-full flex flex-col">
                    <CardContent className="flex-grow">
                      <CardTitle className="flex items-center gap-2 text-xl font-bold mb-2">
                        <SiTypescript />
                        <SiTelegram />
                        <p>abocn/TelegramBot</p>
                      </CardTitle>
                      <CardDescription>
                        A powerful, multi-function Telegram bot built with TypeScript and Telegraf with support for other integrations.
                      </CardDescription>
                      <div className="flex flex-row gap-2 mt-3">
                        <p>License: <span className="font-bold">BSD-3-Clause</span></p>
                      </div>
                    </CardContent>
                    <CardFooter className="mt-auto">
                      <div className="flex flex-row gap-2">
                        <Link href="https://github.com/abocn/TelegramBot" target="_blank">
                          <Button className="cursor-pointer">
                            <RiGithubFill />
                            GitHub
                          </Button>
                        </Link>
                      </div>
                    </CardFooter>
                  </Card>
                  <Card className="w-full flex flex-col">
                    <CardContent className="flex-grow">
                      <CardTitle className="flex items-center gap-2 text-xl font-bold mb-2">
                        <SiNextdotjs />
                        <SiTailwindcss />
                        <p>aidan/aidxnCC</p>
                      </CardTitle>
                      <CardDescription>
                        The second generation of my personal website. Built with Next.js, Tailwind CSS, and Shadcn UI integrations.
                      </CardDescription>
                      <div className="flex flex-row gap-2 mt-3">
                        <p>License: <span className="font-bold">Unlicense</span></p>
                      </div>
                    </CardContent>
                    <CardFooter className="mt-auto">
                      <div className="flex flex-row gap-2">
                        <Link href="https://git.pontusmail.org/aidan/aidxnCC" target="_blank">
                          <Button className="cursor-pointer">
                            <SiGitea />
                            Gitea
                          </Button>
                        </Link>
                        <Link href="https://github.com/ihatenodejs/aidxnCC" target="_blank">
                          <Button className="cursor-pointer">
                            <RiGithubFill />
                            GitHub
                          </Button>
                        </Link>
                      </div>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-3xl font-bold -mb-2">
                <TbHammer size={32} />
                Skills and Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <h4 className="text-xl font-semibold">Systems Administration</h4>
                  <h4 className="text-xl font-semibold">Experience</h4>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <div className="flex flex-row gap-2 items-center">
                      <FaLinux size={24} />
                      <p>Linux (most distributions)</p>
                    </div>
                    <p>3 years</p>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex flex-row gap-2 items-center">
                      <SiDocker size={24} />
                      <p>Docker</p>
                    </div>
                    <p>5 months</p>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex flex-row gap-2 items-center">
                      <FaWindows size={24} />
                      <p className="flex flex-row items-center gap-1">Windows Server (2012 R2 <ArrowRight size={13} /> 2024)</p>
                    </div>
                    <p>1 year</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <h4 className="text-xl font-semibold">Web Development</h4>
                  <h4 className="text-xl font-semibold">Experience</h4>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <div className="flex flex-row gap-2 items-center">
                      <SiNodedotjs size={24} />
                      <p>Node.js</p>
                    </div>
                    <p>2 years</p>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex flex-row gap-2 items-center">
                      <SiNextdotjs size={24} />
                      <p className="flex flex-row items-center gap-1">Next.js</p>
                    </div>
                    <p>6 months</p>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex flex-row gap-2 items-center">
                      <SiTypescript size={24} />
                      <p>TypeScript</p>
                    </div>
                    <p>7 months</p>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex flex-row gap-2 items-center">
                      <SiPython size={24} />
                      <p>Python</p>
                    </div>
                    <p>2 years</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <h4 className="text-xl font-semibold">Cloud Environments</h4>
                  <h4 className="text-xl font-semibold">Experience</h4>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <div className="flex flex-row gap-2 items-center">
                      <TbServer size={24} />
                      <p className="flex flex-row items-center gap-1">VPS/Bare Metal Deployment</p>
                    </div>
                    <p>3 years</p>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex flex-row gap-2 items-center">
                      <SiCloudflare size={24} />
                      <p>Cloudflare</p>
                    </div>
                    <p>2 years</p>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex flex-row gap-2 items-center">
                      <SiOracle size={24} />
                      <p>Oracle Cloud Infrastructure</p>
                    </div>
                    <p>2 years</p>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex flex-row gap-2 items-center">
                      <SiAmazonwebservices size={24} />
                      <p>Amazon Web Services</p>
                    </div>
                    <p>3 months</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <h4 className="text-xl font-semibold">Miscellaneous</h4>
                  <h4 className="text-xl font-semibold">Experience</h4>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <div className="flex flex-row gap-2 items-center">
                      <TbPlugConnected size={24} />
                      <p>API development and interaction</p>
                    </div>
                    <p>3 years</p>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex flex-row gap-2 items-center">
                      <TbMail size={24} />
                      <p>Email server hosting</p>
                    </div>
                    <p>6 months</p>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex flex-row gap-2 items-center">
                      <FaGitAlt size={24} />
                      <p className="flex flex-row items-center gap-1">Git</p>
                    </div>
                    <p>2.5 years</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
