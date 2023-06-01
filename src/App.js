
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './home/home';

import Contact from './contact/contact';
import About from './about/about';
import Services from './services/services';


function App() {
  return (
    <div className="App">
      {/* <Home/> */}
     
      <Routes>
        <Route path="/" element={<Home/>}>/</Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/service' element={<Services/>}></Route>
     </Routes>  
      
    </div>
  );
}

export default App;
