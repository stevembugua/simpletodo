import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useId } from "react";

const Counter = () => {
   
    const id1 = useId();
    const id2 = useId();
    const hello = 'sasa' + useId()

    return ( 
    <>
            <p style={{color:'white'}}>Hello from useID Hook : {hello}</p>
    </> );
}
 
export default Counter;