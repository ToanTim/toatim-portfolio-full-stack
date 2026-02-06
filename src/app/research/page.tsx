import ResearchCard from "../../components/ResearchCard";

export default function Expertise() {
  const engineeringAreas = [
    {
      title: "Web & Mobile Development",
      description:
        "Developing responsive, type-safe applications with Next.js, React, and React Native. Focused on performance optimization and modern UI/UX.",
      tags: ["TypeScript", "Next.js", "React Native"],
      borderColor: "border-blue-500",
      tagColor: "bg-blue-50 text-blue-700",
    },
    {
      title: "Backend & API Architecture",
      description:
        "Architecting scalable server-side logic and APIs using Node.js, GraphQL, and Laravel. Expert in state management and efficient data flow.",
      tags: ["Node.js", "GraphQL", "REST APIs"],
      borderColor: "border-cyan-500",
      tagColor: "bg-cyan-50 text-cyan-700",
    },
    {
      title: "Cloud & Infrastructure",
      description:
        "Certified AWS expertise with a focus on Docker, CI/CD pipelines, and automated deployments to ensure high application availability.",
      tags: ["AWS", "Docker", "CI/CD"],
      borderColor: "border-teal-500",
      tagColor: "bg-teal-50 text-teal-700",
    },
    {
      title: "Data Engineering & MLOps",
      description:
        "Building robust data pipelines and real-time recognition systems using Python and Linux-based environment orchestration.",
      tags: ["Python", "Linux", "DVC"],
      borderColor: "border-indigo-500",
      tagColor: "bg-indigo-50 text-indigo-700",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center text-gray-800">
        Technical Expertise
      </h2>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            {engineeringAreas.slice(0, 2).map((area, index) => (
              <ResearchCard key={index} {...area} />
            ))}
          </div>
          <div className="space-y-8">
            {engineeringAreas.slice(2, 4).map((area, index) => (
              <ResearchCard key={index} {...area} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
