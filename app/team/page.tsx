"use client"

import { useState } from "react"
import Link from "next/link"
import { Linkedin, Mail, Twitter, X } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

// Team member data structure
type SocialLink = {
  type: "twitter" | "linkedin" | "email"
  url: string
}

type TeamMember = {
  name: string
  role: string
  imageUrl: string
  bio?: string
  socialLinks?: SocialLink[]
}

// Team member data
const leadershipTeam: TeamMember[] = [
  {
    name: "Edward Destiny Kojo Mensah",
    role: "Founder & Executive Director",
    imageUrl: "https://i.postimg.cc/0j3Z27YZ/Edward.jpg",
    bio: "Edward founded GILOC with a vision to transform Africa through integrity and leadership. With over 10 years of experience in youth development, he leads the organization's strategic direction.",
    socialLinks: [
      { type: "twitter", url: "https://twitter.com" },
      { type: "linkedin", url: "https://linkedin.com" },
      { type: "email", url: "mailto:kojomensahdestiny@gmail.com" },
    ],
  },
  {
    name: "Eugenia Kekeli Kutsanedzi",
    role: "Co-founder and Executive for internal affairs",
    imageUrl: "https://i.postimg.cc/7hNRZqRR/Co-founder.jpg",
    bio: "Eugene Kekeli Kutsanedzi, Co-founder and Executive for Internal Affairs at GILOC, brings a strong commitment to organizational excellence and youth empowerment.",
    socialLinks: [
      { type: "twitter", url: "https://twitter.com" },
      { type: "linkedin", url: "https://linkedin.com" },
      { type: "email", url: "mailto:kojomensahdestiny@gmail.com" },
    ],
  },
  {
    name: "Sussan Naa Aku Shika Brown",
    role: "General Secretary",
    imageUrl: "https://i.postimg.cc/3xDM8c1X/Sece.jpg",
    bio: "Sussan oversees GILOC's day-to-day operations and program implementation. Her background in non-profit management ensures our programs run efficiently and effectively.",
    socialLinks: [
      { type: "twitter", url: "#" },
      { type: "linkedin", url: "#" },
      { type: "email", url: "mailto:grace@giloc.com" },
    ],
  },
  {
    name: "Deborah Febiri Damoah",
    role: "Communications Director",
    imageUrl: "https://i.postimg.cc/8C5rbx9v/Deborah-Fabri-Damoah.jpg",
    bio: "Deborah leads the development and implementation of GILOC's projects. Her expertise in youth development and education has shaped our impactful initiatives.",
    socialLinks: [
      { type: "twitter", url: "#" },
      { type: "linkedin", url: "#" },
      { type: "email", url: "mailto:samuel@giloc.com" },
    ],
  },
]

const programDirectors: TeamMember[] = [
  {
    name: "Nartey Selorm Yao Sylvester",
    role: "Project Organizer",
    imageUrl: "https://i.postimg.cc/C51ZzDvB/Selorm.jpg",
    socialLinks: [
      { type: "linkedin", url: "#" },
      { type: "email", url: "mailto:ama@giloc.com" },
    ],
  },
  {
    name: "Odai-Laryea Abigail",
    role: "Community Outreach Director",
    imageUrl: "https://i.postimg.cc/QCktDqvs/Odai-Laryea-Abigail.jpg",
    socialLinks: [
      { type: "linkedin", url: "#" },
      { type: "email", url: "mailto:ibrahim@giloc.com" },
    ],
  },
  {
    name: "Affukaah Johnson",
    role: "Administrative Assistant",
    imageUrl: "https://i.postimg.cc/hj0WP34C/Affukaah-Johnson.jpg",
    socialLinks: [
      { type: "linkedin", url: "#" },
      { type: "email", url: "mailto:chioma@giloc.com" },
    ],
  },
  {
    name: "Enock De-Graft Sarpong",
    role: "Lead Technology Program Director",
    imageUrl: "https://i.postimg.cc/XN8HqQXt/IMG-4552.jpg",
    socialLinks: [
      { type: "linkedin", url: "#" },
      { type: "email", url: "mailto:kwesi@giloc.com" },
    ],
  },
]

const staffMembers: TeamMember[] = [
  {
    name: "Stephen Apreku King",
    role: "Digital Marketer",
    imageUrl: "",
  },
  {
    name: "Wiafe Nana Felix",
    role: "Public Relation Officer",
    imageUrl: "https://i.postimg.cc/ydnJSNGC/Whats-App-Image-2025-05-09-at-10-01-14-60fa1660.jpg",
  },
  {
    name: "Bukari Esther",
    role: "Deputy Project Organizer",
    imageUrl: "https://i.postimg.cc/fTf9SY2F/Bukari-Esther.jpg",
  },
  {
    name: "Edna Taylor",
    role: "Community Outreach 1st Deputy Director",
    imageUrl: "https://i.postimg.cc/jjmwYc2W/Edna-Taylor.jpg",
  },
  {
    name: "Kukua Enyimnyam Hurson",
    role: "Deputy Communication Director",
    imageUrl: "https://i.postimg.cc/BZDDsrxJ/Kukua-Enyimnyam-Hurson.jpg",
  },
  {
    name: "Teagar Dorothy Teni",
    role: "Community Outreach 2nd Deputy Director",
    imageUrl: "https://i.postimg.cc/7LGh9z9q/Teagar-Dorothy-Teni.jpg",
  },
]

// Team Member Card Component
function TeamMemberCard({
  member,
  onImageClick,
  size = "medium",
}: {
  member: TeamMember
  onImageClick: (imageUrl: string) => void
  size?: "small" | "medium" | "large"
}) {
  const sizeClasses = {
    small: "p-4",
    medium: "p-6",
    large: "p-6",
  }

  return (
    <Card className="overflow-hidden">
      <div
        className="aspect-square w-full overflow-hidden cursor-pointer relative group"
        onClick={() => onImageClick(member.imageUrl)}
      >
        <img
          src={member.imageUrl || "/placeholder.svg"}
          alt={member.name}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
        </div>
      </div>
      <CardContent className={sizeClasses[size]}>
        <h3 className={size === "small" ? "text-base font-bold mb-1" : "text-xl font-bold mb-1"}>{member.name}</h3>
        <p className={`text-amber-600 ${size === "small" ? "text-sm mb-2" : "font-medium mb-4"}`}>{member.role}</p>
        {member.bio && <p className="text-gray-600 mb-4">{member.bio}</p>}
        {member.socialLinks && member.socialLinks.length > 0 && (
          <div className="flex gap-3">
            {member.socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                className="text-gray-500 hover:text-amber-600 transition-colors duration-200"
                aria-label={link.type}
              >
                {link.type === "twitter" && <Twitter className="h-5 w-5" />}
                {link.type === "linkedin" && <Linkedin className="h-5 w-5" />}
                {link.type === "email" && <Mail className="h-5 w-5" />}
              </Link>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default function TeamPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const openImagePreview = (imageUrl: string) => {
    setSelectedImage(imageUrl)
  }

  const closeImagePreview = () => {
    setSelectedImage(null)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-amber-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Team</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Meet the dedicated individuals working to transform Africa through integrity and leadership.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-12">
              {/* Leadership */}
              <div>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-8 text-center">Meet Our Leaders</h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {leadershipTeam.map((member, index) => (
                    <TeamMemberCard key={index} member={member} onImageClick={openImagePreview} size="large" />
                  ))}
                </div>
              </div>

              {/* Program Directors */}
              <div>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-8 text-center">Program Directors</h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                  {programDirectors.map((member, index) => (
                    <TeamMemberCard key={index} member={member} onImageClick={openImagePreview} size="medium" />
                  ))}
                </div>
              </div>

              {/* Staff */}
              <div>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-8 text-center">Staff</h2>
                <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-5">
                  {staffMembers.map((member, index) => (
                    <TeamMemberCard key={index} member={member} onImageClick={openImagePreview} size="small" />
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
              <p className="text-gray-500 max-w-2xl mx-auto mb-6">
                We're always looking for passionate individuals who share our vision for Africa. Send your resume and
                cover letter to apply for current or future opportunities.
              </p>
              <a
                href="mailto:enocksarpong64@gmail.com?cc=kojomensahdestiny@gmail.com&subject=Job Application - GILOC&body=Hello,%0D%0A%0D%0AI am interested in joining the GILOC team. Please find attached my resume and cover letter.%0D%0A%0D%0AThank you for your consideration.%0D%0A%0D%0ABest regards,"
                className="inline-flex h-10 items-center justify-center rounded-md bg-amber-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-amber-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-700"
              >
                Apply Now
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Image Preview Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={closeImagePreview}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none">
          <div className="relative">
            <button
              onClick={closeImagePreview}
              className="absolute top-2 right-2 z-10 rounded-full bg-black bg-opacity-50 p-2 text-white hover:bg-opacity-70 transition-all"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
            {selectedImage && (
              <div className="flex items-center justify-center max-h-[80vh]">
                <img
                  src={selectedImage || "/placeholder.svg"}
                  alt="Full size preview"
                  className="max-w-full max-h-[80vh] object-contain"
                />
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
