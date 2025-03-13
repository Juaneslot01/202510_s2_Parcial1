import Login from "./Components/Login";
import Home from "./Components/Home";
import Detail from "./Components/Detail";
import './App.css';
import { BrowserRouter,Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path='/Detail' element={<Detail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
