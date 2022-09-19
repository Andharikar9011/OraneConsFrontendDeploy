
import { Route, Routes } from "react-router-dom";
import Page1 from "./pages/Page1/index.jsx";
import Page2  from "./pages/Page2/index.jsx";


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Page1 />}></Route>
      <Route path='/page2' element={<Page2 />}></Route>
    </Routes>
      
    </div>
  );
}

export default App;
