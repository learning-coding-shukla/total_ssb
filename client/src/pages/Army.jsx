import { Link } from "react-router-dom";
import MilitaryLandingLayout from "../components/common/MilitaryLandingLayout";
import militaryThemes from "../components/common/MilitaryTheme";

const theme = militaryThemes.army;

const Army = () => {

const hero = {

title:"Indian Army",

motto:"Service Before Self",

description:
"The Indian Army is the land-based branch of the Indian Armed Forces dedicated to safeguarding the nation's sovereignty and integrity.",

stats:[

{icon:"🎖️",value:"17",label:"Ranks"},

{icon:"⚔️",value:"13",label:"Corps"},

{icon:"🏅",value:"27+",label:"Regiments"},

{icon:"🛡️",value:"12L+",label:"Personnel"}

],

primaryAction:{
label:"Explore Ranks"
},

secondaryAction:{
label:"Army History"
}

};

const stats=[

{
icon:"🎖️",
value:"17",
label:"Ranks"
},

{
icon:"⚔️",
value:"13",
label:"Corps"
},

{
icon:"🏅",
value:"27+",
label:"Regiments"
},

{
icon:"🪖",
value:"12L+",
label:"Personnel"
},

{
icon:"🔥",
value:"75+",
label:"Operations"
}

];

const sections=[

{
emoji:"📜",
title:"Army History",
description:"History of the Indian Army from Independence to present.",
color:"orange"
},

{
emoji:"🎖️",
title:"Rank Structure",
description:"Learn ranks, insignia and promotions.",
color:"green"
},

{
emoji:"⚔️",
title:"Commands",
description:"Operational & Training Commands.",
color:"red"
},

{
emoji:"🏅",
title:"Gallantry Awards",
description:"PVC, MVC, VrC and more.",
color:"yellow"
},

{
emoji:"🚀",
title:"Weapons",
description:"Modern weapons and equipment.",
color:"purple"
},

{
emoji:"🪖",
title:"Regiments",
description:"Famous regiments of the Indian Army.",
color:"emerald"
}

];

const quote={

emoji:"🇮🇳",

quote:
"Safety, Honour and Welfare of your Country come first, always and every time.",

author:"Field Marshal Sam Manekshaw",

designation:"Chief of Army Staff"

};

return(

<MilitaryLandingLayout

theme={theme}

hero={hero}

stats={stats}

sections={sections}

quote={quote}

/>

);

};

export default Army;
