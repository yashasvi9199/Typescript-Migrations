import React from "react"

type Props = {
    children : React.ReactNode,           // accepts text, JSX elements and everything; Always use this
    // children: React.ReactElement      // accepts only JSX elements
}
export default function Div({children} : Props) {
    return (
        <div>
            {children}
        </div>
    )
}