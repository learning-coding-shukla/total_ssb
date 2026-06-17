/* ================================
        HERO & RANK CHART
================================ */

import heroImage from "../assets/images/army/hero.jpg";
import chartImage from "../assets/images/army/rank-chart.png";

/* ================================
     COMMISSIONED OFFICERS
================================ */

import fieldMarshalImg from "../assets/images/army/officers/field-marshal.png";
import generalImg from "../assets/images/army/officers/general.png";
import lieutenantGeneralImg from "../assets/images/army/officers/lieutenant-general.png";
import majorGeneralImg from "../assets/images/army/officers/major-general.png";
import brigadierImg from "../assets/images/army/officers/brigadier.png";
import colonelImg from "../assets/images/army/officers/colonel.png";
import lieutenantColonelImg from "../assets/images/army/officers/lieutenant-colonel.png";
import majorImg from "../assets/images/army/officers/major.png";
import captainImg from "../assets/images/army/officers/captain.png";
import lieutenantImg from "../assets/images/army/officers/lieutenant.png";

/* ================================
              JCO
================================ */

import subedarMajorImg from "../assets/images/army/jco/subedar-major.png";
import subedarImg from "../assets/images/army/jco/subedar.png";
import naikSubedarImg from "../assets/images/army/jco/naik-subedar.png";

/* ================================
          OTHER RANKS
================================ */

import havildarImg from "../assets/images/army/other-ranks/havildar.png";
import naikImg from "../assets/images/army/other-ranks/naik.png";
import lanceNaikImg from "../assets/images/army/other-ranks/lance-naik.png";
import sepoyImg from "../assets/images/army/other-ranks/sepoy.png";

const commissioned = [

{
id:1,
rank:"Lieutenant",
abbreviation:"Lt",
image: lieutenantImg,
type:"Commissioned Officer",
promotion:"Captain",
command:"Platoon",
description:"The first commissioned officer rank in the Indian Army.",
responsibility:"Leads a platoon of approximately 30–40 soldiers.",
academy:"Indian Military Academy / OTA",
salaryLevel:"Level 10",
retirementAge:"54 Years",
badgeDescription:"Two five-pointed stars.",
equivalent:{
army:"Lieutenant",
navy:"Sub Lieutenant",
airForce:"Flying Officer"
}
},

{
id:2,
rank:"Captain",
abbreviation:"Capt",
image: captainImg,
type:"Commissioned Officer",
promotion:"Major",
command:"Company",
description:"Commands a company or serves as staff officer.",
responsibility:"Leads nearly 120 soldiers.",
academy:"IMA / OTA",
salaryLevel:"Level 10B",
retirementAge:"56 Years",
badgeDescription:"Three Stars.",
equivalent:{
army:"Captain",
navy:"Lieutenant",
airForce:"Flight Lieutenant"
}
},

{
id:3,
rank:"Major",
abbreviation:"Maj",
image: majorImg,
type:"Commissioned Officer",
promotion:"Lieutenant Colonel",
command:"Company",
description:"Senior company commander and staff officer.",
responsibility:"Operational planning and command.",
academy:"IMA / OTA",
salaryLevel:"Level 11",
retirementAge:"56 Years",
badgeDescription:"Ashoka Emblem.",
equivalent:{
army:"Major",
navy:"Lieutenant Commander",
airForce:"Squadron Leader"
}
},

{
id:4,
rank:"Lieutenant Colonel",
abbreviation:"Lt Col",
image: lieutenantColonelImg,
type:"Commissioned Officer",
promotion:"Colonel",
command:"Battalion",
description:"Commands a battalion.",
responsibility:"Leads nearly 800 soldiers.",
academy:"IMA",
salaryLevel:"Level 12A",
retirementAge:"54–56 Years",
badgeDescription:"Ashoka Emblem + One Star.",
equivalent:{
army:"Lieutenant Colonel",
navy:"Commander",
airForce:"Wing Commander"
}
},

{
id:5,
rank:"Colonel",
abbreviation:"Col",
image: colonelImg,
type:"Commissioned Officer",
promotion:"Brigadier",
command:"Regiment / Battalion",
description:"Senior commanding officer.",
responsibility:"Commands a Regiment or Battalion.",
academy:"IMA",
salaryLevel:"Level 13",
retirementAge:"57 Years",
badgeDescription:"Ashoka Emblem + Two Stars.",
equivalent:{
army:"Colonel",
navy:"Captain",
airForce:"Group Captain"
}
},

{
id:6,
rank:"Brigadier",
abbreviation:"Brig",
image: brigadierImg,
type:"Commissioned Officer",
promotion:"Major General",
command:"Brigade",
description:"Commands a Brigade.",
responsibility:"Leads 3–5 Battalions.",
academy:"Higher Command Course",
salaryLevel:"Level 13A",
retirementAge:"58 Years",
badgeDescription:"Ashoka Emblem + Three Stars.",
equivalent:{
army:"Brigadier",
navy:"Commodore",
airForce:"Air Commodore"
}
},

{
id:7,
rank:"Major General",
abbreviation:"Maj Gen",
image: majorGeneralImg,
type:"Commissioned Officer",
promotion:"Lieutenant General",
command:"Division",
description:"Commands a Division.",
responsibility:"Leads approximately 15,000 troops.",
academy:"NDC",
salaryLevel:"Level 14",
retirementAge:"58 Years",
badgeDescription:"Crossed Sword & Baton + Star.",
equivalent:{
army:"Major General",
navy:"Rear Admiral",
airForce:"Air Vice Marshal"
}
},

{
id:8,
rank:"Lieutenant General",
abbreviation:"Lt Gen",
image: lieutenantGeneralImg,
type:"Commissioned Officer",
promotion:"General",
command:"Corps",
description:"Commands Corps.",
responsibility:"Leads around 40,000–70,000 troops.",
academy:"NDC",
salaryLevel:"Level 15",
retirementAge:"60 Years",
badgeDescription:"Crossed Sword & Baton + Ashoka.",
equivalent:{
army:"Lieutenant General",
navy:"Vice Admiral",
airForce:"Air Marshal"
}
},

{
id:9,
rank:"General",
abbreviation:"Gen",
image: generalImg,
type:"Commissioned Officer",
promotion:null,
command:"Indian Army",
description:"Chief of the Army Staff (COAS).",
responsibility:"Professional head of the Indian Army.",
academy:"NDC",
salaryLevel:"Level 18",
retirementAge:"62 Years",
badgeDescription:"Crossed Sword & Baton with Ashoka Lion.",
equivalent:{
army:"General",
navy:"Admiral",
airForce:"Air Chief Marshal"
}
},

{
id:10,
rank:"Field Marshal",
abbreviation:"FM",
image: fieldMarshalImg,
type:"Honorary Five-Star Rank",
promotion:null,
command:"Honorary",
description:"Highest honorary rank of the Indian Army.",
responsibility:"Awarded only for exceptional military service.",
academy:null,
salaryLevel:"Honorary",
retirementAge:"Lifetime",
badgeDescription:"National Emblem over crossed baton and sword within a wreath.",
equivalent:{
army:"Field Marshal",
navy:"Admiral of the Fleet",
airForce:"Marshal of the Indian Air Force"
}
}

];
const jco = [

{
id:101,
rank:"Subedar Major",
abbreviation:"Sub Maj",
image: subedarMajorImg,
type:"Junior Commissioned Officer",
promotion:null,
command:"Senior JCO of Battalion",
description:"Highest Junior Commissioned Officer rank.",
responsibility:"Principal advisor to the Commanding Officer regarding troops.",
academy:null,
salaryLevel:"Level 8",
retirementAge:"57 Years",
badgeDescription:"National Emblem with Golden Stripe.",
equivalent:{
army:"Subedar Major",
navy:"Master Chief Petty Officer First Class",
airForce:"Master Warrant Officer"
}
},

{
id:102,
rank:"Subedar",
abbreviation:"Sub",
image: subedarImg,
type:"Junior Commissioned Officer",
promotion:"Subedar Major",
command:"Platoon",
description:"Commands a platoon or performs administrative duties.",
responsibility:"Acts as link between officers and soldiers.",
academy:null,
salaryLevel:"Level 7",
retirementAge:"57 Years",
badgeDescription:"Two Stars with Golden Stripe.",
equivalent:{
army:"Subedar",
navy:"Master Chief Petty Officer Second Class",
airForce:"Warrant Officer"
}
},

{
id:103,
rank:"Naib Subedar",
abbreviation:"Nb Sub",
image: naikSubedarImg,
type:"Junior Commissioned Officer",
promotion:"Subedar",
command:"Section / Platoon",
description:"First JCO rank.",
responsibility:"Leads sections and assists platoon commanders.",
academy:null,
salaryLevel:"Level 6",
retirementAge:"57 Years",
badgeDescription:"One Star with Golden Stripe.",
equivalent:{
army:"Naib Subedar",
navy:"Chief Petty Officer",
airForce:"Junior Warrant Officer"
}
}

];

// =======================================
// Other Ranks
// =======================================

const other = [

{
id:201,
rank:"Havildar",
abbreviation:"Hav",
image: havildarImg,
type:"Non Commissioned Officer",
promotion:"Naib Subedar",
command:"Section",
description:"Senior Non-Commissioned Officer.",
responsibility:"Leads a section of soldiers.",
academy:null,
salaryLevel:"Level 5",
retirementAge:"Service Rules",
badgeDescription:"Three Chevron Stripes.",
equivalent:{
army:"Havildar",
navy:"Petty Officer",
airForce:"Sergeant"
}
},

{
id:202,
rank:"Naik",
abbreviation:"Nk",
image: naikImg,
type:"Non Commissioned Officer",
promotion:"Havildar",
command:"Small Team",
description:"Junior NCO.",
responsibility:"Leads a fire team.",
academy:null,
salaryLevel:"Level 4",
retirementAge:"Service Rules",
badgeDescription:"Two Chevron Stripes.",
equivalent:{
army:"Naik",
navy:"Leading Seaman",
airForce:"Corporal"
}
},

{
id:203,
rank:"Lance Naik",
abbreviation:"L/Nk",
image: lanceNaikImg,
type:"Non Commissioned Officer",
promotion:"Naik",
command:"Buddy Pair / Fire Team",
description:"Entry-level NCO.",
responsibility:"Assists Naik in leading soldiers.",
academy:null,
salaryLevel:"Level 3",
retirementAge:"Service Rules",
badgeDescription:"One Chevron Stripe.",
equivalent:{
army:"Lance Naik",
navy:"Leading Seaman",
airForce:"Leading Aircraftman"
}
},

{
id:204,
rank:"Sepoy",
abbreviation:"Sep",
image: sepoyImg,
type:"Other Rank",
promotion:"Lance Naik",
command:"Not Applicable",
description:"Entry rank for soldiers.",
responsibility:"Performs operational and combat duties.",
academy:null,
salaryLevel:"Level 3",
retirementAge:"Service Rules",
badgeDescription:"No Rank Insignia.",
equivalent:{
army:"Sepoy",
navy:"Seaman II",
airForce:"Aircraftman"
}
}

];

// =======================================
// Facts
// =======================================

const facts = [

{
id:1,
title:"Highest Active Rank",
description:"General is the highest active rank in the Indian Army."
},

{
id:2,
title:"Field Marshal",
description:"Field Marshal is a ceremonial five-star rank awarded only in exceptional circumstances."
},

{
id:3,
title:"Only Two Field Marshals",
description:"Only Field Marshal Sam Manekshaw and Field Marshal K.M. Cariappa have been awarded this rank."
},

{
id:4,
title:"Command Structure",
description:"An Army officer may command a Platoon, Company, Battalion, Brigade, Division, Corps and Army Command during their career."
}

];

// =======================================
// FAQs
// =======================================

const faq = [

{
id:1,
question:"What is the highest rank in the Indian Army?",
answer:"General is the highest active rank. Field Marshal is a ceremonial five-star honorary rank."
},

{
id:2,
question:"Who commands a Battalion?",
answer:"Normally a Colonel or Lieutenant Colonel commands a Battalion."
},

{
id:3,
question:"Who commands a Brigade?",
answer:"A Brigadier commands a Brigade."
},

{
id:4,
question:"Equivalent of Colonel in the Navy?",
answer:"Captain."
},

{
id:5,
question:"Equivalent of Major in the Air Force?",
answer:"Squadron Leader."
}

];

// =======================================
// Sections (Dynamic Rendering)
// =======================================

const sections = [

{
title:"Commissioned Officers",
data:commissioned
},

{
title:"Junior Commissioned Officers",
data:jco
},

{
title:"Other Ranks",
data:other
}

];

// =======================================
// Final Export
// =======================================

const armyRanks = {

service:"Indian Army",

quizType:"army",

theme: "army",

heroImage,

chartImage,

commissioned,

jco,

other,

sections,

facts,

faq,

ranks:[
...commissioned,
...jco,
...other
]

};

export default armyRanks;