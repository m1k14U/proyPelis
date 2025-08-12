
import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [searching, setSearching] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searching.trim() === "") return;
    onSearch(searching);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input-mov"
        type="text"
        placeholder="Buscar Título de película o Serie..."
        value={searching}
        onChange={(e) => setSearching(e.target.value)}
      />
      <button className="boton-moderno" type="submit">Buscar</button>
    </form>
  );
}