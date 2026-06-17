// ======================================
// Equivalent Rank Structure
// Indian Army • Indian Navy • Indian Air Force
// ======================================

const equivalentRanks = [

  {
    id: 1,
    category: "Five-Star Rank",

    army: {
      rank: "Field Marshal",
      image: "/assets/ranks/army/officers/field-marshal.png",
    },

    navy: {
      rank: "Admiral of the Fleet",
      image: "/assets/ranks/navy/officers/admiral-of-the-fleet.png",
    },

    airForce: {
      rank: "Marshal of the Indian Air Force",
      image: "/assets/ranks/airforce/officers/marshal-iaf.png",
    },
  },

  {
    id: 2,
    category: "Four-Star Officer",

    army: {
      rank: "General",
      image: "/assets/ranks/army/officers/general.png",
    },

    navy: {
      rank: "Admiral",
      image: "/assets/ranks/navy/officers/admiral.png",
    },

    airForce: {
      rank: "Air Chief Marshal",
      image: "/assets/ranks/airforce/officers/air-chief-marshal.png",
    },
  },

  {
    id: 3,
    category: "Three-Star Officer",

    army: {
      rank: "Lieutenant General",
      image: "/assets/ranks/army/officers/lieutenant-general.png",
    },

    navy: {
      rank: "Vice Admiral",
      image: "/assets/ranks/navy/officers/vice-admiral.png",
    },

    airForce: {
      rank: "Air Marshal",
      image: "/assets/ranks/airforce/officers/air-marshal.png",
    },
  },

  {
    id: 4,
    category: "Two-Star Officer",

    army: {
      rank: "Major General",
      image: "/assets/ranks/army/officers/major-general.png",
    },

    navy: {
      rank: "Rear Admiral",
      image: "/assets/ranks/navy/officers/rear-admiral.png",
    },

    airForce: {
      rank: "Air Vice Marshal",
      image: "/assets/ranks/airforce/officers/air-vice-marshal.png",
    },
  },

  {
    id: 5,
    category: "One-Star Officer",

    army: {
      rank: "Brigadier",
      image: "/assets/ranks/army/officers/brigadier.png",
    },

    navy: {
      rank: "Commodore",
      image: "/assets/ranks/navy/officers/commodore.png",
    },

    airForce: {
      rank: "Air Commodore",
      image: "/assets/ranks/airforce/officers/air-commodore.png",
    },
  },

  {
    id: 6,
    category: "Senior Officer",

    army: {
      rank: "Colonel",
      image: "/assets/ranks/army/officers/colonel.png",
    },

    navy: {
      rank: "Captain",
      image: "/assets/ranks/navy/officers/captain.png",
    },

    airForce: {
      rank: "Group Captain",
      image: "/assets/ranks/airforce/officers/group-captain.png",
    },
  },

  {
    id: 7,
    category: "Middle Officer",

    army: {
      rank: "Lieutenant Colonel",
      image: "/assets/ranks/army/officers/lt-colonel.png",
    },

    navy: {
      rank: "Commander",
      image: "/assets/ranks/navy/officers/commander.png",
    },

    airForce: {
      rank: "Wing Commander",
      image: "/assets/ranks/airforce/officers/wing-commander.png",
    },
  },

  {
    id: 8,
    category: "Junior Officer",

    army: {
      rank: "Major",
      image: "/assets/ranks/army/officers/major.png",
    },

    navy: {
      rank: "Lieutenant Commander",
      image: "/assets/ranks/navy/officers/lieutenant-commander.png",
    },

    airForce: {
      rank: "Squadron Leader",
      image: "/assets/ranks/airforce/officers/squadron-leader.png",
    },
  },

  {
    id: 9,
    category: "Company Grade Officer",

    army: {
      rank: "Captain",
      image: "/assets/ranks/army/officers/captain.png",
    },

    navy: {
      rank: "Lieutenant",
      image: "/assets/ranks/navy/officers/lieutenant.png",
    },

    airForce: {
      rank: "Flight Lieutenant",
      image: "/assets/ranks/airforce/officers/flight-lieutenant.png",
    },
  },

  {
    id: 10,
    category: "Entry Officer",

    army: {
      rank: "Lieutenant",
      image: "/assets/ranks/army/officers/lieutenant.png",
    },

    navy: {
      rank: "Sub Lieutenant",
      image: "/assets/ranks/navy/officers/sub-lieutenant.png",
    },

    airForce: {
      rank: "Flying Officer",
      image: "/assets/ranks/airforce/officers/flying-officer.png",
    },
  },

  {
    id: 11,
    category: "Senior JCO / Warrant",

    army: {
      rank: "Subedar Major",
      image: "/assets/ranks/army/jco/subedar-major.png",
    },

    navy: {
      rank: "Master Chief Petty Officer First Class",
      image: "/assets/ranks/navy/sailors/master-chief-petty-officer-1.png",
    },

    airForce: {
      rank: "Master Warrant Officer",
      image: "/assets/ranks/airforce/airmen/master-warrant-officer.png",
    },
  },

  {
    id: 12,
    category: "Junior JCO / Warrant",

    army: {
      rank: "Naib Subedar",
      image: "/assets/ranks/army/jco/naib-subedar.png",
    },

    navy: {
      rank: "Chief Petty Officer",
      image: "/assets/ranks/navy/sailors/chief-petty-officer.png",
    },

    airForce: {
      rank: "Junior Warrant Officer",
      image: "/assets/ranks/airforce/airmen/junior-warrant-officer.png",
    },
  },

  {
    id: 13,
    category: "Senior NCO",

    army: {
      rank: "Havildar",
      image: "/assets/ranks/army/or/havildar.png",
    },

    navy: {
      rank: "Petty Officer",
      image: "/assets/ranks/navy/sailors/petty-officer.png",
    },

    airForce: {
      rank: "Sergeant",
      image: "/assets/ranks/airforce/airmen/sergeant.png",
    },
  },

  {
    id: 14,
    category: "Junior NCO",

    army: {
      rank: "Naik",
      image: "/assets/ranks/army/or/naik.png",
    },

    navy: {
      rank: "Leading Seaman",
      image: "/assets/ranks/navy/sailors/leading-seaman.png",
    },

    airForce: {
      rank: "Corporal",
      image: "/assets/ranks/airforce/airmen/corporal.png",
    },
  },

  {
    id: 15,
    category: "Entry Personnel",

    army: {
      rank: "Sepoy",
      image: "/assets/ranks/army/or/sepoy.png",
    },

    navy: {
      rank: "Seaman Second Class",
      image: "/assets/ranks/navy/sailors/seaman-2.png",
    },

    airForce: {
      rank: "Aircraftman",
      image: "/assets/ranks/airforce/airmen/aircraftman.png",
    },
  },

];

export default equivalentRanks;