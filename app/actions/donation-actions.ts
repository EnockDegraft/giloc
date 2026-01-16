"use server"

import { createServerSupabaseClient } from "@/lib/supabase"

export async function submitDonation(formData: FormData) {
  try {
    const supabase = createServerSupabaseClient()

    const firstName = formData.get("first-name")?.toString() || ""
    const lastName = formData.get("last-name")?.toString() || ""
    const donationType = formData.get("donation-type")?.toString() || "one-time"
    const amount = formData.get("amount")?.toString() || formData.get("custom-amount")?.toString() || "0"
    const paymentMethod = formData.get("payment-method")?.toString() || ""
    const mobileNetwork = formData.get("network")?.toString() || null
    const mobileNumber = formData.get("mobile-number")?.toString() || null
    const nameOnMobile = formData.get("name-on-number")?.toString() || null
    const transferReference = formData.get("transfer-reference")?.toString() || null
    const message = formData.get("message")?.toString() || null
    const email = formData.get("email")?.toString() || null
    const phone = formData.get("phone")?.toString() || null

    console.log("Submitting donation:", {
      firstName,
      lastName,
      donationType,
      amount,
      paymentMethod,
      email,
      phone,
    })

    const { data, error } = await supabase
      .from("donations")
      .insert({
        first_name: firstName,
        last_name: lastName,
        donation_type: donationType,
        amount: Number.parseFloat(amount),
        payment_method: paymentMethod,
        mobile_network: mobileNetwork,
        mobile_number: mobileNumber || phone,
        name_on_mobile: nameOnMobile,
        transfer_reference: transferReference,
        message,
        status: "pending",
      })
      .select()

    if (error) {
      console.error("Error submitting donation:", error)
      return { success: false, message: "Failed to process donation. Please try again." }
    }

    console.log("Donation submitted successfully:", data)
    return { success: true, message: "Thank you for your donation!" }
  } catch (error) {
    console.error("Error in donation submission:", error)
    return { success: false, message: "An unexpected error occurred. Please try again." }
  }
}
