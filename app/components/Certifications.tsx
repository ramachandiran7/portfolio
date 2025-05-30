export default function Certifications() {
  const certifications = [
    "Network Security",
    "Computer Software Technology (Computer Technician)",
    "Network Technician",
    "CCNA 200-301 Network Fundamentals Online",
    "AWS for Beginners",
    "AWS Cloud Workshop"
  ]

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Certifications</h2>
      <ul className="list-disc list-inside">
        {certifications.map((cert, index) => (
          <li key={index} className="mb-2">{cert}</li>
        ))}
      </ul>
    </section>
  )
}
