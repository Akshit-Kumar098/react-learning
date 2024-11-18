import React from "react";
import './style.css'
import style from './custom.module.css'
import Button from 'react-bootstrap/Button';
function Design(){
    return(
        <div>
            <h1 className="primary">Hello gyzzzzzz</h1>
            <h1 style={{color:'pink'}}>Hello gyzzzzzz</h1>
            <h1 className={style.success}>Hello gyzzzzzz</h1>
            <Button className="button" variant="primary">Primary</Button>
      <Button className="button" variant="secondary">Secondary</Button>
      <Button className="button" variant="success">Success</Button>

        </div>
    )
}
export default Design;