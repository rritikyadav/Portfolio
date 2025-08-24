
const Hero = () => {
  return (
      <div className="flex flex-col items-center justify-center text-center h-screen">
        <h2 className="text-5xl font-extrabold">Hi, I'm Ritik Yadav </h2>
        <p className="mt-4 text-lg text-gray-300 max-w-xl">
          "Full-Stack Web Developer crafting fast, scalable, and modern applications with React.js, Next.js, and Express.js."
        </p>
        <a
          href="#contact"
          className="mt-6 px-6 py-3 bg-blue-500 rounded-full hover:bg-blue-600 transition"
        >
          Contact Info
        </a>
      </div>
  )
}

export default Hero
