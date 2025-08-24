
const Experience = () => {
  return (
      <div id="experience" className="py-20 px-6">
        <h3 className="text-3xl font-bold mb-12 text-center">Professional Experience</h3>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg">
            <h4 className="text-xl font-semibold">Aanya Greens Website</h4>
            <p className="mt-2 text-gray-400">
              Designed, Developed and Deployed a Resort's website with a modern, responsive
              design.<br />
              <strong>Technologies Used:</strong> React.JS, CSS, MongoDB, Mongoose, Express.<br />
              <strong>Source Code :</strong> <a href="github.com/rritikyadav/aanya-greens" target="_blank" rel="noopener noreferrer">github.com/rritikyadav/aanya-greens</a>
            </p>
            <a
              href="https://aanyagreens.in"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-blue-400 hover:underline"
            >
              Visit Website
            </a>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg">
            <h4 className="text-xl font-semibold">Urban Detailing Website</h4>
            <p className="mt-2 text-gray-400">
              Designed, Developed and Deployed a business website for a car detailing
              company.<br />
              <strong>Technologies Used:</strong> Next.JS, CSS, MongoDB, Mongoose, Express.<br />
              <strong>Source Code :</strong> <a href="github.com/rritikyadav/urban-detailing" target="_blank" rel="noopener noreferrer">github.com/rritikyadav/urban-detailing</a>

            </p>
            <a
              href="https://urbandetailing.in"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-blue-400 hover:underline"
            >
              Visit Website
            </a>
          </div>
        </div>
      </div>
  )
}

export default Experience
