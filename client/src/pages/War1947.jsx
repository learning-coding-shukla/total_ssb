import WarTemplate from "../components/WarTemplate";

function War1947() {
  return (
    <WarTemplate
      title="1947 Indo-Pak War"
      image="/knowledge/1947war.jpg"
      overview="The First Indo-Pak War was fought over Jammu and Kashmir shortly after India's independence. It began when Pakistan-backed tribal forces invaded Kashmir in October 1947."
      causes={[
        "Partition of India in 1947",
        "Pakistan-backed tribal invasion of Kashmir",
        "Accession of Jammu & Kashmir to India",
        "Need to defend Srinagar and Kashmir Valley",
      ]}
      timeline={[
        "22 Oct 1947 - Tribal invasion begins",
        "26 Oct 1947 - Instrument of Accession signed",
        "27 Oct 1947 - Indian troops airlifted to Srinagar",
        "3 Nov 1947 - Battle of Badgam",
        "1 Jan 1949 - Ceasefire comes into effect",
      ]}
      heroes={[
        {
          name: "Major Somnath Sharma PVC",
          desc: "India's first Param Vir Chakra awardee. Martyred while defending Badgam.",
          link: "https://en.wikipedia.org/wiki/Somnath_Sharma",
        },

        {
          name: "Brigadier Rajinder Singh",
          desc: "Delayed the tribal advance and helped save Kashmir.",
          link: "https://en.wikipedia.org/wiki/Rajinder_Singh",
        },

        {
          name: "Lieutenant Colonel Dewan Ranjit Rai",
          desc: "Among the first Indian officers deployed to Srinagar.",
          link: "https://en.wikipedia.org/wiki/Dewan_Ranjit_Rai",
        },
        <div className="bg-orange-50 p-6 rounded-xl shadow mt-8">
          <h2 className="text-3xl font-bold mb-4">
            First Param Vir Chakra Winner
          </h2>

          <p>
            Major Somnath Sharma became the first recipient of the Param Vir
            Chakra for his heroic actions during the Battle of Badgam on 3
            November 1947.
          </p>
        </div>,
      ]}
      outcome="India successfully defended Srinagar and major parts of Jammu & Kashmir. A UN-mediated ceasefire established the Ceasefire Line, later known as the Line of Control (LoC)."
      interviewQuestions={[
        "Why did the 1947 War start?",
        "Who was Major Somnath Sharma?",
        "What is the Instrument of Accession?",
        "Why was Srinagar Airport important?",
        "Who was Brigadier Rajinder Singh?",
        "What is the Line of Control (LoC)?",
      ]}
    />
  );
}
export default War1947;
