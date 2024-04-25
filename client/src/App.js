import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import {Routes,Route} from "react-router-dom"

function App() {
  return (
  <>
    <Header />
   
    <Routes>
      <Route path="/" element={<Login /> } />
      <Route path="/register" element={<Register /> } />
      <Route path="/dashboard" element={<Dashboard /> } />
    </Routes>
    
  </>
  );
}

export default App;
