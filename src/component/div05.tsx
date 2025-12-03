import {type BgColor} from "../lib/types";

type DivProps = {
    bgColor : BgColor;
    color : "text-red-50" | "text-blue-50";
}

export default function Div05({bgColor, color} : DivProps) {
    return (
        <div className={`${bgColor} ${color}`}>Div05</div>
    )
}