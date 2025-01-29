export default function Stats({ item }) {
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
