import COMMON_METHODS from "../common/services";
import { login } from "../../features/user";


const authonticateLoginDetailsSuccessAction = resp => ({
    type: "AUTH_LOGIN_DETAILS_SUCCESS",
    payload: { resp }
});

const getEmployeeDetailsSuccessAction = resp => ({
    type: "FETCH_USER_DETAILS_SUCCESS",
    payload: { resp }
});

const getEmployeeDetailsFailureAction = error => ({
    type: "FETCH_USER_DETAILS_ERROR",
    payload: { error }
});

const userAudioConverterSuccessAction = (resp,userAudio) => {
    resp.userVoice=userAudio;
    return ({
    type: "USER_AUDIO_CONVERT_SUCCESS",
    payload: { resp }
})}
const userAudioConverterFailureAction = (error) => {
    return ({
    type: "USER_AUDIO_CONVERT_FAILURE",
    payload: { error }
})}


const authonticateLoginDetailsFailureAction = error => ({
    type: "AUTH_LOGIN_DETAILS_ERROR",
    payload: { error }
});

const submitSpeachDetailsSuccessAction = resp => ({
    type: "SUBMIT_SPEACH_DETAILS_SUCCESS",
    payload: { resp }
});

const submitSpeachDetailsFailureAction = error => ({
    type: "SUBMIT_SPEACH_DETAILS_ERROR",
    payload: { error }
});

const userNamePronounceSuccessAction = (resp,preferredName,updateFlag) => {
    resp.preferredName=preferredName;
    resp.updateFlag=updateFlag;
    return ({
    type: "USER_NAME_PRONOUNCE_SUCCESS",
    payload: { resp }
})};

const userNamePronounceFailureAction = error => ({
    type: "USER_NAME_PRONOUNCE_ERROR",
    payload: { error }
});

const getAllEmployeeDetailsSuccessAction = resp =>({
    type: "GET_ALL_EMPLOYEE_SUCCESS",
    payload: { resp }
});
const getAllEmployeeDetailsFailureAction = error =>({
    type: "GET_ALL_EMPLOYEE_ERROR",
    payload: { error }
});

const getAutoEmployeeDetailsSuccessAction = resp =>({
    type: "AUTO_SEARCH_SELECT_SUCCESS",
    payload: { resp }
});

const getLogoutAction = () => ({
    type: "LOG_OUT_SUCCESS"
});

const stopPlayAudioAction =() => ({
    type: "STOP_PLAY_AUDIO_SUCCESS"
});

const restAudioActionSuccessAction = (resp) => ({

    type: "REST_AUDIO_SUCCESS"

});

const restAudioActionFailureAction = (error) => ({

    type: "REST_AUDIO_ERROR"

});

export function selectedEmployee(resp) {
    return dispatch =>  dispatch(login(getAutoEmployeeDetailsSuccessAction(resp)));
};

export function userLogout() {
    return dispatch =>  dispatch(login(getLogoutAction()));
};

export function stopPlayAudio(){
    return dispatch =>  dispatch(login(stopPlayAudioAction()));
}

export function authonticateLoginDetails(params){
    return dispatch => {
        const config = {
            url: COMMON_METHODS.serviceURLs().authLoginDetails,
            methodType: "POST",
            dataToSend: params
        };
        const _request = COMMON_METHODS.doAjaxCall(config);
        _request.then(response => {
            response = response.data;
            dispatch(login(authonticateLoginDetailsSuccessAction(response)));
        }).catch(error => dispatch(login(authonticateLoginDetailsFailureAction(error))));
    };
}

export function getEmployeeDetails(empid,header){
    const finalUrl = COMMON_METHODS.serviceURLs().getEmployeeDetails + "/"+empid;
    return dispatch => {
        const config = {
            url: finalUrl,
            methodType: "GET",
            dataToSend: {},
            auth: header
        };
        const _request = COMMON_METHODS.doAjaxCall(config);
        _request.then(response => {
            response = response.data;
            dispatch(login(getEmployeeDetailsSuccessAction(response)));
        }).catch(error => dispatch(login(getEmployeeDetailsFailureAction(error))));
    };
}

export function fetchConertedAudio(params,header){
    console.log("Original Audio:"+params.audio)
    return dispatch => {
        const config = {
            url: COMMON_METHODS.serviceURLs().getConvertedSpeachDetails,
            methodType: "POST",
            dataToSend: params,
            auth: header
        };
        const _request = COMMON_METHODS.doAjaxCall(config);
        _request.then(response => {
            response = response.data;
            dispatch(login(userAudioConverterSuccessAction(response,params.audio)));
        }).catch(error => {dispatch(login(userAudioConverterFailureAction(error)))});
    };
}

export function fetchNamePronunce(params,header,updateFlag){
    return dispatch => {
        const config = {
            url: COMMON_METHODS.serviceURLs().getSpeachDetails,
            methodType: "POST",
            dataToSend: params,
            auth: header
        };
        const _request = COMMON_METHODS.doAjaxCall(config);
        _request.then(response => {
            response = response.data;
            dispatch(login(userNamePronounceSuccessAction(response,params.preferredName,updateFlag)));
        }).catch(error => {dispatch(login(userNamePronounceFailureAction(error)))});
    };
}

export function submitUserPreference(params,header){
    return dispatch => {
        const config = {
            url: COMMON_METHODS.serviceURLs().submitSpeachDetails,
            methodType: "POST",
            dataToSend: params,
            auth: header
        };
        const _request = COMMON_METHODS.doAjaxCall(config);
        _request.then(response => {
            response = response.data;
            dispatch(login(submitSpeachDetailsSuccessAction(response)));
        }).catch(error => dispatch(login(submitSpeachDetailsFailureAction(error))));
    };
}

export function getAllEmployee(header){
    return dispatch => {
        const config = {
            url: COMMON_METHODS.serviceURLs().getAllEmployees,
            methodType: "POST",
            dataToSend: {},
            auth: header
        };
        const _request = COMMON_METHODS.doAjaxCall(config);
        _request.then(response => {
            response = response.data;
            dispatch(login(getAllEmployeeDetailsSuccessAction(response)));
        }).catch(error => dispatch(login(getAllEmployeeDetailsFailureAction(error))));
    };
}

export function resetAudio(empId,header){
    const finalUrl = COMMON_METHODS.serviceURLs().resetAudio + "/"+empId;
    return dispatch => {
        const config = {
            url: finalUrl,
            methodType: "GET",
            dataToSend: {},
            auth: header
        };
        const _request = COMMON_METHODS.doAjaxCall(config);
        _request.then(response => {
            response = response.data;
            dispatch(login(restAudioActionSuccessAction(response)));
        }).catch(error => dispatch(login(restAudioActionFailureAction(error))));
    };
}

