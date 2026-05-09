export default function WikiSidePanel() {
  const projects = [
    { name: "Commons", desc: "Free media collection" },
    { name: "Wikivoyage", desc: "Free travel guide" },
    { name: "Wiktionary", desc: "Free dictionary" },
    { name: "Wikibooks", desc: "Free textbooks" },
    { name: "Wikinews", desc: "Free news source" },
    { name: "Wikidata", desc: "Free knowledge base" },
    { name: "Wikiversity", desc: "Free learning resources" },
    { name: "Wikiquote", desc: "Free quote compendium" },
    { name: "MediaWiki", desc: "Free & open wiki software" },
    { name: "Wikisource", desc: "Free content library" },
    { name: "Wikispecies", desc: "Free species directory" },
    { name: "Wikifunctions", desc: "Free function library" },
    { name: "Meta-Wiki", desc: "Community coordination & documentation" },
  ];

  return (
   <div className="w-72 bg-white border-l border-gray-200 p-5 text-sm">

  {/* HEADER */}
  <h2 className="text-base font-semibold mb-3">
    MedWiki Network
  </h2>

  <p className="text-gray-600 text-xs leading-relaxed mb-6">
    MedWiki is a free medical learning platform built for students, nurses, and healthcare professionals.
  </p>

  {/* TOOLS */}
  <div className="mb-6">
    <p className="font-semibold text-xs text-gray-800 mb-2">
      Tools
    </p>

    <div className="space-y-2">
      <div className="text-blue-700 hover:underline cursor-pointer">
        Random Article
      </div>
      <div className="text-blue-700 hover:underline cursor-pointer">
        Topic Explorer
      </div>
      <div className="text-blue-700 hover:underline cursor-pointer">
        Saved Notes
      </div>
    </div>
  </div>

  {/* APPS (CLEANER VERSION) */}
  <div className="mb-6">
    <p className="font-semibold text-xs text-gray-800 mb-2">
      Mobile Access
    </p>

    <p className="text-gray-600 text-xs mb-3">
      Study anywhere with offline access.
    </p>

    <div className="flex gap-2">
      <button className="flex-1 bg-blue-600 text-white text-xs py-2 hover:bg-blue-700">
        Android
      </button>
      <button className="flex-1 bg-blue-600 text-white text-xs py-2 hover:bg-blue-700">
        iOS
      </button>
    </div>
  </div>

  {/* PROJECTS (GRID STYLE) */}
  <div>
    <p className="font-semibold text-xs text-gray-800 mb-2">
      Wikimedia Projects
    </p>

    <div className="grid gap-2">
      {projects.map((item, index) => (
        <div key={index} className="text-xs">
          <p className="text-blue-700 hover:underline cursor-pointer font-medium">
            {item.name}
          </p>
          <p className="text-gray-500 text-[11px]">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </div>

</div>
  );
}







