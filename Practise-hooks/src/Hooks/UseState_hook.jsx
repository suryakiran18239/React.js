import { useState } from "react"

function UseState_hook(){
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState("")

    return(
        <>
        <input type="text" onChange={e => setName(e.target.value)} />
        <h1>{name} has clicked {counter} times!</h1>
        <button onClick={ ()=> setCounter(counter+1) }>Increase</button>
        </>
    )
}

export default UseState_hook;




/* 
    useState Hook is a function to add state in functional components.
    State is nothing but just values/variables of component.

*/