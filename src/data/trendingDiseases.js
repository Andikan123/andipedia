const trendingDiseases = [
  {
    id: 1,
    name: "Malaria",
    slug: "malaria",
    image: "/images/malaria.jpg",
    description:
      "A mosquito-borne disease causing fever, chills and fatigue, especially common in tropical regions.",
    category: "Infectious Disease",
    tags: ["Symptoms", "Prevention", "Treatment"],
    updated: "Updated Today",
    severity: "High",
    color: "red",

    symptoms: [
      "High fever",
      "Chills and sweating",
      "Headache",
      "Fatigue",
      "Muscle pain",
    ],

    prevention: [
      "Use insecticide-treated mosquito nets",
      "Apply mosquito repellents",
      "Eliminate stagnant water",
      "Wear long-sleeved clothing at night",
      "Indoor residual spraying",
    ],
  },

  {
    id: 2,
    name: "Tuberculosis",
    slug: "tuberculosis",
    image: "/images/tuberculosis.jpg",
    description:
      "A serious bacterial infection mainly affecting the lungs and spread through the air.",
    category: "Respiratory Disease",
    tags: ["Diagnosis", "Prevention", "Medication"],
    updated: "2 hours ago",
    severity: "Critical",
    color: "orange",

    symptoms: [
      "Persistent cough",
      "Coughing blood",
      "Chest pain",
      "Night sweats",
      "Weight loss",
      "Fever",
    ],

    prevention: [
      "BCG vaccination",
      "Early screening and treatment",
      "Avoid close contact with infected persons",
      "Good ventilation in living spaces",
      "Wearing masks in high-risk areas",
    ],
  },

  {
    id: 3,
    name: "Hypertension",
    slug: "hypertension",
    image: "/images/hypertension.jpg",
    description:
      "A chronic condition where blood pressure remains consistently elevated over time.",
    category: "Cardiovascular",
    tags: ["Lifestyle", "Monitoring", "Treatment"],
    updated: "Updated Today",
    severity: "Moderate",
    color: "blue",

    symptoms: [
      "Often no symptoms",
      "Headaches",
      "Dizziness",
      "Blurred vision",
      "Chest pain (severe cases)",
    ],

    prevention: [
      "Reduce salt intake",
      "Regular exercise",
      "Maintain healthy weight",
      "Limit alcohol consumption",
      "Avoid smoking",
      "Regular blood pressure checks",
    ],
  },

  {
    id: 4,
    name: "Diabetes",
    slug: "diabetes",
    image: "/images/diabetes.jpg",
    description:
      "A metabolic disease that affects how the body regulates blood sugar levels.",
    category: "Endocrine Disorder",
    tags: ["Insulin", "Diet", "Monitoring"],
    updated: "5 hours ago",
    severity: "High",
    color: "purple",

    symptoms: [
      "Frequent urination",
      "Excessive thirst",
      "Increased hunger",
      "Fatigue",
      "Blurred vision",
      "Slow wound healing",
    ],

    prevention: [
      "Healthy balanced diet",
      "Regular physical activity",
      "Maintain healthy weight",
      "Avoid excess sugar intake",
      "Routine blood sugar screening",
    ],
  },

  {
    id: 5,
    name: "Meningitis",
    slug: "meningitis",
    image: "/images/meningitis.jpg",
    description:
      "Inflammation of the membranes surrounding the brain and spinal cord.",
    category: "Neurological",
    tags: ["Emergency", "Vaccination", "Treatment"],
    updated: "1 day ago",
    severity: "Critical",
    color: "pink",

    symptoms: [
      "Severe headache",
      "Stiff neck",
      "High fever",
      "Sensitivity to light",
      "Nausea and vomiting",
      "Confusion",
    ],

    prevention: [
      "Vaccination (meningococcal vaccine)",
      "Avoid close contact with infected individuals",
      "Good hygiene practices",
      "Early treatment of respiratory infections",
    ],
  },

  {
    id: 6,
    name: "Asthma",
    slug: "asthma",
    image: "/images/asthma.jpg",
    description:
      "A chronic respiratory condition causing airway inflammation and breathing difficulty.",
    category: "Chronic Disease",
    tags: ["Inhalers", "Triggers", "Management"],
    updated: "Updated Today",
    severity: "Moderate",
    color: "green",

    symptoms: [
      "Shortness of breath",
      "Wheezing",
      "Chest tightness",
      "Coughing (especially at night)",
    ],

    prevention: [
      "Avoid triggers (dust, smoke, pollen)",
      "Use prescribed inhalers correctly",
      "Keep environment clean",
      "Regular medical checkups",
      "Exercise with caution",
    ],
  },
];

export default trendingDiseases;