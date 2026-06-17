import { Link } from "react-router-dom";

import MilitaryHero from "../components/common/MilitaryHero";
import MilitaryStats from "../components/common/MilitaryStats";
import MilitarySection from "../components/common/MilitarySection";
import MilitaryQuote from "../components/common/MilitaryQuote";
import militaryThemes from "../components/common/MilitaryTheme";

import armyImg from "../assets/army-logo.png";
import navyImg from "../assets/navy-logo.png";
import airforceImg from "../assets/airforce-logo.png";

const theme = militaryThemes.army;

function Forces() {

const hero={

title:"Indian Armed Forces",

motto:"United • Strong • Ready",

description:
"Explore the Indian Army, Navy and Air Force through history, ranks, commands, operations, equipment and traditions.",

stats:[

{
icon:"🪖",
value:"13L+",
label:"Personnel"
},

{
icon:"⚔️",
value:"3",
label:"Services"
},

{
icon:"⭐",
value:"75+",
label:"Years"
},

{
icon:"🎖️",
value:"17",
label:"Commands"
}

],

primaryAction:{
label:"Explore Forces"
},

secondaryAction:{
label:"Rank Structure"
}

};

const stats=[

{
icon:"🪖",
value:"12.5L+",
label:"Army"
},

{
icon:"⚓",
value:"70K+",
label:"Navy"
},

{
icon:"✈️",
value:"1.4L+",
label:"Air Force"
},

{
icon:"🇮🇳",
value:"3",
label:"Services"
},

{
icon:"🎖️",
value:"17",
label:"Ranks"
}

];

const forces=[

{

title:"Indian Army",

image:armyImg,

motto:"Service Before Self",

description:
"Commands, Corps, Regiments, Weapons, Operations, History and Rank Structure.",

color:"green",

route:"/army"

},

{

title:"Indian Navy",

image:navyImg,

motto:"Sham No Varunah",

description:
"Ships, Fleets, MARCOS, Naval Aviation, Commands and Operations.",

color:"blue",

route:"/navy"

},

{

title:"Indian Air Force",

image:airforceImg,

motto:"Touch The Sky With Glory",

description:
"Aircraft, Air Commands, Air Defence, Missiles and Operations.",

color:"sky",

route:"/airforce"

}

];

return(

<main className="min-h-screen bg-slate-950 text-white">

<MilitaryHero

theme={theme}

title={hero.title}

motto={hero.motto}

description={hero.description}

stats={hero.stats}

primaryAction={hero.primaryAction}

secondaryAction={hero.secondaryAction}

/>

<MilitaryStats

theme={theme}

stats={stats}

/>

<section className="max-w-7xl mx-auto px-6 py-20">

<MilitarySection

theme={theme}

emoji="🛡️"

title="Explore The Three Services"

subtitle="Discover the history, rank structure, commands, operations and traditions of each branch of the Indian Armed Forces."

/>

<div className="grid lg:grid-cols-3 gap-8">
  {forces.map((force)=>(

<Link
key={force.title}
to={force.route}
>

<div
className="
group
rounded-3xl
overflow-hidden
bg-white/5
border
border-white/10
hover:border-yellow-400
backdrop-blur-xl
transition-all
duration-500
hover:-translate-y-3
hover:shadow-2xl
hover:shadow-yellow-500/20
"
>

<div className="h-52 flex items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800">

<img

src={force.image}

alt={force.title}

className="h-32 object-contain transition duration-500 group-hover:scale-110"

/>

</div>

<div className="p-8">

<h2 className="text-3xl font-bold">

{force.title}

</h2>

<p className="mt-3 text-yellow-400 font-semibold">

{force.motto}

</p>

<p className="mt-6 text-slate-300 leading-8">

{force.description}

</p>

<div
className="
mt-8
inline-flex
items-center
gap-2
text-yellow-400
font-semibold
group-hover:gap-4
transition-all
"
>

Explore →

</div>

</div>

</div>

</Link>

))}
</div>
</section>

<MilitaryQuote

theme={theme}

emoji="🇮🇳"

quote="It is not the weapon, but the warrior behind it that wins the battle."

author="Indian Armed Forces"

designation="Nation First • Always First"

/>

</main>

);

}

export default Forces;