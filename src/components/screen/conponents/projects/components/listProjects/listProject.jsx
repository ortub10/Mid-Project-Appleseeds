import { useContext, useEffect } from "react";
import { myContext } from "../../../../screen";
import { NavLink } from "react-router-dom";
import "./listProject.css";
import { useLocalStorage } from "../../../../../../hooks/useLocalStorage";
const ListProject = ({
  match: {
    params: { nameProject },
  },
}) => {
  const { projectsArr, setProjectsArr } = useContext(myContext);
  const project = projectsArr.find((item) => item.name === nameProject);

  const [, setItem] = useLocalStorage();
  useEffect(() => {
    setItem("arr", { arr: projectsArr });
  }, [projectsArr, setItem]);

  const handleDeleteProduct = (product) => {
    const newArrSrock = project.stocks.filter(
      (item) => item.symbol !== product.symbol
    );

    const newObjProject = {
      name: project.name,
      stocks: newArrSrock,
    };

    const newProjectsArr = projectsArr.map((item) => {
      if (item.name === project.name) return newObjProject;
      return item;
    });

    setProjectsArr(newProjectsArr);
  };

  return (
    <>
      <h1 className="header_project">{nameProject}</h1>
      <div>
        <div className="table">
          <div className="header">Symbol</div>
          <div className="header">Name</div>
          <div className="header">sector</div>
          <div className="header">subSector</div>
          <div className="header">headQuarter</div>
          <div className="header">Type</div>
          <div className="header">Delete</div>
        </div>

        {project.stocks.map((product) => {
          return (
            <div key={product.symbol} className="table">
              <NavLink
                className="table"
                to={`/projects/${nameProject}/${product.symbol}`}
              >
                <div>{product.symbol}</div>
                <div>{product.name}</div>
                <div>{product.sector}</div>
                <div>{product.subSector}</div>
                <div>{product.headQuarter}</div>
                <div>Stock</div>
              </NavLink>
              <div>
                <i
                  onClick={() => handleDeleteProduct(product)}
                  className="fa fa-trash-o fa-2x"
                ></i>
              </div>
            </div>
          );
        })}

        <NavLink to="/projects">
          <button className="back">
            Back <i className="fa fa-angle-double-left"></i>
          </button>
        </NavLink>
      </div>
    </>
  );
};

export default ListProject;
