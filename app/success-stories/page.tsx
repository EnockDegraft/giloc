import Link from "next/link"
import { ArrowRight, Quote } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function SuccessStoriesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-amber-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Success Stories</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Meet the individuals and communities whose lives have been transformed through GILOC's programs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src="https://i.postimg.cc/gJ7FPzfH/Success1.jpg"
                    alt="Dramani's Story"
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="rounded-full overflow-hidden w-12 h-12">
                      <img
                        src="https://i.postimg.cc/gJ7FPzfH/Success1.jpg"
                        alt="Dramani"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold">Dramani Richard</h3>
                      <p className="text-sm text-gray-500">Entrepreneurship Program</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <Quote className="h-8 w-8 text-amber-200 mb-2" />
                    <p className="text-gray-600 italic">“GILOC’S entrepreneurship program completely transformed my mindset and gave me the foundation I needed to succeed. It inspired me to take action and start my own data bundle business. Today, I run a growing business online and serve over 80 loyal customers with confidence and purpose.”
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src="/placeholder.svg?height=300&width=500"
                    alt="Amara's Story"
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="rounded-full overflow-hidden w-12 h-12">
                      <img
                        src="/placeholder.svg?height=100&width=100"
                        alt="Amara"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold">Amara Okafor</h3>
                      <p className="text-sm text-gray-500">Music Industry Program</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <Quote className="h-8 w-8 text-amber-200 mb-2" />
                    <p className="text-gray-600 italic">
                      "The mentorship and exposure I received through GILOC's music program helped me develop my talent.
                      I've now released two albums and performed at international festivals."
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src="/placeholder.svg?height=300&width=500"
                    alt="Kofi's Story"
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="rounded-full overflow-hidden w-12 h-12">
                      <img
                        src="/placeholder.svg?height=100&width=100"
                        alt="Kofi"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold">Kofi Mensah</h3>
                      <p className="text-sm text-gray-500">Agriculture Program</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <Quote className="h-8 w-8 text-amber-200 mb-2" />
                    <p className="text-gray-600 italic">
                      "GILOC taught me modern farming techniques that tripled my crop yield. I now run a successful
                      agribusiness that supports my family and employs several people from my community."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-500 mb-6">
                These are just a few of the many success stories from our programs. Join us to create your own success
                story or help others achieve theirs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/get-involved">
                  <Button className="bg-amber-600 hover:bg-amber-700">Get Involved</Button>
                </Link>
                <Link href="/donate">
                  <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                    Support Our Work
                  </Button>
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
