import React from "react";
import CalButtons from "./buttons";
import {useState} from 'react';


function App() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    const operators = ['+', '-', '÷', '×', '=', 'c', '‣', '(', ')']
    const [displayNumber, setdisplayNumber] = useState('')
    function setnumber(num){
        if(num === 'c'){
            setdisplayNumber('')
        }else if(num === '‣'){
            setdisplayNumber((prev)=>{
                prev = prev.slice(0, prev.length-1)
                return prev
            })
        }else if(num === '='){
             setdisplayNumber((prev)=>(eval(prev)))
        }
        else{
            setdisplayNumber((p)=>(p + num))
        }
        
    }
    return <div className="container">
            <view className="display">
                {displayNumber}
            </view>
            <div className="calculator_buttons">
                {operators.map((opp, id)=>{
                    return <CalButtons
                      key={id}
                    value = {opp}
                    id = {`${id + 10}`}
                    setNumber = {setnumber}
                     />
                })}

                {numbers.map((num, id)=>{
                    return <CalButtons
                    key={id}
                    value = {num}
                    id = {`${id}`}
                    setNumber = {setnumber}
                 />
                })}
            </div>
        </div>

}


export default App