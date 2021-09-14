import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navigator from "./Navigator";
import Routes from "./Routes";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Navigator/>
        </div>
        <div className="content-main">
          <Routes/>
        </div>
      </div>
    </Router>
  );
}

export default App;
