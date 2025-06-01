"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { MessageSquare, X, ChevronDown, Sprout } from "lucide-react"
import { Button } from "@/components/ui/button"

interface WhatsAppWidgetProps {
  phoneNumber: string
  welcomeMessage?: string
  companyName?: string
}

export default function WhatsAppWidget({
  phoneNumber,
  welcomeMessage = "Hi there! How can I help you?",
  companyName = "Ganpati Consultancy",
}: WhatsAppWidgetProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isButtonVisible, setIsButtonVisible] = useState(true)
  const [isAnimating, setIsAnimating] = useState(false)

  // Show widget after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsButtonVisible(true)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const toggleWidget = () => {
    setIsAnimating(true)
    setIsOpen(!isOpen)
    setTimeout(() => setIsAnimating(false), 300)
  }

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hi ${companyName}, I visited your website and would like to know more about your services.`,
    )
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsOpen(false)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Widget */}
      {isOpen && (
        <div
          className={`bg-white rounded-2xl shadow-2xl mb-4 w-80 overflow-hidden transition-all duration-300 ${
            isAnimating ? "scale-95 opacity-70" : "scale-100 opacity-100"
          }`}
          style={{
            border: "2px solid #3767D9",
            boxShadow: "0 10px 25px -5px rgba(55, 103, 217, 0.3)",
          }}
        >
          {/* Widget Header */}
          <div className="bg-gradient-to-r from-brand-400 to-brand-500 p-4 flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-3">
                <img
                  src="/images/ganpati-logo.png"
                  alt="Ganpati Consultancy"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              </div>
              <div>
                <h3 className="text-white font-medium">{companyName}</h3>
                <p className="text-brand-100 text-xs">Typically replies within an hour</p>
              </div>
            </div>
            <button onClick={handleClose} className="text-white hover:bg-brand-500 rounded-full p-1">
              <X size={18} />
            </button>
          </div>

          {/* Widget Body */}
          <div className="p-4 bg-gray-50">
            <div className="bg-white rounded-lg p-3 shadow-sm mb-4 relative">
              <div className="absolute left-0 top-2 w-2 h-2 bg-white transform rotate-45 -translate-x-1"></div>
              <p className="text-gray-800">{welcomeMessage}</p>
            </div>
          </div>

          {/* Widget Footer */}
          <div className="p-4 border-t border-gray-100">
            <Button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center gap-2 py-5"
            >
              <MessageSquare size={18} />
              Chat with us
              <ChevronRight size={18} />
            </Button>
            <div className="mt-3 text-center">
              <p className="text-xs text-gray-500 flex items-center justify-center">
                <Sprout size={15} className="text-green-500 mr-1" />
                <span className="text-gray-500 italic">Powered by</span>
                <a
                  href="https://codeclue.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 text-[#00B5CE] flex items-center font-bold"
                >
                  <span>Code</span> <span className="text-[#FF8D1A] ml-1">Clue</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Chat Button */}
      {isButtonVisible && (
        <button
          onClick={toggleWidget}
          className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
            isOpen ? "bg-red-500 hover:bg-red-600" : "bg-brand-400 hover:bg-brand-500"
          }`}
        >
          {isOpen ? (
            <X size={24} className="text-white" />
          ) : (
            <>
              <div className="absolute inset-0 rounded-full bg-brand-300 animate-ping opacity-60"></div>
              <MessageSquare size={24} className="text-white relative z-10" />
            </>
          )}
        </button>
      )}

      {/* Collapsed Button */}
      {isOpen && (
        <button
          onClick={toggleWidget}
          className="mt-2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
        >
          <ChevronDown size={20} className="text-gray-600" />
        </button>
      )}
    </div>
  )
}

function ChevronRight(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}
