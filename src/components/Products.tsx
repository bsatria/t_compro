"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface Product {
  id: string
  name: string
}

interface ProductImage {
  id: string[]
  image: string
}

interface ProductsProps {
  products: Product[]
  images: ProductImage[]
}

export default function Products({ products, images }: ProductsProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <Dialog>
      <section
        id="products"
        className="py-16 animate-in fade-in duration-1000"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {products?.map((product) => {
              const image = images.find((img) => img.id.includes(product.id))
              return (
                <DialogTrigger
                  key={product.id}
                  asChild
                >
                  <Card
                    className="overflow-hidden transition-transform hover:scale-105 cursor-pointer"
                    onClick={() => setSelectedImage(image?.image || null)}
                  >
                    <CardContent className="p-0 ">
                      <Image
                        src={
                          image?.image ||
                          "https://st2.depositphotos.com/2586633/46477/v/1600/depositphotos_464771766-stock-illustration-no-photo-or-blank-image.jpg"
                        }
                        alt={product?.id}
                        width={300}
                        loading="lazy"
                        height={200}
                        className="w-full h-48 object-cover"
                      />
                    </CardContent>
                    <CardFooter className="p-2">
                      <p className="text-sm font-semibold">{product.name || "no name"}</p>
                      <p className="text-xs text-gray-500 ml-auto">ID: {product.id}</p>
                    </CardFooter>
                  </Card>
                </DialogTrigger>
              )
            })}
          </div>
        </div>
        <DialogContent className="max-w-3xl">
          <DialogTitle>Product preview</DialogTitle>
            <Image
              src={selectedImage || "https://st2.depositphotos.com/2586633/46477/v/1600/depositphotos_464771766-stock-illustration-no-photo-or-blank-image.jpg"}
              alt={`Product preview ${selectedImage}`}
              width={800}
              height={600}
              className="w-full h-auto"
            />
        </DialogContent>
      </section>
    </Dialog>
  )
}
