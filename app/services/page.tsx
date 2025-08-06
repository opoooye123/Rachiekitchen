"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Truck, Car, ShoppingBag, Users, Utensils, Clock, MapPin, ChefHat, ArrowLeft, CheckCircle } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

const services = [
  {
    icon: Truck,
    name: "No-contact Delivery",
    description: "Safe contactless delivery to your doorstep",
    details: "We prioritize your safety with our no-contact delivery service. Your order will be placed at your door, and you'll be notified via call or text.",
    features: ["Contactless delivery", "Real-time tracking", "Safe packaging", "Doorstep delivery"],
    image: "/placeholder.svg?height=300&width=400&text=Delivery+Service"
  },
  {
    icon: Truck,
    name: "Regular Delivery",
    description: "Fast and reliable delivery service",
    details: "Get your favorite Nigerian dishes delivered hot and fresh to your location within Lagos. Our delivery team ensures your food arrives in perfect condition.",
    features: ["30-45 min delivery", "Hot & fresh food", "Lagos-wide coverage", "Reliable service"],
    image: "/placeholder.svg?height=300&width=400&text=Fast+Delivery"
  },
  {
    icon: Car,
    name: "Drive-through",
    description: "Quick service without leaving your car",
    details: "Perfect for busy schedules! Order ahead or place your order at our drive-through window. No need to park or leave your vehicle.",
    features: ["Quick service", "No parking needed", "Order ahead option", "Convenient pickup"],
    image: "/placeholder.svg?height=300&width=400&text=Drive+Through"
  },
  {
    icon: ShoppingBag,
    name: "Takeaway",
    description: "Order ahead and pick up when ready",
    details: "Call ahead to place your order and pick it up at your convenience. Perfect for avoiding wait times and ensuring your food is ready when you arrive.",
    features: ["Order ahead", "No wait time", "Fresh preparation", "Quick pickup"],
    image: "/placeholder.svg?height=300&width=400&text=Takeaway"
  },
  {
    icon: Utensils,
    name: "Dine-in",
    description: "Enjoy our cozy restaurant atmosphere",
    details: "Experience the full RachieKitchen atmosphere with our comfortable dine-in service. Perfect for families, groups, and solo diners.",
    features: ["Cozy atmosphere", "Family-friendly", "Full service", "Comfortable seating"],
    image: "/placeholder.svg?height=300&width=400&text=Dine+In"
  },
  {
    icon: Users,
    name: "Catering",
    description: "Perfect for events and large groups",
    details: "Let us cater your special events, office meetings, or family gatherings with authentic Nigerian cuisine that will impress your guests.",
    features: ["Event catering", "Large group orders", "Custom menus", "Professional service"],
    image: "/placeholder.svg?height=300&width=400&text=Catering+Service"
  }
]

export default function ServicesPage() {
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
            <Link href="/services" className="text-orange-600 font-semibold">Services</Link>
            <Link href="/contact" className="text-gray-700 hover:text-orange-600 transition-all duration-300 hover:scale-105 font-medium">Contact</Link>
            <Button className="bg-orange-600 hover:bg-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <Phone className="h-4 w-4 mr-2" />
              Order Now
            </Button>
          </div>
        </div>
      </header>

      {/* Services Hero */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <Link href="/" className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-6 transition-colors duration-300">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer multiple convenient ways to enjoy our authentic Nigerian cuisine, designed with your lifestyle in mind
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid gap-12 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card key={service.name} className={`overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} lg:flex bg-white`}>
                <div className="lg:w-1/2">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.name}
                    width={400}
                    height={300}
                    className="w-full h-64 lg:h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                  <div className="flex items-center mb-4">
                    <service.icon className="h-12 w-12 text-orange-600 mr-4" />
                    <div>
                      <CardTitle className="text-2xl mb-2">{service.name}</CardTitle>
                      <CardDescription className="text-lg text-gray-600">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {service.details}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="bg-orange-600 hover:bg-orange-700 transform hover:scale-105 transition-all duration-300 w-fit">
                    <Phone className="h-4 w-4 mr-2" />
                    Order Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Hours & Info */}
      <section className="py-16 px-4 bg-orange-600 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div className="transform hover:scale-105 transition-all duration-300">
              <Clock className="h-12 w-12 mx-auto mb-4 text-orange-200" />
              <h3 className="text-xl font-bold mb-2">Service Hours</h3>
              <p className="text-orange-100">Open 24 Hours</p>
              <p className="text-orange-200 text-sm">Every day of the week</p>
            </div>
            
            <div className="transform hover:scale-105 transition-all duration-300">
              <MapPin className="h-12 w-12 mx-auto mb-4 text-orange-200" />
              <h3 className="text-xl font-bold mb-2">Service Area</h3>
              <p className="text-orange-100">Lagos Wide</p>
              <p className="text-orange-200 text-sm">Delivery & Pickup Available</p>
            </div>
            
            <div className="transform hover:scale-105 transition-all duration-300">
              <Phone className="h-12 w-12 mx-auto mb-4 text-orange-200" />
              <h3 className="text-xl font-bold mb-2">Order Now</h3>
              <p className="text-orange-100">0810 314 9373</p>
              <p className="text-orange-200 text-sm">Call anytime!</p>
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
