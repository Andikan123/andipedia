import { useState } from "react";
import { useParams } from "react-router-dom";
import courseData from "../data/courseData";
import Navbar from "../components/Navbar";

export default function CoursePage() {
  const { slug } = useParams();
  const course = courseData[slug];

  if (!course) return <div className="p-10">Course Not Found</div>;
  const [showContents, setShowContents] = useState(false);

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
                    <a
                      href={`#${section.id}`}
                      className="text-blue-700 hover:underline"
                    >
                      {index + 1}. {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </aside>

          {/* MIDDLE - ARTICLE (ONLY real scroll content) */}
          {/* MIDDLE - ARTICLE */}
          <main className="min-w-0 py-8">
            {/* TITLE */}
            <header className="mb-6 border-b pb-4">
              <h1 className="text-4xl md:text-5xl font-serif leading-tight">
                {course.title}
              </h1>

              <p className="text-sm text-gray-600 mt-2">
                From Andipedia, the free medical encyclopedia
              </p>
            </header>

            {/* INTRO */}
            <section className="mb-10 text-[17px] leading-8">
              <p className="first-letter:text-5xl first-letter:font-serif first-letter:mr-2 first-letter:float-left first-letter:leading-none">
                {course.title} is a topic in medical science studied in clinical
                practice, education, and research.
              </p>
            </section>

            {/* SECTIONS */}
            {course.sections.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                className="mb-16 scroll-mt-24"
              >
                {/* TITLE */}
                <h2 className="text-2xl font-serif border-b border-gray-300 pb-2 mb-5">
                  {index + 1}. {section.title}
                </h2>

                {/* MEDIA + TEXT */}
                <div className="space-y-4">
                  {/* MEDIA */}
                  {section.media?.length > 0 && (
                    <div className="md:float-right md:ml-6 md:mb-4 w-full  md:w-[360px] space-y-3">
                      {section.media.map((item, i) => (
                        <div key={i} className="border bg-white">
                          {item.type === "video" && (
                            <iframe
                              className="w-full h-[400px]"
                              src={item.src}
                              allowFullScreen
                            />
                          )}

                          {item.type === "image" && (
                            <img
                              src={item.src}
                              alt=""
                              className="w-full h-[200px] object-cover"
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* TEXT */}
                 <div
  className="
    text-[17px] leading-8 text-gray-800
    [&_h3]:text-blue-600
    [&_h3]:text-2xl
    [&_h3]:font-semibold
    [&_h3]:mt-10
    [&_h3]:mb-4

    [&_strong]:text-blue-600
    [&_strong]:font-semibold

    [&_p]:mb-5

    [&_ul]:list-disc
    [&_ul]:pl-6
    [&_ul]:my-4

    [&_li]:mb-2
  "
  dangerouslySetInnerHTML={{ __html: section.content }}
/>
                </div>

                {/* clear float */}
                <div className="clear-both"></div>
              </section>
            ))}

            {/* REFERENCES */}
            <section className="border-t pt-8 mt-20">
              <h2 className="text-xl font-serif mb-4">References</h2>

              <ol className="list-decimal list-inside text-sm space-y-2 leading-6">
                <li>Medical textbook reference placeholder.</li>
                <li>Clinical guideline placeholder.</li>
                <li>Peer-reviewed journal placeholder.</li>
              </ol>
            </section>
          </main>

          {/* RIGHT - INFOBOX (sticky, NOT scroll container) */}
          {/* RIGHT - INFOBOX (Wikipedia style) */}
          <aside className="hidden xl:block sticky top-20 self-start">
            <div className="w-[260px] border border-gray-300 bg-white text-sm shadow-sm">
              {/* TITLE */}
              <div className="bg-[#eaecf0] text-center font-bold p-3 border-b border-gray-300">
                {course.title}
              </div>

              {/* IMAGE PLACEHOLDER (optional Wikipedia feel) */}
              <div className="border-b border-gray-300">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-[160px] object-cover"
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
