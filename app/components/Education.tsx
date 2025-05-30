export default function Education() {
  const education = [
    {
      degree: "Bachelor's Degree in Computer Applications (BCA)",
      institution: "Urumu Dhananalakshmi College, Trichy",
      year: "2021 – 2024",
      score: "70%"
    },
    {
      degree: "XII",
      institution: "Govt Boys Hr Sec School, Mannachanallur",
      year: "2020 – 2021",
      score: "85%"
    },
    {
      degree: "X",
      institution: "Govt Hr Sec School, Ayyampalayam",
      year: "2018 – 2019",
      score: "83%"
    }
  ]

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      <div className="space-y-4">
        {education.map((edu, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            <h3 className="font-bold">{edu.degree}</h3>
            <p>{edu.institution}</p>
            <p>{edu.year} - Score: {edu.score}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
