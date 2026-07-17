"use client"

import { useState, useEffect, useCallback, useMemo } from "react"
import { X, Calendar, User, ArrowRight, ChevronLeft } from "lucide-react"

interface BlogModalProps {
  isOpen: boolean
  onClose: () => void
}

interface BlogPost {
  title: string
  excerpt: string
  content: string
  longExcerpt: string
  date: string
  author: string
  category: string
  image: string
  slug: string
  published: boolean
}

const blogPostsData: BlogPost[] = [
  {
    title: "Indonesia's Position in Global Agricultural Trade: A 2026 & Beyond Outlook",
    excerpt: "Explore how Indonesia continues to strengthen its role as a key player in the global agricultural commodity market, with insights on emerging trends and opportunities for international buyers looking to source premium commodities from Southeast Asia's largest economy.",
    content: "Indonesia has long been recognized as a cornerstone of global agricultural trade, and as we move through 2026 and beyond, its position continues to strengthen. With over 17,000 islands spanning the equator, Indonesia possesses a unique combination of fertile volcanic soils, tropical climate, and abundant rainfall that makes it ideally suited for producing a vast array of agricultural commodities.\n\nThe country is currently the world's largest producer of palm oil, the second-largest producer of rubber, and a major supplier of coffee, cocoa, spices, and tropical fruits. Indonesian agricultural exports have seen consistent year-over-year growth, driven by increasing global demand for sustainably sourced commodities and Indonesia's commitment to improving agricultural practices and infrastructure.\n\nEmerging trends include the rise of organic certification, digital traceability systems, and direct trade relationships that benefit both farmers and international buyers. For businesses looking to diversify their supply chains and secure high-quality agricultural products, Indonesia represents an increasingly attractive and reliable partner in global trade.",
    longExcerpt: "Indonesia has long been recognized as a cornerstone of global agricultural trade, and as we move through 2026 and beyond, its position continues to strengthen. With over 17,000 islands spanning the equator, Indonesia possesses a unique combination of fertile volcanic soils, tropical climate, and abundant rainfall that makes it ideally suited for producing a vast array of agricultural commodities. The country is currently the world's largest producer of palm oil, the second-largest producer of rubber, and a major supplier of coffee, cocoa, spices, and tropical fruits. Indonesian agricultural exports have seen consistent year-over-year growth, driven by increasing global demand for sustainably sourced commodities and Indonesia's commitment to improving agricultural practices and infrastructure. Emerging trends include the rise of organic certification, digital traceability systems, and direct trade relationships that benefit both farmers and international buyers. For businesses looking to diversify their supply chains and secure high-quality agricultural products, Indonesia represents an increasingly attractive and reliable partner in global trade.",
    date: "September 15, 2026",
    author: "PT Kanematsu Trading Indonesia",
    category: "Market Insights",
    image: "/images/product-equilibrium.png",
    slug: "indonesia-agricultural-trade-2026",
    published: false,
  },
  {
    title: "Sustainable Sourcing: How We Partner Directly with Indonesian Farmers for Premium Quality",
    excerpt: "Learn about our commitment to sustainable agricultural practices and how we work directly with local farming communities to ensure premium quality while supporting rural economic development and environmental conservation.",
    content: "At PT Kanematsu Trading Indonesia, sustainability is not just a buzzword — it is a fundamental principle that guides every aspect of our operations. Our direct partnership model with Indonesian farmers ensures that we can trace every product back to its source, guaranteeing authenticity, quality, and ethical production practices.\n\nWe work with over 50 partner farms across the Indonesian archipelago, from the coffee highlands of Sumatra to the spice gardens of Maluku. These partnerships are built on mutual respect, fair pricing, and a shared commitment to sustainable agriculture that preserves the land for future generations.\n\nThrough our programs, we provide training on sustainable farming techniques, access to premium markets, and support for community development initiatives including schools, healthcare, and infrastructure. By choosing to work with PT Kanematsu Trading Indonesia, international buyers are not just sourcing high-quality commodities — they are contributing to a more equitable and sustainable global food system that benefits farmers, communities, and consumers alike.",
    longExcerpt: "At PT Kanematsu Trading Indonesia, sustainability is not just a buzzword — it is a fundamental principle that guides every aspect of our operations. Our direct partnership model with Indonesian farmers ensures that we can trace every product back to its source, guaranteeing authenticity, quality, and ethical production practices. We work with over 50 partner farms across the Indonesian archipelago, from the coffee highlands of Sumatra to the spice gardens of Maluku. These partnerships are built on mutual respect, fair pricing, and a shared commitment to sustainable agriculture that preserves the land for future generations. Through our programs, we provide training on sustainable farming techniques, access to premium markets, and support for community development initiatives including schools, healthcare, and infrastructure. By choosing to work with PT Kanematsu Trading Indonesia, international buyers are not just sourcing high-quality commodities — they are contributing to a more equitable and sustainable global food system that benefits farmers, communities, and consumers alike.",
    date: "October 28, 2026",
    author: "PT Kanematsu Trading Indonesia",
    category: "Sustainability",
    image: "/images/product-serenity.png",
    slug: "sustainable-sourcing-partnerships",
    published: false,
  },
  {
    title: "Quality Control in Agricultural Commodity Trading: Our Multi-Stage Assurance Process",
    excerpt: "A comprehensive look at our rigorous multi-stage quality assurance process, from initial farm-level inspection to final laboratory testing before global shipment, ensuring every product meets the highest international standards.",
    content: "Quality assurance is the bedrock of our operations at PT Kanematsu Trading Indonesia. Every product that bears our name has passed through a rigorous multi-stage inspection and testing process designed to meet and exceed international quality standards.\n\nOur quality control process begins at the source, with regular farm-level inspections to ensure proper cultivation practices, optimal harvest timing, and initial sorting and grading. We work closely with farmers to implement Good Agricultural Practices (GAP) and maintain detailed records of growing conditions, inputs, and harvest dates.\n\nOnce harvested, products undergo processing at our partner facilities where they are cleaned, sorted, graded, and packaged according to international specifications. Before shipment, samples from each batch are sent to accredited laboratories for comprehensive testing including moisture content, purity analysis, contaminant screening, and organoleptic evaluation. Only after all quality parameters are verified do we authorize shipment, accompanied by full documentation including certificates of analysis, origin, and quality assurance reports for our buyers' peace of mind.",
    longExcerpt: "Quality assurance is the bedrock of our operations at PT Kanematsu Trading Indonesia. Every product that bears our name has passed through a rigorous multi-stage inspection and testing process designed to meet and exceed international quality standards. Our quality control process begins at the source, with regular farm-level inspections to ensure proper cultivation practices, optimal harvest timing, and initial sorting and grading. We work closely with farmers to implement Good Agricultural Practices (GAP) and maintain detailed records of growing conditions, inputs, and harvest dates. Once harvested, products undergo processing at our partner facilities where they are cleaned, sorted, graded, and packaged according to international specifications. Before shipment, samples from each batch are sent to accredited laboratories for comprehensive testing including moisture content, purity analysis, contaminant screening, and organoleptic evaluation. Only after all quality parameters are verified do we authorize shipment, accompanied by full documentation including certificates of analysis, origin, and quality assurance reports for our buyers' peace of mind.",
    date: "November 10, 2026",
    author: "PT Kanematsu Trading Indonesia",
    category: "Quality",
    image: "/images/product-vitality.png",
    slug: "quality-control-commodity-trading",
    published: false,
  },
  {
    title: "The Spice Islands: Indonesia's Rich Heritage in Global Cuisine and Modern Export Markets",
    excerpt: "Discover the rich historical significance and modern commercial importance of Indonesia's legendary spice trade, from the world-renowned nutmeg and cloves of Maluku to premium pepper, cinnamon, and vanilla that define global cuisine.",
    content: "Long before the modern era of global trade, the Spice Islands of Indonesia — known historically as the Maluku Islands — were the most sought-after source of exotic spices in the world. These small islands were the only source of nutmeg and cloves for centuries, driving exploration, trade routes, and even wars among European powers.\n\nToday, Indonesia remains a powerhouse in the global spice market. The country is one of the world's largest producers and exporters of nutmeg, cloves, cinnamon, pepper, vanilla, and turmeric. Indonesian spices are prized for their intense aroma, rich flavor profiles, and high essential oil content, making them indispensable in culinary traditions worldwide.\n\nAt PT Kanematsu Trading Indonesia, we source our spices directly from the regions where they have been cultivated for generations, ensuring that traditional knowledge and modern quality standards come together to deliver exceptional products. From the black pepper of Lampung to the nutmeg of Maluku and the vanilla of Java, each spice tells a story of heritage, craftsmanship, and the unique terroir of the Indonesian archipelago.",
    longExcerpt: "Long before the modern era of global trade, the Spice Islands of Indonesia — known historically as the Maluku Islands — were the most sought-after source of exotic spices in the world. These small islands were the only source of nutmeg and cloves for centuries, driving exploration, trade routes, and even wars among European powers. Today, Indonesia remains a powerhouse in the global spice market. The country is one of the world's largest producers and exporters of nutmeg, cloves, cinnamon, pepper, vanilla, and turmeric. Indonesian spices are prized for their intense aroma, rich flavor profiles, and high essential oil content, making them indispensable in culinary traditions worldwide. At PT Kanematsu Trading Indonesia, we source our spices directly from the regions where they have been cultivated for generations, ensuring that traditional knowledge and modern quality standards come together to deliver exceptional products. From the black pepper of Lampung to the nutmeg of Maluku and the vanilla of Java, each spice tells a story of heritage, craftsmanship, and the unique terroir of the Indonesian archipelago.",
    date: "January 25, 2026",
    author: "PT Kanematsu Trading Indonesia",
    category: "Products",
    image: "/images/product-equilibrium.png",
    slug: "spice-islands-heritage",
    published: true,
  },
  {
    title: "Navigating Global Commodity Markets: Expert Insights for International Buyers in 2026 and Beyond",
    excerpt: "Expert analysis on global agricultural commodity market trends, pricing dynamics, supply chain considerations, and strategic insights for international buyers looking to optimize their procurement strategies.",
    content: "The global agricultural commodity market continues to evolve rapidly, shaped by factors ranging from climate change and geopolitical dynamics to shifting consumer preferences and technological innovation. For international buyers, understanding these trends is essential for making informed procurement decisions and building resilient supply chains.\n\nIn this comprehensive analysis, we examine the key factors influencing commodity markets in 2026 and beyond, including the growing demand for sustainably sourced products, the impact of digital transformation on supply chain transparency, and the strategic importance of diversifying sourcing origins.\n\nWe also explore the role of Indonesian commodities in meeting global demand, with particular focus on palm oil, rubber, coffee, cocoa, and spices. Whether you are a food manufacturer, trader, or retailer, understanding these market dynamics will help you navigate volatility, seize opportunities, and build lasting partnerships with reliable suppliers like PT Kanematsu Trading Indonesia who are committed to quality, sustainability, and long-term value creation.",
    longExcerpt: "The global agricultural commodity market continues to evolve rapidly, shaped by factors ranging from climate change and geopolitical dynamics to shifting consumer preferences and technological innovation. For international buyers, understanding these trends is essential for making informed procurement decisions and building resilient supply chains. In this comprehensive analysis, we examine the key factors influencing commodity markets in 2026 and beyond, including the growing demand for sustainably sourced products, the impact of digital transformation on supply chain transparency, and the strategic importance of diversifying sourcing origins. We also explore the role of Indonesian commodities in meeting global demand, with particular focus on palm oil, rubber, coffee, cocoa, and spices. Whether you are a food manufacturer, trader, or retailer, understanding these market dynamics will help you navigate volatility, seize opportunities, and build lasting partnerships with reliable suppliers like PT Kanematsu Trading Indonesia who are committed to quality, sustainability, and long-term value creation.",
    date: "December 5, 2026",
    author: "PT Kanematsu Trading Indonesia",
    category: "Market Insights",
    image: "/images/product-serenity.png",
    slug: "navigating-global-commodity-markets",
    published: false,
  },
  {
    title: "The Future of Coffee: Why Indonesian Single-Origin Beans Are Taking the World by Storm",
    excerpt: "An in-depth exploration of Indonesia's specialty coffee industry, from the volcanic highlands of Sumatra and Java to the emerging coffee cultures of Sulawesi and Papua, and why roasters worldwide are turning to Indonesian origins.",
    content: "Indonesia's coffee industry is experiencing a renaissance. While the country has long been known as a major producer of robusta coffee used in blends and instant coffee, the spotlight is increasingly turning to Indonesia's remarkable single-origin arabica beans that rival the finest coffees from anywhere in the world.\n\nFrom the legendary Mandheling and Gayo coffees of Sumatra with their full body and earthy, spicy notes, to the bright, fruity coffees of Java and the complex, sweet profiles of Sulawesi Toraja, Indonesian coffee offers an incredible diversity of flavor experiences rooted in the country's unique geography and coffee-growing traditions.\n\nAt PT Kanematsu Trading Indonesia, we work directly with coffee farmers and cooperatives across Sumatra, Java, Sulawesi, and Papua to source the highest quality beans, supporting sustainable farming practices and fair trade principles. Our specialty coffee program includes fully traceable lots with detailed information about origin, altitude, processing method, and flavor profile, giving roasters and buyers the transparency they need to tell compelling stories about the coffees they serve.",
    longExcerpt: "Indonesia's coffee industry is experiencing a renaissance. While the country has long been known as a major producer of robusta coffee used in blends and instant coffee, the spotlight is increasingly turning to Indonesia's remarkable single-origin arabica beans that rival the finest coffees from anywhere in the world. From the legendary Mandheling and Gayo coffees of Sumatra with their full body and earthy, spicy notes, to the bright, fruity coffees of Java and the complex, sweet profiles of Sulawesi Toraja, Indonesian coffee offers an incredible diversity of flavor experiences rooted in the country's unique geography and coffee-growing traditions. At PT Kanematsu Trading Indonesia, we work directly with coffee farmers and cooperatives across Sumatra, Java, Sulawesi, and Papua to source the highest quality beans, supporting sustainable farming practices and fair trade principles. Our specialty coffee program includes fully traceable lots with detailed information about origin, altitude, processing method, and flavor profile, giving roasters and buyers the transparency they need to tell compelling stories about the coffees they serve.",
    date: "February 20, 2027",
    author: "PT Kanematsu Trading Indonesia",
    category: "Products",
    image: "/images/product-vitality.png",
    slug: "future-of-indonesian-coffee",
    published: false,
  },
  {
    title: "Palm Oil and Sustainability: Indonesia's Leadership in Responsible Production",
    excerpt: "An in-depth look at Indonesia's palm oil industry, its commitment to sustainability through RSPO certification and ISPO standards, and how responsible sourcing supports both economic development and environmental conservation.",
    content: "As the world's largest producer of palm oil, Indonesia plays a critical role in meeting global demand for this versatile and essential commodity. Palm oil is used in everything from food products and cosmetics to biofuels and industrial applications, making it one of the most important agricultural commodities in international trade.\n\nIn recent years, Indonesia has made significant strides in improving the sustainability of its palm oil industry. Through initiatives like the Indonesian Sustainable Palm Oil (ISPO) certification system and widespread adoption of Roundtable on Sustainable Palm Oil (RSPO) standards, Indonesian producers are demonstrating their commitment to responsible production that balances economic growth with environmental protection and social responsibility.\n\nAt PT Kanematsu Trading Indonesia, we source our palm oil exclusively from plantations that meet the highest sustainability standards, ensuring full traceability from plantation to port. Our commitment to responsible sourcing means that buyers can trust that the palm oil they purchase through us supports sustainable agriculture, protects biodiversity, and contributes to the well-being of farming communities across Indonesia.",
    longExcerpt: "As the world's largest producer of palm oil, Indonesia plays a critical role in meeting global demand for this versatile and essential commodity. Palm oil is used in everything from food products and cosmetics to biofuels and industrial applications, making it one of the most important agricultural commodities in international trade. In recent years, Indonesia has made significant strides in improving the sustainability of its palm oil industry. Through initiatives like the Indonesian Sustainable Palm Oil (ISPO) certification system and widespread adoption of Roundtable on Sustainable Palm Oil (RSPO) standards, Indonesian producers are demonstrating their commitment to responsible production that balances economic growth with environmental protection and social responsibility. At PT Kanematsu Trading Indonesia, we source our palm oil exclusively from plantations that meet the highest sustainability standards, ensuring full traceability from plantation to port. Our commitment to responsible sourcing means that buyers can trust that the palm oil they purchase through us supports sustainable agriculture, protects biodiversity, and contributes to the well-being of farming communities across Indonesia.",
    date: "March 8, 2027",
    author: "PT Kanematsu Trading Indonesia",
    category: "Sustainability",
    image: "/images/product-equilibrium.png",
    slug: "palm-oil-sustainability-indonesia",
    published: false,
  },
  {
    title: "From Farm to Table: The Complete Journey of Indonesian Agricultural Exports",
    excerpt: "Follow the remarkable journey of Indonesian agricultural commodities from smallholder farms across the archipelago to international markets, highlighting the people, processes, and partnerships that make global trade possible.",
    content: "Every agricultural product that arrives at ports around the world begins its journey in the hands of Indonesian farmers — hardworking men and women who cultivate the land with generations of knowledge passed down through families. Understanding this journey is essential for appreciating the quality, care, and expertise that goes into every shipment.\n\nFrom the initial planting and cultivation to harvesting, processing, quality control, packaging, and finally shipping, each stage of the journey requires careful attention to detail and a commitment to excellence that defines Indonesian agricultural exports.\n\nAt PT Kanematsu Trading Indonesia, we are proud to facilitate this journey, connecting the dedication of Indonesian farmers with the needs of international buyers. Our comprehensive supply chain management ensures that products move efficiently from farm to port while maintaining the highest standards of quality and freshness. By choosing Indonesian commodities, buyers are not just getting exceptional products — they are becoming part of a story of tradition, innovation, and global connection that spans thousands of islands and millions of people.",
    longExcerpt: "Every agricultural product that arrives at ports around the world begins its journey in the hands of Indonesian farmers — hardworking men and women who cultivate the land with generations of knowledge passed down through families. Understanding this journey is essential for appreciating the quality, care, and expertise that goes into every shipment. From the initial planting and cultivation to harvesting, processing, quality control, packaging, and finally shipping, each stage of the journey requires careful attention to detail and a commitment to excellence that defines Indonesian agricultural exports. At PT Kanematsu Trading Indonesia, we are proud to facilitate this journey, connecting the dedication of Indonesian farmers with the needs of international buyers. Our comprehensive supply chain management ensures that products move efficiently from farm to port while maintaining the highest standards of quality and freshness. By choosing Indonesian commodities, buyers are not just getting exceptional products — they are becoming part of a story of tradition, innovation, and global connection that spans thousands of islands and millions of people.",
    date: "April 12, 2027",
    author: "PT Kanematsu Trading Indonesia",
    category: "Market Insights",
    image: "/images/product-serenity.png",
    slug: "from-farm-to-table-indonesia",
    published: false,
  },
]

function parseDate(dateStr: string): Date {
  const months: Record<string, number> = {
    January: 0, February: 1, March: 2, April: 3, May: 4, June: 5,
    July: 6, August: 7, September: 8, October: 9, November: 10, December: 11,
  }
  const parts = dateStr.split(" ")
  const month = months[parts[0]] ?? 0
  const day = Number.parseInt(parts[1].replace(",", "")) || 1
  const year = Number.parseInt(parts[2]) || 2026
  return new Date(year, month, day)
}

export function BlogModal({ isOpen, onClose }: BlogModalProps) {
  const [isAnimatingIn, setIsAnimatingIn] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)

  // Sort: furthest future dates first, published/older dates last
  const blogPosts = useMemo(() => {
    return [...blogPostsData].sort((a, b) => {
      const dateA = parseDate(a.date).getTime()
      const dateB = parseDate(b.date).getTime()
      return dateB - dateA
    })
  }, [])

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
        if (selectedPost) {
          setSelectedPost(null)
        } else {
          handleClose()
        }
      }
    }
    if (isOpen) {
      window.addEventListener("keydown", handleEscape)
    }
    return () => window.removeEventListener("keydown", handleEscape)
  }, [isOpen, selectedPost])

  const handleClose = useCallback(() => {
    setIsClosing(true)
    setIsAnimatingIn(false)
    setTimeout(() => {
      onClose()
      setIsClosing(false)
      setSelectedPost(null)
    }, 500)
  }, [onClose])

  const handleCloseDetail = useCallback(() => {
    setSelectedPost(null)
  }, [])

  if (!isOpen) return null

  const showContent = isAnimatingIn && !isClosing

  return (
    <>
      {/* Blog Listing Modal */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-500 ease-out ${
          isClosing ? "pointer-events-none" : ""
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-all duration-500 ease-out ${
            showContent ? "opacity-100" : "opacity-0"
          }`}
          onClick={selectedPost ? handleCloseDetail : handleClose}
        />

        {/* Modal Content */}
        <div
          className={`relative bg-background rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden transition-all duration-500 ease-out ${
            showContent
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-[0.96] translate-y-4"
          }`}
        >
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 bg-background/90 backdrop-blur-sm rounded-full p-2 hover:bg-background transition-all duration-300 hover:scale-110"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="overflow-y-auto max-h-[90vh] p-8 md:p-12 lg:p-16">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4">
              Our Blog
            </h2>
            <p className="text-muted-foreground text-base md:text-lg mb-8 lg:mb-12 max-w-2xl">
              Insights, stories, and updates from PT Kanematsu Trading Indonesia on agricultural commodities, market trends, and sustainable practices.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {blogPosts.map((post) => (
                <div
                  key={post.slug}
                  className="group bg-card rounded-2xl overflow-hidden border border-border/50 shadow-lg shadow-primary/5 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 cursor-pointer"
                  onClick={() => setSelectedPost(post)}
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <span className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm text-foreground text-[10px] font-medium px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-5 lg:p-6">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <User className="w-3 h-3" />
                        {post.author}
                      </span>
                    </div>
                    <h3 className="font-serif text-lg md:text-xl font-medium text-foreground mb-2 leading-tight line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                      {post.longExcerpt}
                    </p>
                    {post.published ? (
                      <span className="inline-flex items-center text-primary hover:text-primary/80 text-sm font-medium group/btn">
                        Read article
                        <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </span>
                    ) : (
                      <span className="inline-flex items-center text-primary hover:text-primary/80 text-sm font-medium group/btn">
                        Coming soon
                        <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Article Detail Modal */}
      {selectedPost && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 transition-all duration-500 ease-out"
        >
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={handleCloseDetail}
          />
          <div
            className="relative bg-background rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden transition-all duration-500 ease-out opacity-100 scale-100 translate-y-0"
          >
            <button
              onClick={handleCloseDetail}
              className="absolute top-4 right-4 z-10 bg-background/90 backdrop-blur-sm rounded-full p-2 hover:bg-background transition-all duration-300 hover:scale-110"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="overflow-y-auto max-h-[90vh]">
              {/* Article Hero Image */}
              <div className="relative aspect-[21/9] overflow-hidden bg-muted">
                <img
                  src={selectedPost.image || "/placeholder.svg"}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium px-3 py-1.5 rounded-full">
                  {selectedPost.category}
                </span>
              </div>

              {/* Article Content */}
              <div className="p-8 md:p-12 lg:p-16">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {selectedPost.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <User className="w-4 h-4" />
                    {selectedPost.author}
                  </span>
                </div>

                <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium text-foreground mb-6 leading-tight">
                  {selectedPost.title}
                </h2>

                <div className="prose prose-lg max-w-none">
                  {selectedPost.content.split("\n").map((paragraph, i) => (
                    paragraph.trim() ? (
                      <p key={i} className="text-muted-foreground leading-relaxed mb-5 text-base md:text-lg">
                        {paragraph}
                      </p>
                    ) : null
                  ))}
                </div>

                {selectedPost.published && (
                  <div className="mt-8 pt-8 border-t border-border/30">
                    <p className="text-sm text-muted-foreground italic">
                      This article was published on {selectedPost.date} by {selectedPost.author}. For more information about our products and services, please contact us.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}