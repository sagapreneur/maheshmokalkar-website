import { allPhotoStories, PhotoStory } from "./photos";

export interface Profile {
  name: string;
  marathiName: string;
  scriptHeadline: string;
  title: string;
  marathiTitle: string;
  secondaryTitle: string;
  marathiSecondaryTitle: string;
  tagline: string;
  marathiQuote: string;
  philosophy: string;
  bio: string;
  marathiBio: string;
  location: string;
  email: string;
  phone: string;
  education: string[];
  civilProjects: string[];
  recognitions: string[];
  socials: {
    facebook: string;
    twitter: string;
    instagram: string;
    linkedin: string;
  };
  family: {
    wife: string;
    wifeRole: string;
    children: string[];
  };
  publication: {
    title: string;
    subtitle: string;
    releasedBy: string;
    description: string;
  };
}

export interface StatItem {
  id: string;
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  description: string;
  icon: string;
}

export interface PillarItem {
  id: 'engineer' | 'rotary' | 'family';
  title: string;
  subtitle: string;
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
  image: string;
  ctaLink: string;
}

export interface Initiative {
  id: string;
  title: string;
  subtitle: string;
  category: 'Rotary' | 'Community' | 'Education' | 'Housing' | 'Healthcare';
  year: string;
  impactNumber: string;
  description: string;
  keyPoints: string[];
  image: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  category: 'Rotary' | 'Engineering' | 'Community' | 'Publication' | 'Housing';
  description: string;
  highlight?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  organization: string;
  quote: string;
  avatar: string;
}

export type GalleryItem = PhotoStory;

export const profileData: Profile = {
  name: "Rtn. P.P. Mahesh Mokalkar",
  marathiName: "रोटेरियन पी. पी. महेश मोकलकर",
  scriptHeadline: "I'm Mahesh Mokalkar",
  title: "Assistant Engineer, Grade-II (PWD Maharashtra)",
  marathiTitle: "उपविभागीय / सहायक अभियंता श्रेणी-२ (सार्वजनिक बांधकाम विभाग, महाराष्ट्र शासन)",
  secondaryTitle: "Past District Governor, RID 3030",
  marathiSecondaryTitle: "माजी जिल्हा प्रांतपाल, रोटरी डिस्ट्रिक्ट ३०३०",
  tagline: "Dynamic yet dedicated; Energetic yet staid; Suave yet simple — that is Mahesh!",
  marathiQuote: "यशाची खरी उंची आपण किती पुढे गेलो यावर नाही, तर आपल्या प्रवासात आपण किती जणांना सोबत घेऊन पुढे गेलो, यावर ठरते.",
  philosophy: "Serve with sincerity, lead with humility, and create opportunities for others to dream and grow.",
  bio: "Rtn. P.P. Mahesh Mokalkar is a distinguished civil engineer, social worker, Rotarian leader, and community champion from Wardha, Maharashtra. With nearly three decades of dedicated service in the Public Works Department (PWD), Government of Maharashtra, he has executed landmark infrastructure including Major Road Over Bridges at Hinganghat and Wardha, the Collector Office Building at Wardha, and the Court Building at Ashti. His technical handbook 'GENIUS' was officially released by the Hon'ble Chief Minister of Maharashtra. In Rotary, which he joined in 1996, he served as District Governor of RID 3030 (2016-17), chartering 80 Interact, 9 Rotaract, and 25 RCC clubs, and mobilizing support for more than 300 pediatric heart surgeries, mobile mammography screening for 70,000+ women, and farmer debt-relief with Bollywood icon Shri Amitabh Bachchan.",
  marathiBio: "वर्धा नगरीतील एक कर्तृत्ववान अभियंता, समर्पित रोटेरियन, समाजसेवक आणि संवेदनशील नेतृत्वकर्ता म्हणून रोटेरियन पी. पी. महेश मोकलकर यांचे नाव अत्यंत आदराने घेतले जाते. व्यावसायिक क्षेत्रातील उत्कृष्टता, सामाजिक बांधिलकी आणि 'Service Above Self' या रोटरीच्या विचारधारेप्रती असलेली निष्ठा, यांचा सुंदर संगम त्यांच्या व्यक्तिमत्त्वात पाहायला मिळतो.",
  location: "Wardha, Maharashtra, India",
  email: "maheshdg1617@gmail.com",
  phone: "+91 96898 98968",
  education: [
    "D.C.R.E. (Civil & Rural Engineering)",
    "B.E. (Civil Engineering)",
    "M.B.A. (Marketing)",
    "L.L.B. (Labour Laws)"
  ],
  civilProjects: [
    "Major Road Over Bridge (ROB), Hinganghat",
    "Major Road Over Bridge (ROB), Wardha",
    "Collector Office Building, Wardha",
    "Court Building, Ashti",
    "Public Health Infrastructure across Vidarbha"
  ],
  recognitions: [
    "Office of the Hon'ble President of India (Rashtrapati Bhavan)",
    "Government of Maharashtra",
    "Wardha Municipal Council",
    "The Rotary Foundation Distinguished Service Award",
    "TRF Citation for Meritorious Service",
    "National Polio Plus Committee"
  ],
  socials: {
    facebook: "https://facebook.com/maheshmokalkar",
    twitter: "https://x.com/mahesh_mokalkar",
    instagram: "https://instagram.com/mahesh_mokalkar",
    linkedin: "https://linkedin.com/in/maheshmokalkar",
  },
  family: {
    wife: "R/Ann Aarti Mokalkar",
    wifeRole: "Past President, Inner Wheel Club & Major Donor Level Four",
    children: ["Purvesh Mokalkar", "Disha Mokalkar"],
  },
  publication: {
    title: "GENIUS",
    subtitle: "Technical Reference Handbook for Departmental Engineers",
    releasedBy: "Released by the Hon'ble Chief Minister of Maharashtra",
    description: "An authoritative technical manual authored by Mahesh Mokalkar for civil engineers and public works officers, detailing rigorous quality benchmarks, structural specifications, and transparent project execution guidelines.",
  },
};

export const statsData: StatItem[] = [
  {
    id: "surgeries",
    value: 300,
    suffix: "+",
    label: "Pediatric Heart Surgeries",
    description: "Children's life-saving cardiac surgeries facilitated through government schemes, Global Grants, and donors",
    icon: "HeartPulse",
  },
  {
    id: "mammography",
    value: 70000,
    suffix: "+",
    label: "Cancer Screenings",
    description: "Women screened for breast and cervical cancer via conceptualized Mobile Mammography Buses",
    icon: "HeartHandshake",
  },
  {
    id: "pwd-service",
    value: 30,
    suffix: "+ Yrs",
    label: "PWD Civil Engineering",
    description: "Three decades of engineering roads, ROB bridges, and court complexes for Govt. of Maharashtra",
    icon: "HardHat",
  },
  {
    id: "youth-clubs",
    value: 114,
    suffix: " Clubs",
    label: "Clubs Chartered as DG",
    description: "80 Interact Clubs, 9 Rotaract Clubs, and 25 Rotary Community Corps (RCCs) established in 2016-17",
    icon: "UsersRound",
  },
  {
    id: "trf-donor",
    value: 4,
    prefix: "Level ",
    suffix: "",
    label: "TRF Major Donors",
    description: "Major Donor Level Four along with wife R/Ann Aarti Mokalkar to The Rotary Foundation",
    icon: "Award",
  },
];

export const pillarsData: PillarItem[] = [
  {
    id: "engineer",
    title: "As a Govt. Civil Engineer",
    subtitle: "30+ Years of Engineering Maharashtra's Infrastructure",
    iconName: "HardHat",
    shortDesc: "Managing landmark Road Over Bridges, Collectorate buildings, and authoring the 'GENIUS' handbook.",
    fullDesc: "Holding D.C.R.E, B.E. (Civil), MBA (Marketing) and LL.B. (Labour Laws), Mahesh has served the Public Works Department (PWD) for nearly 30 years. He has led major infrastructure landmarks including the Hinganghat and Wardha Road Over Bridges, the Wardha Collector Office Building, and the Ashti Court Building. His technical guide 'GENIUS' was released by the Hon'ble Chief Minister of Maharashtra.",
    highlights: [
      "Major Road Over Bridges at Hinganghat & Wardha",
      "Wardha Collector Office & Ashti Court Buildings",
      "Author of 'GENIUS' handbook released by Chief Minister",
      "Assistant Engineer Gr-II & Sub-Divisional Engineer"
    ],
    image: "/photos/mahesh-photo-30.jpg",
    ctaLink: "/engineer",
  },
  {
    id: "rotary",
    title: "As a Rotarian & Governor",
    subtitle: "District Governor RID 3030 & Global Benefactor",
    iconName: "Award",
    shortDesc: "Chartering 114 clubs, mobilizing 300+ child heart surgeries, and serving Rotary since 1996.",
    fullDesc: "Joining Rotary in 1996, Mahesh rose to District Governor of RID 3030 (2016-17). His term established historic benchmarks: chartering 80 Interact, 9 Rotaract, and 25 RCC clubs. He also served as District Trainer, DRFC, ARRPIC Zone 6, and AZAPC. Along with his wife Aarti, he is a Major Donor Level 4, honored with TRF's Citation for Meritorious Service and Distinguished Service Award.",
    highlights: [
      "Supported 300+ Pediatric Heart Surgeries",
      "Chartered 80 Interact, 9 Rotaract, and 25 RCC Clubs",
      "Major Donor Level 4 & TRF Distinguished Service Award",
      "Founded Rotary Clubs of Hinganghat, Arvi, and Wani"
    ],
    image: "/photos/mahesh-photo-06.jpg",
    ctaLink: "/rotary",
  },
  {
    id: "family",
    title: "As a Humanist & Family Man",
    subtitle: "Devotion to 'Aai-Baba', Culture & Community",
    iconName: "HeartHandshake",
    shortDesc: "Fulfilling grassroots dreams through 'Sapne Sach Hue', cancer screening buses, and family devotion.",
    fullDesc: "Rooted in devotion to his parents ('Aai-Baba') and in partnership with his wife R/Ann Aarti Mokalkar (Past President, Inner Wheel Club), Mahesh turns ideas into sustainable community transformation — from Mobile Mammography Buses screening 70,000+ women to farmer debt-relief with Amitabh Bachchan and night schools for rag pickers' children.",
    highlights: [
      "70,000+ Rural Women Screened via Mobile Mammography Buses",
      "Farmer Debt-Relief Program with Amitabh Bachchan",
      "'Sapne Sach Hue' & Night Schools for Rag-Pickers' Children",
      "Jaipur Foot Artificial Limb Camps Restoring Mobility"
    ],
    image: "/photos/mahesh-photo-47.jpg",
    ctaLink: "/about",
  },
];

export const initiativesData: Initiative[] = [
  {
    id: "heart-surgeries",
    title: "300+ Pediatric Heart Surgeries",
    subtitle: "Saving Young Lives with Dignity & Modern Cardiac Care",
    category: "Healthcare",
    year: "2016 - Present",
    impactNumber: "300+ Lives Saved",
    description: "Spearheaded a life-saving medical mission connecting impoverished rural children with premier pediatric cardiac surgery hospitals. By mobilizing government schemes as catalysts alongside Rotary Global Grants, donations, and sponsors, over 300 children have received open-heart procedures free of cost.",
    keyPoints: [
      "Over 300 young children successfully treated and rehabilitated",
      "Utilized government healthcare schemes as a catalyst alongside Rotary grants",
      "Full coverage from early screening and diagnostics to post-op recovery",
      "Supported by grateful beneficiary families across Maharashtra"
    ],
    image: "/photos/mahesh-photo-44.jpg",
  },
  {
    id: "cancer-screening",
    title: "Mobile Mammography Buses (70,000+ Women)",
    subtitle: "Early Detection & Cancer Screening for Rural Women",
    category: "Healthcare",
    year: "2016 - Present",
    impactNumber: "70,000+ Screenings",
    description: "Conceptualized and designed Mobile Mammography Buses equipped with cutting-edge screening technology to reach rural and underprivileged women at their doorstep. Facilitated breast and cervical cancer screening for more than 70,000 women across Vidarbha and central Maharashtra.",
    keyPoints: [
      "Custom-engineered air-conditioned mobile screening diagnostic buses",
      "Screened 70,000+ rural women for early breast and cervical abnormalities",
      "Created awareness camps breaking cultural taboos in remote villages",
      "Direct follow-up linkages with district cancer treatment centers"
    ],
    image: "/photos/mahesh-photo-57.jpg",
  },
  {
    id: "farmer-debt-relief",
    title: "Farmer Debt-Relief with Shri Amitabh Bachchan",
    subtitle: "Standing with the Farming Backbone of Vidarbha",
    category: "Community",
    year: "2017 - Present",
    impactNumber: "Hundreds of Farmers",
    description: "Deeply sensitive to agrarian distress in Vidarbha, Mahesh organized Krishi Utsav agricultural expos and spearheaded farmer relief drives, including an impactful farmer debt-relief initiative executed with the active support of Bollywood icon Shri Amitabh Bachchan.",
    keyPoints: [
      "Facilitated debt-clearance certificates for distressed agricultural families",
      "Supported by Bollywood legend Shri Amitabh Bachchan",
      "Organized Krishi Utsav to promote sustainable modern farming techniques",
      "Continuous advocacy for rural credit co-operatives and water management"
    ],
    image: "/photos/mahesh-photo-01.jpg",
  },
  {
    id: "jaipur-foot-camps",
    title: "Jaipur Foot & Artificial Limb Camps",
    subtitle: "Restoring Independence, Mobility & Self-Respect",
    category: "Healthcare",
    year: "Ongoing",
    impactNumber: "Hundreds of Beneficiaries",
    description: "Through Shri Mahesh Seva Samiti and Rotary, organized comprehensive prosthetic limb and adaptive aid camps. Hundreds of amputees, accident survivors, and differently-abled rural citizens were custom-fitted with lightweight artificial limbs, calipers, and crutches.",
    keyPoints: [
      "On-site custom measurement, molding, and fitting of prosthetic limbs",
      "Rehabilitated beneficiaries to resume farming, labor, and independent livelihoods",
      "Direct personal follow-up by Mahesh Mokalkar ensuring comfortable rehabilitation",
      "Free assistive mobility aids, wheelchairs, and tricycles provided"
    ],
    image: "/photos/mahesh-photo-36.jpg",
  },
  {
    id: "hospital-equipment",
    title: "Modern Hospital Diagnostic Equipment Donations",
    subtitle: "Strengthening Public Healthcare Infrastructure with CSR",
    category: "Healthcare",
    year: "2024",
    impactNumber: "District Hospital Washim",
    description: "Facilitated major CSR and Rotary partnerships to equip government civil hospitals with advanced machinery, including the handover of a battery-operated portable X-Ray machine to Washim District & Rural Hospital (via Indian Oil CSR) and an Advanced Ultrasound Sonography machine to Shalinitai Meghe Mother & Child Hospital.",
    keyPoints: [
      "Portable X-Ray unit gifted to Washim District Hospital through Indian Oil CSR",
      "Advanced Ultrasound Sonography machine gifted through TRF RID 3030",
      "Strengthens maternal and child diagnostic care in public civil hospitals",
      "Fostered deep institutional collaboration between doctors, civil surgeons, and Rotary"
    ],
    image: "/photos/mahesh-photo-50.jpg",
  },
  {
    id: "clean-water-railway",
    title: "Chilled RO Clean Water Plants",
    subtitle: "Quenching Thirst with Purity at Indian Railways",
    category: "Community",
    year: "2017 - Present",
    impactNumber: "Thousands Daily",
    description: "Inaugurated dedicated high-capacity Chilled RO water dispensing units at major transit hubs, including Amravati Railway Station, providing clean, hygienic, cold drinking water to thousands of daily passengers and station staff.",
    keyPoints: [
      "Engineered multi-stage RO purification with chilling systems",
      "Public-private collaboration with Indian Railways and civic bodies",
      "Dramatically reduced waterborne infections among travelers",
      "Free access for laborers, commuters, and pilgrims"
    ],
    image: "/photos/mahesh-photo-07.jpg",
  },
  {
    id: "sapne-sach-hue",
    title: "Sapne Sach Hue (Dreams Come True)",
    subtitle: "Igniting Aspirations for Underprivileged Children",
    category: "Community",
    year: "Ongoing",
    impactNumber: "1,000+ Children",
    description: "A signature emotional initiative that fulfills long-cherished dreams for underprivileged children, orphanages, and rural students through curated first-time commercial flight journeys, science center visits, and educational tours.",
    keyPoints: [
      "Sponsoring first-time air travel and theme park excursions for orphans",
      "Annual distribution of dignity kits, educational uniforms, and textbooks",
      "Instilling unshakeable self-belief and aspiration in young minds",
      "Widely praised across civic organizations and media in Maharashtra"
    ],
    image: "/photos/mahesh-photo-14.jpg",
  },
  {
    id: "night-school",
    title: "Night School for Rag-Pickers' Children",
    subtitle: "Education Beyond Daytime Scavenging Barriers",
    category: "Education",
    year: "2012 - Present",
    impactNumber: "State Govt. Funded",
    description: "Established specialized evening schools for children of rag-pickers and daily-wage laborers who cannot attend daytime schools due to livelihood pressures. Officially recognized and funded by the Government of Maharashtra.",
    keyPoints: [
      "Evening academic curriculum tailored around working children's schedules",
      "Free nutritional hot meals, milk, and study supplies provided every night",
      "Integrated into Maharashtra State Education Department grant-in-aid",
      "Hundreds of children transitioned successfully into formal high school"
    ],
    image: "/photos/mahesh-photo-59.jpg",
  },
  {
    id: "shelter-society",
    title: "Shelter for the Shelterless Co-operative",
    subtitle: "Collateral-Free Housing Credit Society for 550 Families",
    category: "Housing",
    year: "2008 - Present",
    impactNumber: "550 Families",
    description: "Founded a 550-member credit co-operative housing society specifically tailored to micro-earners, street vendors, and homeless families who lack conventional bank collateral.",
    keyPoints: [
      "Elected Founder-President for 3 consecutive terms",
      "Collateral-free micro-credit for residential plot purchase and brick-and-mortar homes",
      "Over 500 families now live in dignified, permanent concrete houses",
      "Recognized as a model housing co-operative in Vidarbha"
    ],
    image: "/photos/mahesh-photo-40.jpg",
  },
  {
    id: "youth-rejoice",
    title: "Youth Leadership Surge: 89 Interact & Rotaract Clubs",
    subtitle: "Empowering the Next Generation of Changemakers",
    category: "Education",
    year: "2016 - Present",
    impactNumber: "80 Interact & 9 Rotaract Clubs",
    description: "During his District Governor year, chartered an all-time record 80 Interact Clubs and 9 Rotaract Clubs alongside 25 Rotary Community Corps (RCCs). Mahesh continues to mentor youth leaders across colleges and schools.",
    keyPoints: [
      "District record of 80 Interact Clubs and 9 Rotaract Clubs chartered in one year",
      "Created youth fellowship platforms like 'Rotaract Rejoice'",
      "Continuous hands-on career guidance and public speaking workshops",
      "Active engagement in social innovation projects across schools and campuses"
    ],
    image: "/photos/mahesh-photo-55.jpg",
  },
];

export const timelineData: TimelineEvent[] = [
  {
    year: "1996",
    title: "Inducted into Rotary International",
    category: "Rotary",
    description: "Commenced three decades of devoted humanitarian service guided by 'Service Above Self'.",
    highlight: false,
  },
  {
    year: "2002 - 2005",
    title: "Chartered 3 New Rotary Clubs",
    category: "Rotary",
    description: "Spearheaded the charter formation and mentoring of Rotary Clubs at Hinganghat, Arvi, and Wani.",
    highlight: true,
  },
  {
    year: "2005 - 2006",
    title: "President, Rotary Club of Gandhi City, Wardha",
    category: "Rotary",
    description: "Led historic community projects and set new records in local civic service and child welfare.",
    highlight: true,
  },
  {
    year: "2008",
    title: "Founded 'Shelter for the Shelterless' Co-op",
    category: "Housing",
    description: "Established 550-member credit co-operative providing micro-housing finance to landless families.",
    highlight: true,
  },
  {
    year: "2012",
    title: "Night School for Rag-Pickers' Children",
    category: "Community",
    description: "Launched evening schooling for working children; achieved official recognition and grants from Govt. of Maharashtra.",
    highlight: true,
  },
  {
    year: "2016 - 2017",
    title: "District Governor, Rotary District 3030",
    category: "Rotary",
    description: "Historic DG tenure: Chartered 80 Interact, 9 Rotaract, 25 RCCs; initiated 300+ pediatric heart surgeries and Mobile Mammography Buses screening 70,000+ women.",
    highlight: true,
  },
  {
    year: "2018",
    title: "Farmer Debt-Relief with Amitabh Bachchan",
    category: "Community",
    description: "Organized Krishi Utsav and spearheaded agrarian debt-relief drive supported by Bollywood icon Shri Amitabh Bachchan.",
    highlight: true,
  },
  {
    year: "2020",
    title: "Authored 'GENIUS' Engineering Handbook",
    category: "Publication",
    description: "Technical reference book released by the Hon'ble Chief Minister of Maharashtra for departmental civil engineers.",
    highlight: true,
  },
  {
    year: "Present",
    title: "Major Donor Level 4 & Senior PWD Leadership",
    category: "Engineering",
    description: "Serving as Assistant Engineer Gr-II PWD managing Road Over Bridges and court complexes alongside TRF Major Donor Level 4 global philanthropy.",
    highlight: true,
  },
];

export const testimonialsData: Testimonial[] = [
  {
    id: "1",
    name: "Rtn. Shriniwas Lele",
    role: "Past Assistant District Governor (ADG)",
    organization: "Rotary International District 3030",
    quote: "Mahesh Mokalkar is the epitome of visionary leadership and boundless energy in Rotary. His ability to mobilize resources for 300+ pediatric heart surgeries and mentor leaders across District 3030 with warmth, precision, and discipline is truly inspirational.",
    avatar: "/images/testimonials/rtn-shriniwas-lele.jpg",
  },
  {
    id: "2",
    name: "Rtn. Asif Zahid",
    role: "Past President",
    organization: "Rotary Club of Gandhi City, Wardha",
    quote: "Having worked closely with Mahesh at Rotary Club of Gandhi City Wardha for decades, I have seen his tireless commitment up close. He blends civil engineering rigor with profound humanitarian empathy in everything he undertakes.",
    avatar: "/images/testimonials/rtn-asif-zahid.jpg",
  },
  {
    id: "3",
    name: "Rtn. Kishor Kedia",
    role: "Past District Governor",
    organization: "Rotary International District 3030",
    quote: "Mahesh Mokalkar is a visionary leader who leads from the front. His historic leadership during his DG year, particularly the 300+ heart surgeries and Mobile Mammography buses, set unforgettable humanitarian benchmarks.",
    avatar: "/images/testimonials/rtn-kishor-kedia.webp",
  },
  {
    id: "4",
    name: "Rtn. Madhu Rughwani",
    role: "Senior Rotarian & Business Leader",
    organization: "Rotary Club of Nagpur",
    quote: "Dynamic, energetic, yet deeply humble. Whether executing major infrastructure projects as a civil engineer or coordinating hospital equipment handovers, Mahesh's passion and positivity are infectious.",
    avatar: "/images/testimonials/rtn-madhu-rughwani.webp",
  },
  {
    id: "5",
    name: "Rtn. Shabbir Shakir",
    role: "Past District Governor",
    organization: "Rotary International District 3030",
    quote: "The 'Shelter for the Shelterless' housing co-operative and the Night School for rag-pickers' children reflect Mahesh's genuine empathy for the underprivileged. He uses government schemes as catalysts for real change.",
    avatar: "/images/testimonials/rtn-shabbir-shakir.webp",
  },
  {
    id: "6",
    name: "Rtn. Rajiv Sharma",
    role: "Rotary Leadership Trainer",
    organization: "RID 3030 Training Institute",
    quote: "A true role model for Rotarians. His ability to deliver multi-crore public works while maintaining the highest humanitarian ethics is rare and inspirational.",
    avatar: "/images/testimonials/rtn-rajiv-sharma.webp",
  },
  {
    id: "7",
    name: "Rtr. Anand Zunzunwala",
    role: "Past District Rotaract Representative",
    organization: "Rotaract District 3030",
    quote: "PDG Mahesh Mokalkar chartered an astonishing 80 Interact and 9 Rotaract clubs in a single year. He remains our favorite mentor, always ready to laugh with us and guide us toward impactful leadership.",
    avatar: "/images/testimonials/rtr-anand-zunzunwala.webp",
  },
];

export const galleryData: GalleryItem[] = allPhotoStories;
