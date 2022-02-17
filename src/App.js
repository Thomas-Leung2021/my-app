import React from 'react';
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data" // .js by default

function App() {
  const cards = data.map(item => {
    return (<Card id={item.id} name={item.fullName} email={item.email}/>);
  })
  return (
    <div className="container"><Navbar /><main>{cards}</main></div>
  );
}

export default App;
