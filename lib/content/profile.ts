export interface Profile {
  name: string;
  scriptHeadline: string;
  title: string;
  secondaryTitle: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
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
  category: 'Rotary' | 'Community' | 'Education' | 'Housing';
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

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Engineer' | 'Rotary' | 'Family' | 'Community';
  image: string;
  caption: string;
  date?: string;
}

export const profileData: Profile = {
  name: "Mahesh Mokalkar",
  scriptHeadline: "I'm Mahesh Mokalkar",
  title: "Assistant Engineer, Grade-II",
  secondaryTitle: "Past District Governor, RID 3030",
  tagline: "Dynamic yet dedicated; Energetic yet staid; Suave yet simple — that is Mahesh!",
  bio: "Mahesh Mokalkar is a multi-hyphenate leader based in Wardha, Maharashtra. Serving as an Assistant Engineer (Grade-II) in the Public Works Department (PWD), Government of Maharashtra, he manages multi-crore infrastructure projects alongside a distinguished 27+ year journey in Rotary International, where he served as Past District Governor (RID 3030).",
  location: "Wardha, Maharashtra, India",
  email: "maheshdg1617@gmail.com",
  phone: "+91 96898 98968",
  socials: {
    facebook: "https://facebook.com/maheshmokalkar",
    twitter: "https://x.com/mahesh_mokalkar",
    instagram: "https://instagram.com/mahesh_mokalkar",
    linkedin: "https://linkedin.com/in/maheshmokalkar",
  },
  family: {
    wife: "Aarti Mokalkar",
    wifeRole: "Past President, Inner Wheel Club of Gandhi City Wardha",
    children: ["Purvesh Mokalkar", "Disha Mokalkar"],
  },
  publication: {
    title: "GENIUS",
    subtitle: "Handbook for Departmental Engineers in Maharashtra",
    description: "A comprehensive authoritative reference guide authored by Mahesh Mokalkar to assist civil engineers and public works officers in executing public infrastructure projects with precision and quality.",
  },
};

export const statsData: StatItem[] = [
  {
    id: "surgeries",
    value: 105,
    suffix: "",
    label: "Pediatric Surgeries",
    description: "Life-saving heart surgeries funded in a single Rotary year",
    icon: "HeartPulse",
  },
  {
    id: "raised",
    value: 1,
    prefix: "₹",
    suffix: " Cr+",
    label: "Funds Mobilized",
    description: "Raised for healthcare, malnutrition, and shelter projects",
    icon: "IndianRupee",
  },
  {
    id: "clubs",
    value: 3,
    suffix: " Clubs",
    label: "Clubs Founded",
    description: "Rotary Clubs of Hinganghat, Arvi, and Wani",
    icon: "UsersRound",
  },
  {
    id: "housing",
    value: 550,
    suffix: "+",
    label: "Housing Members",
    description: "Families provided credit for shelter without collateral",
    icon: "Building2",
  },
  {
    id: "experience",
    value: 27,
    suffix: "+ Yrs",
    label: "Rotary Leadership",
    description: "Active Rotarian since 1997 & Past District Governor",
    icon: "Award",
  },
];

export const pillarsData: PillarItem[] = [
  {
    id: "engineer",
    title: "As a Govt. Engineer",
    subtitle: "Public Infrastructure & Engineering Excellence",
    iconName: "HardHat",
    shortDesc: "Managing multi-crore roads, bridges, and public buildings for the PWD, Govt. of Maharashtra.",
    fullDesc: "With decades of experience as Assistant Engineer Grade-II in the Public Works Department, Mahesh Mokalkar has spearheaded critical civil infrastructure projects across Maharashtra, delivering durable highways, civic buildings, and bridge connections.",
    highlights: [
      "Author of 'GENIUS' departmental technical handbook",
      "Managed multi-crore PWD road & bridge networks",
      "Dedicated to indirect public service through quality infrastructure"
    ],
    image: "/images/pillars/as-a-govt-engineer.png",
    ctaLink: "/engineer",
  },
  {
    id: "rotary",
    title: "As a Rotarian",
    subtitle: "Past District Governor & Global Philanthropy",
    iconName: "Award",
    shortDesc: "Leading RID 3030, founding 3 new Rotary clubs, and funding 105 pediatric heart surgeries.",
    fullDesc: "Serving Rotary International since 1997, Mahesh rose to District Governor of RID 3030 (2016-17). His tenure was defined by historic philanthropic achievements including 105 pediatric heart surgeries and nationwide polio eradication campaigns.",
    highlights: [
      "105 pediatric heart surgeries funded in a single year",
      "Founded Rotary Clubs of Hinganghat, Arvi, and Wani",
      "Recipient of Outstanding President & Rotary Service Awards"
    ],
    image: "/images/pillars/as-a-rotarian.png",
    ctaLink: "/rotary",
  },
  {
    id: "family",
    title: "As a Person & Family Man",
    subtitle: "Community Values & Cultural Roots",
    iconName: "HeartHandshake",
    shortDesc: "Grounded by family values ('Aai-Baba'), community credit cooperatives, and child welfare.",
    fullDesc: "Mahesh's personal journey is anchored in family devotion to his parents ('Aai-Baba') and a joint commitment with his wife Aarti Mokalkar (Past President, Inner Wheel Club) towards uplifting underprivileged children and shelterless families.",
    highlights: [
      "Founder-President of 'Shelter for the Shelterless' (550 members)",
      "Flagship initiative 'Sapne Sach Hue' for underprivileged kids",
      "Rotary Major Donor along with wife Aarti Mokalkar"
    ],
    image: "/images/pillars/as-a-person-and-family-man.png",
    ctaLink: "/about",
  },
];

export const initiativesData: Initiative[] = [
  {
    id: "surgeries",
    title: "105 Pediatric Heart Surgeries",
    subtitle: "Giving 105 Children a New Lease on Life",
    category: "Rotary",
    year: "2016 - 2017",
    impactNumber: "105 Surgeries (~₹1 Cr)",
    description: "During his tenure as District Governor of RID 3030, Mahesh spearheaded a massive fundraising and medical mobilization drive that successfully funded 105 pediatric open-heart surgeries for children from impoverished families.",
    keyPoints: [
      "Mobilized ~₹1 Crore in partnership with pediatric cardiac hospitals",
      "Full coverage of diagnostic, surgical, and post-operative recovery care",
      "Direct intervention saving young lives across District 3030"
    ],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "sapne-sach-hue",
    title: "Sapne Sach Hue (Dreams Come True)",
    subtitle: "Memorable Experiences for Underprivileged Children",
    category: "Community",
    year: "Ongoing",
    impactNumber: "1,000+ Children",
    description: "A signature emotional initiative that fulfills dreams for underprivileged children, orphanages, and rural students through curated flight journeys, theme park visits, and interactive science center exposure.",
    keyPoints: [
      "Sponsoring first-time air travel and educational tours for orphan kids",
      "Distributing dignity kits, books, and uniforms annually",
      "Creating lifelong inspiring memories for destitute youth"
    ],
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "night-school",
    title: "Night School for Rag-Pickers' Children",
    subtitle: "Education Beyond Daytime Barriers",
    category: "Education",
    year: "2012 - Present",
    impactNumber: "Govt. Funded",
    description: "Established specialized night learning centers for children of rag-pickers and daily-wage laborers who work during daylight hours. Recognized and officially co-funded by the Government of Maharashtra.",
    keyPoints: [
      "Flexible evening curriculum designed around working children's schedules",
      "Free nutritional meals and study materials provided every night",
      "Formally integrated into Maharashtra State Education Department grants"
    ],
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "shelter-society",
    title: "Shelter for the Shelterless Co-op",
    subtitle: "Collateral-Free Housing Credit Society",
    category: "Housing",
    year: "2008 - Present",
    impactNumber: "550 Members",
    description: "Founded a 550-member credit co-operative housing society specifically tailored to micro-earners and homeless families who lack conventional bank collateral.",
    keyPoints: [
      "Elected Founder-President for 3 consecutive terms",
      "Provided micro-loans for plot purchase and home construction",
      "Empowered over 500 families to own permanent concrete homes"
    ],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "malnutrition",
    title: "Supervised Malnutrition Meal Program",
    subtitle: "Dietician-Curated Youth Nutrition",
    category: "Community",
    year: "Ongoing",
    impactNumber: "500+ Kids Monthly",
    description: "Targeted nutritional meal programs implemented in tribal and slum pockets surrounding Wardha, supervised directly by certified dieticians to combat severe acute malnutrition (SAM).",
    keyPoints: [
      "Custom high-protein energy meals formulated by nutrition experts",
      "Regular child growth monitoring (height/weight/BMI tracking)",
      "Drastic reduction in regional malnutrition metrics"
    ],
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "empowerment",
    title: "Self-Employment & Adaptive Workshops",
    subtitle: "Interest-Free Micro Loans & Skill Training",
    category: "Community",
    year: "Ongoing",
    impactNumber: "300+ Women & Differently-Abled",
    description: "Comprehensive vocational training camps for young women, interest-free self-employment loans, and adaptive skill workshops for differently-abled individuals.",
    keyPoints: [
      "Sewing machine distribution and tailoring certification",
      "Zero-interest micro-seed capital for home businesses",
      "Specialized assistive aids and mobility equipment distribution"
    ],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80",
  },
];

export const timelineData: TimelineEvent[] = [
  {
    year: "1997",
    title: "Joined Rotary International",
    category: "Rotary",
    description: "Inducted into Rotary International, commencing over 27 years of selfless community service.",
    highlight: false,
  },
  {
    year: "2002 - 2005",
    title: "Founded 3 Rotary Clubs",
    category: "Rotary",
    description: "Spearheaded the charter formation of Rotary Club of Hinganghat, Rotary Club of Arvi, and Rotary Club of Wani.",
    highlight: true,
  },
  {
    year: "2008",
    title: "Founded 'Shelter for the Shelterless' Co-op",
    category: "Housing",
    description: "Established a 550-member credit co-operative society providing micro-housing finance to landless families.",
    highlight: true,
  },
  {
    year: "2012",
    title: "Night School for Rag-Pickers",
    category: "Community",
    description: "Launched evening schooling for working children; achieved official recognition and funding from Govt. of Maharashtra.",
    highlight: true,
  },
  {
    year: "2016 - 2017",
    title: "District Governor, Rotary District 3030",
    category: "Rotary",
    description: "Served as District Governor for RID 3030; raised ~₹1 Cr to complete 105 pediatric heart surgeries in a single year.",
    highlight: true,
  },
  {
    year: "2020",
    title: "Published 'GENIUS' Handbook",
    category: "Publication",
    description: "Authored technical reference manual for departmental civil engineers across Public Works Department Maharashtra.",
    highlight: false,
  },
  {
    year: "Present",
    title: "Senior PWD Engineering & Rotary Major Donor",
    category: "Engineering",
    description: "Continuing high-impact infrastructure management as Assistant Engineer Gr-II alongside active philanthropy.",
    highlight: true,
  },
];

export const testimonialsData: Testimonial[] = [
  {
    id: "1",
    name: "Rtn. Kishor Kedia",
    role: "Past District Governor",
    organization: "Rotary International District 3030",
    quote: "Mahesh Mokalkar is a visionary leader who leads from the front. His dedication during his tenure as District Governor, especially the 105 heart surgeries initiative, set a benchmark for public service.",
    avatar: "/images/testimonials/rtn-kishor-kedia.webp",
  },
  {
    id: "2",
    name: "Rtn. Madhu Rughwani",
    role: "Senior Rotarian & Business Leader",
    organization: "Rotary Club of Nagpur",
    quote: "Dynamic, energetic, yet deeply humble. Whether executing major infrastructure projects as a civil engineer or driving disaster response camps, Mahesh's passion is infectious.",
    avatar: "/images/testimonials/rtn-madhu-rughwani.webp",
  },
  {
    id: "3",
    name: "Rtn. Shabbir Shakir",
    role: "Past District Governor",
    organization: "Rotary International District 3030",
    quote: "The 'Shelter for the Shelterless' housing co-operative and the Night School for rag-pickers' children reflect Mahesh's genuine empathy for the underprivileged.",
    avatar: "/images/testimonials/rtn-shabbir-shakir.webp",
  },
  {
    id: "4",
    name: "Rtn. Rajiv Sharma",
    role: "Rotary Leadership Trainer",
    organization: "RID 3030 Training Institute",
    quote: "A true role model for young Rotarians. His ability to organize multi-crore social projects while maintaining meticulous civil engineering standards is unmatched.",
    avatar: "/images/testimonials/rtn-rajiv-sharma.webp",
  },
  {
    id: "5",
    name: "Rtr. Anand Zunzunwala",
    role: "Past District Rotaract Representative",
    organization: "Rotaract District 3030",
    quote: "DG Mahesh Mokalkar has always been a mentor and champion for youth empowerment. His 'Sapne Sach Hue' initiative inspired thousands of Rotaractors.",
    avatar: "/images/testimonials/rtr-anand-zunzunwala.webp",
  },
];

export const galleryData: GalleryItem[] = [
  {
    id: "g1",
    title: "105 Pediatric Heart Surgeries Handover Ceremony",
    category: "Rotary",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    caption: "Felicitation of pediatric cardiac surgeons and beneficiary families during District 3030 conference.",
    date: "2017",
  },
  {
    id: "g2",
    title: "PWD Road & Bridge Infrastructure Inspection",
    category: "Engineer",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=1200&q=80",
    caption: "On-site quality check of state highway bridge construction in Wardha division.",
    date: "2021",
  },
  {
    id: "g3",
    title: "Sapne Sach Hue Flight Journey for Children",
    category: "Community",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80",
    caption: "Underprivileged children experiencing their first commercial flight journey.",
    date: "2019",
  },
  {
    id: "g4",
    title: "Night School Annual Day Celebration",
    category: "Community",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    caption: "Students of the rag-pickers' night school receiving certificates and study kits.",
    date: "2022",
  },
  {
    id: "g5",
    title: "Family Moment with Parents ('Aai-Baba')",
    category: "Family",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80",
    caption: "Mahesh and Aarti Mokalkar with parents at home in Wardha.",
    date: "2020",
  },
  {
    id: "g6",
    title: "Rotary Charter Handover — Hinganghat",
    category: "Rotary",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
    caption: "Charter presentation ceremony founding Rotary Club of Hinganghat.",
    date: "2003",
  },
  {
    id: "g7",
    title: "Shelter Co-op Housing Colony Inauguration",
    category: "Community",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    caption: "Handing over house keys to 50 homeless families in Wardha.",
    date: "2010",
  },
  {
    id: "g8",
    title: "GENIUS Technical Book Release Event",
    category: "Engineer",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
    caption: "Unveiling the GENIUS technical reference handbook with senior PWD dignitaries.",
    date: "2020",
  },
];
