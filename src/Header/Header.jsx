import React from "react";
import logo from '../Asserts/Images/profile_avatar.png';
import { Link,Routes,BrowserRouter as Router, Route } from "react-router-dom";
import Login from '../Login/Login';
import './header.css'
export default class Header extends React.Component{
     constructor(){
         super();
         this.state={
            searchbar:""
         }
     }
     handleButton = (event) =>{
alert(this.state.searchbar);
event.preventDefault(); 
     }
     handleChange = (event) => {
this.setState({searchbar:event.target.value});
     }
     handleLogout = () => {
        
     }
    render(){

       return ( 
           <div className="header_container">
       <h1 className="logo">WELLS FARGO     </h1>
       <h1 className="logo">Hackathon - 2022</h1>
       
       <Link to="/">Login</Link> 
       <Routes>
       <Route path="/" component={Login} />  
       </Routes>
       
       </div>
        )

    };
        
    
}