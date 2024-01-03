import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";
import RecipeForm from "./components/RecipeForm";
import "./App.css"; // Assuming you have some CSS for styling

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <header>
          <h1>Recipe Management App</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<RecipeList />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
            <Route path="/add-recipe" element={<RecipeForm />} />
            {/* Additional routes can be added here */}
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
