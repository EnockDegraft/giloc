"use client"

import { useState } from "react"
import Link from "next/link"
import { CheckCircle2, Heart, Landmark, Phone, Wallet } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { submitDonation } from "../actions/donation-actions"

export default function DonatePage() {
  const [donationAmount, setDonationAmount] = useState("100")
  const [donationType, setDonationType] = useState("one-time")
  const [paymentMethod, setPaymentMethod] = useState("mobile-money")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [donorName, setDonorName] = useState("")
  const [mobileNetwork, setMobileNetwork] = useState("")
  const [formError, setFormError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormError("")

    try {
      // Get the donor's name from the form
      const formData = new FormData(e.target)
      const firstName = formData.get("first-name") || ""
      const lastName = formData.get("last-name") || ""
      setDonorName(`${firstName} ${lastName}`.trim())
      setMobileNetwork(formData.get("network") || "")

      // Add payment method to form data
      formData.append("payment-method", paymentMethod)
      formData.append("amount", donationAmount)
      formData.append("donation-type", donationType)

      console.log("Submitting donation...")
      const result = await submitDonation(formData)
      console.log("Donation submission result:", result)

      if (result.success) {
        setIsSubmitted(true)
      } else {
        setFormError(result.message)
      }
    } catch (error) {
      console.error("Error submitting donation:", error)
      setFormError("An unexpected error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Support Our Mission</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Your donation helps us empower Africa's youth through our programs and initiatives.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-6">Why Donate?</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <Heart className="h-8 w-8 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Transform Lives</h3>
                      <p className="text-gray-500">
                        Your donation directly impacts the lives of young Africans, providing them with opportunities
                        for growth and development.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <Landmark className="h-8 w-8 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Build Communities</h3>
                      <p className="text-gray-500">
                        By supporting our programs, you help strengthen communities across Africa through education,
                        entrepreneurship, and leadership.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <Wallet className="h-8 w-8 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Create Sustainable Change</h3>
                      <p className="text-gray-500">
                        Your contribution enables us to develop and implement programs that create lasting positive
                        change in Africa.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 space-y-4">
                  <h3 className="font-bold text-lg">How Your Donation Helps</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-amber-50 p-4 rounded-lg text-center">
                      <p className="font-bold text-amber-600 text-xl mb-1">GH₵ 50</p>
                      <p className="text-sm text-gray-600">Provides training materials for one student</p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg text-center">
                      <p className="font-bold text-amber-600 text-xl mb-1">GH₵ 100</p>
                      <p className="text-sm text-gray-600">Sponsors a workshop for 5 participants</p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg text-center">
                      <p className="font-bold text-amber-600 text-xl mb-1">GH₵ 200</p>
                      <p className="text-sm text-gray-600">Funds a month of mentorship for a young entrepreneur</p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg text-center">
                      <p className="font-bold text-amber-600 text-xl mb-1">GH₵ 1000</p>
                      <p className="text-sm text-gray-600">Supports a community project implementation</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                {isSubmitted ? (
                  <Card>
                    <CardHeader>
                      <div className="flex justify-center mb-4">
                        <CheckCircle2 className="h-16 w-16 text-green-500" />
                      </div>
                      <CardTitle className="text-center text-2xl">Thank You for Your Donation!</CardTitle>
                      <CardDescription className="text-center">
                        Your support makes our work possible. We've sent a confirmation to your phone number.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="bg-amber-50 p-6 rounded-lg text-center">
                          <p className="text-lg font-medium mb-2">
                            {donorName ? `Thank you, ${donorName}!` : "Thank you!"}
                          </p>
                          <p className="text-3xl font-bold text-amber-600 mb-2">GH₵ {donationAmount}</p>
                          <p className="text-sm text-gray-600">
                            {donationType === "monthly" ? "Monthly Donation" : "One-time Donation"}
                          </p>
                          <p className="text-sm text-gray-600 mt-2">via {mobileNetwork} Mobile Money</p>
                        </div>
                        <p className="text-center text-gray-500">
                          Your generous donation will help us continue our mission to empower Africa's youth through
                          education, entrepreneurship, and leadership development.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                          <Button className="bg-amber-600 hover:bg-amber-700" onClick={() => setIsSubmitted(false)}>
                            Make Another Donation
                          </Button>
                          <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                            <Link href="/success-stories">See Your Impact</Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <Card>
                    <CardHeader>
                      <CardTitle>Make a Donation</CardTitle>
                      <CardDescription>
                        Choose your donation amount and payment method. All donations are tax-deductible.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        {formError && <div className="bg-red-50 p-4 rounded-md text-red-600 text-sm">{formError}</div>}
                        <div className="space-y-4">
                          <Label>Donation Type</Label>
                          <RadioGroup
                            defaultValue="one-time"
                            value={donationType}
                            onValueChange={setDonationType}
                            className="flex flex-col space-y-1"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="one-time" id="one-time" />
                              <Label htmlFor="one-time" className="font-normal">
                                One-time Donation
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="monthly" id="monthly" />
                              <Label htmlFor="monthly" className="font-normal">
                                Monthly Donation
                              </Label>
                            </div>
                          </RadioGroup>
                        </div>

                        <div className="space-y-4">
                          <Label>Donation Amount (GH₵)</Label>
                          <RadioGroup
                            defaultValue="100"
                            value={donationAmount}
                            onValueChange={setDonationAmount}
                            className="grid grid-cols-2 gap-4"
                          >
                            <div className="flex items-center justify-center space-x-2 border rounded-md p-3 cursor-pointer hover:bg-amber-50">
                              <RadioGroupItem value="50" id="amount-50" className="sr-only" />
                              <Label htmlFor="amount-50" className="font-bold cursor-pointer">
                                GH₵ 50
                              </Label>
                            </div>
                            <div className="flex items-center justify-center space-x-2 border rounded-md p-3 cursor-pointer hover:bg-amber-50">
                              <RadioGroupItem value="100" id="amount-100" className="sr-only" />
                              <Label htmlFor="amount-100" className="font-bold cursor-pointer">
                                GH₵ 100
                              </Label>
                            </div>
                            <div className="flex items-center justify-center space-x-2 border rounded-md p-3 cursor-pointer hover:bg-amber-50">
                              <RadioGroupItem value="200" id="amount-200" className="sr-only" />
                              <Label htmlFor="amount-200" className="font-bold cursor-pointer">
                                GH₵ 200
                              </Label>
                            </div>
                            <div className="flex items-center justify-center space-x-2 border rounded-md p-3 cursor-pointer hover:bg-amber-50">
                              <RadioGroupItem value="1000" id="amount-1000" className="sr-only" />
                              <Label htmlFor="amount-1000" className="font-bold cursor-pointer">
                                GH₵ 1000
                              </Label>
                            </div>
                          </RadioGroup>
                          <div className="flex items-center space-x-2">
                            <Label htmlFor="custom-amount">Custom Amount (GH₵):</Label>
                            <Input
                              id="custom-amount"
                              name="custom-amount"
                              type="number"
                              placeholder="Enter amount"
                              min="1"
                              className="w-32"
                              onChange={(e) => setDonationAmount(e.target.value)}
                            />
                          </div>
                        </div>

                        <Tabs
                          defaultValue="mobile-money"
                          value={paymentMethod}
                          onValueChange={setPaymentMethod}
                          className="w-full"
                        >
                          <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="mobile-money">Mobile Money</TabsTrigger>
                            <TabsTrigger value="bank-transfer">Bank Transfer</TabsTrigger>
                          </TabsList>
                          <TabsContent value="mobile-money" className="space-y-4">
                            <div className="space-y-2">
                              <Label htmlFor="name-on-number">Name on Mobile Money Account</Label>
                              <Input id="name-on-number" name="name-on-number" placeholder="John Doe" required />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="network">Mobile Network</Label>
                              <Select name="network" required defaultValue="">
                                <SelectTrigger>
                                  <SelectValue placeholder="Select network" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="MTN">MTN Mobile Money</SelectItem>
                                  <SelectItem value="Telecel">Telecel Cash</SelectItem>
                                  <SelectItem value="AT Money">AT Money</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="mobile-number">Mobile Number</Label>
                              <Input id="mobile-number" name="mobile-number" placeholder="0XX XXX XXXX" required />
                            </div>
                            <div className="p-4 bg-gray-50 rounded-md mt-4">
                              <div className="flex items-center gap-2 mb-2">
                                <Phone className="h-5 w-5 text-amber-600" />
                                <p className="text-sm font-medium">How to complete your donation:</p>
                              </div>
                              <ol className="text-sm text-gray-600 space-y-2 pl-6 list-decimal">
                                <li>Fill in your details and submit this form</li>
                                <li>
                                  Our Customer Service will contact you within the next 24hours to Complete your
                                  transaction
                                </li>
                                <li>You'll receive a confirmation message once the donation is processed</li>
                              </ol>
                            </div>
                          </TabsContent>
                          <TabsContent value="bank-transfer" className="space-y-4">
                            <div className="space-y-2">
                              <Label>Bank Account Information</Label>
                              <p className="text-sm text-gray-500">
                                Please use the following details to make your bank transfer:
                              </p>
                              <div className="bg-gray-50 p-4 rounded-md space-y-2">
                                <p className="text-sm">
                                  <span className="font-medium">Bank Name:</span> Agricultural Development Bank
                                </p>
                                <p className="text-sm">
                                  <span className="font-medium">Account Name:</span> Enock De-Graft Sarpong
                                </p>
                                <p className="text-sm">
                                  <span className="font-medium">Account Number:</span> 1142000164926301
                                </p>
                                <p className="text-sm">
                                  <span className="font-medium">Branch:</span> Abeka Lapaz
                                </p>
                              </div>
                              <div className="bg-gray-50 p-4 rounded-md space-y-2">
                                <p className="text-sm">
                                  <span className="font-medium">Bank Name:</span> Ecobank Ghana
                                </p>
                                <p className="text-sm">
                                  <span className="font-medium">Account Name:</span> Enock De-Graft Sarpong
                                </p>
                                <p className="text-sm">
                                  <span className="font-medium">Account Number:</span> 1441002664664
                                </p>
                                <p className="text-sm">
                                  <span className="font-medium">Branch:</span> Mile 7
                                </p>
                              </div>
                              <p className="text-sm text-gray-500">
                                After making the transfer, please provide your details below so we can acknowledge your
                                donation.
                              </p>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="transfer-reference">Transfer Reference</Label>
                              <Input
                                id="transfer-reference"
                                name="transfer-reference"
                                placeholder="Enter bank transfer reference"
                              />
                            </div>
                          </TabsContent>
                        </Tabs>

                        <div className="space-y-2">
                          <Label>Personal Information</Label>
                          <div className="grid grid-cols-2 gap-4">
                            <Input name="first-name" placeholder="First Name" required />
                            <Input name="last-name" placeholder="Last Name" required />
                          </div>
                          <Input type="email" name="email" placeholder="Email Address" required />
                          <Input placeholder="Phone Number" name="phone" />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">Message (Optional)</Label>
                          <Textarea
                            id="message"
                            name="message"
                            placeholder="Share why you're supporting GILOC or any specific program you'd like to support"
                          />
                        </div>

                        <Button
                          type="submit"
                          className="w-full bg-amber-600 hover:bg-amber-700"
                          disabled={isSubmitting}
                        >
                          {isSubmitting
                            ? "Processing..."
                            : `${donationType === "one-time" ? "Donate" : "Start Monthly Donation"} GH₵ ${donationAmount}`}
                        </Button>

                        <p className="text-xs text-gray-500 text-center">
                          By donating, you agree to our{" "}
                          <Link href="/terms" className="underline">
                            terms of service
                          </Link>{" "}
                          and{" "}
                          <Link href="/privacy" className="underline">
                            privacy policy
                          </Link>
                          .
                        </p>
                      </form>
                    </CardContent>
                  </Card>
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
