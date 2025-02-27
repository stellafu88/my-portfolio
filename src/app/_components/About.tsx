import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-20 bg-purple-950">
      <div className="container mx-auto p-4">
        <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <div>
            <Image
              src="/bike.jpg"
              alt="Profile"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <p className="text-lg">
              I&apos;m a Full-Stack Software Engineer with 3 years of experience
              developing scalable web applications in New Zealand. I recently
              relocated to Melbourne, Australia. I love building responsive and
              user-friendly websites, passionate about creating solutions to
              enhance user experience. Here you will find some of my projects
              and skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
