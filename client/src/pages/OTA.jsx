import KnowledgeTemplate from "../components/KnowledgeTemplate";

function OTA() {
  return (
    <>
      <KnowledgeTemplate
        title="Officers Training Academy (OTA)"
        image="/knowledge/ota.jpg"
        intro="The Officers Training Academy (OTA), Chennai trains officers for the Indian Army under the Short Service Commission (SSC). It is the only military academy in India that trains both men and women officers for the Army."
        facts={[
          "Location: Chennai, Tamil Nadu",
          "Established: 1963",
          "Trains Short Service Commission Officers",
          "Only Academy Training Women Army Officers",
          "Part of the Indian Army Training Command",
        ]}
        highlights={[
          "SSC officers are trained here",
          "Men and women train together",
          "NCC Special Entry candidates join OTA",
          "Technical Entry officers undergo training here",
          "Known for rigorous military training",
          "Produces officers for various Army branches",
        ]}
        interviewQuestions={[
          "Where is OTA located?",
          "What is the difference between IMA and OTA?",
          "What is Short Service Commission?",
          "Can women join OTA?",
          "What entries go to OTA?",
          "How long is OTA training?",
          "What are the advantages of SSC?",
        ]}
      />

      <div className="bg-yellow-50 p-6 rounded-xl shadow mt-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">
          Short Service Commission (SSC) vs Permanent Commission (PC)
        </h2>

        <table className="w-full border">
          <tbody>
            <tr className="border">
              <td className="p-3 font-bold">SSC</td>
              <td className="p-3">
                Limited service period, generally 10 years extendable up to 14 years.
              </td>
            </tr>
            <tr className="border">
              <td className="p-3 font-bold">PC</td>
              <td className="p-3">Service until retirement age.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-green-50 p-6 rounded-xl shadow mt-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Entries Through OTA</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>CDS OTA Entry</li>
          <li>NCC Special Entry</li>
          <li>SSC (Tech) Entry</li>
          <li>JAG Entry</li>
          <li>Women Entry Schemes</li>
        </ul>
      </div>
    </>
  );
}

export default OTA;
