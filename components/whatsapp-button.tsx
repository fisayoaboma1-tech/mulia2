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
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
      aria-label="Contact us on WhatsApp"
    >
      <Image
        src="https://res.cloudinary.com/qz5m8bhg/image/upload/v1784313551/wa_wtdnqv.png"
        alt="WhatsApp"
        width={28}
        height={28}
        className="w-7 h-7"
      />
    </a>
  )
}