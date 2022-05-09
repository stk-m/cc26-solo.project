import React,{ useEffect } from "react";
import axios from "axios";

export default function Main({ word, setWord}){

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
      }


    useEffect(()=>{
        getRandomWord()
    },[])



    return(
    <>
       {word.map((elem, key)=>(
           <div key={key}>{elem.eng} {elem.jpn}</div>
       ))}
    </>
    );
};