import React, {useContext} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import {useMediaQuery} from "./../../hooks/useMediaQuery";

export default function StartupProject() {
  // function openProjectInNewWindow(url) {
  //   var win = window.open(url, "_blank");
  //   win.focus();
  // }
  const {isDark} = useContext(StyleContext);
  const isDesktopOrLaptop = useMediaQuery("(min-width: 1224px)");
  const isBigScreen = useMediaQuery("(min-width: 1824px)");
  const isTabletOrMobile = useMediaQuery("(max-width: 1224px)");

  if (!bigProjects.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {bigProjects.subtitle}
          </p>
          <div className="startup-projects-main">
            <div
              className="startup-project-text"
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                flexWrap: "wrap"
              }}
            >
              {bigProjects.projects.map(project => {
                return (
                  <div
                    className="big-project-div-container"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      margin: 30
                    }}
                  >
                    <h3>{project.name}</h3>
                    <p
                      style={{textAlign: "center", fontSize: "13px"}}
                      className={
                        isDark
                          ? "dark-mode project-subtitle"
                          : "subTitle project-subtitle"
                      }
                    >
                      {project.description}
                    </p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={project.link ? {} : {pointerEvents: "none"}}
                    >
                      {project.image ? (
                        <img
                          alt="Ariel's Projects"
                          style={{
                            borderRadius: "20px",
                            // minHeight: 170,
                            margin: 20,
                            height: "auto",
                            maxWidth: "100%",
                            // minWidth: "200px",
                            objectFit: "cover",
                            boxShadow: `rgba(0, 0, 0, 0.35) 0px 5px 15px`
                          }}
                          src={project.image}
                        ></img>
                      ) : (
                        <video
                          autoPlay={true}
                          // className="project-video"
                          style={{
                            maxWidth: "100%",
                            margin: 20,
                            height: "auto",
                            width: "450px",
                            borderRadius: "20px",
                            // maxWidth: 450,
                            boxShadow: `rgba(0, 0, 0, 0.35) 0px 5px 15px`
                          }}
                        >
                          <source src={project.video} type="video/mp4"></source>
                        </video>
                      )}
                    </a>
                  </div>
                );
              })}
            </div>
            {/* <div className="startup-project-image"></div> */}
          </div>
        </div>
      </div>
    </Fade>
  );
}
