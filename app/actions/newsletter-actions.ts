"use server"

import { createServerSupabaseClient } from "@/lib/supabase"

export async function subscribeToNewsletter(formData: FormData) {
  try {
    const supabase = createServerSupabaseClient()

    const email = formData.get("email")?.toString() || ""

    console.log("Subscribing to newsletter:", { email })

    // Check if email already exists
    const { data: existingSubscription } = await supabase
      .from("newsletter_subscriptions")
      .select("*")
      .eq("email", email)
      .single()

    if (existingSubscription) {
      console.log("Email already subscribed:", email)
      return { success: true, message: "You are already subscribed to our newsletter!" }
    }

    const { data, error } = await supabase.from("newsletter_subscriptions").insert({ email }).select()

    if (error) {
      console.error("Error subscribing to newsletter:", error)
      return { success: false, message: "Failed to subscribe. Please try again." }
    }

    console.log("Newsletter subscription successful:", data)
    return { success: true, message: "Thank you for subscribing to our newsletter!" }
  } catch (error) {
    console.error("Error in newsletter subscription:", error)
    return { success: false, message: "An unexpected error occurred. Please try again." }
  }
}
