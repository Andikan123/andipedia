import { useState } from "react";
import { useNavigate } from "react-router-dom";
import homeCourses from "../data/homeData";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  // FILTER COURSES
  const filteredCourses = homeCourses.filter((course) =>
    course.name.toLowerCase().includes(query.toLowerCase())
  );

  // SEARCH BUTTON
  const handleSearch = () => {
    const foundCourse = homeCourses.find(
      (course) =>
        course.name.toLowerCase() === query.toLowerCase()
    );

    if (foundCourse) {
      navigate(`/course/${foundCourse.slug}`);
      setQuery("");
    } else {
      alert("Course not found");
    }
  };

  // CLICK SUGGESTION
  const handleSuggestionClick = (course) => {
    navigate(`/course/${course.slug}`);
    setQuery("");
  };

  return (
    <div className="relative flex justify-center w-full">
      <div className="w-full max-w-xl relative">

        {/* SEARCH BAR */}
        <div className="flex">
          <input
            type="text"
            placeholder="Search NurseRidge..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="
              w-full
              border
              border-gray-300
              px-4
              py-3
              text-sm
              bg-white
              rounded-l-2xl
              focus:outline-none
              focus:border-blue-500
              shadow-sm
              text-gray-800
            "
          />

          <button
            onClick={handleSearch}
            className="
              px-5
              py-3
              bg-blue-600
              text-white
              text-sm
              rounded-r-2xl
              hover:bg-blue-700
              transition
            "
          >
            Search
          </button>
        </div>

        {/* SUGGESTIONS */}
        {query && (
          <div
            className="
              absolute
              top-16
              left-0
              w-full
              bg-white
              border
              border-gray-200
              rounded-2xl
              shadow-2xl
              overflow-hidden
              z-50
            "
          >
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course, index) => (
                <div
                  key={index}
                  onClick={() => handleSuggestionClick(course)}
                  className="
                    px-4
                    py-3
                    cursor-pointer
                    hover:bg-blue-50
                    transition
                    border-b
                    border-gray-100
                    last:border-b-0
                    flex
                    items-center
                    justify-between
                  "
                >
                  <span className="text-sm font-medium text-gray-800">
                    {course.name}
                  </span>

                  <span className="text-xs text-gray-400">
                    {course.topics} topics
                  </span>
                </div>
              ))
            ) : (
              <div className="px-4 py-3 text-sm text-gray-500">
                No courses found
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}