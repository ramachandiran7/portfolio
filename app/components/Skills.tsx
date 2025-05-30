export default function Skills() {
  const skills = [
    "Technical Support",
    "OS Installation & Configuration",
    "Networking",
    "Software Installation & Management",
    "System Maintenance",
    "Cloud Fundamentals",
    "Communication",
    "Time Management"
  ]

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <ul className="grid grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <li key={index} className="bg-white p-4 rounded shadow">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}
