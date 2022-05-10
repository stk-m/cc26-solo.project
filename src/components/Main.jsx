import React,{ useState, useEffect } from "react";
import axios from "axios";

export default function Main({ word, setWord}){


    const [displayWord, setDisplayWord] = useState(false);
    const toggle = ()=>{
        setDisplayWord(prevState => !prevState)
        // console.log(displayWord)
    };

    const getRandomWord = async () =>{
        // console.log("random",allList)
        const res = await axios.get("/list");
        const lists = res.data;
        // setAllList(lists);
    
        const randomId = Math.floor(Math.random()* 32) + 1;
        // console.log("id",randomId);
        const random = lists.filter(list => list.id === randomId);
        // console.log("word", random);
        setWord(random)
        setDisplayWord(false)
      }

    useEffect(()=>{
        getRandomWord()
    },[])

    return(
    <div className="main-content">
        <h3>Let's study!</h3>
        <ol>
            <li>Check an English word!</li>
            <li>&#129300;</li>
            <li>Click the check! button</li>
            <li>Memorize the meaning</li>
            <li>Go to next word&#129412;</li>
        </ol>
       {word.map((elem, key)=>(
        <div className="wordList"
        key={key}>
            {elem.eng} 
            <button onClick={toggle}>check!</button>
            {displayWord && elem.jpn}
        </div>
       ))}
       <button onClick={getRandomWord}>Next</button>
    </div>
    );
};