// import RankLayout from "../components/RankStructure/RankLayout";

// import armyRanks from "../data/armyRanks";
// import equivalentRanks from "../data/equivalentRanks";
// import rankFacts from "../data/rankFacts";
// import rankFaq from "../data/rankFaq";

// import hero from "../assets/ranks/army/hero.jpg";
// import chart from "../assets/ranks/army/rank-chart.png";

// const ArmyRankStructure = () => {
//   return (
//     <RankLayout
//       service="Indian Army"
//       heroImage={hero}
//       heroChart={chart}
//       rankData={armyRanks}
//       facts={rankFacts.army}
//       faqs={rankFaq.army}
//       comparison={equivalentRanks}
//     />
//   );
// };

// export default ArmyRankStructure;
import RankLayout from "../components/RankStructure/RankLayout";

import armyRanks from "../data/armyRanks";
import equivalentRanks from "../data/equivalentRanks";

const ArmyRankStructure = () => {
  return (
    <RankLayout
      data={armyRanks}
      comparison={equivalentRanks}
    />
  );
};

export default ArmyRankStructure;