import { navLink } from "../../constants/constant";
import { useState, useEffect } from "react";
import "./header.css";


const NanLink = () => (
  <> {
    navLink.map((link) => {
      const title = link[0].toUpperCase() + link.slice(1)
      return (
        <li><a href={`#${link}`}>{title}</a></li>
      )
    })
  }</>
)

const Header = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  const [showModal, setShowModal] = useState(false);
  return (
    <header className="flex">
      <button
        onClick={() => {
          setShowModal(true);
        }}
        className="menu icon-menu flex"
      ></button>
      <div />
      <nav>
        <ul className="flex">
          <NanLink />
        </ul>
      </nav>
      <button
        onClick={() => {
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );

          setTheme(localStorage.getItem("currentMode"));
        }}
        className="mode flex "
      >
        {theme === "dark" ? (
          <span className="icon-moon-o" />
        ) : (
          <span className="icon-sun" />
        )}
      </button>
      {showModal && (
        <div className="fixed">
          <ul className="modal">
            <li>
              <button
                className="icon-close"
                onClick={() => {
                  setShowModal(false);
                }}
              />
            </li>
            <NanLink />
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
