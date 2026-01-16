import Link from "next/link"
import { ArrowRight, Globe, Heart, Lightbulb, Target } from "lucide-react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center justify-center ">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About GILOC</h1>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Global Integrity Leaders Of Change (GILOC) is a non-profit organization dedicated to fostering the
                  growth of young entrepreneurs, developing trustworthy leaders, and nurturing talents in music, film,
                  and other industries across Africa.
                </p>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Founded with a vision to transform Africa through integrity and leadership, GILOC works tirelessly to
                  create opportunities for the continent's youth to realize their full potential.
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  alt="GILOC Team"
                  className="rounded-lg object-cover border shadow-lg"
                  height="400"
                  src="https://i.postimg.cc/q7K9BBQk/Giloc.png"
                  style={{
                    aspectRatio: "600/400",
                    objectFit: "cover",
                  }}
                  width="600"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Vision & Mission</h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2">
              <div className="flex flex-col items-start space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-600 text-white">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Vision</h3>
                  <p className="text-gray-500">To Make Africa a competitive place for global demand and development.</p>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-600 text-white">
                  <Target className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Mission</h3>
                  <p className="text-gray-500">
                    Through a youthful journey of Creativity, Agriculture, Leadership Skills, Sports, Technology,
                    Entrepreneurship and Economic Management for the youth from the senior high school level through to
                    the University and beyond.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Values</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The principles that guide our work and relationships.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3 md:gap-12">
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                  <Heart className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold">Integrity</h3>
                <p className="text-sm text-gray-500">
                  We uphold the highest ethical standards in all our actions and relationships.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                  <Lightbulb className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold">Innovation</h3>
                <p className="text-sm text-gray-500">
                  We embrace creative thinking and novel approaches to solving Africa's challenges.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                  <Globe className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold">Inclusivity</h3>
                <p className="text-sm text-gray-500">
                  We celebrate diversity and ensure our programs are accessible to all.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex justify-center">
                <img
                  alt="GILOC Leadership Team"
                  className="rounded-lg object-cover border shadow-lg"
                  height="400"
                  src="https://i.postimg.cc/0j3Z27YZ/Edward.jpg"
                  style={{
                    aspectRatio: "600/400",
                    objectFit: "cover",
                  }}
                  width="600"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Leadership</h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  GILOC was founded by Edward Destiny Kojo Mensah and is led by a diverse team of passionate individuals
                  committed to Africa's transformation. Our leadership brings together expertise from various sectors
                  including business, education, arts, and community development.
                </p>
                <Link className="inline-flex items-center text-amber-600 hover:underline" href="/team">
                  Meet Our Team
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
