type ButtonProps = {
    type: "button" | "submit" | "reset"
    color: "red" | "green"
}

// Types : & (intersection)
type SuperButton = ButtonProps & {
    onClick: () => void
}

// Interface : extends
interface SuperbButton extends ButtonProps {
    onClick: () => void
}

export default function Button14 ({type, color, onClick} : SuperButton) {
    return (
        <button type={type} color={color} onClick={onClick}>
            Button14
        </button>
    )
}

// Not exporting but sample for normal button using 'just ButtonProps'
function Button14New({type, color} : ButtonProps) {
    return (
        <button type={type} color={color}>
            Button14New
        </button>
    )
}