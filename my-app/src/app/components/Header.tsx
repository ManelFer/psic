export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 md:p-6">
      <div className="text-xl font-serif">Dra. Laura Ferreira</div>
      <nav className="hidden md:flex gap-6">
        <a href="#" className="hover:text-purple-700">Home</a>
        <a href="#" className="hover:text-purple-700">About</a>
        <a href="#" className="hover:text-purple-700">Services</a>
        <a href="#" className="hover:text-purple-700">Testimonials</a>
      </nav>
      <button className="bg-purple-700 text-white px-4 py-2 rounded-full">Contact</button>
    </header>
  )
}