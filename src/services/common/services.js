import axios from 'axios';

const COMMON_METHODS = {
    doAjaxCall: config => {
        const options = {
            method: config.methodType,
            url: config.url,
            headers: config.auth ? {
                "Content-Type": "application/json",
                "Authorization": config.auth
            } :  {
                "Content-Type": "application/json"
            },
            data: config.methodType == "POST" ?  config.dataToSend : {},
        };
        if(config.methodType !== "POST"){
            options.params = config.dataToSend
        }
        return axios(options);
    },

    serviceURLs: ()=> {
        const urls = {
            "authLoginDetails":"https://name-pronunciation-service.azurewebsites.net/authenticate",
            "getEmployeeDetails":"https://name-pronunciation-service.azurewebsites.net/user/getEmployee",
            "getSpeachDetails":"https://name-pronunciation-service.azurewebsites.net/pronounceName",
            "getConvertedSpeachDetails": "https://name-pronunciation-service.azurewebsites.net/customPronounceName",
            "submitSpeachDetails":"https://name-pronunciation-service.azurewebsites.net/updateAudio",
            "getAllEmployees":"https://name-pronunciation-service.azurewebsites.net/user/getAllEmployees",
            "resetAudio":"https://name-pronunciation-service.azurewebsites.net/resetAudio"
        }
        return urls;
    }
};

export default COMMON_METHODS;