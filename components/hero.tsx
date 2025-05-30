import Image from "next/image"
import DownloadButton from "./download-button"

export default function Hero() {
  return (
    <section className="py-20 md:py-32">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hello, I am <span className="text-yellow-500">Ramachandiran</span>
          </h1>
          <h2 className="text-2xl md:text-4xl mb-8 text-gray-800 dark:text-gray-200">System Administrator</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
            A dedicated IT professional with expertise in system administration, network management, and technical
            support. Passionate about creating robust and secure IT infrastructure.
          </p>
          <DownloadButton />
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-yellow-500/20">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo.jpg-wbFZ9lHyXZSBlWOuYUBtW6zpQdTe7N.jpeg"
              alt="Ramachandiran S"
              layout="fill"
              objectFit="cover"
              objectPosition="center right"
              className="scale-110 hover:scale-115 transition-transform duration-300"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
