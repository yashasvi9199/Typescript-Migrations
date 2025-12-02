type ButtonProps = {
    style : {
        backgroundColor : Color,
        fontSize: number,
    }
}

type Color = "red" | "green" | "blue"

export default function Button03 ({style} : ButtonProps) {
    return (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Button
        </button>
    )
}