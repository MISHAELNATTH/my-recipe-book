//import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Topbar from './components/Topbar';
import './App.css';
import HomePage from './pages/HomePage';
import AddRecipe from './pages/AddRecipe';
import RecipeDetails from './pages/RecipeDetails';
import FavoritesPage from './pages/FavoritesPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
    
        <div className="App">
          <Topbar/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/add' element={<AddRecipe/>} />
            <Route path='/recipe/:id' element={<RecipeDetails/>} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/edit/:id" element={<AddRecipe isEdit={true} />} />

            <Route path="*" element={<NotFound />} /> 
           
          </Routes>
        </div>
     
    </Router>
    
  );
}

export default App;