"use client"

import type React from "react"

import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowLeft,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Clock,
  FileText,
  Download,
  User,
  Briefcase,
  MessageSquareHeart,
  Home,
  Menu,
  X,
  Headset,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  FileTextIcon,
  Receipt,
  Search,
  Book,
  Users,
  Scale,
  Globe,
  Laptop,
  DollarSign,
  Code,
  Megaphone,
  Palette,
} from "lucide-react"
import { useState } from "react"

// Define service data with required documents
const services = [
  {
    slug: "taxation-services",
    icon: FileTextIcon,
    title: "Taxation Services",
    description: "Comprehensive tax solutions for individuals and businesses",
    longDescription:
      "Our taxation services are designed to help individuals and businesses navigate the complex tax landscape in India. We provide end-to-end tax solutions including tax planning, return filing, and compliance management to ensure you meet all regulatory requirements while optimizing your tax liability.",
    features: ["Income Tax Return Filing", "Tax Planning & Advisory", "TDS/TCS Compliance", "Tax Audit & Assessment"],
    color: "bg-brand-100 text-brand-500",
    subServices: [
      {
        name: "Individual ITR Filing",
        description: "Accurate and timely filing of income tax returns for individuals across all income brackets.",
      },
      {
        name: "Business Tax Returns",
        description:
          "Comprehensive tax return preparation for businesses of all sizes, from proprietorships to large corporations.",
      },
      {
        name: "Tax Planning",
        description: "Strategic tax planning to minimize tax liability while ensuring full compliance with tax laws.",
      },
      {
        name: "TDS Returns",
        description: "Timely filing of TDS returns and compliance with TDS regulations to avoid penalties.",
      },
      {
        name: "Tax Audit",
        description: "Thorough tax audits as required under various sections of the Income Tax Act.",
      },
      {
        name: "Appeal & Assessment",
        description: "Representation and assistance during tax assessments, appeals, and scrutiny proceedings.",
      },
    ],
    benefits: [
      "Minimize tax liability through legal means",
      "Avoid penalties and interest charges",
      "Stay compliant with changing tax laws",
      "Save time and reduce stress during tax season",
      "Expert guidance for complex tax situations",
    ],
    process: [
      "Initial consultation to understand your tax situation",
      "Collection and organization of relevant financial documents",
      "Preparation and review of tax returns",
      "Filing with tax authorities",
      "Follow-up support for any notices or queries",
    ],
    requiredDocuments: [
      "PAN Card",
      "Aadhaar Card",
      "Form 16 (for salaried individuals)",
      "Bank statements",
      "Investment proofs (80C, 80D, etc.)",
      "Property documents (if applicable)",
      "Business income details (for business owners)",
      "Previous year's ITR (if available)",
    ],
  },
  {
    slug: "gst-services",
    icon: Receipt,
    title: "GST Services",
    description: "Complete GST compliance and advisory services",
    longDescription:
      "Our GST services provide comprehensive support for businesses navigating India's Goods and Services Tax system. From registration and regular filing to audit support and refund processing, we ensure your business remains fully compliant while optimizing your GST processes.",
    features: [
      "GST Registration & Migration",
      "Monthly/Quarterly Return Filing",
      "GST Audit & Annual Return",
      "GST Refund & Advisory",
    ],
    color: "bg-accent-50 text-accent-400",
    subServices: [
      {
        name: "GST Registration",
        description: "Assistance with new GST registrations, migrations, and amendments to existing registrations.",
      },
      {
        name: "GSTR-1 Filing",
        description:
          "Timely preparation and filing of outward supply returns (GSTR-1) on a monthly or quarterly basis.",
      },
      {
        name: "GSTR-3B Filing",
        description: "Accurate filing of summary returns (GSTR-3B) with proper tax liability calculation.",
      },
      {
        name: "GST Annual Return",
        description: "Preparation and filing of annual returns (GSTR-9) with reconciliation statements.",
      },
      {
        name: "GST Refund",
        description: "Processing of GST refund claims for exports, excess payments, and other eligible scenarios.",
      },
      {
        name: "GST Advisory",
        description: "Expert advice on GST implications for business transactions and compliance requirements.",
      },
    ],
    benefits: [
      "Ensure timely compliance with GST regulations",
      "Avoid penalties and interest charges",
      "Optimize input tax credit utilization",
      "Streamline GST processes for business efficiency",
      "Expert handling of complex GST scenarios",
    ],
    process: [
      "Assessment of GST requirements for your business",
      "Setup of GST compliance framework",
      "Regular data collection and return preparation",
      "Filing of returns within deadlines",
      "Ongoing support for GST notices and queries",
    ],
    requiredDocuments: [
      "PAN Card",
      "Aadhaar Card",
      "Business registration certificate",
      "Bank account details",
      "Address proof of business premises",
      "Digital signature certificate",
      "Authorized signatory details",
      "Previous GST returns (if migrating)",
    ],
  },
  {
    slug: "audit-and-assurance",
    icon: Search,
    title: "Audit & Assurance",
    description: "Professional audit services ensuring compliance",
    longDescription:
      "Our audit and assurance services provide independent verification of financial statements and internal controls. We conduct thorough examinations to ensure accuracy, compliance, and identify areas for improvement in your financial reporting and operational processes.",
    features: [
      "Statutory & Tax Audit",
      "Internal & Stock Audit",
      "Bank Audit & Concurrent Audit",
      "Due Diligence & Forensic Audit",
    ],
    color: "bg-brand-50 text-brand-400",
    subServices: [
      {
        name: "Statutory Audit",
        description: "Comprehensive audit of financial statements as required by law for companies and other entities.",
      },
      {
        name: "Tax Audit",
        description: "Specialized audits required under various sections of the Income Tax Act.",
      },
      {
        name: "Internal Audit",
        description: "Evaluation of internal controls, risk management, and operational efficiency.",
      },
      {
        name: "Stock Audit",
        description: "Verification of inventory and stock records for accuracy and completeness.",
      },
      {
        name: "Bank Audit",
        description: "Specialized audits for banking institutions as per RBI guidelines.",
      },
      {
        name: "Due Diligence",
        description: "Thorough investigation of financial records for mergers, acquisitions, and investments.",
      },
    ],
    benefits: [
      "Ensure compliance with regulatory requirements",
      "Identify weaknesses in internal controls",
      "Improve financial reporting accuracy",
      "Enhance stakeholder confidence in financial statements",
      "Detect and prevent fraud or financial irregularities",
    ],
    process: [
      "Planning and scope definition",
      "Risk assessment and control evaluation",
      "Substantive testing and evidence gathering",
      "Analysis and findings documentation",
      "Reporting and recommendations",
    ],
    requiredDocuments: [
      "Financial statements",
      "Books of accounts",
      "Bank statements",
      "Vouchers and supporting documents",
      "Board resolutions",
      "Previous audit reports",
      "Tax returns",
      "Compliance certificates",
    ],
  },
  {
    slug: "outsourced-bookkeeping",
    icon: Book,
    title: "Outsourced Bookkeeping",
    description: "Complete accounting solutions for your business",
    longDescription:
      "Our outsourced bookkeeping services provide comprehensive accounting support for businesses of all sizes. We handle day-to-day financial record keeping, allowing you to focus on core business activities while ensuring your financial data is accurate, up-to-date, and properly organized.",
    features: [
      "Complete Accounting Services",
      "Monthly Bookkeeping",
      "Financial Statement Preparation",
      "Bank Reconciliation",
    ],
    color: "bg-accent-100 text-accent-500",
    subServices: [
      {
        name: "Daily Bookkeeping",
        description: "Regular recording of financial transactions including sales, purchases, receipts, and payments.",
      },
      {
        name: "Monthly Accounts",
        description: "Preparation of monthly financial statements and management reports.",
      },
      {
        name: "Financial Statements",
        description: "Compilation of balance sheets, profit and loss statements, and cash flow statements.",
      },
      {
        name: "Bank Reconciliation",
        description: "Regular reconciliation of bank statements with accounting records to ensure accuracy.",
      },
      {
        name: "Accounts Payable",
        description: "Management of vendor invoices, payment scheduling, and expense tracking.",
      },
      {
        name: "Accounts Receivable",
        description: "Tracking of customer invoices, payments, and outstanding balances.",
      },
    ],
    benefits: [
      "Focus on core business activities while experts handle your accounting",
      "Ensure accurate and up-to-date financial records",
      "Reduce accounting costs compared to in-house staff",
      "Access to experienced accounting professionals",
      "Scalable services that grow with your business",
    ],
    process: [
      "Initial assessment of accounting needs",
      "Setup of accounting systems and processes",
      "Regular data collection and entry",
      "Monthly reconciliation and reporting",
      "Quarterly review and financial analysis",
    ],
    requiredDocuments: [
      "Bank statements",
      "Sales invoices",
      "Purchase invoices",
      "Expense receipts",
      "Payroll records",
      "Previous financial statements",
      "Chart of accounts",
      "Business registration documents",
    ],
  },
  {
    slug: "payroll-management",
    icon: Users,
    title: "Payroll Management",
    description: "Streamlined payroll processing and compliance",
    longDescription:
      "Our payroll management services provide end-to-end solutions for handling employee compensation and related compliance requirements. We manage the entire payroll process, from salary calculations to statutory deductions, ensuring accuracy and timeliness while maintaining compliance with labor laws.",
    features: ["Salary Processing", "PF, ESI & PT Compliance", "Form 16 Generation", "Leave & Attendance Management"],
    color: "bg-pink-50 text-pink-600",
    subServices: [
      {
        name: "Salary Processing",
        description: "Accurate calculation and processing of employee salaries, bonuses, and deductions.",
      },
      {
        name: "PF Compliance",
        description: "Management of Provident Fund contributions, returns filing, and compliance.",
      },
      {
        name: "ESI Compliance",
        description: "Handling of Employee State Insurance calculations, contributions, and returns.",
      },
      {
        name: "PT Compliance",
        description: "Professional Tax calculation, deduction, and remittance as per state regulations.",
      },
      {
        name: "Form 16",
        description: "Preparation and issuance of Form 16 and other tax-related documents to employees.",
      },
      {
        name: "Payroll Software",
        description: "Implementation and management of payroll software solutions for your business.",
      },
    ],
    benefits: [
      "Ensure compliance with labor laws and regulations",
      "Eliminate errors in salary calculations",
      "Save time and resources on payroll processing",
      "Maintain confidentiality of employee compensation data",
      "Timely filing of statutory returns and payments",
    ],
    process: [
      "Setup of employee database and payroll parameters",
      "Monthly collection of attendance and leave data",
      "Processing of salaries and statutory deductions",
      "Generation of payslips and salary disbursement",
      "Filing of statutory returns and compliance reporting",
    ],
    requiredDocuments: [
      "Employee details (PAN, Aadhaar, bank account)",
      "Attendance records",
      "Leave records",
      "Salary structure details",
      "PF and ESI registration documents",
      "Professional Tax registration",
      "Previous payroll records",
      "Company policies on compensation",
    ],
  },
  {
    slug: "company-law-matters",
    icon: Scale,
    title: "Company Law Matters",
    description: "Corporate compliance and legal advisory",
    longDescription:
      "Our company law services provide comprehensive support for businesses in navigating corporate legal requirements. From company formation to ongoing compliance and corporate restructuring, we ensure your business meets all statutory obligations while optimizing corporate governance practices.",
    features: ["Company Incorporation", "ROC Annual Compliance", "Board Meeting Support", "Corporate Restructuring"],
    color: "bg-indigo-50 text-indigo-600",
    subServices: [
      {
        name: "Company Registration",
        description: "Formation of new companies including documentation, name approval, and incorporation.",
      },
      {
        name: "ROC Filing",
        description: "Regular filing of statutory returns and forms with the Registrar of Companies.",
      },
      {
        name: "Board Meetings",
        description: "Assistance with board meeting procedures, documentation, and compliance.",
      },
      {
        name: "AGM Support",
        description: "Preparation for Annual General Meetings including notices, agendas, and minutes.",
      },
      {
        name: "Compliance Calendar",
        description: "Maintenance of compliance calendars to ensure timely fulfillment of statutory requirements.",
      },
      {
        name: "Corporate Restructuring",
        description: "Advisory and implementation support for mergers, acquisitions, and corporate restructuring.",
      },
    ],
    benefits: [
      "Ensure compliance with Companies Act and other corporate laws",
      "Avoid penalties for non-compliance with statutory requirements",
      "Maintain proper corporate governance practices",
      "Expert guidance for complex corporate matters",
      "Streamlined processes for corporate legal requirements",
    ],
    process: [
      "Assessment of corporate compliance requirements",
      "Development of compliance framework and calendar",
      "Regular monitoring and filing of statutory returns",
      "Support for corporate meetings and documentation",
      "Advisory on corporate governance best practices",
    ],
    requiredDocuments: [
      "Director identification numbers (DIN)",
      "Digital signature certificates (DSC)",
      "Identity and address proofs of directors",
      "Registered office proof",
      "Memorandum and Articles of Association",
      "Previous annual returns",
      "Board resolutions",
      "Shareholder details",
    ],
  },
  {
    slug: "import-export-consultancy",
    icon: Globe,
    title: "Import Export Consultancy",
    description: "International trade compliance and advisory",
    longDescription:
      "Our import-export consultancy services provide comprehensive support for businesses engaged in international trade. We guide you through the complexities of global commerce, from obtaining necessary licenses to managing customs procedures and maximizing available incentives.",
    features: ["IEC Code Registration", "Customs Duty Advisory", "Export Incentives", "DGFT Compliance"],
    color: "bg-brand-100 text-brand-500",
    subServices: [
      {
        name: "IEC Registration",
        description: "Assistance with obtaining Import Export Code (IEC) from the DGFT.",
      },
      {
        name: "Export Documentation",
        description:
          "Preparation and management of export documentation including shipping bills and certificates of origin.",
      },
      {
        name: "Import Procedures",
        description: "Guidance on import procedures, documentation, and compliance requirements.",
      },
      {
        name: "Customs Clearance",
        description: "Support for customs clearance processes and documentation.",
      },
      {
        name: "DGFT Schemes",
        description: "Advisory on various DGFT schemes and their applicability to your business.",
      },
      {
        name: "Export Incentives",
        description: "Assistance in identifying and claiming applicable export incentives and benefits.",
      },
    ],
    benefits: [
      "Navigate complex international trade regulations",
      "Optimize duty structures and reduce import costs",
      "Maximize available export incentives",
      "Ensure compliance with foreign trade policies",
      "Streamline import-export documentation processes",
    ],
    process: [
      "Assessment of import-export requirements",
      "Registration and licensing support",
      "Development of trade documentation processes",
      "Regular compliance monitoring and reporting",
      "Advisory on trade optimization strategies",
    ],
    requiredDocuments: [
      "PAN Card",
      "Business registration certificate",
      "Bank certificate",
      "Cancelled cheque",
      "Address proof of business premises",
      "Digital photographs of proprietor/partners/directors",
      "Digital signature certificate",
      "GSTIN (if registered)",
    ],
  },
  {
    slug: "office-automation",
    icon: Laptop,
    title: "Office Automation",
    description: "Digital transformation for modern businesses",
    longDescription:
      "Our office automation services help businesses streamline operations through digital transformation. We implement technology solutions that automate routine tasks, improve efficiency, and enhance data management, allowing your team to focus on high-value activities.",
    features: [
      "Accounting Software Setup",
      "Digital Compliance Solutions",
      "Process Digitization",
      "ERP Implementation Support",
    ],
    color: "bg-cyan-50 text-cyan-600",
    subServices: [
      {
        name: "Tally Implementation",
        description: "Setup, customization, and training for Tally accounting software.",
      },
      {
        name: "QuickBooks Setup",
        description: "Implementation and configuration of QuickBooks for your business needs.",
      },
      {
        name: "SAP Implementation",
        description: "Support for SAP implementation and integration with existing systems.",
      },
      {
        name: "Digital Documentation",
        description: "Conversion of paper-based processes to digital document management systems.",
      },
      {
        name: "Process Automation",
        description: "Automation of routine business processes using appropriate technology solutions.",
      },
      {
        name: "Cloud Migration",
        description: "Migration of business data and applications to secure cloud platforms.",
      },
    ],
    benefits: [
      "Increase operational efficiency through automation",
      "Reduce manual errors in data processing",
      "Improve data accessibility and security",
      "Enable remote work capabilities",
      "Scale operations without proportional increase in administrative costs",
    ],
    process: [
      "Assessment of current processes and automation needs",
      "Selection of appropriate technology solutions",
      "Implementation and customization of systems",
      "Staff training and change management",
      "Ongoing support and optimization",
    ],
    requiredDocuments: [
      "Current process documentation",
      "Existing software licenses",
      "System requirements",
      "User access requirements",
      "Data migration sources",
      "Business workflow diagrams",
      "IT infrastructure details",
      "Current software documentation",
    ],
  },
  {
    slug: "financial-advisory",
    icon: DollarSign,
    title: "Financial Advisory",
    description: "Strategic financial planning and investment guidance",
    longDescription:
      "Our financial advisory services provide expert guidance for businesses and individuals making important financial decisions. From business valuation to investment planning and fundraising support, we help you navigate complex financial landscapes to achieve your goals.",
    features: ["Business Valuation", "Fundraising Support", "Investment Advisory", "Financial Planning"],
    color: "bg-emerald-50 text-emerald-600",
    subServices: [
      {
        name: "Business Valuation",
        description: "Professional valuation of businesses using appropriate methodologies.",
      },
      {
        name: "Financial Planning",
        description: "Comprehensive financial planning for businesses and high-net-worth individuals.",
      },
      {
        name: "Investment Advisory",
        description: "Guidance on investment opportunities and portfolio management.",
      },
      {
        name: "Loan Assistance",
        description: "Support for loan applications including documentation and financial projections.",
      },
      {
        name: "Fundraising",
        description: "Assistance with capital raising through various channels including equity and debt.",
      },
      {
        name: "Risk Assessment",
        description: "Evaluation of financial risks and development of mitigation strategies.",
      },
    ],
    benefits: [
      "Make informed financial decisions based on expert analysis",
      "Optimize capital structure and funding sources",
      "Identify and mitigate financial risks",
      "Develop sustainable financial growth strategies",
      "Access to professional financial expertise without full-time costs",
    ],
    process: [
      "Initial financial assessment and goal setting",
      "Data collection and financial analysis",
      "Development of financial strategies and recommendations",
      "Implementation support and monitoring",
      "Regular review and adjustment of financial plans",
    ],
    requiredDocuments: [
      "Financial statements (3-5 years)",
      "Cash flow projections",
      "Business plan",
      "Tax returns",
      "Existing loan agreements",
      "Asset and liability details",
      "Investment portfolio details",
      "Insurance policies",
    ],
  },
  {
    slug: "it-services",
    icon: Code,
    title: "IT Services",
    description: "Comprehensive technology solutions for modern businesses",
    longDescription:
      "Our IT services provide end-to-end technology solutions for businesses looking to establish or enhance their digital presence. From website development to custom software solutions and mobile applications, we deliver technology that drives business growth and efficiency.",
    features: ["Website Development", "SaaS Software Development", "Mobile App Development", "E-commerce Solutions"],
    color: "bg-violet-50 text-violet-600",
    subServices: [
      {
        name: "Website Development",
        description: "Creation of professional, responsive websites tailored to your business needs.",
      },
      {
        name: "Mobile App Development",
        description: "Development of custom mobile applications for iOS and Android platforms.",
      },
      {
        name: "SaaS Development",
        description: "Creation of cloud-based software solutions with subscription models.",
      },
      {
        name: "E-commerce Solutions",
        description: "Implementation of online stores with payment processing and inventory management.",
      },
      {
        name: "Software Maintenance",
        description: "Ongoing support, updates, and enhancements for existing software systems.",
      },
      {
        name: "IT Consulting",
        description: "Strategic technology advisory services for business growth and efficiency.",
      },
    ],
    benefits: [
      "Establish strong digital presence for your business",
      "Automate business processes through custom software",
      "Reach mobile users through dedicated applications",
      "Enable online sales and expand market reach",
      "Leverage technology for competitive advantage",
    ],
    process: [
      "Requirements gathering and analysis",
      "Solution design and planning",
      "Development and testing",
      "Deployment and integration",
      "Ongoing support and enhancements",
    ],
    requiredDocuments: [
      "Project requirements document",
      "Brand guidelines",
      "Content for website/application",
      "Existing website/application access (if applicable)",
      "Domain and hosting details",
      "User flow diagrams",
      "API documentation (if integrating with other systems)",
      "Design preferences",
    ],
  },
  {
    slug: "digital-marketing",
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Complete digital marketing solutions to grow your business",
    longDescription:
      "Our digital marketing services help businesses establish and grow their online presence. We develop comprehensive strategies across multiple digital channels to increase brand visibility, generate leads, and drive conversions, delivering measurable results for your marketing investment.",
    features: ["SEO & Content Marketing", "Social Media Marketing", "Google Ads & PPC", "Email Marketing Campaigns"],
    color: "bg-rose-50 text-rose-600",
    subServices: [
      {
        name: "SEO Services",
        description: "Search engine optimization to improve organic visibility and website traffic.",
      },
      {
        name: "Social Media Marketing",
        description: "Strategic management of social media platforms to build brand presence and engagement.",
      },
      {
        name: "Google Ads",
        description: "Paid search campaigns on Google to drive targeted traffic and conversions.",
      },
      {
        name: "Content Marketing",
        description: "Creation and distribution of valuable content to attract and engage your target audience.",
      },
      {
        name: "Email Marketing",
        description: "Strategic email campaigns to nurture leads and maintain customer relationships.",
      },
      {
        name: "Brand Strategy",
        description: "Development of comprehensive brand positioning and marketing strategies.",
      },
    ],
    benefits: [
      "Increase online visibility and brand awareness",
      "Generate qualified leads for your business",
      "Improve conversion rates and ROI on marketing spend",
      "Build lasting relationships with customers",
      "Gain insights through data-driven marketing analytics",
    ],
    process: [
      "Digital marketing audit and goal setting",
      "Strategy development across relevant channels",
      "Campaign implementation and content creation",
      "Performance monitoring and optimization",
      "Regular reporting and strategy refinement",
    ],
    requiredDocuments: [
      "Brand guidelines",
      "Website access",
      "Social media account access",
      "Google Analytics access",
      "Target audience information",
      "Existing marketing materials",
      "Competitor information",
      "Marketing goals and KPIs",
    ],
  },
  {
    slug: "graphics-designing",
    icon: Palette,
    title: "Graphics Designing",
    description: "Creative design solutions for brand identity and marketing",
    longDescription:
      "Our graphics designing services provide creative visual solutions that help businesses establish a strong brand identity and create impactful marketing materials. From logo design to comprehensive brand guidelines and marketing collateral, we deliver professional designs that communicate your brand message effectively.",
    features: [
      "Logo & Brand Identity Design",
      "Marketing Collaterals",
      "Website UI/UX Design",
      "Print & Digital Graphics",
    ],
    color: "bg-amber-50 text-amber-600",
    subServices: [
      {
        name: "Logo Design",
        description: "Creation of distinctive, memorable logos that represent your brand identity.",
      },
      {
        name: "Brand Identity",
        description: "Development of comprehensive brand guidelines including colors, typography, and visual elements.",
      },
      {
        name: "Marketing Materials",
        description: "Design of brochures, flyers, banners, and other promotional materials.",
      },
      {
        name: "UI/UX Design",
        description: "User interface and experience design for websites and applications.",
      },
      {
        name: "Print Design",
        description: "Design of business cards, letterheads, envelopes, and other corporate stationery.",
      },
      {
        name: "Digital Graphics",
        description: "Creation of social media graphics, email templates, and digital advertisements.",
      },
    ],
    benefits: [
      "Establish a professional and consistent brand image",
      "Create memorable visual identity that stands out",
      "Improve user experience through thoughtful design",
      "Enhance marketing effectiveness with professional visuals",
      "Communicate brand values through visual elements",
    ],
    process: [
      "Discovery and brand analysis",
      "Concept development and initial designs",
      "Refinement based on feedback",
      "Finalization and delivery of design assets",
      "Brand guidelines documentation",
    ],
    requiredDocuments: [
      "Brand brief",
      "Existing logo and brand materials (if available)",
      "Design preferences",
      "Competitor examples",
      "Target audience information",
      "Content for marketing materials",
      "Print specifications (if applicable)",
      "Usage requirements",
    ],
  },
]

export default function ServicePage({ params }: { params: { slug: string } }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [leadFormData, setLeadFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const service = services.find((s) => s.slug === params.slug)

  if (!service) {
    notFound()
  }

  const ServiceIcon = service.icon

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  const handleLeadFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Implement lead generation logic here
    console.log("Lead form submitted:", leadFormData)
    alert("Thank you for your interest! We'll contact you soon.")
    setLeadFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    })
  }

  const handleInputChange = (field: string, value: string) => {
    setLeadFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50 to-accent-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-3">
              <img src="/images/logo.png" alt="Ganpati Consultancy Logo" className="h-10 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {[
                { name: "Home", icon: Home, href: "/" },
                { name: "About", icon: User, href: "/#about" },
                { name: "Services", icon: Briefcase, href: "/#services" },
                { name: "Testimonials", icon: MessageSquareHeart, href: "/#testimonials" },
                { name: "Contact", icon: Phone, href: "/#contact" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 text-slate-700 hover:text-brand-400 transition-colors duration-200 font-medium"
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link href="/#contact">
                <Button className="bg-gradient-to-r from-brand-400 to-brand-500 hover:from-brand-500 hover:to-brand-600 text-white">
                  <Headset className="mr-2 h-4 w-4" />
                  Get Quote
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200">
              <nav className="flex flex-col space-y-3">
                {[
                  { name: "Home", icon: Home, href: "/" },
                  { name: "About", icon: User, href: "/#about" },
                  { name: "Services", icon: Briefcase, href: "/#services" },
                  { name: "Testimonials", icon: MessageSquareHeart, href: "/#testimonials" },
                  { name: "Contact", icon: Phone, href: "/#contact" },
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-3 text-slate-700 hover:text-brand-400 transition-colors duration-200 font-medium py-2 px-4 rounded-lg hover:bg-brand-100"
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      <div className="py-20">
        <div className="container mx-auto px-4">
          {/* Back Button and Header */}
          <div className="mb-12">
            <Link href="/#services">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Services
              </Button>
            </Link>

            <Badge className={`mb-4 ${service.color}`}>Our Services</Badge>

            <div className="flex items-center mb-6">
              <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mr-6`}>
                <ServiceIcon className="h-8 w-8" />
              </div>
              <h1 className="text-4xl font-bold text-slate-900">{service.title}</h1>
            </div>

            <p className="text-xl text-slate-600 max-w-3xl">{service.longDescription}</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {/* Key Features */}
              <div className="mb-16">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Required Documents */}
              <div className="mb-16">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Required Documents</h2>
                <Card className="bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-200">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <FileText className="h-6 w-6 text-orange-600 mr-3" />
                      <h3 className="text-lg font-semibold text-slate-900">Documents You Need to Provide</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.requiredDocuments?.map((doc, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span className="text-slate-700">{doc}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <p className="text-sm text-blue-800">
                        <strong>Note:</strong> Don't worry if you don't have all documents ready. Our team will guide
                        you through the process and help you gather the required documentation.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sub-Services */}
              <div className="mb-16">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Our {service.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.subServices.map((subService, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">{subService.name}</h3>
                        <p className="text-slate-600">{subService.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-16">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Benefits</h2>
                <div className="bg-white rounded-xl shadow-md p-6">
                  <div className="space-y-4">
                    {service.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Our Process */}
              <div className="mb-16">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Process</h2>
                <div className="relative">
                  {/* Process Timeline */}
                  <div className="hidden md:block absolute left-[21px] top-8 bottom-8 w-1 bg-brand-200"></div>

                  <div className="space-y-8">
                    {service.process.map((step, index) => (
                      <div key={index} className="flex items-start space-x-6">
                        <div className="relative">
                          <div className="w-10 h-10 rounded-full bg-brand-400 text-white flex items-center justify-center font-bold text-lg z-10 relative">
                            {index + 1}
                          </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-5 flex-1">
                          <p className="text-slate-700">{step}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar - Lead Generation Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <Card className="bg-gradient-to-br from-brand-400 to-brand-500 text-white shadow-xl">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4">Get Free Consultation</h3>
                    <p className="text-brand-100 mb-6">
                      Interested in our {service.title}? Fill out the form below and our experts will contact you within
                      24 hours.
                    </p>

                    <form onSubmit={handleLeadFormSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="lead-name" className="text-white">
                          Full Name *
                        </Label>
                        <Input
                          id="lead-name"
                          value={leadFormData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className="mt-1 bg-white text-slate-900"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="lead-email" className="text-white">
                          Email Address *
                        </Label>
                        <Input
                          id="lead-email"
                          type="email"
                          value={leadFormData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="mt-1 bg-white text-slate-900"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="lead-phone" className="text-white">
                          Phone Number *
                        </Label>
                        <Input
                          id="lead-phone"
                          type="tel"
                          value={leadFormData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="mt-1 bg-white text-slate-900"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="lead-company" className="text-white">
                          Company Name
                        </Label>
                        <Input
                          id="lead-company"
                          value={leadFormData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                          className="mt-1 bg-white text-slate-900"
                        />
                      </div>

                      <div>
                        <Label htmlFor="lead-message" className="text-white">
                          Message
                        </Label>
                        <Textarea
                          id="lead-message"
                          value={leadFormData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          className="mt-1 bg-white text-slate-900"
                          rows={3}
                          placeholder={`Tell us about your ${service.title} requirements...`}
                        />
                      </div>

                      <Button type="submit" className="w-full bg-white text-brand-500 hover:bg-gray-100 font-semibold">
                        Get Free Consultation
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </form>

                    <div className="mt-6 pt-6 border-t border-brand-300">
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center space-x-3">
                          <Phone className="h-4 w-4" />
                          <a href="tel:+919631310068" className="hover:text-white/80 transition-colors">
                            +91 96313 10068
                          </a>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Mail className="h-4 w-4" />
                          <a
                            href="mailto:info@ganpaticonsultancy.com"
                            className="hover:text-white/80 transition-colors"
                          >
                            info@ganpaticonsultancy.com
                          </a>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Clock className="h-4 w-4" />
                          <span>Mon-Sat: 10 AM - 8 PM</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Contact Card */}
                <Card className="mt-6 border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <h4 className="font-semibold text-slate-900 mb-4">Need Immediate Assistance?</h4>
                    <div className="space-y-3">
                      <a href="tel:+919631310068">
                        <Button className="w-full bg-brand-400 hover:bg-brand-500 text-white">
                          <Phone className="mr-2 h-4 w-4" />
                          Call Now
                        </Button>
                      </a>
                      <Button variant="outline" className="w-full">
                        <Download className="mr-2 h-4 w-4" />
                        Download Brochure
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-brand-400 to-brand-500 rounded-xl shadow-xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Contact us today to learn more about our {service.title} and how we can help your business succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
                <Button size="lg" className="bg-white text-brand-500 hover:bg-gray-100">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/#services">
                <Button size="lg" variant="outline" className="border-white text-brand-500 hover:text-white hover:bg-brand-500">
                  Explore Other Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <img
                  src="/images/logo.png"
                  alt="Ganpati Consultancy Logo"
                  className="h-10 w-auto brightness-0 invert"
                />
              </div>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Your trusted financial partner in Patna, providing comprehensive CA and business services with 13+ years
                of expertise.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/p/Ganpati-Consultancy-100079619364124/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white hover:bg-slate-800 p-2 rounded-full transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white hover:bg-slate-800 p-2 rounded-full transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white hover:bg-slate-800 p-2 rounded-full transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ganesh-kumar-88289332/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white hover:bg-slate-800 p-2 rounded-full transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
              <div className="space-y-3">
                <Link href="/" className="block text-slate-400 hover:text-white transition-colors">
                  Home
                </Link>
                <Link href="/#about" className="block text-slate-400 hover:text-white transition-colors">
                  About
                </Link>
                <Link href="/#services" className="block text-slate-400 hover:text-white transition-colors">
                  Services
                </Link>
                <Link href="/#testimonials" className="block text-slate-400 hover:text-white transition-colors">
                  Testimonials
                </Link>
                <Link href="/#contact" className="block text-slate-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-6">Services</h3>
              <div className="space-y-3">
                <Link
                  href="/services/taxation-services"
                  className="block text-slate-400 hover:text-white transition-colors"
                >
                  Taxation
                </Link>
                <Link href="/services/gst-services" className="block text-slate-400 hover:text-white transition-colors">
                  GST
                </Link>
                <Link
                  href="/services/audit-and-assurance"
                  className="block text-slate-400 hover:text-white transition-colors"
                >
                  Audit
                </Link>
                <Link
                  href="/services/outsourced-bookkeeping"
                  className="block text-slate-400 hover:text-white transition-colors"
                >
                  Bookkeeping
                </Link>
                <Link href="/services/it-services" className="block text-slate-400 hover:text-white transition-colors">
                  IT Services
                </Link>
                <Link
                  href="/services/digital-marketing"
                  className="block text-slate-400 hover:text-white transition-colors"
                >
                  Digital Marketing
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-6">Legal</h3>
              <div className="space-y-3">
                <Link href="/privacy-policy" className="block text-slate-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms-of-service" className="block text-slate-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <Link
                  href="/return-and-refund-policy"
                  className="block text-slate-400 hover:text-white transition-colors"
                >
                  Return Policy
                </Link>
                <Link href="/disclaimer" className="block text-slate-400 hover:text-white transition-colors">
                  Disclaimer
                </Link>
                <Link href="/" className="block text-slate-400 hover:text-white transition-colors">
                  Sitemap
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-slate-400 text-sm mb-4 md:mb-0">© 2025 Ganpati Consultancy. All rights reserved.</p>
              <p className="text-slate-400 text-sm">
                Made with ❤️ by{" "}
                <a
                  href="https://codeclue.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-400 hover:text-brand-300"
                >
                  <span className="text-[#00B5CE]">Code </span> <span className="text-[#FF8D1A]">Clue</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
