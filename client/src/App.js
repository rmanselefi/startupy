import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

const Header = () => <h2>Header</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const Survey = () => <h2>Survey</h2>;
const Landing = () => <h2>Landing</h2>;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Route path="/" component={Landing} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
