export default function About() {
    return (
      <section id="about" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 animate-in fade-in duration-1000">About Edot Company</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 animate-in slide-in-from-left duration-1000">
              <h3 className="text-xl font-semibold">Our Mission</h3>
              <p>
                At Edot Company, we&apos;re committed to pushing the boundaries of innovation. Our mission is to create
                products that enhance people&apos;s lives and contribute to a sustainable future.
              </p>
            </div>
            <div className="space-y-4 animate-in slide-in-from-right duration-1000">
              <h3 className="text-xl font-semibold">Future and Innovation</h3>
              <p>
                We&apos;re constantly looking ahead, investing in cutting-edge technologies and sustainable practices. Our team
                of experts is dedicated to developing solutions that will shape the world of tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  