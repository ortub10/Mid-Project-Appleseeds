import { myContext } from "../../../../screen";
import { useContext, useEffect, useState } from "react";
import AddProject from "../../../projects/components/addProject/addProject";
import { useLocalStorage } from "../../../../../../hooks/useLocalStorage";
import "./AddProduct.css";

const AddProduct = (props) => {
  const { productsData, projectsArr, setProjectsArr } = useContext(myContext);
  const [buttonPopup, setButtonPopup] = useState(false);

  const product = productsData.find((item) => item.symbol === props.symbol);

  const [, setItem] = useLocalStorage();

  useEffect(() => {
    setItem("arr", { arr: projectsArr });
  }, [projectsArr, setItem]);

  const addToProject = (element) => {
    const tempItem = element.stocks.find(
      (item) => item.symbol === props.symbol
    );

    if (tempItem === undefined) {
      const newElement = { ...element };
      newElement.stocks.push(product);
      const newProjectsArr = projectsArr.map((item) => {
        if (item.name === element.name) return newElement;
        return item;
      });

      setProjectsArr(newProjectsArr);
      props.setTrigger(false);
    } else {
      alert("Stock already exits in this project");
    }
  };

  return props.trigger ? (
    <div className="popup_product">
      <div className="popup-inner_product">
        <p>In which project to save?</p>
        {projectsArr.map((element) => {
          return (
            <div
              onClick={() => addToProject(element)}
              className="project_title"
              key={element.name}
            >
              {element.name}
            </div>
          );
        })}

        <button onClick={() => setButtonPopup(true)}>Add New Project </button>
        <AddProject trigger={buttonPopup} setTrigger={setButtonPopup} />
        <button onClick={() => props.setTrigger(false)}>Cancel</button>
      </div>
    </div>
  ) : (
    ""
  );
};

export default AddProduct;
