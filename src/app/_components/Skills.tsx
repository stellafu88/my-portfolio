export default function Skills() {
  const skills = [
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "Angular",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "Node.js",
    "MongoDB",
    "SQL",
    "Express.js",
    "Git",
    "Docker",
    "Jenkins",
    "CI/CD",
    "AWS",
  ];

  return (
    <section id="skills" className="py-20 bg-purple-900">
      <div className="container mx-auto p-4">
        <h2 className="text-4xl font-bold text-center mb-8">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <div key={skill} className="bg-purple-500 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-purple-400 transition-colors">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
