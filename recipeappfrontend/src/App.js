import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import RecipeBrowsingPage from './pages/RecipeBrowsingPage';
import RecipeCreationPage from './pages/RecipeCreationPage';
import UserAuthenticationPage from './pages/UserAuthenticationPage';
import RecipeSharingPage from './pages/RecipeSharingPage';

// PUBLIC_INTERFACE
/**
 * Main application component for RecipeHub.
 * Sets up the overall layout including the sidebar and routing for different pages.
 */
function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<RecipeBrowsingPage />} />
            <Route path="/create" element={<RecipeCreationPage />} />
            <Route path="/auth" element={<UserAuthenticationPage />} />
            <Route path="/share" element={<RecipeSharingPage />} />
            {/* Default fallback or a 404 page can be added here */}
            <Route path="*" element={<RecipeBrowsingPage />} /> 
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
