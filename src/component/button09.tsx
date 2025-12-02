type ButtonProps = {
    borderRadius : Record<string, number>
}

type Color = "red" | "green" | "blue"

export default function Button03 ({borderRadius} : ButtonProps) {
    return (
        <button style={borderRadius}>
            Button09
        </button>
    )
}