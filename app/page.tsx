"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { IoMdClose } from "react-icons/io";

interface BoldIconProps{
  className?: string,
}

export default function Component() {
  const [open, setOpen] = useState(false);

  function hamburger(){
    setOpen(!open);
  }
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link className="flex items-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="text-xl font-bold ml-2">Dr Joe B2B</span>
        </Link>
        <nav className="hidden lg:flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Services
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Blog
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
        <Button className="hidden lg:inline-flex">
          Get Started
        </Button>
        <Button className="lg:hidden" size="icon" variant="outline" onClick={hamburger}>
          {open ? <IoMdClose className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </header>
      {open && (
          <div className="relative h-8 w-11.8/12 mr-2">
            <div className="border bg-white w-4/12 px-2 py-2 absolute top-0 right-0 shadow-lg flex flex-col items-center rounded-md">
              <Link href={"/"} className="mb-1 text-lg">Home</Link>
              <Link href={"/about"} className="mb-1 text-lg">About</Link>
              <Link href={"/about"} className="mb-1 text-lg">Blog</Link>
              <Link href={"/about"} className="mb-2 text-lg">Services</Link>
              <Button>Subscribe</Button>
            </div>
          </div>
        )}
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
              <div className="flex flex-col justify-center space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Introducing Dr JOE'S Digitals. A B2B, SAAS, Brand Marketing Agency
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  We are a full-service B2B, SaaS and Brand Marketing agency dedicated to helping businesses reach new
                  heights.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button>Subscribe</Button>
                  <Button variant="outline">Learn More</Button>
                </div>
              </div>
              <img
                alt="Hero"
                className="aspect-[4/3] overflow-hidden rounded-xl object-cover"
                height={600}
                src="/Sign.webp"
                width={800}
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="about">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
              <img
                alt="About"
                className="aspect-square overflow-hidden rounded-xl object-cover"
                height={550}
                src="/business.webp"
                width={550}
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                    About Apex Agency
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Empowering Businesses to Thrive
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Apex Agency is a leading B2B, SaaS and Brand Marketing agency that specializes in helping businesses
                    of all sizes achieve their growth goals. With a team of experienced professionals, we offer a wide
                    range of services to help you elevate your brand and reach new heights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800" id="services">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Our Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Tailored Solutions for Your Business
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Apex Agency offers a wide range of services to help you achieve your business goals, from branding and
                  marketing to digital transformation and beyond.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Brand Strategy</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Develop a strong brand identity and positioning to stand out in your industry.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Digital Marketing</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Implement effective digital marketing campaigns to reach your target audience.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">SaaS Consulting</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Optimize your SaaS product and marketing strategy for maximum growth.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Content Creation</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Develop high-quality content to engage your audience and drive results.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Web Development</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Build custom, responsive websites and web applications to showcase your brand.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Analytics & Reporting</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Leverage data-driven insights to optimize your marketing strategies.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="blog">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Latest from the Blog
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Insights and Inspiration
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Check out our latest blog posts for industry insights, marketing tips, and more.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <img
                    alt="Blog Post"
                    className="aspect-video overflow-hidden rounded-t-xl object-cover"
                    height={310}
                    src="/Brainstorming.webp"
                    width={550}
                  />
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                    Marketing
                  </div>
                  <h3 className="text-xl font-bold">Unlocking the Power of Effective Branding</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Discover how to build a strong brand identity that resonates with your target audience.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link className="text-primary-500 hover:underline" href="#">
                    Read More
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <img
                    alt="Blog Post"
                    className="aspect-video overflow-hidden rounded-t-xl object-cover"
                    height={310}
                    src="/carshield.webp"
                    width={550}
                  />
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">SaaS</div>
                  <h3 className="text-xl font-bold">All You Need To Know About Carshield</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Learn proven strategies to drive user acquisition and retention for your SaaS business.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link className="text-primary-500 hover:underline" href="#">
                    Read More
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <img
                    alt="Blog Post"
                    className="aspect-video overflow-hidden rounded-t-xl object-cover"
                    height={310}
                    src="/business.webp"
                    width={550}
                  />
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                    Digital Transformation
                  </div>
                  <h3 className="text-xl font-bold">Navigating the Digital Landscape: Strategies for Success</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Explore the latest trends and best practices in digital transformation for businesses.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link className="text-primary-500 hover:underline" href="#">
                    Read More
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full bg-gray-100 dark:bg-gray-800 py-12 md:py-24 lg:py-32" id="contact">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl items-center justify-center gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Stay Connected</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Subscribe to our newsletter to stay up-to-date with the latest news, insights, and updates from Dr Joe
                  Agency.
                </p>
              </div>
              <div className="flex w-full max-w-sm items-center space-x-2">
                <Input placeholder="Enter your email" type="email" />
                <Button type="submit">Subscribe</Button>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 text-center lg:text-left">
              <Link className="flex items-center" href="#">
                <MountainIcon className="h-6 w-6" />
                <span className="text-xl font-bold ml-2">Dr Joe Agency</span>
              </Link>
              <p className="text-gray-500 dark:text-gray-400">© 2024 Dr Joe Agency. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function MenuIcon(props: BoldIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function MountainIcon(props: BoldIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}