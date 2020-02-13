import React, { Fragment, useState } from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";

function App() {
  let [showAside, setshowAside] = useState(true);

  const clickedIconFunc = () => {
    setshowAside(!showAside);
  };

  return (
    <Fragment>
      <Nav clickedIcon={clickedIconFunc} />
      <Main showAside={showAside} />
    </Fragment>
  );
}

export default App;
