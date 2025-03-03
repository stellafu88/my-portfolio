import Image from 'next/image'

export default function Projects() {
  const projects = [
    {
      title: "Tips for Financial Cybersecurity",
      description:
        "A responsive web page built with HTML, CSS, Tailwind CSS, React and TypeScript. The page is styled to adhere to specific branding guidelines. This is a Commonwealth Bank's introduction to software engineering job simulation program, involving web development and foundational knowledge in financial cybersecurity principles.",
      image: "/cyberTips.jpg",
      link: "https://tips-cybersecurity.vercel.app/",
    },
    {
      title: "UX Enhancement for SchoolBell.chat",
      description:
        "A poster presentation for an industry project on UX enhancement for SchoolBell.chat, a platform for parents to communicate with teachers and school administrators. This poster received the Highly Commended Emerge Poster Award from Ara Institute of Canterbury. The project used Angular, TypeScript,  Serverless framework, AWS and MongoDB.",
      image: "/poster.jpg",
      link: "https://github.com/stellafu88/Industry-Project-Poster/blob/main/Industry-Project-Poster-Stella%20Fu.pdf",
    },
    {
      title: "Database Design - SQL",
      description:
        "A database design project for a business that sells food products. The database was designed to store information about the company's products, customers, and orders. The project was completed using SQL and Microsoft SQL Server Management Studio.",
      image: "/diagram.jpg",
      link: "https://github.com/stellafu88/Wholey-Moley-foods/blob/main/The%20ERD%20Diagram.png",
    },
    {
      title: "My Portfolio",
      description:
        "A responsive website built with Next.js, Tailwind CSS, React and TypeScript. It is deployed on Vercel.",
      image: "/diagram.jpg",
      link: "https://github.com/stellafu88/Wholey-Moley-foods/blob/main/The%20ERD%20Diagram.png",
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white pt-[15vh]">
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
