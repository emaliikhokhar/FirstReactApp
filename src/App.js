import './App.css';
import React, { Component } from "react"
import Members from "./Components/Members/Members"
import Header from './Components/Header/Header';
import AddNewMembers from './Components/AddNewMembers/AddNewMembers';
import {BrowserRouter as Router,Route} from 'react-router-dom'

class App extends Component {
  constructor() {
    super();
    this.state = {
      MembersList: [],
      head: true
    }
    console.log("Constructor Calling");
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

  getUniqueId = () => {
    return this.state.MembersList.length;
  }
 
  render() {
    console.log("Rendering");
    return (

      <Router>
        <div>
          <Route exact path="/" render={(props)=><Members {...props} members={this.state.MembersList} deleteHandler={this.deleteHandler}/>}/>
          <Route exact path="/add" render={({history},props)=><AddNewMembers history={history} {...props} addNewMemberHandler={this.addNewMemberHandler} getUniqueId={this.getUniqueId}/>}/>
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