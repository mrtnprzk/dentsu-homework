import React from "react";

const Selector = ({ name, data, handler }) => {
  return (
    <div className="flex justify-between bg-purple-300 p-2 m-2 rounded w-40">
      <label htmlFor={name}>{name.charAt(0).toUpperCase() + name.slice(1)}:</label>
      <select id={name} onChange={(e) => handler(e)} className="rounded">
        {data.map((d) => (
          <option key={d.value} value={d.value}>
            {d.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selector;
