import { useState } from "react";
import { useNavigate } from "react-router-dom";
import diseaseCategories from "../data/trendingDiseases";

export default function AllDiseases() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  

  // FLATTEN ALL DISEASES
  const allDiseases = diseaseCategories.flatMap((category) =>
  (category.groups || []).flatMap((group) =>
    (group.diseases || []).map((disease) => ({
      ...disease,
      diseaseType: category.type,
      pathogen: group.pathogen,
    }))
  )
);

  // FILTER
  const filteredDiseases = allDiseases.filter((disease) =>
    disease.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#f6f4ef] px-6 py-16">

      {/* HEADER */}
      <div className="max-w-6xl mx-auto text-center mb-14">

        <p className="uppercase tracking-[0.3em] text-sm text-blue-600 font-semibold">
          Medical Encyclopedia
        </p>

        <h1 className="text-5xl font-bold text-gray-900 mt-4">
          All Diseases
        </h1>

        <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
          Explore infectious and non-infectious diseases,
          symptoms, prevention strategies and treatment options.
        </p>

        {/* SEARCH */}
        <div className="mt-10 flex justify-center">

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search diseases..."
            className="
              w-full
              max-w-xl
              px-6
              py-4
              rounded-2xl
              border border-gray-200
              shadow-sm
              focus:outline-none
              focus:border-blue-500
              bg-white
            "
          />

        </div>

      </div>

      {/* DISEASE COUNT */}
      <div className="max-w-6xl mx-auto mb-8">

        <p className="text-gray-500 text-sm">
          Showing{" "}
          <span className="font-semibold text-slate-900">
            {filteredDiseases.length}
          </span>{" "}
          diseases
        </p>

      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {filteredDiseases.map((disease) => (

          <div
            key={disease.id}
            onClick={() => navigate(`/disease/${disease.slug}`)}
            className="
              group
              cursor-pointer
              bg-white
              rounded-3xl
              overflow-hidden
              shadow-sm
              border border-gray-100
              hover:shadow-2xl
              hover:-translate-y-2
              transition-all duration-300
            "
          >

            {/* IMAGE */}
            <div className="relative h-60 overflow-hidden">

              <img
                src={disease.image}
                alt={disease.name}
                className="
                  w-full
                  h-full
                  object-cover
                  group-hover:scale-110
                  transition duration-700
                "
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent"></div>

              {/* TYPE BADGE */}
              <div className="absolute top-4 left-4">

                <div
                  className={`
                    px-4 py-2 rounded-full text-xs font-semibold backdrop-blur-md text-white
                    ${
                      disease.diseaseType === "Infectious Diseases"
                        ? "bg-red-500/90"
                        : "bg-blue-500/90"
                    }
                  `}
                >
                  {disease.diseaseType}
                </div>

              </div>

              {/* TITLE */}
              <div className="absolute bottom-4 left-4 right-4">

                <h3 className="text-white text-3xl font-bold">
                  {disease.name}
                </h3>

                <p className="text-gray-200 text-sm mt-1">
                  {disease.pathogen}
                </p>

              </div>

            </div>

            {/* CONTENT */}
            <div className="p-6">

              <p className="text-gray-600 text-sm leading-relaxed">
  {disease.description.length > 120
    ? disease.description.slice(0, 120) + "..."
    : disease.description}
</p>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2 mt-5">

                {disease.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="
                      text-xs
                      px-3
                      py-1
                      bg-blue-50
                      text-blue-700
                      rounded-full
                    "
                  >
                    {tag}
                  </span>
                ))}

              </div>

              {/* FOOTER */}
              <div className="flex justify-between items-center mt-7 pt-5 border-t border-gray-100">

                <span className="text-xs text-gray-500">
                  {disease.updated}
                </span>

                <button className="text-sm font-semibold text-slate-900 group-hover:gap-3 flex items-center gap-1 transition-all">

                  View

                  <span>→</span>

                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}