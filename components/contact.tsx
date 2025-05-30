'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <section id="contact" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">
        Get In <span className="text-yellow-500">Touch</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <Mail className="w-6 h-6 text-yellow-500" />
            <div>
              <h3 className="font-bold">Email</h3>
              <p>ramachandira2004@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="w-6 h-6 text-yellow-500" />
            <div>
              <h3 className="font-bold">Phone</h3>
              <p>+91 6383576132</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Linkedin className="w-6 h-6 text-yellow-500" />
            <div>
              <h3 className="font-bold">LinkedIn</h3>
              <a 
                href="https://www.linkedin.com/in/ramachandiran7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-yellow-500"
              >
                linkedin.com/in/ramachandiran7
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="w-6 h-6 text-yellow-500" />
            <div>
              <h3 className="font-bold">Location</h3>
              <p>Mannachanallur, Tiruchirappalli</p>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <Input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <Textarea
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="min-h-[150px]"
          />
          <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  )
}
