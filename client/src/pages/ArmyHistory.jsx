function ArmyHistory() {
  return (
    <div className="max-w-6xl mx-auto p-10">

      <h1 className="text-5xl font-bold mb-8">
        📜 Indian Army History
      </h1>

      <div className="bg-white p-8 rounded-xl shadow">

        <p className="mb-4">
          The Indian Army traces its origins to the armies of the East India Company.
          After independence in 1947, it became the land warfare branch of the
          Indian Armed Forces.
        </p>

        <h2 className="text-3xl font-bold mt-8 mb-4">
          Major Milestones
        </h2>

        <ul className="list-disc pl-6 space-y-3">
          <li>1947–48 Indo-Pak War</li>
          <li>1962 Sino-Indian War</li>
          <li>1965 Indo-Pak War</li>
          <li>1971 Bangladesh Liberation War</li>
          <li>1984 Operation Meghdoot</li>
          <li>1999 Kargil War</li>
          <li>2016 Surgical Strikes</li>
          <li>2025 Operation Sindoor</li>
        </ul>

      </div>

    </div>
  );
}

export default ArmyHistory;