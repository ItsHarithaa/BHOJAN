import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuPage from './pages/MenuPage'; 



function App() {
  return (
    <Router>
      <Routes>
      
        <Route path="/Menu" element={<MenuPage />} /> 
        
      </Routes>
    </Router>
  );
}

export default App;
