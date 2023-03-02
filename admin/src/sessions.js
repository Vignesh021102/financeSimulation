import React from "react";

class SessionsComp extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            sessionsList:[{id:1,name:'SSN clg | it dept',groupsCount:50,playersCount:600},{id:2,name:'XXX clg | XXX dept',groupsCount:12,playersCount:120},{id:123,name:'YYY clg | YYY dept',groupsCount:100,playersCount:1000}],
            createSessionMenu:'none',
            groupPage:'none',
            newSessionName:''
        }
        this.displaySessions = this.displaySessions.bind(this)
        this.changeInVal = this.changeInVal.bind(this)
        this.createSession = this.createSession.bind(this)
        this.toggleCreateSessionMenu = this.toggleCreateSessionMenu.bind(this)
        this.groupPage = this.groupPage.bind(this)
    }
    changeInVal(e){
        let obj = {}
        obj[e.currentTarget.name] = e.currentTarget.value
        this.setState(obj)
    }
    displaySessions(list){
        let container = document.querySelector('#sessionsViewer')
        if(list.length > 0){
            let card,nameDiv,coinIcon,name,infoDiv,groupBox,playerBox,groupLabel,playerLabel,groupInfo,playerInfo,excelDownload,downloadIcon
            for(let session of list){
                card = document.createElement('div')
                nameDiv = document.createElement('div')
                name = document.createElement('p')
                coinIcon = document.createElement('i')
                nameDiv.appendChild(coinIcon)
                nameDiv.appendChild(name)
                
                infoDiv = document.createElement('div')
                groupBox = document.createElement('div')
                playerBox = document.createElement('div')
                groupLabel = document.createElement('p')
                groupLabel.innerText = 'groups'
                groupInfo = document.createElement('p')
                playerLabel = document.createElement('p')
                playerLabel.innerText = 'players'
                playerInfo = document.createElement('p')

                excelDownload = document.createElement('button')
                downloadIcon = document.createElement('i')
                excelDownload.innerText = 'download'
                excelDownload.appendChild(downloadIcon)
                card.appendChild(nameDiv)
                card.appendChild(infoDiv)

                name.innerText = session.name
                groupInfo.innerText = session.groupsCount
                playerInfo.innerText = session.playersCount
                
                container.appendChild(card)
            }
        }else{
         let p = document.createElement('p')
         p.innerText = 'no sessions'
         container.appendChild(p)       
        }
    }
    toggleCreateSessionMenu(){
        let temp = 'none'
        if(this.state.createSessionMenu == 'none'){
            temp = 'flex'
        }
        this.setState({createSessionMenu:temp})
    }
    toggleGroupPage(){
        let temp = 'none'
        if(this.state.groupPage == 'none'){
            temp = 'flex'
        }
        this.setState({groupPage:temp})
    }
    createSession(){
        console.log(this.state.newSessionName)
    }
    componentDidMount(){
       this.displaySessions(this.state.sessionsList)
    }
    render(){
        return(
            <div>
                <div>
                    <div>
                        <input type="text"/>
                    </div>
                    <button onClick={this.toggleCreateSessionMenu}  >create session</button>
                </div>
                <div id='sessionsViewer' >

                </div>
                <div id='createSessionPage' style={{display:this.state.createSessionMenu}}  >
                    <div id='createSessionMenu'>
                        <div><p>session name</p><button onClick={this.toggleCreateSessionMenu} >icon</button></div>
                        <input onChange={this.changeInVal} name="newSessionName" placeholder="Enter session name" />
                        <button onClick={this.createSession} >save</button>
                    </div>
                </div>
                <div id="groupPage" style={{display:this.state.groupPage}} >

                </div>

            </div>
        )
    }
}

export default SessionsComp