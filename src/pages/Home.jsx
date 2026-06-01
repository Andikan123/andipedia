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
        prev === allDiseases.length - 1 ? 0 : prev + 1
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
<Navbar/>
      {/* GRID TEXTURE */}
      <div
        className="absolute inset-0 opacity-[0.03]
        bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
        bg-size-[40px_40px] "
      ></div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 flex flex-col items-center">
        {/* HEADER */}
        <section className="text-center mt-10 px-4">
          <h1 className="text-5xl font-serif font-bold tracking-tight">
           Nurseridge
          </h1>

          <p className="text-gray-600 mt-3 text-lg">
            Learn Nursing. Practice Nursing.
          </p>

          
        </section>

        
        {/* HERO SECTION */}
        {/* MEDICAL FACULTIES SECTION */}
<section className="relative w-full max-w-7xl mt-20 px-4">

  {/* HEADER */}
  <div className="text-center mb-16">

    <p className="
      uppercase
      tracking-[0.35em]
      text-sm
      text-blue-600
      font-semibold
    ">
      Explore Faculties
    </p>

    <h2 className="
      text-4xl sm:text-6xl
      font-bold
      mt-5
      leading-tight
    ">
      Learn Across
      <span className="text-blue-600">
        {" "}Healthcare Fields
      </span>
    </h2>

    <p className="
      text-gray-600
      text-lg
      leading-relaxed
      mt-5
      max-w-3xl
      mx-auto
    ">
      Explore structured learning communities for
      Nursing, Medicine and Dentistry with organized
      topics, clinical subjects and educational resources.
    </p>

  </div>

  {/* MAIN GRID */}
  <div className="grid lg:grid-cols-3 gap-8">

    {/* NURSING */}
    <div className="
      group
      relative
      overflow-hidden
      rounded-4xl
      bg-linear-to-br
      from-blue-950
      via-slate-900
      to-blue-900
      p-8
      text-white
      shadow-2xl
      hover:-translate-y-2
      transition-all duration-500
    ">

      {/* GLOW */}
      <div className="
        absolute
        -top-20
        -right-20
        w-72 h-72
        bg-blue-400/20
        rounded-full
        blur-3xl
      "></div>

      <div className="relative z-10">

        <div className="
          w-18 h-18
          rounded-3xl
          bg-white/10
          border border-white/10
          backdrop-blur-xl
          flex items-center justify-center
          text-4xl
        ">
          🩺
        </div>

        <p className="
          mt-8
          uppercase
          tracking-[0.25em]
          text-sm
          text-blue-300
          font-semibold
        ">
          Nursing
        </p>

        <h3 className="
          text-4xl
          font-bold
          mt-4
          leading-tight
        ">
          Nursing Sections
        </h3>

        <p className="
          text-blue-100/80
          mt-5
          leading-relaxed
        ">
          Explore nursing education grouped into
          sections, clinical learning areas and
          practical healthcare disciplines.
        </p>

        {/* SECTIONS */}
        <div className="grid grid-cols-2 gap-3 mt-8">

          {[
            "Section 1",
            "Section 2",
            "Section 3",
            "Section 4",
          ].map((item, index) => (
            <div
              key={index}
              className="
                bg-white/10
                border border-white/10
                backdrop-blur-md
                rounded-2xl
                px-4 py-4
                text-sm
                font-medium
                hover:bg-white/20
                transition
                cursor-pointer
              "
              onClick={() => navigate(`/nursing/${item.toLowerCase().replace(/\s/g, "-")}`)}
            >
              {item}
            </div>
          ))}

        </div>

        <button
          className="
            mt-10
            w-full
            bg-white
            hover:bg-blue-100
            text-slate-900
            font-semibold
            py-4
            rounded-2xl
            transition
          "
          onClick={() => navigate("/nursing")}
        >
          Explore Nursing →
        </button>

      </div>

    </div>

   

    {/* DENTISTRY */}
    

  </div>

</section>

        {/* STATS */}
        <section className="w-full max-w-6xl px-4 mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                number: "120+",
                label: "Diseases",
              },
              {
                number: "40+",
                label: "Medical Topics",
              },
              {
                number: "200+",
                label: "Articles",
              },
              {
                number: "Daily",
                label: "Health Updates",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-md p-8 text-center hover:-translate-y-1 transition"
              >
                <h2 className="text-4xl font-bold text-blue-600">
                  {item.number}
                </h2>

                <p className="text-gray-600 mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TRENDING DISEASES */}
      {/* DISEASE GRID */}
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

  {/* FIRST 6 DISEASES */}
  {trendingDiseases.slice(0, 6).map((disease) => (

    <div
      key={disease.id}
      onClick={() => navigate(`/disease/${disease.slug}`)}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        bg-white
        border border-gray-100
        shadow-sm
        hover:shadow-2xl
        transition-all duration-500
        hover:-translate-y-2
        cursor-pointer
      "
    >

      {/* IMAGE */}
      <div className="relative overflow-hidden h-64">

        <img
          src={disease.image}
          alt={disease.name}
          className="
            w-full
            h-full
            object-cover
            transition duration-700
            group-hover:scale-110
          "
        />

        {/* OVERLAY */}
        <div
          className="
            absolute inset-0
            bg-linear-to-t
            from-black/80
            via-black/20
            to-transparent
          "
        ></div>

        {/* BADGE */}
        <div
          className="
            absolute top-5 left-5
            bg-red-500/90
            backdrop-blur-md
            text-white
            text-xs
            font-semibold
            px-4 py-2
            rounded-full
            shadow-lg
          "
        >
          🔥 Trending
        </div>

        {/* TITLE */}
        <div className="absolute bottom-5 left-5 right-5">

          <h3
            className="
              text-white
              text-3xl
              font-bold
              leading-tight
            "
          >
            {disease.name}
          </h3>

        </div>

      </div>

      {/* CONTENT */}
      <div className="p-7">

        {/* TAGS */}
        <div className="flex gap-2 flex-wrap mb-5">

          {disease.tags.map((tag, index) => (
            <div
              key={index}
              className="
                bg-blue-50
                text-blue-700
                text-xs
                font-medium
                px-3 py-2
                rounded-full
              "
            >
              {tag}
            </div>
          ))}

        </div>

        {/* DESCRIPTION */}
        <p
          className="
            text-gray-600
            leading-relaxed
            text-[15px]
          "
        >
          {disease.description}
        </p>

        {/* FOOTER */}
        <div
          className="
            flex items-center justify-between
            mt-8
            pt-6
            border-t border-gray-100
          "
        >

          <div className="flex items-center gap-2">

            <div
              className="
                w-2 h-2
                bg-green-500
                rounded-full
                animate-pulse
              "
            ></div>

            <p className="text-sm text-gray-500">
              {disease.updated}
            </p>

          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/disease/${disease.slug}`);
            }}
            className="
              flex items-center gap-2
              text-slate-900
              font-semibold
              group-hover:gap-4
              transition-all
            "
          >
            Explore
            <span>→</span>
          </button>

        </div>

      </div>

    </div>

  ))}

  {/* MORE CARD */}
  <div
    onClick={() => navigate("/diseases")}
    className="
      group
      cursor-pointer
      rounded-3xl
      border-2 border-dashed border-gray-300
      bg-white/60
      backdrop-blur-sm
      flex flex-col
      items-center
      justify-center
      min-h-112.5
      hover:border-blue-500
      hover:bg-blue-50
      transition-all duration-500
    "
  >

    <div className="
      text-7xl
      font-bold
      text-gray-400
      group-hover:text-blue-600
      transition
    ">
      ...
    </div>

    <h3 className="
      mt-6
      text-2xl
      font-bold
      text-gray-800
    ">
      Explore All Diseases
    </h3>

    <p className="
      text-gray-500
      mt-3
      text-center
      max-w-xs
      leading-relaxed
    ">
      Browse the complete medical encyclopedia
      including symptoms, prevention and treatment.
    </p>

    <button className="
      mt-8
      bg-slate-900
      text-white
      px-6 py-3
      rounded-2xl
      hover:bg-blue-600
      transition
    ">
      View All →
    </button>

  </div>

</div>
        {/* FUN FACT */}
        {/* FUN MEDICAL FACT */}


        {/* DISEASE NEWS */}
        {/* DISEASE NEWS */}
<section className="w-full max-w-7xl px-4 mt-32">

  {/* HEADER */}
  <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">

    <div>

      <div className="
        inline-flex items-center gap-2
        bg-red-50
        border border-red-100
        px-4 py-2
        rounded-full
      ">

        <div className="
          w-2 h-2
          bg-red-500
          rounded-full
          animate-pulse
        "></div>

        <p className="
          text-red-600
          uppercase
          tracking-[0.2em]
          text-xs
          font-semibold
        ">
          Live Medical Updates
        </p>

      </div>

      <h2 className="
        text-4xl sm:text-5xl
        font-bold
        mt-5
        leading-tight
      ">
        Disease News & Health Alerts
      </h2>

      <p className="
        text-gray-600
        text-lg
        leading-relaxed
        mt-5
        max-w-3xl
      ">
        Stay informed with the latest disease outbreaks,
        medical discoveries, public health updates,
        prevention strategies and global healthcare news.
      </p>

    </div>

    <button className="
      self-start lg:self-auto
      bg-slate-900
      hover:bg-slate-800
      text-white
      px-6 py-3
      rounded-2xl
      shadow-lg
      transition
    ">
      View All News
    </button>

  </div>

  {/* NEWS GRID */}
  <div className="grid lg:grid-cols-2 gap-10">

    {healthNews.map((news, index) => (

      <article
        key={index}
        className="
          group
          relative
          overflow-hidden
          rounded-4xl
          bg-white
          border border-gray-100
          shadow-sm
          hover:shadow-2xl
          transition-all duration-500
          hover:-translate-y-2
        "
      >

        {/* IMAGE */}
        <div className="relative overflow-hidden h-85">

          <img
            src={news.image}
            alt={news.title}
            className="
              w-full
              h-full
              object-cover
              transition duration-700
              group-hover:scale-110
            "
          />

          {/* OVERLAY */}
          <div className="
            absolute inset-0
            bg-linear-to-t
            from-black/90
            via-black/20
            to-transparent
          "></div>

          {/* TOP BADGES */}
          <div className="
            absolute
            top-5
            left-5
            right-5
            flex
            justify-between
            items-start
          ">

            <div className="
              bg-red-500/90
              backdrop-blur-md
              text-white
              px-4 py-2
              rounded-full
              text-xs
              font-semibold
              shadow-lg
            ">
              🚨 Health Alert
            </div>

            <div className="
              bg-black/40
              backdrop-blur-md
              text-white
              px-4 py-2
              rounded-full
              text-xs
            ">
              Updated Today
            </div>

          </div>

          {/* BOTTOM CONTENT */}
          <div className="
            absolute bottom-0 left-0 right-0
            p-7
          ">

            <h3 className="
              text-white
              text-3xl
              font-bold
              leading-tight
              max-w-xl
            ">
              {news.title}
            </h3>

          </div>

        </div>

        {/* CONTENT */}
        <div className="p-7">

          {/* TAGS */}
          <div className="flex flex-wrap gap-3 mb-5">

            <div className="
              bg-blue-50
              text-blue-700
              px-4 py-2
              rounded-full
              text-xs
              font-medium
            ">
              Public Health
            </div>

            <div className="
              bg-green-50
              text-green-700
              px-4 py-2
              rounded-full
              text-xs
              font-medium
            ">
              Prevention
            </div>

            <div className="
              bg-purple-50
              text-purple-700
              px-4 py-2
              rounded-full
              text-xs
              font-medium
            ">
              Research
            </div>

          </div>

          {/* DESCRIPTION */}
          <p className="
            text-gray-600
            leading-relaxed
            text-[15px]
          ">
            {news.description}
          </p>

          {/* FOOTER */}
          <div className="
            flex items-center justify-between
            mt-8
            pt-6
            border-t border-gray-100
          ">

            <div className="flex items-center gap-3">

              <div className="
                w-10 h-10
                rounded-full
                bg-slate-100
                flex items-center justify-center
                text-lg
              ">
                🩺
              </div>

              <div>

                <p className="
                  text-sm
                  font-semibold
                  text-slate-900
                ">
                  Medical Desk
                </p>

                <p className="
                  text-xs
                  text-gray-500
                ">
                  Verified Health Update
                </p>

              </div>

            </div>

            <button className="
              flex items-center gap-2
              font-semibold
              text-slate-900
              group-hover:gap-4
              transition-all
            ">
              Read Story
              <span>→</span>
            </button>

          </div>

        </div>

      </article>

    ))}

  </div>

</section>

        {/* DAILY HEALTH TIP */}
        {/* DAILY HEALTH TIP */}


        {/* FOOTER */}
        <footer className="w-full mt-24 border-t border-gray-200 py-10 text-center px-4">
          <h2 className="text-2xl font-serif font-bold">
            Andipedia
          </h2>

          <p className="text-gray-600 mt-2">
            Free medical knowledge for everyone.
          </p>

          <div className="flex justify-center gap-6 mt-6 text-sm text-gray-500">
            <button className="hover:text-blue-600 transition">
              Diseases
            </button>

            <button className="hover:text-blue-600 transition">
              First Aid
            </button>

            <button className="hover:text-blue-600 transition">
              Public Health
            </button>

            <button className="hover:text-blue-600 transition">
              Research
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}


