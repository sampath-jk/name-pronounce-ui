import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { injectIntl } from "react-intl";
import logo from '../Asserts/Images/avatar.jpg';
import volume from '../Asserts/Images/volume.png';
import record from '../Asserts/Images/record.png';
import search from '../Asserts/Images/search.png';
import edit from '../Asserts/Images/edit_icon.svg';
import reset from '../Asserts/Images/reset.svg';
import { Route, Routes, Link, Navigate } from "react-router-dom";
import * as loginActions from '../services/action/loginActions';
//import { ReactMediaRecorder } from "react-media-recorder";
import 'bootstrap/dist/css/bootstrap.css';
import './css/userProfile.css';
import CustomPronounce from "./CustomPronounce";
import AutoSuggestEmpSearch from "./AutoSuggestEmpSearch";

export class UserProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: this.props.firstName,
            lastName: this.props.lastName,
            role: this.props.role,
            empid: this.props.empid,
            email: this.props.email,
            country: this.props.country,
            address: this.props.address,
            userVoice: '',
            aiVoice: '',
            voiceSelectionFlag: '',
            listofRoles: [],
            record: false,
            successMSG: this.props.successMSG,
            customFlag: this.props.customFlag,
            loginSuccess: this.props.loginSuccess,
            preferredName: this.props.preferredName,
            pronounceType: this.props.pronounceType,
            preferredNameFlag:false,
            pronounceTypeFlag:false,
            updateSuccessFlag:false,
            playAudio: this.props.playAudio

        }

    }
    componentWillMount() {
        console.log(this.props.loginSuccess);
        this.props.getEmployeeDetails(this.props.loggedInUser, this.props.authToken);
        this.props.getAllEmployee(this.props.authToken);
    }
    
    // componentDidMount(){

    //     setTimeout(() => this.setState({successMSG:''}), 30000);
    // }

    handleSpeach = () => {
        const fullname = this.props.firstName + " " + this.props.lastName;
        this.setState({playAudio:true},this.props.fetchNamePronunce({
            name: this.props.preferredName ? '' : fullname,
            "preferredName": this.props.preferredName,
            "country": this.props.country,
            "employeeId": this.props.employeeId
        }, this.props.authToken,false));
    }
    handleRecordEdit = () => {
        //this.setState({customFlag:true});

        this.setState({ customFlag: !this.state.customFlag });
    }
    handlePrefferedNameEdit = () => {
        this.setState({preferredNameFlag:true,preferredName:this.props.preferredName});
    }
    handlePronounceTypeEdit = () => {
        this.setState({pronounceTypeFlag:true,pronounceType:this.props.pronounceType});
    }

    handleRESTEdit = () =>{
        this.props.resetAudio(this.props.employeeId,this.props.authToken);
    }

    handlePrefferedNameSave = () => {
        this.setState({preferredNameFlag:false},
        this.props.fetchNamePronunce({
            
                name : "",
                preferredName : this.state.preferredName,
                country: this.props.country,
                employeeId:this.props.employeeId
                
        },this.props.authToken,true));
    }

    handlePronounceTypeSave = () => {
        this.setState({pronounceTypeFlag:false},
        this.props.fetchNamePronunce({
            name : "",
            pronounceType : this.state.pronounceType,
            country: this.props.country,
            employeeId:this.props.employeeId
        },this.props.authToken,true));
    }

    handlePrefferedNameChange = (e) => {
        e.preventDefault();
        this.setState({preferredName:e.target.value});
    }

    handlePronounceTypeChange = (e) => {
        e.preventDefault();
        this.setState({pronounceType:e.target.value});
    }

    handleAutoSearch = (e) =>{
    if(e.target.value.length < 2){
        return
    }else{
        this.props.searchEmployee({
            name:e.target.value
        },this.props.authToken)
    }
    }

    // componentWillMount(){
    //     this.refresh();
    // }
    //     handlerecordclick = () => {
    // alert('hi');
    //         this.setState({record:true});
    //         return <navigator to="/customPronounce"/>;
    //     }
    stopPlay = () => {
        //this.setState({playAudio:false})
        this.props.stopPlayAudio();
    }
    render() {

        console.log(this.state.successMSG);
        if(this.props.playAudio){
            const audio = new Audio();
            audio.src = this.props.nameAudio;
            audio.play();
            this.stopPlay();
        }
        return (<div>
           {!this.state.customFlag && <div style={{ background: "green", color: "white", textAlign: "center" }}>{this.props.successMSG}</div>}
            {this.state.customFlag && <CustomPronounce handleRecordEdit={this.handleRecordEdit} />}

            {!this.state.customFlag && <div>
                <div style={{ float: "right", display: "inline-flex" }}>
                    <div>
                 <img src={search} className="img-thumbnail" alt="search" /> 
                 </div>
                 <div >
                <AutoSuggestEmpSearch />
                </div>
                        
                        {/* <input type="text" className="form-control" onChange={this.handleAutoSearch} placeholder="Employee Search.." aria-label="Username" aria-describedby="addon-wrapping" /> */}
                        {/* <span className="input-group-text" id="addon-wrapping"> </span> */}
                    
                </div>

                <div className="profile_avatar">
                    <img src={logo} className="img-thumbnail" alt="..." height={150} width={150} />
                </div>
                <div className="profile_details">
                    <div></div>
                    <h1>{this.props.firstName}  {this.props.lastName}<span className="material-icons">
                        <Link to='#' onClick={this.handleSpeach}>
                            <img src={volume} className="img-thumbnail" alt="Listen pronunciation" title="Click to listen pronunciation" /></Link>

                    </span>
                        {(this.props.loggedInUserRoles.includes("admin") || this.props.employeeId == this.props.loggedInUser) && <span className="material-icons">
                            <Link to='#' onClick={this.handleRecordEdit}>
                                <img src={record} className="img-thumbnail" alt="Record your custom pronunciation" title="Click to record your custom pronunciation" /></Link>
                        </span>}
                        {(this.props.loggedInUserRoles.includes("admin") || this.props.employeeId == this.props.loggedInUser) && <span className="material-icons">
                            <Link to='#' onClick={this.handleRESTEdit}>
                            {/* <img src={reset} alt="Bootstrap" width="32" height="32"/> */}
                                <img src={reset} className="img-thumbnail" alt="Record your custom pronunciation" title="Click to record your custom pronunciation" width="32" height="32"/></Link>
                        </span>}
                        </h1>
                        </div>
                <div>
                    <div className="row">
                        <h6 className="col-3"><span> <b>Employee ID</b></span></h6> : <h6 className="col-3"> {this.props.employeeId}</h6>
                    </div>
                    {!this.state.preferredNameFlag && <div className="row">
                        <h6 className="col-3"><span> <b>Preffered Name</b></span></h6> : <h6 className="col-3"> {this.props.preferredName}</h6>{(this.props.loggedInUserRoles.includes("admin") || this.props.employeeId == this.props.loggedInUser) && <span className="col material-icons">
                            <Link to='#' onClick={this.handlePrefferedNameEdit}>
                                <img src={edit} className="img-thumbnail" alt="Listen pronunciation" title="Click to listen pronunciation" /></Link>

                        </span>}
                    </div>}
                    {this.state.preferredNameFlag && <div className="row">
                        <h6 className="col-3"><span> <b>Preffered Name</b></span></h6>  <input className="col-3" type="text" value={this.state.preferredName} name="preferredName" onChange={this.handlePrefferedNameChange} /><span className="col material-icons">
                            <button className="btn btn-primary" onClick={this.handlePrefferedNameSave}>
                                Save</button>

                        </span>
                    </div>}
                    {/* {!this.state.pronounceTypeFlag && <div className="row">
                        <h6 className="col-3"><span> <b>Name pronunciation type</b></span></h6> : <h6 className="col-3"> {this.props.pronounceType == 's' ? "Standard Pronunciation" : "Custom Pronunciation"}</h6>{(this.props.listofRoles.includes("admin") || this.props.employeeId == this.props.loggedInUser) && this.props.pronounceType !== 's' && <span className="col material-icons">
                            <Link to='#' onClick={this.handlePronounceTypeEdit}>
                                <img src={edit} className="img-thumbnail" alt="Listen pronunciation" title="Click to listen pronunciation" /></Link>

                        </span>}
                    </div>}
                    {this.state.pronounceTypeFlag && <div className="row">
                        <h6 className="col-3"><span> <b>Name pronunciation type</b></span></h6>  <select className="col-3" value={this.state.pronounceType} onChange={this.handlePronounceTypeChange}>
                            <option value="s">Standared Pronunciation</option>
                            <option value="ns">Custom Pronounciation</option>
                        </select><span className="col material-icons">
                            <button className="btn btn-primary" onClick={this.handlePronounceTypeSave}>
                                Save</button>

                        </span>
                    </div> } */}
                    <div className="row">
                        <h6 className="col-3"><span> <b>Email</b></span></h6> : <h6 className="col-3"> {this.props.email}</h6>
                    </div>

                    <div className="row">
                        <h6 className="col-3"><span> <b>Address</b></span></h6> : <h6 className="col-3"> {this.props.address}</h6>
                    </div>
                    <div className="row">
                        <h6 className="col-3"><span> <b>Country</b></span></h6> : <h6 className="col-3"> {this.props.country}</h6>
                    </div>
                    <div className="row">
                        <h6 className="col-3"><span> <b>City</b></span></h6> : <h6 className="col-3"> {this.props.city}</h6>
                    </div>
                    <div className="row">
                        <h6 className="col-3"><span> <b>Telephone Number</b></span></h6> : <h6 className="col-3"> {this.props.telephone}</h6>
                    </div>
                </div>

            </div>}
        </div>
        );
    }

}
function mapStateToProps(state) {
    return {
        ...state.user
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ ...loginActions }, dispatch);
}
export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(UserProfile));