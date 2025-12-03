import { useEffect } from "react";

type BgColor = "bg-red-500" | "bg-green-500" | "bg-blue-500";



export default function Div03(){

    useEffect( () => {
        const prevColor = localStorage.getItem('bgcolor') as BgColor;    // we decalred a type for something which is outside the code here. Not a props
        document.body.className = prevColor;
    });

    return(
        <div>I user assertion to set bgColor</div>
    )
}