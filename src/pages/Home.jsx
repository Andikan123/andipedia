import homeCourses from "../data/homeData";
import CourseBubble from "../components/CourseBubble";
import SearchBar from "../components/SearchBar";
import WikiSidePanel from "../components/WikiSidePanel";

export default function Home() {

  const isMobile = window.innerWidth < 640;

  const radius = isMobile ? 135 : 260;

  return (
<div className="relative flex min-h-screen overflow-x-hidden bg-[#f6f4ef]">

  {/* subtle background glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_35%)]"></div>

  {/* subtle paper grid texture */}
  <div
    className="absolute inset-0 opacity-[0.03]
    bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
    bg-[size:40px_40px]"
  ></div>


  {/* MAIN */}
  <div className="relative z-10 flex-1 flex flex-col items-center overflow-hidden">

    {/* HEADER */}
    <div className="text-center mt-10">
      <h1 className="text-4xl font-serif font-bold">
        Andipedia
      </h1>

      <p className="text-gray-600 mt-1">
        The Free Medical Encyclopedia
      </p>

      <div className="mt-4">
        <SearchBar />
      </div>
    </div>



    {/* CIRCLE */}
    <div className="relative w-full max-w-[600px] h-[420px] sm:h-[600px] mt-10 ">

      <img
        src="/images/globe.jpg"
        alt="globe"
        className="
        absolute top-1/2 left-1/2
        w-48 h-48 sm:w-80 sm:h-80
        object-cover rounded-full
        shadow-2xl ring-8 ring-white
        -translate-x-1/2 -translate-y-1/2
        opacity-95
        "
      />

      {homeCourses.map((course, index) => {

  const angle =
    (index / homeCourses.length) * 2 * Math.PI;

  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  return (
    <div
  key={index}
  className="absolute text-center scale-90 sm:scale-100"
  style={{
    top:"50%",
    left:"50%",
    transform:
      `translate(-50%, -50%) translate(${x}px, ${y}px)`
  }}
>
  <CourseBubble course={course} />
</div>
  );
})}
    </div>

  </div>

</div>
  );
}