import React from "react";
import './../styles/App.css';

const App = () => {
  // Do not remove the main div
  return (
    <div id="main">
    </div>
  )
}

export default App;

// function to filter items within budget
export function withinBudget(purchases, budget) {
  return purchases.filter(item => item.price <= budget);
}
