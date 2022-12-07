import React from 'react';
//global style
import GlobalStyle from './components/GlobalStyle';
//import pages
import AboutUs from './pages/AboutUs';
import Nav from './components/Nav';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import MovieDetail from './pages/MovieDetail';
//router
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path='/' exact element={<AboutUs/>}/>
        <Route path='/aboutus' exact element={<AboutUs/>}/>
        <Route path='/ourwork' exact element={<OurWork/>}/>

        <Route path='/work/:id' exact element={<MovieDetail/>}/>
        
        <Route path='/contactus' exact element={<ContactUs/>}/>
      </Routes>
    </div>
  );
}

export default App;
