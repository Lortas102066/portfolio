import PortfolioItem from "./components/portfolioItem";
import { Button } from "@/components/ui/button";
import { Github, Youtube } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";

const portfolioProjects = [
  {
    title: "奨学金マッチングサイト",
    description: "海外大学向け奨学金マッチングサイト | 成績や保護者の年収を記入するとおすすめの奨学金を提供します",
    techStack: "AWS(Amplify, Route53) / Next.JS / TypeScript / JavaScript / Next.Auth / MongoDB",
    imageUrl: "/scholarship.jpg",
    projectUrl: "https://scholar.mitsukimorinaga.com"
  },
  {
    title: "E-Commerce サイト「Stripe決済&Micro CMS」",
    description: "Explore our diverse product range",
    techStack: "React / Stripe / Micro CMS / Tailwind CSS / TypeScript / Next Auth",
    imageUrl: "/ecommerce.jpg",
    projectUrl: "https://ecommerce-delta-gules-82.vercel.app"
  }, 
  {
    title: "WordPress 個人ブログ",
    description: "プログラミング /  留学 / バスケに関する記事を投稿しています",
    techStack: "WordPress / PHP / HTML / CSS",
    imageUrl: "/wordpress.jpg",
    projectUrl: "https://mickey.okigen.com"
  }, 
  {
    title: "ポモドーロタイマーアプリ",
    description: "Next.JSを活用したポモドーロWebアプリ",
    techStack: "Next.JS / TypeScript / Tailwind CSS / Vercel",
    imageUrl: "/pomodoro.jpg",
    projectUrl: "https://pomodoro-start.vercel.app"
  }
];

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
          <Link href="https://x.com/StudyAbroadAU" passHref>
            <Button variant="outline" size="icon" className="rounded-full bg-white/10 border-0">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span className="sr-only">X (Twitter)</span>
            </Button>
          </Link>
          <Link href="https://github.com/Lortas102066" passHref>
            <Button variant="outline" size="icon" className="rounded-full bg-white/10 border-0">
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Link href="https://www.youtube.com/channel/UC5sjgLo7UFSRkma9QLLU3zw" passHref>
            <Button variant="outline" size="icon" className="rounded-full bg-white/10 border-0">
              <Youtube className="w-5 h-5" />
              <span className="sr-only">YouTube</span>
            </Button>
          </Link>
        </div>

        {/* Self Introduction Button */}
        <div className="flex justify-center">
          <Link href="/profile" passHref>
            <Button 
              variant="outline" 
              className="rounded-full px-8 bg-white/10 border-0 hover:bg-white/20"
            >
              自己紹介 • Profile 
            </Button>
          </Link>
        </div>

        {/* Portfolio Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-center">Portfolio</h2>
          {portfolioProjects.map((project, index) => (
            <PortfolioItem key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
