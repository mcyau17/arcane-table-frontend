import { useState } from "react";
import { searchCards } from "../api/scryfall";
import type { ScryfallCard } from "../api/scryfall";



export default function CardSearch() {
  const [query, setQuery] = useState("");            // text in search bar
  const [results, setResults] = useState([]);        // list of cards returned

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault();                              // stop page reload

    if (!query) return;                              // ignore empty search

    const cards = await searchCards(query);          // call Scryfall API
    setResults(cards);                               // update UI
  }

  return (
    <div className="p-4">
      {/* Search bar */}
      <form onSubmit={handleSearch} className="flex gap-2 mb-4">
        <input
          className="border p-2 flex-1"
          placeholder="Search a card e.g. Lightning Bolt"
          value={query}
          onChange={(e) => setQuery(e.target.value)} // update search text
        />

        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Search
        </button>
      </form>

      {/* Card results grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {results.map((card: ScryfallCard) => {
            const single = card.image_uris?.normal;
            const double = card.card_faces?.[0]?.image_uris?.normal;

            return (
                <div key={card.id}>
                <img
                    src={single ?? double}
                    alt={card.name}
                    className="rounded shadow"
                />
                <p className="mt-2 text-center">{card.name}</p>
                </div>
            );
        })}

      </div>
    </div>
  );
}
