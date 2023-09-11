import { useState } from "react";
export default function Form({ onAddWishlistItem }) {
  const [input, setInput] = useState("");

  //   function handleInput(e) {
  //     setInput(e.target.value);
  //   }

  function handleSubmit(e) {
    e.preventDefault();
    // aggiungere il valore del campo input nell'array wishlist
    onAddWishlistItem(input);
    setInput("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Inserisci un regalo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        required
      />
      <button className="btn">Aggiungi</button>
    </form>
  );
}
