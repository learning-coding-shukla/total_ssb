/* ================================
        HERO & RANK CHART
================================ */

import heroImage from "../assets/images/navy/hero.jpg";
import chartImage from "../assets/images/navy/rank-chart.png";

/* ================================
     COMMISSIONED OFFICERS
================================ */

import admiralOfFleetImg from "../assets/images/navy/officers/admiral-of-the-fleet.png";
import admiralImg from "../assets/images/navy/officers/admiral.png";
import viceAdmiralImg from "../assets/images/navy/officers/vice-admiral.png";
import rearAdmiralImg from "../assets/images/navy/officers/rear-admiral.png";
import commodoreImg from "../assets/images/navy/officers/commodore.png";
import captainImg from "../assets/images/navy/officers/captain.png";
import commanderImg from "../assets/images/navy/officers/commander.png";
import lieutenantCommanderImg from "../assets/images/navy/officers/lieutenant-commander.png";
import lieutenantImg from "../assets/images/navy/officers/lieutenant.png";
import subLieutenantImg from "../assets/images/navy/officers/sub-lieutenant.png";

/* ================================
          WARRANT
================================ */

import masterChiefPettyOfficer1Img from "../assets/images/navy/warrant/master-chief-petty-officer-1st-class.png";
import masterChiefPettyOfficer2Img from "../assets/images/navy/warrant/master-chief-petty-officer-2nd-class.png";
import chiefPettyOfficerImg from "../assets/images/navy/warrant/chief-petty-officer.png";

/* ================================
            SAILORS
================================ */

import pettyOfficerImg from "../assets/images/navy/sailors/petty-officer.png";
import leadingSeamanImg from "../assets/images/navy/sailors/leading-seaman.png";
import seaman1Img from "../assets/images/navy/sailors/seaman-1.png";
import seaman2Img from "../assets/images/navy/sailors/seaman-2.png";
import { image } from "framer-motion/client";

const commissioned = [

{
id:1,
rank:"Sub Lieutenant",
abbreviation:"SLt",
image:subLieutenantImg,
type:"Commissioned Officer",
promotion:"Lieutenant",
command:"Division / Watch",
description:"The entry-level commissioned officer rank in the Indian Navy.",
responsibility:"Leads a division, bridge watch or engineering section.",
academy:"Indian Naval Academy",
salaryLevel:"Level 10",
retirementAge:"54 Years",
badgeDescription:"Single executive stripe with curl.",
equivalent:{
army:"Lieutenant",
navy:"Sub Lieutenant",
airForce:"Flying Officer"
}
},

{
id:2,
rank:"Lieutenant",
abbreviation:"Lt",
image:lieutenantImg,
type:"Commissioned Officer",
promotion:"Lieutenant Commander",
command:"Department",
description:"Experienced junior officer responsible for departmental duties.",
responsibility:"Assists department heads and commands smaller units onboard.",
academy:"Indian Naval Academy",
salaryLevel:"Level 10B",
retirementAge:"56 Years",
badgeDescription:"Two executive stripes with curl.",
equivalent:{
army:"Captain",
navy:"Lieutenant",
airForce:"Flight Lieutenant"
}
},

{
id:3,
rank:"Lieutenant Commander",
abbreviation:"Lt Cdr",
image:lieutenantCommanderImg,
type:"Commissioned Officer",
promotion:"Commander",
command:"Executive Officer",
description:"Middle-level officer with increased command responsibilities.",
responsibility:"Acts as Executive Officer or Department Head.",
academy:"Indian Naval Academy",
salaryLevel:"Level 11",
retirementAge:"56 Years",
badgeDescription:"Two and a half executive stripes.",
equivalent:{
army:"Major",
navy:"Lieutenant Commander",
airForce:"Squadron Leader"
}
},

{
id:4,
rank:"Commander",
abbreviation:"Cdr",
image:commanderImg,
type:"Commissioned Officer",
promotion:"Captain",
command:"Warship",
description:"Commands smaller warships and naval establishments.",
responsibility:"Responsible for operational readiness and administration.",
academy:"Indian Naval Academy",
salaryLevel:"Level 12A",
retirementAge:"56 Years",
badgeDescription:"Three executive stripes.",
equivalent:{
army:"Lieutenant Colonel",
navy:"Commander",
airForce:"Wing Commander"
}
},

{
id:5,
rank:"Captain",
abbreviation:"Capt",
image:captainImg,
type:"Commissioned Officer",
promotion:"Commodore",
command:"Major Warship / Naval Base",
description:"Commands major warships and important naval establishments.",
responsibility:"Leads large operational units.",
academy:"Indian Naval Academy",
salaryLevel:"Level 13",
retirementAge:"57 Years",
badgeDescription:"Four executive stripes.",
equivalent:{
army:"Colonel",
navy:"Captain",
airForce:"Group Captain"
}
},

{
id:6,
rank:"Commodore",
abbreviation:"Cmde",
image:commodoreImg,
type:"Commissioned Officer",
promotion:"Rear Admiral",
command:"Flotilla",
description:"One-star Flag Officer.",
responsibility:"Commands flotillas and important naval formations.",
academy:"Higher Command Course",
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
rank:"Rear Admiral",
abbreviation:"RAdm",
image:rearAdmiralImg,
type:"Flag Officer",
promotion:"Vice Admiral",
command:"Fleet",
description:"Two-star Flag Officer.",
responsibility:"Commands a Naval Fleet.",
academy:"National Defence College",
salaryLevel:"Level 14",
retirementAge:"60 Years",
badgeDescription:"Broad stripe with crossed sword and baton.",
equivalent:{
army:"Major General",
navy:"Rear Admiral",
airForce:"Air Vice Marshal"
}
},

{
id:8,
rank:"Vice Admiral",
abbreviation:"VAdm",
image:viceAdmiralImg,
type:"Flag Officer",
promotion:"Admiral",
command:"Naval Command",
description:"Three-star Flag Officer.",
responsibility:"Commands one of the operational Naval Commands.",
academy:"National Defence College",
salaryLevel:"Level 15",
retirementAge:"60 Years",
badgeDescription:"Broad stripe with Ashoka emblem.",
equivalent:{
army:"Lieutenant General",
navy:"Vice Admiral",
airForce:"Air Marshal"
}
},

{
id:9,
rank:"Admiral",
abbreviation:"Adm",
image:admiralImg,
type:"Flag Officer",
promotion:null,
command:"Chief of the Naval Staff",
description:"Highest active rank in the Indian Navy.",
responsibility:"Professional head of the Indian Navy.",
academy:"National Defence College",
salaryLevel:"Level 18",
retirementAge:"62 Years",
badgeDescription:"Broad stripe with crossed baton, sword and Ashoka Lion.",
equivalent:{
army:"General",
navy:"Admiral",
airForce:"Air Chief Marshal"
}
},

{
id:10,
rank:"Admiral of the Fleet",
abbreviation:"AF",
image:admiralOfFleetImg,
type:"Honorary Five-Star Rank",
promotion:null,
command:"Honorary",
description:"Five-star ceremonial rank of the Indian Navy.",
responsibility:"Awarded only in exceptional circumstances.",
academy:null,
salaryLevel:"Honorary",
retirementAge:"Lifetime",
badgeDescription:"Five-star ceremonial insignia.",
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
rank:"Master Chief Petty Officer First Class",
abbreviation:"MCPO I",
image:masterChiefPettyOfficer1Img,
type:"Senior Sailor",
promotion:null,
command:"Senior Advisor",
description:"Highest sailor rank in the Indian Navy.",
responsibility:"Senior advisor to Commanding Officer and mentor for sailors.",
academy:null,
salaryLevel:"Level 8",
retirementAge:"Service Rules",
badgeDescription:"National Emblem above crossed anchors.",
equivalent:{
army:"Subedar Major",
navy:"Master Chief Petty Officer First Class",
airForce:"Master Warrant Officer"
}
},

{
id:102,
rank:"Master Chief Petty Officer Second Class",
abbreviation:"MCPO II",
image:masterChiefPettyOfficer2Img,
type:"Senior Sailor",
promotion:"Master Chief Petty Officer First Class",
command:"Department",
description:"Senior supervisory sailor.",
responsibility:"Supervises departments onboard ships and establishments.",
academy:null,
salaryLevel:"Level 7",
retirementAge:"Service Rules",
badgeDescription:"Crossed anchors with crown.",
equivalent:{
army:"Subedar",
navy:"Master Chief Petty Officer Second Class",
airForce:"Warrant Officer"
}
},

{
id:103,
rank:"Chief Petty Officer",
abbreviation:"CPO",
image:chiefPettyOfficerImg,
type:"Senior Sailor",
promotion:"Master Chief Petty Officer Second Class",
command:"Division",
description:"Senior Non-Commissioned sailor.",
responsibility:"Leads sailors and supervises divisional work.",
academy:null,
salaryLevel:"Level 6",
retirementAge:"Service Rules",
badgeDescription:"Anchor with crown.",
equivalent:{
army:"Naib Subedar",
navy:"Chief Petty Officer",
airForce:"Junior Warrant Officer"
}
}

];

// ======================================
// Sailors
// ======================================

const other = [

{
id:201,
rank:"Petty Officer",
abbreviation:"PO",
image:pettyOfficerImg,
type:"Sailor",
promotion:"Chief Petty Officer",
command:"Section",
description:"Experienced technical sailor.",
responsibility:"Leads small teams and technical sections.",
academy:null,
salaryLevel:"Level 5",
retirementAge:"Service Rules",
badgeDescription:"Crossed anchors.",
equivalent:{
army:"Havildar",
navy:"Petty Officer",
airForce:"Sergeant"
}
},

{
id:202,
rank:"Leading Seaman",
abbreviation:"LS",
image:leadingSeamanImg,
type:"Sailor",
promotion:"Petty Officer",
command:"Small Team",
description:"Junior leader among sailors.",
responsibility:"Assists Petty Officer in supervising sailors.",
academy:null,
salaryLevel:"Level 4",
retirementAge:"Service Rules",
badgeDescription:"Single anchor.",
equivalent:{
army:"Naik",
navy:"Leading Seaman",
airForce:"Corporal"
}
},

{
id:203,
rank:"Seaman First Class",
abbreviation:"SM-I",
image:seaman1Img,
type:"Sailor",
promotion:"Leading Seaman",
command:"Not Applicable",
description:"Trained operational sailor.",
responsibility:"Performs seamanship and operational duties.",
academy:null,
salaryLevel:"Level 3",
retirementAge:"Service Rules",
badgeDescription:"Trade badge.",
equivalent:{
army:"Lance Naik",
navy:"Seaman First Class",
airForce:"Leading Aircraftman"
}
},

{
id:204,
rank:"Seaman Second Class",
abbreviation:"SM-II",
image:seaman2Img,
type:"Sailor",
promotion:"Seaman First Class",
command:"Not Applicable",
description:"Entry-level sailor.",
responsibility:"Performs basic seamanship and training duties.",
academy:null,
salaryLevel:"Level 3",
retirementAge:"Service Rules",
badgeDescription:"No senior insignia.",
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
description:"Admiral is the highest active rank in the Indian Navy."
},

{
id:2,
title:"Five-Star Rank",
description:"Admiral of the Fleet is the honorary five-star rank."
},

{
id:3,
title:"Captain",
description:"A Navy Captain is equivalent to an Army Colonel."
},

{
id:4,
title:"Naval Commands",
description:"The Indian Navy has three operational Naval Commands."
}

];

// ======================================
// FAQ
// ======================================

const faq = [

{
id:1,
question:"What is the highest active rank in the Indian Navy?",
answer:"Admiral."
},

{
id:2,
question:"Who commands a Fleet?",
answer:"Rear Admiral."
},

{
id:3,
question:"Who commands a Naval Command?",
answer:"Vice Admiral."
},

{
id:4,
question:"Equivalent of Colonel in the Navy?",
answer:"Captain."
},

{
id:5,
question:"Equivalent of Brigadier in the Navy?",
answer:"Commodore."
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
title:"Senior Sailors",
data:jco
},

{
title:"Sailors",
data:other
}

];

// ======================================
// Final Object
// ======================================

const navyRanks = {

service:"Indian Navy",

quizType:"navy",

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

export default navyRanks;