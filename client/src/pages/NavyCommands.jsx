function NavyCommands() {
  const commands = [
    {
      name: "Western Naval Command",
      hq: "Mumbai",
      responsibility: "Arabian Sea Operations",
      image: "/navy/western-command.jpg",
    },

    {
      name: "Eastern Naval Command",
      hq: "Visakhapatnam",
      responsibility: "Bay of Bengal Operations",
      image: "/navy/eastern-command.jpg",
    },

    {
      name: "Southern Naval Command",
      hq: "Kochi",
      responsibility: "Training Command",
      image: "/navy/southern-command.jpg",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

      <div
        className="h-[350px] rounded-2xl mb-10 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)), url('/navy/banner.jpg')",
        }}
      >
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">
          ⚓ Indian Navy Commands
        </h1>
      </div>

      <div className="grid md:grid-cols-3 gap-8">

        {commands.map((command, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition"
          >
            <img
              src={command.image}
              alt={command.name}
              className="w-full h-52 md:h-64 object-cover"
            />

            <div className="p-6">

              <h2 className="text-2xl font-bold">
                {command.name}
              </h2>

              <p className="mt-3">
                <strong>Headquarters:</strong> {command.hq}
              </p>

              <p className="mt-2">
                <strong>Role:</strong> {command.responsibility}
              </p>

            </div>
          </div>
        ))}

      </div>

    </div>
  );
}

export default NavyCommands;