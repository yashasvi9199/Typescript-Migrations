import { useState } from "react"

type User = {
    name: string,
    age: number
}

export default function Button16() {

    const [count, setCount] = useState(0);
    /* or
    const [count, setCount] = useState<number>(0);
    */

    // handle objects in useState with intial value as Null
    const [user, setUser] = useState<User | null> (null);

    // remeber to use condition chain (?) since it has been initialized as null
    // and null values will give an error (since it detected that user state is not an object)
    const name = user?.name;

    return (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Button16
        </button>
    )
}