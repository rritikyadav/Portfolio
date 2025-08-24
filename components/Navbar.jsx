
const Navbar = () => {
  return (
      <div className=" sticky top-0 p-6 flex justify-between items-center bg-gray-800 shadow-md">
        <h1 className="text-2xl font-bold">Ritik Portfolio</h1>
        <ul className="flex space-x-6">
          <li><a href="#about" className="hover:text-blue-400">About</a></li>
          <li><a href="#experience" className="hover:text-blue-400">Experience</a></li>
          <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>
      </div>
  )
}

export default Navbar;
