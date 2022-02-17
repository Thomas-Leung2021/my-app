import React from 'react';
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data" // .js by default

function App() {
  // we need a unique key prop when using map()
  const cards = data.map(item => {
    return (<Card key={item.key} id={item.id} name={item.fullName} email={item.email}/>);
  })
  return (
    <div className="container"><Navbar /><main>{cards}</main></div>
  );
}

export default App;
