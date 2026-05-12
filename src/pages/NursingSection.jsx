import { useParams, Link } from "react-router-dom";
import nursingSections from "../data/nursingSection";
import homeCourses from "../data/homeData";

export default function NursingSection() {
  const { section } = useParams();

  // courses inside current section
  const currentSection = nursingSections[section];

  // match course details
  const sectionCourses = homeCourses.filter((course) =>
    currentSection?.includes(course.slug)
  );

  return (
    <div className="min-h-screen bg-[#f6f4ef]">

      {/* HERO */}
      <section className="relative overflow-hidden">

        <div
          className="
            absolute
            top-0 right-0
            w-[500px] h-[500px]
            bg-blue-400/10
            rounded-full
            blur-3xl
          "
        ></div>

        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">

          <p
            className="
              uppercase
              tracking-[0.3em]
              text-sm
              text-blue-600
              font-semibold
            "
          >
            Nursing Section
          </p>

          <h1
            className="
              text-5xl sm:text-7xl
              font-bold
              mt-5
            "
          >
            {section.replace(/-/g, " ")}
          </h1>

          <p
            className="
              text-gray-600
              text-lg
              mt-6
              max-w-3xl
              leading-relaxed
            "
          >
            Explore nursing topics, clinical knowledge,
            practical procedures and educational materials.
          </p>

        </div>

      </section>

      {/* COURSES */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {sectionCourses.map((course, index) => (

         <Link
  key={index}
  to={`/course/${course.slug}`}
  className="
    group
    relative
    overflow-hidden
    rounded-[2.5rem]
    bg-slate-900
    min-h-[420px]
    flex
    items-end
    p-8
    transition-all duration-700
    hover:-translate-y-2
    hover:shadow-[0_35px_100px_rgba(15,23,42,0.35)]
  "
>

  {/* BACKGROUND IMAGE */}
  <img
    src={course.image}
    alt={course.name}
    className="
      absolute
      inset-0
      h-full
      w-full
      object-cover
      transition-transform duration-700
      group-hover:scale-105
    "
  />

  {/* DARK OVERLAY */}
  <div
    className="
      absolute
      inset-0
      bg-gradient-to-t
      from-black/90
      via-black/45
      to-black/10
    "
  />

  {/* LIGHT EFFECT */}
  <div
    className="
      absolute
      inset-0
      opacity-0
      transition-opacity duration-700
      bg-gradient-to-br
      from-white/10
      via-transparent
      to-transparent
      group-hover:opacity-100
    "
  />

  {/* CONTENT */}
  <div className="relative z-10 w-full">

    {/* TOP META */}
    <div
      className="
        inline-flex
        items-center
        gap-2
        rounded-full
        border border-white/15
        bg-white/10
        backdrop-blur-xl
        px-4
        py-2
        text-[0.7rem]
        uppercase
        tracking-[0.25em]
        text-white/70
      "
    >
      Nursing Course
    </div>

    {/* TITLE */}
    <h2
      className="
        mt-6
        text-3xl
        sm:text-4xl
        font-semibold
        leading-tight
        tracking-tight
        text-white
      "
    >
      {course.name}
    </h2>

    {/* DESCRIPTION */}
    <p
      className="
        mt-5
        max-w-lg
        text-[1rem]
        leading-8
        text-white/75
      "
    >
      {course.topics} structured learning topics designed
      for nursing, clinical practice, and modern medical education.
    </p>

    {/* FOOTER */}
    <div
      className="
        mt-10
        flex
        items-center
        justify-between
      "
    >

      {/* BUTTON */}
      <div
        className="
          flex
          items-center
          gap-3
          text-sm
          font-medium
          tracking-wide
          text-white
        "
      >
        Explore Course

        <span
          className="
            transition-transform duration-300
            group-hover:translate-x-1
          "
        >
          →
        </span>
      </div>

      {/* TOPICS */}
      <div
        className="
          rounded-full
          border border-white/10
          bg-white/10
          backdrop-blur-md
          px-4
          py-2
          text-xs
          uppercase
          tracking-[0.2em]
          text-white/70
        "
      >
        {course.topics} Topics
      </div>

    </div>
  </div>
</Link>
          ))}

        </div>

      </section>

    </div>
  );
}