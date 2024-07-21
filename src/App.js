// import { Routes, Route } from "react-router-dom";
import "./App.css";
import Register from "./components/Register";
import Searchpage from "./pages/Searchpage.page";
function App() {
  return (
    <div className="App">
      <Searchpage />
    </div>
  );
}

export default App;
// <Routes>
//       {" "}
//       <Route path="/" element={<Login />} />
//       <Route path="/signup" element={<Signup />} />
//     </Routes>
