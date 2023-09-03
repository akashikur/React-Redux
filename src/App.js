import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Component/NavBar";
import Home from "./Component/Home";
import History from "./Component/History";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/history" element={<History />}></Route>
      </Routes>
    </div>
  );
}

export default App;
