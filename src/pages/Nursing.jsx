import { Link } from "react-router-dom";

const sections = [
  {
    title: "Section 1",
    description: "Basic medical sciences and foundations.",
    slug: "section-1",
  },

  {
    title: "Section 2",
    description: "Research and pharmaceutical sciences.",
    slug: "section-2",
  },

  {
    title: "Section 3",
    description: "Clinical and community nursing sciences.",
    slug: "section-3",
  },

  {
    title: "Section 4",
    description: "Maternal and ethical nursing practice.",
    slug: "section-4",
  },
];

export default function Nursing() {
  return (
    <div className="min-h-screen bg-[#f6f4ef] px-6 py-20">

      <div className="max-w-7xl mx-auto">

        <p className="
          uppercase
          tracking-[0.3em]
          text-sm
          text-blue-600
          font-semibold
        ">
          Faculty
        </p>

        <h1 className="
          text-5xl
          font-bold
          mt-4
        ">
          Nursing
        </h1>

        <p className="
          text-gray-600
          mt-5
          max-w-3xl
          text-lg
          leading-relaxed
        ">
          Explore nursing education, clinical practice,
          public health, mental health nursing,
          pediatrics and more.
        </p>

        {/* SECTIONS */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">

          {sections.map((section, index) => (

          <Link
  key={index}
  to={`/nursing/${section.slug}`}
  className="
    group
    relative
    overflow-hidden
    rounded-4xl
    border border-slate-200
    bg-[#fafafa]
    p-8 sm:p-10
    transition-all duration-500
    hover:-translate-y-1
    hover:border-slate-300
    hover:bg-white
    hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)]
  "
>

  {/* SUBTLE GRID LINE */}
  <div
    className="
      absolute
      inset-0
      opacity-[0.03]
      [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
      [background-size:40px_40px]
    "
  />

  {/* TOP ACCENT */}
  <div
    className="
      absolute
      top-0
      left-0
      h-1
      w-0
      bg-slate-900
      transition-all duration-500
      group-hover:w-full
    "
  />

  <div className="relative z-10">

    {/* HEADER */}
    <div className="flex items-start justify-between">

      <div>
        <p
          className="
            text-[0.72rem]
            font-semibold
            uppercase
            tracking-[0.35em]
            text-slate-400
          "
        >
          Nursing Department
        </p>

        <div className="mt-4 h-[1px] w-12 bg-slate-300" />
      </div>

      {/* ICON */}
      <div
        className="
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          border border-slate-200
          bg-white
          text-2xl
          shadow-sm
          transition-all duration-500
          group-hover:border-slate-300
          group-hover:shadow-md
        "
      >
        📘
      </div>
    </div>

    {/* TITLE */}
    <h2
      className="
        mt-12
        text-2xl
        sm:text-3xl
        font-semibold
        leading-tight
        tracking-tight
        text-slate-900
      "
    >
      {section.title}
    </h2>

    {/* DESCRIPTION */}
    <p
      className="
        mt-5
        max-w-xl
        text-[0.98rem]
        leading-8
        text-slate-600
      "
    >
      {section.description}
    </p>

    {/* FOOTER */}
    <div
      className="
        mt-12
        flex
        items-center
        justify-between
        border-t
        border-slate-200
        pt-6
      "
    >

      {/* LINK */}
      <div
        className="
          flex
          items-center
          gap-3
          text-sm
          font-medium
          tracking-wide
          text-slate-800
        "
      >
        View Section

        <span
          className="
            transition-transform duration-300
            group-hover:translate-x-1
          "
        >
          →
        </span>
      </div>

      {/* META */}
      <span
        className="
          text-xs
          uppercase
          tracking-[0.2em]
          text-slate-400
        "
      >
        Clinical Notes
      </span>

    </div>
  </div>
</Link>
          ))}

        </div>

      </div>

    </div>
  );
}