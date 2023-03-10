import Image from "next/image"
import Link from "next/link"

/* This example requires Tailwind CSS v2.0+ */
const navigation = [
  /*{ name: 'Blog', href: 'https://mirror.xyz/decentdotland.eth'},
  { name: 'Launch', href: '/roadmap', classes: 'hover:transition-color hover:drop-shadow-[0_0px_20px_rgba(0,255,255,0.5)] text-yellow-500 border-solid pt-1 pb-1 pl-3 pr-3 rounded-lg border-yellow-700 border-2 hover:text-yellow-300 hover:border-yellow-600'},
  */
]

export default function Navbar() {
  return (
    <header className="bg-[#21275A]">
      <nav className="max-w-7xl px-4 sm:px-6 lg:px-6" aria-label="Top">
        <div className="w-full py-1 flex justify-between">
          <div className="flex items-center">
            <Link href="/">
              <Image
                height={40}
                width={40}
                className="mt-4 mb-4 mr-2 w-auto"
                src={`/logo.png`}
                alt=""
              />
           
            </Link>
            <span className="hidden sm:block">
              <span className="text-white flex ml-2 text-xl items-center font-bold mr-6"><Link href="/">Sender Protocol</Link></span>
            </span>
            <div className="ml-10 space-x-12">
              {navigation.map((link) => (
                <a key={link.name} href={link.href} className={`text-base font-medium text-white ${link.classes}`}>
                  {link.name}
                </a>
              ))}
            </div>
           
          </div>
      
          { /*
          <div className="ml-10 space-x-4">
            <a
              
              className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
            >
              Sign in
            </a>
            <a
              
              className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50"
            >
              Sign up
            </a>
          </div>
          */ } 
        </div>
        <div className="w-full"></div>
      </nav>
    </header>
  )
}
