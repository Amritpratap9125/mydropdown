import React, { useState, useEffect, useRef } from "react";
import "./App.css";


function App() {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="app_nav">
      <div className="app_dropdown" ref={dropdownRef}>
        <button onClick={toggleDropdown}>Dropdown</button>
        {showDropdown && (
          <ul className="dropdown-menu">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;

