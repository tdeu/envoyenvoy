import { useState } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import About from './routes/About us/About';
import Home from './routes/Home/Home';
import Racer from './routes/Racer/Racer';

function App() {

  const [selectedLanguage, setSelectedLanguage] =  useState(0);


  var setlanguage  =(id)=>{
    setSelectedLanguage(id);
  }
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home setindex={setlanguage} selectedLanguage={selectedLanguage}/>}/>
      <Route path='/become-a-racer' element={<Racer setindex={setlanguage} selectedLanguage={selectedLanguage}/>}/>
      <Route path='/about' element={<About setindex={setlanguage} selectedLanguage={selectedLanguage}/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
