"use client"

import { useState, useEffect, useCallback } from "react"
import { X } from "lucide-react"

interface LegalModalProps {
  type: "legal-notice" | "privacy-policy" | "terms-of-sale" | null
  isOpen: boolean
  onClose: () => void
}

const content: Record<string, { title: string; sections: { heading: string; paragraphs: string[] }[] }> = {
  "legal-notice": {
    title: "Legal Notice",
    sections: [
      {
        heading: "Company Information",
        paragraphs: [
          "PT Kanematsu Trading Indonesia is a legally registered agricultural trading and supply company operating under the laws of the Republic of Indonesia.",
          "Our registered office is located at Atria Sudirman Building, 15th Floor, Jl. Jend. Sudirman Kav. 33A, Central Jakarta, Indonesia.",
          "All commercial activities conducted by PT Kanematsu Trading Indonesia are subject to Indonesian commercial law and international trade regulations.",
        ],
      },
      {
        heading: "Intellectual Property",
        paragraphs: [
          "All content, materials, trademarks, and intellectual property displayed on this website are the exclusive property of PT Kanematsu Trading Indonesia unless otherwise stated.",
          "No part of this website may be reproduced, distributed, or transmitted in any form without prior written permission from PT Kanematsu Trading Indonesia.",
          "Unauthorized use of any materials may violate copyright, trademark, and other applicable laws and may result in legal action.",
        ],
      },
      {
        heading: "Disclaimer",
        paragraphs: [
          "The information provided on this website is for general informational purposes only and does not constitute professional or legal advice.",
          "PT Kanematsu Trading Indonesia makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information contained on this website.",
          "Any reliance you place on such information is strictly at your own risk. We disclaim all liability for any loss or damage arising from the use of this website or its content.",
        ],
      },
      {
        heading: "Limitation of Liability",
        paragraphs: [
          "PT Kanematsu Trading Indonesia shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to, use of, or inability to use this website.",
          "This limitation applies regardless of whether the alleged liability is based on contract, tort, negligence, strict liability, or any other legal theory.",
          "Some jurisdictions do not allow the exclusion of certain warranties or limitations of liability, so the above limitations may not apply to you to the full extent.",
        ],
      },
      {
        heading: "Governing Law",
        paragraphs: [
          "These terms and conditions are governed by and construed in accordance with the laws of the Republic of Indonesia.",
          "Any disputes relating to these terms and conditions shall be subject to the exclusive jurisdiction of the courts of Central Jakarta, Indonesia.",
          "PT Kanematsu Trading Indonesia reserves the right to make changes to this legal notice at any time without prior notice.",
        ],
      },
    ],
  },
  "privacy-policy": {
    title: "Privacy Policy",
    sections: [
      {
        heading: "Information We Collect",
        paragraphs: [
          "PT Kanematsu Trading Indonesia collects personal information that you voluntarily provide to us when you fill out contact forms, subscribe to newsletters, or communicate with us via email or phone.",
          "The types of information we may collect include your name, email address, phone number, company name, job title, and any other information you choose to provide.",
          "We also automatically collect certain technical information when you visit our website, including your IP address, browser type, operating system, referring URLs, and browsing behavior.",
        ],
      },
      {
        heading: "How We Use Your Information",
        paragraphs: [
          "We use the information we collect to respond to your inquiries, provide information about our products and services, process transactions, and improve our website and customer service.",
          "Your information may also be used to send periodic emails regarding our products, services, and industry updates that may be of interest to you.",
          "We may use aggregated, anonymized data for analytical purposes to understand trends and improve our business operations.",
        ],
      },
      {
        heading: "Data Protection and Security",
        paragraphs: [
          "PT Kanematsu Trading Indonesia implements appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.",
          "We use secure server technologies, encryption protocols, and access controls to safeguard your information in accordance with industry best practices.",
          "Despite our best efforts, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security of your data.",
        ],
      },
      {
        heading: "Third-Party Disclosure",
        paragraphs: [
          "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as necessary to provide our services or as required by law.",
          "We may share your information with trusted third-party service providers who assist us in operating our website, conducting our business, or servicing you, provided they agree to keep your information confidential.",
          "We may disclose your information when required by law, to enforce our policies, or to protect the rights, property, or safety of PT Kanematsu Trading Indonesia or others.",
        ],
      },
      {
        heading: "Your Rights",
        paragraphs: [
          "You have the right to access, update, or delete your personal information held by us at any time. You may also object to the processing of your data or request data portability.",
          "You have the right to withdraw your consent at any time where we rely on your consent to process your personal information.",
          "To exercise any of these rights, please contact us at info@kanematsu-trading.com. We will respond to your request within the timeframe required by applicable law.",
        ],
      },
    ],
  },
  "terms-of-sale": {
    title: "Terms of Sale",
    sections: [
      {
        heading: "General Terms",
        paragraphs: [
          "These Terms of Sale govern the sale of agricultural commodities and products by PT Kanematsu Trading Indonesia to its customers. By placing an order, the customer agrees to be bound by these terms.",
          "All sales are subject to these terms unless otherwise agreed in writing by an authorized representative of PT Kanematsu Trading Indonesia.",
          "These terms may be modified from time to time, and the latest version will apply to each order placed.",
        ],
      },
      {
        heading: "Pricing and Payment",
        paragraphs: [
          "All prices quoted by PT Kanematsu Trading Indonesia are in US Dollars (USD) unless otherwise specified. Prices are subject to change without prior notice based on market conditions.",
          "Payment terms are agreed upon at the time of order confirmation. Standard payment terms include letter of credit (L/C), telegraphic transfer (T/T), or other methods as mutually agreed.",
          "The customer is responsible for all banking charges, transfer fees, and any applicable taxes or duties associated with the transaction.",
        ],
      },
      {
        heading: "Shipping and Delivery",
        paragraphs: [
          "Delivery terms are governed by Incoterms 2020 as agreed upon in the sales contract. Common terms include FOB, CIF, and CFR, depending on the destination and product type.",
          "PT Kanematsu Trading Indonesia will make every effort to meet agreed delivery schedules, but shall not be liable for delays caused by force majeure, shipping line schedules, port congestion, or other factors beyond our reasonable control.",
          "Risk of loss or damage to products passes to the customer in accordance with the agreed Incoterms. Insurance coverage is the responsibility of the customer unless otherwise agreed.",
        ],
      },
      {
        heading: "Quality and Inspection",
        paragraphs: [
          "All products meet the quality specifications agreed upon in the sales contract. PT Kanematsu Trading Indonesia provides certificates of analysis and quality documentation as required.",
          "The customer has the right to inspect products at the port of loading prior to shipment. Inspection costs are borne by the customer unless otherwise agreed.",
          "Claims regarding product quality must be submitted in writing within 14 days of arrival at the destination port, accompanied by independent surveyor reports.",
        ],
      },
      {
        heading: "Cancellation and Returns",
        paragraphs: [
          "Order cancellations must be submitted in writing and are subject to review by PT Kanematsu Trading Indonesia. Cancellation fees may apply depending on the stage of processing.",
          "Returns are accepted only in cases where products do not meet agreed specifications and a valid claim has been approved. Return shipping costs are borne by the customer.",
          "PT Kanematsu Trading Indonesia reserves the right to withhold refunds until products are inspected and found to comply with the terms of the claim.",
        ],
      },
    ],
  },
}

export function LegalModal({ type, isOpen, onClose }: LegalModalProps) {
  const [isAnimatingIn, setIsAnimatingIn] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => {
        setIsAnimatingIn(true)
      })
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose()
      }
    }
    if (isOpen) {
      window.addEventListener("keydown", handleEscape)
    }
    return () => window.removeEventListener("keydown", handleEscape)
  }, [isOpen])

  const handleClose = useCallback(() => {
    setIsClosing(true)
    setIsAnimatingIn(false)
    setTimeout(() => {
      onClose()
      setIsClosing(false)
    }, 500)
  }, [onClose])

  if (!isOpen || !type) return null

  const showContent = isAnimatingIn && !isClosing
  const data = content[type]

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-500 ease-out ${
        isClosing ? "pointer-events-none" : ""
      }`}
    >
      {/* Backdrop with blur */}
      <div
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-all duration-500 ease-out ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleClose}
      />

      {/* Modal Content */}
      <div
        className={`relative bg-background rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden transition-all duration-500 ease-out ${
          showContent
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-[0.96] translate-y-4"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 bg-background/90 backdrop-blur-sm rounded-full p-2 hover:bg-background transition-all duration-300 hover:scale-110"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[90vh] p-5 sm:p-8 md:p-12 lg:p-16">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6 sm:mb-8 lg:mb-12">
            {data.title}
          </h2>

          {data.sections.map((section, i) => (
            <div key={i} className="mb-6 sm:mb-8 lg:mb-12 last:mb-0">
              <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-medium text-foreground mb-3 sm:mb-4 pb-2 border-b border-border/30">
                {section.heading}
              </h3>
              {section.paragraphs.map((p, j) => (
                <p key={j} className="text-muted-foreground leading-relaxed mb-3 sm:mb-4 last:mb-0 text-sm sm:text-base md:text-lg">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}