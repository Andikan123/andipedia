import homeCourses from "../data/homeData";
import CourseBubble from "../components/CourseBubble";
import SearchBar from "../components/SearchBar";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import trendingDiseases from "../data/trendingDiseases";
import Navbar from "../components/Navbar";

export default function Home() {
  const isMobile = window.innerWidth < 640;

  const radius = isMobile ? 135 : 260;
  const navigate = useNavigate();

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
    },
  ];

  const healthNews = [
    {
      title: "New rise in respiratory infections reported",
      description:
        "Experts encourage early diagnosis and proper hygiene practices.",
      image: "/images/respiratory.jpg",
    },
    {
      title: "Public health experts warn about poor nutrition",
      description:
        "Balanced diet and hydration remain essential for disease prevention.",
      image: "/images/nutritionnews.jpg",
    },
  ];
  const allDiseases = trendingDiseases;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setCurrentSlide((prev) =>
          prev === allDiseases.length - 1 ? 0 : prev + 1,
        );

        setFade(true);
      }, 500);
    }, 8000);

    return () => clearInterval(interval);
  }, [allDiseases.length]);
  const disease = allDiseases[currentSlide];

  return (
    <div className="relative min-h-screen overflow-x-hidden pt-16">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_35%)]"></div>
      <Navbar />
      {/* GRID TEXTURE */}
      <div
        className="absolute inset-0 opacity-[0.03]
        bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
        bg-size-[40px_40px] "
      ></div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 flex flex-col items-center">
        {/* HEADER */}
       <section
  className="relative w-full min-h-[90vh] bg-cover bg-[center_top] sm:bg-center overflow-hidden"
  style={{
    backgroundImage: "url('/images/blacknursehero.png')",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60" />

  {/* Content */}
  <div className="relative z-10 flex items-center min-h-[90vh]">
    <div className="max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-16">

      <div className="text-white max-w-2xl">

        <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-blue-400">
          Nurseridge Platform • NCLEX Preparation
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-4 leading-tight">
          Master Nursing
          <br />
          <span className="text-blue-500">
            Pass NCLEX with Confidence
          </span>
        </h1>

        <p className="text-gray-300 mt-5 text-base sm:text-lg md:text-xl leading-relaxed">
          Structured clinical education, NCLEX-style practice questions,
          and simplified medical learning designed for future nurses who want to succeed globally.
        </p>

      </div>

    </div>
  </div>
</section>

        {/* HERO SECTION */}
        <section className="relative w-full max-w-7xl mt-20 px-4">

  {/* HEADER */}
  <div className="text-center mb-16">

    <p className="uppercase tracking-[0.35em] text-sm text-blue-600 font-semibold">
      Nurseridge Dream
    </p>

    <h2 className="text-4xl sm:text-6xl font-bold mt-5 leading-tight">
      Building Future
      <span className="text-blue-600"> Global Nurses</span>
    </h2>

    <p className="text-gray-600 text-lg leading-relaxed mt-5 max-w-3xl mx-auto">
      Nurseridge is not just a learning platform — it is a vision.
      We are preparing nurses for NCLEX success, clinical excellence,
      and global healthcare impact.
    </p>

  </div>

  {/* MAIN GRID */}
  <div className="grid lg:grid-cols-3 gap-8">

    {/* CARD 1 - NCLEX MASTERY */}
    <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 p-8 text-white shadow-2xl hover:-translate-y-2 transition-all duration-500">

      <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>

      <div className="relative z-10">

        <div className="w-18 h-18 rounded-3xl bg-white/10 border border-white/10 backdrop-blur-xl flex items-center justify-center text-4xl">
          📘
        </div>

        <p className="mt-8 uppercase tracking-[0.25em] text-sm text-blue-300 font-semibold">
          NCLEX Preparation
        </p>

        <h3 className="text-4xl font-bold mt-4 leading-tight">
          NCLEX Mastery Path
        </h3>

        <p className="text-blue-100/80 mt-5 leading-relaxed">
          Step-by-step preparation with NCLEX-style questions,
          clinical reasoning, and exam-focused learning.
        </p>

        <button
          className="mt-10 w-full bg-white hover:bg-blue-100 text-slate-900 font-semibold py-4 rounded-2xl transition"
          onClick={() => navigate("/nclex")}
        >
          Start NCLEX Prep →
        </button>

      </div>
    </div>

    {/* CARD 2 - CLINICAL EXCELLENCE */}
    <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-8 text-white shadow-2xl hover:-translate-y-2 transition-all duration-500">

      <div className="absolute -top-20 -right-20 w-72 h-72 bg-slate-400/10 rounded-full blur-3xl"></div>

      <div className="relative z-10">

        <div className="w-18 h-18 rounded-3xl bg-white/10 border border-white/10 backdrop-blur-xl flex items-center justify-center text-4xl">
          🩺
        </div>

        <p className="mt-8 uppercase tracking-[0.25em] text-sm text-blue-300 font-semibold">
          Clinical Skills
        </p>

        <h3 className="text-4xl font-bold mt-4 leading-tight">
          Clinical Excellence
        </h3>

        <p className="text-blue-100/80 mt-5 leading-relaxed">
          Learn real-world nursing practice, procedures,
          and bedside decision-making skills.
        </p>

        <button
          className="mt-10 w-full bg-white hover:bg-blue-100 text-slate-900 font-semibold py-4 rounded-2xl transition"
          onClick={() => navigate("/clinical")}
        >
          Explore Clinicals →
        </button>

      </div>
    </div>

    {/* CARD 3 - GLOBAL PATHWAY */}
    <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-900 via-slate-900 to-indigo-950 p-8 text-white shadow-2xl hover:-translate-y-2 transition-all duration-500">

      <div className="absolute -top-20 -right-20 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl"></div>

      <div className="relative z-10">

        <div className="w-18 h-18 rounded-3xl bg-white/10 border border-white/10 backdrop-blur-xl flex items-center justify-center text-4xl">
          🌍
        </div>

        <p className="mt-8 uppercase tracking-[0.25em] text-sm text-blue-300 font-semibold">
          Global Nursing
        </p>

        <h3 className="text-4xl font-bold mt-4 leading-tight">
          International Pathway
        </h3>

        <p className="text-blue-100/80 mt-5 leading-relaxed">
          Prepare for global nursing careers with NCLEX,
          licensing guidance, and international standards.
        </p>

        <button
          className="mt-10 w-full bg-white hover:bg-blue-100 text-slate-900 font-semibold py-4 rounded-2xl transition"
          onClick={() => navigate("/global")}
        >
          Go Global →
        </button>

      </div>
    </div>

  </div>

</section>
        {/* STATS */}
      <section className="w-full max-w-6xl px-4 mt-20">

  {/* TRUST HEADER */}
  <div className="text-center mb-10">
    <p className="uppercase tracking-[0.35em] text-sm text-blue-600 font-semibold">
      Trusted NCLEX Preparation Platform
    </p>

    <h2 className="text-3xl sm:text-5xl font-bold mt-4">
      Everything You Need to
      <span className="text-blue-600"> Pass NCLEX</span>
    </h2>

    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
      Structured learning, exam practice, and clinical mastery —
      designed for nursing students preparing for global licensure.
    </p>
  </div>

  {/* STATS GRID */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

    {[
      {
        number: "1000+",
        label: "NCLEX Practice Questions",
      },
      {
        number: "95%",
        label: "Exam-Focused Content",
      },
      {
        number: "24/7",
        label: "Learning Access",
      },
      {
        number: "Global",
        label: "NCLEX Preparation Standard",
      },
    ].map((item, index) => (
      <div
        key={index}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 p-8 text-center text-white shadow-2xl hover:-translate-y-1 transition"
      >

        {/* glow */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl"></div>

        <div className="relative z-10">

          <h2 className="text-3xl sm:text-4xl font-bold text-blue-300">
            {item.number}
          </h2>

          <p className="text-blue-100/80 mt-3 text-sm sm:text-base">
            {item.label}
          </p>

        </div>

      </div>
    ))}

  </div>

  {/* PREMIUM CTA */}
  <div className="text-center mt-14">

    <p className="text-gray-600 mb-5">
      Start preparing like top-performing nursing students worldwide
    </p>

    <button
      className="px-10 py-4 rounded-2xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition shadow-lg"
      onClick={() => navigate("/pricing")}
    >
      Get Full Access →
    </button>

  </div>

</section>

        {/* TRENDING DISEASES */}
       
        {/* FUN FACT */}
        {/* FUN MEDICAL FACT */}

        {/* DISEASE NEWS */}
        {/* DISEASE NEWS */}
        <section className="w-full max-w-7xl px-4 mt-32">

  {/* HEADER */}
  <div className="text-center mb-14">

    <p className="uppercase tracking-[0.35em] text-sm text-blue-600 font-semibold">
      NCLEX Practice Zone
    </p>

    <h2 className="text-4xl sm:text-5xl font-bold mt-5 leading-tight">
      Test Your
      <span className="text-blue-600"> Clinical Thinking</span>
    </h2>

    <p className="text-gray-600 text-lg mt-5 max-w-3xl mx-auto">
      Practice NCLEX-style questions, clinical scenarios, and exam simulations
      designed to prepare you for real nursing licensure exams.
    </p>

  </div>

  {/* GRID */}
  <div className="grid lg:grid-cols-2 gap-10">

    {[
      {
        title: "Prioritization Questions",
        desc: "Learn how to decide which patient needs urgent care first.",
        tag: "High Yield",
        locked: true,
      },
      {
        title: "Medication Safety Scenarios",
        desc: "NCLEX-focused drug administration and dosage reasoning.",
        tag: "Pharmacology",
        locked: true,
      },
      {
        title: "Fundamentals Case Studies",
        desc: "Basic nursing principles and clinical decision making.",
        tag: "Core Nursing",
        locked: false,
      },
      {
        title: "Emergency Situations",
        desc: "Critical thinking in ICU and emergency room scenarios.",
        tag: "Critical Care",
        locked: true,
      },
    ].map((item, i) => (
      <div
        key={i}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 p-8 text-white shadow-2xl hover:-translate-y-2 transition"
      >

        {/* glow */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl"></div>

        <div className="relative z-10">

          <div className="flex justify-between items-center">
            <span className="text-xs uppercase tracking-[0.25em] text-blue-300">
              {item.tag}
            </span>

            {item.locked && (
              <span className="text-xs bg-white/10 px-3 py-1 rounded-full">
                🔒 Premium
              </span>
            )}
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold mt-4">
            {item.title}
          </h3>

          <p className="text-blue-100/80 mt-4 leading-relaxed">
            {item.desc}
          </p>

          <button
            className="mt-8 w-full bg-white text-slate-900 font-semibold py-3 rounded-2xl hover:bg-blue-100 transition"
            onClick={() => navigate("/nclex-practice")}
          >
            Start Practice →
          </button>

        </div>
      </div>
    ))}

  </div>

</section>

        {/* DAILY HEALTH TIP */}
        {/* DAILY HEALTH TIP */}

        {/* FOOTER */}
        <footer className="w-full mt-24 border-t border-gray-200 py-10 text-center px-4">
          <h2 className="text-2xl font-serif font-bold">Andipedia</h2>

          <p className="text-gray-600 mt-2">
            Free medical knowledge for everyone.
          </p>

          <div className="flex justify-center gap-6 mt-6 text-sm text-gray-500">
            <button className="hover:text-blue-600 transition">Diseases</button>

            <button className="hover:text-blue-600 transition">
              First Aid
            </button>

            <button className="hover:text-blue-600 transition">
              Public Health
            </button>

            <button className="hover:text-blue-600 transition">Research</button>
          </div>
        </footer>
      </div>
    </div>
  );
}
