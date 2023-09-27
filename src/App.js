import "./assets/css/app.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" Component={About}></Route>
          <Route path="/experience" Component={About}></Route>
          <Route path="/portofolio" Component={About}></Route>
          <Route path="/contact" Component={About}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
