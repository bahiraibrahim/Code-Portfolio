/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./main.css";
import { myProjects } from "./myProjects";



const Main = () => {
  const [array, setArray] = useState(myProjects);
  const [currentActive, setCurrentActive] = useState("all");
  return (
    <main id="projects" className="flex">
      <section className="flex left-section">
        <button
          onClick={() => {
            setCurrentActive("all");
            setArray(myProjects)
          }}
          className={currentActive === "all" ? "active" : null}
        >
          All Projects
        </button>

        <button
          onClick={() => {
            setCurrentActive("react");
            const newArray = myProjects.filter((item) => {
              return item.category === "react"
            })
            setArray(newArray);
          }}
          className={currentActive === "react" ? "active" : null}
        >
          React
        </button>

        <button
          onClick={() => {
            setCurrentActive("angular");
            const newArray = myProjects.filter((item) => {
              return item.category === "Angular"
            })
            setArray(newArray);
          }}
          className={currentActive === "angular" ? "active" : null}
        >
          Angular
        </button>
        <button
          onClick={() => {
            setCurrentActive("backend");
            const newArray = myProjects.filter((item) => {
              return item.category === "back"
            })
            setArray(newArray);
          }}
          className={currentActive === "backend" ? "active" : null}
        >
          Back End
        </button>
      </section>

      <section className="flex right-section">
        {array.map((item) => {
          return (
            <article key={item.imgPath} className="card">
              <img width={266} src={item.imgPath} alt="" />
              <div style={{ width: "266px" }} className=" box">
                <h1 className="title">{item.projectTitle}</h1>
                <p className="sub-title">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Excepturi corrupti provident sint! Nemo obcaecati voluptatem
                  vitae omnis!
                </p>
                <div className="flex icons">
                  <a className="link flex" href={item.link} target="_blank">
                    more
                    <span
                      style={{ alignSelf: "end" }}
                      className="icon-arrow-right"
                    ></span>
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default Main;
