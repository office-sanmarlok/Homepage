"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Home, Building, Briefcase, Mail, ChevronRight } from "lucide-react"

interface SidebarProps {
  isOpen: boolean
}

const menuItems = [
  {
    title: "ホーム",
    href: "/",
    icon: Home,
    description: "トップページ",
  },
  {
    title: "会社概要",
    href: "/about",
    icon: Building,
    description: "私たちについて",
  },
  {
    title: "サービス",
    href: "/services",
    icon: Briefcase,
    description: "提供サービス",
  },
  {
    title: "お問い合わせ",
    href: "/contact",
    icon: Mail,
    description: "ご連絡はこちら",
  },
]

export default function Sidebar({ isOpen }: SidebarProps) {
  const pathname = usePathname()

  if (!isOpen) return null

  return (
    <aside className="fixed right-0 top-0 h-full w-[30%] bg-black border-l border-gray-800 shadow-2xl z-40">
      <div className="p-8">
        <nav className="space-y-3">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center p-4 transition-all duration-300 group border-l-2 ${
                  isActive
                    ? "bg-white text-black border-l-white"
                    : "hover:bg-gray-800 text-gray-300 border-l-transparent hover:border-l-gray-600"
                }`}
              >
                <div className="flex-1">
                  <div className="font-medium text-sm tracking-wide">{item.title}</div>
                  <div className={`text-xs mt-1 ${isActive ? "text-gray-500" : "text-gray-400"}`}>
                    {item.description}
                  </div>
                </div>
                <ChevronRight
                  className={`h-4 w-4 transition-all duration-300 ${
                    isActive ? "text-black" : "text-gray-400 group-hover:translate-x-1"
                  }`}
                />
              </Link>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
