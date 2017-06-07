import React from 'react';

class Body extends React.Component {


	opChanged(){
		
	}

     
     render(){
     	return(
        
        <div>This is Body

       <div> 
       <select onChange={this.opChanged.bind(this)}>
       <option>h1</option>
       <option>b1</option>
       <option>c1</option>		
       </select>  </div>

        </div>
        
     		);
     }
   


}

export default Body