import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Users, CheckCircle } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Associate Engineer - System Admin",
      company: "3i Infotech Ltd., Tamil Nadu",
      clientProject: "Client Project - ITGI and SIDBI",
      duration: "Feb 2025 - Present",
      responsibilities: [
        "Hardware Troubleshooting and Repair: PC and Laptop Diagnostics and Repair, Hardware Upgrades",
        "Software Installation and Configuration: Application Deployment, Software Licensing Management",
        "Network Management and Troubleshooting: TCP/IP, DNS, DHCP, VPN Configuration",
        "Active Directory Management: User Account Creation and Management, Group Policy Configuration",
        "Microsoft Office 365 Administration: Outlook Configuration and Troubleshooting",
      ],
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
              <div className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400">
                <Users className="w-4 h-4" />
                <span className="font-medium">{exp.clientProject}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Calendar className="w-4 h-4" />
                <span>{exp.duration}</span>
              </div>
            </CardHeader>
            <CardContent>
              <h4 className="font-semibold mb-4">Key Responsibilities:</h4>
              <ul className="space-y-3">
                {exp.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
