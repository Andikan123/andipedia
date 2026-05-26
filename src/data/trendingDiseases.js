const trendingDiseases = [
  {
    id: 1,
    type: "Infectious Diseases",
    color: "red",

    groups: [
      {
        id: 1,
        pathogen: "Parasitic Diseases",
        diseases: [
          {
            id: 1,
            name: "Malaria",
            slug: "malaria",
            image: "/images/malaria.jpg",
            description:
              "Malaria is a life-threatening disease caused by Plasmodium parasites, transmitted primarily through the bites of infected female Anopheles mosquitoes.Causes and Transmission Malaria is caused by single-celled parasites of the genus Plasmodium, with Plasmodium falciparum and Plasmodium vivax being the most common and dangerous species. Transmission occurs mainly through the bite of infected mosquitoes, but it can also happen via blood transfusions, organ transplants, contaminated needles, or from mother to child during pregnancy or delivery. The parasites infect red blood cells, leading to the characteristic symptoms of the disease.Symptoms typically appear 10–15 days after infection and can range from mild to severe. Early signs include fever, chills, headache, and muscle aches, often resembling flu-like illness. If untreated, malaria can progress rapidly to severe complications such as cerebral malaria, severe anemia, respiratory distress, multi-organ failure, and death. Children under five are particularly vulnerable to life-threatening illness. Malaria is most prevalent in tropical and subtropical regions, especially sub-Saharan Africa, parts of Asia, Central and South America, and some areas bordering the Mediterranean. Globally, malaria causes approximately 263 million infections and nearly 597,000 deaths annually, with the majority occurring in sub-Saharan Africa among young children. Malaria is most prevalent in tropical and subtropical regions, especially sub-Saharan Africa, parts of Asia, Central and South America, and some areas bordering the Mediterranean. Globally, malaria causes approximately 263 million infections and nearly 597,000 deaths annually, with the majority occurring in sub-Saharan Africa among young children. Malaria is most prevalent in tropical and subtropical regions, especially sub-Saharan Africa, parts of Asia, Central and South America, and some areas bordering the Mediterranean. Globally, malaria causes approximately 263 million infections and nearly 597,000 deaths annually, with the majority occurring in sub-Saharan Africa among young children. ",
            category: "Infectious Disease",
            tags: ["Symptoms", "Prevention", "Treatment"],
            updated: "Updated Today",
            severity: "High",
            color: "red",
            symptoms: ["High fever", "Chills", "Headache"],
            prevention: ["Mosquito nets", "Repellents", "Clean environment"],
            treatment: "Antimalarial drugs such as ACT are used.",
          },

          {
            id: 2,
            name: "Schistosomiasis",
            slug: "schistosomiasis",
            image: "/images/schistosomiasis.webp",
            description:
              "Schistosomiasis, also known as bilharziasis or snail fever, is a parasitic disease caused by Schistosoma species, transmitted through contact with contaminated freshwater, leading to chronic organ damage if untreated.Schistosomiasis is a neglected tropical disease caused by parasitic flatworms called schistosomes. It primarily affects the urinary tract or intestines and is prevalent in tropical and subtropical regions, especially in communities lacking clean water and sanitation. Globally, nearly 240 million people are infected, with over 700 million at risk in endemic areas. The disease is a major cause of morbidity and mortality in developing countries, particularly in Africa, South America, the Caribbean, the Middle East, and Asia.",
            category: "Infectious Disease",
            tags: ["Symptoms", "Prevention", "Treatment"],
            updated: "Recently",
            severity: "High",
            color: "red",
            symptoms: ["Abdominal pain", "Blood in urine", "Fatigue"],
            prevention: ["Avoid contaminated water", "Sanitation"],
            treatment: "Praziquantel is the standard treatment.",
          },
        ],
      },

      {
        id: 2,
        pathogen: "Bacterial Diseases",
        diseases: [
          {
            id: 3,
            name: "Tuberculosis",
            slug: "tuberculosis",
            image: "/images/tuberculosis.jpg",
            description:
              "Tuberculosis (TB) is a serious infectious disease caused by the bacteria Mycobacterium tuberculosis, primarily affecting the lungs but can also impact other parts of the body.There are two main types of TB infection:Latent TB Infection (LTBI): The bacteria remain inactive in the body and do not cause symptoms. Individuals with LTBI cannot spread TB to others but are at risk of developing active TB in the future.Active TB Disease: This occurs when the immune system fails to contain the bacteria, leading to symptoms and the potential to spread the disease to others. ",
            category: "Respiratory Disease",
            tags: ["Diagnosis", "Prevention", "Medication"],
            updated: "2 hours ago",
            severity: "Critical",
            color: "orange",
            symptoms: ["Cough", "Weight loss", "Night sweats"],
            prevention: ["BCG vaccine", "Ventilation", "Masks"],
            treatment: "Long course antibiotics (RIPE therapy).",
          },

          {
            id: 4,
            name: "Cholera",
            slug: "cholera",
            image: "/images/cholera.jpg",
            description:
              "Cholera is an acute diarrheal disease caused by the bacterium Vibrio cholerae, which can be fatal if untreated but is preventable with proper sanitation, clean water, and vaccination.Cholera is caused by consuming food or water contaminated with Vibrio cholerae, often through fecal contamination. Common sources include unsafe drinking water, undercooked shellfish, and contaminated food. Humans are the only known hosts, and infected individuals can spread the bacteria through their feces for 1–10 days, even if they show no symptoms.Cholera is caused by consuming food or water contaminated with Vibrio cholerae, often through fecal contamination. Common sources include unsafe drinking water, undercooked shellfish, and contaminated food. Humans are the only known hosts, and infected individuals can spread the bacteria through their feces for 1–10 days, even if they show no symptoms.",
            category: "Infectious Disease",
            tags: ["Symptoms", "Prevention", "Treatment"],
            updated: "Recently",
            severity: "High",
            color: "blue",
            symptoms: ["Severe diarrhea", "Dehydration"],
            prevention: ["Clean water", "Hygiene"],
            treatment: "Oral rehydration and antibiotics.",
          },

          {
            id: 5,
            name: "Meningitis",
            slug: "meningitis",
            image: "/images/meningitis.jpg",
            description:
              "Meningitis is an inflammation of the protective membranes surrounding the brain and spinal cord, caused by infections from bacteria, viruses, fungi, or parasites. Common symptoms include fever, neck stiffness, light sensitivity, and headache. Immediate medical attention is crucial, as meningitis can lead to serious complications or death if untreated. Treatment often involves antibiotics for bacterial meningitis, while viral meningitis may improve without specific treatment.",
            category: "Neurological",
            tags: ["Emergency", "Vaccination", "Treatment"],
            updated: "1 day ago",
            severity: "Critical",
            color: "pink",
            symptoms: ["Fever", "Stiff neck", "Headache"],
            prevention: ["Vaccination", "Hygiene"],
            treatment: "Antibiotics and supportive care.",
          },
        ],
      },

      {
        id: 3,
        pathogen: "Viral Diseases",
        diseases: [
          {
            id: 6,
            name: "HIV/AIDS",
            slug: "hiv-aids",
            image: "/images/hiv.jfif",
            description:
              "Human immunodeficiency virus (HIV) is a virus that attacks the body’s immune system. Acquired immunodeficiency syndrome (AIDS) occurs at the most advanced stage of infection.HIV targets the body’s white blood cells, weakening the immune system. This makes it easier to get sick with diseases like tuberculosis, infections and some cancers.HIV is spread from the body fluids of an infected person, including blood, breast milk, semen and vaginal fluids. It is not spread by kisses, hugs or sharing food. It can also spread from a mother to her baby.HIV can be prevented and treated with antiretroviral therapy (ART). Untreated HIV can progress to AIDS, often after many years.WHO now defines Advanced HIV Disease (AHD) as CD4 cell count less than 200 cells/mm3 or WHO stage 3 or 4 event in adults and adolescents. All children younger than 5 years of age living with HIV are considered to have advanced HIV disease, regardless of clinical or immunological status.",
            category: "Infectious Disease",
            tags: ["Symptoms", "Prevention", "Treatment"],
            updated: "Today",
            severity: "Critical",
            color: "red",
            symptoms: ["Weight loss", "Fever", "Fatigue"],
            prevention: ["Safe sex", "Sterile needles"],
            treatment: "Antiretroviral therapy (ART).",
          },

          {
            id: 7,
            name: "Influenza",
            slug: "influenza",
            image: "/images/influenza.jfif",
            description:
              "Flu symptoms typically appear 1–4 days after infection and can include:Fever and chills,Cough and sore throat,Runny or stuffy nose,Body aches and fatigue,Headaches, Occasionally vomiting and diarrhea, more common in children. Symptoms usually develop suddenly and are more severe than a common cold, which tends to start gradually",
            category: "Respiratory Disease",
            tags: ["Symptoms", "Prevention", "Treatment"],
            updated: "Recently",
            severity: "Moderate",
            color: "blue",
            symptoms: ["Fever", "Cough", "Body aches"],
            prevention: ["Flu vaccine", "Hygiene"],
            treatment: "Rest and antiviral medications.",
          },
        ],
      },
    ],
  },

  {
    id: 2,
    type: "Non-Infectious Diseases",
    color: "blue",

    groups: [
      {
        id: 1,
        pathogen: "Cardiovascular Diseases",
        diseases: [
          {
            id: 8,
            name: "Hypertension",
            slug: "hypertension",
            image: "/images/hypertension.jpg",
            description:
              "Hypertension occurs when the force of blood against the artery walls is persistently too high. Blood pressure is measured with two numbers: systolic (pressure when the heart beats) and diastolic (pressure when the heart rests between beats). For most adults, hypertension is diagnosed if readings are consistently 130/80 mmHg or higher, with some guidelines using 140/90 mmHg as a threshold. Diagnosis typically requires measurements on two or more separate occasions.Primary (essential) hypertension: Accounts for 90–95% of cases and develops due to a combination of genetic and lifestyle factors such as high salt intake, obesity, physical inactivity, smoking, and alcohol use. Secondary hypertension: Caused by an identifiable condition, including kidney disease, endocrine disorders, narrowing of kidney arteries, or certain medications. ",
            category: "Cardiovascular",
            tags: ["Lifestyle", "Monitoring", "Treatment"],
            updated: "Today",
            severity: "Moderate",
            color: "blue",
            symptoms: ["Headache", "Dizziness", "Often none"],
            prevention: ["Low salt diet", "Exercise"],
            treatment: "Lifestyle change and antihypertensives.",
          },

          {
            id: 9,
            name: "Heart Failure",
            slug: "heart-failure",
            image: "/images/heartfailure.jpg",
            description:
              "Heart failure occurs when the heart muscle is unable to pump blood efficiently or relax properly, reducing blood flow to meet the body’s needs. This can cause fluid accumulation in the lungs, legs, and other tissues, leading to symptoms such as shortness of breath, swelling, fatigue, and dizziness. It does not mean the heart stops working entirely, but that it is weakened or stiffened, impairing its normal function.Cardiomyopathy is a disease of the heart muscle, while heart failure is a condition where the heart cannot pump blood effectively; cardiomyopathy can lead to heart failure, but not all cases do.",
            category: "Cardiovascular",
            tags: ["Symptoms", "Treatment"],
            updated: "Recently",
            severity: "High",
            color: "red",
            symptoms: ["Breathlessness", "Fatigue"],
            prevention: ["Healthy lifestyle"],
            treatment: "Medications and lifestyle management.",
          },
        ],
      },

      {
        id: 2,
        pathogen: "Endocrine Disorders",
        diseases: [
          {
            id: 10,
            name: "Diabetes Mellitus",
            slug: "diabetes",
            image: "/images/diabetes.jpg",
            description:
              "Diabetes mellitus is a group of metabolic disorders characterized by high blood glucose (hyperglycemia) due to insufficient insulin production or impaired insulin action. Insulin, a hormone produced by the pancreas, helps cells absorb glucose for energy. When insulin is lacking or ineffective, glucose accumulates in the blood, causing various health issues. Types of Diabetes: Type 1 Diabetes: An autoimmune condition where the immune system attacks insulin-producing beta cells in the pancreas. It often develops in children or young adults and requires daily insulin therapy. Type 2 Diabetes: The most common form, characterized by insulin resistance and/or insufficient insulin production. It usually develops in adults but is increasingly seen in younger populations. Gestational Diabetes: Occurs during pregnancy and usually resolves after childbirth, though it increases the risk of developing type 2 diabetes later. Prediabetes: Blood sugar levels are higher than normal but not high enough for a diabetes diagnosis. Without intervention, it can progress to type 2 diabetes",
            category: "Endocrine Disorder",
            tags: ["Insulin", "Diet", "Monitoring"],
            updated: "Today",
            severity: "High",
            color: "purple",
            symptoms: ["Thirst", "Frequent urination"],
            prevention: ["Healthy diet"],
            treatment: "Insulin or oral drugs.",
          },

          {
            id: 11,
            name: "Thyroid Disorders",
            slug: "thyroid-disorders",
            image: "/images/thyroid disease.jpg",
            description:
              "The thyroid is a small, butterfly-shaped gland located at the front of the neck, just below the Adam's apple. It produces hormones—thyroxine (T4) and triiodothyronine (T3)—that regulate metabolism, heart rate, body temperature, and energy use. The gland also produces calcitonin, which helps regulate calcium in bones. Thyroid function is controlled by the pituitary gland through thyroid-stimulating hormone (TSH), creating a feedback loop to maintain hormone balance. Hypothyroidism (Underactive Thyroid): The thyroid produces insufficient hormones, slowing metabolism. Common causes include Hashimoto’s thyroiditis (autoimmune destruction of thyroid cells), iodine deficiency, congenital hypothyroidism, and certain medications. Symptoms include fatigue, weight gain, cold intolerance, dry skin, hair thinning, constipation, depression, and slow heart rate. Hyperthyroidism (Overactive Thyroid): Excess thyroid hormone accelerates metabolism. Causes include Graves’ disease (autoimmune stimulation), toxic thyroid nodules, excessive iodine intake, and thyroiditis. Symptoms include weight loss, rapid heartbeat, anxiety, heat intolerance, sweating, tremors, and irregular menstrual cycles. Goiter: Enlargement of the thyroid, which may occur in hypothyroidism, hyperthyroidism, or normal thyroid function. Causes include iodine deficiency, autoimmune disease, and nodules. Large goiters can cause difficulty swallowing or breathing. Thyroid Nodules: Lumps in the thyroid that may be benign or malignant. Some nodules produce excess hormones, causing hyperthyroidism, while others may be nonfunctional or cancerous. Diagnosis often involves ultrasound, TSH testing, and fine-needle aspiration biopsy. Thyroid Cancer: Includes papillary, follicular, medullary, and anaplastic types. Risk factors include radiation exposure and family history. Most thyroid cancers are treatable, often with surgery and radioactive iodine therapy. Autoimmune Thyroid Disorders: Hashimoto’s Thyroiditis: Leads to hypothyroidism due to immune-mediated destruction of thyroid tissue. Common in middle-aged women and may cause goiter, fatigue, and cold intolerance. Graves’ Disease: Causes hyperthyroidism through autoantibodies stimulating the thyroid. Symptoms may include bulging eyes (exophthalmos) and skin changes. Postpartum Thyroiditis: Temporary thyroid inflammation after childbirth, causing initial hyperthyroidism followed by hypothyroidism, usually resolving within 12–18 months.",
            category: "Endocrine Disorder",
            tags: ["Hormones", "Metabolism"],
            updated: "Recently",
            severity: "Moderate",
            color: "yellow",
            symptoms: ["Weight changes", "Fatigue"],
            prevention: ["Iodine balance"],
            treatment: "Hormone therapy.",
          },
        ],
      },

      {
        id: 3,
        pathogen: "Respiratory Diseases",
        diseases: [
          {
            id: 12,
            name: "Asthma",
            slug: "asthma",
            image: "/images/asthma.jpg",
            description:
              "Asthma is a common long-term inflammatory disease of the airways in the lungs. It occurs when allergens or irritants are inhaled, causing the airways to constrict and produce mucus, which restricts airflow. Symptoms include frequent coughing, wheezing, shortness of breath, and chest tightness.Asthma can be classified into different types based on severity: intermittent (symptoms come and go) and persistent (symptoms occur frequently). Early diagnosis and treatment are crucial to prevent long-term lung damage and manage symptoms effectively. Managing asthma involves avoiding triggers, taking medications consistently, and monitoring symptoms. ",
            category: "Chronic Disease",
            tags: ["Triggers", "Management"],
            updated: "Today",
            severity: "Moderate",
            color: "green",
            symptoms: ["Wheezing", "Coughing"],
            prevention: ["Avoid triggers"],
            treatment: "Inhalers and steroids.",
          },

          {
            id: 13,
            name: "Pneumonia",
            slug: "pneumonia",
            image: "/images/pneumonia.jpg",
            description:
              "Pneumonia is an infection in the lungs caused by bacteria, viruses, or fungi, leading to inflammation and fluid or pus in the lung tissue. Common symptoms include cough, fever, chills, and difficulty breathing. Bacterial pneumonia is usually more severe than viral pneumonia, which often resolves on its own. Treatment may involve antibiotics for bacterial pneumonia, rest, and fluids. For specific types, symptoms can vary; for example, pneumonia caused by Streptococcus pneumoniae may present with rusty-colored sputum.",
            category: "Respiratory Disease",
            tags: ["Infection", "Treatment"],
            updated: "Recently",
            severity: "High",
            color: "orange",
            symptoms: ["Cough", "Fever"],
            prevention: ["Vaccination"],
            treatment: "Antibiotics or antivirals.",
          },
        ],
      },

      {
        id: 4,
        pathogen: "Neurological & Others",
        diseases: [
          {
            id: 14,
            name: "Stroke",
            slug: "stroke",
            image: "/images/stroke.jpg",
            description:
              "A stroke is a medical emergency that occurs when the blood supply to the brain is interrupted or reduced, preventing brain tissue from getting enough oxygen and nutrients. There are two main types of strokes: ischemic, caused by a blocked blood vessel, and hemorrhagic, caused by bleeding in the brain. Common symptoms include sudden numbness or weakness, confusion, trouble speaking, and difficulty walking. Immediate treatment is crucial to minimize brain damage and improve outcomes. Risk factors include high blood pressure, diabetes, smoking, and high cholesterol. For more detailed information, consult trusted medical sources like the Mayo Clinic or the CDC. ",
            category: "Neurological",
            tags: ["Emergency"],
            updated: "Today",
            severity: "Critical",
            color: "red",
            symptoms: ["Weakness", "Speech difficulty"],
            prevention: ["Control BP"],
            treatment: "Emergency medical care.",
          },

          {
            id: 15,
            name: "B Cell Acute Lymphoblastic Leukemia",
            slug: "b-cell-acute-lymphoblastic-leukemia",
            image: "/images/leukemia.jpg",
            description:
              "B-cell acute lymphoblastic leukemia (B-ALL) is a fast-growing blood and bone marrow cancer caused by the uncontrolled proliferation of immature B-cell lymphoblasts.B-ALL is the most common subtype of acute lymphoblastic leukemia (ALL), accounting for about 75–85% of cases in both children and adults. It arises when immature B cells in the bone marrow fail to mature properly, crowding out normal blood cells and impairing the immune system. The disease can progress rapidly, spreading to the bloodstream and other organs, including lymph nodes, liver, spleen, brain, spinal cord, and testicles.",
            category: "Chronic Disease",
            tags: ["Cells", "Growth"],
            updated: "Recently",
            severity: "Critical",
            color: "red",
            symptoms: ["Weight loss", "Fatigue"],
            prevention: ["Avoid carcinogens"],
            treatment: "Chemotherapy, radiation, surgery.",
          },
          {
  id: 16,
  name: "Cardiomyopathy",
  slug: "cardiomyopathy",
  image: "/images/cardiopathy.jpg",
  description:
    "Cardiomyopathy is a disease of the heart muscle that makes it harder for the heart to pump blood to the rest of the body. It can lead to symptoms such as shortness of breath, chest pain, and fatigue. There are several types of cardiomyopathy, including dilated, hypertrophic, and restrictive cardiomyopathy, each with different causes and treatment options. Common causes include genetic factors, high blood pressure, and heart valve disease. Treatment may involve medications, lifestyle changes, or surgical interventions depending on the severity and type of cardiomyopathy. ",
  category: "Cardiovascular Disease",
  tags: ["Heart muscle", "Cardiac function", "Treatment"],
  updated: "Recently",
  severity: "High",
  color: "red",
  symptoms: ["Shortness of breath", "Fatigue", "Swollen legs", "Chest discomfort"],
  prevention: [
    "Control blood pressure",
    "Limit alcohol intake",
    "Healthy diet",
    "Regular exercise"
  ],
  treatment: "Medications, lifestyle changes, and in severe cases devices or heart transplant."
},
{
  id: 16,
  name: "Adenopathy",
  slug: "adenopathy",
  image: "/images/adenopathy.jfif",
  description:
    "Adenopathy is the medical term for enlarged lymph nodes, which are small, bean-shaped glands that play a key role in the immune system by filtering harmful substances and fighting infections. Lymphadenopathy is often used interchangeably with adenopathy and can be localized (affecting one region) or generalized (affecting multiple regions such as the neck, armpits, groin, or abdomen). ",
  category: "Lymphatic System Disorder",
  tags: ["Lymph nodes", "Swelling", "Diagnosis"],
  updated: "Recently",
  severity: "Variable",
  color: "yellow",
  symptoms: ["Swollen lymph nodes", "Tenderness", "Fever (if infectious cause)"],
  prevention: [
    "Treat underlying infections early",
    "Good hygiene",
    "Regular medical checkups"
  ],
  treatment: "Depends on cause: antibiotics for infection, anti-inflammatory drugs, or further evaluation for malignancy."
},
{
  id: 17,
  name: "Atelectasis",
  slug: "atelectasis",
  image: "/images/atelectasis.jpg",
  description:
    "Atelectasis is the collapse of part or all of a lung, caused by the alveoli failing to inflate properly, which can reduce oxygen delivery to the body. Atelectasis occurs when the tiny air sacs in the lungs, called alveoli, do not fill with air as they should, leading to partial or complete lung collapse. This can happen in a small area of the lung or affect an entire lobe, and it may impair oxygen exchange, potentially causing shortness of breath or low blood oxygen levels. ",
  category: "Respiratory Disorder",
  tags: ["Lung collapse", "Respiratory", "Breathing difficulty"],
  updated: "Recently",
  severity: "Moderate to Severe",
  color: "orange",
  symptoms: [
    "Shortness of breath",
    "Rapid breathing",
    "Chest pain",
    "Cough",
    "Low oxygen levels"
  ],
  prevention: [
    "Deep breathing exercises after surgery",
    "Early mobilization",
    "Smoking cessation",
    "Proper airway clearance"
  ],
  treatment:
    "Treatment may include breathing exercises, chest physiotherapy, bronchodilators, oxygen therapy, removal of airway obstruction, and treatment of the underlying cause."
},
{
  id: 18,
  name: "Hyponatremia",
  slug: "hyponatremia",
  image: "/images/hyponatremia.jpg",
  description:
    "Hyponatremia is an electrolyte imbalance characterized by abnormally low sodium levels in the blood. Sodium is essential for maintaining fluid balance, nerve function, and muscle activity. Hyponatremia may occur due to excessive fluid intake, kidney disease, heart failure, severe vomiting or diarrhea, hormonal disorders, or certain medications.Hyponatremia is a condition characterized by abnormally low sodium levels in the blood, classified under ICD-10 code E87.1.Hyponatremia occurs when the sodium concentration in the blood falls below 135 milliequivalents per liter (mEq/L), leading to an imbalance of water and electrolytes in the body. This can cause water to move into tissues, potentially affecting organ function, particularly in the brain. ICD-10 code E87.1 is used to document hypo-osmolality and hyponatremia for medical and billing purposes.",
  category: "Electrolyte Disorder",
  tags: ["Low sodium", "Electrolyte imbalance", "Fluid imbalance"],
  updated: "Recently",
  severity: "Mild to Severe",
  color: "blue",
  symptoms: [
    "Headache",
    "Nausea and vomiting",
    "Muscle cramps",
    "Confusion",
    "Fatigue",
    "Seizures in severe cases"
  ],
  prevention: [
    "Maintain proper fluid balance",
    "Monitor sodium levels in at-risk patients",
    "Avoid excessive water intake",
    "Manage underlying medical conditions"
  ],
  treatment:
    "Treatment depends on the severity and cause and may include fluid restriction, sodium replacement, intravenous saline, medication adjustments, and treatment of underlying conditions."
}
        ],
      },
    ],
  },
];

export default trendingDiseases;