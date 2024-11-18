import React from "react";
import './style.css'
import style from './custom.module.css'
function Design(){
    return(
        <div>
            <h1 className="primary">Hello gyzzzzzz</h1>
            <h1 style={{color:'pink'}}>Hello gyzzzzzz</h1>
            <h1 className={style.success}>Hello gyzzzzzz</h1>
        </div>
    )
}
export default Design;