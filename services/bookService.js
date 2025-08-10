export async function getBooks(limit = 20) {
  try {
    const res = await fetch("https://openlibrary.org/people/mekBot/books/already-read.json");
    const data = await res.json();

    if (!data.reading_log_entries) return [];

    return data.reading_log_entries
      .slice(0, limit)
      .map((item, index) => ({
        id: index,
        title: item.work?.title || "Tanpa Judul",
        author: item.work?.author_names?.[0] || "Tidak diketahui",
        year: item.work?.first_publish_year || "Tidak tersedia",
        coverId: item.work?.cover_id || null,
        cover: item.work?.cover_id
          ? `https://covers.openlibrary.org/b/id/${item.work.cover_id}-L.jpg`
          : "https://via.placeholder.com/300x450?text=No+Cover",
      }));
  } catch (error) {
    console.error("Gagal mengambil data:", error);
    return [];
  }
}
