import { Home, User, Image } from 'lucide-react'
import Link from "next/link"

export default function NavigationBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-2">
      <nav className="max-w-md mx-auto bg-gradient-to-b from-gray-200 to-gray-300 rounded-full px-12 py-1 shadow-lg">
        <ul className="flex justify-between items-center">
          <li>
            <Link 
              href="/"
              className="p-1.5 hover:bg-gray-100/20 rounded-full transition-colors"
            >
              <Home className="w-4 h-4 text-gray-700" />
            </Link>
          </li>
          <li>
            <Link 
              href="/profile"
              className="p-1.5 hover:bg-gray-100/20 rounded-full transition-colors"
            >
              <User className="w-4 h-4 text-gray-700" />
            </Link>
          </li>
          <li>
            <Link 
              href="/gallery"
              className="p-1.5 hover:bg-gray-100/20 rounded-full transition-colors"
            >
              <Image className="w-4 h-4 text-gray-700" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

