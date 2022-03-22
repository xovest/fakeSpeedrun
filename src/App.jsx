import './App.css';
import { BrowserRouter as Router, Switch, Route, Routes, BrowserRouter } from "react-router-dom";
import Dogs from "./pages/Dogs"
import Cats from "./pages/Cats"
import Sheeps from "./pages/Sheeps"
import Goats from "./pages/Goats"
import Navbar from './components/Navbar';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Dogs />} />
        <Route path='/cats' element={<Cats />} />
        <Route path='/sheeps' element={<Sheeps />} />
        <Route path='/goats' element={<Goats/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
