// Jumbotron.jsx
import React from "react";

const Jumbotron = () => {
  return (
    <section className="relative bg-[#BFD9D0] py-20 overflow-hidden">
      {/* Dekorasi gambar kiri atas */}
      <img
        src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1733882612i/29610266.jpg"
        alt="Dekorasi kiri"
        className="absolute top-8 left-8 w-32 rounded-lg shadow-lg transform -rotate-6 transition-transform duration-300 hover:scale-110"
      />
      {/* Dekorasi gambar kanan atas */}
      <img
        src="https://cdn.gramedia.com/uploads/items/img20220905_11493451.jpg"
        alt="Dekorasi kanan"
        className="absolute top-4 right-8 w-32 rounded-lg shadow-lg transform rotate-6 transition-transform duration-300 hover:scale-110"
      />

      {/* Konten Tengah */}
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <h1 className="text-4xl font-bold text-[#C65848] font-six">
          TEMPAT DI MANA <br /> PETUALANGAN DIMULAI
        </h1>
        <p className="mt-4 text-gray-700 font-six">
          JENDELA DUNIA, KUNCI MASA DEPAN
        </p>
        <button className="mt-6 px-6 py-3 bg-white rounded shadow text-gray-600 hover:bg-gray-200 transition font-semibold font-six">
          AYO BACA »
        </button>
      </div>

      {/* Dekorasi gambar bawah */}
      <img
        src="https://imgv2-1-f.scribdassets.com/img/document/443499450/original/75e0895939/1?v=1"
        alt="Dekorasi bawah kiri"
        className="absolute bottom-4 left-16 w-24 rounded-lg shadow-md transition-transform duration-300 hover:scale-110"
      />
      <img
        src="https://static.buku.kemdikbud.go.id/content/image/covernonteks/coverpusbuk/Apa_Itu_Cover.png"
        alt="Dekorasi bawah kanan"
        className="absolute bottom-4 right-16 w-24 rounded-lg shadow-md transition-transform duration-300 hover:scale-110 hover:brightness-100"
      />
    </section>
  );
};

export default Jumbotron;
