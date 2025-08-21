import "./globals.css";
import Link from "next/link";
import { Nunito_Sans } from "next/font/google";
import { MobileNav } from "./components/MobileNav";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunitoSans.variable}>
        <nav className="bg-scouts-purple text-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Link href="/" className="text-xl font-bold hover:text-purple-200 transition-colors">
                  Euxton Methodist Scouts
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-600 transition-colors">
                    Home
                  </Link>
                  <Link href="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-600 transition-colors">
                    About
                  </Link>
                  <div className="relative group">
                    <button className="px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-600 transition-colors">
                      Sections
                    </button>
                    <div className="absolute right-0 w-48 mt-2 py-2 bg-white rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <Link href="/about/sections/squirrels" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Squirrels (4-6)
                      </Link>
                      <Link href="/about/sections/beavers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Beavers (6-8)
                      </Link>
                      <Link href="/about/sections/cubs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Cubs (8-10½)
                      </Link>
                      <Link href="/about/sections/scouts" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Scouts (10½-14)
                      </Link>
                    </div>
                  </div>
                  <Link href="/faq" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-600 transition-colors">
                    FAQ
                  </Link>
                  <Link href="/contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-600 transition-colors">
                    Contact
                  </Link>
                </div>
              </div>

              {/* Mobile Navigation */}
              <MobileNav />
            </div>
          </div>
        </nav>

        <main className="min-h-screen">
          {children}
        </main>

        <footer className="bg-gray-800 text-white">
          <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Euxton Methodist Scouts</h3>
                <p className="text-gray-300">
                  Providing young people with opportunities to grow, be safe, and have fun.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Meeting Location</h3>
                <p className="text-gray-300">
                  Euxton Methodist Church Hall<br />
                  Wigan Road, Euxton<br />
                  Chorley, Lancashire, PR7 6LP<br />
                  North West England
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <p className="text-gray-300">
                  For more information about joining,<br />
                  please get in touch with us.
                </p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
              <p>&copy; {new Date().getFullYear()} Euxton Methodist Scouts. All rights reserved.</p>
              <p className="text-sm text-gray-400 mt-2">Version 1.0.0</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
