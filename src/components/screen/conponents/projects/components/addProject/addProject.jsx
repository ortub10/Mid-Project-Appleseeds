import { myContext } from "../../../../screen";
import { useContext, useEffect, useState } from "react";
import "./addProject.css";
import { useLocalStorage } from "../../../../../../hooks/useLocalStorage";

const AddProject = (props) => {
  const { projectsArr, setProjectsArr } = useContext(myContext);
  const [inputValue, setInputValue] = useState("");

  const [, setItem] = useLocalStorage();

  useEffect(() => {
    setItem("arr", { arr: projectsArr });
  }, [projectsArr, setItem]);

  const add = () => {
    const tempObj = projectsArr.find((element) => element.name === inputValue);

    if (tempObj === undefined) {
      const newProject = {
        name: inputValue,
        stocks: [],
      };

      setProjectsArr((prev) => [...prev, newProject]);
      props.setTrigger(false);
    } else {
      alert("name already exists ");
    }
  };

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <input
          type="text"
          placeholder="Enter name"
          value={inputValue}
          onChange={(evt) => setInputValue(evt.target.value)}
        />

        <button onClick={add} disabled={inputValue.length ? false : true}>
          Add
        </button>

        <button onClick={() => props.setTrigger(false)}>Cancel</button>
      </div>
    </div>
  ) : (
    ""
  );
};

export default AddProject;
