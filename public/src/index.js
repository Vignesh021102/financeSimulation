import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom'
import { BrowserRouter, Routes, Route ,useNavigate} from "react-router-dom";



class IndexComp extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
  }
  render(){
    console.log(this.state);
  return(
    <section id='main'>
      <h1>hello player </h1>
    </section>
  )
  }
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <IndexComp/>
  </div>
);
