"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const techStack = () => {
  return (
     <div className="space-y-4">
        <h2 className="text-xl font-semibold text-center">Tech Stack</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {[
            { name: 'React', icon: '/techstack/react.png', color: 'bg-blue-500  bg-opacity-10' },
            { name: 'Next.js', icon: '/techstack/nextjs.png', color: 'bg-white' },
            { name: 'MongoDB', icon: '/techstack/mongo.webp', color: 'bg-green-500  bg-opacity-10' },
            { name: 'Stripe', icon: '/techstack/stripe.svg', color: 'bg-purple-500  bg-opacity-10' },
            { name: 'NextAuth', icon: '/techstack/nextauth.png', color: 'bg-zinc-100  bg-opacity-10' },
            { name: 'AWS', icon: '/techstack/aws.png', color: 'bg-white' },
            { name: 'Tailwind CSS', icon: '/techstack/tailwind.png', color: 'bg-blue-500  bg-opacity-10' },
            { name: 'Bootstrap', icon: '/techstack/bootstrap.png', color: 'bg-zinc-100  bg-opacity-10' },
            { name: 'HTML', icon: '/techstack/html.png', color: 'bg-white' },
            { name: 'CSS', icon: '/techstack/css.svg', color: 'bg-white' },
            { name: 'PHP', icon: '/techstack/php.png', color: 'bg-purple-500  bg-opacity-10' },
            { name: 'JAVA', icon: '/techstack/java.png', color: 'bg-white' },
        ].map((tech, index) => (
            <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-zinc-800 p-4 rounded-lg flex flex-col items-center justify-center space-y-2 hover:bg-zinc-700 transition-colors"
            >
            <div
                className={`w-12 h-12 rounded-full ${tech.color} flex items-center justify-center`}
            >
                <Image
                src={tech.icon}
                alt={tech.name}
                width={24}
                height={24}
                className="group-hover:scale-110 transition-transform"
                />
            </div>
            <span className="text-sm font-medium text-zinc-300">{tech.name}</span>
            </motion.div>
        ))}
        </div>
    </div>
  )
}

export default techStack