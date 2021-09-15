import { Route, Switch } from "react-router-dom";
import CustomHook from "./components/customHook/CustomHook";
import FetchWithUse from "./components/fetchwithuseEffect/FetchWithUse";
import UseCallback from "./components/useCallback/UseCallback";
import UseContext from "./components/useContext/UseContext";
import UseEffect from "./components/useEffect/UseEffect";
import UseMemo from "./components/useMemo/UseMemo";
import UseReducer from "./components/useReducer/UseReducer";
import UseRedWithUseCont from "./components/useRedWithUseCont/UseRedWithUseCont";
import UseRef from "./components/useRef/UseRef";
import UseState from "./components/useState/UseState";

function Routes() {
  return (
    <Switch>
      <Route path="/useState">
        <UseState />
      </Route>
      <Route path="/useEffect">
        <UseEffect/>
      </Route>
      <Route path="/fetch-with-useEffect">
        <FetchWithUse/>
      </Route>
      <Route path="/useContext">
        <UseContext/>
      </Route>
      <Route path="/useReducer">
        <UseReducer/>
      </Route>
      <Route path="/useReducer-with-useContext">
        <UseRedWithUseCont/>
      </Route>
      <Route path="/useCallback">
        <UseCallback/>
      </Route>
      <Route path="/useMemo">
        <UseMemo/>
      </Route>
      <Route path="/useRef">
        <UseRef/>
      </Route>
      <Route path="/custo-hooks">
        <CustomHook/>
      </Route>
    </Switch>
  );
}

export default Routes;
