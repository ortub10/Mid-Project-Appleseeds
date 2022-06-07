import { myContext } from "../../screen";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import AddProject from "./components/addProject/addProject";
import "./projects.css";

const Projects = () => {
  const { projectsArr, setProjectsArr } = useContext(myContext);
  const [buttonPopup, setButtonPopup] = useState(false);

  const handleDeleteProject = (name) => {
    const newProjectsArr = projectsArr.filter((item) => item.name !== name);
    setProjectsArr(newProjectsArr);
  };

  return (
    <>
      <button onClick={() => setButtonPopup(true)}>Add New Project</button>
      <AddProject trigger={buttonPopup} setTrigger={setButtonPopup} />
      {projectsArr.map((project) => {
        return (
          <div className="project" key={project.name}>
            <NavLink to={`/projects/${project.name}`}>
              <div className="inner-project">
                <h2>{project.name}</h2>
                <p>number of products: {project.stocks.length}</p>
              </div>
            </NavLink>

            <i
              onClick={() => handleDeleteProject(project.name)}
              className="fa fa-trash-o fa-2x"
            ></i>
          </div>
        );
      })}
    </>
  );
};

export default Projects;
