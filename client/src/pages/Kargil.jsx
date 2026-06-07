import WarTemplate from "../components/WarTemplate";

function Kargil() {
  return (
    <WarTemplate
      title="Kargil War (1999)"
      image="/knowledge/kargil.jpg"

      overview="The Kargil War was fought between India and Pakistan in 1999 after Pakistani intruders occupied strategic heights in the Kargil sector."

      causes={[
        "Pakistani intrusion across LoC",
        "Occupation of strategic heights",
        "Threat to NH-1A",
      ]}

      timeline={[
        "May 1999 - Intrusions detected",
        "Operation Vijay launched",
        "Tiger Hill recaptured",
        "July 1999 - Victory declared",
      ]}

heroes={[
  {
    name: "Captain Vikram Batra PVC",
    desc: "Hero of Point 4875",
    link: "https://en.wikipedia.org/wiki/Vikram_Batra",
  },

  {
    name: "Captain Manoj Kumar Pandey PVC",
    desc: "Hero of Khalubar",
    link: "https://en.wikipedia.org/wiki/Manoj_Kumar_Pandey",
  },

  {
    name: "Grenadier Yogendra Singh Yadav PVC",
    desc: "Tiger Hill assault team",
    link: "https://en.wikipedia.org/wiki/Yogendra_Singh_Yadav",
  },

  {
    name: "Rifleman Sanjay Kumar PVC",
    desc: "Captured enemy bunkers despite injuries",
    link: "https://en.wikipedia.org/wiki/Sanjay_Kumar_(soldier)",
  },
]}


      outcome="India successfully evicted intruders and restored territorial integrity."

      interviewQuestions={[
        "What was Operation Vijay?",
        "Why was Tiger Hill important?",
        "Who was Captain Vikram Batra?",
        "Why is Kargil strategically important?",
      ]}
    />
  );
}


export default Kargil;