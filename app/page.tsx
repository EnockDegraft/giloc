"use client"

import { useState, Suspense } from "react"
import Link from "next/link"
import { ArrowRight, Award, BookOpen, CheckCircle2, Mic, Play, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Loading } from "@/components/loading"
import { subscribeToNewsletter } from "./actions/newsletter-actions"

export default function Home() {
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [email, setEmail] = useState("")
  const [formError, setFormError] = useState("")

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormError("")

    try {
      const formData = new FormData()
      formData.append("email", email)

      console.log("Subscribing to newsletter...")
      const result = await subscribeToNewsletter(formData)
      console.log("Newsletter subscription result:", result)

      if (result.success) {
        setIsSubscribed(true)
      } else {
        setFormError(result.message)
      }
    } catch (error) {
      console.error("Error subscribing to newsletter:", error)
      setFormError("An unexpected error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Suspense
        fallback={
          <div className="h-16 border-b flex items-center justify-center">
            <Loading size="small" />
          </div>
        }
      >
        <Header />
      </Suspense>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-amber-50 to-yellow-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Global Integrity Leaders Of Change
                </h1>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Empowering young entrepreneurs, developing trustworthy leaders, and nurturing talents across Africa.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/get-involved">
                    <Button className="inline-flex h-10 items-center justify-center rounded-md bg-amber-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-amber-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-700">
                      Get Involved
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button
                      variant="outline"
                      className="inline-flex h-10 items-center justify-center rounded-md border border-amber-600 bg-white px-8 text-sm font-medium text-amber-600 shadow-sm transition-colors hover:bg-amber-50 hover:text-amber-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-700"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  alt="GILOC - Empowering African Youth"
                  className="rounded-lg object-cover border shadow-lg"
                  height="400"
                  src="https://i.postimg.cc/nV3qmZT9/flier1.jpg"
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
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-700">Our Mission</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Building Africa's Future</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  GILOC is dedicated to fostering integrity, leadership, and innovation across the African continent.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3 md:gap-12">
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                  <Users className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold">Entrepreneurship</h3>
                <p className="text-sm text-gray-500">
                  Supporting young entrepreneurs with mentorship, resources, and networking opportunities.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                  <Award className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold">Leadership Development</h3>
                <p className="text-sm text-gray-500">
                  Cultivating trustworthy leaders who will drive positive change in their communities.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                  <Mic className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold">Talent Growth</h3>
                <p className="text-sm text-gray-500">
                  Nurturing talents in music, film, and other creative industries across Africa.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Impact</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See how GILOC is making a difference across Africa.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2">
              <div className="flex flex-col items-start space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-600 text-white">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Success Stories</h3>
                  <p className="text-gray-500">
                    Read about the entrepreneurs and leaders who have thrived with GILOC's support.
                  </p>
                  <Link className="inline-flex items-center text-amber-600 hover:underline" href="/success-stories">
                    Read Stories
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-600 text-white">
                  <Play className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Featured Projects</h3>
                  <p className="text-gray-500">Explore the innovative projects and initiatives supported by GILOC.</p>
                  <Link className="inline-flex items-center text-amber-600 hover:underline" href="/programs">
                    View Projects
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join Our Community</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Be part of the movement to transform Africa through integrity and leadership.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                {formError && <div className="bg-red-50 p-4 rounded-md text-red-600 text-sm">{formError}</div>}
                {isSubscribed ? (
                  <div className="bg-amber-50 p-6 rounded-lg text-center space-y-4">
                    <div className="flex justify-center">
                      <CheckCircle2 className="h-12 w-12 text-green-500" />
                    </div>
                    <h3 className="font-bold text-lg">Thank You for Subscribing!</h3>
                    <p className="text-gray-600">
                      You've successfully joined our newsletter. We'll keep you updated on our programs, events, and
                      impact stories.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-2 border-amber-600 text-amber-600 hover:bg-amber-50"
                      onClick={() => {
                        setIsSubscribed(false)
                        setEmail("")
                      }}
                    >
                      Subscribe Another Email
                    </Button>
                  </div>
                ) : (
                  <form className="flex space-x-2" onSubmit={handleSubscribe}>
                    <input
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your email"
                      type="email"
                      value={email}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                      required
                    />
                    <Button type="submit" className="h-10 bg-amber-600 hover:bg-amber-700" disabled={isSubmitting}>
                      {isSubmitting ? "Subscribing..." : "Subscribe"}
                    </Button>
                  </form>
                )}
                <p className="text-xs text-gray-500">
                  Subscribe to our newsletter to stay updated on our programs and events.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Suspense
        fallback={
          <div className="h-16 border-t flex items-center justify-center">
            <Loading size="small" />
          </div>
        }
      >
        <Footer />
      </Suspense>
    </div>
  )
}
