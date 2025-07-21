"use client"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
}

export default function Header({ sidebarOpen, setSidebarOpen }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8">
      <div className="flex items-center">
        <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(!sidebarOpen)} className="md:hidden p-2">
          <Menu className="h-5 w-5" />
        </Button>
        <h1 className="text-lg font-semibold ml-2">Office 306</h1>
      </div>
    </header>
  )
}
