import React from 'react';
import ReactDOM from 'react-dom/client';
import EditComp from './edit';
// import { HashRouter } from 'react-router-dom'
// import { BrowserRouter, Routes, Route ,useNavigate} from "react-router-dom";
import SessionsComp from './sessions';

class IndexComp extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      mainPage:0
    }
    this.getItem = this.getItem.bind(this)
    this.setItem = this.setItem.bind(this)
    this.toggleMainPage = this.toggleMainPage.bind(this)
  }
  getItem(key){
    console.log(this.state[key])
    return  this.state[key]
  }
  setItem(obj){
    console.log(obj)
    this.setState(obj)
  }
  toggleMainPage(e){
    this.setState({mainPage:e.currentTarget.value})
  }
  render(){
    console.log(this.state);
    let mainPage
    switch(this.state.mainPage){
      case '1':
        mainPage = <EditComp/>
        break;
      default:
        mainPage = <SessionsComp/>
        break;
    }

  return(
    <section>
      <nav>
        <div>
          <button value='0' onClick={this.toggleMainPage} >seesions</button>
          <button value='1' onClick={this.toggleMainPage} >edit</button>
        </div>
      </nav>
      <div id='main'>
        {mainPage}
        {/* <SessionsComp /> */}
      </div>
    </section>
  )
  }
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<IndexComp/>);
