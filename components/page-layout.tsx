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
    <div className="min-h-screen bg-[#f1efe2] text-black relative noise-effect">
      {/* Floating Menu Button */}
      <svg
        width="100"
        height="100"
        viewBox="0 0 106.52 320.93"
        xmlns="http://www.w3.org/2000/svg"
        className="fixed top-6 right-6 z-50 cursor-pointer hover:opacity-70 transition-opacity duration-300 leading-7 px-0 mx-0"
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

      <div className="flex">
        <main className={`transition-all duration-500 ease-in-out ${sidebarOpen ? "w-[70%]" : "w-full"}`}>
          {children}
        </main>

        <Sidebar isOpen={sidebarOpen} />
      </div>
    </div>
  )
}
