type ButtonProps = {
    setCount: React.Dispatch<React.SetStateAction<number>>      // wondering how we got such weird value?
    // just go on parent component page01.tsx and hover over the setCount prop we are sending there. you will find the type value
}


export default function Button11 ({setCount} : ButtonProps) {

    setCount(1);        // remember to send proper datatype value to avoid error. This will be going to parent component
    return (
        <button>Button11</button>
    )
}