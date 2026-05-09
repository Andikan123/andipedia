export default function ArticleSection({ section }) {
  return (
    <div id={section.id} className="mb-6">
      <h2 className="text-2xl font-semibold mb-2">
        {section.heading}
      </h2>
      <p className="text-gray-300">{section.content}</p>
    </div>
  );
}