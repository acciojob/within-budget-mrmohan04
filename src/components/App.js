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

// Function to check if purchases are within budget
function withinBudget(purchases, budget) {
  return purchases.filter(purchase => purchase.price <= budget);
}

export { withinBudget };
