import { useParams } from "react-router-dom";
import diseaseCategories from "../data/trendingDiseases";

export default function DiseasePage() {
  const { slug } = useParams();

  // FLATTEN ALL DISEASES
  const allDiseases = diseaseCategories.flatMap((category) =>
    category.groups.flatMap((group) => group.diseases)
  );

  // FIND DISEASE
  const disease = allDiseases.find(
    (item) => item.slug === slug
  );

  // NOT FOUND
  if (!disease) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">

          <h1 className="text-4xl font-bold text-gray-800">
            Disease not found
          </h1>

          <p className="text-gray-500 mt-3">
            The disease you are looking for does not exist.
          </p>

        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* HERO */}
      <div className="relative h-125 overflow-hidden">

        <img
          src={disease.image}
          alt={disease.name}
          className="w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* CONTENT */}
        <div className="absolute bottom-0 left-10 text-white max-w-3xl" style={{ fontFamily: "'Great Vibes', cursive" }}>

          <p className="uppercase tracking-[0.3em] text-sm text-blue-300">
            Disease Overview
          </p>

          <h1 className="text-5xl font-bold mt-4">
            {disease.name}
          </h1>

          <div className="mt-10 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">

  <div className="mt-10 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md max-h-50 overflow-y-auto">
  <p className="text-gray-200 leading-relaxed text-lg first-letter:text-3xl first-letter:font-bold first-letter:text-blue-300 first-letter:mr-1">
    {disease.description}
  </p>
</div>

</div>
          {/* META */}
          <div className="flex flex-wrap gap-4 mt-6">

            <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm">
              {disease.category}
            </div>

            <div className="bg-red-500/80 px-4 py-2 rounded-full text-sm">
              Severity: {disease.severity}
            </div>

          </div>

        </div>

      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-4 py-16">

        {/* TAGS */}
        <div className="flex flex-wrap gap-3 mb-12">

          {disease.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}

        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* SYMPTOMS */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">

            {/* HEADER */}
            <div className="flex items-center gap-3 mb-6">

              <div className="w-10 h-10 rounded-2xl bg-red-50 flex items-center justify-center">
                <span className="text-red-500 text-xl">
                  ⚠️
                </span>
              </div>

              <div>

                <h2 className="text-2xl font-bold text-gray-900">
                  Symptoms
                </h2>

                <p className="text-sm text-gray-500">
                  Common signs to watch for
                </p>

              </div>

            </div>

            {/* LIST */}
            <div className="space-y-3">

              {disease.symptoms.map((item, i) => (
                <div
                  key={i}
                  className="group flex items-center gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-red-50 transition"
                >

                  {/* DOT */}
                  <div className="relative">

                    <span className="w-3 h-3 bg-red-500 rounded-full block"></span>

                    <span className="absolute inset-0 w-3 h-3 bg-red-400 rounded-full animate-ping opacity-40"></span>

                  </div>

                  {/* TEXT */}
                  <p className="text-gray-700 font-medium group-hover:text-gray-900 transition">
                    {item}
                  </p>

                </div>
              ))}

            </div>

          </div>

          {/* PREVENTION */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">

            {/* HEADER */}
            <div className="flex items-start justify-between mb-8">

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center shadow-sm">

                  <span className="text-green-600 text-2xl">
                    🛡️
                  </span>

                </div>

                <div>

                  <h2 className="text-2xl font-bold text-gray-900">
                    Prevention
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    Evidence-based ways to reduce risk
                  </p>

                </div>

              </div>

            </div>

            {/* CONTENT */}
            <div className="grid sm:grid-cols-2 gap-4">

              {disease.prevention.map((item, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-2xl border border-green-100 bg-linear-to-br from-green-50 to-white p-5 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >

                  {/* ACCENT */}
                  <div className="absolute left-0 top-0 h-full w-1 bg-green-400 opacity-70"></div>

                  <div className="flex items-start gap-3">

                    {/* DOT */}
                    <div className="mt-1 relative">

                      <span className="w-3 h-3 bg-green-500 rounded-full block"></span>

                      <span className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-30"></span>

                    </div>

                    {/* TEXT */}
                    <div>

                      <p className="text-gray-800 font-semibold leading-relaxed group-hover:text-gray-900">
                        {item}
                      </p>

                      <p className="text-xs text-gray-500 mt-2">
                        Recommended practice
                      </p>

                    </div>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

        {/* TREATMENT */}
        <div className="relative overflow-hidden bg-white rounded-3xl p-10 shadow-md mt-10 border border-gray-100">

          {/* GLOW */}
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-60"></div>

          {/* HEADER */}
          <div className="flex items-start justify-between mb-8">

            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shadow-sm">

                <span className="text-blue-600 text-2xl">
                  💊
                </span>

              </div>

              <div>

                <h2 className="text-3xl font-bold text-gray-900">
                  Treatment
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  Clinical management & medical approach
                </p>

              </div>

            </div>

          </div>

          {/* CONTENT */}
          <div className="relative">

            <div className="p-6 rounded-2xl bg-linear-to-br from-blue-50 to-white border border-blue-100">

              <p className="text-gray-700 text-lg leading-relaxed">
                {disease.treatment}
              </p>

            </div>

          </div>

          {/* FOOTER */}
          <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">

            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>

            <p>
              Treatment may vary depending on severity and patient condition
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}