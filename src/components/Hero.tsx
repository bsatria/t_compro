import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative h-[40vh] flex items-center justify-center text-center text-white animate-in slide-in-from-left duration-1000">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://media.istockphoto.com/id/947225302/id/foto/tempat-kerja-pria-dengan-laptop-dan-smartphone.jpg?s=1024x1024&w=is&k=20&c=M5Lo2Jn3KDySw-aKyH8hiiRbfTk1P3zpYcCFrDqTnP0=" }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold">Welcome to Edot Company</h1>
        <p className="text-xl md:text-2xl">Innovating for a Better Tomorrow</p>
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
          Learn More
        </Button>
      </div>
    </section>
  )
}

