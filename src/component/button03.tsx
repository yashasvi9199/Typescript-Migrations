type ButtonProps = {
    backgroundColor : "red" | "green" | "blue",     // union
    fontSize: number,
    pillShape: boolean
}

export default function Button03 ({backgroundColor, fontSize, pillShape} : ButtonProps) {
    return (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Button03
        </button>
    )
}