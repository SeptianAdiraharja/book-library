// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Modal({ isOpen, onClose, book }) {
  if (!isOpen || !book) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <motion.div
        className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col md:flex-row gap-6">
          {/* Kiri: Gambar besar */}
          <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center">
            <img
              src={book.cover}
              alt={book.title}
              className="w-full max-w-sm rounded shadow"
            />
          </div>

          {/* Kanan: Detail */}
          <div className="flex flex-col justify-center w-full md:w-1/2">
            <h2 className="text-2xl font-bold mb-2">{book.title}</h2>
            <p className="text-gray-700 mb-1">
              <span className="font-semibold">Penulis:</span> {book.author}
            </p>
            <p className="text-gray-700 mb-1">
              <span className="font-semibold">Tahun Terbit:</span> {book.year}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Cover ID:</span>{" "}
              {book.coverId || "Tidak tersedia"}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Sinopsis:</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit consectetur vel distinctio assumenda maxime ipsa dolorem, iste hic? Soluta, consequuntur error nam fugiat, veniam magni accusantium modi, dolore odit et tempora libero quod officia. Quisquam, ratione. Quod, incidunt sint dicta tempore, sequi ex odio similique beatae autem alias aperiam quae?
            </p>
          </div>
        </div>

        {/* Tombol Tutup */}
        <div className="mt-6 text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Tutup
          </button>
        </div>
      </motion.div>
    </div>
  );
}
