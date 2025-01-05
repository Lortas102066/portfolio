import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Youtube } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white px-4 py-8">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Profile Section */}
        <div className="flex flex-col items-center space-y-4">
          <div className="relative w-32 h-32 rounded-full overflow-hidden bg-white">
            <Image
              src="/IMG_1845.jpg"
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold">Mitsuki Morinaga</h1>
            <p className="text-gray-400">
              <span className="inline-block align-middle">📍</span> Melbourne, Australia
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4">
          <Link href="https://x.com/StudyAbroadAU" target="_blank" className="hover:opacity-80">
            <Button variant="outline" size="icon" className="rounded-full bg-white/10 border-0">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span className="sr-only">X (Twitter)</span>
            </Button>
          </Link>
          <Link href="https://github.com/Lortas102066" className="hover:opacity-80" target="_blank">
            <Button variant="outline" size="icon" className="rounded-full bg-white/10 border-0">
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Link href="https://www.youtube.com/channel/UC5sjgLo7UFSRkma9QLLU3zw" className="hover:opacity-80" target="_blank">
            <Button variant="outline" size="icon" className="rounded-full bg-white/10 border-0">
              <Youtube className="w-5 h-5" />
              <span className="sr-only">YouTube</span>
            </Button>
          </Link>
        </div>

        {/* Self Introduction Button */}
        <div className="flex justify-center">
          <a href="/profile">
            <Button 
              variant="outline" 
              className="rounded-full px-8 bg-white/10 border-0 hover:bg-white/20"
            >
              自己紹介 • Profile 
            </Button>
          </a>
        </div>

        {/* Portfolio Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-center">Portfolio</h2>
          <Link href="https://scholar.mitsukimorinaga.com" passHref target="_blank">
            <Card className="bg-white/5 border-0 mb-10">
              <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
                <Image
                  src="/scholarship.jpg"
                  alt="奨学金マッチングサイト"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  className="w-full cursor-pointer group-hover:brightness-50 duration-200 object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">奨学金マッチングサイト</h3>
                <p className="text-sm text-gray-400">Next.JS / TypeScript / JavaScript / Next.Auth / MongoDB</p>
              </div>
            </Card>
          </Link>
          <Link href="https://ecommerce-delta-gules-82.vercel.app" passHref target="_blank">
            <Card className="bg-white/5 border-0">
              <div className="aspect-video w-full relative overflow-hidden rounded-t-lg">
                <Image
                  src="/scholarship.jpg"
                  alt="E-Commerce サイト「Stripe」"
                  width={1280}
                  height={720}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">奨学金マッチングサイト</h3>
                <p className="text-sm text-gray-400">Next.JS / TypeScript / JavaScript / Next.Auth / MongoDB</p>
              </div>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  )
}

