type ButtonProps = {
    backgroundColor : Color,     // union
    textColor: Color,
    fontSize: number,
    pillShape: boolean
}

type Color = "red" | "green" | "blue"

export default function Button03 ({backgroundColor, fontSize, pillShape} : ButtonProps) {
    return (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Button
        </button>
    )
}