import { useState } from "react";
import { useNavigate } from "react-router-dom";
import trendingDiseases from "../data/trendingDiseases";

export default function AllDiseases() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const filteredDiseases = trendingDiseases.filter((disease) =>
    disease.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#f6f4ef] px-6 py-16">

      {/* HEADER */}
      <div className="max-w-6xl mx-auto text-center mb-12">

        <h1 className="text-5xl font-bold text-gray-900">
          All Diseases
        </h1>

        <p className="text-gray-600 mt-3 text-lg">
          Explore medical conditions, symptoms, prevention and treatment
        </p>

        {/* SEARCH */}
        <div className="mt-8 flex justify-center">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search diseases..."
            className="w-full max-w-md px-5 py-3 rounded-2xl border border-gray-200 shadow-sm focus:outline-none focus:border-blue-500 bg-white"
          />
        </div>

      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {filteredDiseases.map((disease) => (

          <div
            key={disease.id}
            onClick={() => navigate(`/disease/${disease.slug}`)}
            className="group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >

            {/* IMAGE */}
            <div className="relative h-56 overflow-hidden">

              <img
                src={disease.image}
                alt={disease.name}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent"></div>

              {/* name */}
              <h3 className="absolute bottom-4 left-4 text-white text-2xl font-bold">
                {disease.name}
              </h3>

            </div>

            {/* CONTENT */}
            <div className="p-6">

              <p className="text-gray-600 text-sm leading-relaxed">
                {disease.description}
              </p>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2 mt-4">
                {disease.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 bg-blue-50 text-blue-700 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* FOOTER */}
              <div className="flex justify-between items-center mt-6">

                <span className="text-xs text-gray-500">
                  {disease.updated}
                </span>

                <button className="text-sm font-semibold text-slate-900 group-hover:gap-3 flex items-center gap-1 transition-all">
                  View →
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}