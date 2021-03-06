import './App.css';
import React, { Component } from "react"
import Members from "./Components/Members/Members"
import Header from './Components/Header/Header';
import AddNewMembers from './Components/AddNewMembers/AddNewMembers';
import UpdateMember from './Components/UpdateMember/UpdateMember'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Count from './Components/Count/Count';
import UseReference from './Components/UseReference/UseReference'
import Login from './Components/Login/Login'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import DonorsArranged from './Components/DonorsArranged/DonorsArranged'

class App extends Component {
  constructor() {
    super();
    this.state = {
      MembersList: [],
      head: true
    }
  }

  updateHandler = (memberID) => {
    let memList = this.state.MembersList;
    let mIndex = null;
    memList.forEach((member, index) => {
      if(memberID === member.id)
      {
        mIndex = index;
      }
    })
    let temp = {id: memberID.id, name: memberID.name, phone: memberID.phone};
    memList.splice(mIndex, 1, temp);
    this.setState({ MembersList:memList });
  }

  deleteHandler = (memberID) => {
    let ml = this.state.MembersList;
    let mIndex = 0;
    ml.forEach((member, index) => {
      if(memberID === member.id)
      {
        mIndex = index;
      }
    })
    
    let memList = ml;
    memList.splice(mIndex, 1);
    this.setState({ MembersList:memList });;
  }

  addNewMemberHandler = (newMember) => {
    let memList = this.state.MembersList;
    if (memList.length > 0) {
      newMember.id = memList.length + 1;
      console.log(newMember.id);
    }
    else {
      newMember.id = 1;
      console.log(newMember.id);
    }
    memList.push(newMember);
    this.setState({ MembersList: memList });
    console.log(this.state.MembersList);
  }

  authenticateUser = (obj) => {
    let choice = false;
    if (obj.username == "emaliekhokhar" && obj.password == "123")
    {
      choice = true;
      alert("Authenticated");
    }
    else
    {
      alert("Wrong Password");
    }
    return choice;
  }

  getUniqueId = () => {
    return this.state.MembersList.length;
  }
 
  render() {
    console.log("Rendering");
    return (

      <Router>
        <div>
          <Route exact path="/"  render={(({history},props) => <Login  history={history} authenticateUser={this.authenticateUser}/>)}/>
          <Route exact path="/homepage" render={(props)=><Members {...props} members={this.state.MembersList} deleteHandler={this.deleteHandler} updateHandler={this.updateHandler}/>}/>
          <Route exact path="/add" render={({history},props)=><AddNewMembers history={history} {...props} addNewMemberHandler={this.addNewMemberHandler}/>}/>
          <Route exact path="/update" render={({history},props)=><UpdateMember history={history} {...props} updateHandler ={this.updateHandler}/>}/>
          <Route exact path="/usereference" render={({history},props)=><UseReference history={history} {...props}/>}/>
          <Route exact path="/count" render={({history}, props)=><Count history={history} {...props} />} />
          <Route exact path="/donorsarranged" render={({history}, props) => <DonorsArranged history={history} {...props}/>}/>
        </div>
      </Router>

      // <div>
      //   {/* {
      //     this.state.head ? <Header heading="App"/> : null
      //   } */}
      //   {/* <Members members={this.state.MembersList}/> */}
      //   <AddNewMembers addNewMember={this.addNewMember} />
      //   {/* <button onClick={()=>this.setState({head:false})}>Click Me</button> */}
      // </div>
    );
  }
}

export default App;



    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // React.createElement("div", {id: "App"}, "Hello World")
    // <div>
    //   Hello World
    // </div>
    // React.createElement("div", null, 
    //   React.createElement("p", null, "Hello World")

    // componentDidMount(){
    //   let newMember = {name: "Ali Khokhar", phone: "0323-6913064"};
    //   const member = this.state.MembersList;
    //   member.push(newMember);
    //   this.setState({MembersList:member});
    //   console.log("Mounting...");
    // }
  
    // componentDidUpdate() {
    //   console.log("Updating...");
    // }