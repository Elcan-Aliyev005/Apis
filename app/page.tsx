"use client"
import { GridBackground } from "@/components/ui/grid-background"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
// import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect"
import { MovingBorder } from "@/components/ui/moving-border"
import { HoverEffect } from "@/components/ui/card-hover-effect"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Sparkles } from "@/components/ui/sparkles"
import { Pizza, Package, ShoppingCart, Users, FileText, Store, CreditCard, Star, Heart, Coffee } from "lucide-react"

const apis = [
  {
    title: "Pizza API (ready)",
    description:
      "Pizza məhsulları üçün Mock API kolleksiyası.",
    link: "/api/pizza",
    icon: <Pizza className="h-6 w-6 text-white" />,
    endpoints: 2,
  },
  {
    title: "Product API (not ready)",
    description:
      "Ümumi məhsul idarəetməsi və kataloq API-si. Inventar izləmə, kateqoriya idarəetməsi və axtarış funksiyaları.",
    link: "/api/product",
    icon: <Package className="h-6 w-6 text-white" />,
    endpoints: 15,
  },
  {
    title: "E-commerce API (not ready)",
    description:
      "Tam e-ticarət həlli üçün API kolleksiyası. Səbət idarəetməsi, checkout prosesi və ödəniş inteqrasiyası.",
    link: "/api/ecommerce",
    icon: <ShoppingCart className="h-6 w-6 text-white" />,
    endpoints: 25,
  },
  {
    title: "User API (not ready)",
    description: "İstifadəçi idarəetməsi və autentifikasiya API-si. JWT token, profil idarəetməsi və icazə sistemi.",
    link: "/api/user",
    icon: <Users className="h-6 w-6 text-white" />,
    endpoints: 10,
  },
  {
    title: "Order API (not ready)",
    description: "Sifariş idarəetməsi və izləmə API-si. Real-time status yeniləmələri və sifariş tarixçəsi.",
    link: "/api/order",
    icon: <FileText className="h-6 w-6 text-white" />,
    endpoints: 18,
  },
  {
    title: "Restaurant API (not ready)",
    description:
      "Restoran və menyu idarəetməsi API-si. Restoran profili, menyu yeniləmələri və əlçatanlıq idarəetməsi.",
    link: "/api/restaurant",
    icon: <Store className="h-6 w-6 text-white" />,
    endpoints: 14,
  },
  {
    title: "Payment API (not ready)",
    description: "Ödəniş emalı və maliyyə əməliyyatları API-si. Təhlükəsiz ödəniş prosesi və maliyyə hesabatları.",
    link: "/api/payment",
    icon: <CreditCard className="h-6 w-6 text-white" />,
    endpoints: 8,
  },
  {
    title: "Review API (not ready)",
    description: "Rəy və reytinq sistemi API-si. İstifadəçi rəyləri, reytinq hesablaması və moderasiya alətləri.",
    link: "/api/review",
    icon: <Star className="h-6 w-6 text-white" />,
    endpoints: 6,
  },
]



export default function HomePage() {
  return (
    <div className="relative w-full">
      {/* Theme toggle in top right corner */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <GridBackground className="min-h-screen">
        <div className="relative z-20 max-w-7xl mx-auto px-6">
          <div className="mt-20 text-center">
            <div className="bg-white/[0.8] dark:bg-black/[0.8] backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-neutral-200 dark:border-white/[0.2]">
          
              <TextGenerateEffect
                words="Elcan Əliyev"
                className="text-4xl font-bold text-center text-black dark:text-white mb-2"
              />
              <TextGenerateEffect
                words="Backend development üçün hazır API kolleksiyaları. Hər birinin nümunə kodları mövcuddur."
                className="text-xl text-center text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto mb-12"
              />
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "REST API",
                  "JSON Response",
                  "Authentication",
                  "Error Handling",
                  "Real-time Updates",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-full text-sm border border-neutral-200 dark:border-neutral-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div id="apis" className="max-w-7xl mx-auto">
            <HoverEffect items={apis} />
          </div>


          {/* Footer Credit */}

        </div>
      </GridBackground>
    </div>
  )
}
