import { useState } from "react";

const questions = [
  // --- Basic History & Firsts ---
  {
    question: "Where is Central Command HQ located?",
    options: ["Lucknow", "Delhi", "Jaipur", "Pune"],
    answer: "Lucknow",
  },
  {
    question: "Who was the first Indian Commander-in-Chief of the Indian Army?",
    options: ["Sam Manekshaw", "K. M. Cariappa", "Bipin Rawat", "K. S. Thimayya"],
    answer: "K. M. Cariappa",
  },
  {
    question: "Who was the first Field Marshal of the Indian Army?",
    options: ["K. M. Cariappa", "Arjan Singh", "Sam Manekshaw", "K. Sundarji"],
    answer: "Sam Manekshaw",
  },
  {
    question: "When is Indian Army Day celebrated?",
    options: ["15th January", "26th January", "8th October", "4th December"],
    answer: "15th January",
  },
  {
    question: "Who is the Supreme Commander of the Indian Armed Forces?",
    options: ["Prime Minister", "Chief of Defence Staff", "President of India", "Minister of Defence"],
    answer: "President of India",
  },
  {
    question: "Who was the first Chief of Defence Staff (CDS) of India?",
    options: ["Gen MM Naravane", "Gen Bipin Rawat", "Gen Dalbir Singh Suhag", "Gen VK Singh"],
    answer: "Gen Bipin Rawat",
  },
  {
    question: "In which year was the Kargil War fought?",
    options: ["1965", "1971", "1999", "2001"],
    answer: "1999",
  },
  {
    question: "What is the motto of the Indian Army?",
    options: ["Service Before Self", "Victory Through Courage", "Nation First", "Duty and Honour"],
    answer: "Service Before Self",
  },
  {
    question: "Which of these is NOT a branch of the Indian Armed Forces?",
    options: ["Indian Army", "Indian Navy", "Indian Coast Guard", "Border Security Force"],
    answer: "Border Security Force",
  },
  {
    question: "When did the Indo-Pak war that led to the creation of Bangladesh take place?",
    options: ["1962", "1965", "1971", "1999"],
    answer: "1971",
  },

  // --- Commands & HQs ---
  {
    question: "Where is the headquarters of the Eastern Command of the Indian Army?",
    options: ["Guwahati", "Kolkata", "Shillong", "Dimapur"],
    answer: "Kolkata",
  },
  {
    question: "Where is the headquarters of the Western Command?",
    options: ["Chandimandir", "Jaipur", "Ambala", "Pathankot"],
    answer: "Chandimandir",
  },
  {
    question: "Where is the Northern Command headquartered?",
    options: ["Srinagar", "Udhampur", "Jammu", "Leh"],
    answer: "Udhampur",
  },
  {
    question: "Where is the Southern Command headquartered?",
    options: ["Chennai", "Bangalore", "Pune", "Secunderabad"],
    answer: "Pune",
  },
  {
    question: "Where is the Army Training Command (ARTRAC) located?",
    options: ["Shimla", "Dehradun", "Mhow", "Wellington"],
    answer: "Shimla",
  },
  {
    question: "Where is the South Western Command headquartered?",
    options: ["Jaipur", "Jodhpur", "Bikaner", "Ahmedabad"],
    answer: "Jaipur",
  },
  {
    question: "Which is the only Tri-service theater command of the Indian Armed Forces?",
    options: ["Strategic Forces Command", "Andaman and Nicobar Command", "Cyber Command", "Special Operations Command"],
    answer: "Andaman and Nicobar Command",
  },
  {
    question: "Where is the Naval Headquarters (Eastern Naval Command) located?",
    options: ["Kochi", "Mumbai", "Visakhapatnam", "Chennai"],
    answer: "Visakhapatnam",
  },
  {
    question: "Where is the Western Air Command located?",
    options: ["Ambala", "New Delhi", "Chandigarh", "Halwara"],
    answer: "New Delhi",
  },
  {
    question: "How many operational commands does the Indian Army have?",
    options: ["5", "6", "7", "8"],
    answer: "6",
  },

  // --- Ranks and Equivalences ---
  {
    question: "What is the equivalent rank of a Major in the Indian Navy?",
    options: ["Lieutenant Commander", "Commander", "Lieutenant", "Captain"],
    answer: "Lieutenant Commander",
  },
  {
    question: "What is the equivalent rank of a Colonel in the Indian Air Force?",
    options: ["Wing Commander", "Group Captain", "Air Commodore", "Squadron Leader"],
    answer: "Group Captain",
  },
  {
    question: "What is the highest peacetime gallantry award in India?",
    options: ["Param Vir Chakra", "Maha Vir Chakra", "Ashoka Chakra", "Kirti Chakra"],
    answer: "Ashoka Chakra",
  },
  {
    question: "Which rank is immediately below a Major General in the Indian Army?",
    options: ["Brigadier", "Colonel", "Lieutenant General", "Major"],
    answer: "Brigadier",
  },
  {
    question: "What insignia does a Lieutenant General wear on their shoulder?",
    options: ["Crossed sword and baton", "National Emblem over crossed sword and baton", "One star and National Emblem", "Three stars"],
    answer: "National Emblem over crossed sword and baton",
  },
  {
    question: "What is the lowest commissioned officer rank in the Indian Army?",
    options: ["Lieutenant", "Second Lieutenant", "Subedar", "Major"],
    answer: "Lieutenant",
  },
  {
    question: "What is the equivalent rank of a Captain (Army) in the Indian Navy?",
    options: ["Sub-Lieutenant", "Lieutenant", "Lieutenant Commander", "Commander"],
    answer: "Lieutenant",
  },
  {
    question: "Which of the following is a Non-Commissioned Officer (NCO) rank?",
    options: ["Naib Subedar", "Havildar", "Subedar", "Lieutenant"],
    answer: "Havildar",
  },
  {
    question: "What insignia does a Captain wear?",
    options: ["Two stars", "Three stars", "One Ashoka emblem", "One star and one Ashoka emblem"],
    answer: "Three stars",
  },
  {
    question: "What is the rank of the Chief of the Army Staff (COAS)?",
    options: ["Lieutenant General", "General", "Field Marshal", "Brigadier"],
    answer: "General",
  },

  // --- Training Establishments ---
  {
    question: "Where is the National Defence Academy (NDA) located?",
    options: ["Dehradun", "Khadakwasla", "Ezhimala", "Dundigal"],
    answer: "Khadakwasla",
  },
  {
    question: "Where is the Indian Military Academy (IMA) located?",
    options: ["Dehradun", "Pune", "Chennai", "Gaya"],
    answer: "Dehradun",
  },
  {
    question: "Where is the Officers Training Academy (OTA) located?",
    options: ["Chennai", "Bangalore", "Secunderabad", "Kochi"],
    answer: "Chennai",
  },
  {
    question: "Where is the Defence Services Staff College (DSSC) situated?",
    options: ["Mhow", "Wellington", "New Delhi", "Pune"],
    answer: "Wellington",
  },
  {
    question: "Where is the Indian Naval Academy (INA)?",
    options: ["Goa", "Kochi", "Ezhimala", "Visakhapatnam"],
    answer: "Ezhimala",
  },
  {
    question: "Where is the Air Force Academy located?",
    options: ["Dundigal", "Bidar", "Yelahanka", "Jodhpur"],
    answer: "Dundigal",
  },
  {
    question: "Where is the College of Military Engineering (CME)?",
    options: ["Pune", "Roorkee", "Ahmednagar", "Secunderabad"],
    answer: "Pune",
  },
  {
    question: "Where is the Infantry School located?",
    options: ["Mhow", "Belgaum", "Bareilly", "Pachmarhi"],
    answer: "Mhow",
  },
  {
    question: "Where is the High Altitude Warfare School (HAWS)?",
    options: ["Gulmarg", "Leh", "Tawang", "Siachen"],
    answer: "Gulmarg",
  },
  {
    question: "Where is the Counter Insurgency and Jungle Warfare School (CIJWS)?",
    options: ["Vairengte", "Shillong", "Agartala", "Tezpur"],
    answer: "Vairengte",
  },

  // --- Operations & Wars ---
  {
    question: "Operation Meghdoot was launched in which year?",
    options: ["1971", "1984", "1999", "1965"],
    answer: "1984",
  },
  {
    question: "Operation Meghdoot was launched to secure which glacier?",
    options: ["Baltoro", "Biafo", "Siachen", "Hispar"],
    answer: "Siachen",
  },
  {
    question: "What was the codename of the operation launched by the Indian Army during the Kargil War?",
    options: ["Operation Safed Sagar", "Operation Vijay", "Operation Parakram", "Operation Pawan"],
    answer: "Operation Vijay",
  },
  {
    question: "Operation Cactus was launched in 1988 to assist which country?",
    options: ["Sri Lanka", "Maldives", "Nepal", "Bhutan"],
    answer: "Maldives",
  },
  {
    question: "Which operation was launched in 1971 to liberate East Pakistan?",
    options: ["Operation Searchlight", "Operation Trident", "Operation Jackpot", "Operation Cactus Lily"],
    answer: "Operation Cactus Lily",
  },
  {
    question: "What was the name of the operation by the Indian Peace Keeping Force (IPKF) in Sri Lanka?",
    options: ["Operation Pawan", "Operation Rakshak", "Operation All Out", "Operation Surya Hope"],
    answer: "Operation Pawan",
  },
  {
    question: "Operation Blue Star took place in which year?",
    options: ["1982", "1984", "1986", "1990"],
    answer: "1984",
  },
  {
    question: "Operation Trident was a successful offensive operation during the 1971 war executed by which branch?",
    options: ["Indian Army", "Indian Air Force", "Indian Navy", "BSF"],
    answer: "Indian Navy",
  },
  {
    question: "Which operation was executed to annex Hyderabad into the Indian Union in 1948?",
    options: ["Operation Vijay", "Operation Polo", "Operation Gibraltar", "Operation Grand Slam"],
    answer: "Operation Polo",
  },
  {
    question: "What is the name of the continuous anti-insurgency operation in Jammu & Kashmir?",
    options: ["Operation Rakshak", "Operation All Out", "Operation Sarp Vinash", "Operation Sadbhavana"],
    answer: "Operation Rakshak",
  },

  // --- Weapons & Missiles ---
  {
    question: "BrahMos is a joint venture between India and which country?",
    options: ["Israel", "USA", "Russia", "France"],
    answer: "Russia",
  },
  {
    question: "What type of missile is BrahMos?",
    options: ["Subsonic Cruise Missile", "Supersonic Cruise Missile", "Intercontinental Ballistic Missile", "Air-to-Air Missile"],
    answer: "Supersonic Cruise Missile",
  },
  {
    question: "Which of the following is an Indian Main Battle Tank (MBT)?",
    options: ["T-90 Bhishma", "Arjun", "T-72 Ajeya", "All of the above"],
    answer: "All of the above",
  },
  {
    question: "What is 'Pinaka' in the Indian Army?",
    options: ["A sniper rifle", "A multi-barrel rocket launcher", "A radar system", "An anti-tank missile"],
    answer: "A multi-barrel rocket launcher",
  },
  {
    question: "Which anti-tank guided missile is developed by DRDO?",
    options: ["Spike", "Javelin", "Nag", "Milan"],
    answer: "Nag",
  },
  {
    question: "The 'K9 Vajra' is a type of?",
    options: ["Fighter Jet", "Self-Propelled Howitzer", "Submarine", "Assault Rifle"],
    answer: "Self-Propelled Howitzer",
  },
  {
    question: "What is the name of India's indigenous assault rifle that will replace the INSAS?",
    options: ["SIG 716", "AK-203", "TAR-21", "M4 Carbine"],
    answer: "AK-203",
  },
  {
    question: "Which of the following is an air-to-air missile developed by India?",
    options: ["Astra", "Prithvi", "Agni", "Nirbhay"],
    answer: "Astra",
  },
  {
    question: "What is 'Tejas'?",
    options: ["Light Combat Helicopter", "Light Combat Aircraft", "Unmanned Aerial Vehicle", "Main Battle Tank"],
    answer: "Light Combat Aircraft",
  },
  {
    question: "Which air defence system did India purchase from Russia?",
    options: ["Patriot", "Iron Dome", "S-400 Triumf", "THAAD"],
    answer: "S-400 Triumf",
  },

  // --- Regiments & Corps ---
  {
    question: "Which regiment is based at Ranikhet?",
    options: ["Punjab Regiment", "Kumaon Regiment", "Jat Regiment", "Madras Regiment"],
    answer: "Kumaon Regiment",
  },
  {
    question: "What is the war cry of the Rajputana Rifles?",
    options: ["Raja Ramchandra ki Jai", "Jai Mahakali, Ayo Gorkhali", "Har Har Mahadev", "Bole So Nihal"],
    answer: "Raja Ramchandra ki Jai",
  },
  {
    question: "What is the motto of the Gorkha Regiments?",
    options: ["Kafir hunu bhanda marnu ramro", "Sarvatra", "Veerta Aur Shaurya", "Parakramo Vijayate"],
    answer: "Kafir hunu bhanda marnu ramro",
  },
  {
    question: "Which is the oldest regiment of the Indian Army?",
    options: ["Madras Regiment", "Punjab Regiment", "Rajput Regiment", "Maratha Light Infantry"],
    answer: "Madras Regiment",
  },
  {
    question: "Who are the 'Maroon Berets' in the Indian Army?",
    options: ["Armoured Corps", "Army Medical Corps", "Parachute Regiment / Para SF", "Corps of Engineers"],
    answer: "Parachute Regiment / Para SF",
  },
  {
    question: "What is the motto of the Corps of Engineers?",
    options: ["Sarvatra", "Ahaṃ Sahāyika", "Tejasvi Navadhitamastu", "Balidaan Param Dharma"],
    answer: "Sarvatra",
  },
  {
    question: "What is the symbol of the Para Special Forces?",
    options: ["Crossed swords", "Balidaan Badge", "Ashoka Chakra", "Eagle"],
    answer: "Balidaan Badge",
  },
  {
    question: "Which regiment uses the 'Khukri' as its primary signature weapon?",
    options: ["Sikh Regiment", "Gorkha Regiment", "Assam Regiment", "Naga Regiment"],
    answer: "Gorkha Regiment",
  },
  {
    question: "Which corps of the Indian Army handles military communications?",
    options: ["Corps of Signals", "Corps of EME", "Army Ordnance Corps", "Intelligence Corps"],
    answer: "Corps of Signals",
  },
  {
    question: "Where is the regimental centre of the Sikh Regiment?",
    options: ["Amritsar", "Chandigarh", "Ramgarh", "Jalandhar"],
    answer: "Ramgarh",
  },

  // --- Medals & Awards ---
  {
    question: "Who was the first recipient of the Param Vir Chakra (PVC)?",
    options: ["Subedar Joginder Singh", "Major Somnath Sharma", "Company Quarter Master Havildar Abdul Hamid", "Captain Vikram Batra"],
    answer: "Major Somnath Sharma",
  },
  {
    question: "How many people have been awarded the Param Vir Chakra to date?",
    options: ["15", "21", "25", "30"],
    answer: "21",
  },
  {
    question: "Which award is the wartime equivalent of the Shaurya Chakra?",
    options: ["Vir Chakra", "Maha Vir Chakra", "Kirti Chakra", "Yudh Seva Medal"],
    answer: "Vir Chakra",
  },
  {
    question: "Who was the youngest recipient of the Param Vir Chakra?",
    options: ["Arun Khetarpal", "Sanjay Kumar", "Yogendra Singh Yadav", "Vikram Batra"],
    answer: "Yogendra Singh Yadav",
  },
  {
    question: "Captain Vikram Batra was awarded the PVC for his actions in which war?",
    options: ["1965 War", "1971 War", "Kargil War (1999)", "Siachen Conflict"],
    answer: "Kargil War (1999)",
  },
  {
    question: "What is the wartime gallantry award order of precedence?",
    options: ["PVC, MVC, VrC", "PVC, VrC, MVC", "MVC, PVC, VrC", "VrC, MVC, PVC"],
    answer: "PVC, MVC, VrC",
  },
  {
    question: "What is the peacetime equivalent of the Maha Vir Chakra?",
    options: ["Ashoka Chakra", "Kirti Chakra", "Shaurya Chakra", "Sena Medal"],
    answer: "Kirti Chakra",
  },
  {
    question: "Flying Officer Nirmal Jit Singh Sekhon is the only IAF officer to receive which medal?",
    options: ["Ashoka Chakra", "Maha Vir Chakra", "Param Vir Chakra", "Vayu Sena Medal"],
    answer: "Param Vir Chakra",
  },
  {
    question: "Which medal is awarded for distinguished service of an exceptional order during peacetime?",
    options: ["Param Vishisht Seva Medal (PVSM)", "Yudh Seva Medal", "Sena Medal", "Sarvottam Yudh Seva Medal"],
    answer: "Param Vishisht Seva Medal (PVSM)",
  },
  {
    question: "What color is the ribbon of the Param Vir Chakra?",
    options: ["Purple", "Green", "Red and Blue", "Saffron"],
    answer: "Purple",
  },

  // --- Defence Organisations & R&D ---
  {
    question: "When was DRDO established?",
    options: ["1947", "1958", "1965", "1971"],
    answer: "1958",
  },
  {
    question: "What is the motto of DRDO?",
    options: ["Balasya Mulam Vigyanam", "Vande Mataram", "Satyameva Jayate", "Gyanam Paramam Balam"],
    answer: "Balasya Mulam Vigyanam",
  },
  {
    question: "Who is the manufacturer of the Tejas Light Combat Aircraft?",
    options: ["DRDO", "Bharat Electronics Limited (BEL)", "Hindustan Aeronautics Limited (HAL)", "Tata Advanced Systems"],
    answer: "Hindustan Aeronautics Limited (HAL)",
  },
  {
    question: "Where is the headquarters of the Indian Coast Guard?",
    options: ["Mumbai", "Kochi", "Chennai", "New Delhi"],
    answer: "New Delhi",
  },
  {
    question: "Which organization is responsible for border roads in India?",
    options: ["NHAI", "Border Roads Organisation (BRO)", "PWD", "Indian Army Corps of Engineers"],
    answer: "Border Roads Organisation (BRO)",
  },
  {
    question: "What is the primary role of the National Security Guard (NSG)?",
    options: ["Border guarding", "Counter-terrorism", "VIP security only", "Naval operations"],
    answer: "Counter-terrorism",
  },
  {
    question: "Which Central Armed Police Force (CAPF) guards the Indo-Pak and Indo-Bangla borders?",
    options: ["ITBP", "SSB", "BSF", "CRPF"],
    answer: "BSF",
  },
  {
    question: "Which force primarily guards the Indo-China border?",
    options: ["BSF", "ITBP", "SSB", "Assam Rifles"],
    answer: "ITBP",
  },
  {
    question: "Which is the oldest paramilitary force in India?",
    options: ["BSF", "CRPF", "Assam Rifles", "CISF"],
    answer: "Assam Rifles",
  },
  {
    question: "What is the intelligence agency of the Indian Armed Forces?",
    options: ["RAW", "IB", "Defence Intelligence Agency (DIA)", "NIA"],
    answer: "Defence Intelligence Agency (DIA)",
  },

  // --- History & Geopolitics ---
  {
    question: "The Line of Control (LoC) divides India and which country?",
    options: ["China", "Pakistan", "Bangladesh", "Myanmar"],
    answer: "Pakistan",
  },
  {
    question: "The Line of Actual Control (LAC) is the disputed boundary between India and?",
    options: ["Pakistan", "China", "Nepal", "Bhutan"],
    answer: "China",
  },
  {
    question: "The Shimla Agreement was signed after which war?",
    options: ["1947", "1962", "1965", "1971"],
    answer: "1971",
  },
  {
    question: "The Tashkent Declaration was signed in 1966 between India and Pakistan following the?",
    options: ["1947 War", "1962 War", "1965 War", "1971 War"],
    answer: "1965 War",
  },
  {
    question: "Who was the Prime Minister of India during the 1971 Indo-Pak war?",
    options: ["Jawaharlal Nehru", "Lal Bahadur Shastri", "Indira Gandhi", "Morarji Desai"],
    answer: "Indira Gandhi",
  },
  {
    question: "Which line separates India and Afghanistan officially?",
    options: ["Radcliffe Line", "McMahon Line", "Durand Line", "Maginot Line"],
    answer: "Durand Line",
  },
  {
    question: "The Radcliffe Line is the boundary between India and?",
    options: ["China", "Bangladesh", "Pakistan and Bangladesh", "Nepal"],
    answer: "Pakistan and Bangladesh",
  },
  {
    question: "In which year did India conduct its first successful nuclear bomb test (Smiling Buddha)?",
    options: ["1974", "1998", "1965", "1984"],
    answer: "1974",
  },
  {
    question: "Where were India's 1998 nuclear tests (Operation Shakti) conducted?",
    options: ["Balasore", "Pokhran", "Sriharikota", "Chandipur"],
    answer: "Pokhran",
  },
  {
    question: "Which Indian territory was liberated from Portuguese rule in 1961 by the Indian Armed Forces?",
    options: ["Puducherry", "Goa", "Andaman Islands", "Lakshadweep"],
    answer: "Goa",
  },

  // --- Ships and Submarines ---
  {
    question: "What is INS Vikramaditya?",
    options: ["Nuclear Submarine", "Aircraft Carrier", "Destroyer", "Frigate"],
    answer: "Aircraft Carrier",
  },
  {
    question: "What is the name of India's first indigenously built Aircraft Carrier?",
    options: ["INS Viraat", "INS Vikramaditya", "INS Vikrant", "INS Vishal"],
    answer: "INS Vikrant",
  },
  {
    question: "INS Arihant is a?",
    options: ["Diesel-electric submarine", "Nuclear-powered ballistic missile submarine", "Guided missile destroyer", "Landing Ship Tank"],
    answer: "Nuclear-powered ballistic missile submarine",
  },
  {
    question: "Project 75 of the Indian Navy is related to the construction of?",
    options: ["Aircraft Carriers", "Scorpene-class submarines", "Stealth Frigates", "Corvettes"],
    answer: "Scorpene-class submarines",
  },
  {
    question: "Which of these is a stealth guided missile destroyer of the Indian Navy?",
    options: ["Kolkata class", "Talwar class", "Shivalik class", "Kamorta class"],
    answer: "Kolkata class",
  },
  {
    question: "Where is the headquarters of the Southern Naval Command?",
    options: ["Kochi", "Chennai", "Mumbai", "Karwar"],
    answer: "Kochi",
  },
  {
    question: "What are MARCOS?",
    options: ["Army Special Forces", "Naval Special Operations Force", "Air Force Special Forces", "NSG Commandos"],
    answer: "Naval Special Operations Force",
  },
  {
    question: "What is the motto of the Indian Navy?",
    options: ["Sham No Varunah", "Nabhah Sparsham Deeptam", "Service Before Self", "Valour and Wisdom"],
    answer: "Sham No Varunah",
  },
  {
    question: "Which naval base is known as 'Project Seabird'?",
    options: ["Visakhapatnam", "Kochi", "Karwar", "Port Blair"],
    answer: "Karwar",
  },
  {
    question: "Which operation was conducted by the Indian Navy during the 1971 war to attack Karachi port?",
    options: ["Operation Python", "Operation Trident", "Operation Cactus", "Both Trident and Python"],
    answer: "Both Trident and Python",
  },

  // --- Air Force ---
  {
    question: "What is the motto of the Indian Air Force?",
    options: ["Nabhah Sparsham Deeptam", "Touch the Sky with Glory", "Both A and B", "Service Before Self"],
    answer: "Both A and B",
  },
  {
    question: "Who was the first and only Five-Star rank officer of the Indian Air Force?",
    options: ["Subroto Mukerjee", "Arjan Singh", "Arup Raha", "RKS Bhadauria"],
    answer: "Arjan Singh",
  },
  {
    question: "Which of these is an indigenous attack helicopter developed by HAL?",
    options: ["Apache", "Chinook", "Prachand", "Mi-35"],
    answer: "Prachand",
  },
  {
    question: "Dassault Rafale is a fighter jet purchased by India from which country?",
    options: ["USA", "Russia", "France", "UK"],
    answer: "France",
  },
  {
    question: "What is the name of the IAF's Special Forces unit?",
    options: ["Garud Commando Force", "MARCOS", "Para SF", "Ghatak Force"],
    answer: "Garud Commando Force",
  },
  {
    question: "Which IAF aircraft is commonly known as 'Vajra'?",
    options: ["Su-30 MKI", "Mirage 2000", "Jaguar", "MiG-21"],
    answer: "Mirage 2000",
  },
  {
    question: "What type of aircraft is the C-17 Globemaster?",
    options: ["Fighter", "Trainer", "Heavy Transport", "Reconnaissance"],
    answer: "Heavy Transport",
  },
  {
    question: "Which is the highest airbase of the Indian Air Force?",
    options: ["Leh", "Thoise", "Daulat Beg Oldi", "Nyoma"],
    answer: "Daulat Beg Oldi",
  },
  {
    question: "What is the Netra system in the IAF?",
    options: ["Air-to-air missile", "Airborne Early Warning and Control (AEW&C) system", "Radar on the ground", "Unmanned Aerial Vehicle"],
    answer: "Airborne Early Warning and Control (AEW&C) system",
  },
  {
    question: "During which operation did the IAF drop supplies in Sri Lanka in 1987?",
    options: ["Operation Poomalai", "Operation Pawan", "Operation Cactus", "Operation Safed Sagar"],
    answer: "Operation Poomalai",
  },

  // --- International & UN Peacekeeping ---
  {
    question: "India is one of the largest contributors to?",
    options: ["NATO", "UN Peacekeeping Forces", "CENTCOM", "ASEAN Military Force"],
    answer: "UN Peacekeeping Forces",
  },
  {
    question: "Exercise 'Hand in Hand' is a joint military exercise between India and?",
    options: ["USA", "Russia", "China", "France"],
    answer: "China",
  },
  {
    question: "Exercise 'Malabar' involves the navies of which grouping?",
    options: ["BRICS", "QUAD", "SAARC", "NATO"],
    answer: "QUAD",
  },
  {
    question: "Exercise 'Surya Kiran' is conducted between India and?",
    options: ["Sri Lanka", "Maldives", "Nepal", "Bangladesh"],
    answer: "Nepal",
  },
  {
    question: "What is the name of the joint exercise between India and the USA?",
    options: ["Indra", "Yudh Abhyas", "Nomadic Elephant", "Mitra Shakti"],
    answer: "Yudh Abhyas",
  },
  {
    question: "Exercise 'Indra' is conducted between India and?",
    options: ["Indonesia", "Russia", "UK", "France"],
    answer: "Russia",
  },
  {
    question: "Which of the following is an Indo-French joint military exercise?",
    options: ["Shakti", "Garuda", "Varuna", "All of the above"],
    answer: "All of the above",
  },
  {
    question: "Which military alliance includes the US, UK, Australia, but not India?",
    options: ["QUAD", "AUKUS", "Five Eyes", "NATO"],
    answer: "AUKUS",
  },
  {
    question: "What is AFSPA?",
    options: ["Armed Forces Special Powers Act", "Armed Forces Security & Protection Act", "Army Force Special Provision Act", "Armed Forces Standard Protection Act"],
    answer: "Armed Forces Special Powers Act",
  },
  {
    question: "In which UN peacekeeping mission did Indian forces heavily participate in Africa in the 1960s?",
    options: ["Congo", "Somalia", "Rwanda", "Sudan"],
    answer: "Congo",
  },

  // --- SSB Specific & General Knowledge ---
  {
    question: "In the SSB interview, what does 'TAT' stand for?",
    options: ["Test of Aptitude & Talent", "Thematic Apperception Test", "Technical Assessment Test", "Time and Action Test"],
    answer: "Thematic Apperception Test",
  },
  {
    question: "What does 'WAT' stand for in SSB?",
    options: ["Word Association Test", "Written Assessment Test", "Word Aptitude Test", "Work Assessment Technique"],
    answer: "Word Association Test",
  },
  {
    question: "What is a 'GTO' in the context of SSB?",
    options: ["General Task Officer", "Group Testing Officer", "Ground Training Officer", "Group Task Observer"],
    answer: "Group Testing Officer",
  },
  {
    question: "What does PPDT stand for in the SSB screening process?",
    options: ["Picture Perception and Description Test", "Picture Presentation and Discussion Test", "Picture Perception and Discussion Test", "Personality Perception and Description Test"],
    answer: "Picture Perception and Discussion Test",
  },
  {
    question: "Which test is NOT a part of the SSB Psychological testing series?",
    options: ["TAT", "WAT", "SRT", "PGT"],
    answer: "PGT",
  },
  {
    question: "What is an SRT in SSB?",
    options: ["Situation Reaction Test", "Standard Reasoning Test", "Situational Response Tally", "Social Relations Test"],
    answer: "Situation Reaction Test",
  },
  {
    question: "What is the duration of the standard SSB interview process?",
    options: ["3 Days", "5 Days", "7 Days", "14 Days"],
    answer: "5 Days",
  },
  {
    question: "Which part of the Indian Constitution outlines the Fundamental Duties of a citizen?",
    options: ["Part III", "Part IV", "Part IVA", "Part V"],
    answer: "Part IVA",
  },
  {
    question: "The 'Siachen Glacier' is situated in which mountain range?",
    options: ["Himalayas", "Karakoram", "Zanskar", "Pir Panjal"],
    answer: "Karakoram",
  },
  {
    question: "What is the primary function of the 'Ghatak Platoon' in the Indian Army?",
    options: ["Medical evacuation", "Logistics supply", "Shock troops / Spearhead assaults", "Signals and Communication"],
    answer: "Shock troops / Spearhead assaults",
  }
];

function ArmyQuiz() {
  const QUESTIONS_PER_SESSION = 5;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelected] = useState("");

  const [totalScore, setTotalScore] = useState(0);
  const [sessionScore, setSessionScore] = useState(0);

  const [sessionStart, setSessionStart] = useState(0);

  const [showSessionResult, setShowSessionResult] = useState(false);
  const [showFinalResult, setShowFinalResult] = useState(false);

  const handleAnswer = (option) => {
    setSelected(option);
  };

  const nextQuestion = () => {
    if (
      selected === questions[currentQuestion].answer
    ) {
      setTotalScore((prev) => prev + 1);
      setSessionScore((prev) => prev + 1);
    }

    const nextIndex = currentQuestion + 1;

    setSelected("");

    // End of all questions
    if (nextIndex >= questions.length) {
      setShowFinalResult(true);
      return;
    }

    // End of current 5-question session
    if (
      nextIndex - sessionStart >= QUESTIONS_PER_SESSION
    ) {
      setShowSessionResult(true);
      return;
    }

    setCurrentQuestion(nextIndex);
  };

  const startNextSession = () => {
    const nextStart =
      sessionStart + QUESTIONS_PER_SESSION;

    if (nextStart >= questions.length) {
      setShowFinalResult(true);
      return;
    }

    setSessionStart(nextStart);
    setCurrentQuestion(nextStart);

    setSessionScore(0);

    setShowSessionResult(false);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelected("");

    setTotalScore(0);
    setSessionScore(0);

    setSessionStart(0);

    setShowSessionResult(false);
    setShowFinalResult(false);
  };

  // Final Result Screen
  if (showFinalResult) {
    return (
      <div className="max-w-3xl mx-auto p-10">

        <div className="bg-white p-10 rounded-xl shadow text-center">

          <h1 className="text-5xl font-bold mb-6">
            🎉 Quiz Completed
          </h1>

          <h2 className="text-3xl text-green-600 font-bold">
            Final Score: {totalScore} / {questions.length}
          </h2>

          <button
            onClick={restartQuiz}
            className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg"
          >
            Restart Quiz
          </button>

        </div>

      </div>
    );
  }

  // Session Result Screen
  if (showSessionResult) {
    return (
      <div className="max-w-3xl mx-auto p-10">

        <div className="bg-white p-10 rounded-xl shadow text-center">

          <h1 className="text-5xl font-bold mb-6">
            🎯 Session Complete
          </h1>

          <h2 className="text-3xl text-green-600 font-bold mb-4">
            Session Score: {sessionScore} / 5
          </h2>

          <p className="text-xl mb-6">
            Total Score: {totalScore}
          </p>

          <button
            onClick={startNextSession}
            className="bg-green-600 text-white px-6 py-3 rounded-lg"
          >
            Next 5 Questions →
          </button>

        </div>

      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-10">

      <h1 className="text-5xl font-bold text-center mb-8">
        ❓ Army Knowledge Quiz
      </h1>

      <div className="text-center mb-4">
        <span className="font-semibold">
          Session Question{" "}
          {(currentQuestion - sessionStart) + 1}
          {" "}of{" "}
          {QUESTIONS_PER_SESSION}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-300 rounded-full h-4 mb-8">

        <div
          className="bg-green-600 h-4 rounded-full"
          style={{
            width: `${
              (
                ((currentQuestion - sessionStart) + 1) /
                QUESTIONS_PER_SESSION
              ) * 100
            }%`,
          }}
        ></div>

      </div>

      <div className="bg-white p-8 rounded-xl shadow">

        <h2 className="text-2xl font-bold mb-6">
          Q{currentQuestion + 1}.{" "}
          {questions[currentQuestion].question}
        </h2>

        <div className="space-y-4">

          {questions[currentQuestion].options.map(
            (option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className={`block w-full text-left p-4 rounded-lg border transition ${
                  selected === option
                    ? "bg-green-100 border-green-600"
                    : "bg-white"
                }`}
              >
                {option}
              </button>
            )
          )}

        </div>

        <div className="text-center mt-8">

          <button
            onClick={nextQuestion}
            disabled={!selected}
            className="bg-green-600 text-white px-6 py-3 rounded-lg disabled:bg-gray-400"
          >
            Next Question →
          </button>

        </div>

      </div>

    </div>
  );
}

export default ArmyQuiz;