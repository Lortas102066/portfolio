'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, User, FolderKanban } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const navItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Profile', href: '/profile', icon: User },
  { name: 'Projects', href: '/projects', icon: FolderKanban },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav
      className={cn(
        'fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ease-in-out',
        'bg-background/80 backdrop-blur-sm shadow-lg rounded-full'
      )}
    >
      <div className="px-4 py-2">
        <div className="flex items-center justify-center h-12 space-x-4">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <Button
                key={item.name}
                asChild
                variant="ghost"
                size="icon"
                className={cn(
                  "rounded-full",
                  pathname === item.href
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:text-primary hover:bg-muted"
                )}
              >
                <Link href={item.href} aria-label={item.name}>
                  <Icon className="h-5 w-5" />
                </Link>
              </Button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

