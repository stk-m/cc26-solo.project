import React,{  useEffect } from "react";

export default function AllList({allList, getAllList}){

    useEffect(()=>{
        getAllList()
    },[])

    return(
    <>
       {allList.map((list, key)=>(
           <div key={key}>{list.eng} &#128073; {list.jpn}</div>
       ))}
    </>
    );
};