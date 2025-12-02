type ButtonProps = {
    padding: [number, number, number, number]
}

export default function Button06 ({padding} : ButtonProps) {
    return (
        <button style={{padding: `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`}}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Button06
        </button>
    )
}