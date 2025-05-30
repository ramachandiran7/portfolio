import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cloud, Network, GitBranch, Monitor, Lock } from "lucide-react"

export default function Certifications() {
  const certifications = [
    {
      title: "Hardware & Networking",
      issuer: "Vatanix Technologies Private Limited",
      icon: Network,
      description: "Comprehensive training in computer hardware and networking fundamentals",
    },
    {
      title: "IT Support Certification",
      issuer: "Itronix",
      icon: Monitor,
      description: "Specialized certification in IT support and troubleshooting",
    },
    {
      title: "Intro to Cyber Security",
      issuer: "Cisco",
      icon: Lock,
      description: "Foundational knowledge in cybersecurity principles and practices",
    },
    {
      title: "CCNA Network Fundamentals",
      issuer: "Simplilearn",
      icon: Network,
      description: "Comprehensive networking fundamentals and CCNA preparation",
    },
    {
      title: "AWS Fundamentals",
      issuer: "Self-Study",
      icon: Cloud,
      description: "Basic understanding of core AWS services including EC2, S3, RDS, and VPC",
    },
    {
      title: "AWS Cloud Workshop",
      issuer: "SRTECHOPS",
      icon: Cloud,
      description: "Introduction to cloud infrastructure and basic AWS service management",
    },
    {
      title: "CI/CD Pipeline Workshop",
      issuer: "SRTECHOPS",
      icon: GitBranch,
      description: "DevOps practices and CI/CD pipeline implementation",
    },
  ]

  return (
    <section id="certifications" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">
        Professional <span className="text-yellow-500">Certifications</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {certifications.map((cert, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-2 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
                <cert.icon className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              <div>
                <CardTitle className="text-lg font-bold">{cert.title}</CardTitle>
                <p className="text-sm text-gray-600 dark:text-gray-400">{cert.issuer}</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{cert.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
