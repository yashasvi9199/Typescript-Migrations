import type React from "react"

type ButtonProps = {
    style : React.CSSProperties     // React's own built in object for infering CSS properties as a prop in object| Includes color as well
}


export default function Button03 ({style} : ButtonProps) {
    return (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Button
        </button>
    )
}