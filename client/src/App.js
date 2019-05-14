import React from 'react';
import './App.css';
import Main from "../src/components/main/Main"
import Navigation from './components/navigation/Navigation';
// import MainManu from './components/mainManu/MainManu'


class App extends React.Component {
  render() {
    return (
      <div>
        <Main />
        <Navigation />
        {/* <MainManu /> */}
      </div>
    );
  }
}

export default App;
