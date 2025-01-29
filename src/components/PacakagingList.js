import { useState } from "react";
import Item from "./Item";

export default function PacakagingList({
  item,
  onDeleteItem,
  onToogle,
  onClear,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItem;

  if (sortBy === "input") sortedItem = item;

  if (sortBy === "description")
    sortedItem = item.slice().sort((a, b) => a.desc.localeCompare(b.desc));

  if (sortBy === "packed")
    sortedItem = item
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItem.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToogle={onToogle}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>

        {item.length === 0 ? null : (
          <button onClick={onClear}>Clear list</button>
        )}
      </div>
    </div>
  );
}
