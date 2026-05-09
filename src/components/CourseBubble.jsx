import { Link } from "react-router-dom";

export default function CourseBubble({ course }) {
  return (
    <Link
      to={`/course/${course.slug}`}
      className="text-center hover:scale-110 transition"
    >
      <h2 className="text-blue-700 font-semibold hover:underline">
        {course.name}
      </h2>
      <p className="text-sm text-gray-600">
        {course.topics} topics
      </p>
    </Link>
  );
}