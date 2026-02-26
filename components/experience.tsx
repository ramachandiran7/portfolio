import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Users, CheckCircle } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Associate Engineer – System Admin",
      company: "3i-Infotech Pvt Ltd",
      payrollVendor: "Payroll Vendor: 3i-Infotech Pvt Ltd",
      duration: "Feb 2025 - Oct 2025",
      clientProject: "Client Projects: ITGI & SIDBI",
      description: "Delivered system administration and IT support services for enterprise clients ITGI & SIDBI. Resolved hardware, software, OS, and basic network issues across desktops and laptops. Managed Windows OS, Active Directory users, Outlook, Office 365, and endpoint security. Performed backup and restore operations, printer support, and technical documentation. Provided remote and onsite support using RDP, AnyDesk, and TightVNC.",
    },
    {
      title: "Associate Engineer – System Admin",
      company: "Tricornio Technologies",
      payrollVendor: "Payroll Vendor: Tricornio Technologies",
      duration: "Nov 2025 – Present",
      clientProject: "Client Projects: ITGI & SIDBI",
      description: "Delivered system administration and IT support services for enterprise clients ITGI & SIDBI. Resolved hardware, software, OS, and basic network issues across desktops and laptops. Managed Windows OS, Active Directory users, Outlook, Office 365, and endpoint security. Performed backup and restore operations, printer support, and technical documentation. Provided remote and onsite support using RDP, AnyDesk, and TightVNC.",
    },
  ]

  return (
    <section id="experience" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">
        Professional <span className="text-yellow-500">Experience</span>
      </h2>
      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800 mb-6">
            <CardHeader>
              <CardTitle className="text-xl font-bold">{exp.title}</CardTitle>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>{exp.company}</span>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <span>{exp.payrollVendor}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Calendar className="w-4 h-4" />
                <span>{exp.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 mt-2">
                <Users className="w-4 h-4" />
                <span className="font-medium">{exp.clientProject}</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{exp.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
