import type { Metadata } from "next"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Products from "@/components/Products"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Edot Company - Welcome to Our World of Innovation",
  description:
    "Discover Edot Company's innovative products and solutions. Learn about our mission, explore our offerings, and get in touch with us.",
}

async function getProducts() {
  const res = await fetch("https://www.giovankov.com/api/product.json")
  if (!res.ok) {
    throw new Error("Failed to fetch products")
  }
  return res.json()
}

async function getImages() {
  const res = await fetch("https://www.giovankov.com/api/image.json")
  console.log(res)
  if (!res.ok) {
    throw new Error("Failed to fetch images")
  }
  return res.json()
}

export default async function Home() {
  const [products, images] = await Promise.all([getProducts(), getImages()])
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <About />
      <Products products={products?.data} images={images?.data} />
      <Contact />
      <Footer />
    </main>
  )
}

