import { Route, Switch } from "react-router-dom";
import FetchWithUse from "./components/FetchWithUse";
import UseContext from "./components/UseContext";
import UseEffect from "./components/UseEffect";
import UseReducer from "./components/UseReducer";
import UseState from "./components/UseState";

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
    </Switch>
  );
}

export default Routes;
