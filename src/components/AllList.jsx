import React,{ useState, useEffect } from "react";
import axios from "axios";

export default function AllList(){

    const [allList, setAllList] = useState([])

    const getAllList = async ()=>{
        const res = await axios.get("/list");
        const lists = res.data;
        setAllList(lists)
    }


    useEffect(()=>{
        getAllList()
    },[])

    return(
    <>
       {allList.map(list=>(
           <div>{list.eng} &#128073; {list.jpn}</div>
       ))}
    </>
    );
};