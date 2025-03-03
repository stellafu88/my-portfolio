import Image from "next/image";

type Project = {
  title: string;
  description: string;
  image: string;
  link?: string;
};

export default function Projects() {
  const projects: Project[] = [
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
      title: "My Portfolio - The current website",
      description:
        "A responsive website built with Next.js, Tailwind CSS, React and TypeScript. It is deployed on Vercel.",
      image: "/portfolio.jpg",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white pt-[15vh]">
      <div className="container mx-auto p-4">
        <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-purple-400/10 p-6 rounded-lg shadow-lg flex flex-col md:flex-row gap-16"
            >
              <div className="relative aspect-video md:w-1/2">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="md:w-1/2 flex flex-col gap-6 self-center">
                <div>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-xl mt-2">{project.description}</p>
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer inline-block bg-purple-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-purple-400/60 transition-all transform hover:scale-105 w-fit"
                  >
                    View Project
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
