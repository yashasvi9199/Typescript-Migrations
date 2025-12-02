import type React from "react"

type ButtonProps = {
    style : React.CSSProperties     // React's own built in object for infering CSS properties as a prop in object| Includes color as well
}


export default function Button08 ({style} : ButtonProps) {
    return (
        <button style={style}>
            Button08
        </button>
    )
}