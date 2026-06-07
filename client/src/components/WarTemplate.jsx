function WarTemplate({
  title,
  image,
  overview,
  causes,
  timeline,
  heroes,
  outcome,
  interviewQuestions,
}) {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-5xl font-bold text-center mb-8">{title}</h1>

      <img
        src={image}
        alt={title}
        className="w-full h-[250px] md:h-[350px] lg:h-[450px] object-cover rounded-xl shadow-lg mb-8"
      />


      <div className="bg-white p-6 rounded-xl shadow mb-8">
        <h2 className="text-3xl font-bold mb-4">Timeline</h2>

        <ul className="list-disc pl-6">
          {timeline.map((event, index) => (
            <li key={index}>{event}</li>
          ))}
        </ul>
      </div>

    <div className="bg-white p-6 rounded-xl shadow mb-8">
  <h2 className="text-3xl font-bold mb-4">
    Heroes of Kargil
  </h2>

  <div className="grid md:grid-cols-2 gap-6">

    {heroes.map((hero, index) => (

      <div
        key={index}
        className="bg-slate-50 p-6 rounded-xl border shadow"
      >

        <h3 className="text-xl font-bold">
          {hero.name}
        </h3>

        <p className="mt-3 text-gray-700">
          {hero.desc}
        </p>

        <a
          href={hero.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Read Biography
        </a>

      </div>

    ))}

  </div>
</div>

      <div className="bg-green-50 p-6 rounded-xl shadow mb-8">
        <h2 className="text-3xl font-bold mb-4">Outcome</h2>

        <p>{outcome}</p>
      </div>

      <div className="bg-blue-50 p-6 rounded-xl shadow">
        <h2 className="text-3xl font-bold mb-4">SSB Interview Questions</h2>

        <ul className="list-disc pl-6">
          {interviewQuestions.map((question, index) => (
            <li key={index}>{question}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default WarTemplate;
