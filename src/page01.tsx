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

export default function Home() {

    const showAlert = () => {
        alert("Alert")
    }
    const showConsole = (name: string) => {
        console.log(`Welcome to console, ${name}`);
        return 0;
    }

    return(
        <main className="min-h-screen  justify-center items-center">
            <Button backgroundColor="bg-red-500"/>
            <Button02 backgroundColor="bg-red-500" fontSize={20} />
            <Button03 backgroundColor="green" fontSize={20} pillShape={true}/>
            <Button04 backgroundColor="green" textColor="red" fontSize={20} pillShape={true}/>
            <Button05 padding={[10, 20, 30, 40, 10, 100]}/>
            <Button06 padding={[20, 20, 20, 20]}/>
            <Button07 style={{backgroundColor: "red", fontSize: 20}}/>           
            
            {/*this will automatically give us type safety by suggesting changes to be made in incorrect css property name or values*/}
            <Button08 style={{backgroundColor: "red", fontSize: 20, textAlign: "center" ,color: "blue", padding: 10}}/>
            <Button09 borderRadius={{topLeft: 10, topRight: 20, bottomLeft: 30, bottomRight: 40}}/>
            <Button10 onClick={showAlert} onSubmit={showConsole} />
            <Div>Hello this is a Text <div className="bg-red-500">This is another div</div></Div>
            
        </main>
    )
}