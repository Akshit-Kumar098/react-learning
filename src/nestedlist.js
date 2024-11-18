import React from "react";
import { Table } from "react-bootstrap";
function Nokia2(){
  
    const studentsdataa=[
        {name:'akshit',age:22,address:[
            {hn:'10',city:'gurgaon',country:'india'},
            {hn:'20',city:'delhi',country:'india'},
            {hn:'30',city:'okoo',country:'india'},
            {hn:'30',city:'banras',country:'india'},
        ]},
        {name:'akshit',age:22,address:[
            {hn:'10',city:'gurgaon',country:'india'},
            {hn:'20',city:'delhi',country:'india'},
            {hn:'30',city:'okoo',country:'india'},
            {hn:'30',city:'banras',country:'india'},
        ]},
        {name:'akshit',age:22,address:[
            {hn:'10',city:'gurgaon',country:'india'},
            {hn:'20',city:'delhi',country:'india'},
            {hn:'30',city:'okoo',country:'india'},
            {hn:'30',city:'banras',country:'india'},
        ]}
    ]
    return(
        <div>
            <h1>Handle array with list</h1>
            <Table>
                <tbody>
                    <tr>
                    <td>name</td>
                    <td>email</td>
                    <td>address</td>
                    </tr>
                    {
                        studentsdataa.map((yo)=>
                            <tr>
                        <td>{yo.name}</td>
                        <td>{yo.age}</td>
                        <td><Table>
                        <tbody>
                            {
                                yo.address.map((ahh)=>
                                    <tr>
                                <td>{ahh.hn}</td>
                                <td>{ahh.city}</td>
                                <td>{ahh.country}</td>
                                </tr>
                            )
                            } </tbody>
            </Table>
                        </td>
                        </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}
export default Nokia2;