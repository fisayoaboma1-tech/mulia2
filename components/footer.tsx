import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

const footerLinks = {
  produits: [
    { label: "Premium Grains", href: "#" },
    { label: "Spices & Herbs", href: "#" },
    { label: "Coffee & Cocoa", href: "#" },
    { label: "All products", href: "#" },
  ],
  entreprise: [
    { label: "Our story", href: "#" },
    { label: "Process", href: "#science" },
  ],
  ressources: [
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center">
                <span className="text-foreground font-serif text-sm font-medium">K</span>
              </div>
              <span className="font-serif text-xl font-medium text-background">PT Kanematsu Trading Indonesia</span>
            </Link>
            <p className="text-background/70 leading-relaxed mb-6 max-w-sm">
              Agricultural trading and supply company connecting Indonesian producers with global markets through reliable sourcing, strict quality control, and efficient logistics.
            </p>
            <div className="space-y-3 text-sm text-background/70">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 shrink-0" />
                <a href="mailto:info@kanematsu-trading.com" className="hover:text-background transition-colors">info@kanematsu-trading.com</a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1 shrink-0" />
                <div className="flex flex-col gap-2">
                  <a href="tel:+62318521230" className="hover:text-background transition-colors">+62-031 8521230</a>
                  <a href="tel:+6281686892024" className="hover:text-background transition-colors">+62 816-868-92024</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <div className="flex flex-col">
                  <span>Atria Sudirman Building, 15th Floor</span>
                  <span>Jl. Jend. Sudirman Kav. 33A, Central Jakarta</span>
                </div>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-medium text-background mb-4">Products</h4>
            <ul className="space-y-3">
              {footerLinks.produits.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-background/70 hover:text-background transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-background mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.entreprise.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-background/70 hover:text-background transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-background mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.ressources.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-background/70 hover:text-background transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">© 2026 PT Kanematsu Trading Indonesia. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-background/50">
            <Link href="#" className="hover:text-background transition-colors">
              Legal notice
            </Link>
            <Link href="#" className="hover:text-background transition-colors">
              Privacy policy
            </Link>
            <Link href="#" className="hover:text-background transition-colors">
              Terms of sale
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}