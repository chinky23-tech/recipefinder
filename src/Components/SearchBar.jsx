import { useState } from "react";
import Input from "./ui/Input";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  async function handleSearch() {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
    const data = await res.json();
    onSearch(data.meals || []);
  }

  return (
    <div className="flex justify-center mt-20 gap-2">
      <input 
      className="border p-2 rounded"
        placeholder="Search recipes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch} className="btn btn-primary">
        Search
      </button>
    </div>
  );
}

export default SearchBar;
