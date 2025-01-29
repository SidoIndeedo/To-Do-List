import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PacakagingList from "./PacakagingList";
import Stats from "./Stats";

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

  function clearList() {
    const confirmed = window.confirm(
      "Are you sure you wanna delete all the items?"
    );
    if (confirmed) setItem([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAtItems} />
      <PacakagingList
        item={item}
        onDeleteItem={handleDeleteItem}
        onToogle={toogleItem}
        onClear={clearList}
      />
      <Stats item={item} />
    </div>
  );
}
