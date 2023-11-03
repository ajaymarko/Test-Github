import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navigationMapping = ["home", "about", "contact", "career"];

  const startCase = (text) => {
    return text.slice(0, 1).toUpperCase() + text.slice(1);
  };

  return (
    <div>
      <ul style={{ display: "flex" }}>
        {navigationMapping.map((item, index) => {
          return (
            <li
              key={`${item}__${index}`}
              style={{
                listStyleType: "none",
                padding: "4px 20px",
                textDecoration: "none",
              }}
            >
              <Link
                to={`/${item}`}
                style={{
                  textDecoration: "none",
                }}
              >
                {startCase(item)}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
