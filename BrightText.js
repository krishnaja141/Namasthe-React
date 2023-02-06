import React from "react";
function BrightText({color}){
    const style= {color:color};
    return(
  <div>
    <h1 style={style} >Hi</h1>
  </div>
    )
}
export default BrightText;