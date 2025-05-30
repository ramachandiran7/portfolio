import { Server, Cloud, Network, Terminal, Database, Monitor, Cog, FileCode, Lock, Clipboard } from "lucide-react"

export default function Skills() {
  const skills = [
    {
      icon: Server,
      name: "Technical Support",
      description: "Hardware and software troubleshooting, system diagnostics",
    },
    {
      icon: Terminal,
      name: "OS Management",
      description: "Windows & Linux system administration",
    },
    {
      icon: Network,
      name: "Networking",
      description: "LAN/WAN setup, network maintenance, TCP/IP",
    },
    {
      icon: Cloud,
      name: "AWS Fundamentals",
      description: "Basic understanding of EC2, S3, RDS, and VPC services",
    },
    {
      icon: Database,
      name: "System Maintenance",
      description: "Regular updates, backups, optimization",
    },
    {
      icon: FileCode,
      name: "Linux Administration",
      description: "Intermediate level system administration and shell scripting",
    },
    {
      icon: Cog,
      name: "System Recovery & Backup",
      description: "Comprehensive backup management and disaster recovery",
    },
    {
      icon: Lock,
      name: "Active Directory",
      description: "User management and basic group policy administration",
    },
    {
      icon: Monitor,
      name: "Virtual Machine",
      description: "Creation, management, and optimization of virtual environments",
    },
    {
      icon: Clipboard,
      name: "Asset Management",
      description: "Tracking, maintaining, and optimizing IT assets and inventory",
    },
  ]

  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">
        Professional <span className="text-yellow-500">Skillset</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-yellow-500 transition-colors bg-white dark:bg-gray-800"
          >
            <skill.icon className="w-12 h-12 mb-4 text-yellow-500" />
            <h3 className="font-bold mb-2">{skill.name}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
