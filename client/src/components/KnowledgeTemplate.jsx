function KnowledgeTemplate({
  title,
  image,
  intro,
  facts,
  highlights,
  interviewQuestions,
}) {
  return (
    <div className="max-w-6xl mx-auto p-8">

      <h1 className="text-5xl font-bold mb-8 text-center">
        {title}
      </h1>

      <img
        src={image}
        alt={title}
        className="w-full h-[250px] md:h-[350px] lg:h-[450px] object-cover rounded-xl shadow-lg mb-10"
      />

      <div className="bg-white rounded-xl shadow p-6 mb-8">
        <h2 className="text-3xl font-bold mb-4">
          Introduction
        </h2>

        <p>{intro}</p>
      </div>

      <div className="bg-white rounded-xl shadow p-6 mb-8">
        <h2 className="text-3xl font-bold mb-4">
          Quick Facts
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          {facts.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-xl shadow p-6 mb-8">
        <h2 className="text-3xl font-bold mb-4">
          Highlights
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          {highlights.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="bg-blue-50 rounded-xl shadow p-6">
        <h2 className="text-3xl font-bold mb-4">
          SSB Interview Questions
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          {interviewQuestions.map((question, index) => (
            <li key={index}>{question}</li>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default KnowledgeTemplate;