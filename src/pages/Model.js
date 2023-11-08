import React, { useState } from "react";

function Model() {
  const [data, setData] = useState([
    { id: 1, name: "John", age: 25, city: "New York" },
    { id: 2, name: "Alice", age: 30, city: "Los Angeles" },
    { id: 3, name: "Bob", age: 22, city: "Chicago" },
  ]);

  return (
    <div className="App">
      <h1 className="text-3xl font-semibold mb-4">Sample Table</h1>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Age</th>
            <th className="px-4 py-2">City</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="border px-4 py-2">{item.id}</td>
              <td className="border px-4 py-2">{item.name}</td>
              <td className="border px-4 py-2">{item.age}</td>
              <td className="border px-4 py-2">{item.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Model;
