'use client'

import { useState } from 'react'
import Image from 'next/image'
import TechStack from '../components/techStack'
import { Button } from "@/components/ui/button"
import { Clipboard, Check } from 'lucide-react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Github, Youtube } from 'lucide-react'
import Link from "next/link"

export default function ProfileCard() {
    const [isCopied, setIsCopied] = useState(false)
    const email = "mitsukimorinaga@gmail.com";

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text).then(() => {
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), 2000);
        }, (err) => {
          console.error('Could not copy text: ', err);
        });
    }

    return (
        <div className="min-h-screen bg-zinc-900 text-white px-4 py-8 flex justify-center items-start">
            <div className="max-w-4xl w-full space-y-8">
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
                <div>
                    <div className="text-center text-lg flex justify-center items-center gap-2">
                        <p>Email: {email}</p>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button 
                                        variant="outline" 
                                        size="icon" 
                                        className="rounded-full bg-white/10 border-0" 
                                        onClick={() => copyToClipboard(email)}
                                    >
                                        {isCopied ? (
                                            <Check className="w-5 h-5 text-green-500" />
                                        ) : (
                                            <Clipboard className="w-5 h-5" />
                                        )}
                                        <span className="sr-only">Copy Email</span>
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    {isCopied ? <p>✅</p> : <p>メールをコピー</p>}
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
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
                </div>
                <TechStack />
            </div>
        </div>
    )
}

