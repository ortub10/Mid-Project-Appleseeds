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
      {projectsArr.map((item) => {
        return (
          <div className="project" key={item.name}>
            <NavLink to={`../projects/${item.name}`}>
              <div className="inner-project">
                <h2>{item.name}</h2>
                <p>number of products: {item.stocks.length}</p>
              </div>
            </NavLink>
            <i
              onClick={() => handleDeleteProject(item.name)}
              className="fa fa-trash-o fa-2x"
            ></i>
          </div>
        );
      })}
    </>
  );
};

export default Projects;
