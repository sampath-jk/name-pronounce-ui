import React, { createRef } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { injectIntl } from "react-intl";
// import Form from "react-validation/build/form";
// import Input from "react-validation/build/input";
// import CheckButton from "react-validation/build/button";
import { Route, Routes, Link, Navigate } from "react-router-dom";
import logo from '../Asserts/Images/profile_avatar.png';
import slide1 from '../Asserts/Images/speech_Synthesis.jpeg';
import slide2 from '../Asserts/Images/speech_Synthesis2.jpeg';
import slide3 from '../Asserts/Images/speech_Synthesis3.jpeg';
import 'bootstrap/dist/css/bootstrap.css';
import UserProfile from "../UserProfile/UserProfile";
import Carousel from 'react-bootstrap/Carousel';
import * as loginActions from '../services/action/loginActions';
import { history } from "../services/common/history";
import "../App.css";


export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loading: false,
      loginSuccess: this.props.user.loginSuccess ? this.props.user.loginSuccess : false
    }
    this.form = createRef();
    this.checkBtn = createRef();
  }

  onChangeUsername = (e) => {
    const username = e.target.value;
    this.setState({ username: username })
  };
  onChangePassword = (e) => {
    const password = e.target.value;
    this.setState({ password: password })
  };
  required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };
  handleLogin = (e) => {
    e.preventDefault();
    //this.setState({ loading: true });
    // form.current.validateAll();
    this.setState({ loading: false },this.props.authonticateLoginDetails({ userName: this.state.username, password: this.state.password }));
     this.setState({username:'',password:''});
   // }
    // if (checkBtn.current.context._errors.length === 0) {
    //   dispatch(login(username, password))
    //     .then(() => {
    //       props.history.push("/profile");
    //       window.location.reload();
    //     })
    //     .catch(() => {
    //         this.setState({loading: false});
    //     });
    // } else {
    //     this.setState({loading: false});
    // }
  };

  render() {

    return (<div>
      {!this.props.user.loginSuccess ?
      <React.Fragment>
      <div style={{ display: 'inline-block', width: 650, padding: 30 }}>
        <h4>Name Pronunciation Speech Synthesis Technology</h4>
        <Carousel>
          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
              src={slide1}
              alt="Image One"
              height={400}
            />
            <Carousel.Caption>
              <h4>Your name - Your style</h4>
              <p>Pronounce your name in your own sytle</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
              src={slide2}
              alt="Image Two"
              height={400}
            />
            <Carousel.Caption>
              <h4>You record - We remember</h4>
              <p>Record your specific pronunciation</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
              src={slide3}
              alt="Image Two"
              height={400}
            />
            <Carousel.Caption>
              <h4>Any name - Any region</h4>
              <p>Pronounce your colleges name correclty</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div style={{ float: "right" }}>
        <div className="col-xl-12">
          <div className="card card-container">
            <img
              src={logo}
              alt="profile-img"
              className="profile-img-card"
            />
            <form onSubmit={this.handleLogin} ref={this.form}>
            
                {this.props.user.showErrorMsg && <p style={{color:"red"}}>{this.props.user.showErrorMsg}</p>}
                
              
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  value={this.state.username}
                  onChange={this.onChangeUsername}
                  validations={[this.required]}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={this.state.password}
                  onChange={this.onChangePassword}
                  validations={[this.required]}
                />
              </div>
              <div className="form-group">
                <br></br>
                <button  className="btn btn-primary btn-block" disabled={this.state.loading}>
                  {this.state.loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}

                  <span>Login</span>
                </button>
              </div>
              {/* {message && (
             <div className="form-group">
               <div className="alert alert-danger" role="alert">
                 {message}
               </div>
             </div>
           )} */}
              {/* <CheckButton style={{ display: "none" }} ref={this.checkBtn} /> */}
            </form>
          </div>
        </div>
      </div>
      </React.Fragment> : <UserProfile />}
    </div>)
  };


}
function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...loginActions }, dispatch);
}
export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(Login))