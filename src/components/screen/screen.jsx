import { createContext, useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Header from "./conponents/header/header";
import Home from "./conponents/home/home";
import DetailesProduct from "./conponents/detailesProduct/detailesProduct";
import Projects from "./conponents/projects/projects";
import ListProject from "./conponents/projects/components/listProjects/listProject";
import "./screen.css";
import { fetchNasdaqStocks } from "../../api/financialModel/financialModel";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export const myContext = createContext();

const Screen = () => {
  const [nasdaqStocks, setNasdaqStocks] = useState({
    pending: true,
    data: [],
    error: "",
  });

  const [getItem] = useLocalStorage();
  const [projectsArr, setProjectsArr] = useState(
    getItem("arr") === null ? [] : getItem("arr").arr
  );

  useEffect(() => {
    setNasdaqStocks(() => {
      return { pending: true, data: [], error: "" };
    });

    async function fetchAllNasdaqStocks() {
      try {
        const nasdaqStocks = await fetchNasdaqStocks();
        setNasdaqStocks({ pending: false, data: nasdaqStocks, error: "" });
      } catch (error) {
        setNasdaqStocks({ pending: false, data: [], error: "" });
      }
    }
    fetchAllNasdaqStocks();
  }, []);

  if (nasdaqStocks.pending) {
    return <div className="spinner"></div>;
  }

  return (
    <myContext.Provider
      value={{ productsData: nasdaqStocks.data, projectsArr, setProjectsArr }}
    >
      <div className="screen">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/:symbol" component={DetailesProduct} />
          <Route exact path="/projects/:nameProject" component={ListProject} />
          <Route
            exact
            path="/projects/:nameProject/:symbol"
            component={DetailesProduct}
          />
        </Switch>
      </div>
    </myContext.Provider>
  );
};

export default Screen;
