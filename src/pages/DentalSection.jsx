import { useParams } from "react-router-dom";

export default function DentalSection() {
  const { section } = useParams();

  return (
    <div className="min-h-screen bg-[#f6f4ef]">

      {/* HERO */}
      <section className="relative overflow-hidden">

        <div className="
          absolute
          top-0 right-0
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
            Dental Section
          </p>

          <h1 className="
            text-5xl sm:text-7xl
            font-bold
            mt-5
          ">
            {section.replace(/-/g, " ")}
          </h1>

          <p className="
            text-gray-600
            text-lg
            mt-6
            max-w-3xl
            leading-relaxed
          ">
            Explore oral healthcare, dental sciences,
            procedures and educational dental resources.
          </p>

        </div>

      </section>

      {/* TOPICS */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {[
            "Dental Anatomy",
            "Oral Pathology",
            "Dental Surgery",
            "Orthodontics",
            "Tooth Restoration",
            "Oral Hygiene",
          ].map((topic, index) => (

            <div
              key={index}
              className="
                bg-white
                rounded-4xl
                p-8
                border border-gray-100
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-2
                transition-all duration-500
                cursor-pointer
              "
            >

              <div className="
                w-16 h-16
                rounded-2xl
                bg-purple-50
                flex items-center justify-center
                text-3xl
              ">
                🦷
              </div>

              <h2 className="
                text-2xl
                font-bold
                mt-6
              ">
                {topic}
              </h2>

              <p className="
                text-gray-600
                mt-4
                leading-relaxed
              ">
                Learn about oral diseases, procedures,
                anatomy and modern dental care.
              </p>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
}