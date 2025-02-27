import Image from 'next/image'

export default function Projects() {
  const projects = [
    {
      title: "Tips for Financial Cybersecurity",
      description:
        "A responsive website built with HTML and CSS, leveraging these languages to create and style a responsive web page adhering to specific branding guidelines. This is a job simulation involving web development and cybersecurity for a banking Software Engineering Program, including foundational knowledge in financial cybersecurity principles and web hosting security measures.",
      image: "/cyberTips.jpg",
      link: "https://github.com/stellafu88/CommBank-IntroSoftwareEngineering-JobSimulation/blob/main/index.html/",
    },
    {
      title: "Database Design - SQL",
      description:
        "A database design project for a business that sells food products. The database was designed to store information about the company's products, customers, and orders. The project was completed using SQL and Microsoft SQL Server Management Studio.",
      image: "/diagram.jpg",
      link: "https://github.com/stellafu88/Wholey-Moley-foods/blob/main/The%20ERD%20Diagram.png",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto p-4">
        <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-purple-400/10 p-6 rounded-lg shadow-lg">
              <div className="relative aspect-video w-full mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="mt-2">{project.description}</p>

              <a
                href={project.link}
                className="cursor-pointer mt-8 inline-block bg-purple-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-purple-400/60 transition-all transform hover:scale-105"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
