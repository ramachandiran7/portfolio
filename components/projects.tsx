import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Projects() {
  const projects = [
    {
      title: "Project ITGI - IT Infrastructure Management",
      description:
        "As an Associate Engineer - System Admin at 3i Infotech Ltd., I managed and maintained the IT infrastructure for ITGI. My responsibilities included hardware troubleshooting, software deployment, network configuration, and user support to ensure seamless operations. I diagnosed and resolved hardware issues, implemented standardized software deployment procedures, configured network services, managed Active Directory, and provided Microsoft Office 365 support.",
      skills: [
        "System Administration",
        "Hardware Troubleshooting",
        "Network Management",
        "Active Directory",
        "Office 365",
      ],
    },
    {
      title: "Project SIDBI - IT Support and Infrastructure",
      description:
        "Working with SIDBI as part of 3i Infotech Ltd., I was responsible for basic IT support and system maintenance tasks. I conducted regular system health checks, provided end-user support for hardware and software issues, performed routine troubleshooting of IT components, and ensured all systems were functioning correctly through preventive maintenance and monitoring.",
      skills: ["IT Support", "System Maintenance", "Troubleshooting", "Hardware Support", "End-User Support"],
    },
    {
      title: "Static Website Deployment on AWS S3",
      description:
        "Successfully deployed a static website using Amazon Web Services (AWS) Simple Storage Service (S3). Implemented best practices for secure and scalable cloud hosting.",
      skills: ["AWS", "S3", "Cloud Hosting", "Static Website"],
    },
    {
      title: "DevOps Mini CI/CD Pipeline",
      description:
        "Designed and implemented a streamlined Continuous Integration and Continuous Deployment (CI/CD) pipeline using AWS services. This project demonstrates proficiency in automating software delivery processes and implementing DevOps best practices.",
      skills: ["AWS CodePipeline", "AWS CodeDeploy", "EC2", "CI/CD", "DevOps"],
    },
  ]

  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">
        Featured <span className="text-yellow-500">Projects</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4 text-gray-600 dark:text-gray-300">{project.description}</CardDescription>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100 rounded-full text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
