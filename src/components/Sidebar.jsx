export default function Sidebar({ sections }) {
  return (
    <div className="w-64 bg-gray-800 p-4 h-screen sticky top-0">
      <h2 className="font-bold mb-3">Contents</h2>

      {sections.map((sec) => (
        <a
          key={sec.id}
          href={`#${sec.id}`}
          className="block text-gray-300 hover:text-white mb-2"
        >
          {sec.heading}
        </a>
      ))}
    </div>
  );
}