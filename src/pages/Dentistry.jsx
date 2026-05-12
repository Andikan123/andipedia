import { useNavigate } from "react-router-dom";

export default function Dentistry() {
  const navigate = useNavigate();

  const sections = [
    {
      title: "Oral Anatomy",
      slug: "oral-anatomy",
      icon: "🦷",
      description:
        "Study tooth structures, oral tissues and dental anatomy.",
    },

    {
      title: "Orthodontics",
      slug: "orthodontics",
      icon: "😁",
      description:
        "Learn teeth alignment, braces and corrective dental procedures.",
    },

    {
      title: "Prosthodontics",
      slug: "prosthodontics",
      icon: "🪥",
      description:
        "Explore dental prostheses, crowns, implants and oral rehabilitation.",
    },

    {
      title: "Dental Surgery",
      slug: "dental-surgery",
      icon: "🏥",
      description:
        "Study oral surgical procedures and advanced dental operations.",
    },

    {
      title: "Periodontology",
      slug: "periodontology",
      icon: "🩹",
      description:
        "Focus on gum diseases, oral inflammation and tissue management.",
    },

    {
      title: "Pediatric Dentistry",
      slug: "pediatric-dentistry",
      icon: "👶",
      description:
        "Understand oral healthcare and treatment for children.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f6f4ef]">

      {/* HERO */}
      <section className="relative overflow-hidden">

        {/* GLOW */}
        <div className="
          absolute
          top-0 left-0
          w-125 h-125
          bg-purple-400/10
          rounded-full
          blur-3xl
        "></div>

        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">

          <p className="
            uppercase
            tracking-[0.3em]
            text-sm
            text-purple-600
            font-semibold
          ">
            Faculty of Dentistry
          </p>

          <h1 className="
            text-5xl sm:text-7xl
            font-bold
            mt-5
            leading-tight
          ">
            Dental
            <span className="text-purple-700">
              {" "}Sections
            </span>
          </h1>

          <p className="
            text-gray-600
            text-lg
            leading-relaxed
            mt-6
            max-w-3xl
          ">
            Discover oral healthcare, orthodontics,
            dental surgery, prosthodontics and
            modern dentistry education.
          </p>

        </div>

      </section>

      {/* SECTIONS */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {sections.map((section, index) => (

            <div
              key={index}
              onClick={() =>
                navigate(`/dentistry/${section.slug}`)
              }
              className="
                group
                bg-white
                rounded-4xl
                p-8
                shadow-sm
                border border-gray-100
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all duration-500
                cursor-pointer
              "
            >

              {/* ICON */}
              <div className="
                w-20 h-20
                rounded-3xl
                bg-purple-50
                flex items-center justify-center
                text-4xl
              ">
                {section.icon}
              </div>

              <h2 className="
                text-3xl
                font-bold
                mt-8
                group-hover:text-purple-700
                transition
              ">
                {section.title}
              </h2>

              <p className="
                text-gray-600
                leading-relaxed
                mt-5
              ">
                {section.description}
              </p>

              <div className="
                flex items-center gap-2
                mt-8
                font-semibold
                text-purple-700
                group-hover:gap-4
                transition-all
              ">
                Explore Section
                <span>→</span>
              </div>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
}