import React from "react";
import { Table } from "react-bootstrap";
function Nokia(){
  
    const studentsdata=[
        {name:'akshit',age:22,contact:111},
        {name:'akshit',age:22,contact:333},
        {name:'akshit',age:22,contact:666}
    ]
    return(
        <div>
            <h1>Handle array with list</h1>
            <Table striped variant="dark">
                <tbody>
            <tr>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Contact</td>
            </tr>
             {
                  studentsdata.map((item,i)=>
                    <tr key={i}>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.contact}</td>
                    </tr>
                )                   
            }
            </tbody>
            </Table>
        </div>
    )
}
export default Nokia;