import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from './Pages/Home'
import Blog from './Pages/Blog'
import Contacts from '././Pages/Contacts'
import Features from './Pages/Features'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {

  return (
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/features' element={<Features/>}/> 
        <Route path='/contacts' element={<Contacts/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
