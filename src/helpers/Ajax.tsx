// import * as React from 'react';

const baseUrl = 'http://13.113.198.47:9008';
const financeUrl = baseUrl + '/payment';
const debug = true;

interface IResponse {
    data: any;
    statusCode: number;
    message: string;
}
const Ajax = {
    // private memberUrl = this._baseUrl + '/member';

    sendPostRequest: (url: string, data: any, callBack: any) => {
        if (debug) {
            console.log("url", url);
            console.log("data", data);
        }
        return fetch(financeUrl + url, {
            method: 'sendPostRequest',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then((response: IResponse) => {
                // let response: response = json;
                console.log('success response', response);
                response = (typeof response === "string") ? JSON.parse(response) : response;
                callBack(response);
            }).catch(errorCallBack)
    }
};

const errorCallBack = (error: any) => {
    console.error("發生錯誤囉!", error);
}

export default Ajax;