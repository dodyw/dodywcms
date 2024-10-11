import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dody Rachmat Wicaksono - Software Engineer & Tech Enthusiast',
  description: 'Personal website and coding tutorials by Dody Rachmat Wicaksono',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-gray-100`}>
        <header className="sticky top-0 bg-gray-800 py-4 shadow-md z-10">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">
              dodyw.com
            </Link>
            <nav>
              <ul className="flex space-x-4">
                <li><Link href="/profile" className="hover:text-blue-400">Profile</Link></li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="bg-gray-800 py-4 mt-8">
          <div className="container mx-auto px-4 text-center">
            <p>© {currentYear} dodyw.com. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
