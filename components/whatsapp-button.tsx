"use client"

import Image from "next/image"

export function WhatsAppButton() {
  const phoneNumber = "+6283186764833"
  const message = encodeURIComponent("Hello! I'm contacting from your website.")
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
      aria-label="Contact us on WhatsApp"
    >
      <Image
        src="https://res.cloudinary.com/qz5m8bhg/image/upload/v1784313551/wa_wtdnqv.png"
        alt="WhatsApp"
        width={24}
        height={24}
        className="w-6 h-6"
      />
      <span className="text-sm font-medium whitespace-nowrap">Contact us on WhatsApp</span>
    </a>
  )
}