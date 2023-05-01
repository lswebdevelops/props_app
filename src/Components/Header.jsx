import React from "react";

export default function Header(props){


    return(
        <header>
            <p>Cuttent user: {props.user}</p>
        </header>
    )
}