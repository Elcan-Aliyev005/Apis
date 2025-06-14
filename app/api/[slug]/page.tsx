import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import Link from "next/link"
import { ArrowLeft, Copy, Play } from "lucide-react"

const apiData = {
  pizza: {
    name: "Pizza API",
    description: "Pizzalar üçün API",
    baseUrl: "https://elcan-aliyev-api-collection.up.railway.app/api",
    endpoints: [
      {
        method: "GET",
        path: "/pizzas",
        description: "Bütün pizza məhsullarını əldə et",
        response: 
`{
  "pizzas": [
              {
                "_id": "684cbcb35633701d52b64f79",
                "name": "Çiken Ranç",
                "description": "Ranç Sousu, Qril Toyuğu, Pomidor, Mozzarella",
                "image": "https://order.papajohns.az/images/menu/PJ%20Azerbaijan/336x224_a875457644d14093cd4bc0a47f647576.jpg",
                "sizes": [
                           {
                             "size": "mini",
                             "diameter": 17,
                             "price": 6,
                           }
                         ]
               },
               {
                 "_id": "684cbcb35633701d52b64f7e",
                 "name": "Marqarita",
                 "description": "Pizza sousu, Ekstra Mozzarella, Pomidor, Oreqano",
                 "image": "https://order.papajohns.az/images/menu/PJ%20Azerbaijan/336x224_f8da8b4b68e91c8a697aed2baf03f041.jpg",
                 "sizes": [
                            {
                              "size": "orta",
                              "diameter": 30,
                              "price": 10,
                            },
                            {
                              "size": "boyuk",
                              "diameter": 35,
                              "price": 12,
                            }
                          ]
                },
                {...},
                {...}
             ]

}`,
      },
      {
        method: "GET",
        path: "/pizzas/{_id}",
        description: "Müəyyən pizza məlumatlarını əldə et",
        response: 
        `{
  "_id": "684cbcb35633701d52b64f79",
  "name": "Çiken Ranç",
  "description": "Ranç Sousu, Qril Toyuğu, Pomidor, Mozzarella",
  "image": "https://order.papajohns.az/images/menu/PJ%20Azerbaijan/336x224_a875457644d14093cd4bc0a47f647576.jpg",
  "sizes": [
             {
               "size": "mini",
               "diameter": 17,
               "price": 6,
             }
           ]
},`,
      },
//             {
//         method: "POST",
//         path: "/pizzas",
//         description: "Yeni pizza əlavə et",
//         response: `{
//   "id": 2,
//   "name": "Pepperoni",
//   "price": 15.99,
//   "created_at": "2024-01-15T10:30:00Z"
// }`,
//       },
    ],
  },
  product: {
    name: "Product API",
    description: "Ümumi məhsul idarəetməsi və kataloq API-si",
    baseUrl: "https://api.example.com/v1/products",
    endpoints: [
      {
        method: "GET",
        path: "/products",
        description: "Bütün məhsulları əldə et",
        response: `{
  "products": [
    {
      "id": 1,
      "name": "Laptop",
      "price": 999.99,
      "category": "Electronics",
      "stock": 50
    }
  ]
}`,
      },
      {
        method: "POST",
        path: "/products",
        description: "Yeni məhsul əlavə et",
        response: `{
  "id": 2,
  "name": "Phone",
  "price": 699.99,
  "created_at": "2024-01-15T10:30:00Z"
}`,
      },
    ],
  },
  ecommerce: {
    name: "E-commerce API",
    description: "Tam e-ticarət həlli üçün API koleksiyası",
    baseUrl: "https://api.example.com/v1/ecommerce",
    endpoints: [
      {
        method: "GET",
        path: "/cart",
        description: "İstifadəçinin səbətini əldə et",
        response: `{
  "cart": {
    "id": 1,
    "items": [
      {
        "product_id": 1,
        "quantity": 2,
        "price": 29.98
      }
    ],
    "total": 29.98
  }
}`,
      },
      {
        method: "POST",
        path: "/checkout",
        description: "Sifarişi tamamla",
        response: `{
  "order_id": 12345,
  "status": "confirmed",
  "total": 29.98
}`,
      },
    ],
  },
  user: {
    name: "User API",
    description: "İstifadəçi idarəetməsi və autentifikasiya API-si",
    baseUrl: "https://api.example.com/v1/users",
    endpoints: [
      {
        method: "POST",
        path: "/register",
        description: "Yeni istifadəçi qeydiyyatı",
        response: `{
  "user": {
    "id": 1,
    "email": "user@example.com",
    "name": "John Doe"
  },
  "token": "jwt_token_here"
}`,
      },
      {
        method: "POST",
        path: "/login",
        description: "İstifadəçi girişi",
        response: `{
  "user": {
    "id": 1,
    "email": "user@example.com"
  },
  "token": "jwt_token_here"
}`,
      },
    ],
  },
  order: {
    name: "Order API",
    description: "Sifariş idarəetməsi və izləmə API-si",
    baseUrl: "https://api.example.com/v1/orders",
    endpoints: [
      {
        method: "GET",
        path: "/orders",
        description: "Bütün sifarişləri əldə et",
        response: `{
  "orders": [
    {
      "id": 1,
      "status": "pending",
      "total": 45.99,
      "created_at": "2024-01-15T10:30:00Z"
    }
  ]
}`,
      },
      {
        method: "PUT",
        path: "/orders/{id}/status",
        description: "Sifariş statusunu yenilə",
        response: `{
  "id": 1,
  "status": "completed",
  "updated_at": "2024-01-15T11:30:00Z"
}`,
      },
    ],
  },
  restaurant: {
    name: "Restaurant API",
    description: "Restoran və menyu idarəetməsi API-si",
    baseUrl: "https://api.example.com/v1/restaurants",
    endpoints: [
      {
        method: "GET",
        path: "/restaurants",
        description: "Bütün restoranları əldə et",
        response: `{
  "restaurants": [
    {
      "id": 1,
      "name": "Pizza Palace",
      "address": "123 Main St",
      "rating": 4.5
    }
  ]
}`,
      },
      {
        method: "GET",
        path: "/restaurants/{id}/menu",
        description: "Restoran menyusunu əldə et",
        response: `{
  "menu": [
    {
      "id": 1,
      "name": "Margherita Pizza",
      "price": 12.99,
      "category": "Pizza"
    }
  ]
}`,
      },
    ],
  },
  payment: {
    name: "Payment API",
    description: "Ödəniş emalı və maliyyə əməliyyatları API-si",
    baseUrl: "https://api.example.com/v1/payments",
    endpoints: [
      {
        method: "POST",
        path: "/payments",
        description: "Ödəniş et",
        response: `{
  "payment": {
    "id": 1,
    "amount": 29.99,
    "status": "completed",
    "transaction_id": "txn_123456"
  }
}`,
      },
      {
        method: "GET",
        path: "/payments/{id}",
        description: "Ödəniş məlumatlarını əldə et",
        response: `{
  "id": 1,
  "amount": 29.99,
  "status": "completed",
  "created_at": "2024-01-15T10:30:00Z"
}`,
      },
    ],
  },
  review: {
    name: "Review API",
    description: "Rəy və reytinq sistemi API-si",
    baseUrl: "https://api.example.com/v1/reviews",
    endpoints: [
      {
        method: "GET",
        path: "/reviews",
        description: "Bütün rəyləri əldə et",
        response: `{
  "reviews": [
    {
      "id": 1,
      "rating": 5,
      "comment": "Əla məhsul!",
      "user_id": 1,
      "product_id": 1
    }
  ]
}`,
      },
      {
        method: "POST",
        path: "/reviews",
        description: "Yeni rəy əlavə et",
        response: `{
  "id": 2,
  "rating": 4,
  "comment": "Yaxşı məhsul",
  "created_at": "2024-01-15T10:30:00Z"
}`,
      },
    ],
  },
}

export default function ApiCollectionPage({ params }: { params: { slug: string } }) {
  const api = apiData[params.slug as keyof typeof apiData]

  if (!api) {
    return (
      <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-black dark:text-white mb-4">API tapılmadı</h1>
          <Link href="/">
            <Button className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200">
              Ana səhifəyə qayıt
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* Fixed theme toggle */}
        <div className="fixed top-6 right-6 z-50">
          <ThemeToggle />
        </div>

        <div className="mb-8">
          <Link href="/">
            <Button
              variant="ghost"
              className="mb-4 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Geri qayıt
            </Button>
          </Link>

          <div className="bg-gray-50 dark:bg-neutral-900 rounded-lg border border-gray-200 dark:border-neutral-800 p-8">
            <h1 className="text-3xl font-bold text-black dark:text-white mb-4">{api.name}</h1>
            <p className="text-lg text-gray-600 dark:text-neutral-300 mb-6">{api.description}</p>

            <div className="flex items-center flex-wrap  gap-4 mb-6">
              <Badge
                variant="outline"
                className="text-sm order-1 px-[20px] py-[6px]  sm:order-0 border-gray-300 dark:border-neutral-700 text-gray-700 dark:text-neutral-300"
              >
                Base URL: {api.baseUrl}
              </Badge>
              <Badge
                variant="secondary"
                className="bg-gray-200  dark:bg-neutral-800 text-gray-800 dark:text-neutral-300"
              >
                {api.endpoints.length} Endpoint
              </Badge>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {api.endpoints.map((endpoint, index) => (
            <Card key={index} className="bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Badge
                      variant={
                        endpoint.method === "GET" ? "default" : endpoint.method === "POST" ? "destructive" : "secondary"
                      }
                      className="font-mono"
                    >
                      {endpoint.method}
                    </Badge>
                    <code className="text-sm font-mono bg-gray-100 dark:bg-neutral-800 px-2 py-1 rounded text-green-600 dark:text-green-400">
                      {endpoint.path}
                    </code>
                  </div>
                  <div className="flex gap-2">
                    {/* <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-300 dark:border-neutral-700 text-gray-700 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800"
                    >
                      <Copy className="h-4 w-4 mr-1" />
                      Kopyala
                    </Button> */}

                  </div>
                </div>
                <CardDescription className="text-base text-gray-600 dark:text-neutral-300">
                  {endpoint.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <h4 className="font-semibold text-black dark:text-white mb-3">Nümunə Cavab:</h4>
                  <div className="bg-gray-900 dark:bg-black rounded-lg p-4 overflow-x-auto border border-gray-300 dark:border-neutral-800">
                    <pre className="text-green-400 text-sm font-mono">{endpoint.response}</pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-gray-50 dark:bg-neutral-900 rounded-lg border border-gray-200 dark:border-neutral-800 p-8">
          <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">Autentifikasiya</h2>
          <p className="text-gray-600 dark:text-neutral-300 mb-4">
            {/* Bu API-dən istifadə etmək üçün Bearer token ilə autentifikasiya tələb olunur. */}
            Bu API-dən istifadə etmək üçün Bearer token ilə autentifikasiya tələb olunmur.
          </p>
          {/* <div className="bg-gray-900 dark:bg-black rounded-lg p-4 border border-gray-300 dark:border-neutral-800">
            <code className="text-sm font-mono text-green-400">Authorization: Bearer YOUR_API_TOKEN</code>
          </div> */}
        </div>
      </div>
    </div>
  )
}

