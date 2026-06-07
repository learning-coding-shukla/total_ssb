import KnowledgeTemplate from "../components/KnowledgeTemplate";

function AFA() {
  return (
    <KnowledgeTemplate
      title="Air Force Academy (AFA)"
      image="/knowledge/afa.jpg"

      intro="The Air Force Academy (AFA), Dundigal is the premier training institution of the Indian Air Force. It trains Flying, Technical and Ground Duty officers and serves as the gateway to a career as an Air Force officer."

      facts={[
        "Location: Dundigal, Hyderabad, Telangana",
        "Established: 1971",
        "Training Academy of the Indian Air Force",
        "Conducts Flying and Ground Training",
        "One of India's most prestigious military academies",
      ]}

      highlights={[
        "Flying Branch training for future pilots",
        "Ground Duty and Technical Branch training",
        "State-of-the-art flight simulators",
        "Modern aviation infrastructure",
        "Leadership and officer development",
        "Combined military and aviation training",
      ]}

      interviewQuestions={[
        "Where is AFA located?",
        "When was AFA established?",
        "Which branches are trained at AFA?",
        "What is the role of AFA?",
        "Difference between NDA and AFA?",
        "Difference between AFA and INA?",
        "What happens after training at AFA?",
      ]}
    />
    
  );
}
<div className="bg-sky-50 p-6 rounded-xl shadow mt-8">
  <h2 className="text-3xl font-bold mb-4">
    Branches Trained at AFA
  </h2>

  <ul className="list-disc pl-6 space-y-2">
    <li>Flying Branch</li>
    <li>Technical Branch</li>
    <li>Ground Duty Branch</li>
    <li>Administration Branch</li>
    <li>Logistics Branch</li>
    <li>Meteorology Branch</li>
  </ul>
  <div className="bg-white p-6 rounded-xl shadow mt-8">
  <h2 className="text-3xl font-bold mb-4">
    NDA vs AFA
  </h2>

  <table className="w-full border">
    <tbody>

      <tr className="border">
        <td className="p-3 font-bold">NDA</td>
        <td className="p-3">
          Tri-Service Training Academy
        </td>
      </tr>

      <tr className="border">
        <td className="p-3 font-bold">AFA</td>
        <td className="p-3">
          Specialized Air Force Officer Training
        </td>
      </tr>

    </tbody>
  </table>
</div>
<div className="grid md:grid-cols-3 gap-6 mt-8">

  <div className="bg-white p-6 rounded-xl shadow">
    <h3 className="text-xl font-bold">
      Location
    </h3>
    <p>Dundigal, Hyderabad</p>
  </div>

  <div className="bg-white p-6 rounded-xl shadow">
    <h3 className="text-xl font-bold">
      Established
    </h3>
    <p>1971</p>
  </div>

  <div className="bg-white p-6 rounded-xl shadow">
    <h3 className="text-xl font-bold">
      Service
    </h3>
    <p>Indian Air Force</p>
  </div>

</div>
</div>




export default AFA;