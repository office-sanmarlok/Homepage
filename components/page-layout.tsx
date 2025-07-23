"use client"

import type React from "react"

import { useSidebar } from "@/contexts/sidebar-context"
import Sidebar from "@/components/sidebar"
import { MenuIcon } from "@/components/icons/menu-icon"

interface PageLayoutProps {
  children: React.ReactNode
}

export default function PageLayout({ children }: PageLayoutProps) {
  const { sidebarOpen, toggleSidebar } = useSidebar()

  return (
    <div className="min-h-screen bg-[#F4F5F7] text-black relative global-grain">
      {/* Floating Menu Button */}
      <div
        className="fixed top-4 right-4 md:top-6 md:right-6 z-50 cursor-pointer hover:opacity-70 transition-opacity duration-300"
        style={{ mixBlendMode: "difference" }}
        onClick={toggleSidebar}
      >
        <MenuIcon />
      </div>

      <main className="w-full">
        {children}
      </main>

      <Sidebar isOpen={sidebarOpen} />
    </div>
  )
}
