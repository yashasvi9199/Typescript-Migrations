type buttonProps = {
    text: string,
    amount: number
}

interface buttonProp {
    text: string,
    amount: number
}


type Colors = "red" | "green" | "blue"

interface Color {
    color: Colors,
    // or
    colors: "red" | "green" | "blue"
}


type URL = string;

interface Url {
    url: string;
}

/* 
Interface makes an object of types variables
Where Types just create inferance declarations.

We will mostly be using 'Types' as use cases since we do not wish to complicate things and make unnecessary object for simple infers
*/