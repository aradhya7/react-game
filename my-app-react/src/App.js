import React, {Component} from 'react';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
import UserDetails from './components/UserDetails';
import Rectangle from './components/Rectangle';
import Colors from './components/Colors';
import Match from './components/Match';
import ReactDOM from 'react-dom';

var previous = { btn:'', clr:''};

class Result extends Component {
  render() {
    return (
      <div>Start Play</div>
    );
  }
};

let X = () => (<div> hey </div>); 


class MyApp extends Component{

   constructor(props, context){
     super(props, context);
     this.hand = this.hand.bind(this);  
     this.change_msg = this.change_msg.bind(this);  
     this.state = {res: 'start playing'};
   }

  
    hand(e){
        if(previous.clr === ''){
          previous.btn = e.target;
          previous.clr = e.target.style.background;
        }else if(previous.clr === e.target.style.background){
          let len = Colors.length;
          let x = Math.floor(Math.random() * len);
            e.target.style.background = Colors[x];
            previous.clr = '';
            let y = Math.floor(Math.random() * len);
            previous.btn.style.background = Colors[y];
          //  console.log('match');
            this.change_msg('match');
        }else{
             previous.clr = '';
             previous.btn = '';
             this.change_msg('not a match');
            // console.log('not match');
        }
    }

    change_msg(msg){

      let node = ReactDOM.findDOMNode(this.refs.res);
      node.innerHTML =  msg;
      setTimeout(()=>{
         ReactDOM.findDOMNode(this.refs.res).innerHTML =  'continue playing';
      },2000)
   
    }

   render(){
        return (
          <div> 
          <Rectangle hand_clc={this.hand}/>
          <Result ref='res'/>
          </div>
        );
   }


}


export default MyApp