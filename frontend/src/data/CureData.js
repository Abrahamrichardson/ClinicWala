// // src/data/CureData.js

// // Banner images (change based on your file names)
// import ayurvedaBanner from "../assets/ayurveda.png";
// import homeopathyBanner from "../assets/homeopathy.png";
// import naturopathyBanner from "../assets/naturopathy.png";
// import unaniBanner from "../assets/unanimedicine.png";
// import acupunctureBanner from "../assets/acupuncture.png";
// import aromatherapyBanner from "../assets/aromatherapy.png";
// import eyecareBanner from "../assets/eyecare.png";
// import haircareBanner from "../assets/haircare.png";
// import skincareBanner from "../assets/skincare.png";
// import plantsBanner from "../assets/medicinalplants.png";
// import remediesBanner from "../assets/remedies.png";
// import yogaBanner from "../assets/yoga.png";

// // Small icon images for Section 9 & Navbar (REAL FILES)
// import ayurvedaIcon from "../assets/ayurveda.png";
// import homeopathyIcon from "../assets/homeopathy.png";
// import naturopathyIcon from "../assets/naturopathy.png";
// import unaniIcon from "../assets/unanimedicine.png";
// import acupunctureIcon from "../assets/acupuncture.png";
// import aromatherapyIcon from "../assets/aromatherapy.png";
// import eyecareIcon from "../assets/eyecare.png";
// import haircareIcon from "../assets/haircare.png";
// import skincareIcon from "../assets/skincare.png";
// import plantsIcon from "../assets/medicinalplants.png";
// import remediesIcon from "../assets/remedies.png";
// import yogaIcon from "../assets/yoga.png";

// // ===============================
// // CURE LIST (For Navbar + Section 9)
// // ===============================
// export const CURE_LIST = [
//   { slug: "ayurveda", label: "AYURVEDA", icon: ayurvedaIcon },
//   { slug: "homeopathy", label: "HOMEOPATHY", icon: homeopathyIcon },
//   { slug: "naturopathy", label: "NATUROPATHY", icon: naturopathyIcon },
//   { slug: "unani", label: "UNANI MEDICINE", icon: unaniIcon },
//   { slug: "acupuncture", label: "ACUPUNCTURE", icon: acupunctureIcon },
//   { slug: "aromatherapy", label: "AROMATHERAPY", icon: aromatherapyIcon },
//   { slug: "eyecare", label: "EYE CARE", icon: eyecareIcon },
//   { slug: "haircare", label: "HAIR CARE", icon: haircareIcon },
//   { slug: "skincare", label: "SKIN CARE", icon: skincareIcon },
//   { slug: "plants", label: "MEDICINAL PLANTS", icon: plantsIcon },
//   { slug: "remedies", label: "HOME REMEDIES", icon: remediesIcon },
//   { slug: "yoga", label: "YOGA", icon: yogaIcon },
// ];

// // ===============================
// // FULL CURE DATA (Ayurveda full structure)
// // ===============================
// export const CURE_DATA = {

//   // ===================== AYURVEDA ======================
//   ayurveda: {
//     title: "AYURVEDA",
//     bannerImage: ayurvedaBanner,
//     shortDescription:
//       "Ayurveda is an ancient Indian system of medicine that focuses on balance of body, mind and spirit through natural methods.",
//     columns: [
//       // COLUMN 1
//       {
//         sections: [
//           {
//             title: "Introduction of Ayurveda",
//             items: [
//               { slug: "ayurveda-definition", label: "Ayurveda Definition", content: "Ayurveda is a traditional system of medicine..." },
//               { slug: "ashtang-ayurved", label: "Ashtang Ayurved", content: "The eight branches of Ayurveda covering..." },
//               { slug: "prayojan-aims-objectives", label: "Prayojan (aims & objectives)", content: "The main aim of Ayurveda is to preserve health..." },
//               { slug: "ayurveda-summary", label: "Ayurveda Summary", content: "An overview of Ayurvedic concepts..." },
//             ]
//           },
//           {
//             title: "History of Ayurveda",
//             items: [
//               { slug: "ayurveda-vedic-era", label: "Ayurveda in Vedic Era", content: "Origins of Ayurveda..." },
//               { slug: "ayurveda-ancient-india", label: "Ayurveda in ancient India", content: "Development of Ayurvedic schools..." },
//               { slug: "ayurveda-scholars", label: "Ayurveda Scholars", content: "Great seers and authors..." },
//               { slug: "ayurveda-avataran", label: "Ayurveda Avtaran", content: "Mythological description..." },
//             ]
//           },
//           {
//             title: "Basic Principles of Ayurveda",
//             items: [
//               { slug: "agni", label: "Agni", content: "Digestive fire..." },
//               { slug: "ahaar-pachan", label: "Ahaar Pachan", content: "Process of digestion..." },
//               { slug: "dhatu-poshan", label: "Dhatu Poshan", content: "Formation of body tissues..." },
//               { slug: "dosha-dhatu-mala", label: "Dosha Dhatu Mala", content: "Three pillars of the body..." },
//               { slug: "oja", label: "Oja", content: "Essence of all Dhatus..." },
//               { slug: "panchbhautic-siddhanth", label: "Panchbhautic Siddhanth", content: "Five elements theory..." },
//               { slug: "purusha", label: "Purusha", content: "Combination of body & soul." },
//             ]
//           },
//           {
//             title: "Ayurveda Pharmacopoeia",
//             items: [
//               { slug: "ayurvediya-padartha-vidyan", label: "Ayurvediya Padartha Vidyan", content: "Study of Ayurvedic substances..." },
//               { slug: "bhaishajya-kalpana", label: "Bhaishajya Kalpana", content: "Types of Ayurvedic medicine forms..." },
//             ]
//           }
//         ]
//       },

//       // COLUMN 2
//       {
//         sections: [
//           {
//             title: "Ayurveda and Health",
//             items: [
//               { slug: "adharniya-vega", label: "Adharniya Vega", content: "Natural urges not to suppress..." },
//               { slug: "dharniyavega-sadvritta", label: "Dharniyavega & Sadvritta", content: "Ethical conduct..." },
//               { slug: "dincharya", label: "Dincharya", content: "Daily routine..." },
//               { slug: "rasayan", label: "Rasayan", content: "Rejuvenation therapy..." },
//               { slug: "ritucharya", label: "Ritucharya", content: "Seasonal regimen..." },
//               { slug: "trayo-upastambha", label: "Troya Upastambha", content: "Three supports of life..." },
//               { slug: "vajikaran", label: "Vajikaran", content: "Reproductive health therapy..." },
//             ]
//           },
//           {
//             title: "Diseases",
//             items: [
//               { slug: "nidan-panchak", label: "Nidan Panchak", content: "Diagnosis method..." },
//               { slug: "hetu-nidan", label: "Hetu (Nidan)", content: "Disease causes..." },
//               { slug: "poorvaroopa", label: "Poorvaroop", content: "Early symptoms..." },
//               { slug: "roop", label: "Roop", content: "Symptoms..." },
//               { slug: "upshaya", label: "Upshaya", content: "Aggravating/relieving factors..." },
//               { slug: "samprapti", label: "Samprapti", content: "Pathogenesis..." },
//               { slug: "disease-list", label: "Disease List", content: "Common disease categories..." },
//               { slug: "disease-definition-classification", label: "Definition & Classification", content: "Ayurvedic classification..." },
//             ]
//           }
//         ]
//       },

//       // COLUMN 3
//       {
//         sections: [
//           {
//             title: "Padarth Vidhyan",
//             items: [
//               { slug: "dravya", label: "Dravya", content: "Substance..." },
//               { slug: "guna", label: "Guna", content: "Qualities..." },
//               { slug: "saratha-guna", label: "Sartha Guna", content: "Group of qualities..." },
//               { slug: "gurvadi-guna", label: "Gurvadi Guna", content: "Twenty properties..." },
//               { slug: "adhyatma-guna", label: "Adhyatma Guna", content: "Spiritual qualities..." },
//               { slug: "samanya-guna", label: "Samanya Guna", content: "Similarity rule..." },
//               { slug: "karma", label: "Karma", content: "Action..." },
//               { slug: "pramana-evidence", label: "Pramana", content: "Evidence types..." },
//               { slug: "samanya", label: "Samanya", content: "Similarity..." },
//               { slug: "samavaya", label: "Samavaya", content: "Inseparable relation..." },
//               { slug: "vishesha", label: "Vishesh", content: "Difference..." },
//             ]
//           },

//           {
//             title: "Original Scriptures",
//             items: [
//               { slug: "original-scriptures-introduction", label: "Introduction", content: "Overview of classical texts..." }
//             ]
//           },

//           {
//             title: "Ayurvedic Treatment",
//             items: [
//               { slug: "chikitsa", label: "Chikitsa", content: "Treatment principles..." },
//               { slug: "purva-karma-treatment", label: "Purva Karma", content: "Preparatory therapies..." },
//               { slug: "pradhan-karma-treatment", label: "Pradhan Karma", content: "Panchakarma..." },
//               { slug: "chikitsa-paddhati", label: "Chikitsa Padchhusthtayam", content: "Fourfold approach..." },
//             ]
//           },

//           {
//             title: "Ayurvedic Therapies",
//             items: [
//               { slug: "purva-karma-therapy", label: "Purva Karma", content: "Preparatory therapy..." },
//               { slug: "pradhan-karma-therapy", label: "Pradhan Karma", content: "Main therapy..." },
//               { slug: "shamana", label: "Shamana", content: "Palliative therapy..." },
//               { slug: "shodhana", label: "Shodhana - Elimination Therapy", content: "Purification therapy..." },
//             ]
//           },
//         ]
//       }
//     ]
//   },

//   // ===================== HOMEOPATHY ======================
//   homeopathy: {
//     title: "HOMEOPATHY",
//     bannerImage: homeopathyBanner,
//     shortDescription: "Homeopathy is a holistic system...",
//     columns: [
//       {
//         sections: [
//           {
//             title: "Introduction",
//             items: [
//               { slug: "history", label: "History of Homeopathy", content: "..." },
//               { slug: "principles", label: "Basic Principles", content: "..." },
//               { slug: "founder", label: "Dr. Hahnemann", content: "..." },
//             ]
//           },
//           {
//             title: "Pharmacy",
//             items: [
//               { slug: "potentisation", label: "Potentisation", content: "..." },
//               { slug: "remedy-prep", label: "Remedy Preparation", content: "..." },
//             ]
//           }
//         ]
//       },
//       {
//         sections: [
//           {
//             title: "Materia Medica",
//             items: [
//               { slug: "polychrests", label: "Polychrests", content: "..." },
//               { slug: "constitutional", label: "Constitutional Remedies", content: "..." },
//             ]
//           },
//           {
//             title: "Case Taking",
//             items: [
//               { slug: "case-taking", label: "Case Taking Steps", content: "..." },
//               { slug: "repertorisation", label: "Repertorisation", content: "..." },
//             ]
//           }
//         ]
//       },
//       {
//         sections: [
//           {
//             title: "Clinical",
//             items: [
//               { slug: "acute-diseases", label: "Acute Diseases", content: "..." },
//               { slug: "chronic-diseases", label: "Chronic Diseases", content: "..." },
//             ]
//           }
//         ]
//       }
//     ]
//   },

//   // ===================== NATUROPATHY ======================
//   naturopathy: {
//     title: "NATUROPATHY",
//     bannerImage: naturopathyBanner,
//     shortDescription: "Naturopathy focuses on natural healing...",
//     columns: [
//       {
//         sections: [
//           {
//             title: "Principles",
//             items: [
//               { slug: "healing-power", label: "Healing Power of Nature", content: "..." },
//               { slug: "treat-cause", label: "Treat the Cause", content: "..." },
//             ]
//           },
//           {
//             title: "Diet Therapy",
//             items: [
//               { slug: "raw-diet", label: "Raw Diet", content: "..." },
//               { slug: "juice-therapy", label: "Juice Therapy", content: "..." },
//             ]
//           }
//         ]
//       },
//       {
//         sections: [
//           {
//             title: "Hydrotherapy",
//             items: [
//               { slug: "baths", label: "Therapeutic Baths", content: "..." },
//               { slug: "packs", label: "Packs & Compresses", content: "..." },
//             ]
//           }
//         ]
//       },
//       {
//         sections: [
//           {
//             title: "Other Therapies",
//             items: [
//               { slug: "mud-therapy", label: "Mud Therapy", content: "..." },
//               { slug: "yoga-integration", label: "Yoga & Relaxation", content: "..." },
//             ]
//           }
//         ]
//       }
//     ]
//   },

//   // ===================== UNANI ======================
//   unani: {
//     title: "UNANI MEDICINE",
//     bannerImage: unaniBanner,
//     shortDescription:
//       "Unani is a Greco-Arabic system of medicine based on the balance of four humors...",
//     columns: [
//       {
//         sections: [
//           {
//             title: "Foundations",
//             items: [
//               { slug: "arkan", label: "Arkan (Elements)", content: "..." },
//               { slug: "mizaj", label: "Mizaj (Temperament)", content: "..." },
//             ]
//           }
//         ]
//       },
//       {
//         sections: [
//           {
//             title: "Diagnosis",
//             items: [
//               { slug: "pulse", label: "Nabz (Pulse)", content: "..." },
//               { slug: "urine", label: "Bole (Urine Examination)", content: "..." },
//             ]
//           }
//         ]
//       },
//       {
//         sections: [
//           {
//             title: "Therapies",
//             items: [
//               { slug: "ilaj-bil-tadbeer", label: "Ilaj bil-Tadbeer", content: "..." },
//               { slug: "ilaj-bid-dawa", label: "Ilaj bid-Dawa", content: "..." },
//             ]
//           }
//         ]
//       }
//     ]
//   },

//   // ===================== REMAINING SIMPLE STRUCTURES ======================
//   acupuncture: {
//     title: "ACUPUNCTURE",
//     bannerImage: acupunctureBanner,
//     shortDescription: "Acupuncture uses fine needles...",
//     columns: [
//       {
//         sections: [
//           {
//             title: "Basics",
//             items: [
//               { slug: "meridians", label: "Meridians", content: "..." },
//               { slug: "points", label: "Acupuncture Points", content: "..." },
//   ]}]}, {}, {}],
//   },

//   aromatherapy: {
//     title: "AROMATHERAPY",
//     bannerImage: aromatherapyBanner,
//     shortDescription: "Aromatherapy uses essential oils...",
//     columns: [
//       {
//         sections: [
//           {
//             title: "Essential Oils",
//             items: [
//               { slug: "lavender", label: "Lavender Oil Uses", content: "..." },
//               { slug: "peppermint", label: "Peppermint Oil Uses", content: "..." },
//             ]
//           }
//         ]
//       },
//       { sections: [] },
//       { sections: [] }
//     ]
//   },

//   eyecare: {
//     title: "EYE CARE",
//     bannerImage: eyecareBanner,
//     shortDescription: "Natural eye care and exercises...",
//     columns: [{ sections: [] }, { sections: [] }, { sections: [] }]
//   },

//   haircare: {
//     title: "HAIR CARE",
//     bannerImage: haircareBanner,
//     shortDescription: "Natural hair care remedies...",
//     columns: [{ sections: [] }, { sections: [] }, { sections: [] }]
//   },

//   skincare: {
//     title: "SKIN CARE",
//     bannerImage: skincareBanner,
//     shortDescription: "Skin care using herbal methods...",
//     columns: [{ sections: [] }, { sections: [] }, { sections: [] }]
//   },

//   plants: {
//     title: "MEDICINAL PLANTS",
//     bannerImage: plantsBanner,
//     shortDescription: "Medicinal plants that heal naturally...",
//     columns: [{ sections: [] }, { sections: [] }, { sections: [] }]
//   },

//   remedies: {
//     title: "HOME REMEDIES",
//     bannerImage: remediesBanner,
//     shortDescription: "Simple natural remedies...",
//     columns: [{ sections: [] }, { sections: [] }, { sections: [] }]
//   },

//   yoga: {
//     title: "YOGA",
//     bannerImage: yogaBanner,
//     shortDescription: "Yoga improves physical and mental health...",
//     columns: [{ sections: [] }, { sections: [] }, { sections: [] }]
//   }

// };


// src/data/CureData.js

// Banner images
import ayurvedaBanner from "../assets/ayurveda.png";
import homeopathyBanner from "../assets/homeopathy.png";
import naturopathyBanner from "../assets/naturopathy.png";
import unaniBanner from "../assets/unanimedicine.png";
import acupunctureBanner from "../assets/acupuncture.png";
import aromatherapyBanner from "../assets/aromatherapy.png";
import eyecareBanner from "../assets/eyecare.png";
import haircareBanner from "../assets/haircare.png";
import skincareBanner from "../assets/skincare.png";
import plantsBanner from "../assets/medicinalplants.png";
import remediesBanner from "../assets/remedies.png";
import yogaBanner from "../assets/yoga.png";

// Icons
import ayurvedaIcon from "../assets/ayurveda.png";
import homeopathyIcon from "../assets/homeopathy.png";
import naturopathyIcon from "../assets/naturopathy.png";
import unaniIcon from "../assets/unanimedicine.png";
import acupunctureIcon from "../assets/acupuncture.png";
import aromatherapyIcon from "../assets/aromatherapy.png";
import eyecareIcon from "../assets/eyecare.png";
import haircareIcon from "../assets/haircare.png";
import skincareIcon from "../assets/skincare.png";
import plantsIcon from "../assets/medicinalplants.png";
import remediesIcon from "../assets/remedies.png";
import yogaIcon from "../assets/yoga.png";


// ===============================
// CURE LIST
// ===============================
export const CURE_LIST = [
  { slug: "ayurveda", label: "AYURVEDA", icon: ayurvedaIcon },
  { slug: "homeopathy", label: "HOMEOPATHY", icon: homeopathyIcon },
  { slug: "naturopathy", label: "NATUROPATHY", icon: naturopathyIcon },
  { slug: "unani", label: "UNANI MEDICINE", icon: unaniIcon },
  { slug: "acupuncture", label: "ACUPUNCTURE", icon: acupunctureIcon },
  { slug: "aromatherapy", label: "AROMATHERAPY", icon: aromatherapyIcon },
  { slug: "eyecare", label: "EYE CARE", icon: eyecareIcon },
  { slug: "haircare", label: "HAIR CARE", icon: haircareIcon },
  { slug: "skincare", label: "SKIN CARE", icon: skincareIcon },
  { slug: "plants", label: "MEDICINAL PLANTS", icon: plantsIcon },
  { slug: "remedies", label: "HOME REMEDIES", icon: remediesIcon },
  { slug: "yoga", label: "YOGA", icon: yogaIcon },
];


// ===============================
// CURE DATA
// ===============================
export const CURE_DATA = {

  // ---------- AYURVEDA ----------
  ayurveda: {
    title: "AYURVEDA",
    bannerImage: ayurvedaBanner,
    shortDescription:
      "Ayurveda is an ancient Indian system of medicine that focuses on balance of body, mind and spirit through natural methods.",
    columns: [
      {
        sections: [
          {
            title: "Introduction of Ayurveda",
            items: [
              { slug: "ayurveda-definition", label: "Ayurveda Definition", content: "Ayurveda is a traditional system of medicine..." },
              { slug: "ashtang-ayurved", label: "Ashtang Ayurved", content: "The eight branches of Ayurveda..." },
              { slug: "prayojan-aims-objectives", label: "Prayojan (aims & objectives)", content: "The aim of Ayurveda..." },
              { slug: "ayurveda-summary", label: "Ayurveda Summary", content: "An overview..." },
            ]
          },
          {
            title: "History of Ayurveda",
            items: [
              { slug: "ayurveda-vedic-era", label: "Ayurveda in Vedic Era", content: "Origins..." },
              { slug: "ayurveda-ancient-india", label: "Ayurveda in ancient India", content: "Development..." },
              { slug: "ayurveda-scholars", label: "Ayurveda Scholars", content: "Great seers..." },
              { slug: "ayurveda-avataran", label: "Ayurveda Avtaran", content: "Mythological description..." },
            ]
          },
          {
            title: "Basic Principles of Ayurveda",
            items: [
              { slug: "agni", label: "Agni", content: "Digestive fire..." },
              { slug: "ahaar-pachan", label: "Ahaar Pachan", content: "Digestion..." },
              { slug: "dhatu-poshan", label: "Dhatu Poshan", content: "Tissues..." },
              { slug: "dosha-dhatu-mala", label: "Dosha Dhatu Mala", content: "Three pillars..." },
              { slug: "oja", label: "Oja", content: "Vital essence..." },
              { slug: "panchbhautic-siddhanth", label: "Panchbhautic Siddhanth", content: "Five elements..." },
              { slug: "purusha", label: "Purusha", content: "Body & soul..." },
            ]
          },
          {
            title: "Ayurveda Pharmacopoeia",
            items: [
              { slug: "ayurvediya-padartha-vidyan", label: "Ayurvediya Padartha Vidyan", content: "Study of substances..." },
              { slug: "bhaishajya-kalpana", label: "Bhaishajya Kalpana", content: "Medicine forms..." },
            ]
          }
        ]
      },

      {
        sections: [
          {
            title: "Ayurveda and Health",
            items: [
              { slug: "adharniya-vega", label: "Adharniya Vega", content: "Natural urges..." },
              { slug: "dharniyavega-sadvritta", label: "Dharniyavega & Sadvritta", content: "Ethical conduct..." },
              { slug: "dincharya", label: "Dincharya", content: "Daily routine..." },
              { slug: "rasayan", label: "Rasayan", content: "Rejuvenation..." },
              { slug: "ritucharya", label: "Ritucharya", content: "Seasonal regimen..." },
              { slug: "trayo-upastambha", label: "Troya Upastambha", content: "3 supports..." },
              { slug: "vajikaran", label: "Vajikaran", content: "Reproductive health..." },
            ]
          },
          {
            title: "Diseases",
            items: [
              { slug: "nidan-panchak", label: "Nidan Panchak", content: "Diagnosis..." },
              { slug: "hetu-nidan", label: "Hetu (Nidan)", content: "Causes..." },
              { slug: "poorvaroopa", label: "Poorvaroop", content: "Early signs..." },
              { slug: "roop", label: "Roop", content: "Symptoms..." },
              { slug: "upshaya", label: "Upshaya", content: "Aggravation..." },
              { slug: "samprapti", label: "Samprapti", content: "Pathogenesis..." },
              { slug: "disease-list", label: "Disease List", content: "..." },
              { slug: "disease-definition-classification", label: "Definition & Classification", content: "..." },
            ]
          }
        ]
      },

      {
        sections: [
          {
            title: "Padarth Vidhyan",
            items: [
              { slug: "dravya", label: "Dravya", content: "Substance..." },
              { slug: "guna", label: "Guna", content: "Qualities..." },
              { slug: "saratha-guna", label: "Sartha Guna", content: "..." },
              { slug: "gurvadi-guna", label: "Gurvadi Guna", content: "..." },
              { slug: "adhyatma-guna", label: "Adhyatma Guna", content: "..." },
              { slug: "samanya-guna", label: "Samanya Guna", content: "..." },
              { slug: "karma", label: "Karma", content: "Action..." },
              { slug: "pramana-evidence", label: "Pramana", content: "Evidence..." },
              { slug: "samanya", label: "Samanya", content: "..." },
              { slug: "samavaya", label: "Samavaya", content: "..." },
              { slug: "vishesha", label: "Vishesh", content: "..." },
            ]
          },

          {
            title: "Original Scriptures",
            items: [
              { slug: "original-scriptures-introduction", label: "Introduction", content: "Overview..." }
            ]
          },

          {
            title: "Ayurvedic Treatment",
            items: [
              { slug: "chikitsa", label: "Chikitsa", content: "..." },
              { slug: "purva-karma-treatment", label: "Purva Karma", content: "..." },
              { slug: "pradhan-karma-treatment", label: "Pradhan Karma", content: "..." },
              { slug: "chikitsa-paddhati", label: "Chikitsa Paddhusthtayam", content: "..." },
            ]
          },

          {
            title: "Ayurvedic Therapies",
            items: [
              { slug: "purva-karma-therapy", label: "Purva Karma", content: "..." },
              { slug: "pradhan-karma-therapy", label: "Pradhan Karma", content: "..." },
              { slug: "shamana", label: "Shamana", content: "..." },
              { slug: "shodhana", label: "Shodhana - Elimination Therapy", content: "..." },
            ]
          }
        ]
      }
    ]
  },


  // ---------- HOMEOPATHY ----------
  homeopathy: {
    title: "HOMEOPATHY",
    bannerImage: homeopathyBanner,
    shortDescription: "Homeopathy is a holistic system...",
    columns: [
      {
        sections: [
          {
            title: "Introduction",
            items: [
              { slug: "history", label: "History of Homeopathy", content: "..." },
              { slug: "principles", label: "Basic Principles", content: "..." },
              { slug: "founder", label: "Dr. Hahnemann", content: "..." },
            ]
          },
          {
            title: "Pharmacy",
            items: [
              { slug: "potentisation", label: "Potentisation", content: "..." },
              { slug: "remedy-prep", label: "Remedy Preparation", content: "..." },
            ]
          }
        ]
      },

      {
        sections: [
          {
            title: "Materia Medica",
            items: [
              { slug: "polychrests", label: "Polychrests", content: "..." },
              { slug: "constitutional", label: "Constitutional Remedies", content: "..." },
            ]
          },
          {
            title: "Case Taking",
            items: [
              { slug: "case-taking", label: "Case Taking Steps", content: "..." },
              { slug: "repertorisation", label: "Repertorisation", content: "..." },
            ]
          }
        ]
      },

      {
        sections: [
          {
            title: "Clinical",
            items: [
              { slug: "acute-diseases", label: "Acute Diseases", content: "..." },
              { slug: "chronic-diseases", label: "Chronic Diseases", content: "..." },
            ]
          }
        ]
      }
    ]
  },


  // ---------- NATUROPATHY ----------
  naturopathy: {
    title: "NATUROPATHY",
    bannerImage: naturopathyBanner,
    shortDescription: "Naturopathy focuses on natural healing...",
    columns: [
      {
        sections: [
          {
            title: "Principles",
            items: [
              { slug: "healing-power", label: "Healing Power of Nature", content: "..." },
              { slug: "treat-cause", label: "Treat the Cause", content: "..." },
            ]
          },
          {
            title: "Diet Therapy",
            items: [
              { slug: "raw-diet", label: "Raw Diet", content: "..." },
              { slug: "juice-therapy", label: "Juice Therapy", content: "..." },
            ]
          }
        ]
      },

      {
        sections: [
          {
            title: "Hydrotherapy",
            items: [
              { slug: "baths", label: "Therapeutic Baths", content: "..." },
              { slug: "packs", label: "Packs & Compresses", content: "..." },
            ]
          }
        ]
      },

      {
        sections: [
          {
            title: "Other Therapies",
            items: [
              { slug: "mud-therapy", label: "Mud Therapy", content: "..." },
              { slug: "yoga-integration", label: "Yoga & Relaxation", content: "..." },
            ]
          }
        ]
      }
    ]
  },


  // ---------- UNANI ----------
  unani: {
    title: "UNANI MEDICINE",
    bannerImage: unaniBanner,
    shortDescription: "Unani is a Greco-Arabic system...",
    columns: [
      {
        sections: [
          {
            title: "Foundations",
            items: [
              { slug: "arkan", label: "Arkan (Elements)", content: "..." },
              { slug: "mizaj", label: "Mizaj (Temperament)", content: "..." },
            ]
          }
        ]
      },

      {
        sections: [
          {
            title: "Diagnosis",
            items: [
              { slug: "pulse", label: "Nabz (Pulse)", content: "..." },
              { slug: "urine", label: "Bole (Urine Examination)", content: "..." },
            ]
          }
        ]
      },

      {
        sections: [
          {
            title: "Therapies",
            items: [
              { slug: "ilaj-bil-tadbeer", label: "Ilaj bil-Tadbeer", content: "..." },
              { slug: "ilaj-bid-dawa", label: "Ilaj bid-Dawa", content: "..." },
            ]
          }
        ]
      }
    ]
  },


  // ---------- ACUPUNCTURE (FIXED) ----------
  acupuncture: {
    title: "ACUPUNCTURE",
    bannerImage: acupunctureBanner,
    shortDescription: "Acupuncture uses fine needles...",
    columns: [
      {
        sections: [
          {
            title: "Basics",
            items: [
              { slug: "meridians", label: "Meridians", content: "..." },
              { slug: "points", label: "Acupuncture Points", content: "..." },
            ]
          }
        ]
      },
      { sections: [] },
      { sections: [] }
    ]
  },


  // ---------- AROMATHERAPY ----------
  aromatherapy: {
    title: "AROMATHERAPY",
    bannerImage: aromatherapyBanner,
    shortDescription: "Aromatherapy uses essential oils...",
    columns: [
      {
        sections: [
          {
            title: "Essential Oils",
            items: [
              { slug: "lavender", label: "Lavender Oil Uses", content: "..." },
              { slug: "peppermint", label: "Peppermint Oil Uses", content: "..." },
            ]
          }
        ]
      },
      { sections: [] },
      { sections: [] }
    ]
  },


  // ---------- EYE CARE ----------
  eyecare: {
    title: "EYE CARE",
    bannerImage: eyecareBanner,
    shortDescription: "Natural eye care and exercises...",
    columns: [
      { sections: [] },
      { sections: [] },
      { sections: [] }
    ]
  },


  // ---------- HAIR CARE ----------
  haircare: {
    title: "HAIR CARE",
    bannerImage: haircareBanner,
    shortDescription: "Natural hair care remedies...",
    columns: [
      { sections: [] },
      { sections: [] },
      { sections: [] }
    ]
  },


  // ---------- SKIN CARE ----------
  skincare: {
    title: "SKIN CARE",
    bannerImage: skincareBanner,
    shortDescription: "Skin care using herbal methods...",
    columns: [
      { sections: [] },
      { sections: [] },
      { sections: [] }
    ]
  },


  // ---------- MEDICINAL PLANTS ----------
  plants: {
    title: "MEDICINAL PLANTS",
    bannerImage: plantsBanner,
    shortDescription: "Medicinal plants that heal naturally...",
    columns: [
      { sections: [] },
      { sections: [] },
      { sections: [] }
    ]
  },


  // ---------- HOME REMEDIES ----------
  remedies: {
    title: "HOME REMEDIES",
    bannerImage: remediesBanner,
    shortDescription: "Simple natural remedies...",
    columns: [
      { sections: [] },
      { sections: [] },
      { sections: [] }
    ]
  },


  // ---------- YOGA ----------
  yoga: {
    title: "YOGA",
    bannerImage: yogaBanner,
    shortDescription: "Yoga improves physical and mental health...",
    columns: [
      { sections: [] },
      { sections: [] },
      { sections: [] }
    ]
  }

};
