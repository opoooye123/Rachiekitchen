"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, MapPin, Clock, Star, Utensils, Car, ShoppingBag, Users, Coffee, Heart, ChefHat, Truck } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

// Sample featured dishes for homepage
const featuredDishes = [
  {
    id: 1,
    name: "Jollof Rice & Chicken",
    description: "Nigeria's favorite - perfectly spiced jollof rice with grilled chicken",
    price: "₦4,000",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4np8SfZukN7gYk-FM9BhYEPEgpFHXv39wFpO4d1ekyFvPpffAM3-b8mww5tkSAsgCSd5n4LBAZN3exBdX7KrdIraUM0nLYmdWz3wPRYrWF9wJZY-EPGr4VgTraWU7lv4x-7JhEMznw=s680-w680-h510-rw",
    category: "Main Course",
    popular: true
  },
  {
    id: 2,
    name: "Chicken Shawarma",
    description: "Tender grilled chicken wrapped in soft pita with fresh vegetables",
    price: "₦3,000",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4npzREbUpWyg07ggP29mMulcTYdJibO_vEoLXc4oKpSXmocD9T36gpn2NVcloY6z2mlHoo6x_j9j0sRuV8R9B0S75Zp9BhsrK0dPxvGe8QZKII8fcYyjMggvIY5rmVSYk8FQ9Gsm=s680-w680-h510-rw",
    category: "Main Course",
    popular: true
  },
  {
    id: 3,
    name: "Small Chops Pouch",
    description: "Assorted Nigerian finger foods - puff puff, samosa, spring rolls",
    price: "₦2,500",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrbBYPX5qFGGRVID76sWoC1RE-sh0QdAnQ9UgQvSbGiLbejDl6ankPpwc84bcBUucLBRzJ8vUOHcCg0f_fukHhYtVzNF1iawPTRynDV5RkfCf5jOI45IhNh2WCGIz1eBP_Nrv8O=s680-w680-h510-rw",
    category: "Appetizers",
    popular: true
  }
]

export default function RachieKitchenHome() {
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
            <Link href="/menu" className="text-gray-700 hover:text-orange-600 transition-all duration-300 hover:scale-105 font-medium">Menu</Link>
            <Link href="/services" className="text-gray-700 hover:text-orange-600 transition-all duration-300 hover:scale-105 font-medium">Services</Link>
            <Link href="/contact" className="text-gray-700 hover:text-orange-600 transition-all duration-300 hover:scale-105 font-medium">Contact</Link>
            <Button className="bg-orange-600 hover:bg-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <Phone className="h-4 w-4 mr-2" />
              Order Now
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200 animate-pulse">
                Open 24 Hours • Nigerian Cuisine
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
                Welcome to <span className="text-orange-600 animate-bounce">RachieKitchen</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl animate-slide-up">
                Experience authentic Nigerian flavors with modern convenience. From traditional ofada rice to fresh juices, 
                we serve delicious meals 24/7 in the heart of Gbagada, Lagos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/menu">
                  <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-3 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <Utensils className="h-5 w-5 mr-2" />
                    View Menu
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-orange-600 text-orange-600 hover:bg-orange-50 transform hover:scale-105 transition-all duration-300">
                  <Phone className="h-5 w-5 mr-2" />
                  Call: 0810 314 9373
                </Button>
              </div>
            </div>
            
            {/* Chef Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVZFt1XbKtyp1yFtem_7GxtEpUAhume_7Hjg&s"
                  alt="Head Chef at RachieKitchen"
                  width={400}
                  height={500}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Chef Rachie</h3>
                  <p className="text-orange-200">Master of Nigerian Cuisine</p>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-orange-500 text-white p-3 rounded-full shadow-lg animate-bounce">
                <ChefHat className="h-6 w-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-full shadow-lg animate-pulse">
                <Star className="h-6 w-6 text-orange-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="py-16 px-4 bg-orange-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">Featured Dishes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Taste our most popular Nigerian dishes, crafted with authentic recipes and fresh ingredients
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredDishes.map((dish, index) => (
              <Card key={dish.id} className="overflow-hidden hover:shadow-xl transition-all duration-500 bg-white transform hover:scale-105 hover:-translate-y-2 group">
                <div className="relative overflow-hidden">
                  <Image
                    src={dish.image || "/placeholder.svg"}
                    alt={dish.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-3 left-3 bg-orange-600 hover:bg-orange-700 animate-pulse">
                    <Star className="h-3 w-3 mr-1" />
                    Popular
                  </Badge>
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

          <div className="text-center mt-12">
            <Link href="/menu">
              <Button size="lg" variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50 transform hover:scale-105 transition-all duration-300">
                View Full Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="animate-slide-right">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose RachieKitchen?</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 transform hover:translate-x-2 transition-transform duration-300">
                  <Badge className="bg-green-100 text-green-800 mt-1">✓</Badge>
                  <div>
                    <h3 className="font-semibold">Perfect for Lunch & Solo Dining</h3>
                    <p className="text-gray-600">Quick bites and small plates ideal for any time of day</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 transform hover:translate-x-2 transition-transform duration-300">
                  <Badge className="bg-green-100 text-green-800 mt-1">✓</Badge>
                  <div>
                    <h3 className="font-semibold">Family-Friendly Atmosphere</h3>
                    <p className="text-gray-600">Casual dining perfect for groups and good for kids</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 transform hover:translate-x-2 transition-transform duration-300">
                  <Badge className="bg-green-100 text-green-800 mt-1">✓</Badge>
                  <div>
                    <h3 className="font-semibold">Convenient Payment Options</h3>
                    <p className="text-gray-600">We accept debit cards for your convenience</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 transform hover:translate-x-2 transition-transform duration-300">
                  <Badge className="bg-green-100 text-green-800 mt-1">✓</Badge>
                  <div>
                    <h3 className="font-semibold">Always Open</h3>
                    <p className="text-gray-600">24-hour service to satisfy your cravings anytime</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative animate-slide-left">
              <Image
                src="/placeholder.svg?height=400&width=500&text=RachieKitchen+Restaurant"
                alt="RachieKitchen Restaurant Interior"
                width={500}
                height={400}
                className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
              />
            </div>
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
            © 2024 RachieKitchen. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
