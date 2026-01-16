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
