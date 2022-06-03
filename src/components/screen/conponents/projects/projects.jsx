import { myContext } from "../../screen";
import { useContext } from "react";
import "./projects.css";
import { NavLink } from "react-router-dom";
const Projects = () => {
  const { projectsArr } = useContext(myContext);

  return (
    <>
      <button>Add New Project</button>
      {projectsArr.map((item) => {
        return (
          <NavLink to={`../projects/${item.name}`} key={item.name}>
            <div className="project">
              <h2>{item.name}</h2>
              <p>number of products: {item.pro.length}</p>
            </div>
          </NavLink>
        );
      })}
    </>
  );
};

export default Projects;
