// import RankLayout from "../components/RankStructure/RankLayout";

// import airforceRanks from "../data/airforceRanks";
// import equivalentRanks from "../data/equivalentRanks";
// import rankFacts from "../data/rankFacts";
// import rankFaq from "../data/rankFaq";

// import hero from "../assets/ranks/airforce/hero.jpg";
// import chart from "../assets/ranks/airforce/rank-chart.png";

// const AirForceRankStructure = () => {
//   return (
//     <RankLayout
//       service="Indian Air Force"
//       heroImage={hero}
//       heroChart={chart}
//       rankData={airforceRanks}
//       facts={rankFacts.airforce}
//       faqs={rankFaq.airforce}
//       comparison={equivalentRanks}
//     />
//   );
// };

// export default AirForceRankStructure;
import RankLayout from "../components/RankStructure/RankLayout";

import airforceRanks from "../data/airforceRanks";
import equivalentRanks from "../data/equivalentRanks";

const AirForceRankStructure = () => {
  return (
    <RankLayout
      data={airforceRanks}
      comparison={equivalentRanks}
    />
  );
};

export default AirForceRankStructure;