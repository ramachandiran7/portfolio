export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">
          ABOUT <span className="text-yellow-500">ME</span>
        </h2>
        <div className="space-y-4 text-gray-600 dark:text-gray-300">
          <p>
            Hello! I'm Ramachandiran, a System Administrator currently working at 3i Infotech Ltd., Tamil Nadu. With a
            Bachelor's degree in Computer Applications (BCA) and professional experience as an Associate Engineer, I
            specialize in IT infrastructure support and system administration.
          </p>
          <p>My core expertise includes:</p>
          <ul className="list-disc list-inside grid grid-cols-1 md:grid-cols-2 gap-1 max-w-2xl mx-auto text-left">
            <li>Hardware & Software Troubleshooting</li>
            <li>Network Configuration & Management</li>
            <li>Active Directory Administration</li>
            <li>Microsoft Office 365 Support</li>
            <li>System Administration (Windows & Linux)</li>
            <li>AWS Cloud Services Fundamentals</li>
          </ul>
          <p className="mt-4">
            I'm passionate about solving IT challenges and improving infrastructure efficiency. My goal is to continue
            growing in system administration while delivering reliable and secure IT solutions.
          </p>
        </div>
      </div>
    </section>
  )
}
