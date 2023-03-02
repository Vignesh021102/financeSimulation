import React from 'react';
import ReactDOM from 'react-dom/client';
// import { HashRouter } from 'react-router-dom'
// import { BrowserRouter, Routes, Route ,useNavigate} from "react-router-dom";
import SessionsComp from './sessions';

class IndexComp extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
  }
  getItem(key){
    console.log(this.state[key])
    return  this.state[key]
  }
  setItem(obj){
    console.log(obj)
    this.setState(obj)
  }
  render(){
    console.log(this.state);
  return(
    <section>
      <nav>
        <div>
          <button>edit</button>
          <button>seesions</button>
        </div>
      </nav>
      <div id='main'>
        <SessionsComp />
      </div>
    </section>
  )
  }
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<IndexComp/>);
