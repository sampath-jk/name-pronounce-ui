import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        firstName: '',
        lastName: '',
        role: '',
        employeeId: '',
        email: '',
        country: '',
        city: '',
        address: '',
        userVoice: '',
        aiVoice: '',
        voiceSelectionFlag: '',
        listofRoles: [],
        loginSuccess: false,
        successMSG: "",
        errorMSG: "",
        customFlag: false,
        preferredName: '',
        telephone: '',
        authToken: '',
        userName: '',
        showErrorMsg: '',
        convertionErrorMsg: '',
        loggedInUser: '',
        loggedInUserRoles:[],
        nameAudio: '',
        nameAudioErrorMsg: '',
        pronounceType: 's',
        empList: [],
        playAudio:false
    },

    reducers: {
        login: (state, action) => {
            console.log(state);
            console.log(action);
            switch (action.payload.type) {

                case "AUTH_LOGIN_DETAILS_SUCCESS":

                    return {
                        ...state,
                        authToken: action.payload.payload.resp.data.token,
                        employeeId: action.payload.payload.resp.data.employeeId,
                        loginSuccess: true,
                        showErrorMsg: '',
                        loggedInUser: action.payload.payload.resp.data.employeeId,
                        successMSG: ''

                    };
                case "AUTH_LOGIN_DETAILS_ERROR":

                    return {
                        ...state,
                        showErrorMsg: "Authuntication failed. Please try again with valid credentials.",
                        loginSuccess: false,
                        successMSG: ''
                    };

                case "FETCH_USER_DETAILS_ERROR":

                    return {
                        ...state,
                        loginSuccess: false,
                        successMSG: ''
                    };

                case "FETCH_USER_DETAILS_SUCCESS":

                    return {
                        ...state,
                        firstName: action.payload.payload.resp.data.firstName,
                        lastName: action.payload.payload.resp.data.lastName,
                        listofRoles: action.payload.payload.resp.data.roles ? [...action.payload.payload.resp.data.roles] : [],
                        employeeId: action.payload.payload.resp.data.employeeId,
                        email: action.payload.payload.resp.data.email,
                        preferredName: action.payload.payload.resp.data.preferredName,
                        country: action.payload.payload.resp.data.country,
                        address: action.payload.payload.resp.data.address,
                        city: action.payload.payload.resp.data.city,
                        telephone: action.payload.payload.resp.data.telephone,
                        pronounceType: action.payload.payload.resp.data.pronounceType,
                        loggedInUserRoles: state.loggedInUser == action.payload.payload.resp.data.employeeId ? [...action.payload.payload.resp.data.roles] : [...state.loggedInUserRoles],
                        loginSuccess: true,
                        successMSG: ''


                    };

                case "USER_AUDIO_CONVERT_SUCCESS":
                    return {
                        ...state,
                        aiVoice: action.payload.payload.resp.data.audio,
                        userVoice: action.payload.payload.resp.userVoice,
                        convertionErrorMsg: '',


                    };
                case "USER_AUDIO_CONVERT_ERROR":
                    return {
                        ...state,
                        convertionErrorMsg: "User audio convertion failed."

                    };
                case "CHANGE_CUSTOM_FLG":
                    return {
                        ...state,
                        customFlag: true,
                        successMSG: ''
                    };
                case "SUBMIT_SPEACH_DETAILS_SUCCESS":
                    return {
                        ...state,
                        successMSG: action.payload.payload.resp.message,
                        customFlag: false
                    };
                case "USER_NAME_PRONOUNCE_SUCCESS":
                    return {
                        ...state,
                        nameAudio: action.payload.payload.resp.data.audio,
                        nameAudioErrorMsg: '',
                        preferredName: action.payload.payload.resp.preferredName ? action.payload.payload.resp.preferredName : state.preferredName,
                        successMSG: action.payload.payload.resp.updateFlag ? "Updated Successfully" : '',
                        playAudio: true
                    };
                case "USER_NAME_PRONOUNCE_ERROR":
                    return {
                        ...state,
                        nameAudio: action.payload.payload.resp.audio,
                        nameAudioErrorMsg: "Something went wrong. Please try again.",
                        playAudio:false
                    };
                case "GET_ALL_EMPLOYEE_SUCCESS":
                    return {
                        ...state,
                        empList: [...action.payload.payload.resp.data],
                        successMSG: ''
                    };
                case "GET_ALL_EMPLOYEE_ERROR":
                    return {
                        ...state,
                        empList: []
                    };

                case "AUTO_SEARCH_SELECT_SUCCESS":

                    return {
                        ...state,
                        firstName: action.payload.payload.resp[0].firstName,
                        lastName: action.payload.payload.resp[0].lastName,
                        listofRoles: action.payload.payload.resp[0].roles ? [...action.payload.payload.resp[0].roles] : [],
                        employeeId: action.payload.payload.resp[0].employeeId,
                        email: action.payload.payload.resp[0].email,
                        preferredName: action.payload.payload.resp[0].preferredName,
                        country: action.payload.payload.resp[0].country,
                        address: action.payload.payload.resp[0].address,
                        city: action.payload.payload.resp[0].city,
                        telephone: action.payload.payload.resp[0].telephone,
                        pronounceType: action.payload.payload.resp[0].pronounceType,
                        successMSG: ''


                    };
                case "STOP_PLAY_AUDIO_SUCCESS":
                    return {
                        ...state,
                        playAudio:false
                    };

                case "REST_AUDIO_SUCCESS":
                    return {
                        ...state,
                        successMSG: "Updated Successfully"
                    };

                case "REST_AUDIO_ERROR":
                    return {
                        ...state,
                        successMSG: ""
                    };
                case "LOG_OUT_SUCCESS":
                    return {
                        firstName: '',
                        lastName: '',
                        role: '',
                        employeeId: '',
                        email: '',
                        country: '',
                        city: '',
                        address: '',
                        userVoice: '',
                        aiVoice: '',
                        voiceSelectionFlag: '',
                        listofRoles: [],
                        loginSuccess: false,
                        successMSG: "",
                        errorMSG: "",
                        customFlag: false,
                        preferredName: '',
                        telephone: '',
                        authToken: '',
                        userName: '',
                        showErrorMsg: '',
                        convertionErrorMsg: '',
                        loggedInUser: '',
                        nameAudio: '',
                        nameAudioErrorMsg: '',
                        pronounceType: 's',
                        empList: []
                    };
                default:
                    return { ...state };
            }
        }
    }
});

export const { login } = userSlice.actions;

export default userSlice.reducer;

