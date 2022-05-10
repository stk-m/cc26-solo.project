import React, { useState } from "react";
import axios from "axios";
import Main from "./Main";
import AllList from "./AllList";
// import Add from "./Add";
// import Memorized from "./Memorized";
import Navbar from "./Navbar";

function App() {
  const [word, setWord] = useState([]);
  const [allList, setAllList] = useState([]);

  const getAllList = async ()=>{
      const res = await axios.get("/list");
      const lists = res.data;
      setAllList(lists);
  };

  const [displayMain, setDisplayMain] = useState(false);
  const [displayAll, setDisplayAll] = useState(false);

  const showMain = ()=>{
    setDisplayMain(prevState => !prevState)
    // console.log(displayMain)
  };
  const showAll = ()=>{
    setDisplayAll(prevState => !prevState)
    // console.log(displayAll)
  };


  return (
    <div>
      <h1>vocabulary card</h1>
      <Navbar 
      showMain={showMain}
      showAll={showAll}
      />
      {displayMain &&<Main 
      word = {word}
      setWord={setWord}
      />}
      {displayAll && <AllList 
      getAllList = {getAllList}
      allList={allList}
      />}
    </div>
  );
}

export default App;
