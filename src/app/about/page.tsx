export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-center text-gray-800">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 mb-6">
              I am a <strong>Full-Stack Software Engineer</strong> focused on
              building scalable, user-centric applications. Currently pursuing
              my M.Sc. at Tampere University, I specialize in bridging the gap
              between complex data processing and modern web technologies.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              My core stack includes{" "}
              <strong>TypeScript, React, and Node.js</strong>. I am passionate
              about DevOps, clean architecture, and building tools that solve
              real-world problems at scale.
            </p>

            <div className="flex flex-wrap gap-4">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                Full-Stack Development
              </span>
              <span className="bg-cyan-100 text-cyan-800 px-4 py-2 rounded-full text-sm font-semibold">
                TypeScript & React
              </span>
              <span className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-semibold">
                Cloud & DevOps
              </span>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Engineering Philosophy</h3>
            <p className="text-lg opacity-90 mb-4">
              I don't just write code; I build products. I focus on creating{" "}
              <strong>type-safe, maintainable systems</strong> that provide fast
              and reliable performance.
            </p>
            <p className="text-lg opacity-90">
              With a background in Signal Processing, I bring a rigorous
              analytical approach to debugging and optimizing software
              infrastructure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
