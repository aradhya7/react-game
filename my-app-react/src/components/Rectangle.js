import React from 'react';
import Box from './Box'
import Colors from './Colors';




const Rectangle = ({hand_clc}) => {

       var boxColors = Colors;

       // var boxes = boxColors.map((boxColor, i) => {
       //       let x = {
       //       	color : boxColor
       //       }
       //      return(<Box style={x} key={i}/>);
       // 	});

  
        var matrix = [];

        for(let i=0;i<4;i++){

        	let lis = [];

	        for(let i=0;i<4;i++){
	        	let len = boxColors.length;
	        	let y = Math.floor(Math.random() * len);
	        	let x = {
	             	background : boxColors[y],
	             	width : '50px',
	             	height : '50px',
	             	margin : '5px',
	                display : 'inline-block'
	             }
	        	lis.push(<Box style={x} key={i} clicked={hand_clc}/>);
	        }
             
             lis.push(<div></div>);
             matrix.push(lis);

             var Matrix = () => (<div> {matrix} </div>);

        }

 		return(	
			 <div>
		      <Matrix />
		     </div>
		);


};

export default Rectangle;