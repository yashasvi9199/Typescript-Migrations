type ButtonProps = {
    borderRadius : Record<string, number>
}


export default function Button09 ({borderRadius} : ButtonProps) {
    return (
        <button style={borderRadius}>
            Button09
        </button>
    )
}