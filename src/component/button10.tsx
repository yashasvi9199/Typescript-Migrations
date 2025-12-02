type ButtonProps = {
    onClick: () => void,
    onSubmit: (test: string) => number
}


export default function Button10 ({onClick, onSubmit} : ButtonProps) {
    return (
        <button onClick={onClick}       //we can have onSubmit here as well but onClick doesn't support that type of returns here so not adding in
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
            Button10
        </button>
    )
}