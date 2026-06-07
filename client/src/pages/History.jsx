function History() {
  return (
    <div className="max-w-6xl mx-auto p-10">
      <h1 className="text-5xl font-bold">Military History</h1>
      <Link
        to="/kargil"
        className="bg-white p-6 rounded-xl shadow hover:shadow-xl"
      >
        Kargil War (1999)
      </Link>
      <Link
        to="/war1971"
        className="bg-white p-6 rounded-xl shadow hover:shadow-xl"
      >
        🇮🇳 1971 Indo-Pak War
      </Link>
      <Link
        to="/war1965"
        className="bg-white p-6 rounded-xl shadow hover:shadow-xl"
      >
        🇮🇳 1965 Indo-Pak War
      </Link>
      <Link
        to="/war1947"
        className="bg-white p-6 rounded-xl shadow hover:shadow-xl"
      >
        🇮🇳 1947 Indo-Pak War
      </Link>

      <ul className="mt-8 space-y-4 text-lg">
        <li>1947 Indo-Pak War</li>
        <li>1965 Indo-Pak War</li>
        <li>1971 Indo-Pak War</li>
        <li>Kargil War</li>
        <li>Operation Meghdoot</li>
        <li>Operation Trident</li>
      </ul>
    </div>
  );
}

export default History;
