import React from "react";

export default function Navbar({ showMain, showAll }){

    return(
    <div className="navbar">
        <button onClick={showMain}>Main</button>
        <button onClick={showAll}>All List</button>
    </div>
    );
};

