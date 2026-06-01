import { useState } from "react";
import { useParams } from "react-router-dom";
import courseData from "../data/courseData";
import Navbar from "../components/Navbar";

export default function CoursePage() {
  const { slug } = useParams();
  const course = courseData[slug];

  if (!course) return <div className="p-10">Course Not Found</div>;
  const [showContents, setShowContents] = useState(false);
  const [activeSection, setActiveSection] = useState(course.sections[0]);
  const [answers, setAnswers] = useState({});
const [submitted, setSubmitted] = useState(false);

const handleSelect = (qIndex, optionIndex) => {
  if (submitted) return;

  setAnswers((prev) => ({
    ...prev,
    [qIndex]: optionIndex,
  }));
};
const handleSubmit = () => {
  setSubmitted(true);
};

  return (
    <div className="bg-white text-[#202122]">
      {/* NAVBAR */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
        <Navbar />
      </div>

      {/* PAGE WRAPPER */}
      <div className="pt-16 max-w-7xl mx-auto px-4">
        {/* MOBILE CONTENTS BUTTON */}
        <div className="lg:hidden fixed top-20 left-4 z-40">
         <button
onClick={() => setShowContents(true)}
className="
flex items-center gap-2
px-4 py-2
rounded-lg
border border-white/30
bg-white/20
backdrop-blur-md
shadow-md
hover:bg-white/30
transition
"
>
<span className="text-xl">☰</span>
</button>
        </div>

        {/* MOBILE CONTENTS DRAWER */}
        {showContents && (
          <>
            <div
              onClick={() => setShowContents(false)}
              className="fixed inset-0 bg-black/30 z-40 lg:hidden"
            />

            <div
              className="
fixed top-0 left-0 h-full w-72
bg-white z-50 shadow-xl p-5
overflow-y-auto lg:hidden
"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-bold">Contents</h2>

                <button
                  onClick={() => setShowContents(false)}
                  className="text-xl"
                >
                  ✕
                </button>
              </div>

              <ol className="space-y-3 text-sm">
                {course.sections.map((section, index) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      onClick={() => setShowContents(false)}
                      className="text-blue-700 hover:underline"
                    >
                      {index + 1}. {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr_260px] gap-8">
          {/* LEFT - CONTENTS (sticky, NOT scrolling container) */}
          <aside className="hidden lg:block sticky top-20 self-start">
            <div className="border border-gray-300 bg-[#f8f9fa] p-3 text-sm">
              <div className="font-bold mb-3 text-center">Contents</div>

              <ol className="space-y-1">
                {course.sections.map((section, index) => (
                  <li key={section.id}>
                    <button
  onClick={() => {
    setActiveSection(section);
    setShowContents(false);
  }}
  className="text-blue-700 hover:underline text-left"
>
  {index + 1}. {section.title}
</button>
                  </li>
                ))}
              </ol>
            </div>
          </aside>

          {/* MIDDLE - ARTICLE (ONLY real scroll content) */}
          {/* MIDDLE - ARTICLE */}
          <main className="min-w-0 py-8 px-2 md:px-6">
  {/* TITLE */}
  <header className="mb-6 border-b pb-4">
    <h1 className="text-4xl md:text-5xl font-serif leading-tight">
      {course.title}
    </h1>

    <p className="text-sm text-gray-600 mt-2">
      From Nurseridge, the free nursing library
    </p>
  </header>

  {/* ACTIVE TOPIC TITLE */}
  <h2 className="text-2xl font-serif mb-4 text-blue-800">
    {activeSection?.title}
  </h2>

  {/* MEDIA */}
  {activeSection?.media?.length > 0 && (
    <div className="mb-6 space-y-3">
      {activeSection.media.map((item, i) => (
        <div key={i} className="border bg-white rounded-lg overflow-hidden">
          {item.type === "video" && (
            <iframe className="w-full h-96" src={item.src} allowFullScreen />
          )}

          {item.type === "image" && (
            <img src={item.src} className="w-full h-64 object-cover" />
          )}
        </div>
      ))}
    </div>
  )}

  {/* NOTES */}
  <div
    className="
      text-[17px] leading-8 text-gray-800
      bg-white p-6 rounded-xl shadow-sm 
      [&_h3]:text-blue-700
      [&_h3]:text-xl
      [&_h3]:font-semibold
      [&_h3]:mt-6
      [&_p]:mb-4
      [&_ul]:list-disc
      [&_ul]:pl-6
      [&_li]:mb-2
    "
    dangerouslySetInnerHTML={{ __html: activeSection?.content }}
  />

  {/* QUIZ SECTION */}
  {activeSection?.quiz && (
  <div className="mt-10 p-6 rounded-xl bg-blue-50 border border-blue-200">
    <h3 className="text-xl font-bold text-blue-900 mb-4">
      Quick Quiz
    </h3>

    {activeSection.quiz.map((q, i) => {
      const selected = answers[i];
      const correct = q.answer;

      return (
        <div key={i} className="mb-8 p-4 bg-white rounded-lg ">
          <p className="font-semibold mb-3">
            {i + 1}. {q.question}
          </p>

          <div className="space-y-2">
            {q.options.map((opt, idx) => {
              const isSelected = selected === idx;
              const isCorrect = idx === correct;

              let style =
                "block w-full text-left px-4 py-2 rounded-lg border transition";

              if (submitted) {
                if (isCorrect) style += " bg-green-100 border-green-500";
                else if (isSelected && !isCorrect)
                  style += " bg-red-100 border-red-500";
              } else {
                style += isSelected
                  ? " bg-blue-100 border-blue-400"
                  : " hover:bg-blue-50";
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(i, idx)}
                  className={style}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {/* RATIONALE + RESULT */}
          {submitted && (
            <div className="mt-3 text-sm">
              {selected === correct ? (
                <p className="text-green-700 font-semibold">
                  ✅ Correct
                </p>
              ) : (
                <p className="text-red-700 font-semibold">
                  ❌ Incorrect
                </p>
              )}

              {q.rationale && (
                <p className="mt-2 text-gray-600">
                  💡 {q.rationale}
                </p>
              )}
            </div>
          )}
        </div>
      );
    })}

    {/* SUBMIT BUTTON */}
    {!submitted && (
      <button
        onClick={handleSubmit}
        className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Submit Quiz
      </button>
    )}
  </div>
)}
</main>

          {/* RIGHT - INFOBOX (sticky, NOT scroll container) */}
          {/* RIGHT - INFOBOX (Wikipedia style) */}
          <aside className="hidden xl:block sticky top-20 self-start">
            <div className="w-65 border border-gray-300 bg-white text-sm shadow-sm">
              {/* TITLE */}
              <div className="bg-[#eaecf0] text-center font-bold p-3 border-b border-gray-300">
                {course.title}
              </div>

              {/* IMAGE PLACEHOLDER (optional Wikipedia feel) */}
              <div className="border-b border-gray-300">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-40 object-cover"
                />
              </div>

              {/* INFO TABLE */}
              <div className="divide-y divide-gray-200">
                <div className="flex justify-between p-3">
                  <span className="font-semibold text-gray-700">Field</span>
                  <span className="text-right">Medical Sciences</span>
                </div>

                <div className="flex justify-between p-3">
                  <span className="font-semibold text-gray-700">Sections</span>
                  <span>{course.sections.length}</span>
                </div>

                <div className="flex justify-between p-3">
                  <span className="font-semibold text-gray-700">Level</span>
                  <span>Reference Article</span>
                </div>

                <div className="flex justify-between p-3">
                  <span className="font-semibold text-gray-700">Updated</span>
                  <span>2026</span>
                </div>
              </div>

              {/* FOOTER NOTE */}
              <div className="text-xs text-gray-500 p-3 border-t bg-gray-50">
                Part of MedWiki medical reference system
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
