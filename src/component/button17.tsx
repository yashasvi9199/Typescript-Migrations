import { useRef } from "react"

export default function Button17() {

    // Hover to see infer values and meaning of infers
    const ref = useRef <HTMLButtonElement> (null);

    return (
        <button ref={ref} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Button17
        </button>
    )
}