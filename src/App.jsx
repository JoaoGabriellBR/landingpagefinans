import logo from './logo.svg';
import React from 'react';
import Header from './components/header'
import FirstSection from './components/firstsection';
import SecondSection from './components/secondsection';
import ThirdSection from './components/thirdsection';
import FourthSection from './components/fourthsection';
import FifthSection from './components/fifthsection';
import Rodape from './components/footer';


function App() {
  return (
    <div>
      <Header/>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <FifthSection/>
      <Rodape/>
    </div>
  );
}

export default App;
