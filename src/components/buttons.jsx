import React from "react";

function CalButtons(props){
    return <div id={`_${props.id}`} className="button_div">
            <button  className='calbuttons' onClick={()=>(props.setNumber(props.value))} value={props.value} >{props.value}</button>
    </div>
}

export default CalButtons;