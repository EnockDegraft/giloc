"use server"

import { createServerSupabaseClient } from "@/lib/supabase"

export async function submitContactForm(formData: FormData) {
  try {
    const supabase = createServerSupabaseClient()

    const firstName = formData.get("first-name")?.toString() || ""
    const lastName = formData.get("last-name")?.toString() || ""
    const email = formData.get("email")?.toString() || ""
    const subject = formData.get("subject")?.toString() || ""
    const message = formData.get("message")?.toString() || ""

    console.log("Submitting contact form:", { firstName, lastName, email, subject })

    const { data, error } = await supabase
      .from("contact_submissions")
      .insert({
        first_name: firstName,
        last_name: lastName,
        email,
        subject,
        message,
      })
      .select()

    if (error) {
      console.error("Error submitting contact form:", error)
      return { success: false, message: "Failed to submit form. Please try again." }
    }

    console.log("Contact form submitted successfully:", data)
    return { success: true, message: "Thank you for contacting us!" }
  } catch (error) {
    console.error("Error in contact form submission:", error)
    return { success: false, message: "An unexpected error occurred. Please try again." }
  }
}
