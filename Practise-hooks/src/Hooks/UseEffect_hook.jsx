import React, { useState, useEffect } from 'react'

function UseEffect_hook(){
    const [count,setCount] = useState(0);
    const [otherCount, setOtherCount] = useState(5)

    //useEffect hook example without dependencies
/*   useEffect(() => {
        document.title = `${count} new messages!`
    })   */

    /* In below scenario with empty array component will work only 1st time. 
       basically this kind of scenario is used while rendering APIs/Server  */
   /* useEffect(()=>{
        document.title = `${count} new messages!`;
    }, [])  
   */

    //useEffect hook example with dependency
    useEffect(() => {
        document.title = `${count} ${otherCount} new messages!`
    }, [otherCount, count])

    return(
        <>
        
        <h1> {count} new messages!</h1>
        <button onClick={() => setCount( count + 1 )} >Increase</button>

        <h2>{otherCount} new messages!</h2>
        <button onClick={() => setOtherCount(otherCount+5)}>Increase by 5</button>

        </>
    )
}
export default UseEffect_hook

/* useEffect hook is run on render and anything changes in that component. 
   It is a function to perform side-effects in Functional Components.
   Side effects are actions which are performed with the “Outside world” 
   Like - Fetching data from API or Backend, 
   directly updating the DOM - document or window object
   and timer functions - setTimeout or SetInterval.
*/
// Referred : https://drive.google.com/file/d/1dko8AZyv94S0Dxwf6h8wFJt9WP_eNvcR/view