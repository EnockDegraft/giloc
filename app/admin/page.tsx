"use client"

import { useState, useEffect } from "react"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Loading } from "@/components/loading"
import {
  testDatabaseConnection,
  getSubmissionCounts,
  getContactSubmissions,
  getGetInvolvedSubmissions,
  getNewsletterSubscriptions,
  getDonations,
} from "../actions/admin-actions"

export default function AdminPage() {
  const [connectionStatus, setConnectionStatus] = useState<{
    success?: boolean
    message?: string
    count?: number
    error?: string
  }>({})
  const [submissionCounts, setSubmissionCounts] = useState<{
    contacts: number
    getInvolved: number
    newsletter: number
    donations: number
  }>({
    contacts: 0,
    getInvolved: 0,
    newsletter: 0,
    donations: 0,
  })
  const [contactSubmissions, setContactSubmissions] = useState([])
  const [getInvolvedSubmissions, setGetInvolvedSubmissions] = useState([])
  const [newsletterSubscriptions, setNewsletterSubscriptions] = useState([])
  const [donations, setDonations] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [activeTab, setActiveTab] = useState("overview")

  // State for detail view
  const [selectedSubmission, setSelectedSubmission] = useState(null)
  const [detailType, setDetailType] = useState("")
  const [isDetailOpen, setIsDetailOpen] = useState(false)

  const checkConnection = async () => {
    setIsLoading(true)
    try {
      const result = await testDatabaseConnection()
      setConnectionStatus(result)
    } catch (error) {
      setConnectionStatus({
        success: false,
        message: "Error checking connection",
        error: String(error),
      })
    } finally {
      setIsLoading(false)
    }
  }

  const fetchSubmissionCounts = async () => {
    try {
      const result = await getSubmissionCounts()
      if (result.success) {
        setSubmissionCounts(result.counts)
      }
    } catch (error) {
      console.error("Error fetching submission counts:", error)
    }
  }

  const fetchContactSubmissions = async () => {
    try {
      const result = await getContactSubmissions()
      if (result.success) {
        setContactSubmissions(result.data)
      }
    } catch (error) {
      console.error("Error fetching contact submissions:", error)
    }
  }

  const fetchGetInvolvedSubmissions = async () => {
    try {
      const result = await getGetInvolvedSubmissions()
      if (result.success) {
        setGetInvolvedSubmissions(result.data)
      }
    } catch (error) {
      console.error("Error fetching get involved submissions:", error)
    }
  }

  const fetchNewsletterSubscriptions = async () => {
    try {
      const result = await getNewsletterSubscriptions()
      if (result.success) {
        setNewsletterSubscriptions(result.data)
      }
    } catch (error) {
      console.error("Error fetching newsletter subscriptions:", error)
    }
  }

  const fetchDonations = async () => {
    try {
      const result = await getDonations()
      if (result.success) {
        setDonations(result.data)
      }
    } catch (error) {
      console.error("Error fetching donations:", error)
    }
  }

  const fetchData = async () => {
    setIsLoading(true)
    try {
      await Promise.all([
        checkConnection(),
        fetchSubmissionCounts(),
        fetchContactSubmissions(),
        fetchGetInvolvedSubmissions(),
        fetchNewsletterSubscriptions(),
        fetchDonations(),
      ])
    } catch (error) {
      console.error("Error fetching data:", error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    // Fetch data when the page loads
    fetchData()
  }, [])

  // Fetch data when tab changes
  useEffect(() => {
    if (activeTab === "contacts") {
      fetchContactSubmissions()
    } else if (activeTab === "get-involved") {
      fetchGetInvolvedSubmissions()
    } else if (activeTab === "newsletter") {
      fetchNewsletterSubscriptions()
    } else if (activeTab === "donations") {
      fetchDonations()
    }
  }, [activeTab])

  const formatDate = (dateString) => {
    try {
      return format(new Date(dateString), "MMM d, yyyy h:mm a")
    } catch (error) {
      return dateString
    }
  }

  const openDetailView = (submission, type) => {
    setSelectedSubmission(submission)
    setDetailType(type)
    setIsDetailOpen(true)
  }

  const renderDetailContent = () => {
    if (!selectedSubmission) return null

    switch (detailType) {
      case "contact":
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">First Name</h3>
                <p>{selectedSubmission.first_name}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Last Name</h3>
                <p>{selectedSubmission.last_name}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Email</h3>
                <p className="break-all">{selectedSubmission.email}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Date Submitted</h3>
                <p>{formatDate(selectedSubmission.created_at)}</p>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-sm font-medium text-gray-500">Subject</h3>
              <p>{selectedSubmission.subject}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Message</h3>
              <div className="mt-2 p-4 bg-gray-50 rounded-md whitespace-pre-wrap">{selectedSubmission.message}</div>
            </div>
          </>
        )
      case "get-involved":
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Name</h3>
                <p>{selectedSubmission.name}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Email</h3>
                <p className="break-all">{selectedSubmission.email}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Phone</h3>
                <p>{selectedSubmission.phone || "Not provided"}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Date Submitted</h3>
                <p>{formatDate(selectedSubmission.created_at)}</p>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-sm font-medium text-gray-500">Involvement Type</h3>
              <Badge className="mt-1">{selectedSubmission.involvement_type}</Badge>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Message</h3>
              <div className="mt-2 p-4 bg-gray-50 rounded-md whitespace-pre-wrap">{selectedSubmission.message}</div>
            </div>
          </>
        )
      case "newsletter":
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Email</h3>
                <p className="break-all">{selectedSubmission.email}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Date Subscribed</h3>
                <p>{formatDate(selectedSubmission.created_at)}</p>
              </div>
            </div>
          </>
        )
      case "donation":
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">First Name</h3>
                <p>{selectedSubmission.first_name}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Last Name</h3>
                <p>{selectedSubmission.last_name}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Email</h3>
                <p className="break-all">{selectedSubmission.email || "Not provided"}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Date</h3>
                <p>{formatDate(selectedSubmission.created_at)}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Amount</h3>
                <p className="font-bold">GH₵ {selectedSubmission.amount}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Donation Type</h3>
                <p>{selectedSubmission.donation_type}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Payment Method</h3>
                <p>{selectedSubmission.payment_method}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Status</h3>
                <Badge
                  variant={
                    selectedSubmission.status === "completed"
                      ? "success"
                      : selectedSubmission.status === "pending"
                        ? "outline"
                        : "destructive"
                  }
                >
                  {selectedSubmission.status}
                </Badge>
              </div>
            </div>
            {selectedSubmission.payment_method === "mobile-money" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Mobile Network</h3>
                  <p>{selectedSubmission.mobile_network || "Not provided"}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Mobile Number</h3>
                  <p>{selectedSubmission.mobile_number || "Not provided"}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Name on Mobile</h3>
                  <p>{selectedSubmission.name_on_mobile || "Not provided"}</p>
                </div>
              </div>
            )}
            {selectedSubmission.payment_method === "bank-transfer" && (
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-500">Transfer Reference</h3>
                <p>{selectedSubmission.transfer_reference || "Not provided"}</p>
              </div>
            )}
            {selectedSubmission.message && (
              <div>
                <h3 className="text-sm font-medium text-gray-500">Message</h3>
                <div className="mt-2 p-4 bg-gray-50 rounded-md whitespace-pre-wrap">{selectedSubmission.message}</div>
              </div>
            )}
          </>
        )
      default:
        return <p>No details available</p>
    }
  }

  // Mobile-friendly table renderer
  const renderMobileCard = (submission, type) => {
    switch (type) {
      case "contact":
        return (
          <Card key={submission.id} className="mb-4">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">
                {submission.first_name} {submission.last_name}
              </CardTitle>
              <CardDescription>{formatDate(submission.created_at)}</CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="space-y-2">
                <div>
                  <span className="text-sm font-medium text-gray-500">Email:</span>
                  <p className="text-sm break-all">{submission.email}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">Subject:</span>
                  <p className="text-sm">{submission.subject}</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-2"
                  onClick={() => openDetailView(submission, "contact")}
                >
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        )
      case "get-involved":
        return (
          <Card key={submission.id} className="mb-4">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">{submission.name}</CardTitle>
              <CardDescription>{formatDate(submission.created_at)}</CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="space-y-2">
                <div>
                  <span className="text-sm font-medium text-gray-500">Email:</span>
                  <p className="text-sm break-all">{submission.email}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">Phone:</span>
                  <p className="text-sm">{submission.phone || "N/A"}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">Type:</span>
                  <Badge variant="outline" className="ml-2">
                    {submission.involvement_type}
                  </Badge>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-2"
                  onClick={() => openDetailView(submission, "get-involved")}
                >
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        )
      case "newsletter":
        return (
          <Card key={submission.id} className="mb-4">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Newsletter Subscription</CardTitle>
              <CardDescription>{formatDate(submission.created_at)}</CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="space-y-2">
                <div>
                  <span className="text-sm font-medium text-gray-500">Email:</span>
                  <p className="text-sm break-all">{submission.email}</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-2"
                  onClick={() => openDetailView(submission, "newsletter")}
                >
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        )
      case "donation":
        return (
          <Card key={submission.id} className="mb-4">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">
                {submission.first_name} {submission.last_name}
              </CardTitle>
              <CardDescription>{formatDate(submission.created_at)}</CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="space-y-2">
                <div>
                  <span className="text-sm font-medium text-gray-500">Amount:</span>
                  <p className="text-sm font-bold">GH₵ {submission.amount}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">Payment Method:</span>
                  <p className="text-sm">{submission.payment_method}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">Status:</span>
                  <Badge
                    variant={
                      submission.status === "completed"
                        ? "success"
                        : submission.status === "pending"
                          ? "outline"
                          : "destructive"
                    }
                    className="ml-2"
                  >
                    {submission.status}
                  </Badge>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-2"
                  onClick={() => openDetailView(submission, "donation")}
                >
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        )
      default:
        return null
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6 md:mb-8">
            <h1 className="text-2xl md:text-3xl font-bold">Admin Dashboard</h1>
            <Button onClick={fetchData} disabled={isLoading} className="w-full md:w-auto">
              {isLoading ? "Refreshing..." : "Refresh Data"}
            </Button>
          </div>

          {isLoading && (
            <div className="flex justify-center my-8">
              <Loading size="large" />
            </div>
          )}

          <Card className="mb-6 md:mb-8">
            <CardHeader>
              <CardTitle>Database Connection Status</CardTitle>
              <CardDescription>Check if the application is properly connected to the Supabase database</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                {connectionStatus.success ? (
                  <div className="p-4 bg-green-50 text-green-700 rounded-md">
                    <p className="font-medium">✅ {connectionStatus.message}</p>
                    <p>Found {connectionStatus.count} contact submissions in the database.</p>
                  </div>
                ) : connectionStatus.message ? (
                  <div className="p-4 bg-red-50 text-red-700 rounded-md">
                    <p className="font-medium">❌ {connectionStatus.message}</p>
                    {connectionStatus.error && <p className="text-sm mt-2">{connectionStatus.error}</p>}
                  </div>
                ) : (
                  <div className="p-4 bg-gray-50 text-gray-500 rounded-md">
                    <p>Checking database connection...</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6 md:mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Contact Submissions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{submissionCounts.contacts}</div>
                <p className="text-xs text-muted-foreground">Total contact form submissions</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Get Involved Submissions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{submissionCounts.getInvolved}</div>
                <p className="text-xs text-muted-foreground">Total get involved form submissions</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Newsletter Subscriptions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{submissionCounts.newsletter}</div>
                <p className="text-xs text-muted-foreground">Total newsletter subscriptions</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Donations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{submissionCounts.donations}</div>
                <p className="text-xs text-muted-foreground">Total donations</p>
              </CardContent>
            </Card>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="mb-6 w-full overflow-x-auto flex flex-nowrap md:flex-wrap">
              <TabsTrigger value="overview" className="flex-1">
                Overview
              </TabsTrigger>
              <TabsTrigger value="contacts" className="flex-1">
                Contact
              </TabsTrigger>
              <TabsTrigger value="get-involved" className="flex-1">
                Get Involved
              </TabsTrigger>
              <TabsTrigger value="newsletter" className="flex-1">
                Newsletter
              </TabsTrigger>
              <TabsTrigger value="donations" className="flex-1">
                Donations
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <Card>
                <CardHeader>
                  <CardTitle>Submission Overview</CardTitle>
                  <CardDescription>Summary of all submissions across the website</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Recent Contact Submissions</h3>
                      {contactSubmissions.length > 0 ? (
                        <>
                          {/* Desktop view */}
                          <div className="hidden md:block overflow-x-auto">
                            <Table>
                              <TableHeader>
                                <TableRow>
                                  <TableHead>Name</TableHead>
                                  <TableHead>Email</TableHead>
                                  <TableHead>Subject</TableHead>
                                  <TableHead>Date</TableHead>
                                  <TableHead>Actions</TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {contactSubmissions.slice(0, 3).map((submission) => (
                                  <TableRow key={submission.id} className="cursor-pointer hover:bg-gray-50">
                                    <TableCell>
                                      {submission.first_name} {submission.last_name}
                                    </TableCell>
                                    <TableCell className="max-w-[150px] truncate">{submission.email}</TableCell>
                                    <TableCell>{submission.subject}</TableCell>
                                    <TableCell>{formatDate(submission.created_at)}</TableCell>
                                    <TableCell>
                                      <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => openDetailView(submission, "contact")}
                                      >
                                        View Details
                                      </Button>
                                    </TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </div>

                          {/* Mobile view */}
                          <div className="md:hidden">
                            {contactSubmissions
                              .slice(0, 3)
                              .map((submission) => renderMobileCard(submission, "contact"))}
                          </div>
                        </>
                      ) : (
                        <p className="text-gray-500">No contact submissions yet.</p>
                      )}
                      {contactSubmissions.length > 3 && (
                        <Button variant="link" className="mt-2 p-0" onClick={() => setActiveTab("contacts")}>
                          View all {contactSubmissions.length} submissions
                        </Button>
                      )}
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-2">Recent Get Involved Submissions</h3>
                      {getInvolvedSubmissions.length > 0 ? (
                        <>
                          {/* Desktop view */}
                          <div className="hidden md:block overflow-x-auto">
                            <Table>
                              <TableHeader>
                                <TableRow>
                                  <TableHead>Name</TableHead>
                                  <TableHead>Email</TableHead>
                                  <TableHead>Phone</TableHead>
                                  <TableHead>Involvement Type</TableHead>
                                  <TableHead>Date</TableHead>
                                  <TableHead>Actions</TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {getInvolvedSubmissions.slice(0, 3).map((submission) => (
                                  <TableRow key={submission.id} className="cursor-pointer hover:bg-gray-50">
                                    <TableCell>{submission.name}</TableCell>
                                    <TableCell className="max-w-[150px] truncate">{submission.email}</TableCell>
                                    <TableCell>{submission.phone || "N/A"}</TableCell>
                                    <TableCell>{submission.involvement_type}</TableCell>
                                    <TableCell>{formatDate(submission.created_at)}</TableCell>
                                    <TableCell>
                                      <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => openDetailView(submission, "get-involved")}
                                      >
                                        View Details
                                      </Button>
                                    </TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </div>

                          {/* Mobile view */}
                          <div className="md:hidden">
                            {getInvolvedSubmissions
                              .slice(0, 3)
                              .map((submission) => renderMobileCard(submission, "get-involved"))}
                          </div>
                        </>
                      ) : (
                        <p className="text-gray-500">No get involved submissions yet.</p>
                      )}
                      {getInvolvedSubmissions.length > 3 && (
                        <Button variant="link" className="mt-2 p-0" onClick={() => setActiveTab("get-involved")}>
                          View all {getInvolvedSubmissions.length} submissions
                        </Button>
                      )}
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-2">Recent Newsletter Subscriptions</h3>
                      {newsletterSubscriptions.length > 0 ? (
                        <>
                          {/* Desktop view */}
                          <div className="hidden md:block overflow-x-auto">
                            <Table>
                              <TableHeader>
                                <TableRow>
                                  <TableHead>Email</TableHead>
                                  <TableHead>Date</TableHead>
                                  <TableHead>Actions</TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {newsletterSubscriptions.slice(0, 3).map((subscription) => (
                                  <TableRow key={subscription.id} className="cursor-pointer hover:bg-gray-50">
                                    <TableCell className="max-w-[200px] truncate">{subscription.email}</TableCell>
                                    <TableCell>{formatDate(subscription.created_at)}</TableCell>
                                    <TableCell>
                                      <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => openDetailView(subscription, "newsletter")}
                                      >
                                        View Details
                                      </Button>
                                    </TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </div>

                          {/* Mobile view */}
                          <div className="md:hidden">
                            {newsletterSubscriptions
                              .slice(0, 3)
                              .map((subscription) => renderMobileCard(subscription, "newsletter"))}
                          </div>
                        </>
                      ) : (
                        <p className="text-gray-500">No newsletter subscriptions yet.</p>
                      )}
                      {newsletterSubscriptions.length > 3 && (
                        <Button variant="link" className="mt-2 p-0" onClick={() => setActiveTab("newsletter")}>
                          View all {newsletterSubscriptions.length} subscriptions
                        </Button>
                      )}
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-2">Recent Donations</h3>
                      {donations.length > 0 ? (
                        <>
                          {/* Desktop view */}
                          <div className="hidden md:block overflow-x-auto">
                            <Table>
                              <TableHeader>
                                <TableRow>
                                  <TableHead>Name</TableHead>
                                  <TableHead>Amount</TableHead>
                                  <TableHead>Payment Method</TableHead>
                                  <TableHead>Status</TableHead>
                                  <TableHead>Date</TableHead>
                                  <TableHead>Actions</TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {donations.slice(0, 3).map((donation) => (
                                  <TableRow key={donation.id} className="cursor-pointer hover:bg-gray-50">
                                    <TableCell>
                                      {donation.first_name} {donation.last_name}
                                    </TableCell>
                                    <TableCell>GH₵ {donation.amount}</TableCell>
                                    <TableCell>{donation.payment_method}</TableCell>
                                    <TableCell>
                                      <Badge
                                        variant={
                                          donation.status === "completed"
                                            ? "success"
                                            : donation.status === "pending"
                                              ? "outline"
                                              : "destructive"
                                        }
                                      >
                                        {donation.status}
                                      </Badge>
                                    </TableCell>
                                    <TableCell>{formatDate(donation.created_at)}</TableCell>
                                    <TableCell>
                                      <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => openDetailView(donation, "donation")}
                                      >
                                        View Details
                                      </Button>
                                    </TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </div>

                          {/* Mobile view */}
                          <div className="md:hidden">
                            {donations.slice(0, 3).map((donation) => renderMobileCard(donation, "donation"))}
                          </div>
                        </>
                      ) : (
                        <p className="text-gray-500">No donations yet.</p>
                      )}
                      {donations.length > 3 && (
                        <Button variant="link" className="mt-2 p-0" onClick={() => setActiveTab("donations")}>
                          View all {donations.length} donations
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="contacts">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Form Submissions</CardTitle>
                  <CardDescription>All contact form submissions from the website</CardDescription>
                </CardHeader>
                <CardContent>
                  {contactSubmissions.length > 0 ? (
                    <>
                      {/* Desktop view */}
                      <div className="hidden md:block overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Name</TableHead>
                              <TableHead>Email</TableHead>
                              <TableHead>Subject</TableHead>
                              <TableHead>Message</TableHead>
                              <TableHead>Date</TableHead>
                              <TableHead>Actions</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {contactSubmissions.map((submission) => (
                              <TableRow key={submission.id} className="cursor-pointer hover:bg-gray-50">
                                <TableCell>
                                  {submission.first_name} {submission.last_name}
                                </TableCell>
                                <TableCell className="max-w-[150px] truncate">{submission.email}</TableCell>
                                <TableCell>{submission.subject}</TableCell>
                                <TableCell className="max-w-xs truncate">{submission.message}</TableCell>
                                <TableCell>{formatDate(submission.created_at)}</TableCell>
                                <TableCell>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => openDetailView(submission, "contact")}
                                  >
                                    View Details
                                  </Button>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>

                      {/* Mobile view */}
                      <div className="md:hidden">
                        {contactSubmissions.map((submission) => renderMobileCard(submission, "contact"))}
                      </div>
                    </>
                  ) : (
                    <p className="text-gray-500">No contact submissions yet.</p>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="get-involved">
              <Card>
                <CardHeader>
                  <CardTitle>Get Involved Submissions</CardTitle>
                  <CardDescription>All get involved form submissions from the website</CardDescription>
                </CardHeader>
                <CardContent>
                  {getInvolvedSubmissions.length > 0 ? (
                    <>
                      {/* Desktop view */}
                      <div className="hidden md:block overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Name</TableHead>
                              <TableHead>Email</TableHead>
                              <TableHead>Phone</TableHead>
                              <TableHead>Involvement Type</TableHead>
                              <TableHead>Message</TableHead>
                              <TableHead>Date</TableHead>
                              <TableHead>Actions</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {getInvolvedSubmissions.map((submission) => (
                              <TableRow key={submission.id} className="cursor-pointer hover:bg-gray-50">
                                <TableCell>{submission.name}</TableCell>
                                <TableCell className="max-w-[150px] truncate">{submission.email}</TableCell>
                                <TableCell>{submission.phone || "N/A"}</TableCell>
                                <TableCell>
                                  <Badge variant="outline">{submission.involvement_type}</Badge>
                                </TableCell>
                                <TableCell className="max-w-xs truncate">{submission.message}</TableCell>
                                <TableCell>{formatDate(submission.created_at)}</TableCell>
                                <TableCell>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => openDetailView(submission, "get-involved")}
                                  >
                                    View Details
                                  </Button>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>

                      {/* Mobile view */}
                      <div className="md:hidden">
                        {getInvolvedSubmissions.map((submission) => renderMobileCard(submission, "get-involved"))}
                      </div>
                    </>
                  ) : (
                    <p className="text-gray-500">No get involved submissions yet.</p>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="newsletter">
              <Card>
                <CardHeader>
                  <CardTitle>Newsletter Subscriptions</CardTitle>
                  <CardDescription>All newsletter subscriptions from the website</CardDescription>
                </CardHeader>
                <CardContent>
                  {newsletterSubscriptions.length > 0 ? (
                    <>
                      {/* Desktop view */}
                      <div className="hidden md:block overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Email</TableHead>
                              <TableHead>Date</TableHead>
                              <TableHead>Actions</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {newsletterSubscriptions.map((subscription) => (
                              <TableRow key={subscription.id} className="cursor-pointer hover:bg-gray-50">
                                <TableCell className="max-w-[200px] truncate">{subscription.email}</TableCell>
                                <TableCell>{formatDate(subscription.created_at)}</TableCell>
                                <TableCell>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => openDetailView(subscription, "newsletter")}
                                  >
                                    View Details
                                  </Button>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>

                      {/* Mobile view */}
                      <div className="md:hidden">
                        {newsletterSubscriptions.map((subscription) => renderMobileCard(subscription, "newsletter"))}
                      </div>
                    </>
                  ) : (
                    <p className="text-gray-500">No newsletter subscriptions yet.</p>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="donations">
              <Card>
                <CardHeader>
                  <CardTitle>Donations</CardTitle>
                  <CardDescription>All donations from the website</CardDescription>
                </CardHeader>
                <CardContent>
                  {donations.length > 0 ? (
                    <>
                      {/* Desktop view */}
                      <div className="hidden md:block overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Name</TableHead>
                              <TableHead>Email</TableHead>
                              <TableHead>Amount</TableHead>
                              <TableHead>Type</TableHead>
                              <TableHead>Payment Method</TableHead>
                              <TableHead>Status</TableHead>
                              <TableHead>Date</TableHead>
                              <TableHead>Actions</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {donations.map((donation) => (
                              <TableRow key={donation.id} className="cursor-pointer hover:bg-gray-50">
                                <TableCell>
                                  {donation.first_name} {donation.last_name}
                                </TableCell>
                                <TableCell className="max-w-[150px] truncate">{donation.email}</TableCell>
                                <TableCell>GH₵ {donation.amount}</TableCell>
                                <TableCell>{donation.donation_type}</TableCell>
                                <TableCell>{donation.payment_method}</TableCell>
                                <TableCell>
                                  <Badge
                                    variant={
                                      donation.status === "completed"
                                        ? "success"
                                        : donation.status === "pending"
                                          ? "outline"
                                          : "destructive"
                                    }
                                  >
                                    {donation.status}
                                  </Badge>
                                </TableCell>
                                <TableCell>{formatDate(donation.created_at)}</TableCell>
                                <TableCell>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => openDetailView(donation, "donation")}
                                  >
                                    View Details
                                  </Button>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>

                      {/* Mobile view */}
                      <div className="md:hidden">
                        {donations.map((donation) => renderMobileCard(donation, "donation"))}
                      </div>
                    </>
                  ) : (
                    <p className="text-gray-500">No donations yet.</p>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />

      {/* Detail View Dialog */}
      <Dialog open={isDetailOpen} onOpenChange={setIsDetailOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {detailType === "contact" && "Contact Submission Details"}
              {detailType === "get-involved" && "Get Involved Submission Details"}
              {detailType === "newsletter" && "Newsletter Subscription Details"}
              {detailType === "donation" && "Donation Details"}
            </DialogTitle>
            <DialogDescription>
              {detailType === "contact" && "Detailed information about this contact form submission."}
              {detailType === "get-involved" && "Detailed information about this get involved form submission."}
              {detailType === "newsletter" && "Detailed information about this newsletter subscription."}
              {detailType === "donation" && "Detailed information about this donation."}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">{renderDetailContent()}</div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
