import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css'; // Assuming common styles are in App.css

// PUBLIC_INTERFACE
/**
 * Sidebar component for navigation.
 * Contains links to different sections of the RecipeHub application.
 */
function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        RecipeHub
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
              Recipe Browsing
            </NavLink>
          </li>
          <li>
            <NavLink to="/create" className={({ isActive }) => isActive ? 'active' : ''}>
              Recipe Creation
            </NavLink>
          </li>
          <li>
            <NavLink to="/auth" className={({ isActive }) => isActive ? 'active' : ''}>
              User Authentication
            </NavLink>
          </li>
          <li>
            <NavLink to="/share" className={({ isActive }) => isActive ? 'active' : ''}>
              Sharing Recipes
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
