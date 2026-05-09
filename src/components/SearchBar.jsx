export default function SearchBar() {
  return (
   <div className="flex justify-center">
  <input
    type="text"
    placeholder="Search Andipedia"
    className="border border-gray-300 px-4 py-2 w-80 text-sm focus:outline-none focus:border-blue-500 bg-white"
  />

  <button className="px-4 py-2 bg-blue-600 text-white text-sm border border-blue-600 hover:bg-blue-700">
    Search
  </button>
</div>
  );
}