import KnowledgeTemplate from "../components/KnowledgeTemplate";

function IMA() {
  return (
    <KnowledgeTemplate
      title="Indian Military Academy (IMA)"
      image="/knowledge/ima.jpg"

      intro="The Indian Military Academy (IMA) is the premier training institution for officers of the Indian Army. Located in Dehradun, it has produced some of India's finest military leaders since its establishment."

      facts={[
        "Location: Dehradun, Uttarakhand",
        "Established: 1 October 1932",
        "Motto: Veerta Aur Vivek (Valour and Wisdom)",
        "Training Academy for Indian Army Officers",
        "Founder: Field Marshal Sir Philip Chetwode",
      ]}

      highlights={[
        "Chetwode Building is the iconic landmark of IMA",
        "Gentlemen Cadets undergo rigorous military training",
        "Passing Out Parade marks commissioning into the Army",
        "Sword of Honour is awarded to the best cadet",
        "Antim Pag (Final Step) symbolizes becoming an officer",
        "Many Army Chiefs are IMA alumni",
      ]}

      interviewQuestions={[
        "Where is IMA located?",
        "Who founded IMA?",
        "What is the Chetwode Motto?",
        "What is Antim Pag?",
        "What is the significance of the Sword of Honour?",
        "What happens after Passing Out Parade?",
        "Difference between NDA and IMA?",
      ]}
    />
  );
}
<div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-xl mt-8">
  <h2 className="text-3xl font-bold mb-4">
    Chetwode Motto
  </h2>
  <div className="grid md:grid-cols-3 gap-6 mt-10">

  <div className="bg-white p-6 rounded-xl shadow">
    <h3 className="font-bold text-xl">
      Established
    </h3>
    <p>1932</p>
  </div>

  <div className="bg-white p-6 rounded-xl shadow">
    <h3 className="font-bold text-xl">
      Location
    </h3>
    <p>Dehradun</p>
  </div>

  <div className="bg-white p-6 rounded-xl shadow">
    <h3 className="font-bold text-xl">
      Motto
    </h3>
    <p>Veerta Aur Vivek</p>
  </div>

</div>

  <p className="italic text-lg">
    "The Safety, Honour and Welfare of your Country come first,
    always and every time.
    The Honour, Welfare and Comfort of the men you command come next.
    Your own Ease, Comfort and Safety come last, always and every time."
  </p>
</div>

export default IMA;