import React from "react";
import './../styles/App.css';

const App = () => {
  // Sample data with items and their prices
  const items = [
    { name: "Laptop", price: 1200 },
    { name: "Phone", price: 800 },
    { name: "Headphones", price: 150 },
    { name: "Keyboard", price: 80 },
    { name: "Mouse", price: 50 }
  ];

  // Budget threshold
  const budget = 500;

  return (
    <div>
      <h1>Within Budget</h1>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index} style={{ color: item.price > budget ? 'red' : 'green' }}>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>{item.price > budget ? 'Over Budget' : 'Within Budget'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
