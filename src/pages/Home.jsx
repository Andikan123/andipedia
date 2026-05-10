
import homeCourses from "../data/homeData";
import CourseBubble from "../components/CourseBubble";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const isMobile = window.innerWidth < 640;

  const radius = isMobile ? 135 : 260;

 const trendingDiseases = [
  {
    id: 1,
    name: "Malaria",
    image: "/images/malaria.jpg",

    description:
      "A mosquito-borne disease causing fever, chills and fatigue, especially common in tropical regions.",

    category: "Infectious Disease",

    tags: [
      "Symptoms",
      "Prevention",
      "Treatment"
    ],

    updated: "Updated Today",

    severity: "High",

    color: "red",
  },

  {
    id: 2,
    name: "Tuberculosis",
    image: "/images/tuberculosis.jpg",

    description:
      "A serious bacterial infection mainly affecting the lungs and spread through the air.",

    category: "Respiratory Disease",

    tags: [
      "Diagnosis",
      "Prevention",
      "Medication"
    ],

    updated: "2 hours ago",

    severity: "Critical",

    color: "orange",
  },

  {
    id: 3,
    name: "Hypertension",
    image: "/images/hypertension.jpg",

    description:
      "A chronic condition where blood pressure remains consistently elevated over time.",

    category: "Cardiovascular",

    tags: [
      "Lifestyle",
      "Monitoring",
      "Treatment"
    ],

    updated: "Updated Today",

    severity: "Moderate",

    color: "blue",
  },

  {
    id: 4,
    name: "Diabetes",
    image: "/images/diabetes.jpg",

    description:
      "A metabolic disease that affects how the body regulates blood sugar levels.",

    category: "Endocrine Disorder",

    tags: [
      "Insulin",
      "Diet",
      "Monitoring"
    ],

    updated: "5 hours ago",

    severity: "High",

    color: "purple",
  },

  {
    id: 5,
    name: "Meningitis",
    image: "/images/meningitis.jpg",

    description:
      "Inflammation of the membranes surrounding the brain and spinal cord.",

    category: "Neurological",

    tags: [
      "Emergency",
      "Vaccination",
      "Treatment"
    ],

    updated: "1 day ago",

    severity: "Critical",

    color: "pink",
  },

  {
    id: 6,
    name: "Asthma",
    image: "/images/asthma.jpg",

    description:
      "A chronic respiratory condition causing airway inflammation and breathing difficulty.",

    category: "Chronic Disease",

    tags: [
      "Inhalers",
      "Triggers",
      "Management"
    ],

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

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#f6f4ef] text-gray-900">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_35%)]"></div>

      {/* GRID TEXTURE */}
      <div
        className="absolute inset-0 opacity-[0.03]
        bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
        bg-size-[40px_40px]"
      ></div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 flex flex-col items-center">
        {/* HEADER */}
        <section className="text-center mt-10 px-4">
          <h1 className="text-5xl font-serif font-bold tracking-tight">
            Andipedia
          </h1>

          <p className="text-gray-600 mt-3 text-lg">
            The Free Medical Encyclopedia
          </p>

          <div className="mt-6 w-full flex justify-center">
            <SearchBar />
          </div>
        </section>

        {/* TODAY IN MEDICINE */}
        <section className="w-full max-w-6xl mt-12 px-4">

  <div className="
    relative overflow-hidden
    rounded-4xl
    bg-linear-to-br from-slate-900 via-blue-950 to-slate-900
    text-white
    shadow-2xl
  ">

    {/* background glow */}
    <div className="absolute -top-20 -right-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>

    <div className="grid lg:grid-cols-2 gap-10 items-center p-8 sm:p-12">

      {/* LEFT CONTENT */}
      <div className="relative z-10">

        <div className="
          inline-flex items-center gap-2
          bg-white/10 backdrop-blur-md
          border border-white/10
          rounded-full
          px-4 py-2
        ">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>

          <p className="text-sm tracking-widest uppercase text-cyan-200">
            Today in Medicine
          </p>
        </div>

        <h2 className="
          text-4xl sm:text-5xl
          font-bold
          leading-tight
          mt-6
        ">
          Disease of the Day:
          <span className="text-cyan-300">
            {" "}Hypertension
          </span>
        </h2>

        <p className="
          text-slate-300
          mt-6
          text-lg
          leading-relaxed
          max-w-2xl
        ">
          Learn the causes, symptoms, complications,
          diagnosis, prevention and treatment of
          high blood pressure in a modern and
          interactive way.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-wrap gap-4 mt-8">

          <button className="
            bg-cyan-400
            hover:bg-cyan-300
            text-slate-900
            font-semibold
            px-6 py-3
            rounded-2xl
            transition
            shadow-lg
          ">
            Explore Disease
          </button>

          <button className="
            border border-white/20
            bg-white/5
            hover:bg-white/10
            backdrop-blur-md
            px-6 py-3
            rounded-2xl
            transition
          ">
            View Research
          </button>

        </div>

        {/* FACT CARD */}
        <div className="
          mt-10
          bg-white/10
          border border-white/10
          backdrop-blur-xl
          rounded-3xl
          p-5
          max-w-md
        ">

          <p className="text-cyan-300 font-semibold">
            Medical Fact
          </p>

          <p className="text-slate-200 mt-3 leading-relaxed">
            Your heart beats about
            <span className="font-bold text-white">
              {" "}100,000 times
            </span>
            {" "}every day to circulate blood
            throughout the body.
          </p>

        </div>

      </div>

      {/* RIGHT IMAGE SECTION */}
      <div className="relative flex justify-center items-center">

        {/* glow */}
        <div className="
          absolute
          w-80 h-80
          bg-cyan-400/20
          rounded-full
          blur-3xl
        "></div>

        {/* image card */}
        <div className="
          relative
          bg-white/10
          border border-white/10
          backdrop-blur-xl
          rounded-4xl
          overflow-hidden
          shadow-2xl
          max-w-md
        ">

          <img
            src="/images/hypertension.jpg"
            alt="Hypertension"
            className="
              w-full
              h-105
              object-cover
            "
          />

          {/* overlay */}
          <div className="
            absolute bottom-0 left-0 right-0
            bg-linear-to-t from-black/80 to-transparent
            p-6
          ">

            <p className="text-sm text-cyan-300 uppercase tracking-widest">
              Featured Condition
            </p>

            <h3 className="text-2xl font-bold mt-2">
              Understanding High Blood Pressure
            </h3>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
        {/* HERO SECTION */}
        <section className="relative w-full max-w-175 h-105 sm:h-162.5 mt-14">
          {/* GLOBE */}
          <img
            src="/images/globe.jpg"
            alt="globe"
            className="
            absolute top-1/2 left-1/2
            w-52 h-52 sm:w-96 sm:h-96
            object-cover rounded-full
            shadow-2xl ring-8 ring-white
            -translate-x-1/2 -translate-y-1/2
            opacity-95
            animate-[spin_40s_linear_infinite]
            "
          />

          {/* COURSE BUBBLES */}
          {homeCourses.map((course, index) => {
            const angle =
              (index / homeCourses.length) * 2 * Math.PI;

            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <div
                key={index}
                className="absolute text-center scale-90 sm:scale-100 transition hover:scale-110"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                }}
              >
                <CourseBubble course={course} />
              </div>
            );
          })}
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
        <section className="w-full max-w-7xl px-4 mt-28">

  {/* HEADER */}
  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">

    <div>
      <p className="
        uppercase tracking-[0.3em]
        text-sm
        text-blue-600
        font-semibold
      ">
        Explore
      </p>

      <h2 className="
        text-4xl sm:text-5xl
        font-bold
        mt-3
        leading-tight
      ">
        Trending Diseases
      </h2>

      <p className="
        text-gray-600
        mt-4
        max-w-2xl
        text-lg
        leading-relaxed
      ">
        Discover the most searched and discussed
        medical conditions with detailed explanations,
        symptoms, prevention, and treatment options.
      </p>
    </div>

    <button className="
      self-start md:self-auto
      bg-slate-900
      hover:bg-slate-800
      text-white
      px-6 py-3
      rounded-2xl
      transition
      shadow-lg
    ">
      Explore All
    </button>

  </div>

  {/* DISEASE GRID */}
  {/* DISEASE GRID */}
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

  {trendingDiseases.map((disease) => (

    <div
      key={disease.id}
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
        <div className="
          absolute inset-0
          bg-gradient-to-t
          from-black/80
          via-black/20
          to-transparent
        "></div>

        {/* BADGE */}
        <div className="
          absolute top-5 left-5
          bg-red-500/90
          backdrop-blur-md
          text-white
          text-xs
          font-semibold
          px-4 py-2
          rounded-full
          shadow-lg
        ">
          🔥 Trending
        </div>

        {/* TITLE */}
        <div className="absolute bottom-5 left-5 right-5">

          <h3 className="
            text-white
            text-3xl
            font-bold
            leading-tight
          ">
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
        <p className="
          text-gray-600
          leading-relaxed
          text-[15px]
        ">
          {disease.description}
        </p>

        {/* FOOTER */}
        <div className="
          flex items-center justify-between
          mt-8
          pt-6
          border-t border-gray-100
        ">

          <div className="flex items-center gap-2">

            <div className="
              w-2 h-2
              bg-green-500
              rounded-full
              animate-pulse
            "></div>

            <p className="text-sm text-gray-500">
              {disease.updated}
            </p>

          </div>

          <button className="
            flex items-center gap-2
            text-slate-900
            font-semibold
            group-hover:gap-4
            transition-all
          ">
            Explore
            <span>→</span>
          </button>

        </div>

      </div>

    </div>

  ))}

</div>

</section>

        {/* FUN FACT */}
        {/* FUN MEDICAL FACT */}
<section className="w-full max-w-7xl px-4 mt-32">

  <div className="
    relative
    overflow-hidden
    rounded-[2.5rem]
    bg-gradient-to-br
    from-cyan-500
    via-blue-600
    to-indigo-900
    shadow-2xl
  ">

    {/* BACKGROUND GLOWS */}
    <div className="
      absolute
      -top-24
      -right-24
      w-96 h-96
      bg-white/10
      rounded-full
      blur-3xl
    "></div>

    <div className="
      absolute
      bottom-0
      left-0
      w-72 h-72
      bg-cyan-300/10
      rounded-full
      blur-3xl
    "></div>

    {/* GRID */}
    <div className="
      relative z-10
      grid lg:grid-cols-2
      gap-12
      items-center
      p-8 sm:p-12 lg:p-16
    ">

      {/* LEFT CONTENT */}
      <div>

        {/* BADGE */}
        <div className="
          inline-flex items-center gap-3
          bg-white/10
          border border-white/10
          backdrop-blur-xl
          px-5 py-3
          rounded-full
        ">

          <div className="
            w-3 h-3
            bg-cyan-300
            rounded-full
            animate-pulse
          "></div>

          <p className="
            uppercase
            tracking-[0.25em]
            text-xs
            text-cyan-100
            font-semibold
          ">
            Fun Medical Fact
          </p>

        </div>

        {/* TITLE */}
        <h2 className="
          text-4xl sm:text-5xl
          font-bold
          text-white
          leading-tight
          mt-7
          max-w-3xl
        ">
          Your stomach gets a completely
          new lining every few days.
        </h2>

        {/* DESCRIPTION */}
        <p className="
          text-cyan-100/90
          text-lg
          leading-relaxed
          mt-6
          max-w-2xl
        ">
          This protects the stomach from digesting itself
          despite the powerful acid used to break down food.
          The human body constantly repairs and renews itself.
        </p>

        {/* MINI CARDS */}
        <div className="
          grid grid-cols-2 sm:grid-cols-3
          gap-4
          mt-10
        ">

          <div className="
            bg-white/10
            border border-white/10
            backdrop-blur-md
            rounded-2xl
            p-5
          ">

            <p className="
              text-3xl
              font-bold
              text-white
            ">
              3-5
            </p>

            <p className="
              text-sm
              text-cyan-100
              mt-2
            ">
              Days Renewal
            </p>

          </div>

          <div className="
            bg-white/10
            border border-white/10
            backdrop-blur-md
            rounded-2xl
            p-5
          ">

            <p className="
              text-3xl
              font-bold
              text-white
            ">
              pH 1
            </p>

            <p className="
              text-sm
              text-cyan-100
              mt-2
            ">
              Strong Acid
            </p>

          </div>

          <div className="
            bg-white/10
            border border-white/10
            backdrop-blur-md
            rounded-2xl
            p-5
          ">

            <p className="
              text-3xl
              font-bold
              text-white
            ">
              24/7
            </p>

            <p className="
              text-sm
              text-cyan-100
              mt-2
            ">
              Digestion Work
            </p>

          </div>

        </div>

        {/* BUTTON */}
        <button className="
          mt-10
          bg-white
          hover:bg-cyan-100
          text-blue-900
          font-semibold
          px-7 py-4
          rounded-2xl
          transition
          shadow-xl
        ">
          Discover More Facts →
        </button>

      </div>

      {/* RIGHT IMAGE */}
      <div className="
        relative
        flex
        justify-center
      ">

        {/* GLOW */}
        <div className="
          absolute
          w-80 h-80
          bg-cyan-300/20
          rounded-full
          blur-3xl
        "></div>

        {/* IMAGE CARD */}
        <div className="
          relative
          overflow-hidden
          rounded-[2rem]
          border border-white/10
          bg-white/10
          backdrop-blur-xl
          shadow-2xl
          max-w-md
        ">

          <img
            src="/images/stomach.jpg"
            alt="Stomach"
            className="
              w-full
              h-[500px]
              object-cover
            "
          />

          {/* OVERLAY */}
          <div className="
            absolute bottom-0 left-0 right-0
            bg-gradient-to-t
            from-black/80
            via-black/20
            to-transparent
            p-7
          ">

            <p className="
              uppercase
              tracking-widest
              text-cyan-300
              text-xs
              font-semibold
            ">
              Human Biology
            </p>

            <h3 className="
              text-white
              text-2xl
              font-bold
              mt-3
            ">
              Amazing Digestive System
            </h3>

            <p className="
              text-gray-300
              text-sm
              mt-3
              leading-relaxed
            ">
              The body continuously regenerates
              cells to protect vital organs.
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

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
<section className="w-full max-w-7xl px-4 mt-32">

  <div className="
    relative
    overflow-hidden
    rounded-[2.5rem]
    bg-linear-to-br
    from-emerald-950
    via-green-900
    to-emerald-950
    shadow-2xl
  ">

    {/* BACKGROUND EFFECTS */}
    <div className="
      absolute
      -top-20
      -right-20
      w-80 h-80
      bg-green-400/20
      rounded-full
      blur-3xl
    "></div>

    <div className="
      absolute
      bottom-0
      left-0
      w-72 h-72
      bg-emerald-300/10
      rounded-full
      blur-3xl
    "></div>

    {/* CONTENT */}
    <div className="
      relative z-10
      grid lg:grid-cols-2
      gap-12
      items-center
      p-8 sm:p-12 lg:p-16
    ">

      {/* LEFT SIDE */}
      <div>

        {/* BADGE */}
        <div className="
          inline-flex items-center gap-3
          bg-white/10
          border border-white/10
          backdrop-blur-xl
          px-5 py-3
          rounded-full
        ">

          <div className="
            w-3 h-3
            bg-green-400
            rounded-full
            animate-pulse
          "></div>

          <p className="
            uppercase
            tracking-[0.25em]
            text-xs
            text-green-200
            font-semibold
          ">
            Daily Health Tip
          </p>

        </div>

        {/* TITLE */}
        <h2 className="
          text-4xl sm:text-5xl
          font-bold
          text-white
          leading-tight
          mt-7
        ">
          Drink enough water
          throughout the day.
        </h2>

        {/* DESCRIPTION */}
        <p className="
          text-green-100/90
          text-lg
          leading-relaxed
          mt-6
          max-w-2xl
        ">
          Proper hydration helps regulate body temperature,
          improve digestion, support circulation and maintain
          healthy brain function throughout the day.
        </p>

        {/* STATS */}
        <div className="
          flex flex-wrap gap-4
          mt-10
        ">

          <div className="
            bg-white/10
            border border-white/10
            backdrop-blur-md
            px-5 py-4
            rounded-2xl
          ">
            <p className="text-2xl font-bold text-white">
              60%
            </p>

            <p className="text-sm text-green-100">
              Body Water
            </p>
          </div>

          <div className="
            bg-white/10
            border border-white/10
            backdrop-blur-md
            px-5 py-4
            rounded-2xl
          ">
            <p className="text-2xl font-bold text-white">
              8+
            </p>

            <p className="text-sm text-green-100">
              Cups Daily
            </p>
          </div>

          <div className="
            bg-white/10
            border border-white/10
            backdrop-blur-md
            px-5 py-4
            rounded-2xl
          ">
            <p className="text-2xl font-bold text-white">
              24h
            </p>

            <p className="text-sm text-green-100">
              Hydration Cycle
            </p>
          </div>

        </div>

        {/* BUTTON */}
        <button className="
          mt-10
          bg-white
          hover:bg-green-100
          text-emerald-950
          font-semibold
          px-7 py-4
          rounded-2xl
          transition
          shadow-xl
        ">
          Explore Wellness →
        </button>

      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="
        relative
        flex
        justify-center
      ">

        {/* GLOW */}
        <div className="
          absolute
          w-80 h-80
          bg-green-400/20
          rounded-full
          blur-3xl
        "></div>

        {/* IMAGE CARD */}
        <div className="
          relative
          overflow-hidden
          rounded-4xl
          border border-white/10
          bg-white/10
          backdrop-blur-xl
          shadow-2xl
          max-w-md
        ">

          <img
            src="/images/water.jpg"
            alt="Hydration"
            className="
              w-full
              h-120
              object-cover
            "
          />

          {/* OVERLAY */}
          <div className="
            absolute bottom-0 left-0 right-0
            bg-linear-to-t
            from-black/80
            via-black/20
            to-transparent
            p-7
          ">

            <p className="
              uppercase
              tracking-widest
              text-green-300
              text-xs
              font-semibold
            ">
              Wellness Focus
            </p>

            <h3 className="
              text-white
              text-2xl
              font-bold
              mt-3
            ">
              Hydration & Healthy Living
            </h3>

            <p className="
              text-gray-300
              text-sm
              mt-3
              leading-relaxed
            ">
              Simple daily habits can improve
              long-term health and wellbeing.
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

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


