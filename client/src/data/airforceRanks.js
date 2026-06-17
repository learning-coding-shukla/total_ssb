/* ================================
        HERO & RANK CHART
================================ */

import heroImage from "../assets/images/airforce/hero.jpg";
import chartImage from "../assets/images/airforce/rank-chart.png";

/* ================================
     COMMISSIONED OFFICERS
================================ */

import marshalOfIAFImg from "../assets/images/airforce/officers/marshal-of-the-indian-air-force.png";
import airChiefMarshalImg from "../assets/images/airforce/officers/air-chief-marshal.png";
import airMarshalImg from "../assets/images/airforce/officers/air-marshal.png";
import airViceMarshalImg from "../assets/images/airforce/officers/air-vice-marshal.png";
import airCommodoreImg from "../assets/images/airforce/officers/air-commodore.png";
import groupCaptainImg from "../assets/images/airforce/officers/group-captain.png";
import wingCommanderImg from "../assets/images/airforce/officers/wing-commander.png";
import squadronLeaderImg from "../assets/images/airforce/officers/squadron-leader.png";
import flightLieutenantImg from "../assets/images/airforce/officers/flight-lieutenant.png";
import flyingOfficerImg from "../assets/images/airforce/officers/flying-officer.png";

/* ================================
       WARRANT OFFICERS
================================ */

import masterWarrantOfficerImg from "../assets/images/airforce/warrant/master-warrant-officer.png";
import warrantOfficerImg from "../assets/images/airforce/warrant/warrant-officer.png";
import juniorWarrantOfficerImg from "../assets/images/airforce/warrant/junior-warrant-officer.png";

/* ================================
            AIRMEN
================================ */

import sergeantImg from "../assets/images/airforce/airmen/sergeant.png";
import corporalImg from "../assets/images/airforce/airmen/corporal.png";
import leadingAircraftmanImg from "../assets/images/airforce/airmen/leading-aircraftsman.png";
import aircraftmanImg from "../assets/images/airforce/airmen/aircraftsman.png";

const commissioned = [

{
id:1,
rank:"Flying Officer",
abbreviation:"Fg Offr",
image:flyingOfficerImg,
type:"Commissioned Officer",
promotion:"Flight Lieutenant",
command:"Flight",
description:"Entry-level commissioned officer of the Indian Air Force.",
responsibility:"Leads technical and operational teams.",
academy:"Air Force Academy",
salaryLevel:"Level 10",
retirementAge:"54 Years",
badgeDescription:"Single light-blue stripe.",
equivalent:{
army:"Lieutenant",
navy:"Sub Lieutenant",
airForce:"Flying Officer"
}
},

{
id:2,
rank:"Flight Lieutenant",
abbreviation:"Flt Lt",
image:flightLieutenantImg,
type:"Commissioned Officer",
promotion:"Squadron Leader",
command:"Flight",
description:"Junior commissioned officer with operational responsibilities.",
responsibility:"Supervises flying and technical operations.",
academy:"Air Force Academy",
salaryLevel:"Level 10B",
retirementAge:"56 Years",
badgeDescription:"Two light-blue stripes.",
equivalent:{
army:"Captain",
navy:"Lieutenant",
airForce:"Flight Lieutenant"
}
},

{
id:3,
rank:"Squadron Leader",
abbreviation:"Sqn Ldr",
image:squadronLeaderImg,
type:"Commissioned Officer",
promotion:"Wing Commander",
command:"Squadron",
description:"Commands a flight or serves as senior staff officer.",
responsibility:"Operational planning and squadron management.",
academy:"Air Force Academy",
salaryLevel:"Level 11",
retirementAge:"56 Years",
badgeDescription:"Three stripes.",
equivalent:{
army:"Major",
navy:"Lieutenant Commander",
airForce:"Squadron Leader"
}
},

{
id:4,
rank:"Wing Commander",
abbreviation:"Wg Cdr",
image:wingCommanderImg,
type:"Commissioned Officer",
promotion:"Group Captain",
command:"Flying Squadron",
description:"Commands operational flying squadrons.",
responsibility:"Operational leadership and administration.",
academy:"Air Force Academy",
salaryLevel:"Level 12A",
retirementAge:"56 Years",
badgeDescription:"Four stripes.",
equivalent:{
army:"Lieutenant Colonel",
navy:"Commander",
airForce:"Wing Commander"
}
},

{
id:5,
rank:"Group Captain",
abbreviation:"Gp Capt",
image:groupCaptainImg,
type:"Commissioned Officer",
promotion:"Air Commodore",
command:"Air Base",
description:"Commands an Air Force Station or major base.",
responsibility:"Overall operational and administrative command.",
academy:"Higher Air Command",
salaryLevel:"Level 13",
retirementAge:"57 Years",
badgeDescription:"Broad stripe with eagle.",
equivalent:{
army:"Colonel",
navy:"Captain",
airForce:"Group Captain"
}
},

{
id:6,
rank:"Air Commodore",
abbreviation:"Air Cdre",
image:airCommodoreImg,
type:"Air Officer",
promotion:"Air Vice Marshal",
command:"Air Brigade",
description:"One-star Air Officer.",
responsibility:"Commands large operational formations.",
academy:"Higher Air Command",
salaryLevel:"Level 13A",
retirementAge:"58 Years",
badgeDescription:"Broad stripe with one star.",
equivalent:{
army:"Brigadier",
navy:"Commodore",
airForce:"Air Commodore"
}
},

{
id:7,
rank:"Air Vice Marshal",
abbreviation:"AVM",
image:airViceMarshalImg,
type:"Air Officer",
promotion:"Air Marshal",
command:"Air Division",
description:"Two-star Air Officer.",
responsibility:"Commands Air Divisions and major establishments.",
academy:"National Defence College",
salaryLevel:"Level 14",
retirementAge:"60 Years",
badgeDescription:"Two-star insignia.",
equivalent:{
army:"Major General",
navy:"Rear Admiral",
airForce:"Air Vice Marshal"
}
},

{
id:8,
rank:"Air Marshal",
abbreviation:"Air Mshl",
image:airMarshalImg,
type:"Air Officer",
promotion:"Air Chief Marshal",
command:"Operational Command",
description:"Three-star Air Officer.",
responsibility:"Commands one of the operational Air Commands.",
academy:"National Defence College",
salaryLevel:"Level 15",
retirementAge:"60 Years",
badgeDescription:"Three-star insignia.",
equivalent:{
army:"Lieutenant General",
navy:"Vice Admiral",
airForce:"Air Marshal"
}
},

{
id:9,
rank:"Air Chief Marshal",
abbreviation:"ACM",
image:airChiefMarshalImg,
type:"Air Officer",
promotion:null,
command:"Chief of the Air Staff",
description:"Highest active rank in the Indian Air Force.",
responsibility:"Professional head of the Indian Air Force.",
academy:"National Defence College",
salaryLevel:"Level 18",
retirementAge:"62 Years",
badgeDescription:"Four-star insignia.",
equivalent:{
army:"General",
navy:"Admiral",
airForce:"Air Chief Marshal"
}
},

{
id:10,
rank:"Marshal of the Indian Air Force",
abbreviation:"MIAF",
image:marshalOfIAFImg,
type:"Honorary Five-Star Rank",
promotion:null,
command:"Honorary",
description:"Highest honorary rank in the Indian Air Force.",
responsibility:"Awarded only for extraordinary military service.",
academy:null,
salaryLevel:"Honorary",
retirementAge:"Lifetime",
badgeDescription:"Five-star honorary insignia.",
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
rank:"Master Warrant Officer",
abbreviation:"MWO",
image:masterWarrantOfficerImg,
type:"Warrant Officer",
promotion:null,
command:"Senior Airmen",
description:"Highest rank among Warrant Officers in the Indian Air Force.",
responsibility:"Acts as senior advisor to commanding officers and supervises personnel.",
academy:null,
salaryLevel:"Level 8",
retirementAge:"Service Rules",
badgeDescription:"National emblem with wreath.",
equivalent:{
army:"Subedar Major",
navy:"Master Chief Petty Officer First Class",
airForce:"Master Warrant Officer"
}
},

{
id:102,
rank:"Warrant Officer",
abbreviation:"WO",
image:warrantOfficerImg,
type:"Warrant Officer",
promotion:"Master Warrant Officer",
command:"Section",
description:"Senior supervisory airman.",
responsibility:"Supervises technical and administrative sections.",
academy:null,
salaryLevel:"Level 7",
retirementAge:"Service Rules",
badgeDescription:"Ashoka emblem.",
equivalent:{
army:"Subedar",
navy:"Master Chief Petty Officer Second Class",
airForce:"Warrant Officer"
}
},

{
id:103,
rank:"Junior Warrant Officer",
abbreviation:"JWO",
image:juniorWarrantOfficerImg,
type:"Warrant Officer",
promotion:"Warrant Officer",
command:"Flight Section",
description:"First Warrant Officer rank.",
responsibility:"Supervises airmen and assists officers.",
academy:null,
salaryLevel:"Level 6",
retirementAge:"Service Rules",
badgeDescription:"IAF eagle insignia.",
equivalent:{
army:"Naib Subedar",
navy:"Chief Petty Officer",
airForce:"Junior Warrant Officer"
}
}

];

// ======================================
// Airmen
// ======================================

const other = [

{
id:201,
rank:"Sergeant",
abbreviation:"Sgt",
image:sergeantImg,
type:"Airman",
promotion:"Junior Warrant Officer",
command:"Technical Team",
description:"Senior Non-Commissioned Airman.",
responsibility:"Leads maintenance and operational teams.",
academy:null,
salaryLevel:"Level 5",
retirementAge:"Service Rules",
badgeDescription:"Three chevrons.",
equivalent:{
army:"Havildar",
navy:"Petty Officer",
airForce:"Sergeant"
}
},

{
id:202,
rank:"Corporal",
abbreviation:"Cpl",
image:corporalImg,
type:"Airman",
promotion:"Sergeant",
command:"Small Team",
description:"Junior Non-Commissioned Airman.",
responsibility:"Assists Sergeant in technical supervision.",
academy:null,
salaryLevel:"Level 4",
retirementAge:"Service Rules",
badgeDescription:"Two chevrons.",
equivalent:{
army:"Naik",
navy:"Leading Seaman",
airForce:"Corporal"
}
},

{
id:203,
rank:"Leading Aircraftman",
abbreviation:"LAC",
image:leadingAircraftmanImg,
type:"Airman",
promotion:"Corporal",
command:"Not Applicable",
description:"Experienced Aircraftman.",
responsibility:"Performs technical and operational duties.",
academy:null,
salaryLevel:"Level 3",
retirementAge:"Service Rules",
badgeDescription:"Single propeller insignia.",
equivalent:{
army:"Lance Naik",
navy:"Seaman First Class",
airForce:"Leading Aircraftman"
}
},

{
id:204,
rank:"Aircraftman",
abbreviation:"AC",
image:aircraftmanImg,
type:"Airman",
promotion:"Leading Aircraftman",
command:"Not Applicable",
description:"Entry-level airman rank.",
responsibility:"Carries out operational and technical duties under supervision.",
academy:null,
salaryLevel:"Level 3",
retirementAge:"Service Rules",
badgeDescription:"No rank insignia.",
equivalent:{
army:"Sepoy",
navy:"Seaman Second Class",
airForce:"Aircraftman"
}
}

];

// ======================================
// Facts
// ======================================

const facts = [

{
id:1,
title:"Highest Active Rank",
description:"Air Chief Marshal is the highest active rank in the Indian Air Force."
},

{
id:2,
title:"Five-Star Rank",
description:"Marshal of the Indian Air Force is the honorary five-star rank."
},

{
id:3,
title:"Only One Officer",
description:"Marshal Arjan Singh is the only officer to have held the rank of Marshal of the Indian Air Force."
},

{
id:4,
title:"Operational Commands",
description:"The Indian Air Force is organized into multiple operational and functional commands."
}

];

// ======================================
// FAQ
// ======================================

const faq = [

{
id:1,
question:"What is the highest active rank in the Indian Air Force?",
answer:"Air Chief Marshal."
},

{
id:2,
question:"Who commands an Air Command?",
answer:"An Air Marshal."
},

{
id:3,
question:"Equivalent of Colonel in the Air Force?",
answer:"Group Captain."
},

{
id:4,
question:"Equivalent of Brigadier in the Air Force?",
answer:"Air Commodore."
},

{
id:5,
question:"Who is the only Marshal of the Indian Air Force?",
answer:"Marshal Arjan Singh."
}

];

// ======================================
// Dynamic Sections
// ======================================

const sections = [

{
title:"Commissioned Officers",
data:commissioned
},

{
title:"Warrant Officers",
data:jco
},

{
title:"Airmen",
data:other
}

];

// ======================================
// Final Export
// ======================================

const airforceRanks = {

service:"Indian Air Force",

quizType:"airforce",

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

export default airforceRanks;