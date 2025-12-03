export function Button15_easy(){
    return (
        <button onClick={(e) => alert("You clicked me! \nI was Easy")}>
            Button15_easy
        </button>
    )
}

export function Button15_hard(){

    // How did we get this super weird type? well just hover on the event (e) on above function and see the inferred values by Typescript and copy that
    // simple JS, e = event. same thing
    const handler = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
        ) => {alert("You clicked me! \nI was not Easy")
    }

    return (
        <button onClick={handler}>
            Button15_hard
        </button>
    )
}