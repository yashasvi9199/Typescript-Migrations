type ButtonProps = React.ComponentPropsWithoutRef<"button">   // the record value here is used to declare the JSX element for which we will accept props
// Just like React.CSSProperties
// Hover on the ButtonProps to see magical things
// use React.ComponentPropsWithRef<> if you are passing a ref as well.
// default React.ComponentProps<> but gives warnign in recent updates now. so be safe and make changes in older projects if you see it


export default function Button12 ({type, autoFocus} : ButtonProps) {
    return (
        <button type={type} autoFocus={autoFocus} >
            Button12
        </button>
    )
}