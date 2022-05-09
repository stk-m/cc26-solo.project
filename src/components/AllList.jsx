import React,{ useState, useEffect } from "react";
import axios from "axios";

export default function AllList({allList, getAllList}){

    // const [allList, setAllList] = useState([])

    // const getAllList = async ()=>{
    //     const res = await axios.get("/list");
    //     const lists = res.data;
    //     setAllList(lists)
    // }


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