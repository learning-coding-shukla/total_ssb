function ArmyCorps() {
  const corps = [
    "Corps of Engineers",
    "Corps of Signals",
    "Army Service Corps",
    "Army Medical Corps",
    "Army Air Defence",
    "Corps of Military Police",
    "Army Ordnance Corps",
    "Corps of Electronics and Mechanical Engineers",
  ];

  return (
    <div className="max-w-6xl mx-auto p-10">

      <h1 className="text-5xl font-bold mb-8">
        ⚔ Indian Army Corps
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        {corps.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow"
          >
            {item}
          </div>
        ))}

      </div>

    </div>
  );
}

export default ArmyCorps;