import { useState } from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
// ];

export default function App() {
  const [item, setItem] = useState([]);
  function handleAtItems(item) {
    setItem((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItem((items) => item.filter((itema) => itema.id !== id));
  }

  function toogleItem(id) {
    setItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAtItems} />
      <PacakagingList
        item={item}
        onDeleteItem={handleDeleteItem}
        onToogle={toogleItem}
      />
      <Stats item={item} />
    </div>
  );
}

function Logo() {
  return <h1>Far away💅💅💅</h1>;
}

function Form({ onAddItems }) {
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

function PacakagingList({ item, onDeleteItem, onToogle }) {
  return (
    <div className="list">
      <ul>
        {item.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToogle={onToogle}
          />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onDeleteItem, onToogle }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => {
          onToogle(item.id);
        }}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.desc}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

function Stats({ item }) {
  if (!item.length)
    return (
      <p className="stats">
        <em>Start adding items to your packing list</em>
      </p>
    );

  const numItems = item.length;
  // let a = 0;
  // const numPacked = item.map((e) => (e.packed === true ? (a = a + 1) : null));
  // const packedPercentage = (a / item.length) * 100;
  // console.log(numPacked);
  const numPacked = item.filter((items) => items.packed).length;
  const packedPercentage = Math.round((numPacked / item.length) * 100);
  return (
    <footer className="stats">
      <em>
        {packedPercentage === 100
          ? "You have packed everything! Nice job!"
          : `You have ${numItems} itmes on your list and you have already packed
        ${numPacked} (${packedPercentage}%)`}
      </em>
    </footer>
  );
}
