import { useNavigate } from "react-router-dom";

export default function Medicine() {
  const navigate = useNavigate();

  const communities = [
    {
      title: "Internal Medicine",
      slug: "internal-medicine",
      icon: "🩺",
      description:
        "Study adult diseases, diagnosis, treatment plans and patient management.",
    },

    {
      title: "Surgery",
      slug: "surgery",
      icon: "🏥",
      description:
        "Explore operative procedures, surgical care and clinical interventions.",
    },

    {
      title: "Pathology",
      slug: "pathology",
      icon: "🧬",
      description:
        "Understand disease mechanisms, laboratory findings and tissue analysis.",
    },

    {
      title: "Pharmacology",
      slug: "pharmacology",
      icon: "💊",
      description:
        "Learn drug actions, therapeutic uses, side effects and medications.",
    },

    {
      title: "Pediatrics",
      slug: "pediatrics",
      icon: "👶",
      description:
        "Focus on child growth, development and pediatric disease management.",
    },

    {
      title: "Cardiology",
      slug: "cardiology",
      icon: "❤️",
      description:
        "Study heart diseases, circulation and cardiovascular treatments.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f6f4ef]">

      {/* HERO */}
      <section className="relative overflow-hidden">

        {/* GLOW */}
        <div className="
          absolute
          top-0 right-0
          w-125 h-125
          bg-green-400/10
          rounded-full
          blur-3xl
        "></div>

        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">

          <p className="
            uppercase
            tracking-[0.3em]
            text-sm
            text-green-600
            font-semibold
          ">
            Faculty of Medicine
          </p>

          <h1 className="
            text-5xl sm:text-7xl
            font-bold
            mt-5
            leading-tight
          ">
            Medical
            <span className="text-green-700">
              {" "}Communities
            </span>
          </h1>

          <p className="
            text-gray-600
            text-lg
            leading-relaxed
            mt-6
            max-w-3xl
          ">
            Explore major fields in medicine including
            surgery, pathology, pharmacology,
            pediatrics and internal medicine.
          </p>

        </div>

      </section>

      {/* COMMUNITIES */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {communities.map((community, index) => (

            <div
              key={index}
              onClick={() =>
                navigate(`/medicine/${community.slug}`)
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
                bg-green-50
                flex items-center justify-center
                text-4xl
              ">
                {community.icon}
              </div>

              <h2 className="
                text-3xl
                font-bold
                mt-8
                group-hover:text-green-700
                transition
              ">
                {community.title}
              </h2>

              <p className="
                text-gray-600
                leading-relaxed
                mt-5
              ">
                {community.description}
              </p>

              <div className="
                flex items-center gap-2
                mt-8
                font-semibold
                text-green-700
                group-hover:gap-4
                transition-all
              ">
                Explore Community
                <span>→</span>
              </div>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
}