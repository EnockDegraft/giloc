import Link from "next/link"
import { ArrowRight, BookOpen, BriefcaseBusiness, Film, GraduationCap, Laptop, Mic, Tractor, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ProgramsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-amber-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Programs</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover how GILOC is empowering Africa's next generation of leaders and innovators.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden">
                <CardHeader className="p-0">
                  <div className="h-48 w-full bg-amber-100 flex items-center justify-center">
                    <Film className="h-16 w-16 text-amber-600" />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-2">Creativity - Movie Industry</CardTitle>
                  <CardDescription className="text-base">
                    We embark on TV series that showcase youth talent, bringing together script writers, camera
                    operators, directors, and actors to create compelling content that highlights African stories.
                  </CardDescription>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button variant="outline" className="w-full">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
              <Card className="overflow-hidden">
                <CardHeader className="p-0">
                  <div className="h-48 w-full bg-amber-100 flex items-center justify-center">
                    <Mic className="h-16 w-16 text-amber-600" />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-2">Creativity - Music Industry</CardTitle>
                  <CardDescription className="text-base">
                    We promote and rebrand artists for global commercials, working with Senior High Schools across
                    Africa to shape the musical life of youth and promote their talents on a global stage.
                  </CardDescription>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button variant="outline" className="w-full">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
              <Card className="overflow-hidden">
                <CardHeader className="p-0">
                  <div className="h-48 w-full bg-amber-100 flex items-center justify-center">
                    <Tractor className="h-16 w-16 text-amber-600" />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-2">Agriculture</CardTitle>
                  <CardDescription className="text-base">
                    We train students in good farming practices, providing necessary materials and land space to
                    cultivate various crops. This creates revenue opportunities and equips students with valuable skills
                    in farm production.
                  </CardDescription>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button variant="outline" className="w-full">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
              <Card className="overflow-hidden">
                <CardHeader className="p-0">
                  <div className="h-48 w-full bg-amber-100 flex items-center justify-center">
                    <GraduationCap className="h-16 w-16 text-amber-600" />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-2">Leadership Building</CardTitle>
                  <CardDescription className="text-base">
                    We train selfless and visionary leaders with integrity, placing them in companies, institutions, and
                    government positions to drive developmental projects across African countries.
                  </CardDescription>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button variant="outline" className="w-full">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
              <Card className="overflow-hidden">
                <CardHeader className="p-0">
                  <div className="h-48 w-full bg-amber-100 flex items-center justify-center">
                    <Users className="h-16 w-16 text-amber-600" />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-2">Sports</CardTitle>
                  <CardDescription className="text-base">
                    We build youth in sports through training and connecting them with opportunities in football,
                    volleyball, basketball, athletics, and other fields, helping them become global personalities who
                    give back to society.
                  </CardDescription>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button variant="outline" className="w-full">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
              <Card className="overflow-hidden">
                <CardHeader className="p-0">
                  <div className="h-48 w-full bg-amber-100 flex items-center justify-center">
                    <Laptop className="h-16 w-16 text-amber-600" />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-2">Technology</CardTitle>
                  <CardDescription className="text-base">
                    We bring technology to all youth to ensure effective developmental growth, equipping them with ICT
                    and technological knowledge for better life improvement across Africa.
                  </CardDescription>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button variant="outline" className="w-full">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
              <Card className="overflow-hidden">
                <CardHeader className="p-0">
                  <div className="h-48 w-full bg-amber-100 flex items-center justify-center">
                    <BriefcaseBusiness className="h-16 w-16 text-amber-600" />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-2">Entrepreneurship</CardTitle>
                  <CardDescription className="text-base">
                    In partnership with companies and stakeholders, we subsidize wholesale products for young
                    entrepreneurs, creating business opportunities and supporting them to establish and expand their
                    ventures.
                  </CardDescription>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button variant="outline" className="w-full">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
              <Card className="overflow-hidden">
                <CardHeader className="p-0">
                  <div className="h-48 w-full bg-amber-100 flex items-center justify-center">
                    <BookOpen className="h-16 w-16 text-amber-600" />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-2">Economic Management</CardTitle>
                  <CardDescription className="text-base">
                    We help youth regulate their economic management through frequent training on establishing
                    businesses with limited capital, developing strategies for economic growth at both individual and
                    national levels.
                  </CardDescription>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button variant="outline" className="w-full">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Program Impact</h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our programs are designed to create lasting impact across Africa, empowering youth through practical
                  skills, mentorship, and opportunities. We focus on sustainable development that benefits both
                  individuals and communities.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="inline-flex h-10 items-center justify-center rounded-md bg-amber-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-amber-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-700">
                    View Impact Report
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  alt="GILOC Program Impact"
                  className="rounded-lg object-cover border shadow-lg"
                  height="400"
                  src="/placeholder.svg?height=400&width=600"
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
      </main>
      <Footer />
    </div>
  )
}
