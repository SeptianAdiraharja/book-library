import { Link } from "react-router-dom";
import Image from './../images/snapedit.png'; // Sesuaikan path dengan lokasi gambar Anda
export default function Navbar() {
  return (
    <nav className="bg-[#BFD9D0] border-b-2 mb-b-4 text-g px-6 py-3 flex justify-between rounded-xs">
      <img
        alt="Your Company"
        src={Image}
        className="h-10 w-auto"
        />
      <div className="space-x-4">
        <Link to="/" className="hover:text-lg transition-all duration-300 ease-in font-six text-base">Home</Link>
        <Link to="/about" className="hover:text-lg transition-all duration-300 ease-in font-six text-base">About</Link>
        <Link to="/contact" className="hover:text-lg transition-all duration-300 ease-in font-six text-base ">Contact</Link>
      </div>
    </nav>
  );
}
