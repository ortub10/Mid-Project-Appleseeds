import { myContext } from "../../screen";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import AddProject from "./components/addProject/addProject";
import Update from "./components/update/update";
import "./projects.css";

const Projects = () => {
  const { projectsArr, setProjectsArr } = useContext(myContext);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [buttonPopupUpdate, setButtonPopupUpdate] = useState(false);
  const [updateName, setUpdateName] = useState("");

  const handleDeleteProject = (name) => {
    const newProjectsArr = projectsArr.filter((item) => item.name !== name);
    setProjectsArr(newProjectsArr);
  };
  const handleUpdateProject = (name) => {
    setUpdateName(name);
    setButtonPopupUpdate(true);
  };

  return (
    <>
      <button className="add_new_btn" onClick={() => setButtonPopup(true)}>
        <i className="fa fa-plus-square"></i> &nbsp;Add New Project
      </button>
      <AddProject trigger={buttonPopup} setTrigger={setButtonPopup} />

      <div className="contain_projects">
        {projectsArr.map((project) => {
          return (
            <div className="project" key={project.name}>
              <NavLink to={`/projects/${project.name}`}>
                <div className="inner-project">
                  <h2>{project.name}</h2>
                  <p>Number of stocks: {project.stocks.length}</p>
                </div>
              </NavLink>

              <div className="contain_fas">
                <i
                  onClick={() => handleDeleteProject(project.name)}
                  className="fa fa-trash-o fa-2x"
                ></i>

                <i
                  onClick={() => handleUpdateProject(project.name)}
                  className="fa fa-edit  fa-2x"
                ></i>
              </div>
            </div>
          );
        })}
        <Update
          trigger={buttonPopupUpdate}
          name={updateName}
          setTrigger={setButtonPopupUpdate}
        />
      </div>
    </>
  );
};

export default Projects;
