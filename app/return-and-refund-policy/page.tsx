import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ReturnAndRefundPolicy() {
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
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Return & Refund Policy</h1>
          <p className="text-slate-600">Last updated: January 2025</p>
        </div>

        <Card className="shadow-xl">
          <CardContent className="p-8 prose prose-slate max-w-none">
            <h2>Service Satisfaction Guarantee</h2>
            <p>
              At Ganpati Consultancy, we are committed to providing high-quality professional services. If you are not
              satisfied with our services, we will work with you to resolve any issues.
            </p>

            <h2>Refund Eligibility</h2>
            <p>
              Refunds may be considered in cases where services have not been delivered as agreed upon or where there
              has been a significant error on our part.
            </p>

            <h2>Refund Process</h2>
            <p>
              To request a refund, please contact us within 30 days of service completion with details of your concern.
              We will review each case individually.
            </p>

            <h2>Non-Refundable Services</h2>
            <p>
              Certain services such as government filing fees, third-party charges, and completed consultation services
              are non-refundable.
            </p>

            <h2>Processing Time</h2>
            <p>
              Approved refunds will be processed within 7-10 business days and credited back to the original payment
              method.
            </p>

            <h2>Contact for Refunds</h2>
            <p>For refund requests, email us at info@ganpaticonsultancy.com or call +91 96313 10068.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
