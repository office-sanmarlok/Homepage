"use client"

import type React from "react"

import { useSidebar } from "@/contexts/sidebar-context"
import Sidebar from "@/components/sidebar"

interface PageLayoutProps {
  children: React.ReactNode
}

export default function PageLayout({ children }: PageLayoutProps) {
  const { sidebarOpen, toggleSidebar } = useSidebar()

  return (
    <div className="min-h-screen bg-[#F4F5F7] text-black relative global-grain">
      {/* Floating Menu Button */}
      <svg
        viewBox="0 0 106.52 320.93"
        xmlns="http://www.w3.org/2000/svg"
        className="fixed top-4 right-4 md:top-6 md:right-6 z-50 cursor-pointer hover:opacity-70 transition-opacity duration-300 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
        style={{ mixBlendMode: "difference" }}
        onClick={toggleSidebar}
      >
        <rect
          fill="#fff"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="4"
          x="2"
          y="2"
          width="102.52"
          height="12.68"
        />
        <rect
          fill="#fff"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="4"
          x="2"
          y="26.85"
          width="102.52"
          height="12.68"
        />
        <rect
          fill="#fff"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="4"
          x="2"
          y="51.69"
          width="102.52"
          height="12.68"
        />
        <circle fill="#fff" stroke="#fff" strokeMiterlimit="10" strokeWidth="4" cx="53.26" cy="123.2" r="44.2" />
        <rect
          fill="#fff"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="4"
          x="2"
          y="182.02"
          width="102.52"
          height="12.68"
        />
        <rect className="border-0"
          fill="#fff"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="4"
          x="2"
          y="206.87"
          width="102.52"
          height="12.68"
        />
        <rect
          fill="#fff"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="4"
          x="2"
          y="231.72"
          width="102.52"
          height="12.68"
        />
        <rect
          fill="#fff"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="4"
          x="2"
          y="256.56"
          width="102.52"
          height="12.68"
        />
        <rect
          fill="#fff"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="4"
          x="2"
          y="281.41"
          width="102.52"
          height="12.68"
        />
        <rect
          fill="#fff"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="4"
          x="2"
          y="306.25"
          width="102.52"
          height="12.68"
        />
      </svg>

      <main className="w-full">
        {children}
      </main>

      <Sidebar isOpen={sidebarOpen} />
    </div>
  )
}
