export default function Button (props : {backgroundColor : string}) {

    const bgColor = props.backgroundColor;
    // or
    const {backgroundColor} = props

    return (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Button
        </button>
    )
}