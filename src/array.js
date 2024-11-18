import React from "react";
function Nokia(){
  
    const studentsdata=[
        {name:'akshit',age:22,contact:111},
        {name:'akshit',age:22,contact:333},
        {name:'akshit',age:22,contact:666}
    ]
    return(
        <div>
            <h1>Handle array with list</h1>
           
             {
                  studentsdata.map((data)=>
                    <h1>{data.name},{data.age}</h1>
                )
                   
            }
        </div>
    )
}
export default Nokia;