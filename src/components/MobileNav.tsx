import Link from "next/link"
import { Button } from "@/components/ui/button"

interface MobileNavProps {
  setIsOpen: (open: boolean) => void
}

export default function MobileNav({ setIsOpen }: MobileNavProps) {
  return (
        <nav className="flex flex-col space-y-4">
            <Button variant="ghost" asChild onClick={() => setIsOpen(false)}>
                <Link href="#about">About Us</Link>
            </Button>
            <Button variant="ghost" asChild onClick={() => setIsOpen(false)}>
                <Link href="#products">Products</Link>
            </Button>
            <Button variant="ghost" asChild onClick={() => setIsOpen(false)}>
                <Link href="#contact">Contact</Link>
            </Button>
        </nav>
  )
}

