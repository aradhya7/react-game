import React from 'react';
import Colors from './Colors';



const Box = ({style, clicked}) => {

  return (<div style={style} onClick={clicked}></div>);

} 


export default Box;