import { createContext, useEffect, useState } from "react";
import Header from "./conponents/header/header";
import "./screen.css";
import { Route } from "react-router-dom";
import Home from "./conponents/home/home";
import DetailesProduct from "./conponents/detailesProduct/detailesProduct";
import Projects from "./conponents/projects/projects";
import { Switch } from "react-router-dom";
import ListProject from "./conponents/projects/components/listProject/listProject";

export const myContext = createContext();

const Screen = () => {
  const [isLoad, setIsLoad] = useState(true);
  const [productsData, setProductsData] = useState([]);
  const [projectsArr, setProjectsArr] = useState([]);

  useEffect(() => {
    const callApi = async () => {
      try {
        const response = await fetch(
          "https://financialmodelingprep.com/api/v3/nasdaq_constituent?apikey=90115d197c5821905e19a65e7c1b1ea6"
        );
        const data = await response.json();
        setProductsData(data);
        setIsLoad(false);
      } catch (e) {
        console.log(e);
      }
    };
    callApi();
  }, []);
  return (
    <>
      {isLoad ? (
        <div className="spinner"></div>
      ) : (
        <myContext.Provider
          value={{ productsData, projectsArr, setProjectsArr }}
        >
          <div className="screen">
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/:symbol" component={DetailesProduct} />
              <Route
                exact
                path="/projects/:nameProject"
                component={ListProject}
              />
              <Route
                exact
                path="/projects/:nameProject/:symbol"
                component={DetailesProduct}
              />
            </Switch>
          </div>
        </myContext.Provider>
      )}
    </>
  );
};

export default Screen;
