import WarTemplate from "../components/WarTemplate";

function War1965() {
  return (
    <WarTemplate
      title="1965 Indo-Pak War"
      image="/knowledge/1965war.jpg"

      overview="The 1965 Indo-Pak War was fought after Pakistan launched Operation Gibraltar in Jammu and Kashmir. The conflict saw intense battles involving infantry, armour and air forces."

      causes={[
        "Operation Gibraltar by Pakistan",
        "Attempt to infiltrate Jammu & Kashmir",
        "Escalation along the international border",
      ]}

      timeline={[
        "August 1965 - Operation Gibraltar launched",
        "September 1965 - Full scale war begins",
        "Battle of Asal Uttar",
        "September 1965 - Ceasefire declared",
      ]}

      heroes={[
        {
          name: "Company Quartermaster Havildar Abdul Hamid PVC",
          desc: "Destroyed several Pakistani Patton Tanks at Asal Uttar",
          link: "https://en.wikipedia.org/wiki/Abdul_Hamid",
        },

        {
          name: "Air Chief Marshal Arjan Singh",
          desc: "Chief of Air Staff during the conflict",
          link: "https://en.wikipedia.org/wiki/Arjan_Singh",
        },

        {
          name: "General J. N. Chaudhuri",
          desc: "Chief of Army Staff during the war",
          link: "https://en.wikipedia.org/wiki/Jayanto_Nath_Chaudhuri",
        },
      ]}

      outcome="The war ended with a UN-sponsored ceasefire. India successfully repelled Pakistani offensives and demonstrated strong military capability."

      interviewQuestions={[
        "What was Operation Gibraltar?",
        "Who was Abdul Hamid?",
        "Why is the Battle of Asal Uttar famous?",
        "What were Patton Tanks?",
        "Who was Arjan Singh?",
      ]}
    />
  );
}

export default War1965;