
const Projects = () => {
  return (
     
      <div id="projects" className="py-20 px-6">
        <h3 className="text-3xl font-bold mb-12 text-center">Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg">
            <h4 className="text-xl font-semibold">E-Commerce Website</h4>
            <p className="mt-2 text-gray-400">A Fully Working E-Commerce Frontend built with Next.js and TailwindCSS.</p>
            <a className=" underline mr-10" href="https://e-commerce-khaki-nine-23.vercel.app/">View Project</a>
            <a className=" underline" href="https://github.com/rritikyadav/E-Commerce">Source Code</a>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg">
            <h4 className="text-xl font-semibold">Album Player</h4>
            <p className="mt-2 text-gray-400">A Music Player Shows Music By Albums And Built In JavaScript.</p>
            <a className="underline" href="https://github.com/rritikyadav/albumplayer">Source Code</a>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg">
            <h4 className="text-xl font-semibold">React To-Do</h4>
            <p className="mt-2 text-gray-400">A To-Do app with Proper Backend Built In React , MongoDb and Express.</p>
            <a className="underline mr-10" href="https://github.com/rritikyadav/react-todo">Frontend</a>
            <a className="underline" href="https://github.com/rritikyadav/react-todo-server">Backend</a>
          </div>
        </div>
      </div>
  )
}

export default Projects
