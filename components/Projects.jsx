
const Projects = () => {
  return (
     
      <div id="projects" className="py-20 px-6">
        <h3 className="text-3xl font-bold mb-12 text-center">Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg">
            <h4 className="text-xl font-semibold">Project 1</h4>
            <p className="mt-2 text-gray-400">A cool web app built with Next.js and TailwindCSS.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg">
            <h4 className="text-xl font-semibold">Project 2</h4>
            <p className="mt-2 text-gray-400">Another awesome project with React and MongoDB.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg">
            <h4 className="text-xl font-semibold">Project 3</h4>
            <p className="mt-2 text-gray-400">An API-based app using Node.js and Express.</p>
          </div>
        </div>
      </div>
  )
}

export default Projects
