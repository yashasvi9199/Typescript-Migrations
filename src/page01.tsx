import {useState} from "react";

import Button from "./component/button";
import Button02 from "./component/button02";
import Button03 from "./component/button03";
import Button04 from "./component/button04";
import Button05 from "./component/button05";
import Button06 from "./component/button06";
import Button07 from "./component/button07";
import Button08 from "./component/button08";
import Button09 from "./component/button09";
import Button10 from "./component/button10";
import Div from "./component/div01";
import Button11 from "./component/button11";
import Button12 from "./component/button12";
import Button13 from "./component/button13";
import Button14 from "./component/button14";
import { Button15_easy, Button15_hard } from "./component/button15";
import Button16 from "./component/button16";
import Button17 from "./component/button17";

export default function Home() {

    const showAlert = () => {
        alert("Alert")
    }
    const showConsole = (name: string) => {
        console.log(`Welcome to console, ${name}`);
        return 0;
    }

    const [count, setCount] = useState(0);

    return(
        <main className="min-h-screen  justify-center items-center">
            {/* infer and props */}
            <Button backgroundColor="bg-red-500"/>

            {/* types and props */}
            <Button02 backgroundColor="bg-red-500" fontSize={20} />

            {/* union types */}
            <Button03 backgroundColor="green" fontSize={20} pillShape={true}/>

            {/* type component as a type */}
            <Button04 backgroundColor="green" textColor="red" fontSize={20} pillShape={true}/>

            {/* type Arrays  */}
            <Button05 padding={[10, 20, 30, 40, 10, 100]}/>

            {/* type Tubles/Objects */}
            <Button06 padding={[20, 20, 20, 20]}/>

            {/* type Tuples with objects to simplify the code  */}
            <Button07 style={{backgroundColor: "red", fontSize: 20}}/>           
            
            {/* using React.CSSProperties. React type properties */}
            {/*this will automatically give us type safety by suggesting changes to be made in incorrect css property name or values*/}
            <Button08 style={{backgroundColor: "red", fontSize: 20, textAlign: "center" ,color: "blue", padding: 10}}/>

            {/* type Record */}
            <Button09 borderRadius={{topLeft: 10, topRight: 20, bottomLeft: 30, bottomRight: 40}}/>

            {/* passing function as a prop */}
            <Button10 onClick={showAlert} onSubmit={showConsole} />

            {/* type JSX Elements and text */}
            <Div>Hello this is a Text <div className="bg-red-500">This is another div</div></Div>

            {/* type useState setters */}
            <Button11 setCount={setCount} />

            {/* Component props. Attributes of JSX elements */}
            <Button12 type="submit" autoFocus={true}/>

            {/* Component props but with rest and ...spreader . 
            Notice spreader initialised. It has to be at the end of all props/attributes and should be direct (check autofocus)*/}
            <Button13 {...{type: "submit", autoFocus: true}} />

            {/* type intersection and interface extends */}
            <Button14 type="submit" color="red" onClick={() => {
                console.log("This is a super button");
            }}/>

            {/* typing event handler functions */}
            <Button15_easy/>
            <Button15_hard/>

            {/* hooks: useState */}
            <Button16 />

            {/* hooks: useRef */}
            <Button17 />
            
        </main>
    )
}