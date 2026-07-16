"use client"

import { useEffect, useRef, useState } from "react"

interface ScrollBlurTextProps {
  text: string
  className?: string
  startBlur?: number
  endBlur?: number
}

export function ScrollBlurText({ text, className = "", startBlur = 0, endBlur = 0 }: ScrollBlurTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  const words = text.split(" ")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <h2 ref={containerRef} className={className}>
      {words.map((word, index) => {
        const delay = index * 0.1
        const opacity = isVisible ? 1 : 0
        const transform = isVisible ? "translateY(0)" : "translateY(20px)"

        return (
          <span
            key={index}
            style={{
              opacity,
              transform,
              display: "inline-block",
              transition: `opacity 0.5s ease-out ${delay}s, transform 0.5s ease-out ${delay}s`,
            }}
          >
            {word}
            {index < words.length - 1 ? "\u00A0" : ""}
          </span>
        )
      })}
    </h2>
  )
}
