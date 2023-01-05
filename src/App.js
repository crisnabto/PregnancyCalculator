// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Context from './context/Context';

function App() {
  const [method, setMethod] = useState("Last period");
  return (
    <Context.Provider
      value = { {
        method,
        setMethod,
      }}
    >
      <div>
        <Header></Header>
        <Main></Main>
      </div>
    </Context.Provider>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    
  );
}

export default App;
