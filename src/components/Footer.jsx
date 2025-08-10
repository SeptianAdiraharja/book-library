export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        {/* Kiri */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-lg font-bold">📚 Aplikasi Peminjaman Buku</h2>
          <p className="text-sm text-gray-400">
            Membaca adalah jendela dunia. Yuk, pinjam buku dan tambah wawasan!
          </p>
        </div>

        {/* Kanan */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-blue-400">About</a>
          <a href="#" className="hover:text-blue-400">Contact</a>
          <a href="#" className="hover:text-blue-400">Bantuan</a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-4 text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Aplikasi Peminjaman Buku. All rights reserved.
      </div>
    </footer>
  );
}
