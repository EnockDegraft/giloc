"use server"

import { createServerSupabaseClient } from "@/lib/supabase"

export async function submitGetInvolvedForm(formData: FormData) {
  try {
    const supabase = createServerSupabaseClient()

    const name = formData.get("name")?.toString() || ""
    const email = formData.get("email")?.toString() || ""
    const phone = formData.get("phone")?.toString() || ""
    const involvementType = formData.get("involvement")?.toString() || ""
    const message = formData.get("message")?.toString() || ""

    console.log("Submitting get involved form:", { name, email, phone, involvementType })

    const { data, error } = await supabase
      .from("get_involved_submissions")
      .insert({
        name,
        email,
        phone,
        involvement_type: involvementType,
        message,
      })
      .select()

    if (error) {
      console.error("Error submitting get involved form:", error)
      return { success: false, message: "Failed to submit form. Please try again." }
    }

    console.log("Get involved form submitted successfully:", data)
    return { success: true, message: "Thank you for your interest in getting involved!" }
  } catch (error) {
    console.error("Error in get involved form submission:", error)
    return { success: false, message: "An unexpected error occurred. Please try again." }
  }
}
