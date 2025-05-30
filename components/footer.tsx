import { Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4 md:mb-0">© 2023 Ramachandiran S. All rights reserved.</p>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/ramachandiran7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-yellow-500"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:ramachandira2004@gmail.com"
              className="text-gray-600 dark:text-gray-300 hover:text-yellow-500"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
