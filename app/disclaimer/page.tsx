import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function Disclaimer() {
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
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Disclaimer</h1>
          <p className="text-slate-600">Last updated: January 2025</p>
        </div>

        <Card className="shadow-xl">
          <CardContent className="p-8 prose prose-slate max-w-none">
            <h2>Professional Advice Disclaimer</h2>
            <p>
              The information provided by Ganpati Consultancy is for general informational purposes only. All
              information is provided in good faith, however we make no representation or warranty of any kind.
            </p>

            <h2>No Professional Relationship</h2>
            <p>
              Use of this website does not create a professional relationship between you and Ganpati Consultancy.
              Professional relationships are established only through formal engagement letters.
            </p>

            <h2>Accuracy of Information</h2>
            <p>
              While we strive to keep the information up to date and correct, we make no representations or warranties
              about the completeness, accuracy, reliability, or suitability of the information.
            </p>

            <h2>External Links</h2>
            <p>
              Our website may contain links to external websites. We have no control over the content and nature of
              these sites and are not responsible for their content.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              In no event shall Ganpati Consultancy be liable for any special, direct, indirect, consequential, or
              incidental damages arising out of or in connection with your use of this website.
            </p>

            <h2>Contact Us</h2>
            <p>If you have any questions about this disclaimer, please contact us at info@ganpaticonsultancy.com.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
