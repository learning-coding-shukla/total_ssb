import KnowledgeTemplate from "../components/KnowledgeTemplate";
<div className="bg-white p-6 rounded-xl shadow mt-8">
  <h2 className="text-3xl font-bold mb-4">
    NDA vs INA
  </h2>

  <table className="w-full border">
    <tbody>

      <tr className="border">
        <td className="p-3 font-bold">NDA</td>
        <td className="p-3">
          Tri-Service Academy
        </td>
      </tr>

      <tr className="border">
        <td className="p-3 font-bold">INA</td>
        <td className="p-3">
          Naval-Specific Officer Training
        </td>
      </tr>

    </tbody>
  </table>
</div>
function INA() {
  return (
    <KnowledgeTemplate
      title="Indian Naval Academy (INA)"
      image="/knowledge/ina.jpg"

      intro="The Indian Naval Academy (INA), Ezhimala is the premier officer training academy of the Indian Navy. It is Asia's largest naval academy and trains officers for various branches of the Indian Navy."

      facts={[
        "Location: Ezhimala, Kerala",
        "Commissioned: 8 January 2009",
        "Asia's Largest Naval Academy",
        "Training Academy for Indian Navy Officers",
        "Overlooks the Arabian Sea",
      ]}

      highlights={[
        "Cadets receive military and academic training",
        "Training for Executive, Technical and Education Branches",
        "State-of-the-art simulators and naval training facilities",
        "Cadets develop leadership and maritime skills",
        "Hosts trainees from friendly foreign nations",
        "One of the most modern military academies in Asia",
      ]}
      

      interviewQuestions={[
        "Where is INA located?",
        "Why is INA famous?",
        "When was INA commissioned?",
        "Which service trains at INA?",
        "What makes INA unique in Asia?",
        "Difference between NDA and INA?",
        "What branches are trained at INA?",
      ]}
    />
  );
}

<div className="bg-blue-50 p-6 rounded-xl shadow mt-8">
  <h2 className="text-3xl font-bold mb-4">
    Why Ezhimala?
  </h2>

  <ul className="list-disc pl-6 space-y-2">
    <li>Strategic location on the Arabian Sea coast.</li>
    <li>Ideal environment for naval and maritime training.</li>
    <li>Large campus spread over thousands of acres.</li>
    <li>Direct access to sea-based training facilities.</li>
  </ul>
</div>
export default INA;