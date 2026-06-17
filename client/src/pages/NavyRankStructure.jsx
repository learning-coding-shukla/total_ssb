
// export default NavyRankStructure;
import RankLayout from "../components/RankStructure/RankLayout";

import navyRanks from "../data/navyRanks";
import equivalentRanks from "../data/equivalentRanks";

const NavyRankStructure = () => {
  return (
    <RankLayout
      data={navyRanks}
      comparison={equivalentRanks}
    />
  );
};

export default NavyRankStructure;