type ButtonProps = {
    padding: number[]
}


export default function Button05 ({padding} : ButtonProps) {
    return (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Button05
        </button>
    )
}