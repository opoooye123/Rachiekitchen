"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, MapPin, Clock, Mail, ChefHat, ArrowLeft, Send } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function ContactPage() {
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
            <Link href="/contact" className="text-orange-600 font-semibold">Contact</Link>
            <Button className="bg-orange-600 hover:bg-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <Phone className="h-4 w-4 mr-2" />
              Order Now
            </Button>
          </div>
        </div>
      </header>

      {/* Contact Hero */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <Link href="/" className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-6 transition-colors duration-300">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get in touch with us for orders, reservations, or any questions about our authentic Nigerian cuisine
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 bg-white">
              <CardHeader>
                <MapPin className="h-12 w-12 text-orange-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm leading-relaxed">
                  9 Adeniyi Jegede Cres<br />
                  Gbagada, Street 100242<br />
                  Lagos, Nigeria
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 bg-white">
              <CardHeader>
                <Phone className="h-12 w-12 text-orange-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Phone</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-800 font-semibold text-lg">
                  0810 314 9373
                </p>
                <p className="text-gray-500 text-sm">
                  Call us anytime!
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 bg-white">
              <CardHeader>
                <Clock className="h-12 w-12 text-orange-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-800 font-semibold text-lg">
                  Open 24 Hours
                </p>
                <p className="text-gray-500 text-sm">
                  Every day of the week
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 bg-white">
              <CardHeader>
                <Mail className="h-12 w-12 text-orange-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-800 font-semibold">
                  info@rachiekitchen.com
                </p>
                <p className="text-gray-500 text-sm">
                  We'll respond quickly
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form & Map */}
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="hover:shadow-xl transition-all duration-500 bg-white">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Send us a Message</CardTitle>
                <p className="text-gray-600 text-center">
                  Have questions or special requests? We'd love to hear from you!
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <Input 
                      placeholder="Your first name" 
                      className="transition-all duration-300 focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <Input 
                      placeholder="Your last name" 
                      className="transition-all duration-300 focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input 
                    type="email" 
                    placeholder="your.email@example.com" 
                    className="transition-all duration-300 focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <Input 
                    type="tel" 
                    placeholder="Your phone number" 
                    className="transition-all duration-300 focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us about your inquiry, special requests, or feedback..."
                    rows={5}
                    className="transition-all duration-300 focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                
                <Button className="w-full bg-orange-600 hover:bg-orange-700 transform hover:scale-105 transition-all duration-300 text-lg py-3">
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Restaurant Image & Info */}
            <div className="space-y-6">
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 bg-white">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=300&width=500&text=RachieKitchen+Location"
                    alt="RachieKitchen Restaurant Location"
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">Visit Our Restaurant</h3>
                    <p className="text-orange-200">Gbagada, Lagos</p>
                  </div>
                </div>
              </Card>

              <Card className="bg-orange-50 border-orange-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Order</h3>
                  <p className="text-gray-600 mb-4">
                    Ready to order? Call us directly for the fastest service!
                  </p>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 transform hover:scale-105 transition-all duration-300">
                    <Phone className="h-5 w-5 mr-2" />
                    Call: 0810 314 9373
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-green-50 border-green-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Authentic Nigerian cuisine
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Open 24 hours daily
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Multiple service options
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Family-friendly atmosphere
                    </li>
                  </ul>
                </CardContent>
              </Card>
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
