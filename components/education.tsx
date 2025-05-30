import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Education() {
  const educationDetails = [
    {
      degree: "Bachelor's Degree in Computer Applications (BCA)",
      institution: "Urumu Dhanalakshmi College, Trichy",
      year: "2021 – 2024",
      score: "70%"
    },
    {
      degree: "Higher Secondary Education (XII)",
      institution: "Government Boys Higher Secondary School, Mannachanallur",
      year: "2020 – 2021",
      score: "85%"
    },
    {
      degree: "Secondary School Education (X)",
      institution: "Government Higher Secondary School, Ayyampalayam",
      year: "2018 – 2019",
      score: "83%"
    }
  ]

  return (
    <section id="education" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">
        My <span className="text-yellow-500">Education</span>
      </h2>
      <div className="space-y-6">
        {educationDetails.map((edu, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-xl font-bold">{edu.degree}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">{edu.institution}</p>
              <p className="text-gray-600 dark:text-gray-300">{edu.year}</p>
              <p className="font-semibold">Score: {edu.score}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
