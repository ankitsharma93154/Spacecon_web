import React, { useState, useEffect } from "react";

const Navbar = ({ openCart }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Function to handle smooth scrolling
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(targetId); // Update active link
      setIsOpen(false); // Close mobile menu
    }
  };

  // Function to highlight the active section when scrolling
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ["home", "shop", "about", "contact"];
      for (let section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          element.getBoundingClientRect().top <= window.innerHeight / 2 &&
          element.getBoundingClientRect().bottom > window.innerHeight / 2
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  return (
    <nav className="navbar" href="#home">
      <div className="logo">🚀 Space Merch</div>

      {/* Hamburger Menu (Mobile) */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <div className={isOpen ? "bar open" : "bar"}></div>
        <div className={isOpen ? "bar open" : "bar"}></div>
        <div className={isOpen ? "bar open" : "bar"}></div>
      </div>

      {/* Navigation Links */}
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        {["home", "shop", "about", "contact"].map((section) => (
          <li key={section}>
            <a
              href={`#${section}`}
              className={activeSection === section ? "active" : ""}
              onClick={(e) => handleScroll(e, section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        ))}
        <li>
          <button className="cart-btn" onClick={openCart}>
            🛒 Cart
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
