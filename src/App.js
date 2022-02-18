import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Main from "./components/Main";
import data from "./data"; // .js by default

function App() {
  // we need a unique key prop when using map()
  const cards = data.map((item) => {
    return (
      <Card
        key={item.key}
        id={item.id}
        name={item.fullName}
        email={item.email}
      />
      // Short hand for above using object literal
      // <Card key={item.key} {...item} />
      // alternative, but your need to use prop.item.fullName instead of prop.name
      //   <Card
      //   key={item.key}
      //   item={item}
      // />
    );
  });
  return (
    <div className="container">
      <Navbar />
      <Main/>
      <main>{cards}</main>
    </div>
  );
}

export default App;
