import { useParams } from "react-router-dom";
import topics from "../data/topics";

export default function TopicPage() {
  const { slug } = useParams();

  const topic = topics[slug];

  if (!topic) return <div className="p-10">Topic Not Found</div>;

  return (
    <div className="flex bg-[#f8f9fa] min-h-screen">

      {/* SIDEBAR */}
      <aside className="w-64 sticky top-0 h-screen overflow-y-auto border-r bg-white p-4">
        <h2 className="font-bold mb-4">Contents</h2>

        {topic.sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="block text-blue-600 hover:underline mb-2"
          >
            {s.heading}
          </a>
        ))}
      </aside>

      {/* MAIN */}
      <main className="flex-1 px-10 py-10 max-w-4xl">

        <h1 className="text-4xl font-bold mb-6">
          {topic.title}
        </h1>

        <p className="text-gray-500 mb-6">
          Category: {topic.category}
        </p>

        {topic.sections.map((s) => (
          <section key={s.id} id={s.id} className="mb-16">

            <h2 className="text-2xl font-semibold border-b pb-2 mb-4">
              {s.heading}
            </h2>

            <p className="text-gray-700 leading-relaxed">
              {s.content}
            </p>

          </section>
        ))}
      </main>
    </div>
  );
}