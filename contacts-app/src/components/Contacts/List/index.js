import { useState } from "react";

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase())
    );
  });

  return (
    <div>
      <h1 className="center"> Contacts </h1>
      <input
        placeholder="Filter Contacts"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <ul className="list">
        {filtered.map((contact, i) => (
          <li key={i} className="list-item">
            <span>{contact.fullname}</span>
            <span>{contact.phone_number}</span>
          </li>
        ))}
      </ul>
          <p className="end"> Total Contact ({contacts.length})</p>
    </div>
  );
}

export default List;
