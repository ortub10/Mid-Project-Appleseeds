import { myContext } from "../../../../screen";
import { useContext, useEffect, useRef, useState } from "react";
import { useLocalStorage } from "../../../../../../hooks/useLocalStorage";
import "./update.css";

const Update = (props) => {
  const { projectsArr, setProjectsArr } = useContext(myContext);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  const [, setItem] = useLocalStorage();

  useEffect(() => {
    if (inputRef.current !== null) {
      inputRef.current.focus();
      inputRef.current.value = props.name;
    }
  }, [props.name]);

  useEffect(() => {
    setItem("arr", { arr: projectsArr });
  }, [projectsArr, setItem]);

  const handleUpdate = () => {
    const tempObj = projectsArr.find((element) => element.name === props.name);
    const tempCheck = projectsArr.find(
      (element) => element.name === inputValue
    );

    if (tempCheck === undefined || tempCheck.name === props.name) {
      const newProject = { ...tempObj, name: inputValue };
      const newProjectsArr = projectsArr.map((element) => {
        if (element.name === props.name) return newProject;
        return element;
      });
      setProjectsArr(newProjectsArr);
      props.setTrigger(false);
    } else {
      alert("name already exists ");
    }
  };

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter name"
          value={inputValue}
          onChange={(evt) => setInputValue(evt.target.value)}
        />

        <button
          className="add_btn btn"
          disabled={inputValue.length ? false : true}
          onClick={handleUpdate}
        >
          Update
        </button>

        <button
          className="cancel_btn btn"
          onClick={() => props.setTrigger(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Update;
