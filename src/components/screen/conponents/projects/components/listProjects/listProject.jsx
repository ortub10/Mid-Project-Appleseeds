import { useContext } from "react";
import { myContext } from "../../../../screen";
import { NavLink } from "react-router-dom";
import "./listProject.css";
const ListProject = ({
  match: {
    params: { nameProject },
  },
}) => {
  const { projectsArr } = useContext(myContext);
  const project = projectsArr.find((item) => item.name === nameProject);
  return (
    <>
      <div className="table">
        <div className="header">Symbol</div>
        <div className="header">Name</div>
        <div className="header">sector</div>
        <div className="header">subSector</div>
        <div className="header">headQuarter</div>
        <div className="header">Type</div>
      </div>
      {project.pro.map((product) => {
        return (
          <NavLink
            to={`./${nameProject}/${product.symbol}`}
            key={product.symbol}
          >
            <div className="table">
              <div>{product.symbol}</div>
              <div>{product.name}</div>
              <div>{product.sector}</div>
              <div>{product.subSector}</div>
              <div>{product.headQuarter}</div>
              <div>Stock</div>
            </div>
          </NavLink>
        );
      })}
    </>
  );
};

export default ListProject;
