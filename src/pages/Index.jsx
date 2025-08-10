import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Index() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  fetch("https://openlibrary.org/people/mekBot/books/already-read.json")
    .then((res) => res.json())
    .then((data) => {
      console.log("DATA DARI API:", data); // buat cek lagi
      if (data.reading_log_entries) {
        const mappedBooks = data.reading_log_entries
          .slice(0, 20)
          .map((item, index) => ({
          id: index,
          title: item.work?.title || "Tanpa Judul",
          author: item.work?.author_names?.[0] || "Tidak diketahui",
          cover: item.work?.cover_id
            ? `https://covers.openlibrary.org/b/id/${item.work.cover_id}-M.jpg`
            : "https://via.placeholder.com/200x300?text=No+Cover",
        }));
        setBooks(mappedBooks);
      }
      setLoading(false);
    })
    .catch((err) => {
      console.error("Gagal mengambil data:", err);
      setLoading(false);
    });
}, []);


  if (loading) {
    return <div className="p-6 text-center">Memuat data buku...</div>;
  }

  return (
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
              <button className="mt-3 bg-slate-500 text-white px-4 py-2 rounded hover:bg-slate-600 transition-colors duration-200">
                Pinjam
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
