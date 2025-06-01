import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <Badge className="mb-4 bg-teal-100 text-teal-800">Legal</Badge>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Terms of Service</h1>
          <p className="text-slate-600">Last updated: January 2025</p>
        </div>

        <Card className="shadow-xl">
          <CardContent className="p-8 prose prose-slate max-w-none">
            <h2>Acceptance of Terms</h2>
            <p>
              By accessing and using Ganpati Consultancy's services, you accept and agree to be bound by the terms and
              provision of this agreement.
            </p>

            <h2>Services Description</h2>
            <p>
              Ganpati Consultancy provides chartered accountancy services, tax consultation, audit services, and related
              financial advisory services.
            </p>

            <h2>Client Responsibilities</h2>
            <p>
              Clients are responsible for providing accurate and complete information necessary for the provision of our
              services and for complying with all applicable laws and regulations.
            </p>

            <h2>Professional Standards</h2>
            <p>
              All services are provided in accordance with the standards set by the Institute of Chartered Accountants
              of India (ICAI) and applicable professional guidelines.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              Our liability is limited to the fees paid for the specific service. We shall not be liable for any
              indirect, incidental, or consequential damages.
            </p>

            <h2>Contact Information</h2>
            <p>For questions regarding these terms, contact us at info@ganpaticonsultancy.com or +91 96313 10068.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
