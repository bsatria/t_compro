"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import MobileNav from "./MobileNav"
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-blue-600">Edot</span>
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Button variant="ghost" asChild>
            <Link href="#about">About Us</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="#products">Products</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="#contact">Contact</Link>
          </Button>
        </nav>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <VisuallyHidden>
                <SheetTitle/>
            </VisuallyHidden>
            <MobileNav setIsOpen={setIsOpen} />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

