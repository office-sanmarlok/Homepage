"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"

interface SidebarProps {
  isOpen: boolean
}

const menuItems = [
  {
    title: "表紙",
    titleEn: "Home",
    href: "/",
  },
  {
    title: "社員",
    titleEn: "Members",
    href: "/members",
  },
  {
    title: "事業",
    titleEn: "Businesses",
    href: "/businesses",
  },
]

export default function Sidebar({ isOpen }: SidebarProps) {
  const pathname = usePathname()

  return (
    <aside className={`fixed right-0 top-0 h-full w-full md:w-[50%] lg:w-[30%] bg-black border-l border-gray-800 shadow-2xl z-40 transition-transform duration-300 ease-in-out ${
      isOpen ? 'translate-x-0' : 'translate-x-full'
    }`}>
      <div className="p-8 pt-32">
        <nav className="space-y-8">
          {menuItems.map((item) => {
            const isActive = pathname === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                className="block group"
              >
                <div className={`transition-all duration-300 ${
                  isActive ? "text-white" : "text-gray-400 hover:text-gray-200"
                }`}>
                  <div className="text-lg font-light tracking-wide" style={{ fontFamily: 'HOT-Tenshokk' }}>{item.title}</div>
                  <div className="text-sm mt-1">{item.titleEn}</div>
                  <div className={`h-px mt-2 transition-all duration-300 ${
                    isActive 
                      ? "bg-white w-full" 
                      : "bg-gray-600 w-0 group-hover:w-full"
                  }`} />
                </div>
              </Link>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
