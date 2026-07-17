"use client"

import { useState, useEffect, useMemo } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, ChevronLeft, ChevronRight, Search, X } from "lucide-react"
import { ScrollBlurText } from "@/components/scroll-blur-text"
import { ProductModal } from "@/components/product-modal"

interface Product {
  slug: string
  name: string
  description: string
  image: string
  tag: string
  details: string
  specifications: {
    [key: string]: string
  }
}

const products: Product[] = [
  {
    slug: "premium-rice",
    name: "Premium Rice",
    description: "High-quality aromatic and non-aromatic rice varieties including Basmati, Jasmine, and IR64, sourced from fertile Indonesian paddies.",
    image: "/images/product-equilibrium.png",
    tag: "Grains",
    details: "Our premium rice selection includes some of the finest varieties grown in Indonesia's fertile paddies. From the aromatic Basmati to the fragrant Jasmine rice and the versatile IR64, we ensure each grain meets international quality standards. Our rice is carefully harvested, processed, and packaged to preserve its natural aroma, texture, and nutritional value.",
    specifications: {
      origin: "Indonesia",
      varieties: "Basmati, Jasmine, IR64",
      packaging: "25kg, 50kg, bulk",
      shelfLife: "12-24 months",
      certification: "ISO 22000, HACCP",
    },
  },
  {
    slug: "yellow-corn",
    name: "Yellow Corn",
    description: "Premium yellow corn suitable for animal feed and industrial processing, meeting international quality standards.",
    image: "/images/product-serenity.png",
    tag: "Grains",
    details: "Our yellow corn is sourced from trusted farms across Indonesia, ensuring consistent quality and nutritional value. Perfect for animal feed, industrial processing, and food manufacturing, our corn meets stringent international standards for moisture content, purity, and grading.",
    specifications: {
      origin: "Indonesia",
      grade: "Grade A, Feed Grade",
      packaging: "Bulk, 50kg bags",
      shelfLife: "12 months",
      certification: "ISO 22000, HACCP",
    },
  },
  {
    slug: "wheat",
    name: "Wheat",
    description: "High-protein wheat varieties sourced from optimal growing regions, ideal for bread-making and pasta production.",
    image: "/images/product-vitality.png",
    tag: "Grains",
    details: "Our wheat selection focuses on high-protein varieties perfect for bread-making, pasta production, and other food processing applications. Sourced from optimal growing regions, our wheat delivers excellent gluten content and consistent quality.",
    specifications: {
      origin: "Indonesia",
      protein: "11-13%",
      packaging: "Bulk, 50kg bags",
      shelfLife: "12 months",
      certification: "ISO 22000, HACCP",
    },
  },
  {
    slug: "black-pepper",
    name: "Black Pepper",
    description: "Premium Indonesian black pepper with bold flavor profile, carefully harvested and processed for global spice markets.",
    image: "/images/product-equilibrium.png",
    tag: "Spices",
    details: "Indonesia is world-renowned for its black pepper, and we offer only the finest grades. Our black pepper is carefully harvested, sun-dried, and processed to preserve its bold flavor and aromatic qualities. Available in various mesh sizes to meet diverse culinary and industrial needs.",
    specifications: {
      origin: "Indonesia (Lampung, Bangka)",
      grade: "550g/l, 600g/l",
      packaging: "25kg bags, bulk",
      shelfLife: "24 months",
      certification: "ISO 22000, HACCP, Organic",
    },
  },
  {
    slug: "nutmeg",
    name: "Nutmeg",
    description: "Aromatic nutmeg from the Spice Islands, available in whole, ground, and essential oil forms for culinary and pharmaceutical use.",
    image: "/images/product-serenity.png",
    tag: "Spices",
    details: "Sourced from the historic Spice Islands of Indonesia, our nutmeg offers exceptional aroma and flavor. Available in whole nuts, ground powder, and essential oil forms, it serves both culinary and pharmaceutical applications worldwide.",
    specifications: {
      origin: "Indonesia (Maluku)",
      forms: "Whole, Ground, Essential Oil",
      packaging: "25kg bags, bulk",
      shelfLife: "24 months",
      certification: "ISO 22000, HACCP",
    },
  },
  {
    slug: "cinnamon",
    name: "Cinnamon",
    description: "High-quality Ceylon cinnamon sticks and powder, known for superior aroma and flavor in international markets.",
    image: "/images/product-vitality.png",
    tag: "Spices",
    details: "Our Ceylon cinnamon, also known as 'true cinnamon,' is sourced from Indonesian farms and processed to preserve its delicate flavor and aromatic properties. Available as whole sticks or fine powder, it's prized by chefs and food manufacturers worldwide.",
    specifications: {
      origin: "Indonesia",
      forms: "Sticks, Powder",
      packaging: "25kg bags, bulk",
      shelfLife: "24 months",
      certification: "ISO 22000, HACCP",
    },
  },
  {
    slug: "cloves",
    name: "Cloves",
    description: "Premium cloves from North Sulawesi, hand-selected for size, color, and oil content for spice traders worldwide.",
    image: "/images/product-equilibrium.png",
    tag: "Spices",
    details: "Our cloves are sourced from the fertile soils of North Sulawesi, where the ideal climate produces cloves with exceptional oil content and aroma. Each clove is hand-selected to ensure only the best quality reaches our clients.",
    specifications: {
      origin: "Indonesia (North Sulawesi)",
      grade: "Premium Grade",
      packaging: "25kg bags, bulk",
      shelfLife: "24 months",
      certification: "ISO 22000, HACCP",
    },
  },
  {
    slug: "vanilla-beans",
    name: "Vanilla Beans",
    description: "Grade A Indonesian vanilla beans with high vanillin content, carefully cured for premium food and fragrance applications.",
    image: "/images/product-serenity.png",
    tag: "Spices",
    details: "Our Grade A vanilla beans are carefully cultivated and cured to achieve high vanillin content and superior flavor. Sourced from sustainable farms in Indonesia, these beans are perfect for premium food products, fragrances, and gourmet applications.",
    specifications: {
      origin: "Indonesia",
      grade: "Grade A",
      length: "15-20cm",
      packaging: "100g, 500g, bulk",
      shelfLife: "24 months",
      certification: "ISO 22000, HACCP, Organic",
    },
  },
  {
    slug: "arabica-coffee",
    name: "Arabica Coffee",
    description: "Premium Arabica coffee beans from highland plantations, offering complex flavor profiles for specialty coffee roasters.",
    image: "/images/product-vitality.png",
    tag: "Beverage Crops",
    details: "Our Arabica coffee beans are grown in the highland regions of Indonesia, where the cool climate and rich volcanic soil produce beans with exceptional flavor complexity. Sourced from sustainable plantations, our Arabica offers notes of chocolate, fruit, and caramel that specialty coffee roasters prize.",
    specifications: {
      origin: "Indonesia (Sumatra, Java, Sulawesi)",
      altitude: "1200-1800m",
      processing: "Washed, Natural, Honey",
      packaging: "60kg bags, bulk",
      shelfLife: "18 months",
      certification: "ISO 22000, HACCP, Organic",
    },
  },
  {
    slug: "robusta-coffee",
    name: "Robusta Coffee",
    description: "High-quality Robusta coffee beans with strong body and bold flavor, perfect for espresso blends and instant coffee production.",
    image: "/images/product-equilibrium.png",
    tag: "Beverage Crops",
    details: "Our Robusta coffee beans are known for their strong body, bold flavor, and high caffeine content. Grown in the lowland regions of Indonesia, these beans are ideal for espresso blends, instant coffee, and as a flavor enhancer in coffee mixes.",
    specifications: {
      origin: "Indonesia (Java, Sumatra)",
      altitude: "400-800m",
      caffeine: "2.2-2.7%",
      packaging: "60kg bags, bulk",
      shelfLife: "18 months",
      certification: "ISO 22000, HACCP",
    },
  },
  {
    slug: "cocoa-beans",
    name: "Cocoa Beans",
    description: "Fine flavor cocoa beans from Sulawesi and Sumatra, fermented and dried to international standards for chocolate manufacturers.",
    image: "/images/product-serenity.png",
    tag: "Beverage Crops",
    details: "Our fine flavor cocoa beans from Sulawesi and Sumatra are carefully fermented and dried to bring out exceptional flavor profiles. Known for their fruity and floral notes, these beans are highly sought after by premium chocolate manufacturers worldwide.",
    specifications: {
      origin: "Indonesia (Sulawesi, Sumatra)",
      flavor: "Fine Flavor",
      fermentation: "5-7 days",
      packaging: "60kg bags, bulk",
      shelfLife: "24 months",
      certification: "ISO 22000, HACCP, Organic",
    },
  },
  {
    slug: "crude-palm-oil",
    name: "Crude Palm Oil",
    description: "Premium crude palm oil (CPO) from sustainable plantations, meeting global food industry specifications and standards.",
    image: "/images/product-vitality.png",
    tag: "Oils",
    details: "Our crude palm oil is sourced from sustainable plantations in Indonesia, meeting stringent international quality standards. Rich in carotenoids and natural antioxidants, our CPO is ideal for food processing, oleochemical applications, and as a feedstock for refined palm oil production.",
    specifications: {
      origin: "Indonesia (Sumatra, Borneo)",
      freeFattyAcid: "Max 5%",
      moisture: "Max 0.5%",
      packaging: "Bulk, tankers",
      shelfLife: "12 months",
      certification: "RSPO, ISO 22000, HACCP",
    },
  },
  {
    slug: "refined-palm-oil",
    name: "Refined Palm Oil",
    description: "Highly refined palm oil for food processing, cosmetics, and industrial applications with consistent quality specifications.",
    image: "/images/product-equilibrium.png",
    tag: "Oils",
    details: "Our refined palm oil undergoes a meticulous refining process to achieve exceptional clarity, stability, and purity. Suitable for a wide range of applications including food processing, cosmetics, soaps, and industrial uses, our refined palm oil meets the highest quality standards.",
    specifications: {
      origin: "Indonesia",
      iodineValue: "50-55",
      slipPoint: "24-30°C",
      packaging: "Bulk, drums, IBC tanks",
      shelfLife: "18 months",
      certification: "RSPO, ISO 22000, HACCP",
    },
  },
  {
    slug: "coconut-oil",
    name: "Coconut Oil",
    description: "Virgin and refined coconut oil from Indonesian coconuts, suitable for food, cosmetic, and pharmaceutical industries.",
    image: "/images/product-serenity.png",
    tag: "Oils",
    details: "Our coconut oil is extracted from fresh, high-quality coconuts sourced from Indonesian plantations. Available in virgin and refined forms, our coconut oil is perfect for food preparation, cosmetic formulations, and pharmaceutical applications. Known for its mild flavor and excellent stability.",
    specifications: {
      origin: "Indonesia",
      types: "Virgin, Refined",
      acidity: "Virgin: Max 0.8%, Refined: Max 0.1%",
      packaging: "Bulk, drums, bottles",
      shelfLife: "24 months",
      certification: "ISO 22000, HACCP, Organic",
    },
  },
  {
    slug: "natural-rubber",
    name: "Natural Rubber",
    description: "SIR20 and SIR3CV grade natural rubber, processed to meet global tire and manufacturing industry specifications.",
    image: "/images/product-vitality.png",
    tag: "Industrial",
    details: "Our natural rubber is produced from high-quality latex sourced from Indonesian rubber plantations. Available in SIR20 and SIR3CV grades, our rubber meets the stringent requirements of the global tire and manufacturing industries, offering excellent elasticity, tensile strength, and durability.",
    specifications: {
      origin: "Indonesia (Sumatra, Kalimantan)",
      grades: "SIR20, SIR3CV",
      dirtContent: "Max 0.05%",
      packaging: "Bales, 33.3kg each",
      shelfLife: "36 months",
      certification: "ISO 9001, ISO 14001",
    },
  },
  {
    slug: "cashew-nuts",
    name: "Cashew Nuts",
    description: "Premium raw and roasted cashew nuts in various grades, from whole nuts to splits and pieces for food processing.",
    image: "/images/product-equilibrium.png",
    tag: "Nuts",
    details: "Our cashew nuts are sourced from the best plantations in Indonesia, known for producing nuts with excellent flavor and texture. Available in various grades from whole nuts to splits and pieces, our cashews are perfect for snacking, baking, and food processing applications.",
    specifications: {
      origin: "Indonesia (Sulawesi, Kalimantan)",
      grades: "W180, W210, W240, splits, pieces",
      packaging: "25kg bags, bulk",
      shelfLife: "12 months",
      certification: "ISO 22000, HACCP, Organic",
    },
  },
  {
    slug: "macadamia-nuts",
    name: "Macadamia Nuts",
    description: "Premium macadamia nuts from Indonesian plantations, available in various roast levels and packaging options.",
    image: "/images/product-serenity.png",
    tag: "Nuts",
    details: "Our macadamia nuts are grown in the ideal climate conditions of Indonesia, producing nuts with rich, buttery flavor and creamy texture. Available in various roast levels and packaging options, our macadamias are perfect for premium snack markets, confectionery, and bakery applications.",
    specifications: {
      origin: "Indonesia",
      varieties: "Macadamia integrifolia, Macadamia tetraphylla",
      roast: "Light, Medium, Dark, Raw",
      packaging: "25kg bags, bulk",
      shelfLife: "12 months",
      certification: "ISO 22000, HACCP, Organic",
    },
  },
  {
    slug: "mangoes",
    name: "Mangoes",
    description: "Premium Indonesian mango varieties including Arumanis and Gedong Gincu, exported fresh to global markets.",
    image: "/images/product-vitality.png",
    tag: "Fruits",
    details: "Our premium mangoes are sourced from the best growing regions in Indonesia, offering varieties like Arumanis and Gedong Gincu known for their exceptional sweetness and flavor. Carefully harvested and packed, our mangoes are exported fresh to markets across Asia, the Middle East, and Europe.",
    specifications: {
      origin: "Indonesia (East Java, West Java)",
      varieties: "Arumanis, Gedong Gincu, Manalagi",
      packaging: "4kg boxes, bulk",
      shelfLife: "14-21 days (refrigerated)",
      certification: "ISO 22000, HACCP, GlobalG.A.P.",
    },
  },
  {
    slug: "pineapples",
    name: "Pineapples",
    description: "Sweet and juicy Indonesian pineapples, available fresh or processed for international food retailers and processors.",
    image: "/images/product-equilibrium.png",
    tag: "Fruits",
    details: "Our pineapples are grown in the tropical climate of Indonesia, producing fruit with exceptional sweetness and juiciness. Available fresh or processed (canned, dried, or juiced), our pineapples meet the quality standards of international food retailers and processors worldwide.",
    specifications: {
      origin: "Indonesia (Java, Sumatra)",
      varieties: "Queen, Smooth Cayenne",
      brix: "12-14°Brix",
      packaging: "Fresh, canned, dried",
      shelfLife: "14 days (fresh), 24 months (processed)",
      certification: "ISO 22000, HACCP, GlobalG.A.P.",
    },
  },
  {
    slug: "bananas",
    name: "Bananas",
    description: "Premium Cavendish and local banana varieties, carefully harvested and packed for export to Asian and Middle Eastern markets.",
    image: "/images/product-serenity.png",
    tag: "Fruits",
    details: "Our bananas are sourced from sustainable plantations across Indonesia, offering both Cavendish for international markets and local varieties for regional trade. Carefully harvested at the optimal ripeness stage and packed using modern techniques, our bananas maintain freshness during transit.",
    specifications: {
      origin: "Indonesia (Java, Sumatra, Sulawesi)",
      varieties: "Cavendish, Local Varieties",
      size: "Medium to Large",
      packaging: "13kg, 18kg boxes",
      shelfLife: "14-21 days",
      certification: "ISO 22000, HACCP, GlobalG.A.P.",
    },
  },
  {
    slug: "durian",
    name: "Durian",
    description: "Premium Musang King and other durian varieties, frozen or fresh, for specialty Asian food markets worldwide.",
    image: "/images/product-vitality.png",
    tag: "Fruits",
    details: "Our durian selection includes the premium Musang King variety, known as the 'king of fruits' for its exceptional flavor and creamy texture. Available fresh or frozen, our durians are carefully selected and processed to maintain their unique taste and quality for export to specialty Asian food markets.",
    specifications: {
      origin: "Indonesia (Bengkulu, Java)",
      varieties: "Musang King, D24, D101",
      packaging: "Fresh, frozen (whole or pulp)",
      shelfLife: "3-5 days (fresh), 12 months (frozen)",
      certification: "ISO 22000, HACCP",
    },
  },
  {
    slug: "green-tea",
    name: "Green Tea",
    description: "High-quality Indonesian green tea leaves, carefully processed to preserve antioxidants and fresh flavor for global tea markets.",
    image: "/images/product-equilibrium.png",
    tag: "Beverages",
    details: "Our green tea is sourced from high-altitude tea gardens in Indonesia, where the cool climate and misty conditions produce leaves with exceptional antioxidant properties. Using traditional processing methods, we preserve the fresh flavor and health benefits that make our green tea highly sought after in global markets.",
    specifications: {
      origin: "Indonesia (West Java, North Sumatra)",
      type: "Sencha, Dragon Well, Jasmine",
      grade: "Premium, Standard",
      packaging: "25kg bags, bulk",
      shelfLife: "24 months",
      certification: "ISO 22000, HACCP, Organic",
    },
  },
  {
    slug: "black-tea",
    name: "Black Tea",
    description: "Premium Indonesian black tea with rich flavor profile, suitable for breakfast blends and specialty tea applications.",
    image: "/images/product-serenity.png",
    tag: "Beverages",
    details: "Our black tea is produced using traditional methods that bring out a rich, full-bodied flavor with malty notes. Grown in the highlands of Indonesia, our black tea is perfect for breakfast blends, specialty tea applications, and as a base for flavored teas. Available in various grades to meet diverse market needs.",
    specifications: {
      origin: "Indonesia (West Java, North Sumatra)",
      type: "CTC, Orthodox",
      grade: "BOP, BOPF, OP, FP",
      packaging: "25kg bags, bulk",
      shelfLife: "24 months",
      certification: "ISO 22000, HACCP, Organic",
    },
  },
  {
    slug: "tuna",
    name: "Tuna",
    description: "Premium skipjack and yellowfin tuna, freshly caught and processed for sashimi, canned, and frozen seafood markets.",
    image: "/images/product-vitality.png",
    tag: "Seafood",
    details: "Our tuna is sourced from the rich fishing grounds of the Indonesian archipelago, known for producing some of the finest tuna in the world. Using state-of-the-art processing facilities, we ensure that our skipjack and yellowfin tuna maintains the highest quality standards for sashimi, canned, and frozen markets.",
    specifications: {
      origin: "Indonesia (Indian Ocean, Pacific Ocean)",
      species: "Skipjack, Yellowfin",
      grade: "Sashimi, Canned, Frozen",
      packaging: "Frozen blocks, canned",
      shelfLife: "24 months (frozen), 36 months (canned)",
      certification: "ISO 22000, HACCP, BRC, IFS",
    },
  },
  {
    slug: "shrimp",
    name: "Shrimp",
    description: "High-quality vannamei and black tiger shrimp, farmed and processed to meet international food safety standards.",
    image: "/images/product-equilibrium.png",
    tag: "Seafood",
    details: "Our shrimp are sourced from certified sustainable aquaculture farms across Indonesia. We offer both vannamei (white shrimp) and black tiger shrimp, processed using modern facilities that meet international food safety standards. Available in various forms including head-on, headless, peeled, and breaded.",
    specifications: {
      origin: "Indonesia (Java, Sumatra, Kalimantan)",
      species: "Vannamei, Black Tiger",
      size: "U10, U15, 16/20, 21/25, 26/30",
      packaging: "IQF, Block Frozen",
      shelfLife: "24 months (frozen)",
      certification: "ISO 22000, HACCP, BRC, GlobalG.A.P.",
    },
  },
  {
    slug: "squid",
    name: "Squid",
    description: "Fresh and frozen squid products, cleaned and processed for restaurant chains and seafood processors worldwide.",
    image: "/images/product-serenity.png",
    tag: "Seafood",
    details: "Our squid is sourced from the pristine waters of the Indonesian archipelago and processed using advanced techniques to maintain optimal quality. Available in various forms including whole, cleaned, tubes, and rings, our squid meets the demanding standards of restaurant chains and seafood processors worldwide.",
    specifications: {
      origin: "Indonesia",
      species: "Loligo, Arrow Squid",
      forms: "Whole, Cleaned, Tubes, Rings",
      packaging: "IQF, Block Frozen",
      shelfLife: "24 months (frozen)",
      certification: "ISO 22000, HACCP, BRC",
    },
  },
  {
    slug: "palm-sugar",
    name: "Palm Sugar",
    description: "Organic palm sugar and coconut sugar, traditionally processed and certified for health food and specialty markets.",
    image: "/images/product-vitality.png",
    tag: "Sweeteners",
    details: "Our palm sugar is traditionally produced by smallholder farmers in Indonesia using time-honored methods. Made from the sap of palm trees, our organic palm sugar has a rich caramel flavor and low glycemic index, making it popular in health food markets and for specialty culinary applications.",
    specifications: {
      origin: "Indonesia (Java, Bali)",
      type: "Palm Sugar, Coconut Sugar",
      color: "Light to Dark Brown",
      packaging: "500g, 1kg, bulk",
      shelfLife: "24 months",
      certification: "ISO 22000, HACCP, Organic, Fair Trade",
    },
  },
  {
    slug: "coconut-sugar",
    name: "Coconut Sugar",
    description: "Low glycemic index coconut sugar, sustainably produced from Indonesian coconut palms for health-conscious consumers.",
    image: "/images/product-equilibrium.png",
    tag: "Sweeteners",
    details: "Our coconut sugar is produced from the sap of coconut palm flowers, offering a natural sweetener with a low glycemic index. Sustainably harvested and minimally processed, our coconut sugar retains its natural minerals and has a rich, caramel-like flavor that appeals to health-conscious consumers worldwide.",
    specifications: {
      origin: "Indonesia (Java, Bali, Lombok)",
      glycemicIndex: "35",
      color: "Light to Dark Brown",
      packaging: "500g, 1kg, bulk",
      shelfLife: "24 months",
      certification: "ISO 22000, HACCP, Organic, Fair Trade",
    },
  },
  {
    slug: "turmeric",
    name: "Turmeric",
    description: "Premium Indonesian turmeric with high curcumin content, available as dried rhizomes, powder, and extracts for food and nutraceutical industries.",
    image: "/images/product-serenity.png",
    tag: "Spices",
    details: "Our turmeric is sourced from the best growing regions in Indonesia, known for producing rhizomes with exceptionally high curcumin content. Available as dried rhizomes, fine powder, or standardized extracts, our turmeric is used in food processing, nutraceuticals, and traditional medicine applications worldwide.",
    specifications: {
      origin: "Indonesia (Java, Sumatra)",
      curcumin: "5-7%",
      forms: "Rhizomes, Powder, Extracts",
      packaging: "25kg bags, bulk",
      shelfLife: "24 months",
      certification: "ISO 22000, HACCP, Organic",
    },
  },
  {
    slug: "ginger",
    name: "Ginger",
    description: "High-quality Indonesian ginger, fresh or dried, known for its strong flavor and medicinal properties in international markets.",
    image: "/images/product-vitality.png",
    tag: "Spices",
    details: "Our ginger is grown in the volcanic soils of Indonesia, producing rhizomes with strong flavor and high gingerol content. Available fresh or dried, in whole or ground form, our ginger is prized for its culinary and medicinal properties. Sourced from sustainable farms and processed to maintain maximum potency.",
    specifications: {
      origin: "Indonesia (Java, Sumatra)",
      forms: "Fresh, Dried, Powder, Oil",
      packaging: "25kg bags, bulk",
      shelfLife: "12 months (fresh), 24 months (dried)",
      certification: "ISO 22000, HACCP, Organic",
    },
  },
  {
    slug: "galangal",
    name: "Galangal",
    description: "Fresh and dried galangal rhizomes, essential for Southeast Asian cuisine and increasingly popular in global gourmet cooking.",
    image: "/images/product-equilibrium.png",
    tag: "Spices",
    details: "Our galangal is sourced from traditional farms in Indonesia, where the ideal growing conditions produce rhizomes with the distinctive citrusy, piney flavor that makes galangal essential in Southeast Asian cuisine. Available fresh or dried, our galangal meets the quality demands of gourmet restaurants and food manufacturers worldwide.",
    specifications: {
      origin: "Indonesia (Java, Sumatra)",
      forms: "Fresh, Dried, Powder",
      packaging: "10kg, 25kg bags, bulk",
      shelfLife: "12 months (fresh), 24 months (dried)",
      certification: "ISO 22000, HACCP, Organic",
    },
  },
  {
    slug: "lemongrass",
    name: "Lemongrass",
    description: "Premium lemongrass stalks and powder, sourced from sustainable farms for culinary, tea, and essential oil production.",
    image: "/images/product-serenity.png",
    tag: "Herbs",
    details: "Our lemongrass is grown in sustainable farms across Indonesia, producing stalks with excellent citral content and refreshing aroma. Available as fresh stalks, dried leaves, or fine powder, our lemongrass is used in culinary applications, herbal teas, and essential oil production worldwide.",
    specifications: {
      origin: "Indonesia (Java, Bali)",
      forms: "Fresh Stalks, Dried, Powder, Oil",
      packaging: "5kg, 10kg, 25kg bags, bulk",
      shelfLife: "14 days (fresh), 24 months (dried)",
      certification: "ISO 22000, HACCP, Organic",
    },
  },
  {
    slug: "kaffir-lime-leaves",
    name: "Kaffir Lime Leaves",
    description: "Fresh and dried kaffir lime leaves, essential for authentic Southeast Asian cuisine and increasingly demanded by global restaurants.",
    image: "/images/product-vitality.png",
    tag: "Herbs",
    details: "Our kaffir lime leaves are sourced from dedicated plantations in Indonesia, where the ideal climate produces leaves with intense citrus aroma. Essential for authentic Southeast Asian cuisine, our fresh and dried kaffir lime leaves are increasingly demanded by restaurants and food manufacturers worldwide seeking authentic flavors.",
    specifications: {
      origin: "Indonesia (Java, Bali)",
      forms: "Fresh, Dried, Frozen",
      packaging: "100g, 500g, bulk",
      shelfLife: "7 days (fresh), 24 months (dried/frozen)",
      certification: "ISO 22000, HACCP, Organic",
    },
  },
  {
    slug: "long-pepper",
    name: "Long Pepper",
    description: "Traditional Indonesian long pepper with complex spicy flavor, gaining popularity in gourmet and fusion cuisine worldwide.",
    image: "/images/product-equilibrium.png",
    tag: "Spices",
    details: "Our long pepper is a traditional Indonesian spice with a complex, pungent flavor that is more aromatic than black pepper. Gaining popularity in gourmet and fusion cuisine worldwide, our long pepper is carefully harvested and processed to preserve its unique characteristics and essential oil content.",
    specifications: {
      origin: "Indonesia (Java, Sumatra)",
      form: "Dried spikes",
      grade: "Premium",
      packaging: "25kg bags, bulk",
      shelfLife: "24 months",
      certification: "ISO 22000, HACCP, Organic",
    },
  },
  {
    slug: "cardamom",
    name: "Cardamom",
    description: "Premium Indonesian cardamom pods with intense aroma, suitable for culinary, beverage, and pharmaceutical applications.",
    image: "/images/product-serenity.png",
    tag: "Spices",
    details: "Our cardamom pods are sourced from the highlands of Indonesia, where the cool mountain air produces pods with exceptional aroma and flavor. Known as the 'queen of spices,' our cardamom is used in culinary applications, premium coffee blends, and pharmaceutical products worldwide.",
    specifications: {
      origin: "Indonesia (Sumatra, Java)",
      grade: "8mm, 7mm",
      packaging: "25kg bags, bulk",
      shelfLife: "24 months",
      certification: "ISO 22000, HACCP, Organic",
    },
  },
  {
    slug: "candlenuts",
    name: "Candlenuts",
    description: "High-quality candlenuts (kemiri) for Indonesian cuisine and industrial applications, carefully processed and packed.",
    image: "/images/product-vitality.png",
    tag: "Nuts",
    details: "Our candlenuts (kemiri) are sourced from sustainable plantations across Indonesia. With their high oil content and mild, nutty flavor, they are essential in Indonesian cuisine and increasingly used in gourmet cooking worldwide. Our candlenuts are carefully processed and packed to maintain freshness and quality.",
    specifications: {
      origin: "Indonesia (Java, Sumatra, Kalimantan)",
      grade: "Premium, Standard",
      packaging: "25kg bags, bulk",
      shelfLife: "12 months",
      certification: "ISO 22000, HACCP",
    },
  },
  {
    slug: "areca-nuts",
    name: "Areca Nuts",
    description: "Premium areca nuts from Indonesian plantations, processed according to international quality and safety standards.",
    image: "/images/product-equilibrium.png",
    tag: "Nuts",
    details: "Our areca nuts are sourced from established plantations in Indonesia and processed according to international quality and safety standards. Available in various grades and forms, our areca nuts meet the requirements of international markets for both traditional and modern applications.",
    specifications: {
      origin: "Indonesia (Sumatra, Kalimantan, Sulawesi)",
      grade: "Premium, Standard",
      packaging: "25kg bags, bulk",
      shelfLife: "12 months",
      certification: "ISO 22000, HACCP",
    },
  },
  {
    slug: "tempeh",
    name: "Tempeh",
    description: "Traditional Indonesian tempeh, fermented soybean product with high protein content, available fresh or frozen for export.",
    image: "/images/product-serenity.png",
    tag: "Specialty Foods",
    details: "Our tempeh is a traditional Indonesian fermented soybean product, made using time-honored methods and high-quality soybeans. With its high protein content, firm texture, and nutty flavor, our tempeh is available fresh or frozen for export to health food markets and specialty food retailers worldwide.",
    specifications: {
      origin: "Indonesia (Java, Bali)",
      type: "Fresh, Frozen",
      packaging: "200g, 500g, bulk",
      shelfLife: "7 days (fresh), 12 months (frozen)",
      certification: "ISO 22000, HACCP, Organic",
    },
  },
  {
    slug: "tapioca",
    name: "Tapioca",
    description: "Premium tapioca starch and pearls from Indonesian cassava, used in food processing, textile, and paper industries.",
    image: "/images/product-vitality.png",
    tag: "Starch Products",
    details: "Our tapioca products are made from high-quality cassava sourced from Indonesian farms. We produce tapioca starch, pearls, and flakes that meet international standards for food processing, textile sizing, paper manufacturing, and other industrial applications. Our products are known for their purity, consistency, and excellent functional properties.",
    specifications: {
      origin: "Indonesia (Java, Sumatra)",
      products: "Starch, Pearls, Flakes",
      mesh: "Customizable",
      packaging: "25kg bags, bulk",
      shelfLife: "24 months",
      certification: "ISO 22000, HACCP, Halal, Organic",
    },
  },
]

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [searchQuery, setSearchQuery] = useState("")

  // Filter products based on search query
  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return products
    const query = searchQuery.toLowerCase().trim()
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.tag.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query),
    )
  }, [searchQuery])

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width < 768) {
        setItemsPerPage(10)
      } else if (width < 1024) {
        setItemsPerPage(12)
      } else {
        setItemsPerPage(15)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Reset to page 1 when items per page or search changes
  useEffect(() => {
    const maxPage = Math.ceil(filteredProducts.length / itemsPerPage)
    if (currentPage > maxPage) {
      setCurrentPage(maxPage)
    }
  }, [itemsPerPage, currentPage, filteredProducts.length])

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentProducts = filteredProducts.slice(startIndex, endIndex)

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  // Get visible page numbers (show 3 at a time)
  const getVisiblePages = () => {
    const pages: (number | 'ellipsis')[] = []
    const start = Math.max(1, currentPage - 1)
    const end = Math.min(totalPages, currentPage + 1)

    // Adjust to always show 3 pages when possible
    if (currentPage === 1) {
      const pagesToShow = Math.min(3, totalPages)
      for (let i = 1; i <= pagesToShow; i++) {
        pages.push(i)
      }
    } else if (currentPage === totalPages) {
      const startPage = Math.max(1, totalPages - 2)
      for (let i = startPage; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      pages.push(currentPage - 1, currentPage, currentPage + 1)
    }

    return pages
  }

  const visiblePages = getVisiblePages()

  return (
    <main className="min-h-screen bg-background pt-15">
      <Header />
      <section className="py-16 sm:py-24 lg:py-32 bg-muted/30">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-secondary font-medium mb-4">
              Our Products
            </p>
            <ScrollBlurText
              text="Premium agricultural commodities"
              className="font-serif text-2xl sm:text-3xl text-foreground text-balance mb-6 md:text-7xl font-light"
            />
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Each product is carefully sourced, processed, and quality-checked to meet the highest international standards for global trade.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-10 lg:mb-14">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products by name, category, or description..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  setCurrentPage(1)
                }}
                className="w-full pl-12 pr-12 py-3.5 sm:py-4 bg-background border border-border/50 rounded-2xl text-base sm:text-base text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all duration-300 shadow-sm shadow-primary/5"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            {searchQuery && (
              <p className="text-sm text-muted-foreground mt-3 text-center">
                {filteredProducts.length === 0
                  ? "No products found matching your search."
                  : `Showing ${filteredProducts.length} product${filteredProducts.length !== 1 ? "s" : ""} matching "${searchQuery}"`}
              </p>
            )}
          </div>

          {filteredProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3 md:gap-4 lg:gap-8">
                {currentProducts.map((product) => (
                  <div
                    key={product.slug}
                    className="group block bg-card rounded-3xl overflow-hidden border border-border/50 shadow-lg shadow-primary/5 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 cursor-pointer"
                    onClick={() => setSelectedProduct(product)}
                  >
                    {/* Image */}
                    <div className="relative aspect-[4/5] overflow-hidden bg-muted z-10">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <span className="absolute top-2 left-2 sm:top-3 sm:left-3 lg:top-4 lg:left-4 bg-background/90 backdrop-blur-sm text-foreground text-[10px] sm:text-xs font-medium px-2 py-1 sm:px-3 sm:py-1.5 rounded-full z-10">
                        {product.tag}
                      </span>
                    </div>
                    {/* Content */}
                    <div className="p-3 sm:p-4 lg:p-8">
                      <h3 className="font-serif text-foreground mb-1 sm:mb-2 lg:mb-3 text-sm sm:text-base lg:text-3xl font-normal leading-tight">{product.name}</h3>
                      <p className="text-muted-foreground leading-snug mb-2 sm:mb-3 lg:mb-6 text-xs sm:text-sm lg:text-base line-clamp-2 sm:line-clamp-3 lg:line-clamp-none">{product.description}</p>
                      <span className="inline-flex items-center text-primary hover:text-primary/80 text-xs sm:text-sm font-medium group/btn">
                        Discover
                        <ArrowRight className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-10 sm:mt-12 lg:mt-16">
                  {/* Previous Button */}
                  <button
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full transition-all duration-300 ${
                      currentPage === 1
                        ? 'text-muted-foreground/30 cursor-not-allowed'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`}
                    aria-label="Previous page"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>

                  {/* Page Numbers */}
                  {visiblePages.map((page) => (
                    <button
                      key={page}
                      onClick={() => goToPage(page as number)}
                      className={`flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full text-sm font-medium transition-all duration-300 ${
                        currentPage === page
                          ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                      }`}
                    >
                      {page}
                    </button>
                  ))}

                  {/* Next Button */}
                  <button
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full transition-all duration-300 ${
                      currentPage === totalPages
                        ? 'text-muted-foreground/30 cursor-not-allowed'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`}
                    aria-label="Next page"
                  >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                <Search className="w-6 h-6 text-muted-foreground" />
              </div>
              <h3 className="font-serif text-xl font-medium text-foreground mb-2">No products found</h3>
              <p className="text-muted-foreground">Try adjusting your search terms or browse all products.</p>
            </div>
          )}
        </div>
      </section>
      <Footer />

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </main>
  )
}