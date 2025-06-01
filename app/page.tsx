"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  LandPlot,
  Clock,
  Star,
  CheckCircle,
  FileText,
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
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  MessageSquare,
  MessageSquareHeart,
  ArrowRight,
  Award,
  Shield,
  Zap,
  Home,
  User,
  Briefcase,
  MessageCircle,
  CalendarCheck,
  Headset,
  Target,
  Trophy,
  Medal,
  Sparkles,
  Lock,
  UserCheck,
  Headphones,
  Timer,
  Flame,
} from "lucide-react"

export default function GanpatiConsultancy() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    subService: "",
    message: "",
  })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const [isTestimonialHovered, setIsTestimonialHovered] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (field === "service") {
      setFormData((prev) => ({ ...prev, subService: "" }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would implement the email sending functionality
    console.log("Form submitted:", formData)
    setIsModalOpen(false)
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      subService: "",
      message: "",
    })
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  const whatsappMessage = encodeURIComponent(
    "Hi Ganpati Consultancy, I visited your website and would like to know more about your services.",
  )
  const whatsappUrl = `https://wa.me/919631310068?text=${whatsappMessage}`

  const services = [
    {
      slug: "taxation-services",
      icon: FileText,
      title: "Taxation Services",
      description: "Comprehensive tax solutions for individuals and businesses",
      features: ["Income Tax Return Filing", "Tax Planning & Advisory", "TDS/TCS Compliance", "Tax Audit & Assessment"],
      color: "bg-brand-100 text-brand-500",
      subServices: [
        "Individual ITR Filing",
        "Business Tax Returns",
        "Tax Planning",
        "TDS Returns",
        "Tax Audit",
        "Appeal & Assessment",
      ],
    },
    {
      slug: "gst-services",
      icon: Receipt,
      title: "GST Services",
      description: "Complete GST compliance and advisory services",
      features: [
        "GST Registration & Migration",
        "Monthly/Quarterly Return Filing",
        "GST Audit & Annual Return",
        "GST Refund & Advisory",
      ],
      color: "bg-accent-50 text-accent-400",
      subServices: [
        "GST Registration",
        "GSTR-1 Filing",
        "GSTR-3B Filing",
        "GST Annual Return",
        "GST Refund",
        "GST Advisory",
      ],
    },
    {
      slug: "audit-and-assurance",
      icon: Search,
      title: "Audit & Assurance",
      description: "Professional audit services ensuring compliance",
      features: [
        "Statutory & Tax Audit",
        "Internal & Stock Audit",
        "Bank Audit & Concurrent Audit",
        "Due Diligence & Forensic Audit",
      ],
      color: "bg-brand-50 text-brand-400",
      subServices: ["Statutory Audit", "Tax Audit", "Internal Audit", "Stock Audit", "Bank Audit", "Due Diligence"],
    },
    {
      slug: "outsourced-bookkeeping",
      icon: Book,
      title: "Outsourced Bookkeeping",
      description: "Complete accounting solutions for your business",
      features: [
        "Complete Accounting Services",
        "Monthly Bookkeeping",
        "Financial Statement Preparation",
        "Bank Reconciliation",
      ],
      color: "bg-accent-100 text-accent-500",
      subServices: [
        "Daily Bookkeeping",
        "Monthly Accounts",
        "Financial Statements",
        "Bank Reconciliation",
        "Accounts Payable",
        "Accounts Receivable",
      ],
    },
    {
      slug: "payroll-management",
      icon: Users,
      title: "Payroll Management",
      description: "Streamlined payroll processing and compliance",
      features: ["Salary Processing", "PF, ESI & PT Compliance", "Form 16 Generation", "Leave & Attendance Management"],
      color: "bg-brand-100 text-brand-400",
      subServices: [
        "Salary Processing",
        "PF Compliance",
        "ESI Compliance",
        "PT Compliance",
        "Form 16",
        "Payroll Software",
      ],
    },
    {
      slug: "company-law-matters",
      icon: Scale,
      title: "Company Law Matters",
      description: "Corporate compliance and legal advisory",
      features: ["Company Incorporation", "ROC Annual Compliance", "Board Meeting Support", "Corporate Restructuring"],
      color: "bg-brand-200 text-brand-600",
      subServices: [
        "Company Registration",
        "ROC Filing",
        "Board Meetings",
        "AGM Support",
        "Compliance Calendar",
        "Corporate Restructuring",
      ],
    },
    {
      slug: "import-export-consultancy",
      icon: Globe,
      title: "Import Export Consultancy",
      description: "International trade compliance and advisory",
      features: ["IEC Code Registration", "Customs Duty Advisory", "Export Incentives", "DGFT Compliance"],
      color: "bg-brand-100 text-brand-500",
      subServices: [
        "IEC Registration",
        "Export Documentation",
        "Import Procedures",
        "Customs Clearance",
        "DGFT Schemes",
        "Export Incentives",
      ],
    },
    {
      slug: "office-automation",
      icon: Laptop,
      title: "Office Automation",
      description: "Digital transformation for modern businesses",
      features: [
        "Accounting Software Setup",
        "Digital Compliance Solutions",
        "Process Digitization",
        "ERP Implementation Support",
      ],
      color: "bg-brand-50 text-brand-500",
      subServices: [
        "Tally Implementation",
        "QuickBooks Setup",
        "SAP Implementation",
        "Digital Documentation",
        "Process Automation",
        "Cloud Migration",
      ],
    },
    {
      slug: "financial-advisory",
      icon: DollarSign,
      title: "Financial Advisory",
      description: "Strategic financial planning and investment guidance",
      features: ["Business Valuation", "Fundraising Support", "Investment Advisory", "Financial Planning"],
      color: "bg-accent-50 text-accent-400",
      subServices: [
        "Business Valuation",
        "Financial Planning",
        "Investment Advisory",
        "Loan Assistance",
        "Fundraising",
        "Risk Assessment",
      ],
    },
    {
      slug: "it-services",
      icon: Code,
      title: "IT Services",
      description: "Comprehensive technology solutions for modern businesses",
      features: ["Website Development", "SaaS Software Development", "Mobile App Development", "E-commerce Solutions"],
      color: "bg-brand-100 text-brand-500",
      subServices: [
        "Website Development",
        "Mobile App Development",
        "SaaS Development",
        "E-commerce Solutions",
        "Software Maintenance",
        "IT Consulting",
      ],
    },
    {
      slug: "digital-marketing",
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Complete digital marketing solutions to grow your business",
      features: ["SEO & Content Marketing", "Social Media Marketing", "Google Ads & PPC", "Email Marketing Campaigns"],
      color: "bg-accent-100 text-accent-400",
      subServices: [
        "SEO Services",
        "Social Media Marketing",
        "Google Ads",
        "Content Marketing",
        "Email Marketing",
        "Brand Strategy",
      ],
    },
    {
      slug: "graphics-designing",
      icon: Palette,
      title: "Graphics Designing",
      description: "Creative design solutions for brand identity and marketing",
      features: [
        "Logo & Brand Identity Design",
        "Marketing Collaterals",
        "Website UI/UX Design",
        "Print & Digital Graphics",
      ],
      color: "bg-accent-50 text-accent-300",
      subServices: [
        "Logo Design",
        "Brand Identity",
        "Marketing Materials",
        "UI/UX Design",
        "Print Design",
        "Digital Graphics",
      ],
    },
  ]

  const getSubServices = (serviceName: string) => {
    const service = services.find((s) => s.title === serviceName)
    return service ? service.subServices : []
  }

  const stats = [
    { number: "13+", label: "Years Experience", icon: Award },
    { number: "500+", label: "Happy Clients", icon: Users },
    { number: "100%", label: "Compliance", icon: Shield },
    { number: "24/7", label: "Support", icon: Zap },
  ]

  const testimonials = [
    {
      name: "Rakesh Sharma",
      role: "Small Business Owner",
      content:
        "Ganpati Consultancy has been handling our GST and tax filings for 3 years. Their expertise saved us from penalties and helped optimize our tax liability. Ganesh Kumar personally ensures everything is perfect.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face",
      company: "Sharma Enterprises",
    },
    {
      name: "Priya Singh",
      role: "Startup Founder",
      content:
        "From company registration to monthly compliance, they've been our financial backbone. Their tech-enabled processes and 24/7 support make them stand out from other CAs in Patna.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
      company: "TechStart Solutions",
    },
    {
      name: "Amit Kumar",
      role: "NGO Director",
      content:
        "Their team helped us get 12A and 80G certifications quickly. Their knowledge of NGO compliance is exceptional. We've been working with them for 5 years without any compliance issues.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      company: "Hope Foundation",
    },
    {
      name: "Sunita Devi",
      role: "Restaurant Owner",
      content:
        "Ganpati Consultancy helped us navigate the complex GST requirements for our restaurant chain. Their monthly bookkeeping service has streamlined our operations significantly.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=150&h=150&fit=crop&crop=face",
      company: "Devi Restaurant Chain",
    },
    {
      name: "Rajesh Gupta",
      role: "Manufacturing Business",
      content:
        "The audit services provided by Ganpati Consultancy are thorough and professional. They identified cost-saving opportunities that saved us lakhs in taxes legally.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      company: "Gupta Industries",
    },
    {
      name: "Kavita Jha",
      role: "E-commerce Business",
      content:
        "Their digital marketing and IT services helped us establish a strong online presence. The website they developed increased our sales by 300% in just 6 months.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
      company: "Jha Online Store",
    },
  ]

  const faqs = [
    {
      question: "What services does Ganpati Consultancy offer?",
      answer:
        "We offer comprehensive CA services including taxation, GST, audit, bookkeeping, payroll management, company law matters, and modern services like IT solutions, digital marketing, and graphics designing.",
    },
    {
      question: "How experienced is your team?",
      answer:
        "Our founder Ganesh Kumar with 13+ years of experience. Our team has successfully served 500+ clients across various industries in Patna and Bihar.",
    },
    {
      question: "Do you provide 24/7 support?",
      answer:
        "Yes, we provide 24/7 support for urgent queries. You can reach us via WhatsApp, phone, or email anytime for critical compliance matters.",
    },
    {
      question: "What makes you different from other CA firms?",
      answer:
        "We offer direct CA access, tech-enabled processes, 24/7 support, and a comprehensive range of services including modern IT and digital marketing solutions under one roof.",
    },
    {
      question: "Do you handle both individual and business clients?",
      answer:
        "Yes, we serve both individual taxpayers and businesses of all sizes - from startups to established enterprises, NGOs, and multinational companies.",
    },
    {
      question: "How do you ensure data security?",
      answer:
        "We follow strict data protection protocols with SSL encryption, secure cloud storage, and confidentiality agreements to ensure your financial data remains safe.",
    },
  ]

  const processSteps = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "Free consultation to understand your business needs and compliance requirements",
      icon: MessageCircle,
    },
    {
      step: "2",
      title: "Requirement Analysis",
      description: "Detailed analysis of your current financial status and identification of improvement areas",
      icon: Search,
    },
    {
      step: "3",
      title: "Customized Solution",
      description: "Tailored service package designed specifically for your business requirements",
      icon: Target,
    },
    {
      step: "4",
      title: "Implementation",
      description: "Seamless implementation of services with minimal disruption to your business operations",
      icon: Zap,
    },
    {
      step: "5",
      title: "Ongoing Support",
      description: "Continuous monitoring, support, and optimization of your financial processes",
      icon: Headphones,
    },
  ]

  const awards = [
    {
      title: "Tally Certified Professional",
      description: "Ganesh Kumar is certified by Tally Solutions for expertise in accounting software implementation",
      year: "2023",
      icon: Trophy,
    },
    {
      title: "Excellence in CA Services",
      description: "Recognized by Bihar Chamber of Commerce for outstanding contribution to business community",
      year: "2022",
      icon: Medal,
    },
    {
      title: "Digital Innovation Award",
      description: "Awarded for implementing tech-enabled solutions in traditional CA practices",
      year: "2021",
      icon: Sparkles,
    },
  ]

  const trustBadges = [
    { name: "SSL Secured", icon: Lock, description: "256-bit SSL Encryption" },
    { name: "Data Protected", icon: ShieldCheck, description: "GDPR & IT Act Compliant" },
    { name: "Secure Client Portal", icon: UploadCloud, description: "Access-Controlled File Uploads" },
    { name: "Verified Business Identity", icon: BadgeCheck, description: "Trusted Professional Services" }
  ]

  const comparisonData = [
    {
      feature: "Direct CA Access",
      us: true,
      others: false,
    },
    {
      feature: "24/7 Support",
      us: true,
      others: false,
    },
    {
      feature: "Tech-Enabled Processes",
      us: true,
      others: false,
    },
    {
      feature: "Comprehensive Services",
      us: true,
      others: false,
    },
    {
      feature: "Fixed Pricing",
      us: true,
      others: false,
    },
    {
      feature: "13+ Years Experience",
      us: true,
      others: "Varies",
    },
  ]

  // Auto-scroll testimonials
  useEffect(() => {
    if (!isTestimonialHovered) {
      const interval = setInterval(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [testimonials.length, isTestimonialHovered])

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50 to-accent-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <img src="/images/logo.png" alt="Ganpati Consultancy Logo" className="h-10 w-auto" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {[
                { name: "Home", icon: Home, id: "home" },
                { name: "About", icon: User, id: "about" },
                { name: "Services", icon: Briefcase, id: "services" },
                { name: "Testimonials", icon: MessageSquareHeart, id: "testimonials" },
                { name: "Contact Us", icon: Phone, id: "contact" },
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center space-x-2 text-slate-700 hover:text-brand-400 transition-colors duration-200 font-medium"
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button
                className="bg-gradient-to-r from-brand-400 to-brand-500 hover:from-brand-500 hover:to-brand-600 text-white"
                onClick={() => setIsBookingModalOpen(true)}
              >
                <Headset className="mr-2 h-4 w-4" />
                Callback Request
              </Button>
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
                  { name: "Home", icon: Home, id: "home" },
                  { name: "About", icon: User, id: "about" },
                  { name: "Services", icon: Briefcase, id: "services" },
                  { name: "Testimonials", icon: MessageSquareHeart, id: "testimonials" },
                  { name: "Contact Us", icon: Phone, id: "contact" },
                ].map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.id)}
                    className="flex items-center space-x-3 text-slate-700 hover:text-brand-400 transition-colors duration-200 font-medium py-2 px-4 rounded-lg hover:bg-brand-50 border-b border-brand-100"
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </button>
                ))}
                <div className="pt-4">
                  <Button
                    className="w-full bg-gradient-to-r from-brand-400 to-brand-500 hover:from-brand-500 hover:to-brand-600 text-white"
                    onClick={() => setIsBookingModalOpen(true)}
                  >
                    <Headset className="mr-2 h-4 w-4" />
                    Callback Request
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative py-20 lg:py-32 overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 21, 51, 0.8), rgba(0, 21, 51, 1.0)), url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative container mx-auto px-4 text-center text-white">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
            ✨ Trusted Business Advisors in Patna
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Your Trusted
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Financial Partner
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100 leading-relaxed">
            Comprehensive financial solutions for businesses & individuals with 13+ years of trusted expertise in Patna,
            Bihar
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-accent-100 to-accent-200 hover:from-accent-200 hover:to-accent-300 text-black font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              onClick={() => setIsBookingModalOpen(true)}
            >
              <CalendarCheck className="mr-2 h-5 w-5" />
              Book Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-green-500 hover:bg-white hover:text-teal-900 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              onClick={() => window.open(whatsappUrl, "_blank")}
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-8 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-4">
            <Timer className="h-6 w-6 animate-pulse" />
            <p className="text-lg font-semibold">⚡ Limited slots available for FY 2024-25 tax planning - Book now!</p>
            <Flame className="h-6 w-6 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-400 to-brand-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-2">{stat.number}</div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-brand-50 to-accent-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-400 to-brand-500 rounded-2xl transform rotate-3"></div>
              <img
                src="/images/ganesh-kumar.jpg"
                alt="CA Ganesh Kumar"
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>

            <div>
              <Badge className="mb-4 bg-brand-100 text-brand-600 hover:bg-brand-200">About Our Founder</Badge>

              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Meet <span className="text-brand-400">Ganesh Kumar</span>
              </h2>

              <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                Ganesh Kumar, founder of Ganpati Consultancy, brings over 13 years of experience in taxation, auditing, and financial services. Under his leadership, the firm has expanded into IT services, digital marketing, and graphic designing, offering complete business support with a modern, tech-driven approach.
              </p>

              <Card className="bg-gradient-to-br from-brand-50 to-cyan-50 border-brand-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-slate-900">Why Choose Us?</h3>
                  <div className="space-y-3">
                    {[
                      "13+ years of specialized experience in Indian taxation",
                      "500+ satisfied clients across various industries",
                      "Ethical practices with complete transparency",
                      "Personalized attention with direct access to senior consultants",
                    ].map((point, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{point}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-brand-100 text-brand-600 hover:bg-brand-200">Our Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How We Work</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our streamlined 5-step process ensures efficient and effective service delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-400 to-brand-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-brand-400 mb-2">Step {step.step}</div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600 text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-brand-50 to-accent-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-brand-100 text-brand-600 hover:bg-brand-200">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Comprehensive Business Solutions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From traditional CA services to modern IT solutions, we provide end-to-end business support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
              >
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="h-8 w-8" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-6">{service.description}</p>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link href={`/services/${service.slug}`}>
                    <Button variant="ghost" className="w-full group-hover:bg-brand-50 group-hover:text-brand-400">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-brand-100 text-brand-600 hover:bg-brand-200">Why Choose Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Ganpati Consultancy vs Other</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See what makes us different from traditional CA firms
            </p>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-brand-200">
                      <th className="text-left py-4 px-4 font-semibold text-slate-900">Features</th>
                      <th className="text-center py-4 px-4 font-semibold text-brand-400">Ganpati Consultancy</th>
                      <th className="text-center py-4 px-4 font-semibold text-slate-600">Other</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((item, index) => (
                      <tr key={index} className="border-b border-slate-200">
                        <td className="py-4 px-4 font-medium text-slate-900">{item.feature}</td>
                        <td className="py-4 px-4 text-center">
                          {item.us === true ? (
                            <CheckCircle className="h-6 w-6 text-green-600 mx-auto" />
                          ) : (
                            <span className="text-brand-400 font-semibold">{item.us}</span>
                          )}
                        </td>
                        <td className="py-4 px-4 text-center">
                          {item.others === false ? (
                            <X className="h-6 w-6 text-red-500 mx-auto" />
                          ) : (
                            <span className="text-slate-600">{item.others}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-gradient-to-br from-brand-50 to-accent-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-brand-100 text-brand-600 hover:bg-brand-200">Awards & Recognition</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Recognized Excellence</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our commitment to excellence has been recognized by industry leaders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <award.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-lg font-bold text-brand-400 mb-2">{award.year}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{award.title}</h3>
                  <p className="text-slate-600">{award.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Trusted & Certified</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustBadges.map((badge, index) => (
              <Card key={index} className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-400 to-brand-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <badge.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">{badge.name}</h4>
                  <p className="text-sm text-slate-600">{badge.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-brand-400 to-brand-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white/20 text-white border-white/30 hover:bg-white/30">Client Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-teal-100 max-w-2xl mx-auto">
              Hear from businesses who trust us with their financial needs
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              onMouseEnter={() => setIsTestimonialHovered(true)}
              onMouseLeave={() => setIsTestimonialHovered(false)}
            >
              {testimonials.slice(activeTestimonial, activeTestimonial + 3).map((testimonial, index) => (
                <Card
                  key={index}
                  className="bg-white/10 backdrop-blur-md border-white/20 text-white cursor-pointer hover:bg-white/20 transition-all duration-300"
                >
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4 object-cover"
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder.svg?height=48&width=48"
                        }}
                      />
                      <div>
                        <h3 className="font-semibold">{testimonial.name}</h3>
                        <p className="text-sm text-teal-200">{testimonial.role}</p>
                        <p className="text-xs text-teal-300">{testimonial.company}</p>
                      </div>
                    </div>

                    <p className="text-teal-100 mb-6 leading-relaxed">"{testimonial.content}"</p>

                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index * 3)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    Math.floor(activeTestimonial / 3) === index ? "bg-white" : "bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-brand-100 text-brand-600 hover:bg-brand-200">FAQ</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Get answers to common questions about our services
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-slate-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-brand-400">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-brand-50 to-accent-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Badge className="mb-4 bg-brand-100 text-brand-600 hover:bg-brand-200">Get In Touch</Badge>

              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Ready to Get Started?</h2>

              <p className="text-lg text-slate-600 mb-8">
                Have questions about our services or want to schedule a consultation? Reach out to us today.
              </p>

              <div className="space-y-6">
                <Card className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-brand-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-2">Our Office</h3>
                        <p className="text-slate-600">402, 4th Floor, Shanti Complex</p>
                        <p className="text-slate-600">SP Verma Road, Patna, Bihar - 800001</p>
                        <p className="text-slate-600">
                          <LandPlot className="h-4 w-4 text-blue-500 inline mr-1" />
                          Landmark: Near Gandhi Maidan
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-2">Call Us</h3>
                        <p className="text-slate-600">
                          <a href="tel:+919631310068" className="hover:text-brand-400 transition-colors">
                            +91 96313 10068
                          </a>
                        </p>
                        <p className="text-slate-600">
                          <a href="tel:+919473460077" className="hover:text-brand-400 transition-colors">
                            +91 94734 60077
                          </a>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-2">Email Us</h3>
                        <p className="text-slate-600">
                          <a
                            href="mailto:info@ganpaticonsultancy.com"
                            className="hover:text-brand-400 transition-colors"
                          >
                            info@ganpaticonsultancy.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-2">Business Hours</h3>
                        <p className="text-slate-600">Monday - Saturday: 10:00 AM - 8:00 PM</p>
                        <p className="text-slate-600">Sunday: Closed</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-slate-700 font-medium">
                        Your Name *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="mt-2"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-slate-700 font-medium">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="mt-2"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-slate-700 font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="mt-2"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="service" className="text-slate-700 font-medium">
                      Service Interested In
                    </Label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service.title} value={service.title}>
                            {service.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {formData.service && (
                    <div>
                      <Label htmlFor="subService" className="text-slate-700 font-medium">
                        Sub-Service
                      </Label>
                      <Select
                        value={formData.subService}
                        onValueChange={(value) => handleInputChange("subService", value)}
                      >
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select sub-service" />
                        </SelectTrigger>
                        <SelectContent>
                          {getSubServices(formData.service).map((subService) => (
                            <SelectItem key={subService} value={subService}>
                              {subService}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  <div>
                    <Label htmlFor="message" className="text-slate-700 font-medium">
                      Your Message *
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="mt-2"
                      rows={4}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-brand-400 hover:bg-brand-500" size="lg">
                    Send Message
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <div className="h-96 w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.7968122293964!2d85.1381702741696!3d25.61166721479078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed59cfce932c69%3A0x3187f4cf6d6d7121!2sGanpati%20Consultancy%20Patna!5e0!3m2!1sen!2sin!4v1748079733415!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Ganpati Consultancy Location"
        />
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
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
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-slate-400 hover:text-white hover:bg-slate-800"
                  onClick={() =>
                    window.open("https://www.facebook.com/p/Ganpati-Consultancy-100079619364124/", "_blank")
                  }
                >
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-slate-400 hover:text-white hover:bg-slate-800"
                  onClick={() => window.open("#", "_blank")}
                >
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-slate-400 hover:text-white hover:bg-slate-800"
                  onClick={() => window.open("#", "_blank")}
                >
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-slate-400 hover:text-white hover:bg-slate-800"
                  onClick={() => window.open("https://www.linkedin.com/in/ganesh-kumar-88289332/", "_blank")}
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
              <div className="space-y-3">
                {[
                  { name: "Home", id: "home" },
                  { name: "About", id: "about" },
                  { name: "Services", id: "services" },
                  { name: "Testimonials", id: "testimonials" },
                  { name: "Contact Us", id: "contact" },
                ].map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.id)}
                    className="block text-slate-400 hover:text-white transition-colors text-left"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-6">Services</h3>
              <div className="space-y-3">
                {[
                  "Taxation",
                  "GST",
                  "Audit",
                  "Bookkeeping",
                  "Payroll",
                  "IT Services",
                  "Digital Marketing",
                  "Graphics Design",
                ].map((service) => (
                  <button
                    key={service}
                    onClick={() => scrollToSection("services")}
                    className="block text-slate-400 hover:text-white transition-colors text-left"
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-6">Legal</h3>
              <div className="space-y-3">
                <a href="/privacy-policy" className="block text-slate-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="/terms-of-service" className="block text-slate-400 hover:text-white transition-colors">
                  Terms of Service
                </a>
                <a href="/return-and-refund-policy" className="block text-slate-400 hover:text-white transition-colors">
                  Return Policy
                </a>
                <a href="/disclaimer" className="block text-slate-400 hover:text-white transition-colors">
                  Disclaimer
                </a>
                <button
                  onClick={() => scrollToSection("home")}
                  className="block text-slate-400 hover:text-white transition-colors text-left"
                >
                  Sitemap
                </button>
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

      {/* Zoho Booking Modal */}
      <Dialog open={isBookingModalOpen} onOpenChange={setIsBookingModalOpen}>
        <DialogContent className="sm:max-w-4xl max-h-[90vh] p-0">
         
          <div>
            <iframe
              width="100%"
              height="500px"
              src="https://ganpaticonsultancy.zohobookings.com/portal-embed#/ganpaticonsultancy"
              frameBorder="0"
              allowFullScreen
              className="rounded-lg"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
