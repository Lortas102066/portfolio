import PortfolioItem from "./components/portfolioItem";
import { Button } from "@/components/ui/button";
import { Github, Youtube } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";

const portfolioProjects = [
  {
    title: "奨学金マッチングサイト",
    description: "Find the best scholarships for you",
    techStack: "Next.JS / TypeScript / JavaScript / Next.Auth / MongoDB",
    imageUrl: "/scholarship.jpg",
    projectUrl: "https://scholar.mitsukimorinaga.com"
  },
  {
    title: "E-Commerce サイト「Stripe決済&Micro CMS」",
    description: "Explore our diverse product range",
    techStack: "React / Stripe / Micro CMS / Tailwind CSS / TypeScript",
    imageUrl: "/ecommerce.jpg",
    projectUrl: "https://ecommerce-delta-gules-82.vercel.app"
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
              <Github className="w-5 h-5" />
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
