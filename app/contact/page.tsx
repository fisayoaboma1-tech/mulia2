import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ScrollBlurText } from "@/components/scroll-blur-text"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background pt-15">
      <Header />
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-secondary font-medium mb-4">
              Get In Touch
            </p>
            <ScrollBlurText
              text="Let's start a conversation"
              className="font-serif text-2xl sm:text-3xl text-foreground text-balance mb-6 md:text-7xl font-light"
            />
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Have a question or ready to discuss your agricultural commodity needs? We'd love to hear from you.
            </p>
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-card rounded-3xl p-5 sm:p-8 md:p-12 border border-border/50 shadow-lg shadow-primary/5">
              <form className="space-y-4 sm:space-y-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-2xl border border-border/50 bg-background text-foreground text-sm sm:text-base placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-2xl border border-border/50 bg-background text-foreground text-sm sm:text-base placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-2xl border border-border/50 bg-background text-foreground text-sm sm:text-base placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="+62 812 3456 7890"
                  />
                </div>

                {/* Purpose of Inquiry */}
                <div>
                  <label htmlFor="purpose" className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                    Purpose of Inquiry
                  </label>
                  <select
                    id="purpose"
                    name="purpose"
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-2xl border border-border/50 bg-background text-foreground text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  >
                    <option value="">Select a service...</option>
                    <option value="sourcing">Sourcing & Procurement</option>
                    <option value="quality">Quality Assurance</option>
                    <option value="processing">Processing & Packaging</option>
                    <option value="distribution">Global Distribution</option>
                    <option value="documentation">Documentation & Compliance</option>
                    <option value="intelligence">Market Intelligence</option>
                    <option value="custom">Custom Solutions</option>
                    <option value="risk">Risk Management</option>
                    <option value="training">Training & Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Description */}
                <div>
                  <label htmlFor="description" className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                    Description <span className="text-muted-foreground">(max 250 words)</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={5}
                    required
                    maxLength={1500}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-2xl border border-border/50 bg-background text-foreground text-sm sm:text-base placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your needs, requirements, or any questions you have..."
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    <span id="wordCount">0</span> / 250 words
                  </p>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full py-4 sm:py-6 text-sm sm:text-base group"
                >
                  Send Message
                  <svg
                    className="ml-2 w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="mt-12 sm:mt-16 grid sm:grid-cols-3 gap-6 sm:gap-8 text-center">
              <div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-serif text-base sm:text-lg font-medium text-foreground mb-1 sm:mb-2">Email</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">info@kanematsu-trading.com</p>
              </div>

              <div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-serif text-base sm:text-lg font-medium text-foreground mb-1 sm:mb-2">Phone</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">+62 21 1234 5678</p>
              </div>

              <div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-serif text-base sm:text-lg font-medium text-foreground mb-1 sm:mb-2">Location</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Jakarta, Indonesia</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}