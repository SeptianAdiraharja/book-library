import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Modal from "./Modal";
import { getBooks } from "../../services/bookService";

export default function Index() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const data = await getBooks(20);
      setBooks(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return <div className="p-6 text-center">Memuat data buku...</div>;
  }

  return (
    <>
      <div className="p-6 text-center text-gray-600">
        <motion.h2
          className="text-2xl font-bold mb-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Daftar Buku
        </motion.h2>
        <hr className="border-gray-400 mb-4" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {books.map((book, index) => (
            <motion.div
              key={book.id}
              className="bg-gray-200 shadow-lg rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={book.cover}
                alt={book.title}
                className="w-full h-64 object-contain bg-white"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{book.title}</h3>
                <p className="text-gray-600">Penulis: {book.author}</p>
                <button
                  onClick={() => setSelectedBook(book)}
                  className="mt-3 bg-slate-500 text-white px-4 py-2 rounded"
                >
                  Lihat Detail
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal menerima data book */}
      <Modal
        isOpen={!!selectedBook}
        onClose={() => setSelectedBook(null)}
        book={selectedBook}
      />
    </>
  );
}
