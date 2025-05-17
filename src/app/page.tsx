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
import {
  SiAmazonwebservices,
  SiAuthentik,
  SiCloudflare,
  SiDocker,
  SiGitea,
  SiGithub,
  SiNextdotjs,
  SiNodedotjs,
  SiOracle,
  SiOwncloud,
  SiPython,
  SiSearxng,
  SiTailwindcss,
  SiTelegram,
  SiTypescript,
} from "react-icons/si"
import {
  TbCloud,
  TbCurrencyDollar,
  TbExternalLink,
  TbHammer,
  TbLock,
  TbMail,
  TbPlugConnected,
  TbServer,
} from "react-icons/tb"
import {
  RiGithubFill,
  RiInformationLine,
  RiNextjsFill,
  RiOpenSourceFill,
  RiTelegram2Fill,
} from "react-icons/ri"
import CurrentTime from "@/components/CurrentTime"
import { FaGitAlt, FaLinux, FaWindows } from "react-icons/fa"
import { ArrowRight } from "lucide-react"
import { Header } from "@/components/Header"

export default async function Home() {
  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 min-h-screen">
      <Header />
      <div className="flex flex-col items-center w-full h-full px-4 sm:px-6 pb-4 sm:pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full">
          <Card className="bg-transparent">
            <CardContent className="flex items-center justify-center xl:justify-start sm:p-4 xl:p-6">
              <div className="flex flex-col xl:flex-row items-center gap-4 xl:gap-6">
                <Image
                  src="/images/ihatenodejs.jpeg"
                  alt="Aidan Honor"
                  width={140}
                  height={140}
                  className="rounded-full sm:w-[160px] sm:h-[160px]"
                />
                <div className="flex flex-col items-center xl:items-start gap-1 text-center xl:text-left">
                  <div className="flex flex-col gap-1 mb-2">
                    <CardTitle className="text-2xl sm:text-3xl xl:text-4xl font-bold">Aidan Honor</CardTitle>
                    <CardDescription className="text-sm sm:text-base xl:text-md">Systems Administrator, Web Developer, and Student</CardDescription>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 mt-2.5 w-full xl:w-auto">
                    <Link href="https://github.com/ihatenodejs" className="w-full xl:w-auto">
                      <Button className="w-full xl:w-auto cursor-pointer">
                        <SiGithub className="mr-2" />
                        GitHub
                      </Button>
                    </Link>
                    <Link href="mailto:aidan@p0ntus.com" className="w-full xl:w-auto">
                      <Button className="w-full xl:w-auto cursor-pointer">
                        <TbMail className="mr-2" />
                        Email
                      </Button>
                    </Link>
                    <Link href="https://t.me/p0ntu5" className="w-full xl:w-auto">
                      <Button className="w-full xl:w-auto cursor-pointer">
                        <RiTelegram2Fill className="mr-2" />
                        Telegram
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-b from-slate-400/30 to-slate-200/60 dark:bg-gradient-to-b dark:from-slate-600/30 dark:to-slate-900/60">
            <CardContent>
              <CardTitle className="flex items-center gap-2 text-3xl font-bold mb-2">
                <RiInformationLine size={32} />
                Quick Info
              </CardTitle>
              <div className="flex flex-col gap-3 mt-4 sm:mt-6">
                <div className="flex flex-row gap-1 justify-between">
                  <p className="text-lg sm:text-xl font-semibold">Age</p>
                  <div className="flex flex-row gap-1 items-center">
                    17
                  </div>
                </div>
                <div className="flex flex-row gap-1 justify-between">
                  <p className="text-lg sm:text-xl font-semibold">Location</p>
                  <div className="flex flex-row gap-1 text-right">
                    <img src="/images/us.svg" alt="United States Flag" className="w-6 h-6 justify-end" />
                    <span>New Hampshire, US</span>
                  </div>
                </div>
                <div className="flex flex-row gap-1 justify-between">
                  <p className="text-lg sm:text-xl font-semibold">Timezone</p>
                  <div className="flex flex-row gap-1 items-center">
                    <CurrentTime />
                  </div>
                </div>
                {/* please, i beg you, please think of something to put here */}
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-b from-slate-400/30 to-slate-200/60 dark:bg-gradient-to-b dark:from-slate-600/30 dark:to-slate-900/60">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-3xl font-bold mb-2">
                <RiOpenSourceFill size={32} />
                <span>Open Source <span className="hidden sm:inline">Work</span></span>
              </CardTitle>
              <CardDescription>
                I&apos;m a huge proponent of open source and always open to collaborations!
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <div className="flex flex-col w-full gap-6">
                <div className="px-4 xl:px-12">
                  <div className="flex flex-col lg:flex-row gap-6 lg:gap-2 w-full justify-between lg:mb-4">
                    <div className="flex flex-col gap-2 items-center">
                      <p className="text-xl lg:text-2xl font-semibold text-center">Commits</p>
                      <p className="text-xl lg:text-2xl">1,500+</p>
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                      <p className="text-xl lg:text-2xl font-semibold text-center">Repositories</p>
                      <p className="text-xl lg:text-2xl">40+</p>
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                      <p className="text-xl lg:text-2xl font-semibold text-center">Languages</p>
                      <p className="text-xl lg:text-2xl">8</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                  <Card className="w-full flex flex-col bg-slate-400/30 dark:bg-slate-600/20">
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
                  <Card className="w-full flex flex-col bg-slate-400/30 dark:bg-slate-600/20">
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
                  <Card className="w-full flex flex-col bg-slate-400/30 dark:bg-slate-600/20">
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
                  <Card className="w-full flex flex-col bg-slate-400/30 dark:bg-slate-600/20">
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
          <Card className="bg-gradient-to-b from-slate-400/30 to-slate-200/60 dark:bg-gradient-to-b dark:from-slate-600/30 dark:to-slate-900/60">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl sm:text-3xl font-bold -mb-2">
                <TbHammer size={24} className="sm:size-8" />
                Skills and Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg sm:text-xl font-semibold">
                    <span className="inline sm:hidden">SysAdmin</span>
                    <span className="hidden sm:inline">Systems Administration</span>
                  </h4>
                  <h4 className="text-lg sm:text-xl font-semibold">Experience</h4>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <div className="flex flex-row gap-2 items-center">
                      <FaLinux size={24} />
                      <div className="sm:flex sm:flex-row sm:items-center gap-1">
                        <p>Linux</p>
                        <p className="flex flex-row items-center gap-1 text-xs sm:text-sm">
                          (most distributions)
                        </p>
                      </div>
                    </div>
                    <p className="text-right">3 years</p>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex flex-row gap-2 items-center">
                      <SiDocker size={24} />
                      <p>Docker</p>
                    </div>
                    <p className="text-right">5 months</p>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex flex-row gap-2 items-center">
                      <FaWindows size={24} />
                      <div className="sm:flex sm:flex-row sm:items-center gap-1">
                        <p>Windows Server</p>
                        <p className="flex flex-row items-center gap-1 text-xs sm:text-sm">
                          (2012 R2 <ArrowRight size={13} /> 2024)
                        </p>
                      </div>
                    </div>
                    <p className="text-right">1 year</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg sm:text-xl font-semibold">
                    Web <span className="inline sm:hidden">Dev</span><span className="hidden sm:inline">Development</span>
                  </h4>
                  <h4 className="text-lg sm:text-xl font-semibold">Experience</h4>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <div className="flex flex-row gap-2 items-center">
                      <SiNodedotjs size={24} />
                      <p>Node.js</p>
                    </div>
                    <p className="text-right">2 years</p>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex flex-row gap-2 items-center">
                      <SiNextdotjs size={24} />
                      <p className="flex flex-row items-center gap-1">Next.js</p>
                    </div>
                    <p className="text-right">6 months</p>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex flex-row gap-2 items-center">
                      <SiTypescript size={24} />
                      <p>TypeScript</p>
                    </div>
                    <p className="text-right">7 months</p>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex flex-row gap-2 items-center">
                      <SiPython size={24} />
                      <p>Python</p>
                    </div>
                    <p className="text-right">2 years</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg sm:text-xl font-semibold">Cloud<span className="hidden sm:inline"> Environments</span></h4>
                  <h4 className="text-lg sm:text-xl font-semibold">Experience</h4>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <div className="flex flex-row gap-2 items-center">
                      <TbServer size={24} />
                      <p className="flex flex-row items-center gap-1">VPS/Bare Metal<span className="hidden sm:inline"> Deployment</span></p>
                    </div>
                    <p className="text-right">3 years</p>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex flex-row gap-2 items-center">
                      <SiCloudflare size={24} />
                      <p>Cloudflare</p>
                    </div>
                    <p className="text-right">2 years</p>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex flex-row gap-2 items-center">
                      <SiOracle size={24} />
                      <p>Oracle Cloud<span className="hidden sm:inline"> Infrastructure</span></p>
                    </div>
                    <p className="text-right">2 years</p>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex flex-row gap-2 items-center">
                      <SiAmazonwebservices size={24} />
                      <p className="text-xs sm:text-sm">Amazon Web Services</p>
                    </div>
                    <p className="text-right">3 months</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg sm:text-xl font-semibold">Miscellaneous</h4>
                  <h4 className="text-lg sm:text-xl font-semibold">Experience</h4>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <div className="flex flex-row gap-2 items-center">
                      <TbPlugConnected size={24} />
                      <p className="text-xs sm:text-sm">API development & interaction</p>
                    </div>
                    <p className="text-right">3 years</p>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex flex-row gap-2 items-center">
                      <TbMail size={24} />
                      <p>Email server<span className="hidden sm:inline"> hosting</span></p>
                    </div>
                    <p className="text-right">6 months</p>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex flex-row gap-2 items-center">
                      <FaGitAlt size={24} />
                      <p className="flex flex-row items-center gap-1">Git</p>
                    </div>
                    <p className="text-right">2.5 years</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-b from-slate-400/30 to-slate-200/60 dark:bg-gradient-to-b dark:from-slate-600/30 dark:to-slate-900/60">
            <CardContent>
              <CardTitle className="flex justify-between">
                <div className="flex items-center gap-2 text-3xl font-bold mb-2">
                  <TbCloud size={32} />
                  LibreCloud
                </div>
                <Link href="https://librecloud.cc" target="_blank">
                  <Button className="cursor-pointer">
                    <TbExternalLink size={16} />
                    <span>Visit</span>
                  </Button>
                </Link>
              </CardTitle>
              <CardDescription>
                LibreCloud is a free cloud services platform I offer to the public.
              </CardDescription>
              <div className="flex flex-col gap-2 mt-4">
                <p className="font-bold">Included Services</p>
                <ul>
                  <li className="flex flex-row gap-2 items-center">
                    <TbMail size={16} />
                    Email
                  </li>
                  <li className="flex flex-row gap-2 items-center">
                    <TbLock size={16} />
                    Vaultwarden
                  </li>
                  <li className="flex flex-row gap-2 items-center">
                    <SiGitea size={16} />
                    Gitea
                  </li>
                  <li className="flex flex-row gap-2 items-center">
                    <SiAuthentik size={16} />
                    Authentik SSO
                  </li>
                  <li className="flex flex-row gap-2 items-center">
                    <SiOwncloud size={16} />
                    ownCloud
                  </li>
                  <li className="flex flex-row gap-2 items-center">
                    <SiSearxng size={16} />
                    <Link href="https://search.librecloud.cc" target="_blank" className="text-blue-300 hover:underline">SearXNG</Link>
                  </li>
                </ul>
                <p className="mt-4">
                  All services are self-hosted on a dedicated server in Wisconsin, US. We serve over 100 users from various backgrounds, though are currently closed for registration. We hope to re-open registration for new users in mid-June.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-b from-slate-400/30 to-slate-200/60 dark:bg-gradient-to-b dark:from-slate-600/30 dark:to-slate-900/60">
            <CardContent>
              <CardTitle className="flex items-center gap-2 text-3xl font-bold mb-2">
                <TbCurrencyDollar size={32} />
                Paid Work
              </CardTitle>
              <CardDescription>
                I accept paid work for web development and systems administration, and I&apos;m always open to new opportunities!
              </CardDescription>
              <p className="mt-4">Currently, I&apos;m available for freelance work which is offered by-request at any of my listed contact methods.</p>
              <p className="mt-4">I am actively seeking jobs, so feel free to reach out if you think I&apos;d be a good fit!</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
