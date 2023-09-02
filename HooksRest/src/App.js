import './App.css';
import React from 'react';
import CompA from './UseContext/CompA';
import CompB from './UseContext/CompB';
import Simple from './UseReducer/Simple';
import Complex from './UseReducer/Complex';
import Multiple from './UseReducer/Multiple';
export const User = React.createContext()
export const Channel = React.createContext()

function App() {
  return (
    <div className="App">
   <User.Provider value={"Anim"}>
    <Channel.Provider value={"Byte Fetch"}>
      <CompA/>
    </Channel.Provider>
  </User.Provider>   
  
  <User.Provider value={"Shamura"}>
    <Channel.Provider value={"Code Sorcerer"}>
      <CompB/>
    </Channel.Provider>
  </User.Provider>

  <Simple/>
  <Complex/>
  <Multiple/>
    </div>
  );
}

export default App;
