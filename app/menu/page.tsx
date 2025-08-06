"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Star, Heart, ChefHat, ArrowLeft } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

// Complete menu data
const menuCategories = [
  {
    category: "Main Course",
    dishes: [
      {
        id: 1,
        name: "Jollof Rice & Chicken",
        description: "Nigeria's favorite - perfectly spiced jollof rice with grilled chicken",
        price: "₦4,000",
        image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4np8SfZukN7gYk-FM9BhYEPEgpFHXv39wFpO4d1ekyFvPpffAM3-b8mww5tkSAsgCSd5n4LBAZN3exBdX7KrdIraUM0nLYmdWz3wPRYrWF9wJZY-EPGr4VgTraWU7lv4x-7JhEMznw=s680-w680-h510-rw",
        popular: true
      },
      {
        id: 2,
        name: "Ofada Rice Special",
        description: "Local brown rice served with spicy ofada stew and assorted meat",
        price: "₦4,500",
        image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nok6zGEgonM-w-ApgizrLrJZ9Zir7ekRYxJTXr4GuWQZtp1GdL3rxwa-oOKixwHhVFgWSCJWdWniTpU0t5iHyJIrYlhO0fB_2b88lIT5vuiKDQbEqW9cwho0NDkZA494zKR9H0=s680-w680-h510-rw"
      },
      {
        id: 3,
        name: "Chicken Shawarma",
        description: "Tender grilled chicken wrapped in soft pita with fresh vegetables",
        price: "₦3,000",
        image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4npzREbUpWyg07ggP29mMulcTYdJibO_vEoLXc4oKpSXmocD9T36gpn2NVcloY6z2mlHoo6x_j9j0sRuV8R9B0S75Zp9BhsrK0dPxvGe8QZKII8fcYyjMggvIY5rmVSYk8FQ9Gsm=s680-w680-h510-rw",
        popular: true
      }
    ]
  },
  {
    category: "Appetizers",
    dishes: [
      {
        id: 4,
        name: "Small Chops Pouch",
        description: "Assorted Nigerian finger foods - puff puff, samosa, spring rolls",
        price: "₦2,500",
        image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrbBYPX5qFGGRVID76sWoC1RE-sh0QdAnQ9UgQvSbGiLbejDl6ankPpwc84bcBUucLBRzJ8vUOHcCg0f_fukHhYtVzNF1iawPTRynDV5RkfCf5jOI45IhNh2WCGIz1eBP_Nrv8O=s680-w680-h510-rw",
        popular: true
      }
    ]
  },
  {
    category: "Beverages",
    dishes: [
      {
        id: 5,
        name: "Natural Fresh Juice",
        description: "Refreshing blend of tropical fruits, freshly squeezed daily",
        price: "₦1,500",
        image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4npzBm6pxjRqz9Mz0f_UrJ6JHGLwt7GA63E-SXVanVDRZc6fnKc1Ndzj_H6Ydng3591eQMARnZAu550-EDikdmo2gH0u2Wq6siPX_ULCewA8Jd6vzG6_XObK_sViWKwWyh2GEJVABg=s680-w680-h510-rw",
        popular: true
      }
    ]
  },
  {
    category: "Snacks",
    dishes: [
      {
        id: 6,
        name: "Crunchy Coconut Flakes",
        description: "Premium dried coconut flakes, perfect as snack or topping",
        price: "₦800",
        image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrpjRz9uxMMGriUU502vvIK9cePuZkNS_R_vEiOpbLzXrt2ZaoKVCB1ztz5eOKLJu5Z3lhHTj5_HvabBFht0BlPGGyVaoGAf3J5LsU2tp0OO9NJVr_iLMFUnq41snQfptBHkk0Hnw=s680-w680-h510-rw"
      }
    ]
  }
]

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 transition-all duration-300 hover:shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <ChefHat className="h-8 w-8 text-orange-600 group-hover:rotate-12 transition-transform duration-300" />
            <h1 className="text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">RachieKitchen</h1>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/menu" className="text-orange-600 font-semibold">Menu</Link>
            <Link href="/services" className="text-gray-700 hover:text-orange-600 transition-all duration-300 hover:scale-105 font-medium">Services</Link>
            <Link href="/contact" className="text-gray-700 hover:text-orange-600 transition-all duration-300 hover:scale-105 font-medium">Contact</Link>
            <Button className="bg-orange-600 hover:bg-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <Phone className="h-4 w-4 mr-2" />
              Order Now
            </Button>
          </div>
        </div>
      </header>

      {/* Menu Hero */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <Link href="/" className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-6 transition-colors duration-300">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Menu</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our authentic Nigerian dishes, crafted with traditional recipes and the freshest ingredients
          </p>
        </div>
      </section>

      {/* Menu Categories */}
      {menuCategories.map((category, categoryIndex) => (
        <section key={category.category} className={`py-12 px-4 ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-orange-50'}`}>
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{category.category}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {category.dishes.map((dish) => (
                <Card key={dish.id} className="overflow-hidden hover:shadow-xl transition-all duration-500 bg-white transform hover:scale-105 hover:-translate-y-2 group">
                  <div className="relative overflow-hidden">
                    <Image
                      src={dish.image || "/placeholder.svg"}
                      alt={dish.name}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {dish.popular && (
                      <Badge className="absolute top-3 left-3 bg-orange-600 hover:bg-orange-700 animate-pulse">
                        <Star className="h-3 w-3 mr-1" />
                        Popular
                      </Badge>
                    )}
                    <div className="absolute inset-0 bg-orange-600/0 group-hover:bg-orange-600/10 transition-all duration-300"></div>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl group-hover:text-orange-600 transition-colors duration-300">{dish.name}</CardTitle>
                      <span className="text-2xl font-bold text-orange-600">{dish.price}</span>
                    </div>
                    <CardDescription className="text-gray-600">
                      {dish.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-orange-600 hover:bg-orange-700 transform hover:scale-105 transition-all duration-300">
                      <Heart className="h-4 w-4 mr-2" />
                      Add to Order
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Call to Action */}
      <section className="py-16 px-4 bg-orange-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Order?</h2>
          <p className="text-xl mb-8 text-orange-100">
            Call us now or visit our restaurant for the best Nigerian cuisine experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3 transform hover:scale-105 transition-all duration-300">
              <Phone className="h-5 w-5 mr-2" />
              Call: 0810 314 9373
            </Button>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-orange-600 transform hover:scale-105 transition-all duration-300">
                Visit Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <ChefHat className="h-6 w-6 text-orange-500" />
            <h3 className="text-xl font-bold">RachieKitchen</h3>
          </div>
          <p className="text-gray-400 mb-4">
            Authentic Nigerian Cuisine • Gbagada, Lagos • Open 24/7
          </p>
          <p className="text-gray-500 text-sm">
            © 2025 RachieKitchen. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
