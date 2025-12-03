/* 
The generic can either be used with 'T' or 'K' or 'V'
It is used when we do not know what kind of data will be enetered or we want it to be flexible

Why not use type 'any' ?
Well, it breaks code once you add 'any' to a dataset at runtime so in project you will keep wondering where the code broke

T goes like, whatever 'type' we received, K goes like the 'key', V goes like the 'value'
so if we receive a number, we will pass a number array or return a number array too.
but, if we receive a string or a boolean or an object, we will pass the array of same type.
*/

// Generic Arrow Function
const convertToArray = <T,>(value: T) : T[] => {
    return [value];
}

// Generic Function
function convertToArray2 <T> (value : T) : T[] {
    return [value];
}

// Let's create a more usable function
type DivProps <T> = {       // type DivProps receives a type T from the function where it is being inferred/used
    value : T;
    pastValues: T[]
}


export default function Div04<T>({value, pastValues}: DivProps<T>) {    // fist mention : function infer generic Type.  second mention : object (DivProps) infer generic type
    return (
        <>
        <div>
            Div04 
        </div>

        <div>
            Value = {value}
            Past Values = {pastValues}
        </div>
        </>
        
        
    )
}