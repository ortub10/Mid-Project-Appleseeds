import { myContext } from "../../../../screen";
import { useContext } from "react";
import "./AddProduct.css";

const AddProduct = (props) => {
  const { projectsArr } = useContext(myContext);

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        {projectsArr.map((element) => {
          return <div>{element.name}</div>;
        })}
        <button onClick={() => props.setTrigger(false)}>Cancel</button>
      </div>
    </div>
  ) : (
    ""
  );
};

export default AddProduct;
