"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, CheckCircle2, HandHeart, MessageSquare, Share2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { submitGetInvolvedForm } from "../actions/get-involved-actions"

export default function GetInvolvedPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [activeCard, setActiveCard] = useState(null)
  const [formError, setFormError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormError("")

    try {
      const formData = new FormData(e.target as HTMLFormElement)
      console.log("Submitting get involved form...")

      const result = await submitGetInvolvedForm(formData)
      console.log("Get involved form submission result:", result)

      if (result.success) {
        setIsSubmitted(true)
      } else {
        setFormError(result.message)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setFormError("An unexpected error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleCardClick = (cardType) => {
    setActiveCard(cardType)

    // Set the involvement type in the select dropdown
    const selectElement = document.getElementById("involvement")
    if (selectElement) {
      selectElement.value = cardType
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-amber-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get Involved</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join us in our mission to transform Africa through integrity and leadership.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card
                className={`${activeCard === "volunteer" ? "ring-2 ring-amber-500" : ""} transition-all duration-300`}
              >
                <CardHeader>
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 mb-4">
                    <HandHeart className="h-8 w-8 text-amber-600" />
                  </div>
                  <CardTitle>Volunteer</CardTitle>
                  <CardDescription>Share your skills and time to support our programs and initiatives.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    We need volunteers with various skills including mentoring, event organization, content creation,
                    and program facilitation.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full bg-amber-600 hover:bg-amber-700"
                    onClick={() => handleCardClick("volunteer")}
                  >
                    Become a Volunteer
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
              <Card
                className={`${activeCard === "partner" ? "ring-2 ring-amber-500" : ""} transition-all duration-300`}
              >
                <CardHeader>
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 mb-4">
                    <MessageSquare className="h-8 w-8 text-amber-600" />
                  </div>
                  <CardTitle>Partner With Us</CardTitle>
                  <CardDescription>Collaborate with GILOC to create greater impact across Africa.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    We welcome partnerships with organizations, businesses, and institutions that share our vision for
                    Africa's transformation.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700" onClick={() => handleCardClick("partner")}>
                    Explore Partnerships
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
              <Card className={`${activeCard === "spread" ? "ring-2 ring-amber-500" : ""} transition-all duration-300`}>
                <CardHeader>
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 mb-4">
                    <Share2 className="h-8 w-8 text-amber-600" />
                  </div>
                  <CardTitle>Spread the Word</CardTitle>
                  <CardDescription>Help us reach more people by sharing our mission and impact.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Follow us on social media, share our content, and tell others about the work we're doing to empower
                    Africa's next generation.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700" onClick={() => handleCardClick("spread")}>
                    Follow & Share
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Support Our Work</h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Your donation helps us continue our mission of empowering young entrepreneurs, developing trustworthy
                  leaders, and nurturing talents across Africa.
                </p>
                <div className="grid gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                      <span className="font-bold text-amber-600">1</span>
                    </div>
                    <div>
                      <h3 className="font-bold">Fund a Program</h3>
                      <p className="text-sm text-gray-500">
                        Support specific initiatives that align with your interests.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                      <span className="font-bold text-amber-600">2</span>
                    </div>
                    <div>
                      <h3 className="font-bold">Sponsor an Event</h3>
                      <p className="text-sm text-gray-500">Help us organize impactful events and workshops.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                      <span className="font-bold text-amber-600">3</span>
                    </div>
                    <div>
                      <h3 className="font-bold">Make a General Donation</h3>
                      <p className="text-sm text-gray-500">Contribute to our overall mission and operations.</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/donate">
                    <Button className="inline-flex h-10 items-center justify-center rounded-md bg-amber-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-amber-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-700">
                      Donate Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Be A Part Of Us</h2>
                <p className="text-gray-500">Have questions about getting involved? Reach out to us.</p>
                {isSubmitted ? (
                  <div className="bg-white p-8 rounded-lg shadow-md text-center space-y-4">
                    <div className="flex justify-center">
                      <CheckCircle2 className="h-16 w-16 text-green-500" />
                    </div>
                    <h3 className="text-xl font-bold">Thank You for Your Interest!</h3>
                    <p className="text-gray-500">
                      We appreciate your enthusiasm to get involved with GILOC. Our team will review your message and
                      contact you soon with more information about how you can contribute to our mission.
                    </p>
                    <Button className="mt-4 bg-amber-600 hover:bg-amber-700" onClick={() => setIsSubmitted(false)}>
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form className="grid gap-4" onSubmit={handleSubmit}>
                    {formError && <div className="bg-red-50 p-4 rounded-md text-red-600 text-sm">{formError}</div>}
                    <div className="grid gap-2">
                      <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="name"
                      >
                        Name
                      </label>
                      <Input id="name" name="name" placeholder="Enter your name" required />
                    </div>
                    <div className="grid gap-2">
                      <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <Input id="email" name="email" placeholder="Enter your email" type="email" required />
                    </div>
                    <div className="grid gap-2">
                      <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="phone"
                      >
                        Phone Number
                      </label>
                      <Input id="phone" name="phone" placeholder="Enter your phone number" type="tel" required />
                    </div>
                    <div className="grid gap-2">
                      <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="involvement"
                      >
                        How would you like to get involved?
                      </label>
                      <select
                        id="involvement"
                        name="involvement"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        defaultValue={activeCard || ""}
                        required
                      >
                        <option value="" disabled>
                          Select an option
                        </option>
                        <option value="volunteer">Volunteer</option>
                        <option value="partner">Partner With Us</option>
                        <option value="spread">Spread the Word</option>
                        <option value="donate">Donate</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="grid gap-2">
                      <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="How would you like to get involved?"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
