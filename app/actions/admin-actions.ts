"use server"

import { createServerSupabaseClient } from "@/lib/supabase"

export async function testDatabaseConnection() {
  try {
    const supabase = createServerSupabaseClient()

    // Try to get a count of records from a table
    const { count, error } = await supabase.from("contact_submissions").select("*", { count: "exact", head: true })

    if (error) {
      console.error("Database connection test failed:", error)
      return {
        success: false,
        message: "Failed to connect to database",
        error: error.message,
      }
    }

    return {
      success: true,
      message: "Database connection successful",
      count,
    }
  } catch (error) {
    console.error("Error testing database connection:", error)
    return {
      success: false,
      message: "An unexpected error occurred while testing database connection",
      error: String(error),
    }
  }
}

export async function getSubmissionCounts() {
  try {
    const supabase = createServerSupabaseClient()

    // Get counts for each table
    const [contactResult, getInvolvedResult, newsletterResult, donationResult] = await Promise.all([
      supabase.from("contact_submissions").select("*", { count: "exact", head: true }),
      supabase.from("get_involved_submissions").select("*", { count: "exact", head: true }),
      supabase.from("newsletter_subscriptions").select("*", { count: "exact", head: true }),
      supabase.from("donations").select("*", { count: "exact", head: true }),
    ])

    return {
      success: true,
      counts: {
        contacts: contactResult.count || 0,
        getInvolved: getInvolvedResult.count || 0,
        newsletter: newsletterResult.count || 0,
        donations: donationResult.count || 0,
      },
    }
  } catch (error) {
    console.error("Error getting submission counts:", error)
    return {
      success: false,
      message: "Failed to get submission counts",
      error: String(error),
    }
  }
}

export async function getContactSubmissions() {
  try {
    const supabase = createServerSupabaseClient()
    const { data, error } = await supabase
      .from("contact_submissions")
      .select("*")
      .order("created_at", { ascending: false })

    if (error) {
      throw error
    }

    return {
      success: true,
      data,
    }
  } catch (error) {
    console.error("Error getting contact submissions:", error)
    return {
      success: false,
      message: "Failed to get contact submissions",
      error: String(error),
    }
  }
}

export async function getGetInvolvedSubmissions() {
  try {
    const supabase = createServerSupabaseClient()
    const { data, error } = await supabase
      .from("get_involved_submissions")
      .select("*")
      .order("created_at", { ascending: false })

    if (error) {
      throw error
    }

    return {
      success: true,
      data,
    }
  } catch (error) {
    console.error("Error getting get involved submissions:", error)
    return {
      success: false,
      message: "Failed to get get involved submissions",
      error: String(error),
    }
  }
}

export async function getNewsletterSubscriptions() {
  try {
    const supabase = createServerSupabaseClient()
    const { data, error } = await supabase
      .from("newsletter_subscriptions")
      .select("*")
      .order("created_at", { ascending: false })

    if (error) {
      throw error
    }

    return {
      success: true,
      data,
    }
  } catch (error) {
    console.error("Error getting newsletter subscriptions:", error)
    return {
      success: false,
      message: "Failed to get newsletter subscriptions",
      error: String(error),
    }
  }
}

export async function getDonations() {
  try {
    const supabase = createServerSupabaseClient()
    const { data, error } = await supabase.from("donations").select("*").order("created_at", { ascending: false })

    if (error) {
      throw error
    }

    return {
      success: true,
      data,
    }
  } catch (error) {
    console.error("Error getting donations:", error)
    return {
      success: false,
      message: "Failed to get donations",
      error: String(error),
    }
  }
}
