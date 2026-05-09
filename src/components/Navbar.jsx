import { Link } from "react-router-dom";

export default function Navbar() {
return (
<header className="w-full bg-white border-b border-gray-300">

<div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between gap-4">

{/* LEFT — BRAND */}
<Link
to="/"
className="flex items-center gap-3 shrink-0"
>
<img
src="/images/stethoscope.jfif"
alt="MedWiki"
className="w-10 h-10 object-contain"
/>

<div className="leading-tight hidden sm:block">
<h1 className="font-serif text-xl">
Andipedia
</h1>

<p className="text-xs text-gray-600">
The Free Medical Encyclopedia
</p>
</div>
</Link>



{/* CENTER — SEARCH */}
<div className="flex-1 max-w-2xl">
<form className="flex">

<input
type="text"
placeholder="Search MedWiki"
className="
w-full
border
border-gray-400
px-4
py-2
text-sm
outline-none
focus:border-blue-600
"
/>

<button
type="submit"
className="
border
border-l-0
border-gray-400
px-5
text-sm
bg-gray-50
hover:bg-gray-100
"
>
Search
</button>

</form>
</div>



{/* RIGHT — ACTIONS */}
<div className="flex items-center gap-4 text-sm shrink-0">

<button className="text-blue-700 hover:underline hidden md:block">
Donate
</button>

<button className="text-blue-700 hover:underline">
Create account
</button>

<button className="text-blue-700 hover:underline">
Log in
</button>

</div>

</div>

</header>
);
}