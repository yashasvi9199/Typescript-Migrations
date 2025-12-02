type ButtonProps = {
    style : {
        backgroundColor : Color,
        fontSize: number,
    }
}

type Color = "red" | "green" | "blue"

export default function Button07 ({style} : ButtonProps) {
    return (
        <button 
        style={style}>
            Button07
        </button>
    )
}