import Image from 'next/image'
import TechStack from '../components/techStack'

export default function ProfileCard() {
    return (
      <div className="h-screen bg-zinc-900 text-white p-6 flex justify-center items-center">
        <div className="max-w-4xl w-full space-y-8">
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
        <TechStack />
        
        </div>
      </div>
    )
  }
  