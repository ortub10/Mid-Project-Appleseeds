import { myContext } from "../../screen";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import AddProject from "./components/addProject/addProject";
import "./projects.css";
const Projects = () => {
  const { projectsArr } = useContext(myContext);
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <>
      <button onClick={() => setButtonPopup(true)}>Add New Project</button>
      <AddProject trigger={buttonPopup} setTrigger={setButtonPopup} />
      {projectsArr.map((item) => {
        return (
          <NavLink to={`../projects/${item.name}`} key={item.name}>
            <div className="project">
              <h2>{item.name}</h2>
              <p>number of products: {item.stocks.length}</p>
            </div>
          </NavLink>
        );
      })}
    </>
  );
};

export default Projects;
