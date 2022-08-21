import React from "react";
import { Link } from "react-router-dom";

const LINKS = [ 
    {to:'/', text:'Home'},
    {to:'/starred', text:'starred'}
]

function Navs() {
  return (
    <>
      <ul>
        {
            LINKS.map(item => <li key={item.to}><Link to={item.to}>{item.text}</Link></li>)
        }
      </ul>
    </>
  );
}

export default Navs;
