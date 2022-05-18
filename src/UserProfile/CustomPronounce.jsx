import React from "react";
//import { ReactMediaRecorder } from "react-media-recorder";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { injectIntl } from "react-intl";
import { Route, Routes, Link } from "react-router-dom";
import * as loginActions from '../services/action/loginActions';
import MediaStreamRecorder from "msr";
import search from '../Asserts/Images/search.png';
import 'bootstrap/dist/css/bootstrap.css';
import './css/userProfile.css';

const mediaConstraints = {
    audio: true
};
export class CustomPronounce extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            originalAudio: "",
            synthesizedAudio: this.props.aiVoice,
            speed: "normal",
            audioType: "",
            enableAudioSeletion: false,
            buttonEnable: false,
            enableMsg: false,
            region: "",
            mediaStream: "",
            status: "Please start recording",
            gender: '',
            enableGenderSeletion: false,
            enableRegionSeletion: false,
            enableRecording: false,
            defaultStopFlag: true
        }
    }

    async componentDidMount() {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        // show it to user
        const mediaRecorder = new MediaStreamRecorder(stream);
        mediaRecorder.mimeType = 'audio/wav'; // check this line for audio/wav
        mediaRecorder.ondataavailable = (blob) => {
            new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(blob);

                reader.onload = () => resolve(reader.result);

                reader.onerror = reject;
            }).then(result => this.setState({ originalAudio: result, enableAudioSeletion: true, enableMsg: false }, this.props.fetchConertedAudio({
                country:this.state.region,
                employeeId:this.props.employeeId,
                speed:this.state.speed,
                gender:this.state.gender,
                audio:result
            },this.props.authToken)));

        };
        this.setState({ mediaStream: mediaRecorder });

    }

    handleSpeedchange = (e) => {
        this.setState({ speed: e.target.value, enableGenderSeletion: true });
        console.log(e.target.value);
    }

    handleGenderchange = (e) => {
        this.setState({ gender: e.target.value, enableRegionSeletion: true });
    }

    handleAudioTypechange = (e) => {
        this.setState({ audioType: e.target.value, buttonEnable: true });

    }

    handleTryAgain = () => {
        this.setState({ originalAudio: "", buttonEnable: false, status: "Please start recording", defaultStopFlag: true });
    }

    handleRegionchange = (e) => {
        this.setState({ region: e.target.value, enableMsg: true, enableRecording: true });
    }
    handleSubmit = () => {
        const audioType = this.state.audioType;
        this.setState({ submit: true }, this.props.submitUserPreference({
            employeeId: this.props.employeeId,
            audio: audioType == 'original' ? this.props.userVoice : this.props.aiVoice
        },this.props.authToken));
        this.props.handleRecordEdit();
    }
    // onMediaSuccess = () =>{
    //     const mediaRecorder = new MediaStreamRecorder(stream);
    //     mediaRecorder.mimeType = 'audio/wav'; // check this line for audio/wav
    //     mediaRecorder.ondataavailable = function (blob) {
    //         console.log(blob);
    //         new Promise((resolve, reject) => {
    //             const reader = new FileReader();
    //             reader.readAsDataURL(blob);

    //             reader.onload = () =>
    //                 resolve(reader.result);
    //             reader.onerror = reject;
    //         }).then(result => this.setState({ originalAudio: result, enableAudioSeletion: true, enableMsg: false }, this.props.fetchConertedAudio(result)));



    //         // POST/PUT "Blob" using FormData/XHR2
    //         // var blobURL = URL.createObjectURL(blob);
    //         // document.write('<a href="' + blobURL + '">' + blobURL + '</a>');
    //     };
    //     this.setState({mediaStream:mediaRecorder,status:"Recording..."},()=>mediaRecorder.start(3000));
    //     //mediaRecorder.start(3000);
    //  }
    //  onMediaError=(e)=>{
    //     console.error('media error', e);
    // }
    startRecording = (e) => {
        e.preventDefault();
        if (this.state.mediaStream) {

            this.state.mediaStream.start(3000);
            this.setState({ status: "Recording..." });
        }
    }
    stopRecording = (e) => {
        e.preventDefault();
        if (this.state.mediaStream) {

            this.state.mediaStream.stop();
            this.setState({ status: "Recording Stopped", enableMsg: false, defaultStopFlag: false });
        }

    }



    render() {
        return (<div>


            {(!this.state.originalAudio && this.state.enableRecording) &&


                <div class="card w-50 record_panel">
                    <div class="card-body">
                        <h5 class="card-title"><b>Record custom pronunciation</b></h5><hr></hr>

                        <p class="card-text"><b>{this.state.status}</b></p>
                        <div className="row">
                            <div className="col-5">
                                <button className="btn btn-primary" onClick={this.startRecording}>Start Recording</button>
                            </div>
                            <div className="col">
                                <button className="col btn btn-primary" onClick={this.stopRecording} >Stop Recording</button>
                            </div>
                        </div>
                    </div>
                </div>


                //     )}
                // />
            }

            <br></br>
            <div className="card w-40 form_panel">
                <div className="card-body">
                    <h5 className="card-title"><b>Custom pronunciation form</b></h5><hr></hr>
                    <form onSubmit={this.handleSubmit} >
                        <select className="form-select" aria-label="Default select example" onChange={this.handleSpeedchange} required>
                            <option selected>Select audio speed</option>
                            <option value="normal">Normal</option>
                            <option value="fast">Fast</option>
                            <option value="slow">Slow</option>
                        </select>
                        <br></br>
                        {(this.state.enableGenderSeletion) && <select className="form-select" aria-label="Default select example" onChange={this.handleGenderchange} required>
                            <option selected>Select audio gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>}
                        <br></br>
                        {(this.state.enableRegionSeletion) && <select className="form-select" aria-label="Default select example" onChange={this.handleRegionchange}>
                            <option selected>Select Prefered region</option>
                            <option value="Afghanistan">Afghanistan</option>
                            <option value="Algeria">Algeria</option>
                            <option value="Argentina">Argentina</option>
                            <option value="Australia">Australia</option>
                            <option value="Austria">Austria</option>
                            <option value="Bahrain">Bahrain</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Belgium">Belgium</option>
                            <option value="Bolivia">Bolivia</option>
                            <option value="Brazil">Brazil</option>
                            <option value="Bulgaria">Bulgaria</option>
                            <option value="Cambodia">Cambodia</option>
                            <option value="Canada">Canada</option>
                            <option value="Cantonese">Cantonese</option>
                            <option value="Chile">Chile</option>
                            <option value="Colombia">Colombia</option>
                            <option value="Croatia">Croatia</option>
                            <option value="Cuba">Cuba</option>
                            <option value="Czech">Czech</option>
                            <option value="Denmark">Denmark</option>
                            <option value="Ecuador">Ecuador</option>
                            <option value="Egypt">Egypt</option>
                            <option value="Estonia">Estonia</option>
                            <option value="Ethiopia">Ethiopia</option>
                            <option value="Finland">Finland</option>
                            <option value="France">France</option>
                            <option value="Germany">Germany</option>
                            <option value="Greece">Greece</option>
                            <option value="Guatemala">Guatemala</option>
                            <option value="Honduras">Honduras</option>
                            <option value="Hongkong">Hongkong</option>
                            <option value="Hungary">Hungary</option>
                            <option value="Iceland">Iceland</option>
                            <option value="India">India</option>
                            <option value="Indonesia">Indonesia</option>
                            <option value="Iran">Iran</option>
                            <option value="Iraq">Iraq</option>
                            <option value="Ireland">Ireland</option>
                            <option value="Israel">Israel</option>
                            <option value="Italy">Italy</option>
                            <option value="Japan">Japan</option>
                            <option value="Jordan">Jordan</option>
                            <option value="Kazakhstan">Kazakhstan</option>
                            <option value="Kenya">Kenya</option>
                            <option value="Korea">Korea</option>
                            <option value="Kuwait">Kuwait</option>
                            <option value="Laos">Laos</option>
                            <option value="Latvia">Latvia</option>
                            <option value="Libya">Libya</option>
                            <option value="Lithuania">Lithuania</option>
                            <option value="Malaysia">Malaysia</option>
                            <option value="Malta">Malta</option>
                            <option value="Chaina">Chaina</option>
                            <option value="Mexico">Mexico</option>
                            <option value="Morocco">Morocco</option>
                            <option value="Myanmar">Myanmar</option>
                            <option value="Netherlands">Netherlands</option>
                            <option value="New Zealand">New Zealand</option>
                            <option value="Nicaragua">Nicaragua</option>
                            <option value="Nigeria">Nigeria</option>
                            <option value="Pakistan">Pakistan</option>
                            <option value="Panama">Panama</option>
                            <option value="Paraguay">Paraguay</option>
                            <option value="Peru">Peru</option>
                            <option value="Philippines">Philippines</option>
                            <option value="Poland">Poland</option>
                            <option value="Portugal">Portugal</option>
                            <option value="Puerto Rico">Puerto Rico</option>
                            <option value="Qatar">Qatar</option>
                            <option value="Romania">Romania</option>
                            <option value="Russia">Russia</option>
                            <option value="Saudi Arabia">Saudi Arabia</option>
                            <option value="Serbia, Cyrillic">Serbia, Cyrillic</option>
                            <option value="Singapore">Singapore</option>
                            <option value="Slovakia">Slovakia</option>
                            <option value="Slovenia">Slovenia</option>
                            <option value="Somalia">Somalia</option>
                            <option value="South Africa">South Africa</option>
                            <option value="Spain">Spain</option>
                            <option value="Sri Lanka">Sri Lanka</option>
                            <option value="Sweden">Sweden</option>
                            <option value="Switzerland">Switzerland</option>
                            <option value="Syria">Syria</option>
                            <option value="Taiwanese Mandarin">Taiwanese Mandarin</option>
                            <option value="Tanzania">Tanzania</option>
                            <option value="Thailand">Thailand</option>
                            <option value="Tunisia">Tunisia</option>
                            <option value="Turkey">Turkey</option>
                            <option value="Ukraine">Ukraine</option>
                            <option value="United Arab Emirates">United Arab Emirates</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="United States">United States</option>
                            <option value="Uruguay">Uruguay</option>
                            <option value="Uzbekistan">Uzbekistan</option>
                            <option value="Venezuela">Venezuela</option>
                            <option value="Vietnam">Vietnam</option>
                            <option value="Yemen">Yemen</option>
                        </select>}

                        <br></br>
                        {this.state.enableMsg && <h6><b>Record your name in the right side panel</b></h6>}
                        {(this.state.enableAudioSeletion) && <select className="form-select" aria-label="Default select example" onChange={this.handleAudioTypechange}>
                            <option selected>Select Audio Type</option>
                            <option value="original">Original</option>
                            <option value="synthesized">Synthesized</option>
                        </select>}
                        <br></br>

                        {/* {this.state.buttonEnable && <Link to="/namePronounce/profile" className="btn btn-primary"  onClick={this.handleSubmit}>Submit</Link>} */}
                        <button className="btn btn-primary btn-block" disabled={!this.state.buttonEnable}>
                            {this.state.loading && (
                                <span className="spinner-border spinner-border-sm"></span>
                            )}

                            <span>Submit</span>
                        </button>


                    </form>
                </div>
            </div>
            {this.state.originalAudio &&
                <div className="card w-50 record_panel">
                    <div className="card-body">
                        <h5 className="card-title"><b>Custom Audio Panel</b></h5><hr></hr>
                        <div className="row">

                            <h6 className="col-4">Original audio:</h6>


                            <audio className="col" src={this.state.originalAudio} controls />
                        </div><br></br>
                        <div className="row">
                            <h6 className="col-4">Synthesized audio:</h6>

                            <audio className="col" src={this.props.aiVoice} controls autoPlay />

                        </div>
                        <div className="row">
                            <div className="col-5">
                                <button className="btn btn-primary" onClick={this.handleTryAgain}>Try again</button>
                            </div>
                        </div>
                    </div>
                </div>

            }


        </div>);
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
export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(CustomPronounce));