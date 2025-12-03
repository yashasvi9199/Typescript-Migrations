type ButtonProps = React.ComponentPropsWithoutRef<"button">


export default function Button13 ({...rest} : ButtonProps) {
    return (
        <button {...rest} >
            Button13
        </button>
    )
}