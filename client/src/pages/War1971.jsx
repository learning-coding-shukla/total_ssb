import WarTemplate from "../components/WarTemplate";

function War1971() {
  return (
    <WarTemplate
      title="1971 Indo-Pak War"

      image="/knowledge/1971war.jpg"

      overview="The 1971 Indo-Pak War resulted in the creation of Bangladesh and is considered one of India's greatest military victories."

      causes={[
        "Political crisis in East Pakistan",
        "Refugee influx into India",
        "Human rights violations by Pakistan",
        "Support for Bangladesh Liberation Movement",
      ]}

      timeline={[
        "March 1971 - Crisis begins in East Pakistan",
        "3 Dec 1971 - Pakistan attacks Indian airfields",
        "India launches full-scale operations",
        "16 Dec 1971 - Pakistan surrenders in Dhaka",
      ]}

      heroes={[
        {
          name: "Field Marshal Sam Manekshaw",
          desc: "Chief of Army Staff during the war",
          link: "https://en.wikipedia.org/wiki/Sam_Manekshaw",
        },

        {
          name: "Flying Officer Nirmal Jit Singh Sekhon PVC",
          desc: "Only PVC awardee of the Indian Air Force",
          link: "https://en.wikipedia.org/wiki/Nirmal_Jit_Singh_Sekhon",
        },

        {
          name: "Lt Gen Jagjit Singh Aurora",
          desc: "Accepted Pakistan's surrender in Dhaka",
          link: "https://en.wikipedia.org/wiki/Jagjit_Singh_Aurora",
        },

        {
          name: "Admiral S. M. Nanda",
          desc: "Led Indian Navy during the war",
          link: "https://en.wikipedia.org/wiki/S._M._Nanda",
        },
      ]}

      outcome="Pakistan surrendered on 16 December 1971. Bangladesh was created and approximately 93,000 Pakistani personnel surrendered."

      interviewQuestions={[
        "Why was the 1971 War fought?",
        "Who was Sam Manekshaw?",
        "What happened on 16 December 1971?",
        "What is Operation Trident?",
        "Who accepted Pakistan's surrender?",
        "How was Bangladesh created?",
      ]}
    />
  );
}

export default War1971;