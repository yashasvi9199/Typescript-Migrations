export default function Button02 ({backgroundColor, fontSize, pillShape} : {
    backgroundColor : string,
    fontSize: number,
    pillShape?: boolean   // not mandatory
}) {
    return (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Button
        </button>
    )
}