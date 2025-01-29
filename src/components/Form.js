import { useState } from "react";

export default function Form({ onAddItems }) {
  const [desc, setDesc] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!desc) return;
    const newItem = { id: Date.now(), desc, quantity, packed: false };
    onAddItems(newItem);
    console.log(newItem);

    setDesc("");
    setQuantity(1);
  }

  return (
    <>
      <form className="add-form" onClick={handleSubmit}>
        <h3>What do you need for you trip?🦍🦍🦍</h3>
        <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
          {/* + is here, to convert string to number */}
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Items..."
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button>Add</button>
      </form>
      {/* <PacakagingList /> */}
    </>
  );
}
